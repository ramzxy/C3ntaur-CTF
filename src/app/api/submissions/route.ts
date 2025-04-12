import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Get current game config
    const gameConfig = await prisma.gameConfig.findFirst({
      where: { isActive: true }
    });

    // Get current time
    const now = new Date();

    // For non-admin users, check if the game time restrictions apply
    if (!session.user.isAdmin && gameConfig) {
      const gameStarted = new Date(gameConfig.startTime) <= now;
      
      // If game hasn't started yet, reject submissions
      if (!gameStarted) {
        return NextResponse.json(
          { message: "The competition hasn't started yet. Please check back later." },
          { status: 403 }
        );
      }
      
      // Only check for end time if this is not an infinite competition
      if (gameConfig.endTime !== null) {
        const gameEnded = new Date(gameConfig.endTime) <= now;
        
        // If game has ended, reject submissions
        if (gameEnded) {
          return NextResponse.json(
            { message: "The competition has ended. Flag submissions are no longer accepted." },
            { status: 403 }
          );
        }
      }
    }

    const { challengeId, flag } = await request.json();

    if (!challengeId || !flag) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if the challenge exists and get the correct flag
    const challenge = await prisma.challenge.findUnique({
      where: { id: challengeId },
      select: {
        id: true,
        title: true,
        points: true,
        flag: true,
        isLocked: true,
      },
    });

    if (!challenge) {
      return NextResponse.json(
        { message: 'Challenge not found' },
        { status: 404 }
      );
    }

    // Check if the challenge is locked
    if (challenge.isLocked && !session.user.isAdmin) {
      return NextResponse.json(
        { message: 'This challenge is locked. Complete previous challenges to unlock it.' },
        { status: 403 }
      );
    }

    // Check if the team/user has already solved this challenge
    const existingSubmission = await prisma.submission.findFirst({
      where: {
        challengeId,
        teamId: session.user.teamId ? session.user.teamId : "",
        isCorrect: true,
      },
    });

    if (existingSubmission) {
      return NextResponse.json(
        { message: 'Challenge already solved' },
        { status: 400 }
      );
    }

    // Check if the flag is correct
    const isCorrect = flag === challenge.flag;

    // Create submission record
    const submission = await prisma.submission.create({
      data: {
        userId: session.user.id,
        teamId: session.user.teamId ?? "",
        challengeId,
        flag,
        isCorrect,
      },
    });

    if (isCorrect) {
      // Get team name for activity log
      const team = await prisma.team.findUnique({
        where: { id: session.user.teamId },
        select: { name: true },
      });

      // Create score record
      await prisma.score.create({
        data: {
          userId: session.user.id,
          teamId: session.user.teamId ?? "",
          challengeId,
          points: challenge.points,
        },
      });

      // Update team score
      await prisma.team.update({
        where: { id: session.user.teamId },
        data: {
          score: {
            increment: challenge.points,
          },
        },
      });

      // Create activity log for successful challenge completion
      await prisma.activityLog.create({
        data: {
          type: 'SUBMISSION',
          description: `Team ${team?.name} solved challenge "${challenge.title}" for ${challenge.points} points`,
          teamId: session.user.teamId ?? "",
        },
      });

      // Check for and unlock dependent challenges
      const dependentChallenges = await prisma.challengeDependency.findMany({
        where: {
          challengeId: challenge.id,
        },
        include: {
          unlocks: true,
        },
      });

      for (const dependency of dependentChallenges) {
        if (dependency.unlocks.isLocked) {
          // Unlock the dependent challenge
          await prisma.challenge.update({
            where: { id: dependency.unlocksId },
            data: { isLocked: false },
          });

          // Log the unlock in the activity feed
          await prisma.activityLog.create({
            data: {
              type: 'CHALLENGE_UNLOCKED',
              description: `Challenge "${dependency.unlocks.title}" has been unlocked by solving "${challenge.title}"`,
            },
          });
        }
      }
    }

    return NextResponse.json(
      { 
        message: isCorrect ? 'Correct flag!' : 'Incorrect flag',
        isCorrect 
      },
      { status: isCorrect ? 200 : 400 }
    );
  } catch (error) {
    console.error('Error submitting flag:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}