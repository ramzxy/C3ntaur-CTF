import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const teams = await prisma.team.findMany({
      include: {
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

    return NextResponse.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Team ID is required' }, { status: 400 });
    }

    // First, remove all team members by setting their teamId to null
    await prisma.user.updateMany({
      where: { teamId: id },
      data: { teamId: null, isTeamLeader: false }
    });

    // Then delete the team
    await prisma.team.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Team deleted successfully' });
  } catch (error) {
    console.error('Error deleting team:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 