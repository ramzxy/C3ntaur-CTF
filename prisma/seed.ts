import { PrismaClient } from '@prisma/client';

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

  for (const challenge of challenges) {
    await prisma.challenge.create({
      data: challenge,
    });
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