import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { challengeId: string } }
) {
  try {
    const { challengeId } = await params;
    const challengeId2 = decodeURIComponent(challengeId);

    const challenge = await prisma.challenge.findUnique({
      where: {
        id: challengeId2
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
            isCorrect: true
          },
          select: {
            id: true
          }
        },
        hints: {
          select: {
            id: true,
            content: true,
            cost: true
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

    // Transform the challenge to include isSolved based on submissions
    const transformedChallenge = {
      ...challenge,
      isSolved: challenge.submissions.length > 0,
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