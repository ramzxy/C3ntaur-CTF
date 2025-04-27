import { PrismaClient } from './generated/client';
import dotenv from 'dotenv';
import { hash } from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  // Create sample teams
  const teams = [
    { name: 'NightCity Hackers', code: 'NIGHT777', icon: 'GiCircuitry', color: '#FF0055' },
    { name: 'Digital Ronin', code: 'RONIN404', icon: 'GiNinjaHead', color: '#00FFB2' },
    { name: 'Chrome Dragons', code: 'CHROME42', icon: 'GiDragonHead', color: '#9700FF' },
    { name: 'NetWatch Elite', code: 'NETW4TCH', icon: 'GiWireframeGlobe', color: '#FFB300' },
    { name: 'Arasaka Red Team', code: 'RED0001', icon: 'GiFirewall', color: '#FF0000' },
    { name: 'Ghost Protocol', code: 'GH0ST666', icon: 'GiHoodedFigure', color: '#4D4D4D' }
  ];

  const createdTeams = [];
  for (const team of teams) {
    const createdTeam = await prisma.team.create({
      data: team
    });
    createdTeams.push(createdTeam);
  }

  // Create sample users with cyberpunk-themed names
  const hashedPassword = await hash('password', 10);
  const users = [
    { alias: 'zeroCool', name: 'Zero Cool', password: hashedPassword, isTeamLeader: true, isAdmin: true, teamId: createdTeams[0].id },
    { alias: 'crashOverride', name: 'Crash Override', password: hashedPassword, isTeamLeader: false, teamId: createdTeams[0].id },
    { alias: 'phantomByte', name: 'Phantom', password: hashedPassword, isTeamLeader: true, teamId: createdTeams[1].id },
    { alias: 'cyberSamurai', name: 'Samurai', password: hashedPassword, isTeamLeader: true, teamId: createdTeams[2].id },
    { alias: 'netrunner', name: 'V', password: hashedPassword, isTeamLeader: false, teamId: createdTeams[2].id },
    { alias: 'watchdog', name: 'Guardian', password: hashedPassword, isTeamLeader: true, teamId: createdTeams[3].id },
    { alias: 'redQueen', name: 'Alice', password: hashedPassword, isTeamLeader: true, teamId: createdTeams[4].id },
    { alias: 'shadowKnight', name: 'Shadow', password: hashedPassword, isTeamLeader: true, teamId: createdTeams[5].id }
  ];

  const createdUsers = [];
  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: user
    });
    createdUsers.push(createdUser);
  }

  // Create sample challenges
  const challenges = [
    {
      title: 'Breach The Mainframe',
      description: 'Your first task is to breach the corporate mainframe. Look for common vulnerabilities.',
      points: 100,
      category: 'Web',
      difficulty: 'Easy',
      flag: 'CTF{M41nfr4m3_Br34ch3d_2024}',
      isActive: true,
      isLocked: false
    },
    {
      title: 'Incident Response 101',
      description: 'Something bad has happened. Can you identify the breach?',
      points: 100,
      category: 'Forensics',
      difficulty: 'Easy',
      flag: 'CTF{M41nfr4m3_Br34ch3d_2024}',
      isActive: true,
      isLocked: false
    },
    {
      title: 'Neural Decrypt',
      description: 'A mysterious neural pattern has been detected. Can you decrypt the signal?',
      points: 200,
      category: 'Cryptography',
      difficulty: 'Medium',
      flag: 'CTF{N3ur4l_D3crypt_1337}',
      isActive: true,
      isLocked: false
    },
    {
      title: 'Ghost in the Machine',
      description: 'An AI has gone rogue. Find the vulnerability in its neural network.',
      points: 300,
      category: 'Reverse Engineering',
      difficulty: 'Hard',
      flag: 'CTF{R0gu3_AI_C4ptur3d}',
      isActive: true,
      isLocked: false
    },
    {
      title: 'Cyberdeck Override',
      description: 'Hack into a high-security cyberdeck. Watch out for ICE protocols.',
      points: 400,
      category: 'Binary',
      difficulty: 'Expert',
      flag: 'CTF{Cyb3rd3ck_0v3rr1d3}',
      isActive: true,
      isLocked: false
    },
    {
      title: 'Corporate Espionage',
      description: 'Infiltrate the Arasaka database without triggering alarms.',
      points: 500,
      category: 'Web',
      difficulty: 'Hard',
      flag: 'CTF{C0rp_D4t4_L34k}',
      isActive: true,
      isLocked: false
    }
  ];

  const createdChallenges = [];
  for (const challenge of challenges) {
    const createdChallenge = await prisma.challenge.create({
      data: challenge
    });
    createdChallenges.push(createdChallenge);
  }

  // Create challenge unlock conditions
  const unlockConditions = [
    {
      challengeId: createdChallenges[2].id, // Neural Decrypt requires Breach The Mainframe
      type: 'CHALLENGE_SOLVED' as const,
      requiredChallengeId: createdChallenges[0].id
    },
    {
      challengeId: createdChallenges[3].id, // Ghost in the Machine requires Incident Response 101
      type: 'CHALLENGE_SOLVED' as const,
      requiredChallengeId: createdChallenges[1].id
    }
  ];

  for (const condition of unlockConditions) {
    await prisma.unlockCondition.create({
      data: condition
    });
  }

  // Create sample hints
  const hints = [
    {
      content: 'Have you tried looking at the HTTP headers?',
      cost: 25,
      challengeId: createdChallenges[0].id
    },
    {
      content: 'The neural pattern uses a custom XOR encryption.',
      cost: 50,
      challengeId: createdChallenges[1].id
    },
    {
      content: 'The AI\'s core memory is stored in base64.',
      cost: 75,
      challengeId: createdChallenges[2].id
    },
    {
      content: 'ICE protocols often leave traces in the memory dump.',
      cost: 100,
      challengeId: createdChallenges[3].id
    }
  ];

  for (const hint of hints) {
    await prisma.hint.create({
      data: hint
    });
  }

  // Create sample submissions with varied success rates
  const submissions = [
    {
      flag: 'CTF{M41nfr4m3_Br34ch3d_2024}',
      isCorrect: true,
      userId: createdUsers[0].id,
      challengeId: createdChallenges[0].id,
      teamId: createdTeams[0].id,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      flag: 'CTF{M41nfr4m3_Br34ch3d_2024}',
      isCorrect: true,
      userId: createdUsers[3].id,
      challengeId: createdChallenges[1].id,
      teamId: createdTeams[2].id,
      createdAt: new Date(Date.now() - 1.5 * 60 * 60 * 1000) // 1.5 hours ago
    },
    {
      flag: 'CTF{N3ur4l_D3crypt_1337}',
      isCorrect: true,
      userId: createdUsers[3].id,
      challengeId: createdChallenges[2].id,
      teamId: createdTeams[2].id,
      createdAt: new Date(Date.now() - 1.1 * 60 * 60 * 1000) // 1.1 hours ago
    },
    {
      flag: 'CTF{N3ur4l_D3crypt_1337}',
      isCorrect: true,
      userId: createdUsers[2].id,
      challengeId: createdChallenges[2].id,
      teamId: createdTeams[1].id,
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hours ago
    }
  ];

  for (const submission of submissions) {
    await prisma.submission.create({
      data: submission
    });

    if (submission.isCorrect) {
      await prisma.score.create({
        data: {
          points: createdChallenges.find(c => c.id === submission.challengeId)?.points || 0,
          userId: submission.userId,
          teamId: submission.teamId,
          challengeId: submission.challengeId
        }
      });
    }
  }

  // Create sample announcements
  const announcements = [
    {
      title: 'Welcome to CyberCTF 2024!',
      content: 'Jack in, hackers! The virtual playground is now open. May the best team win!'
    },
    {
      title: 'New Challenge: Ghost in the Machine',
      content: 'A rogue AI has been detected in the network. Can you contain it?'
    },
    {
      title: 'System Alert',
      content: 'ICE protocols have been upgraded. Proceed with caution.'
    },
    {
      title: 'Halfway Point!',
      content: 'NightCity Hackers currently leading with Chrome Dragons close behind!'
    }
  ];

  for (const announcement of announcements) {
    await prisma.announcement.create({
      data: announcement
    });
  }

  // Create game config
  await prisma.gameConfig.create({
    data: {
      startTime: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      isActive: true,
    },
  });

  // Create activity logs
  const activityLogs = [
    {
      type: 'GAME_START',
      description: 'CyberCTF 2024 has begun!',
    },
    {
      type: 'CHALLENGE_SOLVED',
      description: 'Team NightCity Hackers breached the mainframe!',
      teamId: createdTeams[0].id
    },
    {
      type: 'SYSTEM_ALERT',
      description: 'New ICE protocols detected in the network'
    },
    {
      type: 'CHALLENGE_RELEASED',
      description: 'New challenge "Ghost in the Machine" is now available'
    }
  ];

  for (const log of activityLogs) {
    await prisma.activityLog.create({
      data: log
    });
  }

  // Create challenge files
  const challengeFiles = [
    {
      name: 'mainframe_dump.bin',
      path: '/files/mainframe_dump.bin',
      size: 2048,
      challengeId: createdChallenges[0].id
    },
    {
      name: 'neural_pattern.enc',
      path: '/files/neural_pattern.enc',
      size: 1024,
      challengeId: createdChallenges[1].id
    },
    {
      name: 'ai_core_memory.dump',
      path: '/files/ai_core_memory.dump',
      size: 4096,
      challengeId: createdChallenges[2].id
    }
  ];

  for (const file of challengeFiles) {
    await prisma.challengeFile.create({
      data: file
    });
  }

  // Create site configurations
  const siteConfigs = [
    {
      key: 'homepage_title',
      value: 'Orbital CTF'
    },
    {
      key: 'site_title',
      value: 'Orbital CTF'
    },
    {
      key: 'homepage_subtitle',
      value: '80s retro ui, space-themed, batteries included CTF platform.'
    },
    {
      key: 'rules_text',
      value: `
Following actions are prohibited, unless explicitly told otherwise by event Admins.

### Rule 1 - Cooperation

No cooperation between teams with independent accounts. Sharing of keys or providing revealing hints to other teams is cheating, don't do it.

### Rule 2 - Attacking Scoreboard

No attacking the competition infrastructure. If bugs or vulns are found, please alert the competition organizers immediately.

### Rule 3 - Sabotage

Absolutely no sabotaging of other competing teams, or in any way hindering their independent progress.

### Rule 4 - Bruteforcing

No brute forcing of challenge flag/ keys against the scoring site.

### Rule 5 - Denial Of Service

DoSing the CTF platform or any of the challenges is forbidden.

##### Legal Disclaimer

By participating in the contest, you agree to release the organizer, and the hosting organization from any and all liability, claims or actions of any kind whatsoever for injuries, damages or losses to persons and property which may be sustained in connection with the contest. You acknowledge and agree that Facebook et al is not responsible for technical, hardware or software failures, or other errors or problems which may occur in connection with the contest.

If you have any questions about what is or is not allowed, please ask an organizer.

Have fun!`
    }
  ];

  for (const config of siteConfigs) {
    await prisma.siteConfig.upsert({
      where: { key: config.key },
      update: { value: config.value },
      create: {
        key: config.key,
        value: config.value
      }
    });
  }

  console.log('Example CTF database has been seeded! 🔥');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });