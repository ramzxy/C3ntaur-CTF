import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const teams = await prisma.team.findMany({
      orderBy: {
        score: 'desc',
      },
      take: 10,
    });

    // Get current user's team only if authenticated
    const currentUserTeam = session?.user?.teamId 
      ? await prisma.team.findUnique({
          where: { id: session.user.teamId },
        })
      : null;

    return NextResponse.json({
      teams,
      currentUserTeam,
    });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}