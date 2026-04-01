'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuestionDisplay } from '@/components/learning/question-display';
import { X, Heart, ArrowRight, Trophy, Star, Zap, Crown, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSound } from '@/hooks/use-sound';
import { useMasteryStore } from '@/stores/mastery-store';
import { useAuthStore } from '@/stores/auth-store';
import { adjustDifficulty, createSessionState, type SessionState } from '@/lib/adaptive/difficulty-adjuster';
import { calculateQuestionXP, calculateSessionXP } from '@/lib/gamification/xp-system';
import { getMasteryInfo } from '@/lib/adaptive/mastery-system';
import type { SeedQuestion } from '@/data/curriculum-types';

export default function DailyLessonPage() {
  const router = useRouter();
  const sound = useSound();
  const profile = useAuthStore((s) => s.profile);
  const recordAnswer = useMasteryStore((s) => s.recordAnswer);
  const addDailyXp = useMasteryStore((s) => s.addDailyXp);
  const getTodayStats = useMasteryStore((s) => s.getTodayStats);

  const [questions, setQuestions] = useState<SeedQuestion[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('mv_lesson');
      if (stored) {
        const data = JSON.parse(stored);
        setQuestions(data.questions ?? []);
        sessionStorage.removeItem('mv_lesson');
      }
    } catch { /* ignore */ }
    setLoading(false);
  }, []);

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentIndex]);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const progressPercent = totalQuestions > 0 ? ((currentIndex + (showResult ? 1 : 0)) / totalQuestions) * 100 : 0;

  const handleAnswer = useCallback((answer: string, correct: boolean) => {
    const timeSpentMs = Date.now() - questionStartTime;
    setShowResult(true);
    setLastCorrect(correct);

    // Update difficulty adjuster
    const adjusted = adjustDifficulty(sessionState, correct, timeSpentMs);
    setSessionState(adjusted.state);

    // Calculate XP
    const qXp = calculateQuestionXP({
      isCorrect: correct,
      isFirstTry: hintsUsed === 0,
      timeSpentMs,
      parTimeMs: (currentQuestion?.estimatedTimeSeconds ?? 30) * 1000,
      streakDays: profile?.current_streak ?? 0,
    });

    // Record mastery
    const skillId = currentQuestion?.skillId;
    if (skillId) {
      const result = recordAnswer(skillId, correct);
      if (result.levelChanged && (result.newLevel === 'mastered' || result.newLevel === 'practicing')) {
        setLevelUpSkills(prev => [...prev, getMasteryInfo(result.newLevel).label]);
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
  }, [streak, hintsUsed, sound, sessionState, questionStartTime, currentQuestion, profile, recordAnswer, addDailyXp]);

  const handleNext = useCallback(() => {
    if (hearts <= 0 || currentIndex + 1 >= totalQuestions) {
      const sessionXp = calculateSessionXP({
        totalQuestions,
        correctCount,
        streakDays: profile?.current_streak ?? 0,
        sessionType: 'daily_quest',
      });
      setXpEarned(x => x + sessionXp.xp);
      setXpBreakdown(prev => ({ ...prev, ...sessionXp.breakdown }));
      addDailyXp(sessionXp.xp);
      setIsComplete(true);
      sound.playSessionComplete();
      return;
    }
    setCurrentIndex((i) => i + 1);
    setShowResult(false);
    setLastCorrect(null);
    setHintsUsed(0);
  }, [currentIndex, totalQuestions, hearts, sound, correctCount, profile, addDailyXp]);

  const handleUseHint = useCallback(() => {
    setHintsUsed((h) => h + 1);
    sound.playHintReveal();
  }, [sound]);

  if (loading) return <div className="flex min-h-[60vh] items-center justify-center"><p className="text-muted-foreground">로딩 중...</p></div>;

  if (totalQuestions === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold mb-2">문제를 불러올 수 없어요</p>
        <Link href="/home"><Button variant="outline">돌아가기</Button></Link>
      </div>
    );
  }

  if (isComplete) {
    const accuracy = (correctCount + wrongCount) > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;
    const isPerfect = wrongCount === 0;
    const todayStats = getTodayStats();

    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center space-y-6 py-10">
        <div className="text-7xl mb-2 animate-bounce">{isPerfect ? '🎉' : accuracy >= 70 ? '👏' : '💪'}</div>
        <h1 className="text-3xl font-bold">
          {isPerfect ? '완벽해요!' : accuracy >= 80 ? '훌륭해요!' : accuracy >= 60 ? '잘했어요!' : '다음엔 더 잘할 수 있어요!'}
        </h1>
        <p className="text-muted-foreground">오늘의 학습 완료</p>

        {/* Daily goal check */}
        {todayStats.goalMet && (
          <div className="flex items-center gap-2 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">오늘의 목표 달성!</span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-6 py-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30">
              <Trophy className="h-7 w-7 text-green-600" />
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

        {/* XP breakdown */}
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

        {/* Today's progress */}
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-xs mb-1">
            <span>오늘의 진행</span>
            <span>{todayStats.total}문제 풀음</span>
          </div>
          <Progress value={Math.min(100, (todayStats.total / 10) * 100)} className="h-2" />
        </div>

        <Link href="/home"><Button className="w-full max-w-xs h-12 text-base">홈으로</Button></Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/home"><Button variant="ghost" size="icon"><X className="h-5 w-5" /></Button></Link>
        <Progress value={progressPercent} className="flex-1 h-3" />
        <span className="text-sm font-medium text-muted-foreground">{currentIndex + 1}/{totalQuestions}</span>
      </div>
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Heart key={i} className={cn('h-5 w-5 transition-all', i < hearts ? 'text-red-500 fill-red-500' : 'text-muted-foreground/20')} />
        ))}
      </div>

      {streak >= 2 && (
        <div className="text-center">
          <span className={cn(
            'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold',
            streak >= 5 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30' :
            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30'
          )}>
            🔥 {streak}연속 정답!{streak >= 5 && ' 불꽃!'}
          </span>
        </div>
      )}

      <div className="flex justify-center">
        <span className={cn(
          'text-[10px] px-2 py-0.5 rounded-full',
          sessionState.isInFlowState ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'
        )}>
          {sessionState.isInFlowState ? '플로우 상태' : `난이도: ${sessionState.difficultyLabel}`}
        </span>
      </div>

      {currentQuestion && (
        <QuestionDisplay question={currentQuestion} onAnswer={handleAnswer} hintsUsed={hintsUsed} onUseHint={handleUseHint} showResult={showResult} isCorrect={lastCorrect} />
      )}
      {showResult && (
        <div className="space-y-2">
          {sessionState.consecutiveCorrect >= 3 && lastCorrect && (
            <p className="text-center text-sm font-medium text-green-600">🔥 연속 정답! 잘하고 있어요!</p>
          )}
          <Button onClick={handleNext} className="w-full h-12 text-base gap-2">
            {currentIndex + 1 >= totalQuestions ? '결과 보기' : '다음 문제'} <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
