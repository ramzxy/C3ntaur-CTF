import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const config = await prisma.siteConfig.findFirst();
    return NextResponse.json(config);
  } catch (error) {
    console.error('Error fetching site config:', error);
    return NextResponse.json({ error: 'Failed to fetch site config' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { siteTitle, headerText } = await request.json();
    
    let config = await prisma.siteConfig.findFirst();
    
    if (!config) {
      config = await prisma.siteConfig.create({
        data: {
          siteTitle,
          headerText,
        },
      });
    } else {
      config = await prisma.siteConfig.update({
        where: { id: config.id },
        data: {
          siteTitle,
          headerText,
        },
      });
    }
    
    return NextResponse.json(config);
  } catch (error) {
    console.error('Error updating site config:', error);
    return NextResponse.json({ error: 'Failed to update site config' }, { status: 500 });
  }
} 