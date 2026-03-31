// ============================================================
// MathVerse (매쓰버스) - Complete Database Type Definitions
// ============================================================

// ─── Enums ────────────────────────────────────────────────────

export type UserRole = 'student' | 'teacher' | 'parent';
export type SubscriptionTier = 'free' | 'premium' | 'school';
export type ThemeSetting = 'light' | 'dark' | 'space' | 'ocean';

export type QuestionType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'true_false'
  | 'drag_drop'
  | 'number_input'
  | 'matching'
  | 'word_problem';

export type DifficultyLabel = 'very_easy' | 'easy' | 'medium' | 'hard' | 'very_hard';
export type MasteryLevel = 'not_started' | 'learning' | 'practicing' | 'mastered' | 'review_needed';
export type SessionType = 'lesson' | 'practice' | 'review' | 'challenge' | 'diagnostic' | 'daily_quest';
export type SessionStatus = 'in_progress' | 'completed' | 'abandoned';
export type BadgeCategory = 'streak' | 'mastery' | 'speed' | 'accuracy' | 'exploration' | 'social' | 'special';
export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type LeagueName = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master';
export type FeedbackType = 'praise' | 'encourage' | 'hint_more' | 'review_suggest';

// ─── Profile ──────────────────────────────────────────────────

export interface Profile {
  id: string;
  email: string;
  display_name: string;
  avatar_url: string | null;
  role: UserRole;
  grade: number | null;
  school_name: string | null;
  subscription_tier: SubscriptionTier;
  subscription_expires_at: string | null;
  stripe_customer_id: string | null;
  theme: ThemeSetting;
  sound_enabled: boolean;
  haptic_enabled: boolean;
  daily_goal_minutes: number;
  total_xp: number;
  current_streak: number;
  longest_streak: number;
  coins: number;
  level: number;
  league: LeagueName;
  parent_id: string | null;
  created_at: string;
  updated_at: string;
}

// ─── Classroom ────────────────────────────────────────────────

export interface Classroom {
  id: string;
  teacher_id: string;
  name: string;
  grade: number;
  join_code: string;
  max_students: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ClassroomMember {
  id: string;
  classroom_id: string;
  student_id: string;
  joined_at: string;
}

// ─── Curriculum ───────────────────────────────────────────────

export interface CurriculumDomain {
  id: string;
  code: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  sort_order: number;
}

export interface CurriculumUnit {
  id: string;
  domain_id: string;
  grade: number;
  semester: number;
  code: string;
  name: string;
  description: string;
  sort_order: number;
  prerequisite_unit_ids: string[];
}

export interface Skill {
  id: string;
  unit_id: string;
  code: string;
  name: string;
  description: string;
  difficulty_base: number;
  sort_order: number;
  question_types: QuestionType[];
  hint_templates: string[];
  prerequisite_skill_ids: string[];
}

// ─── Question Content Discriminated Union ─────────────────────

export interface MultipleChoiceContent {
  type: 'multiple_choice';
  question_text: string;
  question_latex: string | null;
  image_url: string | null;
  choices: {
    id: string;
    text: string;
    latex: string | null;
    image_url: string | null;
  }[];
  correct_choice_id: string;
  explanation: string;
  explanation_latex: string | null;
}

export interface FillBlankContent {
  type: 'fill_blank';
  question_text: string;
  question_latex: string | null;
  image_url: string | null;
  blanks: {
    id: string;
    correct_answer: string;
    accept_alternatives: string[];
    placeholder: string;
  }[];
  explanation: string;
  explanation_latex: string | null;
}

export interface TrueFalseContent {
  type: 'true_false';
  statement: string;
  statement_latex: string | null;
  image_url: string | null;
  correct_answer: boolean;
  explanation: string;
  explanation_latex: string | null;
}

export interface DragDropContent {
  type: 'drag_drop';
  question_text: string;
  question_latex: string | null;
  image_url: string | null;
  draggable_items: {
    id: string;
    text: string;
    latex: string | null;
  }[];
  drop_zones: {
    id: string;
    label: string;
    correct_item_ids: string[];
  }[];
  explanation: string;
  explanation_latex: string | null;
}

export interface NumberInputContent {
  type: 'number_input';
  question_text: string;
  question_latex: string | null;
  image_url: string | null;
  correct_answer: number;
  tolerance: number;
  unit: string | null;
  explanation: string;
  explanation_latex: string | null;
}

export interface MatchingContent {
  type: 'matching';
  question_text: string;
  question_latex: string | null;
  image_url: string | null;
  left_items: {
    id: string;
    text: string;
    latex: string | null;
  }[];
  right_items: {
    id: string;
    text: string;
    latex: string | null;
  }[];
  correct_pairs: { left_id: string; right_id: string }[];
  explanation: string;
  explanation_latex: string | null;
}

export interface WordProblemContent {
  type: 'word_problem';
  story: string;
  story_image_url: string | null;
  sub_questions: {
    id: string;
    question_text: string;
    question_latex: string | null;
    answer_type: 'number_input' | 'multiple_choice' | 'fill_blank';
    correct_answer: string;
    accept_alternatives: string[];
    choices?: { id: string; text: string }[];
  }[];
  explanation: string;
  explanation_latex: string | null;
}

export type QuestionContent =
  | MultipleChoiceContent
  | FillBlankContent
  | TrueFalseContent
  | DragDropContent
  | NumberInputContent
  | MatchingContent
  | WordProblemContent;

// ─── Question ─────────────────────────────────────────────────

export interface Question {
  id: string;
  skill_id: string;
  question_type: QuestionType;
  difficulty_label: DifficultyLabel;
  difficulty_irt_b: number;
  discrimination_irt_a: number;
  guessing_irt_c: number;
  content: QuestionContent;
  hint_text: string | null;
  hint_latex: string | null;
  tags: string[];
  is_active: boolean;
  usage_count: number;
  correct_rate: number;
  avg_time_seconds: number;
  created_at: string;
  updated_at: string;
}

// ─── Student Ability ──────────────────────────────────────────

export interface StudentAbility {
  id: string;
  student_id: string;
  skill_id: string;
  theta: number;
  theta_se: number;
  mastery_level: MasteryLevel;
  total_attempts: number;
  correct_count: number;
  avg_response_time: number;
  last_practiced_at: string | null;
  half_life_days: number;
  next_review_at: string | null;
  consecutive_correct: number;
  consecutive_wrong: number;
  created_at: string;
  updated_at: string;
}

// ─── Learning Session ─────────────────────────────────────────

export interface LearningSession {
  id: string;
  student_id: string;
  session_type: SessionType;
  skill_ids: string[];
  status: SessionStatus;
  total_questions: number;
  correct_count: number;
  wrong_count: number;
  skipped_count: number;
  xp_earned: number;
  coins_earned: number;
  accuracy: number;
  avg_time_per_question: number;
  started_at: string;
  completed_at: string | null;
  duration_seconds: number;
}

// ─── Question Response ────────────────────────────────────────

export interface QuestionResponse {
  id: string;
  session_id: string;
  question_id: string;
  student_id: string;
  skill_id: string;
  given_answer: string;
  is_correct: boolean;
  time_spent_ms: number;
  hint_used: boolean;
  attempt_number: number;
  theta_before: number;
  theta_after: number;
  feedback_type: FeedbackType;
  feedback_text: string;
  created_at: string;
}

// ─── Badge ────────────────────────────────────────────────────

export interface Badge {
  id: string;
  code: string;
  name: string;
  description: string;
  icon: string;
  category: BadgeCategory;
  rarity: BadgeRarity;
  requirement_type: string;
  requirement_value: number;
  xp_reward: number;
  coin_reward: number;
  is_secret: boolean;
  sort_order: number;
}

export interface StudentBadge {
  id: string;
  student_id: string;
  badge_id: string;
  earned_at: string;
  is_notified: boolean;
}

// ─── Daily Activity ───────────────────────────────────────────

export interface DailyActivity {
  id: string;
  student_id: string;
  date: string;
  total_minutes: number;
  total_questions: number;
  correct_count: number;
  xp_earned: number;
  coins_earned: number;
  sessions_count: number;
  streak_day: number;
  goal_met: boolean;
}

// ─── Leaderboard ──────────────────────────────────────────────

export interface LeaderboardEntry {
  id: string;
  student_id: string;
  league: LeagueName;
  week_start: string;
  weekly_xp: number;
  rank: number;
  promoted: boolean | null;
  demoted: boolean | null;
}

// ─── Notification ─────────────────────────────────────────────

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  body: string;
  type: 'badge' | 'streak' | 'league' | 'review' | 'announcement';
  data: Record<string, unknown>;
  is_read: boolean;
  created_at: string;
}

// ─── Parent Link ──────────────────────────────────────────────

export interface ParentStudentLink {
  id: string;
  parent_id: string;
  student_id: string;
  is_approved: boolean;
  created_at: string;
}

// ─── Supabase Database Schema Helper ──────────────────────────

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at'>>;
      };
      classrooms: {
        Row: Classroom;
        Insert: Omit<Classroom, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Classroom, 'id' | 'created_at'>>;
      };
      classroom_members: {
        Row: ClassroomMember;
        Insert: Omit<ClassroomMember, 'id' | 'joined_at'>;
        Update: Partial<Omit<ClassroomMember, 'id'>>;
      };
      curriculum_domains: {
        Row: CurriculumDomain;
        Insert: Omit<CurriculumDomain, 'id'>;
        Update: Partial<Omit<CurriculumDomain, 'id'>>;
      };
      curriculum_units: {
        Row: CurriculumUnit;
        Insert: Omit<CurriculumUnit, 'id'>;
        Update: Partial<Omit<CurriculumUnit, 'id'>>;
      };
      skills: {
        Row: Skill;
        Insert: Omit<Skill, 'id'>;
        Update: Partial<Omit<Skill, 'id'>>;
      };
      questions: {
        Row: Question;
        Insert: Omit<Question, 'id' | 'created_at' | 'updated_at' | 'usage_count' | 'correct_rate' | 'avg_time_seconds'>;
        Update: Partial<Omit<Question, 'id' | 'created_at'>>;
      };
      student_abilities: {
        Row: StudentAbility;
        Insert: Omit<StudentAbility, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<StudentAbility, 'id' | 'created_at'>>;
      };
      learning_sessions: {
        Row: LearningSession;
        Insert: Omit<LearningSession, 'id'>;
        Update: Partial<Omit<LearningSession, 'id'>>;
      };
      question_responses: {
        Row: QuestionResponse;
        Insert: Omit<QuestionResponse, 'id' | 'created_at'>;
        Update: Partial<Omit<QuestionResponse, 'id' | 'created_at'>>;
      };
      badges: {
        Row: Badge;
        Insert: Omit<Badge, 'id'>;
        Update: Partial<Omit<Badge, 'id'>>;
      };
      student_badges: {
        Row: StudentBadge;
        Insert: Omit<StudentBadge, 'id' | 'earned_at'>;
        Update: Partial<Omit<StudentBadge, 'id'>>;
      };
      daily_activities: {
        Row: DailyActivity;
        Insert: Omit<DailyActivity, 'id'>;
        Update: Partial<Omit<DailyActivity, 'id'>>;
      };
      leaderboard_entries: {
        Row: LeaderboardEntry;
        Insert: Omit<LeaderboardEntry, 'id'>;
        Update: Partial<Omit<LeaderboardEntry, 'id'>>;
      };
      notifications: {
        Row: Notification;
        Insert: Omit<Notification, 'id' | 'created_at'>;
        Update: Partial<Omit<Notification, 'id' | 'created_at'>>;
      };
      parent_student_links: {
        Row: ParentStudentLink;
        Insert: Omit<ParentStudentLink, 'id' | 'created_at'>;
        Update: Partial<Omit<ParentStudentLink, 'id' | 'created_at'>>;
      };
    };
  };
}
