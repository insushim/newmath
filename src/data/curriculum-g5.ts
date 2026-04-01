// ============================================================
// MathVerse 5학년 커리큘럼 시드 데이터
// 2022 개정 교육과정 기반
// ============================================================
import type { SeedUnit, SeedSkill, SeedQuestion } from './curriculum-types';

// ============================================================
// 5학년 단원 정의
// ============================================================
export const G5_UNITS: SeedUnit[] = [
  // === 5학년 1학기 ===
  {
    id: 'G5_S1_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 5,
    semester: 1,
    code: 'G5_S1_01',
    nameKo: '자연수의 혼합 계산',
    descriptionKo: '덧셈, 뺄셈, 곱셈, 나눗셈이 섞여 있는 식을 순서에 맞게 계산합니다.',
    sortOrder: 1,
  },
  {
    id: 'G5_S1_NUM_02',
    domainCode: 'NUM_OPS',
    grade: 5,
    semester: 1,
    code: 'G5_S1_02',
    nameKo: '약수와 배수',
    descriptionKo: '약수와 배수의 개념을 이해하고, 공약수와 공배수를 구합니다.',
    sortOrder: 2,
  },
  {
    id: 'G5_S1_CHANGE_03',
    domainCode: 'CHANGE_REL',
    grade: 5,
    semester: 1,
    code: 'G5_S1_03',
    nameKo: '규칙과 대응',
    descriptionKo: '두 양 사이의 관계를 식으로 나타내고 대응 관계를 파악합니다.',
    sortOrder: 3,
  },
  {
    id: 'G5_S1_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 5,
    semester: 1,
    code: 'G5_S1_04',
    nameKo: '합동과 대칭',
    descriptionKo: '합동인 도형과 선대칭, 점대칭 도형을 이해합니다.',
    sortOrder: 4,
  },
  {
    id: 'G5_S1_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 5,
    semester: 1,
    code: 'G5_S1_05',
    nameKo: '자료의 표현',
    descriptionKo: '평균을 구하고, 그래프를 선택하여 자료를 표현합니다.',
    sortOrder: 5,
  },
  // === 5학년 2학기 ===
  {
    id: 'G5_S2_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 5,
    semester: 2,
    code: 'G5_S2_01',
    nameKo: '수의 범위와 어림',
    descriptionKo: '이상, 이하, 초과, 미만을 이해하고, 올림, 버림, 반올림을 합니다.',
    sortOrder: 6,
  },
  {
    id: 'G5_S2_NUM_02',
    domainCode: 'NUM_OPS',
    grade: 5,
    semester: 2,
    code: 'G5_S2_02',
    nameKo: '분수의 곱셈',
    descriptionKo: '(분수) × (자연수), (자연수) × (분수), (분수) × (분수)를 계산합니다.',
    sortOrder: 7,
  },
  {
    id: 'G5_S2_NUM_03',
    domainCode: 'NUM_OPS',
    grade: 5,
    semester: 2,
    code: 'G5_S2_03',
    nameKo: '소수의 곱셈',
    descriptionKo: '소수의 곱셈을 할 수 있습니다.',
    sortOrder: 8,
  },
  {
    id: 'G5_S2_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 5,
    semester: 2,
    code: 'G5_S2_04',
    nameKo: '직육면체',
    descriptionKo: '직육면체와 정육면체를 이해하고, 겉넓이와 부피를 구합니다.',
    sortOrder: 9,
  },
];

// ============================================================
// 5학년 스킬 정의
// ============================================================
export const G5_SKILLS: SeedSkill[] = [
  // --- 자연수의 혼합 계산 ---
  {
    id: 'G5_S1_NUM_01_SK01',
    unitId: 'G5_S1_NUM_01',
    code: 'mixed_calc_order',
    nameKo: '계산 순서',
    descriptionKo: '덧셈, 뺄셈, 곱셈, 나눗셈이 섞여 있는 식의 계산 순서를 알 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '① 괄호 안을 먼저 계산 ② 곱셈, 나눗셈을 왼쪽부터 ③ 덧셈, 뺄셈을 왼쪽부터. 곱셈/나눗셈이 덧셈/뺄셈보다 먼저예요.',
  },
  {
    id: 'G5_S1_NUM_01_SK02',
    unitId: 'G5_S1_NUM_01',
    code: 'mixed_calc_practice',
    nameKo: '혼합 계산 실전',
    descriptionKo: '혼합 계산을 정확히 수행할 수 있다.',
    defaultDifficulty: 0.7,
    sortOrder: 2,
    conceptExplanation: '복잡한 식은 단계별로 풀어요. 먼저 괄호, 그 다음 곱셈/나눗셈, 마지막에 덧셈/뺄셈!',
  },
  // --- 약수와 배수 ---
  {
    id: 'G5_S1_NUM_02_SK01',
    unitId: 'G5_S1_NUM_02',
    code: 'divisor_multiple',
    nameKo: '약수와 배수의 개념',
    descriptionKo: '약수와 배수의 뜻을 알고 구할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '12 ÷ 3 = 4이면, 3은 12의 약수이고 12는 3의 배수예요. 약수: 나누어떨어지게 하는 수. 배수: 그 수를 몇 배 한 수.',
  },
  {
    id: 'G5_S1_NUM_02_SK02',
    unitId: 'G5_S1_NUM_02',
    code: 'gcf_lcm',
    nameKo: '최대공약수와 최소공배수',
    descriptionKo: '두 수의 최대공약수와 최소공배수를 구할 수 있다.',
    defaultDifficulty: 0.7,
    sortOrder: 2,
    conceptExplanation: '공약수: 두 수의 공통 약수. 최대공약수(GCF): 공약수 중 가장 큰 수. 공배수: 두 수의 공통 배수. 최소공배수(LCM): 공배수 중 가장 작은 수.',
  },
  // --- 규칙과 대응 ---
  {
    id: 'G5_S1_CHANGE_03_SK01',
    unitId: 'G5_S1_CHANGE_03',
    code: 'pattern_expression',
    nameKo: '규칙을 식으로 나타내기',
    descriptionKo: '두 양 사이의 대응 관계를 식으로 나타낼 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '사탕을 3개씩 주면 사람 수 × 3 = 사탕 수. 이런 관계를 □ × 3 = △처럼 식으로 나타낼 수 있어요.',
  },
  // --- 합동과 대칭 ---
  {
    id: 'G5_S1_SHAPE_04_SK01',
    unitId: 'G5_S1_SHAPE_04',
    code: 'congruence',
    nameKo: '합동',
    descriptionKo: '합동인 도형을 이해하고 대응 요소를 찾을 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 1,
    conceptExplanation: '모양과 크기가 같아서 완전히 겹칠 수 있는 두 도형을 "합동"이라고 해요.',
  },
  {
    id: 'G5_S1_SHAPE_04_SK02',
    unitId: 'G5_S1_SHAPE_04',
    code: 'symmetry',
    nameKo: '선대칭과 점대칭',
    descriptionKo: '선대칭 도형과 점대칭 도형을 이해할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 2,
    conceptExplanation: '선대칭: 한 직선을 기준으로 접으면 양쪽이 완전히 겹침. 점대칭: 한 점을 중심으로 180° 돌리면 원래 모양과 겹침.',
  },
  // --- 자료의 표현 ---
  {
    id: 'G5_S1_DATA_05_SK01',
    unitId: 'G5_S1_DATA_05',
    code: 'average',
    nameKo: '평균 구하기',
    descriptionKo: '자료의 평균을 구할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '평균 = (자료의 합) ÷ (자료의 수). 예: 3, 5, 7의 평균 = (3 + 5 + 7) ÷ 3 = 15 ÷ 3 = 5',
  },
  // --- 수의 범위와 어림 ---
  {
    id: 'G5_S2_NUM_01_SK01',
    unitId: 'G5_S2_NUM_01',
    code: 'range_terms',
    nameKo: '이상, 이하, 초과, 미만',
    descriptionKo: '이상, 이하, 초과, 미만의 뜻을 알 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 1,
    conceptExplanation: '이상: 그 수를 포함하여 더 큰 수. 이하: 그 수를 포함하여 더 작은 수. 초과: 그 수를 포함하지 않고 더 큰 수. 미만: 그 수를 포함하지 않고 더 작은 수.',
  },
  {
    id: 'G5_S2_NUM_01_SK02',
    unitId: 'G5_S2_NUM_01',
    code: 'rounding',
    nameKo: '올림, 버림, 반올림',
    descriptionKo: '올림, 버림, 반올림을 할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 2,
    conceptExplanation: '올림: 무조건 올림. 버림: 무조건 버림. 반올림: 해당 자리 아래가 5 이상이면 올리고, 4 이하이면 버려요.',
  },
  // --- 분수의 곱셈 ---
  {
    id: 'G5_S2_NUM_02_SK01',
    unitId: 'G5_S2_NUM_02',
    code: 'frac_mult_nat',
    nameKo: '(분수) × (자연수)',
    descriptionKo: '분수와 자연수의 곱셈을 할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '분수에 자연수를 곱할 때는 분자에 자연수를 곱하고 분모는 그대로 둬요. 예: 2/5 × 3 = 6/5 = 1과 1/5',
  },
  {
    id: 'G5_S2_NUM_02_SK02',
    unitId: 'G5_S2_NUM_02',
    code: 'frac_mult_frac',
    nameKo: '(분수) × (분수)',
    descriptionKo: '분수와 분수의 곱셈을 할 수 있다.',
    defaultDifficulty: 0.7,
    sortOrder: 2,
    conceptExplanation: '분수끼리 곱할 때는 분자끼리 곱하고 분모끼리 곱해요. 예: 2/3 × 4/5 = 8/15',
  },
  // --- 소수의 곱셈 ---
  {
    id: 'G5_S2_NUM_03_SK01',
    unitId: 'G5_S2_NUM_03',
    code: 'decimal_mult',
    nameKo: '소수의 곱셈',
    descriptionKo: '소수의 곱셈을 할 수 있다.',
    defaultDifficulty: 0.7,
    sortOrder: 1,
    conceptExplanation: '소수의 곱셈은 자연수처럼 곱한 뒤, 두 수의 소수점 아래 자릿수를 합한 만큼 소수점을 찍어요.',
  },
  // --- 직육면체 ---
  {
    id: 'G5_S2_SHAPE_04_SK01',
    unitId: 'G5_S2_SHAPE_04',
    code: 'rectangular_prism',
    nameKo: '직육면체와 정육면체',
    descriptionKo: '직육면체와 정육면체의 성질을 이해할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '직육면체: 직사각형 6개로 둘러싸인 도형. 면 6개, 모서리 12개, 꼭짓점 8개. 정육면체: 정사각형 6개로 둘러싸인 도형.',
  },
  {
    id: 'G5_S2_SHAPE_04_SK02',
    unitId: 'G5_S2_SHAPE_04',
    code: 'volume_surface',
    nameKo: '부피와 겉넓이',
    descriptionKo: '직육면체의 부피와 겉넓이를 구할 수 있다.',
    defaultDifficulty: 0.7,
    sortOrder: 2,
    conceptExplanation: '부피 = 가로 × 세로 × 높이. 겉넓이 = 2 × (가로×세로 + 세로×높이 + 가로×높이). 부피의 단위: cm³, m³.',
  },
];

// ============================================================
// 5학년 문제 데이터
// ============================================================
export const G5_QUESTIONS: SeedQuestion[] = [
  // ============================================================
  // 단원: 자연수의 혼합 계산 - SK01: 계산 순서
  // ============================================================
  {
    id: 'G5_S1_NUM_01_SK01_Q01',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '5 + 3 × 2를 올바르게 계산하면?',
      options: [
        { id: 'a', text: '16', isCorrect: false },
        { id: 'b', text: '11', isCorrect: true },
        { id: 'c', text: '10', isCorrect: false },
        { id: 'd', text: '13', isCorrect: false },
      ],
      explanation: '곱셈을 먼저 합니다. 3 × 2 = 6, 그 다음 5 + 6 = 11입니다.',
      hints: [
        '곱셈은 덧셈보다 먼저 계산해요.',
        '먼저 3 × 2를 계산하세요.',
      ],
      commonMistakes: [
        { answer: '16', misconception: '왼쪽부터 순서대로 (5+3)×2=16으로 계산했습니다. 곱셈을 먼저 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['혼합 계산', '순서', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK01_Q02',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '(8 + 4) × 3을 계산하면?',
      options: [
        { id: 'a', text: '20', isCorrect: false },
        { id: 'b', text: '36', isCorrect: true },
        { id: 'c', text: '24', isCorrect: false },
        { id: 'd', text: '44', isCorrect: false },
      ],
      explanation: '괄호를 먼저 계산합니다. 8 + 4 = 12, 12 × 3 = 36입니다.',
      hints: [
        '괄호 안을 먼저 계산해요.',
        '8 + 4 = 12. 그 다음 12 × 3 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['혼합 계산', '괄호', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK01_Q03',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '20 - 12 ÷ 4 + 3 = ?',
      correctAnswer: 20,
      explanation: '나눗셈을 먼저: 12 ÷ 4 = 3. 그 다음 왼쪽부터: 20 - 3 + 3 = 20입니다.',
      hints: [
        '나눗셈을 덧셈/뺄셈보다 먼저 해요.',
        '12 ÷ 4 = 3. 그러면 20 - 3 + 3 = ?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['혼합 계산', '5학년'],
  },

  // ============================================================
  // 단원: 자연수의 혼합 계산 - SK02: 혼합 계산 실전
  // ============================================================
  {
    id: 'G5_S1_NUM_01_SK02_Q01',
    skillId: 'G5_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '(15 - 3) × 2 + 18 ÷ 6 = ?',
      correctAnswer: 27,
      explanation: '괄호: 15 - 3 = 12. 곱셈: 12 × 2 = 24. 나눗셈: 18 ÷ 6 = 3. 덧셈: 24 + 3 = 27.',
      hints: [
        '① 괄호 ② 곱셈/나눗셈 ③ 덧셈/뺄셈 순서로!',
        '(15-3)=12, 12×2=24, 18÷6=3, 24+3=?',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['혼합 계산', '실전', '5학년'],
  },

  // ============================================================
  // 단원: 약수와 배수 - SK01: 약수와 배수의 개념
  // ============================================================
  {
    id: 'G5_S1_NUM_02_SK01_Q01',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '12의 약수가 아닌 것은?',
      options: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '4', isCorrect: false },
        { id: 'c', text: '5', isCorrect: true },
        { id: 'd', text: '6', isCorrect: false },
      ],
      explanation: '12 ÷ 5 = 2 ... 2로 나누어떨어지지 않으므로 5는 12의 약수가 아닙니다.',
      hints: [
        '12를 나누어떨어지게 하는 수를 찾아보세요.',
        '12 ÷ 5는 나누어떨어지나요?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['약수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK01_Q02',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 중 7의 배수는?',
      options: [
        { id: 'a', text: '15', isCorrect: false },
        { id: 'b', text: '21', isCorrect: true },
        { id: 'c', text: '25', isCorrect: false },
        { id: 'd', text: '32', isCorrect: false },
      ],
      explanation: '7 × 3 = 21이므로 21은 7의 배수입니다.',
      hints: [
        '7의 배수: 7, 14, 21, 28, 35, ...',
        '7을 곱해서 만들 수 있는 수를 찾아보세요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['배수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK01_Q03',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '18의 약수는 모두 몇 개인가요?',
      correctAnswer: 6,
      explanation: '18의 약수: 1, 2, 3, 6, 9, 18. 모두 6개입니다.',
      hints: [
        '1부터 차례로 18을 나누어 보세요.',
        '18 ÷ 1 = 18, 18 ÷ 2 = 9, 18 ÷ 3 = 6, ...',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['약수', '5학년'],
  },

  // ============================================================
  // 단원: 약수와 배수 - SK02: 최대공약수와 최소공배수
  // ============================================================
  {
    id: 'G5_S1_NUM_02_SK02_Q01',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '12와 18의 최대공약수는?',
      correctAnswer: 6,
      explanation: '12의 약수: 1, 2, 3, 4, 6, 12. 18의 약수: 1, 2, 3, 6, 9, 18. 공약수: 1, 2, 3, 6. 최대공약수: 6.',
      hints: [
        '12와 18의 약수를 각각 구해 보세요.',
        '공통으로 들어있는 약수 중 가장 큰 것은?',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['최대공약수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK02_Q02',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '4와 6의 최소공배수는?',
      correctAnswer: 12,
      explanation: '4의 배수: 4, 8, 12, 16, ... 6의 배수: 6, 12, 18, ... 공배수: 12, 24, ... 최소공배수: 12.',
      hints: [
        '4의 배수와 6의 배수를 나열해 보세요.',
        '처음으로 같아지는 수가 최소공배수예요.',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['최소공배수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK02_Q03',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '8과 12의 최소공배수는?',
      options: [
        { id: 'a', text: '4', isCorrect: false },
        { id: 'b', text: '12', isCorrect: false },
        { id: 'c', text: '24', isCorrect: true },
        { id: 'd', text: '96', isCorrect: false },
      ],
      explanation: '8의 배수: 8, 16, 24, 32, ... 12의 배수: 12, 24, 36, ... 최소공배수: 24.',
      hints: [
        '8의 배수와 12의 배수를 나열하세요.',
        '둘 다 나오는 가장 작은 수는?',
      ],
      commonMistakes: [
        { answer: '4', misconception: '최대공약수와 최소공배수를 혼동했습니다. 4는 최대공약수예요.' },
        { answer: '96', misconception: '8 × 12 = 96을 구했습니다. 이것은 공배수이지만 최소가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['최소공배수', '5학년'],
  },

  // ============================================================
  // 단원: 규칙과 대응 - SK01
  // ============================================================
  {
    id: 'G5_S1_CHANGE_03_SK01_Q01',
    skillId: 'G5_S1_CHANGE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '사람 수(□)와 사탕 수(△)의 관계가 △ = □ × 5일 때, 사람이 7명이면 사탕은 몇 개인가요?',
      options: [
        { id: 'a', text: '12개', isCorrect: false },
        { id: 'b', text: '30개', isCorrect: false },
        { id: 'c', text: '35개', isCorrect: true },
        { id: 'd', text: '40개', isCorrect: false },
      ],
      explanation: '△ = □ × 5이므로 □ = 7일 때 △ = 7 × 5 = 35개입니다.',
      hints: [
        '□에 7을 넣어 보세요.',
        '7 × 5 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['규칙', '대응', '5학년'],
  },
  {
    id: 'G5_S1_CHANGE_03_SK01_Q02',
    skillId: 'G5_S1_CHANGE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '시간(x)과 거리(y)의 관계가 y = x × 60일 때, 3시간이면 거리는 몇 km인가요?',
      correctAnswer: 180,
      explanation: 'y = 3 × 60 = 180km입니다.',
      hints: [
        'x에 3을 넣어 보세요.',
        '3 × 60 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['규칙', '대응', '5학년'],
  },

  // ============================================================
  // 단원: 합동과 대칭 - SK01: 합동
  // ============================================================
  {
    id: 'G5_S1_SHAPE_04_SK01_Q01',
    skillId: 'G5_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '두 도형이 합동이 되려면 어떤 조건이 필요한가요?',
      options: [
        { id: 'a', text: '모양만 같으면 된다', isCorrect: false },
        { id: 'b', text: '크기만 같으면 된다', isCorrect: false },
        { id: 'c', text: '모양과 크기가 모두 같아야 한다', isCorrect: true },
        { id: 'd', text: '색깔이 같으면 된다', isCorrect: false },
      ],
      explanation: '합동은 모양과 크기가 완전히 같아서 겹칠 수 있는 두 도형을 말합니다.',
      hints: [
        '합동은 완전히 겹칠 수 있어야 해요.',
        '모양과 크기 모두 중요해요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['합동', '5학년'],
  },

  // ============================================================
  // 단원: 합동과 대칭 - SK02: 선대칭과 점대칭
  // ============================================================
  {
    id: 'G5_S1_SHAPE_04_SK02_Q01',
    skillId: 'G5_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 직선을 따라 접었을 때 양쪽이 완전히 겹치는 도형을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '점대칭 도형', isCorrect: false },
        { id: 'b', text: '선대칭 도형', isCorrect: true },
        { id: 'c', text: '합동 도형', isCorrect: false },
        { id: 'd', text: '닮음 도형', isCorrect: false },
      ],
      explanation: '한 직선(대칭축)을 따라 접었을 때 양쪽이 완전히 겹치는 도형을 "선대칭 도형"이라고 합니다.',
      hints: [
        '반으로 접었을 때 양쪽이 같은 것이에요.',
        '나비의 날개를 생각해 보세요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['대칭', '선대칭', '5학년'],
  },
  {
    id: 'G5_S1_SHAPE_04_SK02_Q02',
    skillId: 'G5_S1_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '"정사각형은 선대칭 도형이면서 점대칭 도형이다." 맞나요?',
      correctAnswer: true,
      explanation: '정사각형은 대칭축이 4개인 선대칭 도형이면서, 중심에 대해 180° 돌리면 겹치는 점대칭 도형입니다.',
      hints: [
        '정사각형을 반으로 접으면 겹칠까요?',
        '정사각형의 중심을 기준으로 180° 돌리면?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['대칭', '정사각형', '5학년'],
  },

  // ============================================================
  // 단원: 자료의 표현 - SK01: 평균 구하기
  // ============================================================
  {
    id: 'G5_S1_DATA_05_SK01_Q01',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '수학 시험 점수가 85, 90, 75, 80, 95일 때 평균은?',
      correctAnswer: 85,
      explanation: '(85 + 90 + 75 + 80 + 95) ÷ 5 = 425 ÷ 5 = 85점입니다.',
      hints: [
        '평균 = 모든 점수의 합 ÷ 인원 수',
        '85 + 90 + 75 + 80 + 95 = 425. 425 ÷ 5 = ?',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['평균', '5학년'],
  },
  {
    id: 'G5_S1_DATA_05_SK01_Q02',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '키가 142cm, 148cm, 153cm, 137cm인 4명의 평균 키는?',
      options: [
        { id: 'a', text: '140cm', isCorrect: false },
        { id: 'b', text: '145cm', isCorrect: true },
        { id: 'c', text: '148cm', isCorrect: false },
        { id: 'd', text: '150cm', isCorrect: false },
      ],
      explanation: '(142 + 148 + 153 + 137) ÷ 4 = 580 ÷ 4 = 145cm입니다.',
      hints: [
        '네 명의 키를 모두 더해 보세요.',
        '합이 580이에요. 580 ÷ 4 = ?',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['평균', '5학년'],
  },

  // ============================================================
  // 단원: 수의 범위와 어림 - SK01: 이상, 이하, 초과, 미만
  // ============================================================
  {
    id: 'G5_S2_NUM_01_SK01_Q01',
    skillId: 'G5_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '"10 이상"에 해당하는 수가 아닌 것은?',
      options: [
        { id: 'a', text: '10', isCorrect: false },
        { id: 'b', text: '15', isCorrect: false },
        { id: 'c', text: '9', isCorrect: true },
        { id: 'd', text: '100', isCorrect: false },
      ],
      explanation: '"10 이상"은 10을 포함하여 10보다 크거나 같은 수입니다. 9는 10보다 작으므로 해당하지 않습니다.',
      hints: [
        '"이상"은 그 수를 포함해요.',
        '10보다 크거나 같은 수를 찾아보세요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수의 범위', '이상', '5학년'],
  },
  {
    id: 'G5_S2_NUM_01_SK01_Q02',
    skillId: 'G5_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '"5 초과 10 미만"인 자연수를 모두 고르면?',
      options: [
        { id: 'a', text: '5, 6, 7, 8, 9, 10', isCorrect: false },
        { id: 'b', text: '6, 7, 8, 9', isCorrect: true },
        { id: 'c', text: '5, 6, 7, 8, 9', isCorrect: false },
        { id: 'd', text: '6, 7, 8, 9, 10', isCorrect: false },
      ],
      explanation: '"초과"는 그 수를 포함하지 않고, "미만"도 그 수를 포함하지 않습니다. 5 < x < 10이므로 6, 7, 8, 9입니다.',
      hints: [
        '"초과"와 "미만"은 그 수를 포함하지 않아요.',
        '5보다 크고 10보다 작은 자연수를 찾아보세요.',
      ],
      commonMistakes: [
        { answer: '5, 6, 7, 8, 9, 10', misconception: '"초과"와 "미만"에서 경계값을 포함했습니다. 초과/미만은 그 수를 포함하지 않아요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['수의 범위', '초과', '미만', '5학년'],
  },

  // ============================================================
  // 단원: 수의 범위와 어림 - SK02: 올림, 버림, 반올림
  // ============================================================
  {
    id: 'G5_S2_NUM_01_SK02_Q01',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '3847을 백의 자리에서 반올림하면?',
      correctAnswer: 3800,
      explanation: '백의 자리 아래인 십의 자리 숫자가 4이므로 버립니다. 3847 → 3800입니다.',
      hints: [
        '백의 자리에서 반올림 = 십의 자리 숫자를 확인해요.',
        '십의 자리가 4이므로 올릴까요, 버릴까요?',
      ],
      commonMistakes: [
        { answer: '3900', misconception: '백의 자리 숫자(8)를 기준으로 판단했습니다. 백의 자리에서 반올림하려면 그 아래 자리(십의 자리=4)를 확인해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['반올림', '5학년'],
  },
  {
    id: 'G5_S2_NUM_01_SK02_Q02',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '678을 십의 자리에서 올림하면?',
      options: [
        { id: 'a', text: '670', isCorrect: false },
        { id: 'b', text: '680', isCorrect: true },
        { id: 'c', text: '700', isCorrect: false },
        { id: 'd', text: '690', isCorrect: false },
      ],
      explanation: '십의 자리에서 올림하면 일의 자리가 0이 아닌 경우 무조건 올립니다. 678 → 680입니다.',
      hints: [
        '올림은 무조건 올리는 것이에요.',
        '일의 자리 8이 0이 아니므로 십의 자리를 1 올려요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['올림', '5학년'],
  },

  // ============================================================
  // 단원: 분수의 곱셈 - SK01: (분수) × (자연수)
  // ============================================================
  {
    id: 'G5_S2_NUM_02_SK01_Q01',
    skillId: 'G5_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '2/5 × 3 = ?',
      questionLatex: '\\frac{2}{5} \\times 3 = \\square',
      options: [
        { id: 'a', text: '6/15', isCorrect: false },
        { id: 'b', text: '6/5', isCorrect: true },
        { id: 'c', text: '5/6', isCorrect: false },
        { id: 'd', text: '2/15', isCorrect: false },
      ],
      explanation: '분자 × 자연수: 2 × 3 = 6. 분모는 그대로: 6/5 = 1과 1/5입니다.',
      hints: [
        '분자에 3을 곱하고 분모는 그대로 두세요.',
        '2 × 3 = 6이므로 6/5',
      ],
      commonMistakes: [
        { answer: '6/15', misconception: '분모에도 3을 곱했습니다. 분모는 그대로 두세요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_02_SK01_Q02',
    skillId: 'G5_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '3/4 × 8의 분자는 얼마인가요? (약분 전)',
      correctAnswer: 24,
      explanation: '3 × 8 = 24이므로 분자는 24입니다. 24/4 = 6으로 약분됩니다.',
      hints: [
        '분자 3에 8을 곱하세요.',
        '3 × 8 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '곱셈', '5학년'],
  },

  // ============================================================
  // 단원: 분수의 곱셈 - SK02: (분수) × (분수)
  // ============================================================
  {
    id: 'G5_S2_NUM_02_SK02_Q01',
    skillId: 'G5_S2_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '2/3 × 4/5 = ?',
      questionLatex: '\\frac{2}{3} \\times \\frac{4}{5} = \\square',
      options: [
        { id: 'a', text: '6/8', isCorrect: false },
        { id: 'b', text: '8/15', isCorrect: true },
        { id: 'c', text: '8/8', isCorrect: false },
        { id: 'd', text: '6/15', isCorrect: false },
      ],
      explanation: '분자끼리: 2 × 4 = 8. 분모끼리: 3 × 5 = 15. 답: 8/15.',
      hints: [
        '분자끼리 곱하고, 분모끼리 곱해요.',
        '2 × 4 = 8, 3 × 5 = 15',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_02_SK02_Q02',
    skillId: 'G5_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '3/7 × 14/9를 계산하면 얼마인가요? (약분하여 기약분수로 답하세요. 분자를 답하세요.)',
      correctAnswer: 2,
      explanation: '3/7 × 14/9 = (3 × 14)/(7 × 9) = 42/63. 약분: 42 ÷ 21 = 2, 63 ÷ 21 = 3. 답: 2/3 (분자 = 2)',
      hints: [
        '먼저 분자끼리, 분모끼리 곱하세요.',
        '약분을 먼저 해도 돼요. 3과 9의 공약수는 3, 7과 14의 공약수는 7.',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['분수', '곱셈', '약분', '5학년'],
  },

  // ============================================================
  // 단원: 소수의 곱셈 - SK01
  // ============================================================
  {
    id: 'G5_S2_NUM_03_SK01_Q01',
    skillId: 'G5_S2_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '0.3 × 4 = ?',
      questionLatex: '0.3 \\times 4 = \\square',
      correctAnswer: 1.2,
      explanation: '0.3 × 4 = 1.2입니다. 3 × 4 = 12에서 소수점 아래 1자리이므로 1.2예요.',
      hints: [
        '소수점을 무시하고 3 × 4 = 12를 구한 뒤 소수점을 찍어요.',
        '0.3은 소수 아래 1자리이므로 12 → 1.2',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['소수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_03_SK01_Q02',
    skillId: 'G5_S2_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '2.5 × 0.4 = ?',
      questionLatex: '2.5 \\times 0.4 = \\square',
      correctAnswer: 1.0,
      explanation: '25 × 4 = 100. 소수점 아래 자릿수 합: 1 + 1 = 2자리. 100 → 1.00 = 1.0입니다.',
      hints: [
        '소수점을 무시하고 25 × 4 = 100을 구하세요.',
        '소수점 아래 자릿수: 2.5(1자리) + 0.4(1자리) = 2자리. 100 → 1.00',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['소수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_03_SK01_Q03',
    skillId: 'G5_S2_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '1.5 × 0.6 = ?',
      options: [
        { id: 'a', text: '0.9', isCorrect: true },
        { id: 'b', text: '9', isCorrect: false },
        { id: 'c', text: '0.09', isCorrect: false },
        { id: 'd', text: '90', isCorrect: false },
      ],
      explanation: '15 × 6 = 90. 소수점 아래 자릿수 합: 1 + 1 = 2자리. 90 → 0.90 = 0.9입니다.',
      hints: [
        '자연수처럼 곱하세요: 15 × 6 = 90',
        '소수점 아래 자릿수를 합하면 2자리. 90에서 소수점을 2자리 왼쪽으로.',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['소수', '곱셈', '5학년'],
  },

  // ============================================================
  // 단원: 직육면체 - SK01: 직육면체와 정육면체
  // ============================================================
  {
    id: 'G5_S2_SHAPE_04_SK01_Q01',
    skillId: 'G5_S2_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '직육면체의 면은 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '4개', isCorrect: false },
        { id: 'b', text: '6개', isCorrect: true },
        { id: 'c', text: '8개', isCorrect: false },
        { id: 'd', text: '12개', isCorrect: false },
      ],
      explanation: '직육면체는 직사각형 모양의 면이 6개 있습니다.',
      hints: [
        '상자를 떠올려 보세요. 위, 아래, 앞, 뒤, 왼쪽, 오른쪽',
        '총 6방향에 각각 면이 하나씩 있어요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['직육면체', '면', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK01_Q02',
    skillId: 'G5_S2_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '직육면체의 모서리는 모두 몇 개인가요?',
      correctAnswer: 12,
      explanation: '직육면체의 모서리는 12개입니다.',
      hints: [
        '위와 아래에 각각 4개, 세로로 4개의 모서리가 있어요.',
        '4 + 4 + 4 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['직육면체', '모서리', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK01_Q03',
    skillId: 'G5_S2_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '"정육면체는 직육면체이다." 맞나요?',
      correctAnswer: true,
      explanation: '정육면체는 모든 면이 정사각형인 특별한 직육면체입니다.',
      hints: [
        '정육면체의 면은 모두 정사각형이에요.',
        '정사각형은 특별한 직사각형이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['직육면체', '정육면체', '5학년'],
  },

  // ============================================================
  // 단원: 직육면체 - SK02: 부피와 겉넓이
  // ============================================================
  {
    id: 'G5_S2_SHAPE_04_SK02_Q01',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '가로 5cm, 세로 3cm, 높이 4cm인 직육면체의 부피는 몇 cm³인가요?',
      correctAnswer: 60,
      explanation: '부피 = 가로 × 세로 × 높이 = 5 × 3 × 4 = 60cm³입니다.',
      hints: [
        '부피 = 가로 × 세로 × 높이',
        '5 × 3 × 4 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['부피', '직육면체', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK02_Q02',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '한 모서리의 길이가 4cm인 정육면체의 겉넓이는 몇 cm²인가요?',
      correctAnswer: 96,
      explanation: '정육면체의 겉넓이 = 6 × (한 면의 넓이) = 6 × 4 × 4 = 6 × 16 = 96cm²입니다.',
      hints: [
        '정육면체는 같은 크기의 정사각형 면이 6개예요.',
        '한 면의 넓이 = 4 × 4 = 16. 6개 면이면?',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['겉넓이', '정육면체', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK02_Q03',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '가로 6cm, 세로 4cm, 높이 3cm인 직육면체의 겉넓이는?',
      options: [
        { id: 'a', text: '72cm²', isCorrect: false },
        { id: 'b', text: '108cm²', isCorrect: true },
        { id: 'c', text: '96cm²', isCorrect: false },
        { id: 'd', text: '144cm²', isCorrect: false },
      ],
      explanation: '겉넓이 = 2 × (6×4 + 4×3 + 6×3) = 2 × (24 + 12 + 18) = 2 × 54 = 108cm²',
      hints: [
        '겉넓이 = 2 × (가로×세로 + 세로×높이 + 가로×높이)',
        '6×4 = 24, 4×3 = 12, 6×3 = 18. 합 = 54. 2 × 54 = ?',
      ],
    },
    estimatedTimeSeconds: 40,
    tags: ['겉넓이', '직육면체', '5학년'],
  },

  // ============================================================
  // 추가 문제: 계산 순서 - SK01
  // ============================================================
  {
    id: 'G5_S1_NUM_01_SK01_Q04',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"3 + 4 × 2에서 덧셈을 먼저 계산해야 한다." 맞나요?',
      correctAnswer: false,
      explanation: '곱셈이 덧셈보다 먼저입니다. 4 × 2 = 8을 먼저 계산한 뒤 3 + 8 = 11.',
      hints: ['곱셈과 나눗셈이 덧셈과 뺄셈보다 먼저예요.'],
      commonMistakes: [{ answer: 'true', misconception: '왼쪽부터 순서대로 계산한다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['혼합 계산', '순서', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK01_Q05',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '(10 - 6) × 5 = ?',
      correctAnswer: 20,
      explanation: '괄호 먼저: 10 - 6 = 4, 그 다음 4 × 5 = 20.',
      hints: ['괄호 안을 먼저 계산해요.', '10 - 6 = 4, 4 × 5 = ?'],
      commonMistakes: [{ answer: '20', misconception: '' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['혼합 계산', '괄호', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK01_Q06',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.8,
    difficultyLabel: '어려움',
    content: {
      questionText: '7 × 3 - 12 ÷ 4 = □',
      correctAnswer: '18',
      explanation: '곱셈: 7×3=21, 나눗셈: 12÷4=3, 뺄셈: 21-3=18.',
      hints: ['곱셈과 나눗셈을 먼저 계산하세요.', '21 - 3 = ?'],
      commonMistakes: [{ answer: '12', misconception: '왼쪽부터 순서대로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['혼합 계산', '5학년'],
  },

  // ============================================================
  // 추가 문제: 혼합 계산 실전 - SK02
  // ============================================================
  {
    id: 'G5_S1_NUM_01_SK02_Q02',
    skillId: 'G5_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '100 - (20 + 30) × 2 = ?',
      options: [
        { id: 'a', text: '0', isCorrect: true },
        { id: 'b', text: '200', isCorrect: false },
        { id: 'c', text: '160', isCorrect: false },
        { id: 'd', text: '60', isCorrect: false },
      ],
      explanation: '괄호: 20+30=50, 곱셈: 50×2=100, 뺄셈: 100-100=0.',
      hints: ['괄호 먼저, 그 다음 곱셈, 마지막 뺄셈', '(20+30)=50, 50×2=100, 100-100=?'],
      commonMistakes: [{ answer: '160', misconception: '100-20=80, 80+30=110... 순서를 무시했습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['혼합 계산', '실전', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK02_Q03',
    skillId: 'G5_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '48 ÷ (16 - 8) + 5 × 3 = ?',
      correctAnswer: 21,
      explanation: '괄호: 16-8=8. 나눗셈: 48÷8=6. 곱셈: 5×3=15. 덧셈: 6+15=21.',
      hints: ['괄호 → 곱셈/나눗셈 → 덧셈/뺄셈 순서!', '48÷8=6, 5×3=15, 6+15=?'],
      commonMistakes: [{ answer: '23', misconception: '계산 순서를 잘못 적용했습니다.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['혼합 계산', '실전', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK02_Q04',
    skillId: 'G5_S1_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '(7 + 3) × (8 - 4) = □',
      correctAnswer: '40',
      explanation: '(7+3)=10, (8-4)=4, 10×4=40.',
      hints: ['각 괄호를 먼저 계산하세요.', '10 × 4 = ?'],
      commonMistakes: [{ answer: '14', misconception: '7+3×8-4로 잘못 읽었습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['혼합 계산', '실전', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK02_Q05',
    skillId: 'G5_S1_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '"30 - 4 × 5 + 2 = 12이다." 맞나요?',
      correctAnswer: true,
      explanation: '곱셈: 4×5=20. 왼쪽부터: 30-20+2=12. 맞습니다.',
      hints: ['곱셈을 먼저 하고 왼쪽부터 계산하세요.', '30-20+2=?'],
      commonMistakes: [{ answer: 'false', misconception: '30-4=26, 26×5=130... 순서를 잘못 적용했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['혼합 계산', '5학년'],
  },

  // ============================================================
  // 추가 문제: 약수와 배수 - SK01
  // ============================================================
  {
    id: 'G5_S1_NUM_02_SK01_Q04',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '6의 약수를 모두 구하면 몇 개인가요?',
      correctAnswer: 4,
      explanation: '6의 약수: 1, 2, 3, 6. 총 4개.',
      hints: ['1부터 6까지 나누어떨어지는 수를 찾아보세요.', '6÷1=6, 6÷2=3, 6÷3=2, 6÷6=1'],
      commonMistakes: [{ answer: '3', misconception: '6 자체를 약수에서 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['약수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK01_Q05',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"15는 3의 배수이다." 맞나요?',
      correctAnswer: true,
      explanation: '3 × 5 = 15이므로 15는 3의 배수입니다.',
      hints: ['15를 3으로 나누어 떨어지나요?', '15÷3=5'],
      commonMistakes: [{ answer: 'false', misconception: '15÷3을 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['배수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK01_Q06',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '24의 약수 중 가장 큰 수는 □이다.',
      correctAnswer: '24',
      explanation: '어떤 수의 약수 중 가장 큰 것은 그 수 자체입니다.',
      hints: ['자기 자신은 항상 약수예요.', '24÷24=1이므로 24도 약수'],
      commonMistakes: [{ answer: '12', misconception: '자기 자신을 약수에서 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['약수', '5학년'],
  },

  // ============================================================
  // 추가 문제: 최대공약수와 최소공배수 - SK02
  // ============================================================
  {
    id: 'G5_S1_NUM_02_SK02_Q04',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '15와 20의 최대공약수는?',
      correctAnswer: 5,
      explanation: '15의 약수: 1,3,5,15. 20의 약수: 1,2,4,5,10,20. 공약수: 1,5. 최대공약수: 5.',
      hints: ['15와 20의 공통 약수를 찾아보세요.', '5로 나누어떨어지나요?'],
      commonMistakes: [{ answer: '60', misconception: '최소공배수와 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['최대공약수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK02_Q05',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '6과 9의 최소공배수는?',
      options: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '18', isCorrect: true },
        { id: 'c', text: '54', isCorrect: false },
        { id: 'd', text: '36', isCorrect: false },
      ],
      explanation: '6의 배수: 6,12,18,... 9의 배수: 9,18,27,... 최소공배수: 18.',
      hints: ['6과 9의 배수를 각각 나열해보세요.', '처음 같은 수가 나오는 것은?'],
      commonMistakes: [{ answer: '3', misconception: '최대공약수를 구했습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['최소공배수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK02_Q06',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '"두 수의 최대공약수는 항상 두 수의 최소공배수보다 작거나 같다." 맞나요?',
      correctAnswer: true,
      explanation: '최대공약수는 두 수를 나눌 수 있는 가장 큰 수이고, 최소공배수는 두 수의 공통 배수 중 가장 작은 수입니다. 항상 GCF ≤ LCM.',
      hints: ['최대공약수와 최소공배수의 크기 관계를 생각해보세요.', '예: 12와 18의 GCF=6, LCM=36'],
      commonMistakes: [{ answer: 'false', misconception: '같을 수 있는 경우(같은 수일 때)를 고려하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['최대공약수', '최소공배수', '5학년'],
  },

  // ============================================================
  // 추가 문제: 규칙을 식으로 나타내기 - SK01
  // ============================================================
  {
    id: 'G5_S1_CHANGE_03_SK01_Q03',
    skillId: 'G5_S1_CHANGE_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"정삼각형의 한 변의 길이가 x cm이면 둘레는 x × 3 cm이다." 맞나요?',
      correctAnswer: true,
      explanation: '정삼각형은 세 변이 같으므로 둘레 = 한 변 × 3 = x × 3.',
      hints: ['정삼각형의 세 변은 모두 같아요.', '둘레 = 변 × 3'],
      commonMistakes: [{ answer: 'false', misconception: '정삼각형이 아니라 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['규칙', '대응', '5학년'],
  },
  {
    id: 'G5_S1_CHANGE_03_SK01_Q04',
    skillId: 'G5_S1_CHANGE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '탁자 1개에 4명이 앉을 수 있습니다. 탁자 8개에는 몇 명이 앉을 수 있나요?',
      correctAnswer: 32,
      explanation: 'y = x × 4에서 x=8이면 y = 32.',
      hints: ['탁자 수 × 4 = 앉을 수 있는 사람 수', '8 × 4 = ?'],
      commonMistakes: [{ answer: '12', misconception: '덧셈(8+4)으로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['규칙', '대응', '5학년'],
  },
  {
    id: 'G5_S1_CHANGE_03_SK01_Q05',
    skillId: 'G5_S1_CHANGE_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: 'x와 y의 관계가 y = x + 7일 때, x = 15이면 y = □이다.',
      correctAnswer: '22',
      explanation: 'y = 15 + 7 = 22',
      hints: ['x에 15를 넣으세요.', '15 + 7 = ?'],
      commonMistakes: [{ answer: '8', misconception: '15 - 7 = 8로 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['규칙', '대응', '5학년'],
  },
  {
    id: 'G5_S1_CHANGE_03_SK01_Q06',
    skillId: 'G5_S1_CHANGE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '1, 4, 9, 16, 25, ...에서 다음 수는?',
      options: [
        { id: 'a', text: '30', isCorrect: false },
        { id: 'b', text: '36', isCorrect: true },
        { id: 'c', text: '35', isCorrect: false },
        { id: 'd', text: '49', isCorrect: false },
      ],
      explanation: '1², 2², 3², 4², 5² 이므로 다음은 6² = 36.',
      hints: ['각 수가 무엇의 제곱인지 생각해보세요.', '1×1, 2×2, 3×3, 4×4, 5×5, 다음은?'],
      commonMistakes: [{ answer: '30', misconception: '차이가 일정하게 증가한다고만 생각했습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['규칙', '5학년'],
  },

  // ============================================================
  // 추가 문제: 합동 - SK01
  // ============================================================
  {
    id: 'G5_S1_SHAPE_04_SK01_Q02',
    skillId: 'G5_S1_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"크기가 다른 두 원은 합동이 아니다." 맞나요?',
      correctAnswer: true,
      explanation: '합동은 모양과 크기가 모두 같아야 합니다. 크기가 다르면 합동이 아닙니다.',
      hints: ['합동이 되려면 크기도 같아야 해요.'],
      commonMistakes: [{ answer: 'false', misconception: '모양이 같으면 합동이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['합동', '5학년'],
  },
  {
    id: 'G5_S1_SHAPE_04_SK01_Q03',
    skillId: 'G5_S1_SHAPE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '합동인 두 도형에서 겹쳐지는 변을 □변이라 하고, 겹쳐지는 각을 □각이라 한다. (같은 단어)',
      correctAnswer: '대응',
      explanation: '합동인 두 도형에서 서로 겹치는 변을 대응변, 각을 대응각이라 합니다.',
      hints: ['서로 짝지어지는 요소를 무엇이라 하나요?'],
      commonMistakes: [{ answer: '같은', misconception: '"같은 변"이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['합동', '대응', '5학년'],
  },
  {
    id: 'G5_S1_SHAPE_04_SK01_Q04',
    skillId: 'G5_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '삼각형 ABC와 삼각형 DEF가 합동일 때, 변 AB=5cm이면 대응변 DE의 길이는?',
      correctAnswer: 5,
      explanation: '합동인 도형의 대응변의 길이는 같으므로 DE = AB = 5cm.',
      hints: ['합동이면 대응변의 길이가 같아요.', 'AB와 DE는 대응변이에요.'],
      commonMistakes: [{ answer: '10', misconception: '2배라고 잘못 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['합동', '대응변', '5학년'],
  },

  // ============================================================
  // 추가 문제: 선대칭과 점대칭 - SK02
  // ============================================================
  {
    id: 'G5_S1_SHAPE_04_SK02_Q03',
    skillId: 'G5_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 중 선대칭 도형이 아닌 것은?',
      options: [
        { id: 'a', text: '원', isCorrect: false },
        { id: 'b', text: '정삼각형', isCorrect: false },
        { id: 'c', text: '평행사변형', isCorrect: true },
        { id: 'd', text: '직사각형', isCorrect: false },
      ],
      explanation: '평행사변형은 대칭축이 없어서 선대칭 도형이 아닙니다. (점대칭 도형이에요.)',
      hints: ['접었을 때 양쪽이 겹치지 않는 도형은?', '평행사변형을 반으로 접어보세요.'],
      commonMistakes: [{ answer: '직사각형', misconception: '직사각형도 선대칭이 아니라고 잘못 생각했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['대칭', '선대칭', '5학년'],
  },
  {
    id: 'G5_S1_SHAPE_04_SK02_Q04',
    skillId: 'G5_S1_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '정오각형의 대칭축은 몇 개인가요?',
      correctAnswer: 5,
      explanation: '정n각형의 대칭축은 n개입니다. 정오각형은 5개.',
      hints: ['정다각형의 대칭축 수 = 꼭짓점 수', '정오각형의 꼭짓점은 5개'],
      commonMistakes: [{ answer: '10', misconception: '2배로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['대칭', '선대칭', '5학년'],
  },
  {
    id: 'G5_S1_SHAPE_04_SK02_Q05',
    skillId: 'G5_S1_SHAPE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 점을 중심으로 180° 돌렸을 때 원래 모양과 겹치는 도형을 □대칭 도형이라 한다.',
      correctAnswer: '점',
      explanation: '한 점을 중심으로 180° 돌려서 겹치는 도형을 점대칭 도형이라 합니다.',
      hints: ['대칭의 기준이 "점"이에요.'],
      commonMistakes: [{ answer: '선', misconception: '선대칭과 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['대칭', '점대칭', '5학년'],
  },

  // ============================================================
  // 추가 문제: 평균 구하기 - SK01
  // ============================================================
  {
    id: 'G5_S1_DATA_05_SK01_Q03',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '4, 6, 8, 10의 평균은?',
      correctAnswer: 7,
      explanation: '(4+6+8+10)÷4 = 28÷4 = 7.',
      hints: ['모두 더한 뒤 개수로 나누세요.', '4+6+8+10=28, 28÷4=?'],
      commonMistakes: [{ answer: '28', misconception: '합만 구하고 나누지 않았습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['평균', '5학년'],
  },
  {
    id: 'G5_S1_DATA_05_SK01_Q04',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '4명의 평균 점수가 80점입니다. 총점은?',
      options: [
        { id: 'a', text: '240점', isCorrect: false },
        { id: 'b', text: '320점', isCorrect: true },
        { id: 'c', text: '400점', isCorrect: false },
        { id: 'd', text: '160점', isCorrect: false },
      ],
      explanation: '총점 = 평균 × 인원 = 80 × 4 = 320점.',
      hints: ['평균 = 총점 ÷ 인원이므로, 총점 = 평균 × 인원', '80 × 4 = ?'],
      commonMistakes: [{ answer: '240점', misconception: '80 × 3으로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['평균', '5학년'],
  },
  {
    id: 'G5_S1_DATA_05_SK01_Q05',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"10, 10, 10의 평균은 10이다." 맞나요?',
      correctAnswer: true,
      explanation: '(10+10+10)÷3 = 30÷3 = 10. 모두 같으면 평균도 같습니다.',
      hints: ['모든 수가 같을 때 평균은?'],
      commonMistakes: [{ answer: 'false', misconception: '합계(30)를 평균이라 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['평균', '5학년'],
  },
  {
    id: 'G5_S1_DATA_05_SK01_Q06',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '3명의 몸무게가 40kg, 50kg, 60kg일 때 평균은 □kg이다.',
      correctAnswer: '50',
      explanation: '(40+50+60)÷3 = 150÷3 = 50kg.',
      hints: ['세 수를 더한 뒤 3으로 나누세요.', '150÷3=?'],
      commonMistakes: [{ answer: '150', misconception: '합을 답으로 적었습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['평균', '5학년'],
  },

  // ============================================================
  // 추가 문제: 이상, 이하, 초과, 미만 - SK01
  // ============================================================
  {
    id: 'G5_S2_NUM_01_SK01_Q03',
    skillId: 'G5_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '"7 이하"인 자연수는 몇 개인가요?',
      correctAnswer: 7,
      explanation: '7 이하: 1, 2, 3, 4, 5, 6, 7 → 7개.',
      hints: ['"이하"는 그 수를 포함해요.', '1부터 7까지 세어보세요.'],
      commonMistakes: [{ answer: '6', misconception: '7을 포함하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['수의 범위', '이하', '5학년'],
  },
  {
    id: 'G5_S2_NUM_01_SK01_Q04',
    skillId: 'G5_S2_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"5 미만인 수에는 5가 포함된다." 맞나요?',
      correctAnswer: false,
      explanation: '"미만"은 그 수를 포함하지 않습니다. 5 미만은 5보다 작은 수입니다.',
      hints: ['"미만"은 그 수 자체를 포함하지 않아요.'],
      commonMistakes: [{ answer: 'true', misconception: '미만과 이하를 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['수의 범위', '미만', '5학년'],
  },
  {
    id: 'G5_S2_NUM_01_SK01_Q05',
    skillId: 'G5_S2_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '"3 초과 8 이하"인 자연수는 □개이다.',
      correctAnswer: '5',
      explanation: '3 초과 8 이하: 4, 5, 6, 7, 8 → 5개.',
      hints: ['초과는 포함 안 함, 이하는 포함', '4부터 8까지 세어보세요.'],
      commonMistakes: [{ answer: '6', misconception: '3도 포함시켰습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['수의 범위', '5학년'],
  },

  // ============================================================
  // 추가 문제: 올림, 버림, 반올림 - SK02
  // ============================================================
  {
    id: 'G5_S2_NUM_01_SK02_Q03',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '4567을 십의 자리에서 버림하면?',
      correctAnswer: 4560,
      explanation: '십의 자리에서 버림하면 일의 자리를 0으로 바꿉니다. 4567 → 4560.',
      hints: ['버림은 무조건 버리는 것이에요.', '일의 자리 7을 버리면?'],
      commonMistakes: [{ answer: '4500', misconception: '백의 자리에서 버림했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['버림', '5학년'],
  },
  {
    id: 'G5_S2_NUM_01_SK02_Q04',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '2951을 천의 자리에서 반올림하면?',
      options: [
        { id: 'a', text: '2000', isCorrect: false },
        { id: 'b', text: '3000', isCorrect: true },
        { id: 'c', text: '2900', isCorrect: false },
        { id: 'd', text: '2950', isCorrect: false },
      ],
      explanation: '천의 자리에서 반올림 = 백의 자리 숫자(9)를 확인. 9 ≥ 5이므로 올림. 2951 → 3000.',
      hints: ['천의 자리에서 반올림하려면 백의 자리를 확인', '백의 자리가 9이므로?'],
      commonMistakes: [{ answer: '2000', misconception: '반올림 대신 버림했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['반올림', '5학년'],
  },
  {
    id: 'G5_S2_NUM_01_SK02_Q05',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"345를 백의 자리에서 올림하면 400이다." 맞나요?',
      correctAnswer: true,
      explanation: '백의 자리에서 올림: 십의 자리가 0이 아니므로(4≠0) 올림. 345 → 400.',
      hints: ['올림은 0이 아닌 한 무조건 올려요.', '십의 자리와 일의 자리가 45≠00'],
      commonMistakes: [{ answer: 'false', misconception: '300이라고 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['올림', '5학년'],
  },
  {
    id: 'G5_S2_NUM_01_SK02_Q06',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '사탕 127개를 10개씩 봉지에 담으면 최소 □봉지가 필요하다. (올림 사용)',
      correctAnswer: '13',
      explanation: '127÷10=12.7이므로 올림하면 13봉지.',
      hints: ['나눠서 남는 것이 있으면 봉지가 하나 더 필요해요.', '12봉지면 120개만 담을 수 있어요.'],
      commonMistakes: [{ answer: '12', misconception: '버림했습니다. 7개가 남아요!' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['올림', '실생활', '5학년'],
  },

  // ============================================================
  // 추가 문제: (분수) × (자연수) - SK01
  // ============================================================
  {
    id: 'G5_S2_NUM_02_SK01_Q03',
    skillId: 'G5_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1/3 × 6 = ?',
      questionLatex: '\\frac{1}{3} \\times 6 = \\square',
      correctAnswer: 2,
      explanation: '1/3 × 6 = 6/3 = 2.',
      hints: ['분자에 6을 곱하세요.', '6/3 = ?'],
      commonMistakes: [{ answer: '6/3', misconception: '약분을 하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_02_SK01_Q04',
    skillId: 'G5_S2_NUM_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"1/4 × 4 = 1이다." 맞나요?',
      correctAnswer: true,
      explanation: '1/4 × 4 = 4/4 = 1.',
      hints: ['분자에 4를 곱하면?', '4/4 = ?'],
      commonMistakes: [{ answer: 'false', misconception: '분모에도 4를 곱해야 한다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['분수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_02_SK01_Q05',
    skillId: 'G5_S2_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '5/8 × 4 = □ (기약분수로)',
      correctAnswer: '5/2',
      explanation: '5/8 × 4 = 20/8 = 5/2 = 2와 1/2.',
      hints: ['분자: 5×4=20', '20/8을 약분하면?'],
      commonMistakes: [{ answer: '20/8', misconception: '약분을 하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '곱셈', '5학년'],
  },

  // ============================================================
  // 추가 문제: (분수) × (분수) - SK02
  // ============================================================
  {
    id: 'G5_S2_NUM_02_SK02_Q03',
    skillId: 'G5_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '1/2 × 1/3 = ?',
      questionLatex: '\\frac{1}{2} \\times \\frac{1}{3} = \\square',
      correctAnswer: '1/6',
      explanation: '1×1=1(분자), 2×3=6(분모). 답: 1/6.',
      hints: ['분자끼리 곱하고 분모끼리 곱하세요.'],
      commonMistakes: [{ answer: '2/5', misconception: '분자와 분모를 더했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_02_SK02_Q04',
    skillId: 'G5_S2_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '3/4 × 2/5 = ?',
      options: [
        { id: 'a', text: '3/10', isCorrect: true },
        { id: 'b', text: '5/9', isCorrect: false },
        { id: 'c', text: '6/20', isCorrect: false },
        { id: 'd', text: '6/9', isCorrect: false },
      ],
      explanation: '3×2=6, 4×5=20, 6/20=3/10 (2로 약분).',
      hints: ['분자끼리, 분모끼리 곱하세요.', '6/20을 약분하면?'],
      commonMistakes: [{ answer: '6/20', misconception: '약분을 하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['분수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_02_SK02_Q05',
    skillId: 'G5_S2_NUM_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '"진분수 × 진분수의 결과는 항상 두 분수보다 작다." 맞나요?',
      correctAnswer: true,
      explanation: '진분수는 1보다 작으므로, 1보다 작은 수를 곱하면 결과는 더 작아집니다.',
      hints: ['1/2 × 1/3 = 1/6. 1/6은 1/2보다 작고 1/3보다 작아요.'],
      commonMistakes: [{ answer: 'false', misconception: '곱하면 커진다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '곱셈', '5학년'],
  },

  // ============================================================
  // 추가 문제: 소수의 곱셈 - SK01
  // ============================================================
  {
    id: 'G5_S2_NUM_03_SK01_Q04',
    skillId: 'G5_S2_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '0.7 × 8 = ?',
      correctAnswer: 5.6,
      explanation: '7 × 8 = 56. 소수 아래 1자리이므로 5.6.',
      hints: ['소수점 무시하고 7×8=56', '소수점 1자리 → 5.6'],
      commonMistakes: [{ answer: '56', misconception: '소수점을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['소수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_03_SK01_Q05',
    skillId: 'G5_S2_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '0.12 × 5 = ?',
      options: [
        { id: 'a', text: '0.6', isCorrect: true },
        { id: 'b', text: '6', isCorrect: false },
        { id: 'c', text: '0.06', isCorrect: false },
        { id: 'd', text: '60', isCorrect: false },
      ],
      explanation: '12 × 5 = 60. 소수 아래 2자리이므로 0.60 = 0.6.',
      hints: ['12×5=60', '소수점 2자리 → 0.60'],
      commonMistakes: [{ answer: '6', misconception: '소수점을 1자리만 옮겼습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['소수', '곱셈', '5학년'],
  },
  {
    id: 'G5_S2_NUM_03_SK01_Q06',
    skillId: 'G5_S2_NUM_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '0.25 × 0.4 = □',
      correctAnswer: '0.1',
      explanation: '25 × 4 = 100. 소수점 아래 자릿수 합: 2+1=3자리. 100 → 0.100 = 0.1.',
      hints: ['25×4=100', '소수점 3자리 → 0.100'],
      commonMistakes: [{ answer: '10', misconception: '소수점을 찍지 않았습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['소수', '곱셈', '5학년'],
  },

  // ============================================================
  // 추가 문제: 직육면체와 정육면체 - SK01
  // ============================================================
  {
    id: 'G5_S2_SHAPE_04_SK01_Q04',
    skillId: 'G5_S2_SHAPE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '직육면체의 꼭짓점은 □개이다.',
      correctAnswer: '8',
      explanation: '직육면체의 꼭짓점은 8개입니다.',
      hints: ['상자의 모서리가 만나는 점을 세어보세요.', '위 4개, 아래 4개'],
      commonMistakes: [{ answer: '6', misconception: '면의 수와 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['직육면체', '꼭짓점', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK01_Q05',
    skillId: 'G5_S2_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '정육면체의 한 면의 모양은?',
      options: [
        { id: 'a', text: '직사각형', isCorrect: false },
        { id: 'b', text: '정삼각형', isCorrect: false },
        { id: 'c', text: '정사각형', isCorrect: true },
        { id: 'd', text: '오각형', isCorrect: false },
      ],
      explanation: '정육면체의 모든 면은 정사각형입니다.',
      hints: ['주사위를 생각해보세요.', '모든 면이 같은 정사각형이에요.'],
      commonMistakes: [{ answer: '직사각형', misconception: '직육면체의 면과 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['정육면체', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK01_Q06',
    skillId: 'G5_S2_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '"직육면체에서 마주 보는 면은 합동이다." 맞나요?',
      correctAnswer: true,
      explanation: '직육면체에서 마주 보는 면은 모양과 크기가 같은 합동인 직사각형입니다.',
      hints: ['상자의 위아래 면, 앞뒤 면, 좌우 면을 비교해보세요.'],
      commonMistakes: [{ answer: 'false', misconception: '다를 수도 있다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['직육면체', '합동', '5학년'],
  },

  // ============================================================
  // 추가 문제: 부피와 겉넓이 - SK02
  // ============================================================
  {
    id: 'G5_S2_SHAPE_04_SK02_Q04',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 모서리가 3cm인 정육면체의 부피는 몇 cm³?',
      correctAnswer: 27,
      explanation: '부피 = 3 × 3 × 3 = 27cm³.',
      hints: ['정육면체의 부피 = 한 모서리³', '3×3×3=?'],
      commonMistakes: [{ answer: '9', misconception: '3×3만 계산했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['부피', '정육면체', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK02_Q05',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '가로 10cm, 세로 5cm, 높이 2cm인 직육면체의 부피는?',
      options: [
        { id: 'a', text: '100cm³', isCorrect: true },
        { id: 'b', text: '50cm³', isCorrect: false },
        { id: 'c', text: '170cm²', isCorrect: false },
        { id: 'd', text: '200cm³', isCorrect: false },
      ],
      explanation: '부피 = 10×5×2 = 100cm³.',
      hints: ['부피 = 가로 × 세로 × 높이', '10×5×2=?'],
      commonMistakes: [{ answer: '170cm²', misconception: '겉넓이를 구했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['부피', '직육면체', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK02_Q06',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '"1m³ = 1000000cm³이다." 맞나요?',
      correctAnswer: true,
      explanation: '1m = 100cm이므로 1m³ = 100×100×100 = 1000000cm³.',
      hints: ['1m = 100cm', '100×100×100 = ?'],
      commonMistakes: [{ answer: 'false', misconception: '1000cm³이라고 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['부피', '단위', '5학년'],
  },
  {
    id: 'G5_S2_SHAPE_04_SK02_Q07',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 모서리가 5cm인 정육면체의 겉넓이는 □cm²이다.',
      correctAnswer: '150',
      explanation: '한 면의 넓이 = 5×5 = 25. 겉넓이 = 6×25 = 150cm².',
      hints: ['정육면체는 같은 크기의 면 6개', '6×25=?'],
      commonMistakes: [{ answer: '125', misconception: '부피(5³=125)를 구했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['겉넓이', '정육면체', '5학년'],
  },

  // ============================================================
  // 추가 문제 2차: 계산 순서 심화
  // ============================================================
  {
    id: 'G5_S1_NUM_01_SK01_Q07',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '6 + 2 - 3 = ?',
      options: [
        { id: 'a', text: '5', isCorrect: true },
        { id: 'b', text: '1', isCorrect: false },
        { id: 'c', text: '7', isCorrect: false },
        { id: 'd', text: '11', isCorrect: false },
      ],
      explanation: '덧셈과 뺄셈만 있으면 왼쪽부터 계산. 6+2=8, 8-3=5.',
      hints: ['왼쪽부터 순서대로 계산하세요.'],
      commonMistakes: [{ answer: '1', misconception: '2-3=-1을 먼저 계산했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['혼합 계산', '5학년'],
  },
  {
    id: 'G5_S1_NUM_01_SK01_Q08',
    skillId: 'G5_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '(24 ÷ 6 + 2) × 3 = ?',
      correctAnswer: 18,
      explanation: '괄호 안: 24÷6=4, 4+2=6. 6×3=18.',
      hints: ['괄호 안을 먼저! 24÷6=4', '(4+2)×3=6×3=?'],
      commonMistakes: [{ answer: '14', misconception: '계산 순서를 잘못 적용했습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['혼합 계산', '5학년'],
  },

  // 약수와 배수 추가
  {
    id: 'G5_S1_NUM_02_SK01_Q07',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '다음 중 10의 약수는?',
      options: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '4', isCorrect: false },
        { id: 'c', text: '5', isCorrect: true },
        { id: 'd', text: '7', isCorrect: false },
      ],
      explanation: '10÷5=2이므로 5는 10의 약수입니다.',
      hints: ['10을 나누어떨어지게 하는 수를 찾으세요.'],
      commonMistakes: [{ answer: '3', misconception: '10÷3은 나누어떨어지지 않아요.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['약수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK01_Q08',
    skillId: 'G5_S1_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '8의 배수 중 50보다 작은 가장 큰 수는 □이다.',
      correctAnswer: '48',
      explanation: '8의 배수: 8,16,24,32,40,48,56... 50보다 작은 가장 큰 것은 48.',
      hints: ['8의 배수를 나열해보세요.', '8×6=48, 8×7=56'],
      commonMistakes: [{ answer: '56', misconception: '50보다 큰 수를 선택했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['배수', '5학년'],
  },

  // 최대공약수/최소공배수 추가
  {
    id: 'G5_S1_NUM_02_SK02_Q07',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '10과 15의 최대공약수는 □이다.',
      correctAnswer: '5',
      explanation: '10의 약수: 1,2,5,10. 15의 약수: 1,3,5,15. 최대공약수: 5.',
      hints: ['10과 15의 공통 약수를 찾으세요.'],
      commonMistakes: [{ answer: '30', misconception: '최소공배수를 구했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['최대공약수', '5학년'],
  },
  {
    id: 'G5_S1_NUM_02_SK02_Q08',
    skillId: 'G5_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '9와 12의 최소공배수는?',
      correctAnswer: 36,
      explanation: '9의 배수: 9,18,27,36... 12의 배수: 12,24,36... 최소공배수: 36.',
      hints: ['9의 배수와 12의 배수를 나열하세요.', '처음으로 같아지는 수는?'],
      commonMistakes: [{ answer: '3', misconception: '최대공약수를 구했습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['최소공배수', '5학년'],
  },

  // 규칙과 대응 추가
  {
    id: 'G5_S1_CHANGE_03_SK01_Q07',
    skillId: 'G5_S1_CHANGE_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: 'y = x × 2일 때, x = 10이면 y = □이다.',
      correctAnswer: '20',
      explanation: 'y = 10 × 2 = 20.',
      hints: ['x에 10을 넣으세요.'],
      commonMistakes: [{ answer: '12', misconception: 'x+2로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['규칙', '대응', '5학년'],
  },

  // 합동 추가
  {
    id: 'G5_S1_SHAPE_04_SK01_Q05',
    skillId: 'G5_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '다음 중 합동인 두 도형은?',
      options: [
        { id: 'a', text: '반지름이 같은 두 원', isCorrect: true },
        { id: 'b', text: '크기가 다른 두 정삼각형', isCorrect: false },
        { id: 'c', text: '모양이 다른 두 사각형', isCorrect: false },
        { id: 'd', text: '한 변만 같은 두 삼각형', isCorrect: false },
      ],
      explanation: '반지름이 같은 두 원은 크기와 모양이 같으므로 합동입니다.',
      hints: ['합동 = 모양과 크기가 모두 같은 것'],
      commonMistakes: [{ answer: '크기가 다른 두 정삼각형', misconception: '모양만 같으면 합동이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['합동', '5학년'],
  },

  // 선대칭 추가
  {
    id: 'G5_S1_SHAPE_04_SK02_Q06',
    skillId: 'G5_S1_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"원은 선대칭 도형이다." 맞나요?',
      correctAnswer: true,
      explanation: '원은 지름을 대칭축으로 하는 선대칭 도형입니다. 대칭축이 무한히 많아요.',
      hints: ['원을 어느 방향으로 접어도 겹칠까요?'],
      commonMistakes: [{ answer: 'false', misconception: '대칭축이 하나만 있어야 한다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['대칭', '선대칭', '5학년'],
  },
  {
    id: 'G5_S1_SHAPE_04_SK02_Q07',
    skillId: 'G5_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 중 점대칭 도형인 것은?',
      options: [
        { id: 'a', text: '정삼각형', isCorrect: false },
        { id: 'b', text: '평행사변형', isCorrect: true },
        { id: 'c', text: '이등변삼각형', isCorrect: false },
        { id: 'd', text: '사다리꼴', isCorrect: false },
      ],
      explanation: '평행사변형은 중심에 대해 180° 돌리면 겹치는 점대칭 도형입니다.',
      hints: ['180° 돌렸을 때 겹치는 도형을 찾으세요.'],
      commonMistakes: [{ answer: '정삼각형', misconception: '정삼각형은 선대칭이지만 점대칭은 아니에요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['대칭', '점대칭', '5학년'],
  },

  // 평균 추가
  {
    id: 'G5_S1_DATA_05_SK01_Q07',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '3과 7의 평균은?',
      correctAnswer: 5,
      explanation: '(3+7)÷2 = 10÷2 = 5.',
      hints: ['두 수를 더한 뒤 2로 나누세요.'],
      commonMistakes: [{ answer: '10', misconception: '합만 구했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['평균', '5학년'],
  },

  // 수의 범위 추가
  {
    id: 'G5_S2_NUM_01_SK01_Q06',
    skillId: 'G5_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"20 이상 25 미만"인 자연수는?',
      options: [
        { id: 'a', text: '20, 21, 22, 23, 24', isCorrect: true },
        { id: 'b', text: '21, 22, 23, 24', isCorrect: false },
        { id: 'c', text: '20, 21, 22, 23, 24, 25', isCorrect: false },
        { id: 'd', text: '21, 22, 23, 24, 25', isCorrect: false },
      ],
      explanation: '이상은 포함, 미만은 불포함. 20 ≤ x < 25이므로 20,21,22,23,24.',
      hints: ['"이상"은 포함, "미만"은 불포함', '20은 포함, 25는 불포함'],
      commonMistakes: [{ answer: '20, 21, 22, 23, 24, 25', misconception: '25도 포함시켰습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['수의 범위', '5학년'],
  },

  // 올림/버림/반올림 추가
  {
    id: 'G5_S2_NUM_01_SK02_Q07',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '34를 십의 자리에서 반올림하면?',
      correctAnswer: 30,
      explanation: '일의 자리 숫자가 4이므로 버림. 34 → 30.',
      hints: ['일의 자리가 5 미만이면 버려요.', '4 < 5이므로 내림'],
      commonMistakes: [{ answer: '40', misconception: '올림했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['반올림', '5학년'],
  },

  // 분수×자연수 추가
  {
    id: 'G5_S2_NUM_02_SK01_Q06',
    skillId: 'G5_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '1/5 × 5 = ?',
      options: [
        { id: 'a', text: '1', isCorrect: true },
        { id: 'b', text: '5/5', isCorrect: false },
        { id: 'c', text: '1/25', isCorrect: false },
        { id: 'd', text: '5', isCorrect: false },
      ],
      explanation: '1/5 × 5 = 5/5 = 1.',
      hints: ['분자에 5를 곱하면 5/5', '5/5 = ?'],
      commonMistakes: [{ answer: '1/25', misconception: '분모에 곱했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['분수', '곱셈', '5학년'],
  },

  // 분수×분수 추가
  {
    id: 'G5_S2_NUM_02_SK02_Q06',
    skillId: 'G5_S2_NUM_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1/4 × 2/3 = □',
      correctAnswer: '1/6',
      explanation: '1×2=2, 4×3=12, 2/12=1/6.',
      hints: ['분자끼리, 분모끼리 곱하세요.', '2/12를 약분하면?'],
      commonMistakes: [{ answer: '2/12', misconception: '약분을 하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '곱셈', '5학년'],
  },

  // 소수의 곱셈 추가
  {
    id: 'G5_S2_NUM_03_SK01_Q07',
    skillId: 'G5_S2_NUM_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"0.5 × 2 = 1이다." 맞나요?',
      correctAnswer: true,
      explanation: '5×2=10, 소수 아래 1자리이므로 1.0=1.',
      hints: ['0.5는 1/2이에요.', '1/2 × 2 = ?'],
      commonMistakes: [{ answer: 'false', misconception: '0.10이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['소수', '곱셈', '5학년'],
  },

  // 직육면체 추가
  {
    id: 'G5_S2_SHAPE_04_SK01_Q07',
    skillId: 'G5_S2_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '직육면체의 면은 모두 어떤 도형인가요? (한글로)',
      correctAnswer: '직사각형',
      explanation: '직육면체의 6개 면은 모두 직사각형입니다.',
      hints: ['직"사각형"으로 이루어진 "육"면체'],
      commonMistakes: [{ answer: '정사각형', misconception: '정육면체와 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['직육면체', '5학년'],
  },

  // 부피 추가
  {
    id: 'G5_S2_SHAPE_04_SK02_Q08',
    skillId: 'G5_S2_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '부피의 단위로 알맞은 것은?',
      options: [
        { id: 'a', text: 'cm²', isCorrect: false },
        { id: 'b', text: 'cm³', isCorrect: true },
        { id: 'c', text: 'cm', isCorrect: false },
        { id: 'd', text: 'kg', isCorrect: false },
      ],
      explanation: '부피의 단위는 cm³(세제곱센티미터)입니다.',
      hints: ['넓이는 ², 부피는 ?'],
      commonMistakes: [{ answer: 'cm²', misconception: '넓이 단위와 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['부피', '단위', '5학년'],
  },

  // 혼합 계산 추가
  {
    id: 'G5_S1_NUM_01_SK02_Q06',
    skillId: 'G5_S1_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '2 × 5 + 3 × 4 = □',
      correctAnswer: '22',
      explanation: '2×5=10, 3×4=12, 10+12=22.',
      hints: ['곱셈을 먼저 각각 계산하세요.', '10+12=?'],
      commonMistakes: [{ answer: '100', misconception: '(2×5+3)×4로 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['혼합 계산', '5학년'],
  },

  // 이상/이하/초과/미만 추가
  {
    id: 'G5_S2_NUM_01_SK01_Q07',
    skillId: 'G5_S2_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"10 초과"인 가장 작은 자연수는 □이다.',
      correctAnswer: '11',
      explanation: '초과는 그 수를 포함하지 않으므로 10보다 큰 가장 작은 자연수는 11.',
      hints: ['"초과"는 포함하지 않아요.', '10 다음 자연수는?'],
      commonMistakes: [{ answer: '10', misconception: '초과에 10을 포함했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['수의 범위', '초과', '5학년'],
  },

  // 올림/버림/반올림 추가
  {
    id: 'G5_S2_NUM_01_SK02_Q08',
    skillId: 'G5_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '789를 백의 자리에서 버림하면?',
      options: [
        { id: 'a', text: '700', isCorrect: true },
        { id: 'b', text: '800', isCorrect: false },
        { id: 'c', text: '790', isCorrect: false },
        { id: 'd', text: '780', isCorrect: false },
      ],
      explanation: '백의 자리에서 버림하면 십의 자리와 일의 자리를 0으로. 789→700.',
      hints: ['버림은 무조건 아래 자리를 0으로', '백의 자리 아래를 모두 0으로'],
      commonMistakes: [{ answer: '790', misconception: '십의 자리에서 버림했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['버림', '5학년'],
  },

  // 평균 심화
  {
    id: 'G5_S1_DATA_05_SK01_Q08',
    skillId: 'G5_S1_DATA_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '5명의 평균이 72점일 때, 한 명이 빠져서 4명의 평균이 70점이 되었습니다. 빠진 사람의 점수는 □점이다.',
      correctAnswer: '80',
      explanation: '5명 총점=72×5=360. 4명 총점=70×4=280. 빠진 사람=360-280=80점.',
      hints: ['5명 총점과 4명 총점을 각각 구하세요.', '360-280=?'],
      commonMistakes: [{ answer: '72', misconception: '평균 점수를 답했습니다.' }],
    },
    estimatedTimeSeconds: 40,
    tags: ['평균', '심화', '5학년'],
  },
];
