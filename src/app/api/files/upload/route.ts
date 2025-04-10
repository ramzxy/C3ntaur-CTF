import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name}`;
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    
    // Create uploads directory if it doesn't exist
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      console.error('Error creating uploads directory:', error);
    }

    const path = join(uploadsDir, filename);

    // Write the file to the uploads directory
    await writeFile(path, buffer);

    return NextResponse.json({
      name: file.name,
      path: `/uploads/${filename}`,
      size: file.size
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
} 