import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: { teamId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const team = await prisma.team.findUnique({
      where: { id: params.teamId },
      select: {
        id: true,
        name: true,
        code: true,
        score: true,
        members: {
          select: {
            id: true,
            alias: true,
            name: true,
            isAdmin: true,
            isTeamLeader: true,
          },
        },
      },
    });

    if (!team) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 });
    }

    // Only allow access if the user is a member of the team or an admin
    if (!session.user.isAdmin && !team.members.some(member => member.id === session.user.id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    return NextResponse.json(team);
  } catch (error) {
    console.error('Error fetching team:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 