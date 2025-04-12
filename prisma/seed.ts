import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  // Create challenges
  const challenges = [
    {
      title: 'Welcome to Space',
      description: 'Find the hidden flag in this simple challenge.',
      points: 100,
      category: 'Misc',
      difficulty: 'Easy',
      flag: 'CTF{Welcome_To_Space}',
    },
    {
      title: 'Galactic Encryption',
      description: 'Decrypt this message from the aliens: ZW5jcnlwdGVkX2ZsYWc=',
      points: 200,
      category: 'Cryptography',
      difficulty: 'Medium',
      flag: 'CTF{encrypted_flag}',
    },
    {
      title: 'Space Station Access',
      description: 'Find a way to bypass the login page.',
      points: 300,
      category: 'Web Security',
      difficulty: 'Hard',
      flag: 'CTF{SQL_Injection_Is_Fun}',
    },
    {
      title: 'Alien Communication',
      description: 'Analyze this binary file to find the hidden message.',
      points: 250,
      category: 'Reverse Engineering',
      difficulty: 'Medium',
      flag: 'CTF{Binary_Is_Cool}',
    },
  ];

  // Create seed data
  console.log('Starting database seed...');

  // Create teams
  const team1 = await prisma.team.create({
    data: {
      name: 'Space Explorers',
      code: 'SPACE123',
      icon: 'GiSpaceship',
      color: '#ff4500',
    },
  });

  const team2 = await prisma.team.create({
    data: {
      name: 'Cosmic Coders',
      code: 'COSMIC456',
      icon: 'GiRocket',
      color: '#4169e1',
    },
  });

  console.log('Teams created successfully');

  // Create users
  const admin = await prisma.user.create({
    data: {
      alias: 'admin',
      password: '$2a$10$GtU.Aatf9h5jr6bjwA1TAO6I.KJQQu0sB7XPOvMRIeduLOcCIi8h2', // "password" hashed
      name: 'Administrator',
      isAdmin: true,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      alias: 'astronaut',
      password: '$2a$10$GtU.Aatf9h5jr6bjwA1TAO6I.KJQQu0sB7XPOvMRIeduLOcCIi8h2', // "password" hashed
      name: 'Space Astronaut',
      teamId: team1.id,
      isTeamLeader: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      alias: 'cosmic',
      password: '$2a$10$GtU.Aatf9h5jr6bjwA1TAO6I.KJQQu0sB7XPOvMRIeduLOcCIi8h2', // "password" hashed
      name: 'Cosmic Explorer',
      teamId: team2.id,
      isTeamLeader: true,
    },
  });

  console.log('Users created successfully');

  // Create challenges
  const createdChallenges = [];
  for (const challenge of challenges) {
    const createdChallenge = await prisma.challenge.create({
      data: challenge,
    });
    createdChallenges.push(createdChallenge);
  }

  console.log('Challenges created successfully');

  // Create a sample file for a challenge
  await prisma.challengeFile.create({
    data: {
      name: 'encrypted_message.txt',
      path: '/files/encrypted_message.txt',
      size: 1024,
      challengeId: createdChallenges[1].id, // Attach to the Galactic Encryption challenge
    },
  });

  console.log('Challenge files created successfully');

  // Create hints
  await prisma.hint.create({
    data: {
      content: 'Try looking at the page source!',
      cost: 50,
      challengeId: createdChallenges[0].id,
    },
  });

  await prisma.hint.create({
    data: {
      content: 'This is using Base64 encoding.',
      cost: 75,
      challengeId: createdChallenges[1].id,
    },
  });

  console.log('Hints created successfully');

  // Create a sample announcement
  await prisma.announcement.create({
    data: {
      title: 'Welcome to Orbital CTF!',
      content: 'The competition has begun. Good luck to all teams!',
      isActive: true,
    },
  });

  console.log('Announcements created successfully');

  // Create game config
  await prisma.gameConfig.create({
    data: {
      startTime: new Date(),
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      isActive: true,
    },
  });

  console.log('Game config created successfully');

  // Create an activity log entry
  await prisma.activityLog.create({
    data: {
      type: 'GAME_START',
      description: 'The CTF competition has started!',
    },
  });

  await prisma.activityLog.create({
    data: {
      type: 'TEAM_REGISTRATION',
      description: 'Team Space Explorers has registered',
      teamId: team1.id,
    },
  });

  console.log('Activity log entries created successfully');

  // Seed site configuration
  const siteConfig = await prisma.siteConfig.findFirst();
  
  if (!siteConfig) {
    await prisma.siteConfig.create({
      data: {
        siteTitle: process.env.SITE_TITLE || 'Orbital CTF',
        headerText: process.env.HEADER_TEXT || 'Welcome to Orbital CTF',
      },
    });
    console.log('Site configuration seeded successfully');
  } else {
    console.log('Site configuration already exists');
  }

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });