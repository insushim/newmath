// ============================================================
// Procedural Question Generator (절차적 문제 생성기)
// ============================================================
// Duolingo/Khan Academy 방식: 시드 데이터 + 알고리즘으로
// 무한한 문제를 실시간 생성. 숫자만 바꿔도 새로운 문제.
// ============================================================

import type { SeedQuestion, QuestionType, DifficultyLabel } from '@/data/curriculum-types';

/** Random integer in [min, max] inclusive */
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Pick random element from array */
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Shuffle array (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Generate unique distractors for multiple choice */
function generateDistractors(correct: number, count: number, min: number, max: number): number[] {
  const distractors = new Set<number>();
  // Common mistake distractors (off by 1, off by 10, etc.)
  const commonOffsets = [1, -1, 10, -10, 2, -2];
  for (const offset of commonOffsets) {
    const d = correct + offset;
    if (d !== correct && d >= min && d <= max) {
      distractors.add(d);
    }
  }
  // Random distractors
  let attempts = 0;
  while (distractors.size < count && attempts < 50) {
    const d = randInt(min, max);
    if (d !== correct) distractors.add(d);
    attempts++;
  }
  return shuffle([...distractors]).slice(0, count);
}

/** Build a multiple choice question with auto-generated options */
function buildMC(
  questionText: string,
  correct: number | string,
  distractorValues: (number | string)[],
  explanation: string,
  hints: string[],
  commonMistakes: Array<{ answer: string; misconception: string }>,
  latex?: string,
): SeedQuestion['content'] {
  const correctStr = String(correct);
  const allOptions = shuffle([
    correctStr,
    ...distractorValues.map(String).filter(v => v !== correctStr),
  ]).slice(0, 4);

  // Ensure correct answer is included
  if (!allOptions.includes(correctStr)) {
    allOptions[randInt(0, allOptions.length - 1)] = correctStr;
  }

  return {
    questionText,
    questionLatex: latex,
    options: allOptions.map((text, i) => ({
      id: String.fromCharCode(97 + i), // a, b, c, d
      text,
      isCorrect: text === correctStr,
    })),
    explanation,
    hints,
    commonMistakes,
  };
}

// ============================================================
// Grade-specific generators
// ============================================================

interface GeneratorConfig {
  skillId: string;
  difficulty: number; // target IRT difficulty
  questionType?: QuestionType;
}

// ─── Grade 1 Generators ─────────────────────────────────────

function g1CountingQuestion(cfg: GeneratorConfig): SeedQuestion {
  const diffLevel = cfg.difficulty;
  let maxNum: number;
  if (diffLevel < -2) maxNum = 9;
  else if (diffLevel < -1) maxNum = 50;
  else maxNum = 100;

  const num = randInt(1, maxNum);
  const questionText = `${num}${pick(['보다 1 큰 수', '보다 1 작은 수', '의 바로 뒤의 수', '의 바로 앞의 수'])}는 무엇일까요?`;
  const isNext = questionText.includes('큰') || questionText.includes('뒤');
  const answer = isNext ? num + 1 : num - 1;

  return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
    correctAnswer: answer,
    explanation: isNext
      ? `${num}보다 1 큰 수는 ${num} 다음 수인 ${answer}입니다.`
      : `${num}보다 1 작은 수는 ${num} 앞의 수인 ${answer}입니다.`,
    hints: ['수를 순서대로 세어 보세요.', isNext ? '1을 더하면 됩니다.' : '1을 빼면 됩니다.'],
    commonMistakes: [{ answer: String(isNext ? num - 1 : num + 1), misconception: '큰 수와 작은 수를 반대로 생각했어요.' }],
  });
}

function g1AddSubQuestion(cfg: GeneratorConfig): SeedQuestion {
  const diffLevel = cfg.difficulty;
  let a: number, b: number, isAdd: boolean;

  if (diffLevel < -1.5) {
    // 합이 9 이하
    a = randInt(1, 8);
    b = randInt(1, 9 - a);
    isAdd = Math.random() > 0.5;
  } else if (diffLevel < -0.5) {
    // 받아올림 없는 두 자리 수
    a = randInt(10, 40);
    b = randInt(1, 9 - (a % 10));
    isAdd = Math.random() > 0.5;
  } else {
    // 받아올림/받아내림
    a = randInt(5, 9);
    b = randInt(10 - a + 1, 9);
    isAdd = Math.random() > 0.5;
  }

  if (!isAdd && a < b) [a, b] = [b, a]; // ensure no negative result
  const answer = isAdd ? a + b : a - b;
  const op = isAdd ? '+' : '-';
  const questionText = `${a} ${op} ${b} = ?`;
  const latex = `${a} ${op} ${b} = \\Box`;

  const type = Math.random() > 0.5 ? 'MULTIPLE_CHOICE' : 'SHORT_ANSWER';
  const distractors = generateDistractors(answer, 3, 0, Math.max(a, b) * 2 + 10);

  if (type === 'MULTIPLE_CHOICE') {
    return makeQuestion(cfg, 'MULTIPLE_CHOICE', questionText, buildMC(
      questionText, answer, distractors,
      `${a} ${op} ${b} = ${answer}입니다.`,
      [isAdd ? '두 수를 합해 보세요.' : '큰 수에서 작은 수를 빼 보세요.', `손가락으로 ${isAdd ? '더 세어' : '거꾸로 세어'} 보세요.`],
      [{ answer: String(isAdd ? a - b : a + b), misconception: `${isAdd ? '뺄셈' : '덧셈'}을 했어요.` }],
      latex,
    ));
  }
  return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
    questionLatex: latex,
    correctAnswer: answer,
    explanation: `${a} ${op} ${b} = ${answer}입니다.`,
    hints: [isAdd ? '두 수를 합해 보세요.' : '큰 수에서 작은 수를 빼 보세요.', `손가락으로 세어 보세요.`],
    commonMistakes: [{ answer: String(isAdd ? a - b : a + b), misconception: `연산을 반대로 했어요.` }],
  });
}

// ─── Grade 2 Generators ─────────────────────────────────────

function g2MultiDigitAddSub(cfg: GeneratorConfig): SeedQuestion {
  const diffLevel = cfg.difficulty;
  let a: number, b: number;

  if (diffLevel < -1) {
    a = randInt(10, 50); b = randInt(10, 50);
  } else if (diffLevel < 0) {
    a = randInt(50, 200); b = randInt(10, 100);
  } else {
    a = randInt(100, 999); b = randInt(100, 999);
  }

  const isAdd = Math.random() > 0.4;
  if (!isAdd && a < b) [a, b] = [b, a];
  const answer = isAdd ? a + b : a - b;
  const op = isAdd ? '+' : '-';

  return makeQuestion(cfg, Math.random() > 0.5 ? 'MULTIPLE_CHOICE' : 'SHORT_ANSWER',
    `${a} ${op} ${b} = ?`, {
      ...(Math.random() > 0.5 ? buildMC(`${a} ${op} ${b} = ?`, answer,
        generateDistractors(answer, 3, 0, Math.max(a, b) * 2),
        `${a} ${op} ${b} = ${answer}입니다.`,
        ['자릿수를 맞추어 세로셈을 해 보세요.', isAdd ? '일의 자리부터 차례로 더하세요.' : '일의 자리부터 차례로 빼세요.'],
        [{ answer: String(answer + 10), misconception: '받아올림(받아내림)을 잘못 처리했어요.' }],
        `${a} ${op} ${b} = \\Box`,
      ) : {
        questionLatex: `${a} ${op} ${b} = \\Box`,
        correctAnswer: answer,
        explanation: `${a} ${op} ${b} = ${answer}입니다.`,
        hints: ['자릿수를 맞추어 세로셈을 해 보세요.', '일의 자리부터 차례로 계산하세요.'],
        commonMistakes: [{ answer: String(answer + (isAdd ? 10 : -10)), misconception: '자릿수 계산이 틀렸어요.' }],
      }),
    });
}

function g2MultiplicationBasic(cfg: GeneratorConfig): SeedQuestion {
  const diffLevel = cfg.difficulty;
  let a: number, b: number;

  if (diffLevel < -1) {
    a = randInt(2, 5); b = randInt(1, 5);
  } else if (diffLevel < 0) {
    a = randInt(2, 9); b = randInt(2, 9);
  } else {
    a = randInt(6, 9); b = randInt(6, 9);
  }

  const answer = a * b;
  const questionText = `${a} × ${b} = ?`;
  const latex = `${a} \\times ${b} = \\Box`;

  const type: QuestionType = pick(['MULTIPLE_CHOICE', 'SHORT_ANSWER']);
  if (type === 'MULTIPLE_CHOICE') {
    return makeQuestion(cfg, 'MULTIPLE_CHOICE', questionText, buildMC(
      questionText, answer,
      generateDistractors(answer, 3, Math.max(1, answer - 15), answer + 15),
      `${a} × ${b} = ${answer}입니다. ${a}을(를) ${b}번 더하면 ${answer}이에요.`,
      [`${a}을(를) ${b}번 더해 보세요.`, `구구단 ${a}단을 떠올려 보세요.`],
      [{ answer: String(a + b), misconception: '곱셈 대신 덧셈을 했어요.' }],
      latex,
    ));
  }
  return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
    questionLatex: latex,
    correctAnswer: answer,
    explanation: `${a} × ${b} = ${answer}입니다.`,
    hints: [`${a}을(를) ${b}번 더해 보세요.`, `구구단 ${a}단을 떠올려 보세요.`],
    commonMistakes: [{ answer: String(a + b), misconception: '곱셈 대신 덧셈을 했어요.' }],
  });
}

// ─── Grade 3 Generators ─────────────────────────────────────

function g3ThreeDigitAddSub(cfg: GeneratorConfig): SeedQuestion {
  const a = randInt(100, 999);
  const b = randInt(100, 999);
  const isAdd = Math.random() > 0.4;
  const [x, y] = !isAdd && a < b ? [b, a] : [a, b];
  const answer = isAdd ? x + y : x - y;
  const op = isAdd ? '+' : '-';

  return makeQuestion(cfg, pick(['MULTIPLE_CHOICE', 'SHORT_ANSWER']), `${x} ${op} ${y} = ?`, {
    questionLatex: `${x} ${op} ${y} = \\Box`,
    correctAnswer: answer,
    options: Math.random() > 0.5 ? buildMC(`${x} ${op} ${y} = ?`, answer,
      generateDistractors(answer, 3, 0, 2000),
      `${x} ${op} ${y} = ${answer}입니다.`,
      ['세로셈으로 일의 자리부터 계산해 보세요.', '받아올림(받아내림)에 주의하세요.'],
      [{ answer: String(answer + 100), misconception: '백의 자리 계산이 틀렸어요.' }],
    ).options : undefined,
    explanation: `${x} ${op} ${y} = ${answer}입니다.`,
    hints: ['세로셈으로 일의 자리부터 계산해 보세요.', '받아올림(받아내림)에 주의하세요.'],
    commonMistakes: [{ answer: String(answer + (randInt(0, 1) ? 100 : -100)), misconception: '자릿수 계산 실수' }],
  });
}

function g3DivisionBasic(cfg: GeneratorConfig): SeedQuestion {
  const divisor = randInt(2, 9);
  const quotient = randInt(1, cfg.difficulty < 0 ? 9 : 20);
  const dividend = divisor * quotient;

  const questionText = `${dividend} ÷ ${divisor} = ?`;
  const latex = `${dividend} \\div ${divisor} = \\Box`;

  return makeQuestion(cfg, pick(['MULTIPLE_CHOICE', 'SHORT_ANSWER']), questionText, {
    questionLatex: latex,
    correctAnswer: quotient,
    options: Math.random() > 0.5 ? buildMC(questionText, quotient,
      generateDistractors(quotient, 3, 1, quotient + 10),
      `${dividend} ÷ ${divisor} = ${quotient}입니다. ${divisor} × ${quotient} = ${dividend}이니까요.`,
      [`${divisor}단 구구단을 떠올려 보세요.`, `${divisor} × ? = ${dividend}에서 ?를 찾으세요.`],
      [{ answer: String(divisor), misconception: '나누는 수와 몫을 혼동했어요.' }],
    ).options : undefined,
    explanation: `${dividend} ÷ ${divisor} = ${quotient}입니다. ${divisor} × ${quotient} = ${dividend}이니까요.`,
    hints: [`${divisor}단 구구단을 떠올려 보세요.`, `${divisor} × ? = ${dividend}에서 ?를 찾으세요.`],
    commonMistakes: [{ answer: String(dividend - divisor), misconception: '나눗셈 대신 뺄셈을 했어요.' }],
  });
}

function g3FractionBasic(cfg: GeneratorConfig): SeedQuestion {
  const denom = pick([2, 3, 4, 5, 6, 8]);
  const numer = randInt(1, denom - 1);
  const questionText = `피자를 ${denom}조각으로 똑같이 나누었습니다. ${numer}조각을 먹었다면, 먹은 양을 분수로 나타내면?`;

  return makeQuestion(cfg, 'MULTIPLE_CHOICE', questionText, buildMC(
    questionText,
    `${numer}/${denom}`,
    [`${denom}/${numer}`, `${numer}/${denom + 1}`, `${numer + 1}/${denom}`],
    `전체 ${denom}조각 중 ${numer}조각을 먹었으므로 ${numer}/${denom}입니다.`,
    ['분수는 (먹은 조각 수)/(전체 조각 수)로 나타냅니다.', `전체가 ${denom}조각이고 먹은 것이 ${numer}조각이에요.`],
    [{ answer: `${denom}/${numer}`, misconception: '분자와 분모를 바꿨어요.' }],
  ));
}

// ─── Grade 4 Generators ─────────────────────────────────────

function g4LargeNumbers(cfg: GeneratorConfig): SeedQuestion {
  const n = randInt(10000, 99999);
  const digits = String(n);
  const pos = randInt(0, 4);
  const posNames = ['만의 자리', '천의 자리', '백의 자리', '십의 자리', '일의 자리'];
  const answer = Number(digits[pos]);

  return makeQuestion(cfg, 'MULTIPLE_CHOICE', `${n.toLocaleString()}에서 ${posNames[pos]}의 숫자는?`, buildMC(
    `${n.toLocaleString()}에서 ${posNames[pos]}의 숫자는?`, answer,
    generateDistractors(answer, 3, 0, 9),
    `${n.toLocaleString()}의 ${posNames[pos]}는 ${answer}입니다.`,
    ['각 자릿수의 위치를 오른쪽부터 세어 보세요.', `${posNames[pos]}는 ${pos === 0 ? '가장 왼쪽' : pos === 4 ? '가장 오른쪽' : '중간'} 자리에요.`],
    [{ answer: String(Number(digits[pos === 0 ? 1 : pos - 1])), misconception: '옆 자리의 숫자를 읽었어요.' }],
  ));
}

function g4MultiDigitMultiply(cfg: GeneratorConfig): SeedQuestion {
  const a = randInt(10, cfg.difficulty < 0 ? 50 : 99);
  const b = randInt(2, cfg.difficulty < 0 ? 9 : 30);
  const answer = a * b;

  return makeQuestion(cfg, pick(['MULTIPLE_CHOICE', 'SHORT_ANSWER']), `${a} × ${b} = ?`, {
    questionLatex: `${a} \\times ${b} = \\Box`,
    correctAnswer: answer,
    options: Math.random() > 0.5 ? buildMC(`${a} × ${b} = ?`, answer,
      generateDistractors(answer, 3, Math.max(0, answer - 100), answer + 100),
      `${a} × ${b} = ${answer}입니다.`,
      [`${a}를 ${b}번 더해 보세요.`, '세로셈으로 자릿수별로 곱해 보세요.'],
      [{ answer: String(a * b + a), misconception: '곱셈에서 올림을 잘못 처리했어요.' }],
    ).options : undefined,
    explanation: `${a} × ${b} = ${answer}입니다.`,
    hints: [`${a}를 ${b}번 더하는 것과 같아요.`, '세로셈으로 자릿수별로 곱해 보세요.'],
    commonMistakes: [{ answer: String(a + b), misconception: '곱셈 대신 덧셈을 했어요.' }],
  });
}

function g4AngleQuestion(cfg: GeneratorConfig): SeedQuestion {
  const angle = pick([30, 45, 60, 90, 120, 135, 150, 180]);
  const isAcute = angle < 90;
  const isRight = angle === 90;
  const isObtuse = angle > 90 && angle < 180;
  const isStraight = angle === 180;

  let correctType: string;
  if (isAcute) correctType = '예각';
  else if (isRight) correctType = '직각';
  else if (isObtuse) correctType = '둔각';
  else correctType = '평각';

  return makeQuestion(cfg, 'MULTIPLE_CHOICE', `${angle}°는 어떤 각일까요?`, buildMC(
    `${angle}°는 어떤 각일까요?`, correctType,
    ['예각', '직각', '둔각', '평각'].filter(t => t !== correctType),
    `${angle}°는 ${correctType}입니다. ${isAcute ? '0°보다 크고 90°보다 작은 각을 예각이라 합니다.' : isRight ? '90°인 각을 직각이라 합니다.' : isObtuse ? '90°보다 크고 180°보다 작은 각을 둔각이라 합니다.' : '180°인 각을 평각이라 합니다.'}`,
    ['90°를 기준으로 생각해 보세요.', `이 각은 90°보다 ${angle < 90 ? '작' : angle === 90 ? '같' : '크'}아요.`],
    [{ answer: isAcute ? '둔각' : '예각', misconception: '예각과 둔각을 반대로 알고 있어요.' }],
  ));
}

// ─── Grade 5 Generators ─────────────────────────────────────

function g5FractionAddSub(cfg: GeneratorConfig): SeedQuestion {
  const commonDenom = pick([4, 6, 8, 10, 12]);
  const n1 = randInt(1, commonDenom - 2);
  const n2 = randInt(1, commonDenom - n1 - 1);
  const isAdd = Math.random() > 0.4;

  let answer: string;
  let questionText: string;
  if (isAdd) {
    const result = n1 + n2;
    answer = `${result}/${commonDenom}`;
    questionText = `${n1}/${commonDenom} + ${n2}/${commonDenom} = ?`;
  } else {
    const [big, small] = n1 > n2 ? [n1, n2] : [n2, n1];
    const result = big - small;
    answer = `${result}/${commonDenom}`;
    questionText = `${big}/${commonDenom} - ${small}/${commonDenom} = ?`;
  }

  return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
    correctAnswer: answer,
    explanation: `분모가 같은 분수의 ${isAdd ? '덧셈은 분자끼리 더합' : '뺄셈은 분자끼리 뺍'}니다. ${questionText.replace('= ?', `= ${answer}`)}`,
    hints: ['분모가 같으면 분자끼리 계산하세요.', '분모는 그대로 둡니다.'],
    commonMistakes: [{ answer: `${answer.split('/')[0]}/${Number(answer.split('/')[1]) * 2}`, misconception: '분모도 더해버렸어요.' }],
  });
}

function g5DecimalCalc(cfg: GeneratorConfig): SeedQuestion {
  const a = (randInt(1, 99) / 10);
  const b = (randInt(1, 99) / 10);
  const isAdd = Math.random() > 0.4;
  const [x, y] = !isAdd && a < b ? [b, a] : [a, b];
  const answer = Number((isAdd ? x + y : x - y).toFixed(1));
  const op = isAdd ? '+' : '-';

  return makeQuestion(cfg, pick(['MULTIPLE_CHOICE', 'SHORT_ANSWER']), `${x} ${op} ${y} = ?`, {
    questionLatex: `${x} ${op} ${y} = \\Box`,
    correctAnswer: answer,
    options: Math.random() > 0.5 ? buildMC(`${x} ${op} ${y} = ?`, answer,
      [answer + 0.1, answer - 0.1, answer + 1].filter(v => v !== answer && v >= 0),
      `${x} ${op} ${y} = ${answer}입니다.`,
      ['소수점 위치를 맞추어 계산하세요.', '자연수처럼 계산한 후 소수점을 찍으세요.'],
      [{ answer: String(answer + 1), misconception: '소수점 자리를 잘못 맞추었어요.' }],
    ).options : undefined,
    explanation: `${x} ${op} ${y} = ${answer}입니다. 소수점을 맞추어 계산하면 됩니다.`,
    hints: ['소수점 위치를 맞추어 계산하세요.', '자연수처럼 계산한 후 소수점을 찍으세요.'],
    commonMistakes: [{ answer: String(Math.round(x) + Math.round(y)), misconception: '소수점을 무시하고 계산했어요.' }],
  });
}

function g5AreaPerimeter(cfg: GeneratorConfig): SeedQuestion {
  const shape = pick(['직사각형', '정사각형']);
  if (shape === '직사각형') {
    const w = randInt(3, 15);
    const h = randInt(3, 15);
    const isArea = Math.random() > 0.5;
    const answer = isArea ? w * h : 2 * (w + h);
    const questionText = `가로 ${w}cm, 세로 ${h}cm인 직사각형의 ${isArea ? '넓이' : '둘레'}는?`;

    return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
      correctAnswer: `${answer}`,
      explanation: isArea
        ? `직사각형의 넓이 = 가로 × 세로 = ${w} × ${h} = ${answer}cm²`
        : `직사각형의 둘레 = (가로 + 세로) × 2 = (${w} + ${h}) × 2 = ${answer}cm`,
      hints: [
        isArea ? '넓이 = 가로 × 세로' : '둘레 = (가로 + 세로) × 2',
        `가로는 ${w}cm, 세로는 ${h}cm입니다.`,
      ],
      commonMistakes: [{
        answer: String(isArea ? 2 * (w + h) : w * h),
        misconception: isArea ? '둘레를 구했어요.' : '넓이를 구했어요.',
      }],
    });
  } else {
    const side = randInt(3, 15);
    const isArea = Math.random() > 0.5;
    const answer = isArea ? side * side : side * 4;
    const questionText = `한 변의 길이가 ${side}cm인 정사각형의 ${isArea ? '넓이' : '둘레'}는?`;

    return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
      correctAnswer: `${answer}`,
      explanation: isArea
        ? `정사각형의 넓이 = 한 변 × 한 변 = ${side} × ${side} = ${answer}cm²`
        : `정사각형의 둘레 = 한 변 × 4 = ${side} × 4 = ${answer}cm`,
      hints: [isArea ? '넓이 = 한 변 × 한 변' : '둘레 = 한 변 × 4', `한 변이 ${side}cm입니다.`],
      commonMistakes: [{
        answer: String(isArea ? side * 4 : side * side),
        misconception: isArea ? '둘레를 구했어요.' : '넓이를 구했어요.',
      }],
    });
  }
}

// ─── Grade 6 Generators ─────────────────────────────────────

function g6FractionDivision(cfg: GeneratorConfig): SeedQuestion {
  const n1 = randInt(1, 5);
  const d1 = pick([2, 3, 4, 5, 6]);
  const divisor = randInt(2, 5);
  const resultN = n1;
  const resultD = d1 * divisor;

  const questionText = `${n1}/${d1} ÷ ${divisor} = ?`;
  const answer = `${resultN}/${resultD}`;

  return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
    correctAnswer: answer,
    explanation: `(분수) ÷ (자연수)는 분모에 자연수를 곱합니다. ${n1}/${d1} ÷ ${divisor} = ${n1}/${resultD} = ${answer}`,
    hints: ['분수를 자연수로 나눌 때는 분모에 그 수를 곱합니다.', `${d1} × ${divisor} = ${resultD}이므로 분모가 ${resultD}이 됩니다.`],
    commonMistakes: [{ answer: `${n1 * divisor}/${d1}`, misconception: '분자에 곱해버렸어요. 나눗셈이니 분모에 곱해야 해요.' }],
  });
}

function g6RatioPercent(cfg: GeneratorConfig): SeedQuestion {
  const total = pick([20, 25, 40, 50, 100, 200]);
  const part = randInt(1, total - 1);
  const percent = Math.round((part / total) * 100);

  const questionText = `${total}명 중 ${part}명이 수학을 좋아합니다. 수학을 좋아하는 학생의 비율은 몇 %일까요?`;
  return makeQuestion(cfg, pick(['MULTIPLE_CHOICE', 'SHORT_ANSWER']), questionText, {
    correctAnswer: percent,
    options: Math.random() > 0.5 ? buildMC(questionText, `${percent}%`,
      [`${100 - percent}%`, `${Math.round(percent / 2)}%`, `${Math.min(100, percent + 10)}%`],
      `${part}/${total} = ${part / total} = ${percent}%입니다.`,
      ['(부분 ÷ 전체) × 100으로 계산하세요.', `${part} ÷ ${total} × 100을 계산해 보세요.`],
      [{ answer: `${100 - percent}%`, misconception: '좋아하지 않는 학생의 비율을 구했어요.' }],
    ).options : undefined,
    explanation: `비율 = (부분/전체) × 100 = (${part}/${total}) × 100 = ${percent}%입니다.`,
    hints: ['비율 = (부분 ÷ 전체) × 100', `${part} ÷ ${total} × 100을 계산하세요.`],
    commonMistakes: [{ answer: `${100 - percent}`, misconception: '전체에서 빼서 나머지 비율을 구했어요.' }],
  });
}

function g6DecimalDivision(cfg: GeneratorConfig): SeedQuestion {
  const divisor = randInt(2, 9);
  const quotient = Number((randInt(1, 50) / 10).toFixed(1));
  const dividend = Number((divisor * quotient).toFixed(1));

  const questionText = `${dividend} ÷ ${divisor} = ?`;

  return makeQuestion(cfg, 'SHORT_ANSWER', questionText, {
    questionLatex: `${dividend} \\div ${divisor} = \\Box`,
    correctAnswer: quotient,
    explanation: `${dividend} ÷ ${divisor} = ${quotient}입니다.`,
    hints: ['소수를 자연수로 나눌 때는 자연수 나눗셈처럼 계산한 후 소수점을 찍습니다.', `${divisor} × ? = ${dividend}을 생각해 보세요.`],
    commonMistakes: [{ answer: String(quotient * 10), misconception: '소수점 위치를 잘못 잡았어요.' }],
  });
}

// ============================================================
// Helper: Build SeedQuestion
// ============================================================

let _genCounter = 0;

function makeQuestion(
  cfg: GeneratorConfig,
  questionType: QuestionType,
  questionText: string,
  content: Partial<SeedQuestion['content']>,
): SeedQuestion {
  _genCounter++;
  const d = cfg.difficulty;
  let difficultyLabel: DifficultyLabel;
  if (d <= -1.5) difficultyLabel = '매우 쉬움';
  else if (d <= -0.5) difficultyLabel = '쉬움';
  else if (d <= 0.5) difficultyLabel = '보통';
  else if (d <= 1.5) difficultyLabel = '어려움';
  else difficultyLabel = '매우 어려움';

  return {
    id: `GEN_${cfg.skillId}_${Date.now()}_${_genCounter}`,
    skillId: cfg.skillId,
    questionType,
    difficulty: d + (Math.random() * 0.2 - 0.1), // small jitter
    difficultyLabel,
    content: {
      questionText,
      explanation: content.explanation ?? '',
      hints: content.hints ?? [],
      ...content,
    },
    estimatedTimeSeconds: Math.round(20 + Math.abs(d) * 10),
    tags: ['generated', `grade_${cfg.skillId.split('_')[0]?.replace('G', '')}`],
  };
}

// ============================================================
// Main Generator Dispatcher
// ============================================================

type GeneratorFn = (cfg: GeneratorConfig) => SeedQuestion;

const SKILL_GENERATORS: Record<string, GeneratorFn[]> = {};

// Map skill code prefixes to generators
function registerGenerator(skillPattern: RegExp, gen: GeneratorFn) {
  // We use patterns at runtime via matchGenerator
  if (!SKILL_GENERATORS['_patterns']) SKILL_GENERATORS['_patterns'] = [];
  (SKILL_GENERATORS as Record<string, unknown>)[skillPattern.source] = gen;
}

// Grade 1
const G1_GENERATORS: Record<string, GeneratorFn> = {
  count_1_9: g1CountingQuestion,
  compare_1_9: g1CountingQuestion,
  order_1_9: g1CountingQuestion,
  add_basic: g1AddSubQuestion,
  add_sub_9: g1AddSubQuestion,
  add_sub_0: g1AddSubQuestion,
  count_to_50: g1CountingQuestion,
  tens_ones: g1CountingQuestion,
  compare_to_50: g1CountingQuestion,
  add_tens: g1AddSubQuestion,
  sub_tens: g1AddSubQuestion,
  count_to_100: g1CountingQuestion,
  compare_to_100: g1CountingQuestion,
  add_carry: g1AddSubQuestion,
  sub_borrow: g1AddSubQuestion,
  add_sub_three: g1AddSubQuestion,
};

// Grade 2
const G2_GENERATORS: Record<string, GeneratorFn> = {
  add_three_digit: g2MultiDigitAddSub,
  sub_three_digit: g2MultiDigitAddSub,
  add_sub_est: g2MultiDigitAddSub,
  multiply_concept: g2MultiplicationBasic,
  multiply_2_5: g2MultiplicationBasic,
  multiply_6_9: g2MultiplicationBasic,
  multiply_1_0: g2MultiplicationBasic,
};

// Grade 3
const G3_GENERATORS: Record<string, GeneratorFn> = {
  add_3digit: g3ThreeDigitAddSub,
  sub_3digit: g3ThreeDigitAddSub,
  multiply_2x1: g2MultiplicationBasic,
  division_basic: g3DivisionBasic,
  division_meaning: g3DivisionBasic,
  fraction_meaning: g3FractionBasic,
  fraction_compare: g3FractionBasic,
};

// Grade 4
const G4_GENERATORS: Record<string, GeneratorFn> = {
  large_numbers: g4LargeNumbers,
  place_value: g4LargeNumbers,
  multiply_multi: g4MultiDigitMultiply,
  angle_types: g4AngleQuestion,
  angle_measure: g4AngleQuestion,
};

// Grade 5
const G5_GENERATORS: Record<string, GeneratorFn> = {
  fraction_add: g5FractionAddSub,
  fraction_sub: g5FractionAddSub,
  decimal_add: g5DecimalCalc,
  decimal_sub: g5DecimalCalc,
  area_rect: g5AreaPerimeter,
  perimeter: g5AreaPerimeter,
};

// Grade 6
const G6_GENERATORS: Record<string, GeneratorFn> = {
  frac_div_nat: g6FractionDivision,
  frac_div_frac: g6FractionDivision,
  dec_div_nat: g6DecimalDivision,
  dec_div_dec: g6DecimalDivision,
  ratio_percent: g6RatioPercent,
  ratio_meaning: g6RatioPercent,
};

const ALL_GENERATORS: Record<string, Record<string, GeneratorFn>> = {
  '1': G1_GENERATORS,
  '2': G2_GENERATORS,
  '3': G3_GENERATORS,
  '4': G4_GENERATORS,
  '5': G5_GENERATORS,
  '6': G6_GENERATORS,
};

/**
 * Find a generator for the given skill.
 * Falls back to a generic generator matching the grade's computational skills.
 */
function findGenerator(skillId: string, skillCode: string, grade: number): GeneratorFn | null {
  const gradeGens = ALL_GENERATORS[String(grade)];
  if (!gradeGens) return null;

  // Direct code match
  if (gradeGens[skillCode]) return gradeGens[skillCode];

  // Partial match
  for (const [key, gen] of Object.entries(gradeGens)) {
    if (skillCode.includes(key) || key.includes(skillCode)) return gen;
  }

  // Grade-level fallback: use any generator for this grade
  const gens = Object.values(gradeGens);
  return gens.length > 0 ? pick(gens) : null;
}

// ============================================================
// Public API
// ============================================================

export interface GenerateOptions {
  skillId: string;
  skillCode: string;
  grade: number;
  targetDifficulty: number;
  count: number;
}

/**
 * Generate fresh questions for a skill using procedural generation.
 * These are algorithmically created with randomized numbers.
 */
export function generateQuestions(opts: GenerateOptions): SeedQuestion[] {
  const { skillId, skillCode, grade, targetDifficulty, count } = opts;
  const generator = findGenerator(skillId, skillCode, grade);
  if (!generator) return [];

  const questions: SeedQuestion[] = [];
  const diffRange = 0.5; // spread around target

  for (let i = 0; i < count; i++) {
    const difficulty = targetDifficulty + (Math.random() * diffRange * 2 - diffRange);
    try {
      const q = generator({ skillId, difficulty });
      questions.push(q);
    } catch {
      // Skip generation errors
    }
  }

  return questions;
}

/**
 * Mix seed questions with generated questions to create a rich pool.
 * Ensures minimum pool size for adaptive selection.
 */
export function ensureMinimumPool(
  seedQuestions: SeedQuestion[],
  skillId: string,
  skillCode: string,
  grade: number,
  targetDifficulty: number,
  minPoolSize: number = 20,
): SeedQuestion[] {
  if (seedQuestions.length >= minPoolSize) return seedQuestions;

  const needed = minPoolSize - seedQuestions.length;
  const generated = generateQuestions({
    skillId,
    skillCode,
    grade,
    targetDifficulty,
    count: needed,
  });

  return [...seedQuestions, ...generated];
}
