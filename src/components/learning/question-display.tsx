'use client';

import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Lightbulb, Check, X, ArrowUp, ArrowDown, GripVertical } from 'lucide-react';
import type { SeedQuestion } from '@/data/curriculum-types';

/**
 * Render text with fractions (a/b) as proper KaTeX fractions
 * and math operators (×, ÷, +, -, =) nicely formatted.
 */
function MathText({ text, className }: { text: string; className?: string }) {
  // Convert fraction patterns and math to KaTeX
  const html = useMemo(() => {
    try {
      const katex = require('katex');
      // Replace fractions like 1/4, 2/3, 12/100 with \frac{}{}
      // Also handle expressions like "1/4 × 2/3 = □"
      let latex = text
        // fractions: number/number
        .replace(/(\d+)\s*\/\s*(\d+)/g, '\\frac{$1}{$2}')
        // operators
        .replace(/×/g, '\\times ')
        .replace(/÷/g, '\\div ')
        .replace(/□/g, '\\square ')
        .replace(/△/g, '\\triangle ')
        .replace(/≥/g, '\\geq ')
        .replace(/≤/g, '\\leq ')
        .replace(/≠/g, '\\neq ');

      // Only render as KaTeX if there's actual math content
      if (latex !== text) {
        return katex.renderToString(latex, { throwOnError: false, displayMode: false });
      }
    } catch {
      // KaTeX not available, fall through
    }
    return null;
  }, [text]);

  if (html) {
    return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <span className={className}>{text}</span>;
}

/** Render text, auto-detecting and converting fractions to proper display */
function RichText({ children, className }: { children: string; className?: string }) {
  // Check if text contains fraction patterns
  const hasFraction = /\d+\s*\/\s*\d+/.test(children);
  const hasMathSymbol = /[×÷□△]/.test(children);

  if (hasFraction || hasMathSymbol) {
    return <MathText text={children} className={className} />;
  }
  return <span className={className}>{children}</span>;
}

/** Check if two fraction strings are equivalent (e.g., 2/12 === 1/6) */
function areFractionsEqual(a: string, b: string): boolean {
  const parseFrac = (s: string): [number, number] | null => {
    const m = s.trim().match(/^(-?\d+)\s*\/\s*(\d+)$/);
    if (!m) return null;
    return [parseInt(m[1]), parseInt(m[2])];
  };
  const fa = parseFrac(a);
  const fb = parseFrac(b);
  if (!fa || !fb) return false;
  if (fa[1] === 0 || fb[1] === 0) return false;
  // Cross-multiply to compare: a/b == c/d iff a*d == b*c
  return fa[0] * fb[1] === fa[1] * fb[0];
}

/** Normalize comparison: handles numbers, fractions (with equivalence), text */
function isAnswerCorrect(given: string, correct: string): boolean {
  const g = given.replace(/\s/g, '').replace(/,/g, '').toLowerCase();
  const c = correct.replace(/\s/g, '').replace(/,/g, '').toLowerCase();
  if (g === c) return true;
  // Check numeric equality
  const gn = Number(g);
  const cn = Number(c);
  if (!isNaN(gn) && !isNaN(cn) && gn === cn) return true;
  // Check fraction equivalence
  if (g.includes('/') || c.includes('/')) {
    return areFractionsEqual(g, c);
  }
  return false;
}

/** Generate auto choices from a correct answer for SHORT_ANSWER/FILL_IN_BLANK */
function generateAutoChoices(correctAnswer: string | number | boolean | undefined): string[] | null {
  if (correctAnswer === undefined || correctAnswer === null) return null;
  const correct = String(correctAnswer).trim();
  if (!correct) return null;

  // Try numeric
  const num = Number(correct);
  if (!isNaN(num) && correct.match(/^-?\d+(\.\d+)?(\/\d+)?$/)) {
    if (correct.includes('/')) {
      // Fraction: generate similar fractions
      const [n, d] = correct.split('/').map(Number);
      const choices = new Set<string>([correct]);
      if (n + 1 <= (d ?? 1)) choices.add(`${n + 1}/${d}`);
      if (n - 1 >= 0) choices.add(`${n - 1}/${d}`);
      choices.add(`${d}/${n || 1}`);
      choices.add(`${n}/${(d ?? 1) + 1}`);
      const arr = [...choices].filter(c => c !== correct).slice(0, 3);
      if (arr.length < 3) arr.push(`${n + 2}/${d}`);
      return shuffle([correct, ...arr.slice(0, 3)]);
    }
    // Number: generate nearby numbers
    const choices = new Set<string>([correct]);
    const offsets = [1, -1, 2, -2, 10, -10, 5, -5];
    for (const off of offsets) {
      const v = num + off;
      if (v >= 0) choices.add(String(correct.includes('.') ? Number(v.toFixed(1)) : v));
      if (choices.size >= 4) break;
    }
    // Also try common mistakes from the question
    return shuffle([...choices].slice(0, 4));
  }

  // Text answer: try to create plausible choices
  const textChoices: Record<string, string[]> = {
    '선대칭': ['선대칭', '점대칭', '둘 다', '해당 없음'],
    '점대칭': ['선대칭', '점대칭', '둘 다', '해당 없음'],
    '둘 다': ['선대칭', '점대칭', '둘 다', '해당 없음'],
    '예각': ['예각', '직각', '둔각', '평각'],
    '직각': ['예각', '직각', '둔각', '평각'],
    '둔각': ['예각', '직각', '둔각', '평각'],
    '평각': ['예각', '직각', '둔각', '평각'],
    '직사각형': ['직사각형', '정사각형', '평행사변형', '마름모'],
    '정사각형': ['직사각형', '정사각형', '평행사변형', '마름모'],
    '삼각형': ['삼각형', '사각형', '오각형', '원'],
    '원': ['삼각형', '사각형', '오각형', '원'],
  };
  if (textChoices[correct]) return shuffle(textChoices[correct]);

  // Short Korean text: generate with common alternatives
  if (correct.length <= 10) {
    return null; // Can't auto-generate meaningful text choices
  }

  return null;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface QuestionDisplayProps {
  question: SeedQuestion;
  onAnswer: (answer: string, isCorrect: boolean) => void;
  hintsUsed: number;
  onUseHint: () => void;
  showResult: boolean;
  isCorrect: boolean | null;
}

export function QuestionDisplay({
  question,
  onAnswer,
  hintsUsed,
  onUseHint,
  showResult,
  isCorrect,
}: QuestionDisplayProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [orderedItems, setOrderedItems] = useState<string[]>([]);
  const [matchSelections, setMatchSelections] = useState<Record<string, string>>({});
  const [matchActiveLeft, setMatchActiveLeft] = useState<string | null>(null);
  const { content } = question;
  const hints = content.hints ?? [];

  // Auto-generate choices for SHORT_ANSWER/FILL_IN_BLANK
  const autoChoices = useMemo(() => {
    if (question.questionType === 'SHORT_ANSWER' || question.questionType === 'FILL_IN_BLANK') {
      const correct = String(question.content.correctAnswer ?? '').trim();
      const fromMistakes = (question.content.commonMistakes ?? []).map(m => m.answer);
      const generated = generateAutoChoices(question.content.correctAnswer);
      if (generated) return generated;
      if (fromMistakes.length > 0 && correct) {
        const all = new Set([correct, ...fromMistakes]);
        const num = Number(correct);
        if (!isNaN(num)) {
          [1, -1, 2].forEach(off => all.add(String(num + off)));
        }
        return shuffle([...all].slice(0, 4));
      }
    }
    return null;
  }, [question]);

  const useAutoChoices = autoChoices !== null;

  // Initialize ordering items (shuffled)
  const initOrdering = useCallback(() => {
    if (question.questionType === 'ORDERING' && content.correctOrder && orderedItems.length === 0) {
      const shuffled = [...content.correctOrder].sort(() => Math.random() - 0.5);
      setOrderedItems(shuffled);
    }
  }, [question.questionType, content.correctOrder, orderedItems.length]);

  // Call init on first render for ordering
  if (question.questionType === 'ORDERING' && orderedItems.length === 0 && content.correctOrder) {
    initOrdering();
  }

  function moveItem(index: number, direction: 'up' | 'down') {
    if (showResult) return;
    const newItems = [...orderedItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setOrderedItems(newItems);
  }

  function handleMatchSelect(left: string) {
    if (showResult) return;
    setMatchActiveLeft(left);
  }

  function handleMatchRight(right: string) {
    if (showResult || !matchActiveLeft) return;
    setMatchSelections(prev => ({ ...prev, [matchActiveLeft]: right }));
    setMatchActiveLeft(null);
  }

  function handleSubmit() {
    if (showResult) return;

    let answer = '';
    let correct = false;

    switch (question.questionType) {
      case 'MULTIPLE_CHOICE': {
        if (!selectedOption) return;
        answer = selectedOption;
        const correctOpt = content.options?.find((o) => o.isCorrect);
        correct = selectedOption === correctOpt?.id;
        break;
      }
      case 'SHORT_ANSWER':
      case 'FILL_IN_BLANK': {
        if (useAutoChoices) {
          if (!selectedOption) return;
          answer = selectedOption;
          correct = isAnswerCorrect(answer, String(content.correctAnswer));
        } else {
          if (!textInput.trim()) return;
          answer = textInput.trim();
          correct = isAnswerCorrect(answer, String(content.correctAnswer));
        }
        break;
      }
      case 'TRUE_FALSE': {
        if (!selectedOption) return;
        answer = selectedOption;
        correct = (selectedOption === 'true') === content.correctAnswer;
        break;
      }
      case 'ORDERING': {
        if (orderedItems.length === 0) return;
        answer = orderedItems.join(',');
        correct = content.correctOrder
          ? orderedItems.every((item, i) => item === content.correctOrder![i])
          : false;
        break;
      }
      case 'MATCHING': {
        const pairs = content.pairs ?? [];
        if (Object.keys(matchSelections).length < pairs.length) return;
        answer = JSON.stringify(matchSelections);
        correct = pairs.every(p => matchSelections[p.left] === p.right);
        break;
      }
      default: {
        if (!textInput.trim()) return;
        answer = textInput.trim();
        correct = String(content.correctAnswer).trim() === answer;
      }
    }

    onAnswer(answer, correct);
  }

  const canSubmit = (() => {
    switch (question.questionType) {
      case 'MULTIPLE_CHOICE':
      case 'TRUE_FALSE':
        return selectedOption !== null;
      case 'SHORT_ANSWER':
      case 'FILL_IN_BLANK':
        return useAutoChoices ? selectedOption !== null : textInput.trim() !== '';
      case 'ORDERING':
        return orderedItems.length > 0;
      case 'MATCHING':
        return Object.keys(matchSelections).length === (content.pairs?.length ?? 0);
      default:
        return textInput.trim() !== '';
    }
  })();

  return (
    <div className="space-y-6">
      {/* Question text */}
      <div className="text-center">
        <div className="text-xl font-semibold leading-relaxed whitespace-pre-line">
          <RichText>{content.questionText}</RichText>
        </div>
        {content.questionLatex && (
          <div
            className="mt-2 text-2xl text-primary"
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  const katex = require('katex');
                  const tex = content.questionLatex!
                    .replace(/\\square/g, '\\Box')
                    .replace(/\\boxed\{\\}/g, '\\Box');
                  return katex.renderToString(tex, { throwOnError: false, displayMode: true });
                } catch {
                  return content.questionLatex!.replace(/\\square/g, '□');
                }
              })(),
            }}
          />
        )}
      </div>

      {/* Answer area */}
      <div className="space-y-3">
        {/* ─── Multiple Choice ──────────────────────── */}
        {question.questionType === 'MULTIPLE_CHOICE' && content.options && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {content.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const showCorrect = showResult && opt.isCorrect;
              const showWrong = showResult && isSelected && !opt.isCorrect;

              return (
                <button
                  key={opt.id}
                  onClick={() => !showResult && setSelectedOption(opt.id)}
                  disabled={showResult}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all',
                    showCorrect && 'border-green-500 bg-green-50 dark:bg-green-900/20',
                    showWrong && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                    !showResult && isSelected && 'border-primary bg-primary/5',
                    !showResult && !isSelected && 'border-border hover:border-primary/40',
                    showResult && !showCorrect && !showWrong && 'opacity-50'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold',
                      showCorrect && 'border-green-500 bg-green-500 text-white',
                      showWrong && 'border-red-500 bg-red-500 text-white',
                      !showResult && isSelected && 'border-primary bg-primary text-primary-foreground',
                      !showResult && !isSelected && 'border-muted-foreground/30'
                    )}
                  >
                    {showCorrect ? <Check className="h-4 w-4" /> :
                     showWrong ? <X className="h-4 w-4" /> :
                     opt.id.toUpperCase()}
                  </div>
                  <span className="font-medium"><RichText>{opt.text}</RichText></span>
                </button>
              );
            })}
          </div>
        )}

        {/* ─── True/False ───────────────────────────── */}
        {question.questionType === 'TRUE_FALSE' && (
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'true', label: '⭕ 맞아요' },
              { id: 'false', label: '❌ 아니에요' },
            ].map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isCorrectAnswer = String(content.correctAnswer) === opt.id;
              const showCorrectOpt = showResult && isCorrectAnswer;
              const showWrongOpt = showResult && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={opt.id}
                  onClick={() => !showResult && setSelectedOption(opt.id)}
                  disabled={showResult}
                  className={cn(
                    'rounded-xl border-2 p-4 text-center text-lg font-semibold transition-all',
                    showCorrectOpt && 'border-green-500 bg-green-50',
                    showWrongOpt && 'border-red-500 bg-red-50',
                    !showResult && isSelected && 'border-primary bg-primary/5',
                    !showResult && !isSelected && 'border-border hover:border-primary/40'
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}

        {/* ─── Short Answer / Fill in Blank ─────────── */}
        {(question.questionType === 'SHORT_ANSWER' || question.questionType === 'FILL_IN_BLANK') && (
          useAutoChoices && autoChoices ? (
            /* Auto-generated tap-friendly choices */
            <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
              {autoChoices.map((choice, ci) => {
                const isSelected = selectedOption === choice;
                const isCorrectChoice = isAnswerCorrect(choice, String(content.correctAnswer));
                const showCorrectC = showResult && isCorrectChoice;
                const showWrongC = showResult && isSelected && !isCorrectChoice;

                return (
                  <button
                    key={ci}
                    onClick={() => !showResult && setSelectedOption(choice)}
                    disabled={showResult}
                    className={cn(
                      'rounded-xl border-2 p-4 text-center text-base font-semibold transition-all min-h-[56px]',
                      showCorrectC && 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700',
                      showWrongC && 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700',
                      !showResult && isSelected && 'border-primary bg-primary/5 text-primary',
                      !showResult && !isSelected && 'border-border hover:border-primary/40',
                      showResult && !showCorrectC && !showWrongC && 'opacity-40',
                    )}
                  >
                    {showCorrectC && <Check className="h-4 w-4 inline mr-1" />}
                    {showWrongC && <X className="h-4 w-4 inline mr-1" />}
                    <RichText>{choice}</RichText>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Fallback: text input */
            <div className="mx-auto max-w-xs">
              <input
                type="text"
                placeholder="답을 입력하세요"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                disabled={showResult}
                className={cn(
                  'flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-center text-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  showResult && isCorrect && 'border-green-500 bg-green-50',
                  showResult && !isCorrect && 'border-red-500 bg-red-50',
                )}
                onKeyDown={(e) => e.key === 'Enter' && canSubmit && handleSubmit()}
              />
              {showResult && !isCorrect && (
                <p className="text-center text-sm text-green-700 mt-2 font-medium">
                  정답: {String(content.correctAnswer)}
                </p>
              )}
            </div>
          )
        )}

        {/* ─── Ordering ─────────────────────────────── */}
        {question.questionType === 'ORDERING' && (
          <div className="mx-auto max-w-sm space-y-2">
            {orderedItems.map((item, i) => {
              const isCorrectPos = showResult && content.correctOrder && item === content.correctOrder[i];
              const isWrongPos = showResult && content.correctOrder && item !== content.correctOrder[i];

              return (
                <div
                  key={`${item}-${i}`}
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 p-3 transition-all',
                    isCorrectPos && 'border-green-500 bg-green-50 dark:bg-green-900/20',
                    isWrongPos && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                    !showResult && 'border-border',
                  )}
                >
                  <GripVertical className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                  <span className="flex-1 font-medium text-center">{item}</span>
                  {!showResult && (
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => moveItem(i, 'up')}
                        disabled={i === 0}
                        className="p-1 rounded hover:bg-muted disabled:opacity-30"
                      >
                        <ArrowUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => moveItem(i, 'down')}
                        disabled={i === orderedItems.length - 1}
                        className="p-1 rounded hover:bg-muted disabled:opacity-30"
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                  {showResult && (
                    isCorrectPos
                      ? <Check className="h-4 w-4 text-green-600 shrink-0" />
                      : <X className="h-4 w-4 text-red-600 shrink-0" />
                  )}
                </div>
              );
            })}
            {showResult && !isCorrect && content.correctOrder && (
              <p className="text-center text-sm text-green-700 mt-2 font-medium">
                정답 순서: {content.correctOrder.join(' → ')}
              </p>
            )}
          </div>
        )}

        {/* ─── Matching ─────────────────────────────── */}
        {question.questionType === 'MATCHING' && content.pairs && (
          <div className="mx-auto max-w-sm space-y-4">
            <p className="text-sm text-center text-muted-foreground">왼쪽을 선택한 후 오른쪽과 연결하세요</p>

            <div className="grid grid-cols-2 gap-3">
              {/* Left column */}
              <div className="space-y-2">
                {content.pairs.map((pair) => {
                  const isActive = matchActiveLeft === pair.left;
                  const isMatched = matchSelections[pair.left] !== undefined;
                  const isCorrectMatch = showResult && matchSelections[pair.left] === pair.right;
                  const isWrongMatch = showResult && isMatched && matchSelections[pair.left] !== pair.right;

                  return (
                    <button
                      key={pair.left}
                      onClick={() => handleMatchSelect(pair.left)}
                      disabled={showResult}
                      className={cn(
                        'w-full rounded-lg border-2 p-3 text-sm font-medium transition-all text-center',
                        isCorrectMatch && 'border-green-500 bg-green-50',
                        isWrongMatch && 'border-red-500 bg-red-50',
                        !showResult && isActive && 'border-primary bg-primary/10 ring-2 ring-primary/30',
                        !showResult && isMatched && !isActive && 'border-blue-300 bg-blue-50 dark:bg-blue-900/20',
                        !showResult && !isActive && !isMatched && 'border-border hover:border-primary/40',
                      )}
                    >
                      {pair.left}
                    </button>
                  );
                })}
              </div>

              {/* Right column */}
              <div className="space-y-2">
                {(() => {
                  // Shuffle right side but keep stable
                  const rights = content.pairs!.map(p => p.right);
                  return rights.map((right) => {
                    const matchedBy = Object.entries(matchSelections).find(([, v]) => v === right)?.[0];
                    const isLinked = matchedBy !== undefined;
                    const isCorrectTarget = showResult && content.pairs!.some(p => matchSelections[p.left] === right && p.right === right);
                    const isWrongTarget = showResult && isLinked && !isCorrectTarget;

                    return (
                      <button
                        key={right}
                        onClick={() => handleMatchRight(right)}
                        disabled={showResult || !matchActiveLeft}
                        className={cn(
                          'w-full rounded-lg border-2 p-3 text-sm font-medium transition-all text-center',
                          isCorrectTarget && 'border-green-500 bg-green-50',
                          isWrongTarget && 'border-red-500 bg-red-50',
                          !showResult && matchActiveLeft && 'hover:border-primary/60 hover:bg-primary/5 cursor-pointer',
                          !showResult && isLinked && 'border-blue-300 bg-blue-50 dark:bg-blue-900/20',
                          !showResult && !isLinked && !matchActiveLeft && 'border-border opacity-60',
                        )}
                      >
                        {right}
                      </button>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Connection lines (text representation) */}
            {Object.keys(matchSelections).length > 0 && !showResult && (
              <div className="space-y-1 px-2">
                {Object.entries(matchSelections).map(([left, right]) => (
                  <div key={left} className="flex items-center gap-2 text-xs text-blue-600">
                    <span className="font-medium">{left}</span>
                    <span>→</span>
                    <span className="font-medium">{right}</span>
                    <button
                      onClick={() => {
                        setMatchSelections(prev => {
                          const next = { ...prev };
                          delete next[left];
                          return next;
                        });
                      }}
                      className="text-red-400 hover:text-red-600 ml-auto"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hints */}
      {!showResult && hints.length > 0 && (
        <div className="space-y-2">
          {hintsUsed > 0 && (
            <div className="space-y-1.5">
              {hints.slice(0, hintsUsed).map((hint, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 p-3 text-sm">
                  <Lightbulb className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                  <span className="text-amber-800 dark:text-amber-300">{hint}</span>
                </div>
              ))}
            </div>
          )}
          {hintsUsed < hints.length && (
            <Button variant="ghost" size="sm" onClick={onUseHint} className="text-amber-600 gap-1">
              <Lightbulb className="h-4 w-4" />
              힌트 보기 ({hintsUsed}/{hints.length})
            </Button>
          )}
        </div>
      )}

      {/* Result feedback */}
      {showResult && (
        <Card className={cn(
          'border-2',
          isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20'
        )}>
          <CardContent className="p-4">
            <p className={cn('text-lg font-bold mb-2', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400')}>
              {isCorrect ? '정답이에요! 🎉' : '아쉬워요 😢'}
            </p>
            <p className="text-sm whitespace-pre-line text-foreground/80">
              {content.explanation}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Submit button */}
      {!showResult ? (
        <Button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full h-12 text-base"
        >
          확인하기
        </Button>
      ) : null}
    </div>
  );
}
