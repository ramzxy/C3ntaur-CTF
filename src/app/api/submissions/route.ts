import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const SUBMISSION_RATE_LIMIT_MS = 10_000; // 10 seconds per team per challenge

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has a team
    if (!session.user.teamId) {
      return NextResponse.json(
        { error: 'You must be part of a team to submit flags' },
        { status: 403 }
      );
    }

    const teamId = session.user.teamId; // Store teamId in a variable to ensure it's not undefined

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
          { error: "The competition hasn't started yet. Please check back later." },
          { status: 403 }
        );
      }
      
      // Only check for end time if this is not an infinite competition
      if (gameConfig.endTime !== null) {
        const gameEnded = new Date(gameConfig.endTime) <= now;
        
        // If game has ended, reject submissions
        if (gameEnded) {
          return NextResponse.json(
            { error: "The competition has ended. Flag submissions are no longer accepted." },
            { status: 403 }
          );
        }
      }
    }

    const { challengeId, flag } = await request.json();

    if (!challengeId || !flag) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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
        flags: true,
        multipleFlags: true,
        isLocked: true,
      },
    });

    if (!challenge) {
      return NextResponse.json(
        { error: 'Challenge not found' },
        { status: 404 }
      );
    }

    // Check if the challenge is locked
    if (challenge.isLocked && !session.user.isAdmin) {
      return NextResponse.json(
        { error: 'This challenge is locked. Complete previous challenges to unlock it.' },
        { status: 403 }
      );
    }

    // Check if the user has a team
    if (!session.user.teamId) {
      return NextResponse.json(
        { error: 'You must be part of a team to submit flags' },
        { status: 403 }
      );
    }

    // Check if the team/user has already solved all flags for this challenge
    const existingSubmissions = await prisma.submission.findMany({
      where: {
        challengeId,
        teamId: session.user.teamId ? session.user.teamId : "",
        isCorrect: true,
      },
      select: {
        flagId: true
      }
    });

    // For multiple flags challenges, check if all flags have been solved
    if (challenge.multipleFlags) {
      const solvedFlagIds = new Set(existingSubmissions.map(sub => sub.flagId));
      if (solvedFlagIds.size === challenge.flags.length) {
        return NextResponse.json(
          { error: 'All flags for this challenge have been solved' },
          { status: 400 }
        );
      }
    } else if (existingSubmissions.length > 0) {
      // For single flag challenges, check if it's already solved
      return NextResponse.json(
        { error: 'Challenge already solved' },
        { status: 400 }
      );
    }

    // Rate limit incorrect submissions per team for this challenge
    const lastSubmission = await prisma.submission.findFirst({
      where: {
        teamId,
        challengeId,
      },
      orderBy: { createdAt: 'desc' },
    });

    if (
      lastSubmission &&
      !lastSubmission.isCorrect &&
      now.getTime() - lastSubmission.createdAt.getTime() < SUBMISSION_RATE_LIMIT_MS
    ) {
      const wait = Math.ceil(
        (SUBMISSION_RATE_LIMIT_MS - (now.getTime() - lastSubmission.createdAt.getTime())) /
          1000
      );
      return NextResponse.json(
        { error: `Too many attempts. Please wait ${wait}s before trying again.` },
        { status: 429 }
      );
    }

    // Check if the flag is correct
    let isCorrect = false;
    let flagPoints = 0;
    let solvedFlagId = null;

    if (challenge.multipleFlags) {
      // Check against all flags that haven't been solved yet
      const solvedFlagIds = new Set(existingSubmissions.map(sub => sub.flagId));
      for (const challengeFlag of challenge.flags) {
        if (!solvedFlagIds.has(challengeFlag.id) && flag === challengeFlag.flag) {
          isCorrect = true;
          flagPoints = challengeFlag.points;
          solvedFlagId = challengeFlag.id;
          break;
        }
      }
    } else {
      isCorrect = flag === challenge.flag;
      flagPoints = challenge.points;
    }

    // Start a transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Create submission record
      const submission = await tx.submission.create({
        data: {
          userId: session.user.id,
          teamId,
          challengeId,
          flagId: solvedFlagId,
          flag,
          isCorrect,
        },
      });

      if (isCorrect) {
        // Get team for activity log and point history
        const team = await tx.team.findUnique({
          where: { id: teamId },
          select: { name: true, score: true },
        });

        if (!team) {
          throw new Error('Team not found');
        }

        // Create score record
        await tx.score.create({
          data: {
            userId: session.user.id,
            teamId,
            challengeId,
            points: flagPoints,
          },
        });

        // Update team score
        const updatedTeam = await tx.team.update({
          where: { id: teamId },
          data: {
            score: {
              increment: flagPoints,
            },
          },
        });

        // Record point history
        await tx.teamPointHistory.create({
          data: {
            teamId,
            points: flagPoints,
            totalPoints: updatedTeam.score,
            reason: 'CHALLENGE_SOLVE',
            metadata: JSON.stringify({
              challengeId,
              challengeTitle: challenge.title,
              flagId: solvedFlagId,
              points: flagPoints,
              isPartialSolve: challenge.multipleFlags
            })
          }
        });

        // Create activity log for successful challenge completion
        await tx.activityLog.create({
          data: {
            type: 'SUBMISSION',
            description: challenge.multipleFlags 
              ? `Team ${team.name} found a flag in challenge "${challenge.title}" worth ${flagPoints} points`
              : `Team ${team.name} solved challenge "${challenge.title}" for ${flagPoints} points`,
            teamId
          }
        });

        // For single flag challenges or when all flags are found, check for and unlock dependent challenges
        if (!challenge.multipleFlags || existingSubmissions.length + 1 === challenge.flags.length) {
          const dependentChallenges = await tx.unlockCondition.findMany({
            where: {
              type: 'CHALLENGE_SOLVED',
              requiredChallengeId: challenge.id,
            },
            include: {
              challenge: true,
            },
          });

          for (const condition of dependentChallenges) {
            if (condition.challenge.isLocked) {
              // Unlock the dependent challenge
              await tx.challenge.update({
                where: { id: condition.challengeId },
                data: { isLocked: false },
              });

              // Log the unlock in the activity feed
              await tx.activityLog.create({
                data: {
                  type: 'CHALLENGE_UNLOCKED',
                  description: `Challenge "${condition.challenge.title}" has been unlocked by solving "${challenge.title}"`,
                },
              });
            }
          }
        }

        return { submission, points: flagPoints };
      }

      return { submission, points: 0 };
    });

    return NextResponse.json({
      message: isCorrect ? 'Correct flag!' : 'Incorrect flag',
      isCorrect,
      points: result.points
    });
  } catch (error) {
    console.error('Error submitting flag:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting the flag' },
      { status: 500 }
    );
  }
}