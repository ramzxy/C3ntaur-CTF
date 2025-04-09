import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
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
    });

    if (!challenge) {
      return NextResponse.json(
        { message: 'Challenge not found' },
        { status: 404 }
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
      // Update team score
      await prisma.team.update({
        where: { id: session.user.teamId },
        data: {
          score: {
            increment: challenge.points,
          },
        },
      });
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