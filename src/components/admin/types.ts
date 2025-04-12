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
  members: User[];
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: string;
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

export interface NewChallenge {
  title: string;
  description: string;
  category: string;
  points: number;
  flag: string;
  difficulty: string;
  isLocked: boolean;
  files: ChallengeFile[];
  hints: Hint[];
}

export interface NewAnnouncement {
  title: string;
  content: string;
  isActive: boolean;
}

export type Tab = 'challenges' | 'users' | 'teams' | 'announcements' | 'configuration';