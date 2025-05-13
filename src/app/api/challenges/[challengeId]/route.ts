import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { evaluateUnlockConditions } from '@/lib/challenges';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ challengeId: string }> }
) {
  const { challengeId } = await params;
  try {
    const session = await getServerSession(authOptions);

    const challenge = await prisma.challenge.findUnique({
      where: {
        id: challengeId
      },
      include: {
        files: true,
        hints: true,
        unlockConditions: true,
        flags: true,
        submissions: {
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

    if (!challenge) {
      return NextResponse.json(
        { error: 'Challenge not found' },
        { status: 404 }
      );
    }

    // Fetch all correct submissions for the team to check CHALLENGE_SOLVED conditions
    const teamSolves = session?.user?.teamId ? await prisma.submission.findMany({
      where: {
        teamId: session.user.teamId,
        isCorrect: true,
      },
      select: {
        challengeId: true,
      }
    }) : [];

    const solvedChallengeIds = new Set(teamSolves.map(solve => solve.challengeId));

    // Fetch Game Config (assuming only one active config)
    const gameConfig = await prisma.gameConfig.findFirst({
        where: { isActive: true },
    });

    // Evaluate unlock conditions
    const { isUnlocked, reason } = evaluateUnlockConditions(
        challenge.unlockConditions,
        solvedChallengeIds,
        gameConfig
    );

    // Decide what to return based on unlock status
    if (!isUnlocked) {
        // Option 1: Return minimal data for locked challenges
        return NextResponse.json({
            id: challenge.id,
            title: challenge.title,
            points: challenge.points,
            category: challenge.category,
            difficulty: challenge.difficulty,
            isLocked: true,
            unlockReason: reason
        });
        // Option 2: Return 403 Forbidden (or 404 Not Found)
        // return NextResponse.json({ error: 'Challenge locked', reason }, { status: 403 });
    }

    // Get set of solved flag IDs for this challenge
    const solvedFlagIds = new Set(challenge.submissions.map(sub => sub.flagId));

    // Check if user's team has solved this challenge
    const userTeamSolved = session?.user?.teamId && challenge.submissions.some(sub => sub.teamId === session.user.teamId);

    // Transform the challenge to include isSolved and solvedByTeamId
    const transformedChallenge = {
      ...challenge,
      flag: undefined,
      flags: challenge.multipleFlags ? challenge.flags.map(flag => ({
        id: flag.id,
        points: flag.points,
        isSolved: solvedFlagIds.has(flag.id)
      })) : undefined,
      isSolved: challenge.multipleFlags 
        ? solvedFlagIds.size === challenge.flags.length 
        : challenge.submissions.length > 0,
      solvedByTeamId: challenge.submissions[0]?.teamId,
      submissions: undefined,
      unlockConditions: undefined,
      isUnlocked: true,
      solveExplanation: userTeamSolved ? challenge.solveExplanation : undefined
    };

    return NextResponse.json(transformedChallenge);
  } catch (error) {
    console.error('Error fetching challenge:', error);
    return NextResponse.json(
      { error: 'Failed to fetch challenge' },
      { status: 500 }
    );
  }
}