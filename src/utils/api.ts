import { Team, User } from '@/components/admin/types';

export interface SiteConfig {
  id: string;
  siteTitle: string;
  headerText: string;
}

export interface RulesResponse {
  siteRules: string;
}

export interface ChallengeFlag {
  id?: string;
  flag: string;
  points: number;
  challengeId?: string;
  createdAt?: string;
  updatedAt?: string;
  isSolved?: boolean;
}

export interface ChallengeFile {
  id: string;
  name: string;
  path: string;
  size: number;
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
  isPurchased?: boolean;
}

export interface UnlockCondition {
  id?: string;
  type: 'CHALLENGE_SOLVED' | 'TIME_REMAINDER';
  requiredChallengeId?: string | null;
  timeThresholdSeconds?: number | null;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  points: number;
  flag?: string;
  flags: ChallengeFlag[];
  multipleFlags: boolean;
  difficulty: string;
  isActive: boolean;
  isLocked: boolean;
  files: ChallengeFile[];
  hints: Hint[];
  unlockConditions: UnlockCondition[];
  createdAt: string;
  updatedAt: string;
  isSolved?: boolean;
}

export interface CategoryChallenge {
  id: string;
  title: string;
  isSolved: boolean;
  isLocked: boolean;
  points: number;
  category: string;
  solvedBy: { teamId: string; teamColor: string }[];
}

export interface CategoryResponse {
  challenges: CategoryChallenge[];
}

export interface TeamMember {
  id: string;
  alias: string;
  name: string;
  isTeamLeader: boolean;
}

export interface LeaderboardTeam {
  id: string;
  name: string;
  score: number;
}

export interface LeaderboardResponse {
  teams: LeaderboardTeam[];
  currentUserTeam: LeaderboardTeam | null;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  type: string;
  description: string;
  createdAt: string;
  team?: LeaderboardTeam;
}

export interface GameConfig {
  id?: string;
  startTime: string | Date | null;
  endTime: string | Date | null;
  isActive: boolean;
  hasEndTime?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ScoreboardTeam {
  id: string;
  name: string;
  color: string;
  icon: string;
  score: number;
}

export interface PointHistory {
  id: string;
  points: number;
  totalPoints: number;
  reason: string;
  metadata: string | null;
  createdAt: string;
}

export interface PointHistoryResponse {
  items: PointHistory[];
}

export interface Score {
  id: string;
  points: number;
  createdAt: string;
  team: {
    id: string;
    name: string;
    color: string;
    icon: string;
  };
}

export interface SubmissionResponse {
  message: string;
  isCorrect: boolean;
  points?: number;
}

export interface NewAnnouncement {
  title: string;
  content: string;
}

export interface CategoriesResponse {
  categories: string[];
  challengesByCategory: Record<string, Challenge[]>;
}

export interface NewChallenge {
  title: string;
  description: string;
  category: string;
  points: number;
  flag?: string;
  flags: ChallengeFlag[];
  multipleFlags: boolean;
  difficulty: string;
  isActive?: boolean;
  isLocked?: boolean;
  files: ChallengeFile[];
  hints: Hint[];
  unlockConditions?: UnlockCondition[];
}

export interface ApiError extends Error {
  message: string;
  code?: string;
  meta?: {
    target?: string[];
  };
}

export interface SiteConfiguration {
  key: string;
  value: string;
}

export interface SignUpRequest {
  name: string;
  alias: string;
  password: string;
  teamOption: 'create' | 'join';
  teamName?: string;
  teamCode?: string;
  teamIcon?: string;
  teamColor?: string;
}

export interface SignUpResponse {
  user: {
    alias: string;
    password: string;
  };
}

export async function fetchSiteConfig(): Promise<SiteConfig[]> {
  const response = await fetch('/api/config');
  if (!response.ok) {
    throw new Error('Failed to fetch site configuration');
  }
  return response.json();
}

export async function fetchRules(): Promise<RulesResponse> {
  const response = await fetch('/api/rules');
  if (!response.ok) {
    throw new Error('Failed to fetch rules');
  }
  return response.json();
}

export async function fetchChallenge(challengeId: string): Promise<Challenge> {
  const response = await fetch(`/api/challenges/${challengeId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch challenge');
  }
  return response.json();
}

export async function fetchChallengesByCategory(categoryId: string): Promise<CategoryResponse> {
  const response = await fetch(`/api/challenges/categories/${categoryId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch category challenges');
  }
  return response.json();
}

export async function fetchTeam(teamId: string): Promise<Team> {
  const response = await fetch(`/api/teams/${teamId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch team data');
  }
  return response.json();
}

export async function fetchLeaderboard(): Promise<LeaderboardResponse> {
  const response = await fetch('/api/leaderboard');
  if (!response.ok) {
    throw new Error('Failed to fetch leaderboard');
  }
  return response.json();
}

export async function fetchAnnouncements(): Promise<Announcement[]> {
  const response = await fetch('/api/announcements');
  if (!response.ok) {
    throw new Error('Failed to fetch announcements');
  }
  return response.json();
}

export async function fetchActivity(): Promise<ActivityLog[]> {
  const response = await fetch('/api/activity');
  if (!response.ok) {
    throw new Error('Failed to fetch activity logs');
  }
  return response.json();
}

export async function fetchGameConfig(): Promise<GameConfig> {
  const response = await fetch('/api/game-config');
  if (!response.ok) {
    throw new Error('Failed to fetch game configuration');
  }
  return response.json();
}

export async function fetchScoreboardTeams(): Promise<ScoreboardTeam[]> {
  const response = await fetch('/api/leaderboard');
  if (!response.ok) {
    throw new Error('Failed to fetch scoreboard teams');
  }
  const data = await response.json();
  return data.teams;
}

export async function fetchTeamPointHistory(teamId: string, limit: number = 1000): Promise<PointHistoryResponse> {
  const response = await fetch(`/api/teams/${teamId}/points/history?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch team point history');
  }
  return response.json();
}

export async function fetchHints(challengeId: string): Promise<Hint[]> {
  const response = await fetch(`/api/hints?challengeId=${challengeId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch hints');
  }
  return response.json();
}

export async function purchaseHint(hintId: string): Promise<void> {
  const response = await fetch('/api/hints/purchase', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hintId }),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Failed to purchase hint');
  }
}

export async function submitFlag(challengeId: string, flag: string): Promise<SubmissionResponse> {
  const response = await fetch('/api/submissions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ challengeId, flag }),
  });
  if (!response.ok) {
    throw new Error('Failed to submit flag');
  }
  return response.json();
}

export async function downloadFile(filename: string): Promise<Blob> {
  const response = await fetch(`/api/files/download?filename=${encodeURIComponent(filename)}`);
  if (!response.ok) {
    throw new Error('Failed to download file');
  }
  return response.blob();
}

export async function createAnnouncement(announcement: NewAnnouncement): Promise<void> {
  const response = await fetch('/api/announcements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(announcement),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Failed to create announcement');
  }
}

export async function deleteAnnouncement(id: string): Promise<void> {
  const response = await fetch(`/api/announcements/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete announcement');
  }
}

export async function fetchCategories(): Promise<CategoriesResponse> {
  const response = await fetch('/api/challenges/categories');
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
}

export async function createChallenge(challenge: NewChallenge): Promise<Challenge> {
  const response = await fetch('/api/admin/challenges', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(challenge),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create challenge');
  }

  return response.json();
}

export async function updateChallenge(challenge: Challenge): Promise<Challenge> {
  const response = await fetch('/api/admin/challenges', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(challenge),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update challenge');
  }

  return response.json();
}

export async function uploadFile(file: File): Promise<ChallengeFile> {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/files/upload', {
    method: 'POST',
    body: formData
  });
  
  if (!response.ok) {
    throw new Error('Failed to upload file');
  }
  
  return response.json();
}

export async function deleteFile(filename: string): Promise<void> {
  const response = await fetch(`/api/files/${filename}`, {
    method: 'DELETE'
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete file');
  }
}

export async function fetchAdminChallenges(): Promise<Challenge[]> {
  const response = await fetch('/api/admin/challenges');
  if (!response.ok) {
    throw new Error('Failed to fetch challenges');
  }
  return response.json();
}

export async function deleteChallenge(id: string): Promise<void> {
  const response = await fetch('/api/admin/challenges', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to delete challenge');
  }
}

export async function exportChallenges(): Promise<Challenge[]> {
  const response = await fetch('/api/admin/challenges/bulk');
  if (!response.ok) {
    throw new Error('Failed to export challenges');
  }
  return response.json();
}

export async function importChallenges(challenges: Challenge[]): Promise<void> {
  const response = await fetch('/api/admin/challenges/bulk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(challenges),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to import challenges');
  }
}

export async function updateSiteConfig(config: SiteConfig): Promise<void> {
  const response = await fetch('/api/config', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(config),
  });

  if (!response.ok) {
    throw new Error('Failed to update site configuration');
  }
}

export async function updateGameConfig(config: GameConfig): Promise<GameConfig> {
  const response = await fetch('/api/game-config', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(config),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Failed to update game configuration');
  }

  return response.json();
}

export async function fetchSiteConfigurations(): Promise<SiteConfiguration[]> {
  const response = await fetch('/api/config');
  if (!response.ok) {
    throw new Error('Failed to fetch site configurations');
  }
  return response.json();
}

export async function updateSiteConfiguration(key: string, value: string): Promise<SiteConfiguration> {
  const response = await fetch('/api/config', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key, value }),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update configuration: ${key}`);
  }
  return response.json();
}

export async function fetchAdminTeams(): Promise<Team[]> {
  const response = await fetch('/api/admin/teams');
  if (!response.ok) {
    throw new Error('Failed to fetch teams');
  }
  return response.json();
}

export async function deleteTeam(id: string): Promise<void> {
  const response = await fetch('/api/admin/teams', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to delete team');
  }
}

export async function updateTeam(teamData: Partial<Team>): Promise<Team> {
  const response = await fetch('/api/admin/teams', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(teamData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update team');
  }

  return response.json();
}

export async function fetchAdminUsers(): Promise<User[]> {
  const response = await fetch('/api/admin/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function deleteAdminUser(id: string): Promise<void> {
  const response = await fetch('/api/admin/users', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
}

export async function updateAdminUser(userData: Partial<User>): Promise<User> {
  const response = await fetch('/api/admin/users', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update user');
  }

  return response.json();
}

export async function signUp(data: SignUpRequest): Promise<SignUpResponse> {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to register');
  }

  return response.json();
} 