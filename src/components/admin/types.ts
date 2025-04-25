export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  points: number;
  flag: string;
  difficulty: string;
  isActive: boolean;
  isLocked: boolean;
  files: ChallengeFile[];
  hints: Hint[];
  unlockConditions: UnlockCondition[];
  createdAt: string;
  updatedAt: string;
}

export interface ChallengeFile {
  id: string;
  name: string;
  path: string;
  size: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  alias: string;
  name: string;
  isAdmin: boolean;
  teamId: string | null;
  isTeamLeader: boolean;
}

export interface Team {
  id: string;
  name: string;
  code: string;
  score: number;
  icon?: string;
  color?: string;
  members: User[];
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Hint {
  id: string;
  content: string;
  cost: number;
  challengeId: string;
  createdAt: string;
  updatedAt: string;
}

export interface SiteConfig {
  id: string;
  siteTitle: string;
  headerText: string;
}

export interface GameConfig {
  id?: string;
  startTime: string | Date;
  endTime: string | Date;
  isActive: boolean;
}

export interface UnlockCondition {
  id?: string;
  type: 'CHALLENGE_SOLVED' | 'TIME_REMAINDER';
  requiredChallengeId?: string | null;
  timeThresholdSeconds?: number | null;
}

export interface NewChallenge {
  title: string;
  description: string;
  category: string;
  points: number;
  flag: string;
  difficulty: string;
  isActive?: boolean;
  isLocked?: boolean;
  files: ChallengeFile[];
  hints: Hint[];
  unlockConditions?: UnlockCondition[];
}

export interface NewAnnouncement {
  title: string;
  content: string;
}

export type Tab = 'challenges' | 'users' | 'teams' | 'announcements' | 'configuration' | 'siteconfig';