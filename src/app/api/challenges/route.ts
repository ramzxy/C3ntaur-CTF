import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { evaluateUnlockConditions } from '@/lib/challenges';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get current game config
    const gameConfig = await prisma.gameConfig.findFirst({
      where: { isActive: true }
    });

    // Get current time
    const now = new Date();

    // For non-admin users, check if the game has started
    // Admins can always see all challenges
    if (!session.user.isAdmin && gameConfig) {
      const gameStarted = new Date(gameConfig.startTime) <= now;
      
      // If game hasn't started yet, return empty array or a message
      if (!gameStarted) {
        return NextResponse.json({
          message: "The competition hasn't started yet. Please check back later.",
          challenges: []
        });
      }
    }

    const challenges = await prisma.challenge.findMany({
      include: {
        files: true,
        unlockConditions: true,
        flags: true,
        submissions: session.user.isAdmin ? undefined : {
          where: {
            isCorrect: true,
            teamId: session?.user?.teamId || undefined
          },
          select: {
            teamId: true,
            flagId: true
          }
        }
      }
    });

    // Fetch all correct submissions for the team if not admin
    const teamSolves = (!session.user.isAdmin && session?.user?.teamId) ? await prisma.submission.findMany({
        where: {
            teamId: session.user.teamId,
            isCorrect: true,
        },
        select: {
            challengeId: true,
            flagId: true
        }
    }) : [];

    // Create a map of challenge ID to set of solved flag IDs
    const solvedFlagsByChallenge = new Map<string, Set<string>>();
    teamSolves.forEach(solve => {
      const solvedFlags = solvedFlagsByChallenge.get(solve.challengeId) || new Set<string>();
      if (solve.flagId) solvedFlags.add(solve.flagId);
      solvedFlagsByChallenge.set(solve.challengeId, solvedFlags);
    });

    // Process challenges: evaluate unlocks for non-admins, return appropriate data
    const processedChallenges = challenges.map(challenge => {
      // Admins see everything
      if (session.user.isAdmin) {
        // Optionally calculate isSolved for admin view
        // For simplicity, just returning raw data + conditions here
        return {
            ...challenge,
            flag: undefined, // Generally avoid sending flags even to admins in list view
            flags: challenge.flags.map(f => ({ id: f.id, points: f.points })), // Send only id and points
            submissions: undefined, // Don't need submissions list here
            isUnlocked: true // Admins bypass locks
        };
      }

      // Non-admins: Evaluate unlock conditions
      const { isUnlocked, reason } = evaluateUnlockConditions(
        challenge.unlockConditions,
        new Set(teamSolves.map(solve => solve.challengeId)),
        gameConfig
      );

      if (!isUnlocked) {
        // Return minimal data for locked challenges
        return {
          id: challenge.id,
          title: challenge.title,
          points: challenge.points,
          category: challenge.category,
          difficulty: challenge.difficulty,
          isLocked: true,
          unlockReason: reason
        };
      }

      const solvedFlags = solvedFlagsByChallenge.get(challenge.id) || new Set<string>();

      // Return unlocked challenge data (without flag, conditions)
      return {
        id: challenge.id,
        title: challenge.title,
        description: challenge.description,
        points: challenge.points,
        difficulty: challenge.difficulty,
        category: challenge.category,
        files: challenge.files,
        createdAt: challenge.createdAt,
        updatedAt: challenge.updatedAt,
        isUnlocked: true,
        multipleFlags: challenge.multipleFlags,
        flags: challenge.multipleFlags ? challenge.flags.map(flag => ({
          id: flag.id,
          points: flag.points,
          isSolved: solvedFlags.has(flag.id)
        })) : undefined,
        isSolved: challenge.multipleFlags 
          ? solvedFlags.size === challenge.flags.length 
          : challenge.submissions && challenge.submissions.length > 0,
        unlockConditions: undefined // Don't send conditions
      };
    });

    return NextResponse.json(processedChallenges);
  } catch (error) {
    console.error('Error fetching challenges:', error);
    return NextResponse.json(
      { error: 'Error fetching challenges' },
      { status: 500 }
    );
  }
}