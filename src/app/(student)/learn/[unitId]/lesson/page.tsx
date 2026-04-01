'use client';

import { use, useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QuestionDisplay } from '@/components/learning/question-display';
import { X, Heart, ArrowRight, Trophy, Star, Zap, Crown, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSound } from '@/hooks/use-sound';
import { useMasteryStore } from '@/stores/mastery-store';
import { useAuthStore } from '@/stores/auth-store';
import { adjustDifficulty, createSessionState, type SessionState } from '@/lib/adaptive/difficulty-adjuster';
import { calculateQuestionXP, calculateSessionXP } from '@/lib/gamification/xp-system';
import { getMasteryInfo } from '@/lib/adaptive/mastery-system';

import { G1_UNITS, G1_SKILLS, G1_QUESTIONS } from '@/data/curriculum-g1';
import { G2_UNITS, G2_SKILLS, G2_QUESTIONS } from '@/data/curriculum-g2';
import { G3_UNITS, G3_SKILLS, G3_QUESTIONS } from '@/data/curriculum-g3';
import { G4_UNITS, G4_SKILLS, G4_QUESTIONS } from '@/data/curriculum-g4';
import { G5_UNITS, G5_SKILLS, G5_QUESTIONS } from '@/data/curriculum-g5';
import { G6_UNITS, G6_SKILLS, G6_QUESTIONS } from '@/data/curriculum-g6';
import { ensureMinimumPool } from '@/lib/question-generator';
import type { SeedUnit, SeedSkill, SeedQuestion } from '@/data/curriculum-types';

const allUnits: SeedUnit[] = [...G1_UNITS, ...G2_UNITS, ...G3_UNITS, ...G4_UNITS, ...G5_UNITS, ...G6_UNITS];
const allSkills: SeedSkill[] = [...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS, ...G4_SKILLS, ...G5_SKILLS, ...G6_SKILLS];
const allQuestions: SeedQuestion[] = [...G1_QUESTIONS, ...G2_QUESTIONS, ...G3_QUESTIONS, ...G4_QUESTIONS, ...G5_QUESTIONS, ...G6_QUESTIONS];

const SET_SIZE = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function LessonPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = use(params);
  const router = useRouter();
  const sound = useSound();
  const profile = useAuthStore((s) => s.profile);
  const recordAnswer = useMasteryStore((s) => s.recordAnswer);
  const addDailyXp = useMasteryStore((s) => s.addDailyXp);
  const getOrCreateSkill = useMasteryStore((s) => s.getOrCreateSkill);

  const unit = allUnits.find((u) => u.id === unitId);
  const unitSkills = allSkills.filter((s) => s.unitId === unitId);
  const grade = unit?.grade ?? 3;

  // Build question pool with procedural generation
  const questionsRef = useRef<SeedQuestion[]>([]);
  if (questionsRef.current.length === 0) {
    let pool: SeedQuestion[] = [];
    for (const skill of unitSkills) {
      const seedPool = allQuestions.filter(q => q.skillId === skill.id);
      const enriched = ensureMinimumPool(seedPool, skill.id, skill.code, grade, 0, 8);
      pool.push(...enriched);
    }
    // Sort by difficulty for adaptive selection, then shuffle within tiers
    const easy = shuffle(pool.filter(q => q.difficulty < -0.5));
    const medium = shuffle(pool.filter(q => q.difficulty >= -0.5 && q.difficulty <= 0.5));
    const hard = shuffle(pool.filter(q => q.difficulty > 0.5));
    // Structure: 1 easy warmup, then mixed
    questionsRef.current = [
      ...easy.slice(0, 1),
      ...shuffle([...medium.slice(0, 5), ...hard.slice(0, 2), ...easy.slice(1, 2)]),
    ].slice(0, SET_SIZE);
  }
  const unitQuestions = questionsRef.current;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [streak, setStreak] = useState(0);
  const [sessionState, setSessionState] = useState<SessionState>(createSessionState(0));
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [xpBreakdown, setXpBreakdown] = useState<Record<string, number>>({});
  const [levelUpSkills, setLevelUpSkills] = useState<string[]>([]);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const totalQuestions = unitQuestions.length;
  const currentQuestion = unitQuestions[currentIndex];
  const progressPercent = totalQuestions > 0 ? ((currentIndex + (showResult ? 1 : 0)) / totalQuestions) * 100 : 0;

  // Start timer for each question
  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentIndex]);

  const handleAnswer = useCallback((answer: string, correct: boolean) => {
    const timeSpentMs = Date.now() - questionStartTime;
    setShowResult(true);
    setLastCorrect(correct);

    // 1. Update difficulty adjuster
    const adjusted = adjustDifficulty(sessionState, correct, timeSpentMs);
    setSessionState(adjusted.state);

    // 2. Calculate XP
    const qXp = calculateQuestionXP({
      isCorrect: correct,
      isFirstTry: hintsUsed === 0,
      timeSpentMs,
      parTimeMs: (currentQuestion?.estimatedTimeSeconds ?? 30) * 1000,
      streakDays: profile?.current_streak ?? 0,
    });

    // 3. Record mastery
    const skillId = currentQuestion?.skillId;
    if (skillId) {
      const result = recordAnswer(skillId, correct);
      if (result.levelChanged) {
        const skill = unitSkills.find(s => s.id === skillId);
        if (skill && (result.newLevel === 'mastered' || result.newLevel === 'practicing')) {
          setLevelUpSkills(prev => [...prev, `${skill.nameKo}: ${getMasteryInfo(result.newLevel).label}`]);
        }
      }
    }

    if (correct) {
      setCorrectCount((c) => c + 1);
      setStreak((s) => s + 1);
      setXpEarned((x) => x + qXp.xp);
      setXpBreakdown(prev => {
        const merged = { ...prev };
        for (const [k, v] of Object.entries(qXp.breakdown)) {
          merged[k] = (merged[k] ?? 0) + v;
        }
        return merged;
      });
      addDailyXp(qXp.xp);
      sound.playCorrect();
    } else {
      setWrongCount((c) => c + 1);
      setStreak(0);
      setHearts((h) => Math.max(0, h - 1));
      addDailyXp(qXp.xp);
      sound.playWrong();
    }
  }, [streak, hintsUsed, sound, sessionState, questionStartTime, currentQuestion, profile, recordAnswer, addDailyXp, unitSkills]);

  const handleNext = useCallback(() => {
    if (hearts <= 0) {
      setIsComplete(true);
      return;
    }
    if (currentIndex + 1 >= totalQuestions) {
      // Session complete — add session bonus XP
      const sessionXp = calculateSessionXP({
        totalQuestions,
        correctCount: correctCount + (lastCorrect ? 0 : 0), // already counted
        streakDays: profile?.current_streak ?? 0,
        sessionType: 'lesson',
      });
      setXpEarned(x => x + sessionXp.xp);
      setXpBreakdown(prev => ({ ...prev, ...sessionXp.breakdown }));
      addDailyXp(sessionXp.xp);
      setIsComplete(true);
      if (levelUpSkills.length > 0) setShowLevelUp(true);
      sound.playSessionComplete();
      return;
    }
    setCurrentIndex((i) => i + 1);
    setShowResult(false);
    setLastCorrect(null);
    setHintsUsed(0);
  }, [currentIndex, totalQuestions, hearts, sound, correctCount, lastCorrect, profile, addDailyXp, levelUpSkills]);

  const handleUseHint = useCallback(() => {
    setHintsUsed((h) => h + 1);
    sound.playHintReveal();
  }, [sound]);

  if (totalQuestions === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold mb-2">이 단원에 문제가 아직 없어요</p>
        <Link href={`/learn/${unitId}`}>
          <Button variant="outline">돌아가기</Button>
        </Link>
      </div>
    );
  }

  // ─── Session Complete Screen ─────────────────────────────
  if (isComplete) {
    const accuracy = (correctCount + wrongCount) > 0
      ? Math.round((correctCount / (correctCount + wrongCount)) * 100)
      : 0;
    const isPerfect = wrongCount === 0 && totalQuestions > 0;

    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center space-y-6 py-10">
        {/* Celebration */}
        <div className="relative">
          <div className="text-7xl mb-2 animate-bounce">{isPerfect ? '🎉' : accuracy >= 70 ? '👏' : '💪'}</div>
          {isPerfect && (
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full px-2 py-0.5 text-xs font-bold animate-pulse">
              PERFECT!
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold">
          {isPerfect ? '완벽해요!' : accuracy >= 80 ? '훌륭해요!' : accuracy >= 60 ? '잘했어요!' : '다음엔 더 잘할 수 있어요!'}
        </h1>
        <p className="text-muted-foreground">{unit?.nameKo ?? '학습'} 완료</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 py-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30">
              <Target className="h-7 w-7 text-green-600" />
            </div>
            <p className="text-2xl font-bold">{accuracy}%</p>
            <p className="text-xs text-muted-foreground">정답률</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/30">
              <Star className="h-7 w-7 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">+{xpEarned}</p>
            <p className="text-xs text-muted-foreground">XP 획득</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
              <Zap className="h-7 w-7 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">{correctCount}/{correctCount + wrongCount}</p>
            <p className="text-xs text-muted-foreground">맞은 문제</p>
          </div>
        </div>

        {/* XP Breakdown */}
        {Object.keys(xpBreakdown).length > 0 && (
          <div className="w-full max-w-xs bg-muted/50 rounded-xl p-4 space-y-1">
            <p className="text-sm font-semibold mb-2">XP 상세</p>
            {Object.entries(xpBreakdown).map(([key, val]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{key}</span>
                <span className="font-medium text-primary">+{val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Skill Level-ups */}
        {levelUpSkills.length > 0 && (
          <div className="w-full max-w-xs space-y-2">
            {levelUpSkills.map((msg, i) => (
              <div key={i} className="flex items-center gap-2 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3">
                <Crown className="h-5 w-5 text-yellow-600 shrink-0" />
                <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">{msg}</span>
              </div>
            ))}
          </div>
        )}

        {/* Difficulty feedback */}
        <p className="text-xs text-muted-foreground">
          {sessionState.isInFlowState ? '플로우 상태에서 학습 중! 난이도를 올렸어요.' :
           accuracy < 50 ? '다음엔 더 쉬운 문제로 시작할게요.' :
           '학습 데이터가 저장되었어요.'}
        </p>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Link href={`/learn/${unitId}`}>
            <Button className="w-full h-12 text-base">완료</Button>
          </Link>
          <Link href={`/learn/${unitId}/lesson`}>
            <Button variant="outline" className="w-full">다시 도전하기</Button>
          </Link>
        </div>
      </div>
    );
  }

  // ─── Active Lesson UI ────────────────────────────────────
  return (
    <div className="mx-auto max-w-lg space-y-6">
      {/* Top bar */}
      <div className="flex items-center gap-3">
        <Link href={`/learn/${unitId}`}>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
          </Button>
        </Link>
        <Progress value={progressPercent} className="flex-1 h-3" />
        <span className="text-sm font-medium text-muted-foreground">
          {currentIndex + 1}/{totalQuestions}
        </span>
      </div>

      {/* Hearts */}
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Heart
            key={i}
            className={cn(
              'h-5 w-5 transition-all',
              i < hearts ? 'text-red-500 fill-red-500' : 'text-muted-foreground/20'
            )}
          />
        ))}
      </div>

      {/* Streak indicator */}
      {streak >= 2 && (
        <div className="text-center">
          <span className={cn(
            'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold',
            streak >= 5 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
          )}>
            🔥 {streak}연속 정답!
            {streak >= 5 && ' 불꽃!'}
          </span>
        </div>
      )}

      {/* Difficulty indicator */}
      <div className="flex justify-center">
        <span className={cn(
          'text-[10px] px-2 py-0.5 rounded-full',
          sessionState.isInFlowState ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'
        )}>
          {sessionState.isInFlowState ? '플로우 상태' : `난이도: ${sessionState.difficultyLabel}`}
        </span>
      </div>

      {/* Question */}
      {currentQuestion && (
        <QuestionDisplay
          question={currentQuestion}
          onAnswer={handleAnswer}
          hintsUsed={hintsUsed}
          onUseHint={handleUseHint}
          showResult={showResult}
          isCorrect={lastCorrect}
        />
      )}

      {/* Next button */}
      {showResult && (
        <div className="space-y-2">
          {/* Feedback from difficulty adjuster */}
          {sessionState.consecutiveCorrect >= 3 && lastCorrect && (
            <p className="text-center text-sm font-medium text-green-600">
              🔥 {sessionState.consecutiveCorrect}연속! 난이도를 올려볼까요?
            </p>
          )}
          {sessionState.consecutiveWrong >= 2 && !lastCorrect && (
            <p className="text-center text-sm text-muted-foreground">
              괜찮아요! 좀 더 쉬운 문제로 갈게요.
            </p>
          )}
          <Button onClick={handleNext} className="w-full h-12 text-base gap-2">
            {currentIndex + 1 >= totalQuestions ? '결과 보기' : '다음 문제'}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
