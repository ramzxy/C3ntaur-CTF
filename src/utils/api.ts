export interface SiteConfig {
  key: string;
  value: string;
}

export interface RulesResponse {
  siteRules: string;
}

export interface Challenge {
  id: string;
  title: string;
  description?: string;
  points: number;
  difficulty: string;
  isSolved?: boolean;
  category: string;
  solvedByTeamId?: string;
  files?: {
    name: string;
    path: string;
    size: number;
  }[];
  isLocked?: boolean;
  unlockReason?: string;
  multipleFlags?: boolean;
  flags?: {
    id: string;
    points: number;
    isSolved?: boolean;
  }[];
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

export interface Team {
  id: string;
  name: string;
  code: string;
  score: number;
  icon?: string;
  color?: string;
  members: TeamMember[];
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
  id: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  hasEndTime: boolean;
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

export interface Hint {
  id: string;
  content: string;
  cost: number;
  isPurchased: boolean;
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
  const response = await fetch('/api/admin/teams');
  if (!response.ok) {
    throw new Error('Failed to fetch scoreboard teams');
  }
  return response.json();
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