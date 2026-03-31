// ============================================================
// MathVerse 4학년 커리큘럼 시드 데이터
// 2022 개정 교육과정 기반
// ============================================================
import type { SeedUnit, SeedSkill, SeedQuestion } from './curriculum-types';

// ============================================================
// 4학년 단원 정의
// ============================================================
export const G4_UNITS: SeedUnit[] = [
  // === 4학년 1학기 ===
  {
    id: 'G4_S1_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 4,
    semester: 1,
    code: 'G4_S1_01',
    nameKo: '큰 수',
    descriptionKo: '만, 억, 조 단위의 큰 수를 이해하고 읽고 쓸 수 있습니다.',
    sortOrder: 1,
  },
  {
    id: 'G4_S1_SHAPE_02',
    domainCode: 'SHAPE_MEAS',
    grade: 4,
    semester: 1,
    code: 'G4_S1_02',
    nameKo: '각도',
    descriptionKo: '각도의 단위(도)를 알고, 각도를 재고 그릴 수 있습니다.',
    sortOrder: 2,
  },
  {
    id: 'G4_S1_NUM_03',
    domainCode: 'NUM_OPS',
    grade: 4,
    semester: 1,
    code: 'G4_S1_03',
    nameKo: '곱셈과 나눗셈',
    descriptionKo: '(세 자리 수) × (두 자리 수), (두/세 자리 수) ÷ (두 자리 수)를 계산합니다.',
    sortOrder: 3,
  },
  {
    id: 'G4_S1_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 4,
    semester: 1,
    code: 'G4_S1_04',
    nameKo: '평면도형의 이동',
    descriptionKo: '밀기, 뒤집기, 돌리기를 이해합니다.',
    sortOrder: 4,
  },
  {
    id: 'G4_S1_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 4,
    semester: 1,
    code: 'G4_S1_05',
    nameKo: '막대그래프',
    descriptionKo: '막대그래프를 그리고 해석합니다.',
    sortOrder: 5,
  },
  // === 4학년 2학기 ===
  {
    id: 'G4_S2_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 4,
    semester: 2,
    code: 'G4_S2_01',
    nameKo: '분수의 덧셈과 뺄셈',
    descriptionKo: '분모가 같은 분수의 덧셈과 뺄셈을 합니다.',
    sortOrder: 6,
  },
  {
    id: 'G4_S2_SHAPE_02',
    domainCode: 'SHAPE_MEAS',
    grade: 4,
    semester: 2,
    code: 'G4_S2_02',
    nameKo: '삼각형',
    descriptionKo: '이등변삼각형, 정삼각형, 직각삼각형, 예각삼각형, 둔각삼각형을 이해합니다.',
    sortOrder: 7,
  },
  {
    id: 'G4_S2_NUM_03',
    domainCode: 'NUM_OPS',
    grade: 4,
    semester: 2,
    code: 'G4_S2_03',
    nameKo: '소수의 덧셈과 뺄셈',
    descriptionKo: '소수 한 자리, 두 자리의 덧셈과 뺄셈을 합니다.',
    sortOrder: 8,
  },
  {
    id: 'G4_S2_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 4,
    semester: 2,
    code: 'G4_S2_04',
    nameKo: '사각형',
    descriptionKo: '수직과 평행, 사다리꼴, 평행사변형, 마름모를 이해합니다.',
    sortOrder: 9,
  },
  {
    id: 'G4_S2_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 4,
    semester: 2,
    code: 'G4_S2_05',
    nameKo: '꺾은선그래프',
    descriptionKo: '꺾은선그래프를 그리고 해석합니다.',
    sortOrder: 10,
  },
];

// ============================================================
// 4학년 스킬 정의
// ============================================================
export const G4_SKILLS: SeedSkill[] = [
  // --- 큰 수 ---
  {
    id: 'G4_S1_NUM_01_SK01',
    unitId: 'G4_S1_NUM_01',
    code: 'big_numbers',
    nameKo: '만, 억, 조 이해',
    descriptionKo: '만, 억, 조 단위를 이해하고 큰 수를 읽고 쓸 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '10000 = 만, 10000만 = 억, 10000억 = 조예요. 큰 수는 네 자리씩 끊어 읽어요.',
  },
  {
    id: 'G4_S1_NUM_01_SK02',
    unitId: 'G4_S1_NUM_01',
    code: 'big_num_compare',
    nameKo: '큰 수의 크기 비교',
    descriptionKo: '큰 수의 크기를 비교할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '자릿수가 다르면 자릿수가 큰 수가 더 커요. 자릿수가 같으면 큰 자리부터 비교해요.',
  },
  // --- 각도 ---
  {
    id: 'G4_S1_SHAPE_02_SK01',
    unitId: 'G4_S1_SHAPE_02',
    code: 'angle_measure',
    nameKo: '각도 재기',
    descriptionKo: '각도기를 사용하여 각도를 잴 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '각도의 단위는 도(°)예요. 직각은 90°, 일직선은 180°, 한 바퀴는 360°예요.',
  },
  {
    id: 'G4_S1_SHAPE_02_SK02',
    unitId: 'G4_S1_SHAPE_02',
    code: 'angle_types',
    nameKo: '예각, 직각, 둔각',
    descriptionKo: '예각, 직각, 둔각을 구별할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '0° < 예각 < 90°, 직각 = 90°, 90° < 둔각 < 180°예요.',
  },
  // --- 곱셈과 나눗셈 ---
  {
    id: 'G4_S1_NUM_03_SK01',
    unitId: 'G4_S1_NUM_03',
    code: 'mult_3d_2d',
    nameKo: '(세 자리 수) × (두 자리 수)',
    descriptionKo: '세 자리 수와 두 자리 수의 곱셈을 할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '세 자리 수에 두 자리 수의 일의 자리를 곱하고, 십의 자리를 곱한 뒤 더해요.',
  },
  {
    id: 'G4_S1_NUM_03_SK02',
    unitId: 'G4_S1_NUM_03',
    code: 'div_by_2d',
    nameKo: '(두/세 자리 수) ÷ (두 자리 수)',
    descriptionKo: '두 자리 수로 나누는 나눗셈을 할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 2,
    conceptExplanation: '나누는 수가 두 자리일 때는 어림셈으로 몫을 정한 뒤 확인해요.',
  },
  // --- 평면도형의 이동 ---
  {
    id: 'G4_S1_SHAPE_04_SK01',
    unitId: 'G4_S1_SHAPE_04',
    code: 'transform',
    nameKo: '밀기, 뒤집기, 돌리기',
    descriptionKo: '도형의 밀기, 뒤집기, 돌리기를 이해할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 1,
    conceptExplanation: '밀기: 도형의 모양과 크기가 그대로 이동. 뒤집기: 거울에 비친 것처럼 좌우/상하 바뀜. 돌리기: 한 점을 중심으로 회전.',
  },
  // --- 막대그래프 ---
  {
    id: 'G4_S1_DATA_05_SK01',
    unitId: 'G4_S1_DATA_05',
    code: 'bar_graph',
    nameKo: '막대그래프 그리기와 해석',
    descriptionKo: '막대그래프를 그리고 해석할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '막대그래프는 자료의 수를 막대의 길이로 나타낸 것이에요. 막대가 길수록 수가 크답니다.',
  },
  // --- 분수의 덧셈과 뺄셈 ---
  {
    id: 'G4_S2_NUM_01_SK01',
    unitId: 'G4_S2_NUM_01',
    code: 'frac_add',
    nameKo: '분모가 같은 분수의 덧셈',
    descriptionKo: '분모가 같은 분수의 덧셈을 할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 1,
    conceptExplanation: '분모가 같은 분수를 더할 때는 분모는 그대로 두고 분자끼리 더해요. 예: 2/5 + 1/5 = 3/5',
  },
  {
    id: 'G4_S2_NUM_01_SK02',
    unitId: 'G4_S2_NUM_01',
    code: 'frac_sub',
    nameKo: '분모가 같은 분수의 뺄셈',
    descriptionKo: '분모가 같은 분수의 뺄셈을 할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '분모가 같은 분수를 뺄 때는 분모는 그대로 두고 분자끼리 빼요. 예: 4/7 - 2/7 = 2/7',
  },
  // --- 삼각형 ---
  {
    id: 'G4_S2_SHAPE_02_SK01',
    unitId: 'G4_S2_SHAPE_02',
    code: 'triangle_types',
    nameKo: '삼각형의 종류',
    descriptionKo: '이등변삼각형, 정삼각형 등 삼각형의 종류를 구별할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 1,
    conceptExplanation: '이등변삼각형: 두 변의 길이가 같은 삼각형. 정삼각형: 세 변의 길이가 모두 같은 삼각형. 직각삼각형: 직각이 있는 삼각형.',
  },
  // --- 소수의 덧셈과 뺄셈 ---
  {
    id: 'G4_S2_NUM_03_SK01',
    unitId: 'G4_S2_NUM_03',
    code: 'decimal_add',
    nameKo: '소수의 덧셈',
    descriptionKo: '소수 한 자리, 두 자리의 덧셈을 할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 1,
    conceptExplanation: '소수점끼리 맞춰서 같은 자리끼리 더해요. 예: 1.3 + 2.5 = 3.8. 소수점을 잊지 마세요!',
  },
  {
    id: 'G4_S2_NUM_03_SK02',
    unitId: 'G4_S2_NUM_03',
    code: 'decimal_sub',
    nameKo: '소수의 뺄셈',
    descriptionKo: '소수 한 자리, 두 자리의 뺄셈을 할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 2,
    conceptExplanation: '소수점끼리 맞춰서 같은 자리끼리 빼요. 예: 4.7 - 2.3 = 2.4. 자릿수가 다르면 0을 채워 맞춰요.',
  },
  // --- 사각형 ---
  {
    id: 'G4_S2_SHAPE_04_SK01',
    unitId: 'G4_S2_SHAPE_04',
    code: 'perpendicular_parallel',
    nameKo: '수직과 평행',
    descriptionKo: '수직과 평행의 개념을 이해할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 1,
    conceptExplanation: '두 직선이 만나서 직각을 이루면 "수직"이에요. 두 직선이 아무리 늘려도 만나지 않으면 "평행"이에요.',
  },
  {
    id: 'G4_S2_SHAPE_04_SK02',
    unitId: 'G4_S2_SHAPE_04',
    code: 'quadrilateral_types',
    nameKo: '여러 가지 사각형',
    descriptionKo: '사다리꼴, 평행사변형, 마름모를 구별할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 2,
    conceptExplanation: '사다리꼴: 평행한 변이 한 쌍. 평행사변형: 평행한 변이 두 쌍. 마름모: 네 변의 길이가 모두 같은 사각형.',
  },
  // --- 꺾은선그래프 ---
  {
    id: 'G4_S2_DATA_05_SK01',
    unitId: 'G4_S2_DATA_05',
    code: 'line_graph',
    nameKo: '꺾은선그래프 그리기와 해석',
    descriptionKo: '꺾은선그래프를 그리고 해석할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 1,
    conceptExplanation: '꺾은선그래프는 시간에 따른 변화를 나타내기에 좋아요. 선이 올라가면 증가, 내려가면 감소를 뜻해요.',
  },
];

// ============================================================
// 4학년 문제 데이터
// ============================================================
export const G4_QUESTIONS: SeedQuestion[] = [
  // ============================================================
  // 단원: 큰 수 - SK01: 만, 억, 조 이해
  // ============================================================
  {
    id: 'G4_S1_NUM_01_SK01_Q01',
    skillId: 'G4_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '10000은 한글로 무엇이라고 읽나요?',
      correctAnswer: '만',
      explanation: '10000은 "만"이라고 읽습니다.',
      hints: [
        '1000이 10개이면 10000이에요.',
        '천 다음의 단위는?',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['큰 수', '4학년'],
  },
  {
    id: 'G4_S1_NUM_01_SK01_Q02',
    skillId: 'G4_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1억은 몇 만인가요?',
      options: [
        { id: 'a', text: '100만', isCorrect: false },
        { id: 'b', text: '1000만', isCorrect: false },
        { id: 'c', text: '10000만', isCorrect: true },
        { id: 'd', text: '100000만', isCorrect: false },
      ],
      explanation: '1억 = 10000만입니다.',
      hints: [
        '1만 = 10000이에요.',
        '1억 = 100000000. 이것을 만으로 나누면?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['큰 수', '억', '4학년'],
  },
  {
    id: 'G4_S1_NUM_01_SK01_Q03',
    skillId: 'G4_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '35억 2400만을 수로 쓰면?',
      options: [
        { id: 'a', text: '3524000000', isCorrect: true },
        { id: 'b', text: '352400000', isCorrect: false },
        { id: 'c', text: '35240000', isCorrect: false },
        { id: 'd', text: '35024000000', isCorrect: false },
      ],
      explanation: '35억 = 3500000000, 2400만 = 24000000. 합하면 3524000000입니다.',
      hints: [
        '35억 = 35 × 100000000',
        '2400만 = 2400 × 10000',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['큰 수', '읽기 쓰기', '4학년'],
  },

  // ============================================================
  // 단원: 큰 수 - SK02: 큰 수의 크기 비교
  // ============================================================
  {
    id: 'G4_S1_NUM_01_SK02_Q01',
    skillId: 'G4_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '45억과 4억 5000만 중 더 큰 수는?',
      options: [
        { id: 'a', text: '45억', isCorrect: true },
        { id: 'b', text: '4억 5000만', isCorrect: false },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '45억 = 4500000000, 4억 5000만 = 450000000. 45억이 훨씬 더 큽니다.',
      hints: [
        '각각 수로 써서 비교해 보세요.',
        '45억은 4500000000이고, 4억 5000만은 450000000이에요.',
      ],
      commonMistakes: [
        { answer: '같다', misconception: '45억과 4억 5000만을 같다고 착각했습니다. 45억은 4억 5000만의 10배예요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['큰 수', '비교', '4학년'],
  },

  // ============================================================
  // 단원: 각도 - SK01: 각도 재기
  // ============================================================
  {
    id: 'G4_S1_SHAPE_02_SK01_Q01',
    skillId: 'G4_S1_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '직각은 몇 도인가요?',
      correctAnswer: 90,
      explanation: '직각은 90도(90°)입니다.',
      hints: [
        '종이의 모서리 각이에요.',
        'ㄱ자 모양의 반듯한 각도예요.',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['각도', '직각', '4학년'],
  },
  {
    id: 'G4_S1_SHAPE_02_SK01_Q02',
    skillId: 'G4_S1_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '삼각형의 세 각의 합은 몇 도인가요?',
      correctAnswer: 180,
      explanation: '삼각형의 세 각의 합은 항상 180도입니다.',
      hints: [
        '어떤 삼각형이든 세 각의 합은 같아요.',
        '직선은 180°예요. 삼각형을 오려서 세 각을 모으면 일직선이 돼요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['각도', '삼각형', '4학년'],
  },
  {
    id: 'G4_S1_SHAPE_02_SK01_Q03',
    skillId: 'G4_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '삼각형의 두 각이 60°, 80°일 때, 나머지 한 각은 몇 도인가요?',
      options: [
        { id: 'a', text: '30°', isCorrect: false },
        { id: 'b', text: '40°', isCorrect: true },
        { id: 'c', text: '50°', isCorrect: false },
        { id: 'd', text: '140°', isCorrect: false },
      ],
      explanation: '삼각형의 세 각의 합은 180°이므로 180 - 60 - 80 = 40°입니다.',
      hints: [
        '삼각형의 세 각의 합 = 180°',
        '180 - 60 - 80 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['각도', '삼각형', '4학년'],
  },

  // ============================================================
  // 단원: 각도 - SK02: 예각, 직각, 둔각
  // ============================================================
  {
    id: 'G4_S1_SHAPE_02_SK02_Q01',
    skillId: 'G4_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '135°는 어떤 종류의 각인가요?',
      options: [
        { id: 'a', text: '예각', isCorrect: false },
        { id: 'b', text: '직각', isCorrect: false },
        { id: 'c', text: '둔각', isCorrect: true },
        { id: 'd', text: '평각', isCorrect: false },
      ],
      explanation: '135°는 90°보다 크고 180°보다 작으므로 둔각입니다.',
      hints: [
        '90°보다 큰지, 작은지 확인하세요.',
        '90° < 135° < 180°이므로?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['각도', '둔각', '4학년'],
  },
  {
    id: 'G4_S1_SHAPE_02_SK02_Q02',
    skillId: 'G4_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '55°는 어떤 종류의 각인가요?',
      options: [
        { id: 'a', text: '예각', isCorrect: true },
        { id: 'b', text: '직각', isCorrect: false },
        { id: 'c', text: '둔각', isCorrect: false },
        { id: 'd', text: '평각', isCorrect: false },
      ],
      explanation: '55°는 0°보다 크고 90°보다 작으므로 예각입니다.',
      hints: [
        '90°보다 작은 각은?',
        '0° < 55° < 90°',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['각도', '예각', '4학년'],
  },

  // ============================================================
  // 단원: 곱셈과 나눗셈 - SK01
  // ============================================================
  {
    id: 'G4_S1_NUM_03_SK01_Q01',
    skillId: 'G4_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '234 × 12 = ?',
      questionLatex: '234 \\times 12 = \\square',
      correctAnswer: 2808,
      explanation: '234 × 2 = 468, 234 × 10 = 2340, 468 + 2340 = 2808입니다.',
      hints: [
        '234 × 12 = 234 × 10 + 234 × 2',
        '234 × 10 = 2340, 234 × 2 = 468. 합하면?',
      ],
    },
    estimatedTimeSeconds: 40,
    tags: ['곱셈', '세 자리 × 두 자리', '4학년'],
  },
  {
    id: 'G4_S1_NUM_03_SK01_Q02',
    skillId: 'G4_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '408 × 25 = ?',
      questionLatex: '408 \\times 25 = \\square',
      correctAnswer: 10200,
      explanation: '408 × 25 = 408 × 100 ÷ 4 = 40800 ÷ 4 = 10200. 또는 408 × 5 = 2040, 408 × 20 = 8160, 합 = 10200.',
      hints: [
        '408 × 25 = 408 × 20 + 408 × 5',
        '408 × 20 = 8160, 408 × 5 = 2040',
      ],
    },
    estimatedTimeSeconds: 45,
    tags: ['곱셈', '세 자리 × 두 자리', '4학년'],
  },

  // ============================================================
  // 단원: 곱셈과 나눗셈 - SK02: 나눗셈
  // ============================================================
  {
    id: 'G4_S1_NUM_03_SK02_Q01',
    skillId: 'G4_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '96 ÷ 12 = ?',
      questionLatex: '96 \\div 12 = \\square',
      correctAnswer: 8,
      explanation: '12 × 8 = 96이므로 96 ÷ 12 = 8입니다.',
      hints: [
        '12 × ? = 96을 생각해 보세요.',
        '12 × 8 = ?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['나눗셈', '두 자리로 나누기', '4학년'],
  },
  {
    id: 'G4_S1_NUM_03_SK02_Q02',
    skillId: 'G4_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '456 ÷ 24 = ?',
      questionLatex: '456 \\div 24 = \\square',
      correctAnswer: 19,
      explanation: '24 × 19 = 456이므로 456 ÷ 24 = 19입니다.',
      hints: [
        '24 × 20 = 480이에요. 20보다 약간 작은 수를 찾아보세요.',
        '24 × 19 = ?',
      ],
    },
    estimatedTimeSeconds: 40,
    tags: ['나눗셈', '세 자리 ÷ 두 자리', '4학년'],
  },

  // ============================================================
  // 단원: 평면도형의 이동 - SK01
  // ============================================================
  {
    id: 'G4_S1_SHAPE_04_SK01_Q01',
    skillId: 'G4_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '도형을 거울에 비추면 어떤 변환이 일어나나요?',
      options: [
        { id: 'a', text: '밀기', isCorrect: false },
        { id: 'b', text: '뒤집기', isCorrect: true },
        { id: 'c', text: '돌리기', isCorrect: false },
        { id: 'd', text: '늘리기', isCorrect: false },
      ],
      explanation: '거울에 비추면 좌우가 바뀌는 "뒤집기"가 일어납니다.',
      hints: [
        '거울에 비친 글자를 생각해 보세요.',
        '좌우가 바뀌는 것을 무엇이라 하나요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형 이동', '뒤집기', '4학년'],
  },
  {
    id: 'G4_S1_SHAPE_04_SK01_Q02',
    skillId: 'G4_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '시계 바늘이 움직이는 것은 어떤 도형의 이동인가요?',
      options: [
        { id: 'a', text: '밀기', isCorrect: false },
        { id: 'b', text: '뒤집기', isCorrect: false },
        { id: 'c', text: '돌리기', isCorrect: true },
      ],
      explanation: '시계 바늘은 중심을 기준으로 회전하므로 "돌리기"입니다.',
      hints: [
        '시계 바늘은 한 점(중심)을 기준으로 움직여요.',
        '한 점을 중심으로 회전하는 것을 무엇이라 하나요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형 이동', '돌리기', '4학년'],
  },

  // ============================================================
  // 단원: 막대그래프 - SK01
  // ============================================================
  {
    id: 'G4_S1_DATA_05_SK01_Q01',
    skillId: 'G4_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '막대그래프에서 가로축이 좋아하는 과일, 세로축이 학생 수를 나타냅니다. 사과의 막대 높이가 15칸이고 1칸이 2명을 나타내면 사과를 좋아하는 학생은 몇 명인가요?',
      options: [
        { id: 'a', text: '15명', isCorrect: false },
        { id: 'b', text: '25명', isCorrect: false },
        { id: 'c', text: '30명', isCorrect: true },
        { id: 'd', text: '17명', isCorrect: false },
      ],
      explanation: '1칸 = 2명이고 15칸이므로 15 × 2 = 30명입니다.',
      hints: [
        '1칸이 나타내는 수를 확인하세요.',
        '15 × 2 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['막대그래프', '4학년'],
  },

  // ============================================================
  // 단원: 분수의 덧셈과 뺄셈 - SK01: 덧셈
  // ============================================================
  {
    id: 'G4_S2_NUM_01_SK01_Q01',
    skillId: 'G4_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '2/7 + 3/7 = ?',
      questionLatex: '\\frac{2}{7} + \\frac{3}{7} = \\square',
      options: [
        { id: 'a', text: '5/14', isCorrect: false },
        { id: 'b', text: '5/7', isCorrect: true },
        { id: 'c', text: '6/7', isCorrect: false },
        { id: 'd', text: '1', isCorrect: false },
      ],
      explanation: '분모가 같으므로 분자끼리 더합니다. 2 + 3 = 5이므로 5/7입니다.',
      hints: [
        '분모가 같은 분수의 덧셈: 분모는 그대로, 분자끼리 더해요.',
        '2 + 3 = 5, 분모 7은 그대로.',
      ],
      commonMistakes: [
        { answer: '5/14', misconception: '분모끼리도 더했습니다. 분모가 같은 분수의 덧셈에서는 분모는 그대로 두세요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '덧셈', '4학년'],
  },
  {
    id: 'G4_S2_NUM_01_SK01_Q02',
    skillId: 'G4_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '3/8 + 4/8의 분자는 얼마인가요?',
      correctAnswer: 7,
      explanation: '3/8 + 4/8 = 7/8이므로 분자는 7입니다.',
      hints: [
        '분모가 같으면 분자끼리 더해요.',
        '3 + 4 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '덧셈', '4학년'],
  },
  {
    id: 'G4_S2_NUM_01_SK01_Q03',
    skillId: 'G4_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '4/9 + 5/9 = ?',
      questionLatex: '\\frac{4}{9} + \\frac{5}{9} = \\square',
      options: [
        { id: 'a', text: '9/18', isCorrect: false },
        { id: 'b', text: '9/9', isCorrect: false },
        { id: 'c', text: '1', isCorrect: true },
        { id: 'd', text: '1과 1/9', isCorrect: false },
      ],
      explanation: '4/9 + 5/9 = 9/9 = 1입니다. 분자와 분모가 같으면 1이에요.',
      hints: [
        '4 + 5 = 9, 분모도 9예요.',
        '9/9는 얼마인가요?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '덧셈', '4학년'],
  },

  // ============================================================
  // 단원: 분수의 덧셈과 뺄셈 - SK02: 뺄셈
  // ============================================================
  {
    id: 'G4_S2_NUM_01_SK02_Q01',
    skillId: 'G4_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '5/6 - 2/6 = ?',
      questionLatex: '\\frac{5}{6} - \\frac{2}{6} = \\square',
      options: [
        { id: 'a', text: '3/6', isCorrect: true },
        { id: 'b', text: '3/0', isCorrect: false },
        { id: 'c', text: '7/6', isCorrect: false },
        { id: 'd', text: '3/12', isCorrect: false },
      ],
      explanation: '분모가 같으므로 분자끼리 뺍니다. 5 - 2 = 3이므로 3/6(= 1/2)입니다.',
      hints: [
        '분모는 그대로, 분자끼리 빼요.',
        '5 - 2 = 3, 분모 6은 그대로.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '뺄셈', '4학년'],
  },
  {
    id: 'G4_S2_NUM_01_SK02_Q02',
    skillId: 'G4_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '7/10 - 3/10의 분자는 얼마인가요?',
      correctAnswer: 4,
      explanation: '7/10 - 3/10 = 4/10이므로 분자는 4입니다.',
      hints: [
        '분자끼리 빼요.',
        '7 - 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '뺄셈', '4학년'],
  },

  // ============================================================
  // 단원: 삼각형 - SK01: 삼각형의 종류
  // ============================================================
  {
    id: 'G4_S2_SHAPE_02_SK01_Q01',
    skillId: 'G4_S2_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '세 변의 길이가 모두 같은 삼각형을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '이등변삼각형', isCorrect: false },
        { id: 'b', text: '정삼각형', isCorrect: true },
        { id: 'c', text: '직각삼각형', isCorrect: false },
        { id: 'd', text: '둔각삼각형', isCorrect: false },
      ],
      explanation: '세 변의 길이가 모두 같은 삼각형을 "정삼각형"이라고 합니다. 정삼각형의 세 각은 모두 60°예요.',
      hints: [
        '"정"은 고르다는 뜻이에요.',
        '세 변이 모두 같으면?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['삼각형', '정삼각형', '4학년'],
  },
  {
    id: 'G4_S2_SHAPE_02_SK01_Q02',
    skillId: 'G4_S2_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '두 변의 길이가 같은 삼각형을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '이등변삼각형', isCorrect: true },
        { id: 'b', text: '정삼각형', isCorrect: false },
        { id: 'c', text: '부등변삼각형', isCorrect: false },
        { id: 'd', text: '직각삼각형', isCorrect: false },
      ],
      explanation: '두 변의 길이가 같은 삼각형을 "이등변삼각형"이라고 합니다.',
      hints: [
        '"이등변"은 "두 변이 같다"는 뜻이에요.',
        '두 변의 길이가 같은 삼각형은?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['삼각형', '이등변삼각형', '4학년'],
  },
  {
    id: 'G4_S2_SHAPE_02_SK01_Q03',
    skillId: 'G4_S2_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 각이 120°인 삼각형은 어떤 삼각형인가요?',
      options: [
        { id: 'a', text: '예각삼각형', isCorrect: false },
        { id: 'b', text: '직각삼각형', isCorrect: false },
        { id: 'c', text: '둔각삼각형', isCorrect: true },
      ],
      explanation: '120°는 90°보다 크므로 둔각입니다. 둔각이 있는 삼각형을 둔각삼각형이라고 합니다.',
      hints: [
        '120°는 둔각인가요, 예각인가요?',
        '둔각(90° 초과)이 있는 삼각형을 무엇이라 하나요?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['삼각형', '둔각삼각형', '4학년'],
  },

  // ============================================================
  // 단원: 소수의 덧셈과 뺄셈 - SK01: 소수의 덧셈
  // ============================================================
  {
    id: 'G4_S2_NUM_03_SK01_Q01',
    skillId: 'G4_S2_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '1.3 + 2.5 = ?',
      questionLatex: '1.3 + 2.5 = \\square',
      correctAnswer: 3.8,
      explanation: '소수점을 맞춰서 더합니다. 1.3 + 2.5 = 3.8입니다.',
      hints: [
        '소수점끼리 맞춰서 세로로 써 보세요.',
        '소수 첫째 자리: 3 + 5 = 8, 일의 자리: 1 + 2 = 3',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['소수', '덧셈', '4학년'],
  },
  {
    id: 'G4_S2_NUM_03_SK01_Q02',
    skillId: 'G4_S2_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '3.47 + 2.86 = ?',
      questionLatex: '3.47 + 2.86 = \\square',
      correctAnswer: 6.33,
      explanation: '소수 둘째 자리: 7 + 6 = 13 (3쓰고 1올림). 소수 첫째 자리: 4 + 8 + 1 = 13 (3쓰고 1올림). 일의 자리: 3 + 2 + 1 = 6. 답: 6.33',
      hints: [
        '소수점을 맞추고, 오른쪽부터 더해 보세요.',
        '소수 둘째 자리: 7 + 6 = 13',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['소수', '덧셈', '두 자리', '4학년'],
  },

  // ============================================================
  // 단원: 소수의 덧셈과 뺄셈 - SK02: 소수의 뺄셈
  // ============================================================
  {
    id: 'G4_S2_NUM_03_SK02_Q01',
    skillId: 'G4_S2_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '4.7 - 2.3 = ?',
      questionLatex: '4.7 - 2.3 = \\square',
      correctAnswer: 2.4,
      explanation: '소수점을 맞춰서 빼요. 4.7 - 2.3 = 2.4입니다.',
      hints: [
        '소수점끼리 맞춰서 빼요.',
        '소수 첫째 자리: 7 - 3 = 4, 일의 자리: 4 - 2 = 2',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['소수', '뺄셈', '4학년'],
  },
  {
    id: 'G4_S2_NUM_03_SK02_Q02',
    skillId: 'G4_S2_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '5.02 - 2.75 = ?',
      questionLatex: '5.02 - 2.75 = \\square',
      correctAnswer: 2.27,
      explanation: '소수 둘째 자리: 2에서 5를 뺄 수 없으므로 받아내림. 12 - 5 = 7. 소수 첫째 자리: 9 - 7 = 2 (받아내림 후). 일의 자리: 4 - 2 = 2. 답: 2.27',
      hints: [
        '소수점을 맞추고, 오른쪽부터 빼요.',
        '뺄 수 없을 때는 받아내림을 해요.',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['소수', '뺄셈', '받아내림', '4학년'],
  },

  // ============================================================
  // 단원: 사각형 - SK01: 수직과 평행
  // ============================================================
  {
    id: 'G4_S2_SHAPE_04_SK01_Q01',
    skillId: 'G4_S2_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '두 직선이 만나서 이루는 각이 직각일 때, 이 두 직선의 관계를 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '평행', isCorrect: false },
        { id: 'b', text: '수직', isCorrect: true },
        { id: 'c', text: '대각', isCorrect: false },
        { id: 'd', text: '교차', isCorrect: false },
      ],
      explanation: '두 직선이 만나서 이루는 각이 90°(직각)이면 "수직"이라고 합니다.',
      hints: [
        '직각으로 만나는 것을 무엇이라 하나요?',
        '+ 모양으로 만나는 두 선이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수직', '4학년'],
  },
  {
    id: 'G4_S2_SHAPE_04_SK01_Q02',
    skillId: 'G4_S2_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '"평행한 두 직선은 아무리 늘려도 만나지 않는다." 맞나요?',
      correctAnswer: true,
      explanation: '평행한 두 직선은 같은 방향으로 나란히 가므로 아무리 늘려도 만나지 않습니다.',
      hints: [
        '기찻길의 두 줄을 생각해 보세요.',
        '나란한 두 줄은 만날까요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['평행', '4학년'],
  },

  // ============================================================
  // 단원: 사각형 - SK02: 여러 가지 사각형
  // ============================================================
  {
    id: 'G4_S2_SHAPE_04_SK02_Q01',
    skillId: 'G4_S2_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '마주 보는 한 쌍의 변만 평행한 사각형을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '평행사변형', isCorrect: false },
        { id: 'b', text: '사다리꼴', isCorrect: true },
        { id: 'c', text: '마름모', isCorrect: false },
        { id: 'd', text: '직사각형', isCorrect: false },
      ],
      explanation: '마주 보는 한 쌍의 변만 평행한 사각형을 "사다리꼴"이라고 합니다.',
      hints: [
        '평행한 변이 "한 쌍"만 있어요.',
        '사다리 모양을 생각해 보세요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['사각형', '사다리꼴', '4학년'],
  },
  {
    id: 'G4_S2_SHAPE_04_SK02_Q02',
    skillId: 'G4_S2_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '네 변의 길이가 모두 같은 사각형을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '직사각형', isCorrect: false },
        { id: 'b', text: '평행사변형', isCorrect: false },
        { id: 'c', text: '마름모', isCorrect: true },
        { id: 'd', text: '사다리꼴', isCorrect: false },
      ],
      explanation: '네 변의 길이가 모두 같은 사각형을 "마름모"라고 합니다.',
      hints: [
        '다이아몬드 모양을 생각해 보세요.',
        '네 변이 모두 같은 사각형은?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['사각형', '마름모', '4학년'],
  },
  {
    id: 'G4_S2_SHAPE_04_SK02_Q03',
    skillId: 'G4_S2_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '"정사각형은 마름모이다." 맞나요?',
      correctAnswer: true,
      explanation: '정사각형은 네 변의 길이가 모두 같으므로 마름모입니다. (네 각이 모두 직각인 마름모가 정사각형이에요.)',
      hints: [
        '마름모의 조건은 네 변이 모두 같은 것이에요.',
        '정사각형의 네 변은 모두 같나요?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['사각형', '정사각형', '마름모', '4학년'],
  },

  // ============================================================
  // 단원: 꺾은선그래프 - SK01
  // ============================================================
  {
    id: 'G4_S2_DATA_05_SK01_Q01',
    skillId: 'G4_S2_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '시간에 따른 기온 변화를 나타내기에 가장 적당한 그래프는?',
      options: [
        { id: 'a', text: '막대그래프', isCorrect: false },
        { id: 'b', text: '꺾은선그래프', isCorrect: true },
        { id: 'c', text: '원그래프', isCorrect: false },
        { id: 'd', text: '그림그래프', isCorrect: false },
      ],
      explanation: '시간에 따른 변화를 나타낼 때는 꺾은선그래프가 가장 적합합니다.',
      hints: [
        '시간에 따른 "변화"를 보여주는 그래프는?',
        '선이 올라가고 내려가며 변화를 보여줘요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['꺾은선그래프', '4학년'],
  },
  {
    id: 'G4_S2_DATA_05_SK01_Q02',
    skillId: 'G4_S2_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '꺾은선그래프에서 선이 가장 가파르게 올라가는 구간은 어떤 의미인가요?',
      options: [
        { id: 'a', text: '값이 가장 큰 구간', isCorrect: false },
        { id: 'b', text: '값이 가장 많이 증가한 구간', isCorrect: true },
        { id: 'c', text: '값이 변하지 않은 구간', isCorrect: false },
        { id: 'd', text: '값이 가장 작은 구간', isCorrect: false },
      ],
      explanation: '꺾은선그래프에서 선이 가파르게 올라가면 그 구간에서 값이 많이 증가한 것을 의미합니다.',
      hints: [
        '선이 기울어진 정도가 변화의 크기를 나타내요.',
        '가파르게 = 많이 변했다는 뜻이에요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['꺾은선그래프', '해석', '4학년'],
  },
];
