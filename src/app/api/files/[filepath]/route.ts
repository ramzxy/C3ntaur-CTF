import { NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import { join } from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ filepath: string }> }
) {
  const { filepath } = await params;
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Get the file record from the database using the path
    const fileRecord = await prisma.challengeFile.findFirst({
      where: { path: filepath }
    });

    if (!fileRecord) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Convert the public path to a filesystem path
    const filePath = join(process.cwd(), 'public', fileRecord.path);

    // Delete the file from the filesystem
    await unlink(filePath);

    // Delete the file record from the database
    await prisma.challengeFile.delete({
      where: { id: fileRecord.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { error: 'Error deleting file' },
      { status: 500 }
    );
  }
} 