import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

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
      select: {
        id: true,
        title: true,
        description: true,
        points: true,
        difficulty: true,
        category: true,
        flag: true,
        files: true,
        createdAt: true,
        updatedAt: true,
        submissions: {
          where: {
            isCorrect: true,
            teamId: session?.user?.teamId || ''
          },
          select: {
            id: true,
            teamId: true
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

    // Transform the challenge to include isSolved and solvedByTeamId
    const transformedChallenge = {
      ...challenge,
      isSolved: challenge.submissions.length > 0,
      solvedByTeamId: challenge.submissions[0]?.teamId,
      submissions: undefined // Remove the submissions field from the response
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