export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon?: string;
  type: 'task_completion' | 'streak' | 'points_earned' | 'social' | 'wellness' | 'tutorial' | 'other';
  criteria: Record<string, any>; // e.g., { count: 5, subject: 'Math' }
  points_reward: number;
  created_at: string;
}

export interface UserAchievement {
  id: string;
  user_id: string; // Clerk user ID (TEXT)
  achievement_id: string;
  unlocked_at: string;
  earned_at: string; // Alias for unlocked_at for compatibility
  progress: Record<string, any>;
  max_progress?: number;
  achievements?: Achievement; // Optional relation
}

export interface UserStats {
  user_id: string; // Clerk user ID (TEXT)
  total_points: number;
  current_streak: number;
  longest_streak: number;
  level: number;
  updated_at: string;
}

export interface LeaderboardUser {
  user_id: string; // Clerk user ID (TEXT)
  user_name: string; // Should be fetched from profiles
  total_points: number;
  rank: number;
}

export type AchievementInsert = Omit<Achievement, 'id' | 'created_at'>;
export type UserAchievementInsert = Omit<UserAchievement, 'id' | 'unlocked_at' | 'earned_at' | 'achievements' | 'max_progress'>;
export type UserStatsUpdate = Partial<Omit<UserStats, 'user_id' | 'updated_at'>>; 