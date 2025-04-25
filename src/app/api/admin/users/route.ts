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

    const users = await prisma.user.findMany({
      select: {
        id: true,
        alias: true,
        name: true,
        isAdmin: true,
        teamId: true,
        isTeamLeader: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Delete the user
    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
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

    // Accept id, alias, name, teamId, isTeamLeader for update
    const { id, alias, name, teamId, isTeamLeader } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Allow updating individual fields
    const updateData: { alias?: string; name?: string; teamId?: string | null, isTeamLeader?: boolean } = {};

    // Validate and add alias if present
    if (alias !== undefined) {
      const trimmedAlias = alias.trim();
      if (!trimmedAlias) {
        return NextResponse.json({ error: 'Alias cannot be empty' }, { status: 400 });
      }
      updateData.alias = trimmedAlias;
    }

    // Validate and add name if present
    if (name !== undefined) {
      const trimmedName = name.trim();
      if (!trimmedName) {
        return NextResponse.json({ error: 'Name cannot be empty' }, { status: 400 });
      }
      updateData.name = trimmedName;
    }

    // Add teamId if present (null means remove from team)
    if (teamId !== undefined) {
      updateData.teamId = teamId; // teamId can be null
      // If removing from team or not explicitly setting leader, set leader to false
      if (teamId === null || isTeamLeader === undefined) {
        updateData.isTeamLeader = false;
      }
    }

    // Add isTeamLeader if present AND a team is selected
    if (isTeamLeader !== undefined && updateData.teamId !== null && teamId !== null) {
      // Only allow setting isTeamLeader if teamId is also being set to a non-null value or already exists
      // Note: This logic doesn't automatically handle leader conflicts within a team. 
      // A more robust solution might require a transaction to unset the previous leader.
      updateData.isTeamLeader = isTeamLeader;
    }

    // Check if any data was actually provided for update
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No update data provided' }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      // Select the same fields as GET to return the updated user
      select: {
        id: true,
        alias: true,
        name: true,
        isAdmin: true,
        teamId: true,
        isTeamLeader: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    console.error('Error updating user alias:', error);
    // Handle potential unique constraint violation for alias
    if (error.code === 'P2002' && error.meta?.target?.includes('alias')) {
      return NextResponse.json(
        { error: 'Alias already exists' },
        { status: 409 } // Conflict
      );
    }
    // Handle user not found during update
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 