import { NextResponse } from 'next/server';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    
    if (!filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
    }

    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    const files = await readdir(uploadsDir);
    
    // Find the file that ends with the requested filename
    const matchingFile = files.find(file => file.endsWith(filename));
    
    if (!matchingFile) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const filePath = join(uploadsDir, matchingFile);
    const fileBuffer = await readFile(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    return NextResponse.json(
      { error: 'Error downloading file' },
      { status: 500 }
    );
  }
} 