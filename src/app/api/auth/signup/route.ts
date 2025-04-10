import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { alias, password, name, teamName, teamCode, teamOption, teamIcon, teamColor } = await req.json();

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        alias: alias
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Check if this is the first user
    const userCount = await prisma.user.count();
    const isAdmin = userCount === 0;

    const hashedPassword = await bcrypt.hash(password, 10);

    let teamId = null;
    let isTeamLeader = false;

    if (teamOption === 'create') {
      // Create new team
      if (!teamName) {
        return NextResponse.json(
          { error: 'Team name is required when creating a new team' },
          { status: 400 }
        );
      }

      // Generate a random 6-character team code
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();

      const team = await prisma.team.create({
        data: {
          name: teamName,
          code: code,
          icon: teamIcon || 'GiSpaceship',
          color: teamColor || '#ffffff'
        },
      });

      teamId = team.id;
      isTeamLeader = true;
    } else if (teamOption === 'join') {
      // Join existing team
      if (!teamCode) {
        return NextResponse.json(
          { error: 'Team code is required when joining a team' },
          { status: 400 }
        );
      }

      const team = await prisma.team.findFirst({
        where: {
          code: teamCode
        }
      });

      if (!team) {
        return NextResponse.json(
          { error: 'Invalid team code' },
          { status: 400 }
        );
      }

      teamId = team.id;
    }

    const user = await prisma.user.create({
      data: {
        alias: alias,
        password: hashedPassword,
        name: name,
        isAdmin: isAdmin,
        isTeamLeader: isTeamLeader,
        team: teamId ? {
          connect: {
            id: teamId
          }
        } : undefined
      },
      select: {
        id: true,
        alias: true,
        isAdmin: true,
        teamId: true,
        isTeamLeader: true
      }
    });

    return NextResponse.json(
      { 
        message: 'User created successfully', 
        user
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Error creating user' },
      { status: 500 }
    );
  }
} 