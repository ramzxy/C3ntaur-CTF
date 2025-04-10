import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.alias) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { alias: session.user.alias },
      select: { isAdmin: true },
    });

    if (!user || !user.isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const announcement = await prisma.announcement.findUnique({
      where: { id: params.id },
    });

    if (!announcement) {
      return NextResponse.json({ error: 'Announcement not found' }, { status: 404 });
    }

    await prisma.announcement.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.alias) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { alias: session.user.alias },
      select: { isAdmin: true },
    });

    if (!user || !user.isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const announcement = await prisma.announcement.findUnique({
      where: { id: params.id },
    });

    if (!announcement) {
      return NextResponse.json({ error: 'Announcement not found' }, { status: 404 });
    }

    const { isActive } = await request.json();

    const updatedAnnouncement = await prisma.announcement.update({
      where: { id: params.id },
      data: { isActive },
    });

    return NextResponse.json(updatedAnnouncement);
  } catch (error) {
    console.error('Error updating announcement:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 