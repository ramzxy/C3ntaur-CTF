import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const solvedChallenges = await prisma.submission.findMany({
      where: {
        teamId: session.user.teamId ?? "",
        isCorrect: true,
      },
      select: {
        challengeId: true,
      },
    });

    return NextResponse.json(solvedChallenges.map(sub => sub.challengeId));
  } catch (error) {
    console.error('Error fetching solved challenges:', error);
    return NextResponse.json(
      { error: 'Error fetching solved challenges' },
      { status: 500 }
    );
  }
} 