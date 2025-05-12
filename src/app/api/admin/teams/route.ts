import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { ApiError } from '@/types';
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

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id, name, icon, color } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Team ID is required' }, { status: 400 });
    }

    if (name !== undefined && !name.trim()) {
      return NextResponse.json({ error: 'Team name cannot be empty' }, { status: 400 });
    }

    const updateData: { name?: string; icon?: string; color?: string } = {};
    if (name !== undefined) updateData.name = name;
    if (icon !== undefined) updateData.icon = icon;
    if (color !== undefined) updateData.color = color;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No update data provided' }, { status: 400 });
    }

    const updatedTeam = await prisma.team.update({
      where: { id },
      data: updateData,
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

    return NextResponse.json(updatedTeam);
  } catch (error) {
    const err = error as ApiError;
    console.error('Error updating team:', err);
    if (err.code === 'P2002' && err.meta?.target?.includes('name')) {
      return NextResponse.json(
        { error: 'Team name already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 