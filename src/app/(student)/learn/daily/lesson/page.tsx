'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuestionDisplay } from '@/components/learning/question-display';
import { X, Heart, ArrowRight, Trophy, Star, Zap, Crown, CheckCircle, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSound } from '@/hooks/use-sound';
import { useMasteryStore } from '@/stores/mastery-store';
import { useAuthStore } from '@/stores/auth-store';
import { adjustDifficulty, createSessionState, type SessionState } from '@/lib/adaptive/difficulty-adjuster';
import { calculateQuestionXP, calculateSessionXP } from '@/lib/gamification/xp-system';
import { getMasteryInfo } from '@/lib/adaptive/mastery-system';
import type { SeedQuestion } from '@/data/curriculum-types';

type Phase = 'first_round' | 'retry_intro' | 'retry_round' | 'complete';

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
  const [xpEarned, setXpEarned] = useState(0);
  const [streak, setStreak] = useState(0);
  const [sessionState, setSessionState] = useState<SessionState>(createSessionState(0));
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [xpBreakdown, setXpBreakdown] = useState<Record<string, number>>({});
  const [levelUpSkills, setLevelUpSkills] = useState<string[]>([]);

  // Retry system
  const [phase, setPhase] = useState<Phase>('first_round');
  const [wrongIndices, setWrongIndices] = useState<number[]>([]);
  const [retryQueue, setRetryQueue] = useState<SeedQuestion[]>([]);
  const [retryIndex, setRetryIndex] = useState(0);
  const [retryCorrectCount, setRetryCorrectCount] = useState(0);

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
  }, [currentIndex, retryIndex, phase]);

  const totalQuestions = questions.length;
  const isRetrying = phase === 'retry_round';
  const currentQuestion = isRetrying
    ? retryQueue[retryIndex]
    : questions[currentIndex];

  const progressPercent = isRetrying
    ? retryQueue.length > 0 ? ((retryIndex + (showResult ? 1 : 0)) / retryQueue.length) * 100 : 100
    : totalQuestions > 0 ? ((currentIndex + (showResult ? 1 : 0)) / totalQuestions) * 100 : 0;

  /* ─── First round answer handler ─── */
  const handleAnswer = useCallback((answer: string, correct: boolean) => {
    const timeSpentMs = Date.now() - questionStartTime;
    setShowResult(true);

    const adjusted = adjustDifficulty(sessionState, correct, timeSpentMs);
    setSessionState(adjusted.state);

    const qXp = calculateQuestionXP({
      isCorrect: correct,
      isFirstTry: hintsUsed === 0,
      timeSpentMs,
      parTimeMs: (currentQuestion?.estimatedTimeSeconds ?? 30) * 1000,
      streakDays: profile?.current_streak ?? 0,
    });

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
      setLastCorrect(true);
    } else {
      setWrongCount((c) => c + 1);
      setStreak(0);
      setHearts((h) => Math.max(0, h - 1));
      addDailyXp(qXp.xp);
      sound.playWrong();
      setLastCorrect(false);
      // Track wrong question for retry
      if (!isRetrying) {
        setWrongIndices(prev => [...prev, currentIndex]);
      }
    }
  }, [streak, hintsUsed, sound, sessionState, questionStartTime, currentQuestion, profile, recordAnswer, addDailyXp, currentIndex, isRetrying]);

  /* ─── First round: next question ─── */
  const handleNext = useCallback(() => {
    if (hearts <= 0 || currentIndex + 1 >= totalQuestions) {
      // First round done — check for wrong answers
      const newWrong = [...wrongIndices];
      // Include current if it was wrong
      if (lastCorrect === false && !newWrong.includes(currentIndex)) {
        newWrong.push(currentIndex);
      }

      if (newWrong.length > 0) {
        // Go to retry intro
        const retryQs = newWrong.map(i => questions[i]);
        setRetryQueue(retryQs);
        setPhase('retry_intro');
      } else {
        // Perfect! Go to completion
        finishSession();
      }
      return;
    }
    setCurrentIndex((i) => i + 1);
    setShowResult(false);
    setLastCorrect(null);
    setHintsUsed(0);
  }, [currentIndex, totalQuestions, hearts, wrongIndices, lastCorrect, questions]);

  /* ─── Retry round: next question ─── */
  const handleRetryNext = useCallback(() => {
    if (lastCorrect) {
      setRetryCorrectCount(c => c + 1);
    }
    if (retryIndex + 1 >= retryQueue.length) {
      finishSession();
      return;
    }
    setRetryIndex(i => i + 1);
    setShowResult(false);
    setLastCorrect(null);
    setHintsUsed(0);
  }, [retryIndex, retryQueue.length, lastCorrect]);

  /* ─── Start retry round ─── */
  const startRetry = useCallback(() => {
    setPhase('retry_round');
    setRetryIndex(0);
    setShowResult(false);
    setLastCorrect(null);
    setHintsUsed(0);
  }, []);

  /* ─── Finish session ─── */
  function finishSession() {
    const sessionXp = calculateSessionXP({
      totalQuestions,
      correctCount,
      streakDays: profile?.current_streak ?? 0,
      sessionType: 'daily_quest',
    });
    setXpEarned(x => x + sessionXp.xp);
    setXpBreakdown(prev => ({ ...prev, ...sessionXp.breakdown }));
    addDailyXp(sessionXp.xp);
    setPhase('complete');
    sound.playSessionComplete();
  }

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

  /* ─── Retry intro screen ─── */
  if (phase === 'retry_intro') {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center space-y-6 py-10">
        <div className="text-6xl">🔄</div>
        <h1 className="text-2xl font-extrabold">틀린 문제를 다시 풀어봐요!</h1>
        <p className="text-muted-foreground">
          {retryQueue.length}개 문제를 맞출 때까지 도전!
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-emerald-600">
            <CheckCircle className="h-4 w-4" /> 맞음 {correctCount}
          </span>
          <span className="flex items-center gap-1 text-red-500">
            <X className="h-4 w-4" /> 틀림 {retryQueue.length}
          </span>
        </div>
        <Button
          onClick={startRetry}
          className="h-12 px-8 text-base rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg gap-2"
        >
          <RotateCcw className="h-5 w-5" /> 다시 풀기
        </Button>
      </div>
    );
  }

  /* ─── Completion screen ─── */
  if (phase === 'complete') {
    const totalAnswered = correctCount + wrongCount;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    const isPerfect = wrongCount === 0;
    const todayStats = getTodayStats();

    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center space-y-5 py-10">
        <div className="relative">
          <div className="text-7xl mb-1">{isPerfect ? '🎉' : accuracy >= 70 ? '👏' : '💪'}</div>
          {isPerfect && <div className="absolute -inset-4 animate-ping rounded-full bg-yellow-400/20" />}
        </div>
        <h1 className="text-3xl font-extrabold">
          {isPerfect ? '완벽해요!' : accuracy >= 80 ? '훌륭해요!' : accuracy >= 60 ? '잘했어요!' : '다음엔 더 잘할 수 있어요!'}
        </h1>

        {retryQueue.length > 0 && retryCorrectCount > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
            <RotateCcw className="h-3.5 w-3.5" />
            재풀기 {retryCorrectCount}/{retryQueue.length} 성공
          </span>
        )}

        {levelUpSkills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {levelUpSkills.map((label, i) => (
              <span key={i} className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                <Crown className="h-3.5 w-3.5" /> 스킬 {label}!
              </span>
            ))}
          </div>
        )}

        {todayStats.goalMet && (
          <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800 px-5 py-2.5 shadow-sm">
            <CheckCircle className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">오늘의 목표 달성!</span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 py-3 w-full max-w-sm">
          <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-gradient-to-b from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-900/10 p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-200 dark:shadow-emerald-900/40">
              <Trophy className="h-6 w-6" />
            </div>
            <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{accuracy}%</p>
            <p className="text-[10px] font-medium text-muted-foreground">정답률</p>
          </div>
          <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-gradient-to-b from-violet-50 to-purple-100/50 dark:from-violet-900/20 dark:to-purple-900/10 p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500 text-white shadow-md shadow-violet-200 dark:shadow-violet-900/40">
              <Star className="h-6 w-6" />
            </div>
            <p className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">+{xpEarned}</p>
            <p className="text-[10px] font-medium text-muted-foreground">XP 획득</p>
          </div>
          <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/40">
              <Zap className="h-6 w-6" />
            </div>
            <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{correctCount}/{totalAnswered}</p>
            <p className="text-[10px] font-medium text-muted-foreground">맞은 문제</p>
          </div>
        </div>

        {Object.keys(xpBreakdown).length > 0 && (
          <div className="w-full max-w-xs rounded-2xl bg-gradient-to-b from-muted/60 to-muted/30 border border-border p-4 space-y-1.5">
            <p className="text-sm font-bold mb-2">XP 상세</p>
            {Object.entries(xpBreakdown).map(([key, val]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{key}</span>
                <span className="font-bold text-violet-600 dark:text-violet-400">+{val}</span>
              </div>
            ))}
          </div>
        )}

        <div className="w-full max-w-xs">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="font-medium">오늘의 진행</span>
            <span className="text-muted-foreground">{todayStats.total}문제 풀음</span>
          </div>
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-purple-500 transition-all" style={{ width: `${Math.min(100, (todayStats.total / 10) * 100)}%` }} />
          </div>
        </div>

        <Link href="/home" className="w-full max-w-xs">
          <Button className="w-full h-12 text-base rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-200 dark:shadow-violet-900/40">
            홈으로
          </Button>
        </Link>
      </div>
    );
  }

  /* ─── Question view (first round + retry round) ─── */
  // In first round: wrong answer → don't show explanation, just "틀렸어요"
  // In retry round: show full explanation (they already tried once)
  const hideExplanationOnWrong = !isRetrying && lastCorrect === false;

  return (
    <div className="mx-auto max-w-lg space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/home"><Button variant="ghost" size="icon"><X className="h-5 w-5" /></Button></Link>
        <Progress value={progressPercent} className="flex-1 h-3" />
        <span className="text-sm font-medium text-muted-foreground">
          {isRetrying ? `${retryIndex + 1}/${retryQueue.length}` : `${currentIndex + 1}/${totalQuestions}`}
        </span>
      </div>

      {/* Retry indicator */}
      {isRetrying && (
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
            <RotateCcw className="h-3.5 w-3.5" /> 오답 재풀기
          </span>
        </div>
      )}

      {/* Hearts (first round only) */}
      {!isRetrying && (
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart key={i} className={cn('h-5 w-5 transition-all', i < hearts ? 'text-red-500 fill-red-500' : 'text-muted-foreground/20')} />
          ))}
        </div>
      )}

      {/* Streak */}
      {streak >= 2 && (
        <div className="text-center">
          <span className={cn(
            'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold',
            streak >= 5 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30'
          )}>
            🔥 {streak}연속 정답!{streak >= 5 && ' 불꽃!'}
          </span>
        </div>
      )}

      {/* Difficulty */}
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
          hideExplanation={hideExplanationOnWrong}
        />
      )}

      {/* Result actions */}
      {showResult && (
        <div className="space-y-2">
          {/* Wrong in first round: encourage retry */}
          {hideExplanationOnWrong && (
            <p className="text-center text-sm font-medium text-orange-600">
              아쉬워요! 나중에 다시 풀어볼게요 💪
            </p>
          )}
          {sessionState.consecutiveCorrect >= 3 && lastCorrect && (
            <p className="text-center text-sm font-medium text-green-600">🔥 연속 정답! 잘하고 있어요!</p>
          )}
          <Button
            onClick={isRetrying ? handleRetryNext : handleNext}
            className="w-full h-12 text-base gap-2"
          >
            {isRetrying
              ? retryIndex + 1 >= retryQueue.length ? '결과 보기' : '다음 문제'
              : currentIndex + 1 >= totalQuestions
                ? wrongIndices.length > 0 || lastCorrect === false ? '오답 재풀기' : '결과 보기'
                : '다음 문제'
            }
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
