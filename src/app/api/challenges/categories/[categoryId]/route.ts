import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const {categoryId} = params;
    const categoryId2 = decodeURIComponent(categoryId);
    
    const challenges = await prisma.challenge.findMany({
      where: {
        category: categoryId2
      },
      select: {
        id: true,
        title: true,
        points: true,
        difficulty: true,
        description: true,
        category: true,
        isLocked: true,
        submissions: {
          where: {
            isCorrect: true
          },
          select: {
            teamId: true,
            team: {
              select: {
                color: true
              }
            }
          }
        }
      }
    });

    // Get solved challenges for the current team if authenticated
    const solvedChallengeIds = new Set();
    if (session?.user?.teamId) {
      const solvedChallenges = await prisma.submission.findMany({
        where: {
          teamId: session.user.teamId,
          isCorrect: true,
        },
        select: {
          challengeId: true,
        },
      });
      solvedChallenges.forEach(sub => solvedChallengeIds.add(sub.challengeId));
    }

    // Transform the challenges to include isSolved based on current team's submissions
    const transformedChallenges = challenges.map(challenge => ({
      id: challenge.id,
      title: challenge.title,
      points: challenge.points,
      difficulty: challenge.difficulty,
      description: challenge.description,
      category: challenge.category,
      isLocked: challenge.isLocked,
      isSolved: solvedChallengeIds.has(challenge.id),
      solvedBy: challenge.submissions.map(sub => ({
        teamId: sub.teamId,
        teamColor: sub.team.color
      }))
    }));

    return NextResponse.json({ challenges: transformedChallenges });
  } catch (error) {
    console.error('Error fetching category challenges:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category challenges' },
      { status: 500 }
    );
  }
}