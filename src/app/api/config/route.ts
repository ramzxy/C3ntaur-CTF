import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user?.isAdmin === true;
}

export async function GET() {
  const configs = await prisma.siteConfig.findMany();
  return NextResponse.json(configs);
}

export async function PUT(request: Request) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const { key, value } = await request.json();
  
  const config = await prisma.siteConfig.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });

  return NextResponse.json(config);
}