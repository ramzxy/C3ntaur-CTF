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
    const challenges = await prisma.challenge.findMany({
      include: {
        files: true
      }
    });

    // For non-admin users, hide description and flag for locked challenges
    const processedChallenges = challenges.map(challenge => {
      if (challenge.isLocked && !session.user.isAdmin) {
        return {
          ...challenge,
          description: 'This challenge is locked. Complete previous challenges to unlock it.',
          flag: null
        };
      }
      return challenge;
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