import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const siteRules = await prisma.siteConfig.findFirst({
      where: {
        key: 'rules_text'
      }
    });

    if (!siteRules) {
      return NextResponse.json({
        siteRules: "No rules have been set for this competition yet."
      });
    }

    return NextResponse.json({ siteRules: siteRules.value });
  } catch (error) {
    console.error('Error fetching rules:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rules' },
      { status: 500 }
    );
  }
}
