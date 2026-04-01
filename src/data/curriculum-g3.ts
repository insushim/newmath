// ============================================================
// MathVerse 3학년 커리큘럼 시드 데이터
// 2022 개정 교육과정 기반
// ============================================================
import type { SeedUnit, SeedSkill, SeedQuestion } from './curriculum-types';

// ============================================================
// 3학년 단원 정의
// ============================================================
export const G3_UNITS: SeedUnit[] = [
  // === 3학년 1학기 ===
  {
    id: 'G3_S1_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 3,
    semester: 1,
    code: 'G3_S1_01',
    nameKo: '덧셈과 뺄셈',
    descriptionKo: '세 자리 수의 덧셈과 뺄셈을 할 수 있습니다.',
    sortOrder: 1,
  },
  {
    id: 'G3_S1_NUM_02',
    domainCode: 'NUM_OPS',
    grade: 3,
    semester: 1,
    code: 'G3_S1_02',
    nameKo: '곱셈',
    descriptionKo: '(두 자리 수) × (한 자리 수) 곱셈을 할 수 있습니다.',
    sortOrder: 2,
  },
  {
    id: 'G3_S1_SHAPE_03',
    domainCode: 'SHAPE_MEAS',
    grade: 3,
    semester: 1,
    code: 'G3_S1_03',
    nameKo: '평면도형',
    descriptionKo: '선분, 반직선, 직선, 각, 직각을 이해합니다.',
    sortOrder: 3,
  },
  {
    id: 'G3_S1_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 3,
    semester: 1,
    code: 'G3_S1_04',
    nameKo: '길이와 시간',
    descriptionKo: 'mm, km 단위와 시간 계산을 학습합니다.',
    sortOrder: 4,
  },
  {
    id: 'G3_S1_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 3,
    semester: 1,
    code: 'G3_S1_05',
    nameKo: '자료의 정리',
    descriptionKo: '자료를 표로 정리하고 그림그래프로 나타냅니다.',
    sortOrder: 5,
  },
  // === 3학년 2학기 ===
  {
    id: 'G3_S2_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 3,
    semester: 2,
    code: 'G3_S2_01',
    nameKo: '나눗셈',
    descriptionKo: '나눗셈의 의미를 이해하고 기본적인 나눗셈을 합니다.',
    sortOrder: 6,
  },
  {
    id: 'G3_S2_SHAPE_02',
    domainCode: 'SHAPE_MEAS',
    grade: 3,
    semester: 2,
    code: 'G3_S2_02',
    nameKo: '원',
    descriptionKo: '원의 중심, 반지름, 지름을 이해하고 원을 그립니다.',
    sortOrder: 7,
  },
  {
    id: 'G3_S2_NUM_03',
    domainCode: 'NUM_OPS',
    grade: 3,
    semester: 2,
    code: 'G3_S2_03',
    nameKo: '분수',
    descriptionKo: '분수의 의미를 이해하고 분수의 크기를 비교합니다.',
    sortOrder: 8,
  },
  {
    id: 'G3_S2_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 3,
    semester: 2,
    code: 'G3_S2_04',
    nameKo: '들이와 무게',
    descriptionKo: 'L, mL, kg, g 단위를 이해하고 측정합니다.',
    sortOrder: 9,
  },
  {
    id: 'G3_S2_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 3,
    semester: 2,
    code: 'G3_S2_05',
    nameKo: '자료의 정리',
    descriptionKo: '자료를 정리하여 간단한 그래프로 나타내고 해석합니다.',
    sortOrder: 10,
  },
];

// ============================================================
// 3학년 스킬 정의
// ============================================================
export const G3_SKILLS: SeedSkill[] = [
  // --- 덧셈과 뺄셈 ---
  {
    id: 'G3_S1_NUM_01_SK01',
    unitId: 'G3_S1_NUM_01',
    code: 'add_3digit',
    nameKo: '세 자리 수의 덧셈',
    descriptionKo: '받아올림이 있는 세 자리 수의 덧셈을 할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '일의 자리, 십의 자리 순서로 더하고, 합이 10 이상이면 윗자리로 올려요.',
  },
  {
    id: 'G3_S1_NUM_01_SK02',
    unitId: 'G3_S1_NUM_01',
    code: 'sub_3digit',
    nameKo: '세 자리 수의 뺄셈',
    descriptionKo: '받아내림이 있는 세 자리 수의 뺄셈을 할 수 있다.',
    defaultDifficulty: -0.3,
    sortOrder: 2,
    conceptExplanation: '일의 자리부터 빼되, 뺄 수 없으면 윗자리에서 10을 빌려와요.',
  },
  // --- 곱셈 ---
  {
    id: 'G3_S1_NUM_02_SK01',
    unitId: 'G3_S1_NUM_02',
    code: 'mult_2d_1d',
    nameKo: '(두 자리 수) × (한 자리 수)',
    descriptionKo: '두 자리 수와 한 자리 수의 곱셈을 할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '일의 자리와 십의 자리를 각각 곱한 뒤 더해요. 예: 23 × 4에서 3 × 4 = 12, 20 × 4 = 80, 80 + 12 = 92예요.',
  },
  {
    id: 'G3_S1_NUM_02_SK02',
    unitId: 'G3_S1_NUM_02',
    code: 'mult_word',
    nameKo: '곱셈 문장제',
    descriptionKo: '문장을 읽고 곱셈을 활용하여 해결할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '"몇 개씩 몇 묶음", "몇 배" 같은 표현이 나오면 곱셈을 사용해요.',
  },
  // --- 평면도형 ---
  {
    id: 'G3_S1_SHAPE_03_SK01',
    unitId: 'G3_S1_SHAPE_03',
    code: 'line_types',
    nameKo: '선분, 반직선, 직선',
    descriptionKo: '선분, 반직선, 직선을 구별할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '선분은 두 점을 곧게 이은 선이에요. 반직선은 한 점에서 시작해서 한쪽으로 끝없이 뻗는 선이에요. 직선은 양쪽으로 끝없이 뻗는 선이에요.',
  },
  {
    id: 'G3_S1_SHAPE_03_SK02',
    unitId: 'G3_S1_SHAPE_03',
    code: 'angle_right',
    nameKo: '각과 직각',
    descriptionKo: '각을 이해하고, 직각을 알 수 있다.',
    defaultDifficulty: -0.3,
    sortOrder: 2,
    conceptExplanation: '한 점에서 두 반직선이 만나면 각이 생겨요. 종이의 모서리처럼 반듯한 각을 "직각"이라고 해요.',
  },
  // --- 길이와 시간 ---
  {
    id: 'G3_S1_SHAPE_04_SK01',
    unitId: 'G3_S1_SHAPE_04',
    code: 'mm_km',
    nameKo: 'mm와 km 이해',
    descriptionKo: 'mm, km 단위를 알고 변환할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '1cm = 10mm, 1km = 1000m예요. 아주 짧은 것은 mm, 아주 먼 거리는 km를 사용해요.',
  },
  {
    id: 'G3_S1_SHAPE_04_SK02',
    unitId: 'G3_S1_SHAPE_04',
    code: 'time_calc',
    nameKo: '시간 계산',
    descriptionKo: '시간의 덧셈과 뺄셈을 할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '시간끼리, 분끼리 더하거나 빼요. 분이 60 이상이면 시간으로 올리고, 분이 부족하면 시간에서 빌려와요.',
  },
  // --- 자료의 정리 (1학기) ---
  {
    id: 'G3_S1_DATA_05_SK01',
    unitId: 'G3_S1_DATA_05',
    code: 'tally_table',
    nameKo: '정리하여 표 만들기',
    descriptionKo: '자료를 정리하여 표로 나타낼 수 있다.',
    defaultDifficulty: -0.3,
    sortOrder: 1,
    conceptExplanation: '자료를 조사한 후 같은 것끼리 묶어 정(正) 자를 그려 세면 편리해요.',
  },
  // --- 나눗셈 ---
  {
    id: 'G3_S2_NUM_01_SK01',
    unitId: 'G3_S2_NUM_01',
    code: 'div_concept',
    nameKo: '나눗셈의 의미',
    descriptionKo: '똑같이 나누는 상황에서 나눗셈을 이해할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '12개를 3명에게 똑같이 나누면 한 사람에게 4개씩이에요. 12 ÷ 3 = 4. 나눗셈 기호 ÷를 사용해요.',
  },
  {
    id: 'G3_S2_NUM_01_SK02',
    unitId: 'G3_S2_NUM_01',
    code: 'div_basic',
    nameKo: '곱셈과 나눗셈의 관계',
    descriptionKo: '곱셈구구를 이용하여 나눗셈을 할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '나눗셈은 곱셈의 반대예요. 3 × 4 = 12이면 12 ÷ 3 = 4이고 12 ÷ 4 = 3이에요.',
  },
  {
    id: 'G3_S2_NUM_01_SK03',
    unitId: 'G3_S2_NUM_01',
    code: 'div_remainder',
    nameKo: '나머지가 있는 나눗셈',
    descriptionKo: '나머지가 있는 나눗셈을 이해할 수 있다.',
    defaultDifficulty: 0.5,
    sortOrder: 3,
    conceptExplanation: '똑같이 나누고 남는 것이 "나머지"예요. 13 ÷ 4 = 3 ... 1에서 몫은 3, 나머지는 1이에요. 나머지는 항상 나누는 수보다 작아야 해요.',
  },
  // --- 원 ---
  {
    id: 'G3_S2_SHAPE_02_SK01',
    unitId: 'G3_S2_SHAPE_02',
    code: 'circle_parts',
    nameKo: '원의 중심, 반지름, 지름',
    descriptionKo: '원의 중심, 반지름, 지름을 이해할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '원의 가운데 점이 "중심"이에요. 중심에서 원 위의 한 점까지의 거리가 "반지름"이에요. 원을 지나는 가장 긴 선분이 "지름"이고, 지름 = 반지름 × 2예요.',
  },
  {
    id: 'G3_S2_SHAPE_02_SK02',
    unitId: 'G3_S2_SHAPE_02',
    code: 'circle_draw',
    nameKo: '컴퍼스로 원 그리기',
    descriptionKo: '컴퍼스를 사용하여 주어진 크기의 원을 그릴 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '컴퍼스의 바늘을 중심에 놓고, 연필 끝을 반지름만큼 벌려서 한 바퀴 돌리면 원이 그려져요.',
  },
  // --- 분수 ---
  {
    id: 'G3_S2_NUM_03_SK01',
    unitId: 'G3_S2_NUM_03',
    code: 'fraction_concept',
    nameKo: '분수의 의미',
    descriptionKo: '전체를 똑같이 나눈 것 중 일부를 분수로 나타낼 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '피자 한 판을 4조각으로 똑같이 나누었을 때, 1조각은 전체의 4분의 1, 즉 1/4이에요. 아래 수가 "분모"(전체 조각 수), 위 수가 "분자"(취한 조각 수)예요.',
  },
  {
    id: 'G3_S2_NUM_03_SK02',
    unitId: 'G3_S2_NUM_03',
    code: 'fraction_compare',
    nameKo: '단위분수의 크기 비교',
    descriptionKo: '분모가 같은 분수의 크기를 비교할 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 2,
    conceptExplanation: '분모가 같으면 분자가 클수록 큰 분수예요. 3/5 > 2/5. 단위분수(분자가 1)에서는 분모가 작을수록 큰 수예요. 1/2 > 1/3.',
  },
  // --- 들이와 무게 ---
  {
    id: 'G3_S2_SHAPE_04_SK01',
    unitId: 'G3_S2_SHAPE_04',
    code: 'volume_unit',
    nameKo: '들이 단위 (L, mL)',
    descriptionKo: 'L와 mL의 관계를 알고 들이를 측정할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '들이는 그릇에 담을 수 있는 양이에요. 1L = 1000mL예요. 물병이나 우유팩의 들이를 L나 mL로 나타낼 수 있어요.',
  },
  {
    id: 'G3_S2_SHAPE_04_SK02',
    unitId: 'G3_S2_SHAPE_04',
    code: 'weight_unit',
    nameKo: '무게 단위 (kg, g)',
    descriptionKo: 'kg과 g의 관계를 알고 무게를 측정할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 2,
    conceptExplanation: '1kg = 1000g이에요. 가벼운 것은 g, 무거운 것은 kg으로 나타내요.',
  },
  // --- 자료의 정리 (2학기) ---
  {
    id: 'G3_S2_DATA_05_SK01',
    unitId: 'G3_S2_DATA_05',
    code: 'picture_graph',
    nameKo: '그림그래프 해석',
    descriptionKo: '그림그래프를 보고 자료를 해석할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 1,
    conceptExplanation: '그림그래프에서 그림 하나가 나타내는 수를 확인하고, 그림의 수를 세어 자료를 해석해요.',
  },
];

// ============================================================
// 3학년 문제 데이터
// ============================================================
export const G3_QUESTIONS: SeedQuestion[] = [
  // ============================================================
  // 단원: 덧셈과 뺄셈 - SK01: 세 자리 수의 덧셈
  // ============================================================
  {
    id: 'G3_S1_NUM_01_SK01_Q01',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '347 + 285 = ?',
      questionLatex: '347 + 285 = \\square',
      correctAnswer: 632,
      explanation: '일의 자리: 7 + 5 = 12 (2쓰고 1올림). 십의 자리: 4 + 8 + 1 = 13 (3쓰고 1올림). 백의 자리: 3 + 2 + 1 = 6. 답: 632',
      hints: [
        '일의 자리부터 차례대로 더해 보세요.',
        '일의 자리: 7 + 5 = 12. 2를 쓰고 1을 올려요.',
        '십의 자리: 4 + 8 + 1(올림) = 13. 3을 쓰고 1을 올려요.',
      ],
      commonMistakes: [
        { answer: '622', misconception: '십의 자리에서 받아올림 1을 더하지 않았습니다.' },
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['세 자리 덧셈', '받아올림', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK01_Q02',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '568 + 274 = ?',
      questionLatex: '568 + 274 = \\square',
      correctAnswer: 842,
      explanation: '일의 자리: 8 + 4 = 12. 십의 자리: 6 + 7 + 1 = 14. 백의 자리: 5 + 2 + 1 = 8. 답: 842',
      hints: [
        '일의 자리부터 계산하세요.',
        '8 + 4 = 12이므로 2를 쓰고 1을 올려요.',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['세 자리 덧셈', '받아올림', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK01_Q03',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '학교 도서관에 동화책 456권, 과학책 378권이 있습니다. 책은 모두 몇 권인가요?',
      options: [
        { id: 'a', text: '824권', isCorrect: false },
        { id: 'b', text: '834권', isCorrect: true },
        { id: 'c', text: '734권', isCorrect: false },
        { id: 'd', text: '844권', isCorrect: false },
      ],
      explanation: '456 + 378 = 834권입니다.',
      hints: [
        '"모두"이므로 덧셈을 해요.',
        '456 + 378에서 일의 자리: 6 + 8 = 14',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['세 자리 덧셈', '서술형', '3학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈 - SK02: 세 자리 수의 뺄셈
  // ============================================================
  {
    id: 'G3_S1_NUM_01_SK02_Q01',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '725 - 368 = ?',
      questionLatex: '725 - 368 = \\square',
      correctAnswer: 357,
      explanation: '일의 자리: 5에서 8을 뺄 수 없으므로 15 - 8 = 7. 십의 자리: 1(빌린 후) - 6을 뺄 수 없으므로 11 - 6 = 5. 백의 자리: 6 - 3 = 3. 답: 357',
      hints: [
        '일의 자리부터 빼 보세요.',
        '5에서 8을 뺄 수 없으니 십의 자리에서 빌려와요.',
      ],
      commonMistakes: [
        { answer: '443', misconception: '받아내림을 하지 않고 큰 수에서 작은 수를 빼는 방식으로 각 자리를 계산했습니다.' },
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['세 자리 뺄셈', '받아내림', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_Q02',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '803 - 457 = ?',
      questionLatex: '803 - 457 = \\square',
      correctAnswer: 346,
      explanation: '일의 자리: 3에서 7을 뺄 수 없으므로 빌려옴. 십의 자리가 0이므로 백의 자리에서 빌려옴. 13 - 7 = 6, 9 - 5 = 4 (받아내림 후), 7 - 4 = 3. 답: 346',
      hints: [
        '십의 자리가 0일 때는 백의 자리에서 빌려와야 해요.',
        '800을 790 + 10으로 생각하고, 다시 10을 일의 자리에 빌려줘요.',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['세 자리 뺄셈', '받아내림', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_Q03',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '1000 - 637 = ?',
      options: [
        { id: 'a', text: '363', isCorrect: true },
        { id: 'b', text: '373', isCorrect: false },
        { id: 'c', text: '437', isCorrect: false },
        { id: 'd', text: '463', isCorrect: false },
      ],
      explanation: '1000 - 637 = 363입니다. 1000을 999 + 1로 생각하면 999 - 637 = 362, 362 + 1 = 363이에요.',
      hints: [
        '1000에서 빼기가 어려우면, 999 - 637에 1을 더해 보세요.',
        '각 자리에서 9 - 6 = 3, 9 - 3 = 6, 9 - 7 = 2 → 362, 여기에 +1',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['세 자리 뺄셈', '3학년'],
  },

  // ============================================================
  // 단원: 곱셈 - SK01: (두 자리 수) × (한 자리 수)
  // ============================================================
  {
    id: 'G3_S1_NUM_02_SK01_Q01',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '23 × 4 = ?',
      questionLatex: '23 \\times 4 = \\square',
      correctAnswer: 92,
      explanation: '3 × 4 = 12, 20 × 4 = 80, 80 + 12 = 92입니다.',
      hints: [
        '23을 20과 3으로 나누어 각각 곱하세요.',
        '3 × 4 = 12, 20 × 4 = 80. 합하면?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['곱셈', '두 자리 × 한 자리', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK01_Q02',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '47 × 6 = ?',
      questionLatex: '47 \\times 6 = \\square',
      correctAnswer: 282,
      explanation: '7 × 6 = 42 (2쓰고 4올림), 4 × 6 = 24, 24 + 4 = 28. 답: 282',
      hints: [
        '일의 자리: 7 × 6 = 42',
        '4를 올리고 십의 자리 계산: 4 × 6 + 4 = ?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['곱셈', '두 자리 × 한 자리', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK01_Q03',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '85 × 7 = ?',
      questionLatex: '85 \\times 7 = \\square',
      correctAnswer: 595,
      explanation: '5 × 7 = 35 (5쓰고 3올림), 8 × 7 = 56, 56 + 3 = 59. 답: 595',
      hints: [
        '일의 자리: 5 × 7 = 35',
        '십의 자리: 8 × 7 + 3 = ?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['곱셈', '두 자리 × 한 자리', '3학년'],
  },

  // ============================================================
  // 단원: 곱셈 - SK02: 곱셈 문장제
  // ============================================================
  {
    id: 'G3_S1_NUM_02_SK02_Q01',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 상자에 색연필이 36자루씩 들어 있습니다. 5상자에는 색연필이 모두 몇 자루인가요?',
      options: [
        { id: 'a', text: '150자루', isCorrect: false },
        { id: 'b', text: '170자루', isCorrect: false },
        { id: 'c', text: '180자루', isCorrect: true },
        { id: 'd', text: '190자루', isCorrect: false },
      ],
      explanation: '36 × 5 = 180자루입니다.',
      hints: [
        '"36자루씩 5상자"이므로 36 × 5를 계산해요.',
        '30 × 5 = 150, 6 × 5 = 30, 합하면?',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['곱셈', '문장제', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK02_Q02',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '1주일은 7일입니다. 4주일은 며칠인가요?',
      correctAnswer: 28,
      explanation: '7 × 4 = 28일입니다.',
      hints: [
        '1주일 = 7일이에요.',
        '7 × 4 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈', '문장제', '3학년'],
  },

  // ============================================================
  // 단원: 평면도형 - SK01: 선분, 반직선, 직선
  // ============================================================
  {
    id: 'G3_S1_SHAPE_03_SK01_Q01',
    skillId: 'G3_S1_SHAPE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '두 점을 곧게 이은 선을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '직선', isCorrect: false },
        { id: 'b', text: '선분', isCorrect: true },
        { id: 'c', text: '반직선', isCorrect: false },
        { id: 'd', text: '곡선', isCorrect: false },
      ],
      explanation: '두 점을 곧게 이은 선을 "선분"이라고 합니다.',
      hints: [
        '시작점과 끝점이 있는 곧은 선이에요.',
        '양쪽에 끝이 있어요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['평면도형', '선', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_03_SK01_Q02',
    skillId: 'G3_S1_SHAPE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '양쪽으로 끝없이 뻗은 곧은 선을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '선분', isCorrect: false },
        { id: 'b', text: '반직선', isCorrect: false },
        { id: 'c', text: '직선', isCorrect: true },
        { id: 'd', text: '곡선', isCorrect: false },
      ],
      explanation: '양쪽으로 끝없이 뻗은 곧은 선을 "직선"이라고 합니다.',
      hints: [
        '양쪽 끝이 없는 선이에요.',
        '선분의 양쪽을 끝없이 늘인 것이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['평면도형', '선', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_03_SK01_Q03',
    skillId: 'G3_S1_SHAPE_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"반직선은 한 점에서 시작하여 한쪽으로 끝없이 뻗은 선이다." 맞나요?',
      correctAnswer: true,
      explanation: '반직선은 한 점에서 시작하여 한쪽 방향으로만 끝없이 뻗은 선입니다.',
      hints: [
        '"반"은 절반이라는 뜻이에요.',
        '직선의 절반처럼 한쪽만 끝이 없어요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['평면도형', '선', '3학년'],
  },

  // ============================================================
  // 단원: 평면도형 - SK02: 각과 직각
  // ============================================================
  {
    id: 'G3_S1_SHAPE_03_SK02_Q01',
    skillId: 'G3_S1_SHAPE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '종이의 모서리와 같이 반듯한 각을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '둔각', isCorrect: false },
        { id: 'b', text: '예각', isCorrect: false },
        { id: 'c', text: '직각', isCorrect: true },
        { id: 'd', text: '평각', isCorrect: false },
      ],
      explanation: '종이 모서리처럼 반듯한 각을 "직각"이라고 합니다. 직각은 90도예요.',
      hints: [
        '노트나 책의 모서리를 떠올려 보세요.',
        'ㄱ자 모양의 반듯한 각이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['각', '직각', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_03_SK02_Q02',
    skillId: 'G3_S1_SHAPE_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"직사각형의 네 각은 모두 직각이다." 맞나요?',
      correctAnswer: true,
      explanation: '직사각형은 네 각이 모두 직각인 사각형입니다.',
      hints: [
        '직사각형의 "직"은 직각의 "직"이에요.',
        '책이나 노트를 떠올려 보세요. 모서리가 모두 직각이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['각', '직각', '직사각형', '3학년'],
  },

  // ============================================================
  // 단원: 길이와 시간 - SK01: mm와 km 이해
  // ============================================================
  {
    id: 'G3_S1_SHAPE_04_SK01_Q01',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1cm는 몇 mm인가요?',
      correctAnswer: 10,
      explanation: '1cm = 10mm입니다.',
      hints: [
        '자에서 1cm 안에 작은 눈금이 몇 칸인지 세어 보세요.',
        'cm보다 작은 단위가 mm예요.',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'mm', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK01_Q02',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1km는 몇 m인가요?',
      correctAnswer: 1000,
      explanation: '1km = 1000m입니다.',
      hints: [
        'km는 m보다 큰 단위예요.',
        '"킬로"는 1000배를 뜻해요.',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'km', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK01_Q03',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '3km 400m는 몇 m인가요?',
      options: [
        { id: 'a', text: '340m', isCorrect: false },
        { id: 'b', text: '3040m', isCorrect: false },
        { id: 'c', text: '3400m', isCorrect: true },
        { id: 'd', text: '34000m', isCorrect: false },
      ],
      explanation: '3km = 3000m이므로 3km 400m = 3000m + 400m = 3400m입니다.',
      hints: [
        '1km = 1000m를 이용하세요.',
        '3km = 3000m, 거기에 400m를 더하면?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['길이', '단위 변환', '3학년'],
  },

  // ============================================================
  // 단원: 길이와 시간 - SK02: 시간 계산
  // ============================================================
  {
    id: 'G3_S1_SHAPE_04_SK02_Q01',
    skillId: 'G3_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '2시간 40분 + 1시간 30분 = ?',
      options: [
        { id: 'a', text: '3시간 70분', isCorrect: false },
        { id: 'b', text: '4시간 10분', isCorrect: true },
        { id: 'c', text: '3시간 10분', isCorrect: false },
        { id: 'd', text: '4시간 70분', isCorrect: false },
      ],
      explanation: '시간끼리: 2 + 1 = 3시간. 분끼리: 40 + 30 = 70분 = 1시간 10분. 3시간 + 1시간 10분 = 4시간 10분.',
      hints: [
        '시간끼리, 분끼리 따로 더해 보세요.',
        '분이 60 이상이면 1시간으로 바꿔요.',
      ],
      commonMistakes: [
        { answer: '3시간 70분', misconception: '70분을 시간으로 변환하지 않았습니다. 60분 = 1시간이에요.' },
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['시간', '덧셈', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK02_Q02',
    skillId: 'G3_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '3시간 20분 - 1시간 45분 = ?',
      options: [
        { id: 'a', text: '1시간 35분', isCorrect: true },
        { id: 'b', text: '2시간 35분', isCorrect: false },
        { id: 'c', text: '1시간 25분', isCorrect: false },
        { id: 'd', text: '2시간 25분', isCorrect: false },
      ],
      explanation: '20분에서 45분을 뺄 수 없으므로 1시간을 빌려옴. 2시간 80분 - 1시간 45분 = 1시간 35분.',
      hints: [
        '분끼리 빼려면 20에서 45를 뺄 수 없어요.',
        '3시간 20분 = 2시간 80분으로 바꿔 보세요.',
      ],
    },
    estimatedTimeSeconds: 35,
    tags: ['시간', '뺄셈', '3학년'],
  },

  // ============================================================
  // 단원: 자료의 정리 - SK01: 정리하여 표 만들기
  // ============================================================
  {
    id: 'G3_S1_DATA_05_SK01_Q01',
    skillId: 'G3_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '正 자로 수를 세었을 때, 正正正이면 몇 명인가요?',
      options: [
        { id: 'a', text: '3명', isCorrect: false },
        { id: 'b', text: '10명', isCorrect: false },
        { id: 'c', text: '15명', isCorrect: true },
        { id: 'd', text: '20명', isCorrect: false },
      ],
      explanation: '正 한 글자는 5를 나타내므로 正이 3개이면 5 × 3 = 15명입니다.',
      hints: [
        '正 한 글자는 5를 나타내요.',
        '5 × 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자료 정리', '표', '3학년'],
  },

  // ============================================================
  // 단원: 나눗셈 - SK01: 나눗셈의 의미
  // ============================================================
  {
    id: 'G3_S2_NUM_01_SK01_Q01',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '사탕 12개를 3명에게 똑같이 나누어 주면 한 사람에게 몇 개씩 줄 수 있나요?',
      correctAnswer: 4,
      explanation: '12 ÷ 3 = 4이므로 한 사람에게 4개씩 줄 수 있습니다.',
      hints: [
        '12개를 3묶음으로 똑같이 나누어 보세요.',
        '3 × ? = 12에서 빈칸은?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['나눗셈', '의미', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK01_Q02',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '20 ÷ 5 = ?',
      questionLatex: '20 \\div 5 = \\square',
      correctAnswer: 4,
      explanation: '20 ÷ 5 = 4입니다. 5 × 4 = 20이기 때문이에요.',
      hints: [
        '5 × ? = 20에서 빈칸을 찾아보세요.',
        '5씩 묶으면 20은 몇 묶음?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK01_Q03',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '연필 24자루를 6명에게 똑같이 나누어 주려면 한 사람에게 몇 자루씩 주어야 하나요?',
      options: [
        { id: 'a', text: '3자루', isCorrect: false },
        { id: 'b', text: '4자루', isCorrect: true },
        { id: 'c', text: '5자루', isCorrect: false },
        { id: 'd', text: '6자루', isCorrect: false },
      ],
      explanation: '24 ÷ 6 = 4이므로 한 사람에게 4자루씩 줄 수 있습니다.',
      hints: [
        '24 ÷ 6을 계산해 보세요.',
        '6 × ? = 24에서 빈칸은?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['나눗셈', '서술형', '3학년'],
  },

  // ============================================================
  // 단원: 나눗셈 - SK02: 곱셈과 나눗셈의 관계
  // ============================================================
  {
    id: 'G3_S2_NUM_01_SK02_Q01',
    skillId: 'G3_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '7 × 8 = 56일 때, 56 ÷ 7 = ?',
      correctAnswer: 8,
      explanation: '7 × 8 = 56이므로 56 ÷ 7 = 8입니다. 곱셈과 나눗셈은 서로 반대 관계예요.',
      hints: [
        '곱셈식에서 나눗셈으로 바꿔 보세요.',
        '7 × ? = 56에서 빈칸은?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '곱셈 관계', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK02_Q02',
    skillId: 'G3_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '45 ÷ 9 = ?',
      questionLatex: '45 \\div 9 = \\square',
      correctAnswer: 5,
      explanation: '9 × 5 = 45이므로 45 ÷ 9 = 5입니다.',
      hints: [
        '9의 단 곱셈구구를 떠올려 보세요.',
        '9 × ? = 45',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '곱셈구구', '3학년'],
  },

  // ============================================================
  // 단원: 나눗셈 - SK03: 나머지가 있는 나눗셈
  // ============================================================
  {
    id: 'G3_S2_NUM_01_SK03_Q01',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '13 ÷ 4의 몫과 나머지는?',
      options: [
        { id: 'a', text: '몫 3, 나머지 1', isCorrect: true },
        { id: 'b', text: '몫 4, 나머지 1', isCorrect: false },
        { id: 'c', text: '몫 3, 나머지 2', isCorrect: false },
        { id: 'd', text: '몫 2, 나머지 5', isCorrect: false },
      ],
      explanation: '4 × 3 = 12, 13 - 12 = 1이므로 몫은 3, 나머지는 1입니다.',
      hints: [
        '4의 단 곱셈구구에서 13에 가장 가까운 수를 찾아보세요.',
        '4 × 3 = 12, 4 × 4 = 16. 12가 13보다 작고 가장 가까워요.',
      ],
      commonMistakes: [
        { answer: '몫 2, 나머지 5', misconception: '나머지가 나누는 수(4)보다 큽니다. 나머지는 항상 나누는 수보다 작아야 해요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['나눗셈', '나머지', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK03_Q02',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '23 ÷ 5의 나머지는 얼마인가요?',
      correctAnswer: 3,
      explanation: '5 × 4 = 20, 23 - 20 = 3이므로 나머지는 3입니다.',
      hints: [
        '5의 단에서 23에 가장 가까운 수를 찾아보세요.',
        '5 × 4 = 20이에요. 23 - 20 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['나눗셈', '나머지', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK03_Q03',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '사탕 29개를 6명에게 똑같이 나누어 주면 한 사람에게 몇 개씩 주고 몇 개가 남나요?',
      options: [
        { id: 'a', text: '4개씩, 5개 남음', isCorrect: true },
        { id: 'b', text: '5개씩, 1개 남음', isCorrect: false },
        { id: 'c', text: '4개씩, 3개 남음', isCorrect: false },
        { id: 'd', text: '3개씩, 11개 남음', isCorrect: false },
      ],
      explanation: '29 ÷ 6 = 4 ... 5. 6 × 4 = 24, 29 - 24 = 5. 한 사람에게 4개씩 주고 5개가 남습니다.',
      hints: [
        '6 × 4 = 24, 6 × 5 = 30. 어느 것이 29보다 작고 가장 가까운가요?',
        '29 - 24 = ?',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['나눗셈', '나머지', '서술형', '3학년'],
  },

  // ============================================================
  // 단원: 원 - SK01: 원의 중심, 반지름, 지름
  // ============================================================
  {
    id: 'G3_S2_SHAPE_02_SK01_Q01',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '원의 중심에서 원 위의 한 점까지의 거리를 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '지름', isCorrect: false },
        { id: 'b', text: '반지름', isCorrect: true },
        { id: 'c', text: '둘레', isCorrect: false },
        { id: 'd', text: '높이', isCorrect: false },
      ],
      explanation: '원의 중심에서 원 위의 한 점까지의 거리를 "반지름"이라고 합니다.',
      hints: [
        '"반"은 절반이라는 뜻이에요.',
        '지름의 절반이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['원', '반지름', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_02_SK01_Q02',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '원의 반지름이 5cm이면 지름은 몇 cm인가요?',
      correctAnswer: 10,
      explanation: '지름 = 반지름 × 2 = 5 × 2 = 10cm입니다.',
      hints: [
        '지름은 반지름의 2배예요.',
        '5 × 2 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['원', '지름', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_02_SK01_Q03',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '원의 지름이 16cm이면 반지름은 몇 cm인가요?',
      correctAnswer: 8,
      explanation: '반지름 = 지름 ÷ 2 = 16 ÷ 2 = 8cm입니다.',
      hints: [
        '반지름은 지름의 절반이에요.',
        '16 ÷ 2 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['원', '반지름', '3학년'],
  },

  // ============================================================
  // 단원: 분수 - SK01: 분수의 의미
  // ============================================================
  {
    id: 'G3_S2_NUM_03_SK01_Q01',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '피자 한 판을 4조각으로 똑같이 나누었습니다. 1조각은 전체의 얼마인가요?',
      options: [
        { id: 'a', text: '1/2', isCorrect: false },
        { id: 'b', text: '1/3', isCorrect: false },
        { id: 'c', text: '1/4', isCorrect: true },
        { id: 'd', text: '1/5', isCorrect: false },
      ],
      explanation: '전체를 4조각으로 나누었을 때 1조각은 1/4(4분의 1)입니다.',
      hints: [
        '전체를 몇 조각으로 나누었나요? 그 수가 분모가 돼요.',
        '4조각 중 1조각이므로 분자는 1, 분모는 4예요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '의미', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK01_Q02',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '색종이를 8등분 했습니다. 3조각에 색칠하면 전체의 얼마를 색칠한 것인가요?',
      options: [
        { id: 'a', text: '3/5', isCorrect: false },
        { id: 'b', text: '3/8', isCorrect: true },
        { id: 'c', text: '8/3', isCorrect: false },
        { id: 'd', text: '5/8', isCorrect: false },
      ],
      explanation: '전체 8조각 중 3조각을 색칠했으므로 3/8(8분의 3)입니다.',
      hints: [
        '분모는 전체 조각 수, 분자는 색칠한 조각 수예요.',
        '전체 8조각, 색칠 3조각 → ?/?',
      ],
      commonMistakes: [
        { answer: '8/3', misconception: '분자와 분모를 바꿔 적었습니다. 분모(아래)가 전체, 분자(위)가 부분이에요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '의미', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK01_Q03',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"2/5에서 분모는 5이고 분자는 2이다." 맞나요?',
      correctAnswer: true,
      explanation: '분수에서 아래 수가 분모, 위 수가 분자입니다. 2/5에서 분모는 5, 분자는 2가 맞습니다.',
      hints: [
        '분모는 아래에 있는 수예요.',
        '분자는 위에 있는 수예요.',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['분수', '용어', '3학년'],
  },

  // ============================================================
  // 단원: 분수 - SK02: 단위분수의 크기 비교
  // ============================================================
  {
    id: 'G3_S2_NUM_03_SK02_Q01',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '1/3과 1/5 중 더 큰 분수는?',
      options: [
        { id: 'a', text: '1/3', isCorrect: true },
        { id: 'b', text: '1/5', isCorrect: false },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '단위분수에서는 분모가 작을수록 큰 수입니다. 3등분한 것 중 1개가 5등분한 것 중 1개보다 크므로 1/3 > 1/5입니다.',
      hints: [
        '같은 피자를 3조각으로 나눈 것과 5조각으로 나눈 것, 어느 쪽 조각이 더 클까요?',
        '적게 나눌수록 한 조각이 더 커요.',
      ],
      commonMistakes: [
        { answer: '1/5', misconception: '분모가 큰 쪽이 더 크다고 생각했습니다. 단위분수에서는 분모가 작을수록 더 큰 수예요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '비교', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK02_Q02',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '2/7과 5/7 중 더 큰 분수는?',
      options: [
        { id: 'a', text: '2/7', isCorrect: false },
        { id: 'b', text: '5/7', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '분모가 같으면 분자가 큰 쪽이 더 큽니다. 5 > 2이므로 5/7 > 2/7입니다.',
      hints: [
        '분모가 같은 분수를 비교할 때는 분자를 비교해요.',
        '7조각 중 5조각이 2조각보다 더 많지요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '비교', '3학년'],
  },

  // ============================================================
  // 단원: 들이와 무게 - SK01: 들이 단위
  // ============================================================
  {
    id: 'G3_S2_SHAPE_04_SK01_Q01',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1L는 몇 mL인가요?',
      correctAnswer: 1000,
      explanation: '1L = 1000mL입니다.',
      hints: [
        'L는 mL보다 큰 단위예요.',
        '"밀리"는 1000분의 1이라는 뜻이에요.',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['들이', 'L', 'mL', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK01_Q02',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '2L 300mL는 몇 mL인가요?',
      options: [
        { id: 'a', text: '230mL', isCorrect: false },
        { id: 'b', text: '2030mL', isCorrect: false },
        { id: 'c', text: '2300mL', isCorrect: true },
        { id: 'd', text: '23000mL', isCorrect: false },
      ],
      explanation: '2L = 2000mL이므로 2L 300mL = 2000 + 300 = 2300mL입니다.',
      hints: [
        '1L = 1000mL예요.',
        '2L = 2000mL, 거기에 300mL를 더하면?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['들이', '단위 변환', '3학년'],
  },

  // ============================================================
  // 단원: 들이와 무게 - SK02: 무게 단위
  // ============================================================
  {
    id: 'G3_S2_SHAPE_04_SK02_Q01',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1kg은 몇 g인가요?',
      correctAnswer: 1000,
      explanation: '1kg = 1000g입니다.',
      hints: [
        '"킬로"는 1000배를 뜻해요.',
        'kg은 g보다 큰 단위예요.',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['무게', 'kg', 'g', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK02_Q02',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '3kg 500g은 몇 g인가요?',
      options: [
        { id: 'a', text: '350g', isCorrect: false },
        { id: 'b', text: '3050g', isCorrect: false },
        { id: 'c', text: '3500g', isCorrect: true },
        { id: 'd', text: '35000g', isCorrect: false },
      ],
      explanation: '3kg = 3000g이므로 3kg 500g = 3000 + 500 = 3500g입니다.',
      hints: [
        '1kg = 1000g이에요.',
        '3kg = 3000g, 거기에 500g을 더하면?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['무게', '단위 변환', '3학년'],
  },

  // ============================================================
  // 단원: 자료의 정리 (2학기) - SK01: 그림그래프 해석
  // ============================================================
  {
    id: 'G3_S2_DATA_05_SK01_Q01',
    skillId: 'G3_S2_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '그림그래프에서 ○ 하나가 5명을 나타냅니다. 축구를 좋아하는 학생이 ○○○이면 몇 명인가요?',
      options: [
        { id: 'a', text: '3명', isCorrect: false },
        { id: 'b', text: '10명', isCorrect: false },
        { id: 'c', text: '15명', isCorrect: true },
        { id: 'd', text: '20명', isCorrect: false },
      ],
      explanation: '○ 하나가 5명이고 ○가 3개이므로 5 × 3 = 15명입니다.',
      hints: [
        '○ 하나 = 5명이에요.',
        '5 × 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['그림그래프', '3학년'],
  },
  {
    id: 'G3_S2_DATA_05_SK01_Q02',
    skillId: 'G3_S2_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '그림그래프에서 ○ 하나가 10권을 나타냅니다. 동화책이 ○○○○○이면 몇 권인가요?',
      correctAnswer: 50,
      explanation: '○ 하나가 10권이고 ○가 5개이므로 10 × 5 = 50권입니다.',
      hints: [
        '○ 하나 = 10권이에요.',
        '10 × 5 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['그림그래프', '3학년'],
  },

  // ============================================================
  // 추가: 원 그리기
  // ============================================================
  {
    id: 'G3_S2_SHAPE_02_SK02_Q01',
    skillId: 'G3_S2_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '반지름이 3cm인 원을 컴퍼스로 그리려면, 컴퍼스를 몇 cm로 벌려야 하나요?',
      options: [
        { id: 'a', text: '1.5cm', isCorrect: false },
        { id: 'b', text: '3cm', isCorrect: true },
        { id: 'c', text: '6cm', isCorrect: false },
        { id: 'd', text: '9cm', isCorrect: false },
      ],
      explanation: '컴퍼스는 반지름만큼 벌려야 합니다. 반지름이 3cm이므로 3cm로 벌려요.',
      hints: [
        '컴퍼스의 벌린 길이는 반지름과 같아요.',
        '지름이 아니라 반지름이에요!',
      ],
      commonMistakes: [
        { answer: '6cm', misconception: '지름과 반지름을 혼동했습니다. 컴퍼스는 반지름만큼 벌려요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['원', '컴퍼스', '3학년'],
  },

  // ============================================================
  // 추가 문제: 세 자리 수의 덧셈 - SK01
  // ============================================================
  {
    id: 'G3_S1_NUM_01_SK01_Q04',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '200 + 300 = ?',
      options: [
        { id: 'a', text: '500', isCorrect: true },
        { id: 'b', text: '400', isCorrect: false },
        { id: 'c', text: '600', isCorrect: false },
        { id: 'd', text: '100', isCorrect: false },
      ],
      explanation: '200 + 300 = 500. 받아올림 없이 백의 자리끼리 더합니다.',
      hints: ['2+3=5이므로 500'],
      commonMistakes: [{ answer: '400', misconception: '계산 오류입니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['세 자리 덧셈', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK01_Q05',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"456 + 123 = 579이다." 맞나요?',
      correctAnswer: true,
      explanation: '6+3=9, 5+2=7, 4+1=5. 답: 579.',
      hints: ['일의 자리부터 더해보세요.'],
      commonMistakes: [{ answer: 'false', misconception: '계산을 잘못했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 자리 덧셈', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK01_Q06',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '678 + 456 = □',
      correctAnswer: '1134',
      explanation: '8+6=14(4쓰고 1올림), 7+5+1=13(3쓰고 1올림), 6+4+1=11. 답: 1134.',
      hints: ['받아올림에 주의하세요.', '일의 자리: 8+6=14'],
      commonMistakes: [{ answer: '1124', misconception: '십의 자리 받아올림을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['세 자리 덧셈', '3학년'],
  },

  // ============================================================
  // 추가 문제: 세 자리 수의 뺄셈 - SK02
  // ============================================================
  {
    id: 'G3_S1_NUM_01_SK02_Q04',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '500 - 200 = ?',
      options: [
        { id: 'a', text: '300', isCorrect: true },
        { id: 'b', text: '200', isCorrect: false },
        { id: 'c', text: '700', isCorrect: false },
        { id: 'd', text: '400', isCorrect: false },
      ],
      explanation: '500 - 200 = 300.',
      hints: ['5-2=3이므로 300'],
      commonMistakes: [{ answer: '700', misconception: '덧셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['세 자리 뺄셈', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_Q05',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"987 - 654 = 333이다." 맞나요?',
      correctAnswer: true,
      explanation: '7-4=3, 8-5=3, 9-6=3. 답: 333.',
      hints: ['각 자리별로 빼보세요.'],
      commonMistakes: [{ answer: 'false', misconception: '계산 오류입니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 자리 뺄셈', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_Q06',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '502 - 267 = □',
      correctAnswer: '235',
      explanation: '일의 자리: 2-7 불가→12-7=5(받아내림). 십의 자리: 9-6=3(받아내림 후). 백의 자리: 4-2=2. 답: 235.',
      hints: ['받아내림에 주의하세요.', '십의 자리가 0이므로 백의 자리에서도 빌려와야 해요.'],
      commonMistakes: [{ answer: '345', misconception: '받아내림을 잘못 적용했습니다.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['세 자리 뺄셈', '3학년'],
  },

  // ============================================================
  // 추가 문제: (두 자리 수) × (한 자리 수) - SK01
  // ============================================================
  {
    id: 'G3_S1_NUM_02_SK01_Q04',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '12 × 3 = ?',
      options: [
        { id: 'a', text: '36', isCorrect: true },
        { id: 'b', text: '15', isCorrect: false },
        { id: 'c', text: '33', isCorrect: false },
        { id: 'd', text: '39', isCorrect: false },
      ],
      explanation: '2×3=6, 10×3=30, 30+6=36.',
      hints: ['12를 10과 2로 나누어 각각 곱하세요.'],
      commonMistakes: [{ answer: '15', misconception: '12+3으로 덧셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK01_Q05',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"34 × 5 = 170이다." 맞나요?',
      correctAnswer: true,
      explanation: '4×5=20(0쓰고 2올림), 3×5=15, 15+2=17. 답: 170.',
      hints: ['4×5=20', '3×5+2=17, 17과 0을 합하면 170'],
      commonMistakes: [{ answer: 'false', misconception: '계산을 잘못했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK01_Q06',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '67 × 8 = □',
      correctAnswer: '536',
      explanation: '7×8=56(6쓰고 5올림), 6×8=48, 48+5=53. 답: 536.',
      hints: ['7×8=56', '6×8=48, 48+5=53'],
      commonMistakes: [{ answer: '486', misconception: '올림을 잘못 더했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['곱셈', '3학년'],
  },

  // ============================================================
  // 추가 문제: 곱셈 문장제 - SK02
  // ============================================================
  {
    id: 'G3_S1_NUM_02_SK02_Q03',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '공책 한 권에 45페이지가 있습니다. 3권이면 모두 몇 페이지인가요?',
      correctAnswer: 135,
      explanation: '45 × 3 = 135페이지.',
      hints: ['45 × 3을 계산하세요.', '40×3=120, 5×3=15, 합하면?'],
      commonMistakes: [{ answer: '48', misconception: '45+3으로 덧셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['곱셈', '문장제', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK02_Q04',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '과자가 한 봉지에 24개씩 들어 있습니다. 7봉지에는 몇 개가 있나요?',
      options: [
        { id: 'a', text: '148개', isCorrect: false },
        { id: 'b', text: '168개', isCorrect: true },
        { id: 'c', text: '158개', isCorrect: false },
        { id: 'd', text: '178개', isCorrect: false },
      ],
      explanation: '24 × 7 = 168개.',
      hints: ['24 × 7 = 20×7 + 4×7', '140 + 28 = ?'],
      commonMistakes: [{ answer: '148개', misconception: '올림을 잘못 적용했습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['곱셈', '문장제', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK02_Q05',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"한 줄에 10명씩 6줄이면 모두 60명이다." 맞나요?',
      correctAnswer: true,
      explanation: '10 × 6 = 60명.',
      hints: ['10 × 6 = ?'],
      commonMistakes: [{ answer: 'false', misconception: '계산 오류.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈', '문장제', '3학년'],
  },

  // ============================================================
  // 추가 문제: 선분, 반직선, 직선 - SK01
  // ============================================================
  {
    id: 'G3_S1_SHAPE_03_SK01_Q04',
    skillId: 'G3_S1_SHAPE_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '한 점에서 시작하여 한쪽으로 끝없이 뻗은 선을 □이라 한다.',
      correctAnswer: '반직선',
      explanation: '한 점에서 시작하여 한쪽으로 끝없이 뻗은 선을 반직선이라 합니다.',
      hints: ['"반"은 절반이라는 뜻', '직선의 절반 같은 것'],
      commonMistakes: [{ answer: '선분', misconception: '선분은 양쪽 끝이 있어요.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['평면도형', '선', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_03_SK01_Q05',
    skillId: 'G3_S1_SHAPE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '두 점 사이를 곧게 이은 선의 이름은? (세 글자)',
      correctAnswer: '선분',
      explanation: '두 점을 곧게 이은 선을 선분이라 합니다.',
      hints: ['시작점과 끝점이 있어요.'],
      commonMistakes: [{ answer: '직선', misconception: '직선은 양쪽으로 끝없이 뻗어요.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['평면도형', '선', '3학년'],
  },

  // ============================================================
  // 추가 문제: 각과 직각 - SK02
  // ============================================================
  {
    id: 'G3_S1_SHAPE_03_SK02_Q03',
    skillId: 'G3_S1_SHAPE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '시계에서 3시를 가리킬 때 시침과 분침이 이루는 각은?',
      options: [
        { id: 'a', text: '직각', isCorrect: true },
        { id: 'b', text: '예각', isCorrect: false },
        { id: 'c', text: '둔각', isCorrect: false },
        { id: 'd', text: '평각', isCorrect: false },
      ],
      explanation: '3시에 시침은 3, 분침은 12를 가리키므로 90°(직각)입니다.',
      hints: ['시계에서 12와 3 사이의 각도를 생각해보세요.', '한 바퀴=360°, 1/4 바퀴=?'],
      commonMistakes: [{ answer: '예각', misconception: '직각과 예각을 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['각', '직각', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_03_SK02_Q04',
    skillId: 'G3_S1_SHAPE_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '한 점에서 두 반직선이 만나면 □이 생긴다.',
      correctAnswer: '각',
      explanation: '한 점에서 두 반직선이 만나면 각이 생깁니다.',
      hints: ['두 선이 만나는 부분의 벌어진 정도를 무엇이라 하나요?'],
      commonMistakes: [{ answer: '직각', misconception: '모든 각이 직각은 아니에요.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['각', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_03_SK02_Q05',
    skillId: 'G3_S1_SHAPE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '정사각형에는 직각이 몇 개 있나요?',
      correctAnswer: 4,
      explanation: '정사각형의 네 각은 모두 직각이므로 4개.',
      hints: ['정사각형의 각은 모두 같은 각이에요.'],
      commonMistakes: [{ answer: '2', misconception: '2개만 직각이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['직각', '정사각형', '3학년'],
  },

  // ============================================================
  // 추가 문제: mm와 km 이해 - SK01
  // ============================================================
  {
    id: 'G3_S1_SHAPE_04_SK01_Q04',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"1km = 100m이다." 맞나요?',
      correctAnswer: false,
      explanation: '1km = 1000m입니다. 100m가 아닙니다.',
      hints: ['"킬로"는 1000배예요.'],
      commonMistakes: [{ answer: 'true', misconception: 'cm와 m의 관계(1m=100cm)와 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'km', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK01_Q05',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '50mm = □cm',
      correctAnswer: '5',
      explanation: '1cm = 10mm이므로 50mm = 50÷10 = 5cm.',
      hints: ['10mm = 1cm', '50 ÷ 10 = ?'],
      commonMistakes: [{ answer: '500', misconception: '곱셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', 'mm', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK01_Q06',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '2km 500m는 몇 m인가요?',
      correctAnswer: 2500,
      explanation: '2km = 2000m, 2000+500 = 2500m.',
      hints: ['1km=1000m', '2km=2000m, 2000+500=?'],
      commonMistakes: [{ answer: '250', misconception: '0을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['길이', '단위 변환', '3학년'],
  },

  // ============================================================
  // 추가 문제: 시간 계산 - SK02
  // ============================================================
  {
    id: 'G3_S1_SHAPE_04_SK02_Q03',
    skillId: 'G3_S1_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1시간 30분 + 2시간 20분 = ? (시간 분으로 답하세요. 시간만 답.)',
      correctAnswer: 3,
      explanation: '시간끼리: 1+2=3시간. 분끼리: 30+20=50분. 답: 3시간 50분.',
      hints: ['시간끼리 따로, 분끼리 따로 더하세요.'],
      commonMistakes: [{ answer: '4', misconception: '분의 합이 60 이상이 아닌데도 올렸습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['시간', '덧셈', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK02_Q04',
    skillId: 'G3_S1_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"1시간 = 60분이다." 맞나요?',
      correctAnswer: true,
      explanation: '1시간 = 60분입니다.',
      hints: ['시계에서 분침이 한 바퀴 돌면 1시간이에요.'],
      commonMistakes: [{ answer: 'false', misconception: '100분이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['시간', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK02_Q05',
    skillId: 'G3_S1_SHAPE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '5시간 10분 - 2시간 40분 = □시간 □분. 시간만 답하세요.',
      correctAnswer: '2',
      explanation: '10분에서 40분 빼기 불가 → 4시간 70분에서 2시간 40분 빼기 = 2시간 30분.',
      hints: ['분이 부족하면 시간에서 빌려와요.', '5시간10분 = 4시간70분'],
      commonMistakes: [{ answer: '3', misconception: '받아내림을 하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['시간', '뺄셈', '3학년'],
  },

  // ============================================================
  // 추가 문제: 정리하여 표 만들기 - SK01
  // ============================================================
  {
    id: 'G3_S1_DATA_05_SK01_Q02',
    skillId: 'G3_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '正 한 글자는 몇을 나타내나요?',
      correctAnswer: 5,
      explanation: '正 한 글자는 5를 나타냅니다.',
      hints: ['正 자의 획수를 세어보세요.'],
      commonMistakes: [{ answer: '4', misconception: '4획이라고 잘못 세었습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['자료 정리', '3학년'],
  },
  {
    id: 'G3_S1_DATA_05_SK01_Q03',
    skillId: 'G3_S1_DATA_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '正正正正이면 □명이다.',
      correctAnswer: '20',
      explanation: '正 하나가 5를 나타내므로 正이 4개이면 5×4=20.',
      hints: ['正 하나 = 5', '5 × 4 = ?'],
      commonMistakes: [{ answer: '4', misconception: '正의 개수만 세었습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['자료 정리', '3학년'],
  },

  // ============================================================
  // 추가 문제: 나눗셈의 의미 - SK01
  // ============================================================
  {
    id: 'G3_S2_NUM_01_SK01_Q04',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"15 ÷ 3 = 5이다." 맞나요?',
      correctAnswer: true,
      explanation: '15 ÷ 3 = 5. 3 × 5 = 15이기 때문입니다.',
      hints: ['3 × ? = 15'],
      commonMistakes: [{ answer: 'false', misconception: '계산 오류.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['나눗셈', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK01_Q05',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '쿠키 18개를 6명에게 똑같이 나누면 한 사람에게 □개씩이다.',
      correctAnswer: '3',
      explanation: '18 ÷ 6 = 3.',
      hints: ['18 ÷ 6 = ?', '6 × ? = 18'],
      commonMistakes: [{ answer: '12', misconception: '18-6을 계산했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK01_Q06',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '36 ÷ 9 = ?',
      correctAnswer: 4,
      explanation: '9 × 4 = 36이므로 36 ÷ 9 = 4.',
      hints: ['9의 단 곱셈구구를 떠올려보세요.', '9 × ? = 36'],
      commonMistakes: [{ answer: '3', misconception: '9×3=27로 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '3학년'],
  },

  // ============================================================
  // 추가 문제: 곱셈과 나눗셈의 관계 - SK02
  // ============================================================
  {
    id: 'G3_S2_NUM_01_SK02_Q03',
    skillId: 'G3_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '6 × 5 = 30일 때, 30 ÷ 5 = ?',
      options: [
        { id: 'a', text: '5', isCorrect: false },
        { id: 'b', text: '6', isCorrect: true },
        { id: 'c', text: '25', isCorrect: false },
        { id: 'd', text: '35', isCorrect: false },
      ],
      explanation: '6 × 5 = 30이므로 30 ÷ 5 = 6.',
      hints: ['곱셈에서 한 수를 나누면 다른 수가 나와요.'],
      commonMistakes: [{ answer: '5', misconception: '나누는 수를 답으로 적었습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '곱셈 관계', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK02_Q04',
    skillId: 'G3_S2_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"4 × 9 = 36이면 36 ÷ 4 = 9이다." 맞나요?',
      correctAnswer: true,
      explanation: '곱셈과 나눗셈은 역연산 관계입니다.',
      hints: ['곱셈의 반대가 나눗셈이에요.'],
      commonMistakes: [{ answer: 'false', misconception: '관계를 이해하지 못했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['나눗셈', '곱셈 관계', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK02_Q05',
    skillId: 'G3_S2_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '□ × 8 = 72에서 □는?',
      correctAnswer: '9',
      explanation: '72 ÷ 8 = 9.',
      hints: ['72 ÷ 8을 계산하세요.', '8의 단에서 찾아보세요.'],
      commonMistakes: [{ answer: '8', misconception: '나누는 수를 답했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '곱셈 관계', '3학년'],
  },

  // ============================================================
  // 추가 문제: 나머지가 있는 나눗셈 - SK03
  // ============================================================
  {
    id: 'G3_S2_NUM_01_SK03_Q04',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '17 ÷ 3의 몫은?',
      correctAnswer: 5,
      explanation: '3 × 5 = 15, 17-15=2. 몫: 5, 나머지: 2.',
      hints: ['3의 단에서 17에 가장 가까운 수는?', '3×5=15'],
      commonMistakes: [{ answer: '6', misconception: '3×6=18 > 17이므로 몫은 5예요.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['나눗셈', '나머지', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK03_Q05',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"나머지는 항상 나누는 수보다 작아야 한다." 맞나요?',
      correctAnswer: true,
      explanation: '나머지가 나누는 수보다 크거나 같으면 몫을 더 올릴 수 있으므로, 나머지는 항상 나누는 수보다 작습니다.',
      hints: ['나머지 ≥ 나누는 수이면 한 번 더 나눌 수 있어요.'],
      commonMistakes: [{ answer: 'false', misconception: '나머지 조건을 모릅니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['나눗셈', '나머지', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK03_Q06',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.7,
    difficultyLabel: '어려움',
    content: {
      questionText: '50 ÷ 7의 나머지는 □이다.',
      correctAnswer: '1',
      explanation: '7 × 7 = 49. 50-49=1. 나머지: 1.',
      hints: ['7의 단에서 50에 가장 가까운 수는?', '7×7=49'],
      commonMistakes: [{ answer: '8', misconception: '몫을 답했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['나눗셈', '나머지', '3학년'],
  },

  // ============================================================
  // 추가 문제: 원의 중심, 반지름, 지름 - SK01
  // ============================================================
  {
    id: 'G3_S2_SHAPE_02_SK01_Q04',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"지름은 반지름의 2배이다." 맞나요?',
      correctAnswer: true,
      explanation: '지름 = 반지름 × 2.',
      hints: ['반지름이 5cm이면 지름은?'],
      commonMistakes: [{ answer: 'false', misconception: '반대로 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['원', '지름', '반지름', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_02_SK01_Q05',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '원의 지름이 20cm이면 반지름은 □cm이다.',
      correctAnswer: '10',
      explanation: '반지름 = 지름 ÷ 2 = 20 ÷ 2 = 10cm.',
      hints: ['반지름 = 지름 ÷ 2'],
      commonMistakes: [{ answer: '40', misconception: '2를 곱했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['원', '반지름', '3학년'],
  },

  // ============================================================
  // 추가 문제: 컴퍼스로 원 그리기 - SK02
  // ============================================================
  {
    id: 'G3_S2_SHAPE_02_SK02_Q02',
    skillId: 'G3_S2_SHAPE_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"지름이 10cm인 원을 그리려면 컴퍼스를 10cm로 벌려야 한다." 맞나요?',
      correctAnswer: false,
      explanation: '컴퍼스는 반지름만큼 벌려야 합니다. 지름 10cm → 반지름 5cm → 5cm로 벌리세요.',
      hints: ['컴퍼스는 반지름만큼 벌려요.', '지름의 절반 = 반지름'],
      commonMistakes: [{ answer: 'true', misconception: '지름과 반지름을 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['원', '컴퍼스', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_02_SK02_Q03',
    skillId: 'G3_S2_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '지름이 12cm인 원을 컴퍼스로 그리려면 컴퍼스를 몇 cm로 벌려야 하나요?',
      correctAnswer: 6,
      explanation: '반지름 = 12 ÷ 2 = 6cm. 컴퍼스를 6cm로 벌립니다.',
      hints: ['반지름 = 지름 ÷ 2', '12 ÷ 2 = ?'],
      commonMistakes: [{ answer: '12', misconception: '지름을 그대로 사용했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['원', '컴퍼스', '3학년'],
  },

  // ============================================================
  // 추가 문제: 분수의 의미 - SK01
  // ============================================================
  {
    id: 'G3_S2_NUM_03_SK01_Q04',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '전체를 6등분한 것 중 2조각은 □이다. (분수로)',
      correctAnswer: '2/6',
      explanation: '6등분 중 2조각 = 2/6.',
      hints: ['분모 = 전체 등분 수, 분자 = 선택한 수'],
      commonMistakes: [{ answer: '6/2', misconception: '분자와 분모를 바꿨습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '의미', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK01_Q05',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '케이크를 5조각으로 나누어 3조각을 먹었습니다. 먹은 양을 분수로 나타내면?',
      options: [
        { id: 'a', text: '3/5', isCorrect: true },
        { id: 'b', text: '5/3', isCorrect: false },
        { id: 'c', text: '2/5', isCorrect: false },
        { id: 'd', text: '3/8', isCorrect: false },
      ],
      explanation: '전체 5조각 중 3조각 = 3/5.',
      hints: ['분모 = 전체, 분자 = 먹은 양'],
      commonMistakes: [{ answer: '2/5', misconception: '남은 양을 구했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '의미', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK01_Q06',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '분수 7/10에서 분모는 얼마인가요?',
      correctAnswer: 10,
      explanation: '분수에서 아래 수가 분모입니다. 7/10의 분모는 10.',
      hints: ['아래에 있는 수가 분모예요.'],
      commonMistakes: [{ answer: '7', misconception: '분자와 분모를 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['분수', '용어', '3학년'],
  },

  // ============================================================
  // 추가 문제: 단위분수의 크기 비교 - SK02
  // ============================================================
  {
    id: 'G3_S2_NUM_03_SK02_Q03',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"1/2 > 1/4이다." 맞나요?',
      correctAnswer: true,
      explanation: '단위분수에서 분모가 작을수록 큰 수. 2 < 4이므로 1/2 > 1/4.',
      hints: ['피자를 2조각으로 나눈 것과 4조각으로 나눈 것, 어느 쪽이 더 큰가요?'],
      commonMistakes: [{ answer: 'false', misconception: '분모가 클수록 크다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '비교', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK02_Q04',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '4/9와 6/9 중 더 큰 분수는?',
      options: [
        { id: 'a', text: '4/9', isCorrect: false },
        { id: 'b', text: '6/9', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '분모가 같으면 분자가 큰 쪽이 더 큽니다. 6 > 4이므로 6/9 > 4/9.',
      hints: ['분모가 같으면 분자를 비교하세요.'],
      commonMistakes: [{ answer: '같다', misconception: '분모가 같으면 같다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['분수', '비교', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK02_Q05',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '1/2, 1/5, 1/10 중 가장 큰 분수는 □이다.',
      correctAnswer: '1/2',
      explanation: '단위분수에서 분모가 가장 작은 1/2이 가장 큽니다.',
      hints: ['분모가 작을수록 단위분수가 커요.', '2 < 5 < 10'],
      commonMistakes: [{ answer: '1/10', misconception: '분모가 클수록 크다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['분수', '비교', '3학년'],
  },

  // ============================================================
  // 추가 문제: 들이 단위 - SK01
  // ============================================================
  {
    id: 'G3_S2_SHAPE_04_SK01_Q03',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"1L = 100mL이다." 맞나요?',
      correctAnswer: false,
      explanation: '1L = 1000mL입니다. 100mL가 아닙니다.',
      hints: ['"밀리"는 1000분의 1이에요.'],
      commonMistakes: [{ answer: 'true', misconception: '100과 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['들이', 'L', 'mL', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK01_Q04',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '3000mL는 몇 L인가요?',
      correctAnswer: 3,
      explanation: '3000 ÷ 1000 = 3L.',
      hints: ['1000mL = 1L', '3000 ÷ 1000 = ?'],
      commonMistakes: [{ answer: '30', misconception: '100으로 나누었습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['들이', '단위 변환', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK01_Q05',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '4L 200mL = □mL',
      correctAnswer: '4200',
      explanation: '4L = 4000mL, 4000+200 = 4200mL.',
      hints: ['4L를 mL로 바꾸면 4000mL', '4000+200=?'],
      commonMistakes: [{ answer: '420', misconception: '0을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['들이', '단위 변환', '3학년'],
  },

  // ============================================================
  // 추가 문제: 무게 단위 - SK02
  // ============================================================
  {
    id: 'G3_S2_SHAPE_04_SK02_Q03',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"1kg = 100g이다." 맞나요?',
      correctAnswer: false,
      explanation: '1kg = 1000g입니다.',
      hints: ['"킬로"는 1000배예요.'],
      commonMistakes: [{ answer: 'true', misconception: '100과 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['무게', 'kg', 'g', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK02_Q04',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '5000g은 몇 kg인가요?',
      correctAnswer: 5,
      explanation: '5000 ÷ 1000 = 5kg.',
      hints: ['1000g = 1kg', '5000 ÷ 1000 = ?'],
      commonMistakes: [{ answer: '50', misconception: '100으로 나누었습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['무게', '단위 변환', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK02_Q05',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '2kg 700g = □g',
      correctAnswer: '2700',
      explanation: '2kg = 2000g, 2000+700 = 2700g.',
      hints: ['2kg를 g으로 바꾸면 2000g', '2000+700=?'],
      commonMistakes: [{ answer: '270', misconception: '0을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['무게', '단위 변환', '3학년'],
  },

  // ============================================================
  // 추가 문제: 그림그래프 해석 - SK01
  // ============================================================
  {
    id: 'G3_S2_DATA_05_SK01_Q03',
    skillId: 'G3_S2_DATA_05_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"그림그래프에서 그림이 많을수록 수가 크다." 맞나요?',
      correctAnswer: true,
      explanation: '그림그래프에서 그림의 수가 많을수록 나타내는 값이 큽니다.',
      hints: ['그림 하나가 일정한 수를 나타내요.'],
      commonMistakes: [{ answer: 'false', misconception: '반대로 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['그림그래프', '3학년'],
  },
  {
    id: 'G3_S2_DATA_05_SK01_Q04',
    skillId: 'G3_S2_DATA_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '그림그래프에서 ★ 하나가 3명을 나타냅니다. ★★★★이면 □명이다.',
      correctAnswer: '12',
      explanation: '3 × 4 = 12명.',
      hints: ['★ 하나 = 3명', '3 × 4 = ?'],
      commonMistakes: [{ answer: '4', misconception: '그림 수만 세었습니다.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['그림그래프', '3학년'],
  },
  {
    id: 'G3_S2_DATA_05_SK01_Q05',
    skillId: 'G3_S2_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '그림그래프에서 ◎ 하나가 2권을 나타냅니다. 만화책이 14권이면 ◎는 몇 개 필요한가요?',
      correctAnswer: 7,
      explanation: '14 ÷ 2 = 7개.',
      hints: ['14권을 2권씩 묶으면?', '14 ÷ 2 = ?'],
      commonMistakes: [{ answer: '12', misconception: '14-2로 빼기를 했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['그림그래프', '3학년'],
  },

  // ============================================================
  // 스킬별 추가 보충 2차
  // ============================================================
  {
    id: 'G3_S1_NUM_01_SK01_Q07',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '수학 시험에서 민수는 276점, 영희는 389점을 받았습니다. 두 사람의 점수 합은?',
      correctAnswer: 665,
      explanation: '276 + 389 = 665.',
      hints: ['6+9=15, 7+8+1=16, 2+3+1=6'],
      commonMistakes: [{ answer: '655', misconception: '받아올림을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['세 자리 덧셈', '문장제', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_Q07',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '도서관에 책이 750권 있었는데 289권을 빌려갔습니다. 남은 책은?',
      correctAnswer: 461,
      explanation: '750 - 289 = 461.',
      hints: ['받아내림에 주의하세요.', '0-9 불가 → 10-9=1, 4-8 불가 → 14-8=6, 6-2=4'],
      commonMistakes: [{ answer: '471', misconception: '받아내림 오류.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['세 자리 뺄셈', '문장제', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK01_Q07',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '20 × 5 = □',
      correctAnswer: '100',
      explanation: '20 × 5 = 100.',
      hints: ['2 × 5 = 10에 0을 하나 붙이면?'],
      commonMistakes: [{ answer: '25', misconception: '덧셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK02_Q06',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '연필 한 다스는 12자루입니다. 4다스면 □자루이다.',
      correctAnswer: '48',
      explanation: '12 × 4 = 48자루.',
      hints: ['1다스 = 12자루', '12 × 4 = ?'],
      commonMistakes: [{ answer: '16', misconception: '12+4로 덧셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈', '문장제', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK01_Q07',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '8 ÷ 2 = ?',
      options: [
        { id: 'a', text: '4', isCorrect: true },
        { id: 'b', text: '6', isCorrect: false },
        { id: 'c', text: '16', isCorrect: false },
        { id: 'd', text: '10', isCorrect: false },
      ],
      explanation: '8 ÷ 2 = 4.',
      hints: ['2 × ? = 8'],
      commonMistakes: [{ answer: '16', misconception: '8 × 2를 계산했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['나눗셈', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK03_Q07',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '22 ÷ 5의 몫과 나머지는?',
      options: [
        { id: 'a', text: '몫 4, 나머지 2', isCorrect: true },
        { id: 'b', text: '몫 5, 나머지 2', isCorrect: false },
        { id: 'c', text: '몫 3, 나머지 7', isCorrect: false },
        { id: 'd', text: '몫 4, 나머지 3', isCorrect: false },
      ],
      explanation: '5 × 4 = 20, 22-20=2. 몫: 4, 나머지: 2.',
      hints: ['5의 단에서 22에 가장 가까운 수는?', '5×4=20'],
      commonMistakes: [{ answer: '몫 3, 나머지 7', misconception: '나머지가 나누는 수보다 크면 안 돼요.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['나눗셈', '나머지', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_02_SK01_Q06',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '원에서 가장 긴 선분은?',
      options: [
        { id: 'a', text: '반지름', isCorrect: false },
        { id: 'b', text: '지름', isCorrect: true },
        { id: 'c', text: '둘레', isCorrect: false },
        { id: 'd', text: '높이', isCorrect: false },
      ],
      explanation: '원에서 가장 긴 선분은 지름입니다.',
      hints: ['원을 가로지르는 가장 긴 선분'],
      commonMistakes: [{ answer: '반지름', misconception: '반지름은 지름의 절반이에요.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['원', '지름', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK01_Q07',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '분수 3/4에서 분자는?',
      correctAnswer: 3,
      explanation: '분수에서 위 수가 분자입니다. 3/4의 분자는 3.',
      hints: ['위에 있는 수가 분자예요.'],
      commonMistakes: [{ answer: '4', misconception: '분모와 분자를 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['분수', '용어', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK02_Q06',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '3/8과 7/8 중 더 큰 분수는? (분수로 답하세요)',
      correctAnswer: '7/8',
      explanation: '분모가 같으면 분자가 큰 쪽이 더 큽니다. 7 > 3이므로 7/8.',
      hints: ['분모가 같으면 분자를 비교'],
      commonMistakes: [{ answer: '3/8', misconception: '작은 수를 골랐습니다.' }],
    },
    estimatedTimeSeconds: 10,
    tags: ['분수', '비교', '3학년'],
  },

  // ============================================================
  // 추가 문제: 문장형(서술형) 문제 — Word Problems
  // ============================================================

  // --- 세 자리 수 덧셈/뺄셈 문장형 ---
  {
    id: 'G3_S1_NUM_01_SK01_WP01',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '서점에 동화책이 245권, 만화책이 378권 있습니다. 책은 모두 몇 권일까요?',
      correctAnswer: 623,
      explanation: '245 + 378 = 623권입니다. 일의 자리: 5 + 8 = 13, 십의 자리: 4 + 7 + 1 = 12, 백의 자리: 2 + 3 + 1 = 6.',
      hints: ['두 수를 더하세요.', '일의 자리부터 차례대로 더해 보세요.'],
      commonMistakes: [{ answer: '513', misconception: '십의 자리에서 올림을 잊었어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'addition', 'real_life', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_WP01',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '학교에 학생이 832명 있었는데, 졸업생 156명이 떠났습니다. 남은 학생은 몇 명일까요?',
      correctAnswer: 676,
      explanation: '832 - 156 = 676명입니다.',
      hints: ['떠났으니 빼기를 하세요.', '일의 자리부터 빼 보세요. 2 - 6은 안 되니 빌려와야 해요.'],
      commonMistakes: [{ answer: '686', misconception: '십의 자리에서 받아내림을 잘못 했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'subtraction', 'real_life', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK01_WP02',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '과일 가게에서 사과 167개와 귤 245개를 팔았습니다. 팔린 과일은 모두 몇 개일까요?',
      correctAnswer: 412,
      explanation: '167 + 245 = 412개입니다.',
      hints: ['두 수를 더하세요.', '167 + 245를 일의 자리부터 계산해 보세요.'],
      commonMistakes: [{ answer: '402', misconception: '일의 자리에서 올림을 빠뜨렸어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'addition', 'real_life', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_WP02',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '마트에서 오전에 음료수 503병을 팔았고, 오후에는 오전보다 128병 적게 팔았습니다. 오후에 팔린 음료수는 몇 병일까요?',
      correctAnswer: 375,
      explanation: '503 - 128 = 375병입니다.',
      hints: ['"적게"이니 빼기를 해야 해요.', '503 - 128을 계산해 보세요.'],
      commonMistakes: [{ answer: '631', misconception: '더하기를 했어요. "적게"이니 빼야 합니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'subtraction', 'real_life', '3학년'],
  },

  // --- 곱셈 문장형 ---
  {
    id: 'G3_S1_NUM_02_SK01_WP01',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '한 상자에 과자가 24개씩 들어 있습니다. 3상자를 사면 과자는 모두 몇 개일까요?',
      correctAnswer: 72,
      explanation: '24 × 3 = 72개입니다. 4 × 3 = 12, 20 × 3 = 60, 12 + 60 = 72.',
      hints: ['24를 3번 더하면 얼마인지 생각해 보세요.', '24 × 3을 일의 자리부터 계산해 보세요.'],
      commonMistakes: [{ answer: '27', misconception: '2 + 4 + 3처럼 더하기를 했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'multiplication', 'real_life', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK02_WP01',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '축구 동아리에 18명이 있고, 각자 축구공을 4개씩 가지고 왔습니다. 축구공은 모두 몇 개일까요?',
      correctAnswer: 72,
      explanation: '18 × 4 = 72개입니다.',
      hints: ['18명이 각자 4개씩이니 18 × 4를 구하세요.', '8 × 4 = 32, 10 × 4 = 40, 32 + 40 = ?'],
      commonMistakes: [{ answer: '22', misconception: '18 + 4를 했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['word_problem', 'multiplication', 'real_life', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK01_WP02',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '학교에서 운동회를 합니다. 한 줄에 35명씩 5줄로 서 있습니다. 학생은 모두 몇 명일까요?',
      correctAnswer: 175,
      explanation: '35 × 5 = 175명입니다. 5 × 5 = 25, 30 × 5 = 150, 25 + 150 = 175.',
      hints: ['35명씩 5줄이니 35 × 5를 구하세요.', '일의 자리: 5 × 5 = 25, 2 올림'],
      commonMistakes: [{ answer: '40', misconception: '35 + 5를 했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['word_problem', 'multiplication', 'real_life', '3학년'],
  },

  // --- 나눗셈 문장형 ---
  {
    id: 'G3_S2_NUM_01_SK01_WP01',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '사탕 24개를 4명에게 똑같이 나누어 주려고 합니다. 한 사람에게 몇 개씩 줄 수 있을까요?',
      correctAnswer: 6,
      explanation: '24 ÷ 4 = 6개입니다.',
      hints: ['24개를 4명에게 똑같이 나누세요.', '4 × ? = 24를 생각해 보세요.'],
      commonMistakes: [{ answer: '20', misconception: '24 - 4를 했어요. 똑같이 나누는 것은 나눗셈이에요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'division', 'real_life', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK02_WP01',
    skillId: 'G3_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '엄마가 귤 36개를 9개씩 봉지에 담으려 합니다. 봉지는 몇 개가 필요할까요?',
      correctAnswer: 4,
      explanation: '36 ÷ 9 = 4개입니다. 9 × 4 = 36이므로 봉지 4개가 필요합니다.',
      hints: ['36 안에 9가 몇 번 들어가나요?', '9 × ? = 36'],
      commonMistakes: [{ answer: '27', misconception: '36 - 9를 했어요. 몇 묶음인지는 나눗셈으로 구해요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'division', 'real_life', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK03_WP01',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '색종이 23장을 5명에게 똑같이 나누어 주면, 한 사람에게 몇 장씩 주고 몇 장이 남을까요? 남는 장수를 쓰세요.',
      correctAnswer: 3,
      explanation: '23 ÷ 5 = 4 ... 3. 한 사람에게 4장씩 주고 3장이 남습니다.',
      hints: ['5 × 4 = 20, 23 - 20 = ?', '나머지를 구하세요.'],
      commonMistakes: [{ answer: '4', misconception: '몫을 답했어요. 남는 장수(나머지)를 써야 해요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'division', 'remainder', 'real_life', '3학년'],
  },

  // --- 분수 문장형 ---
  {
    id: 'G3_S2_NUM_03_SK01_WP01',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '피자 한 판을 8조각으로 똑같이 나누었습니다. 지우가 3조각을 먹었다면, 지우가 먹은 양은 전체의 얼마인가요?',
      options: [
        { id: 'a', text: '3/8', isCorrect: true },
        { id: 'b', text: '8/3', isCorrect: false },
        { id: 'c', text: '3/5', isCorrect: false },
        { id: 'd', text: '5/8', isCorrect: false },
      ],
      explanation: '전체 8조각 중 3조각을 먹었으므로 3/8입니다.',
      hints: ['전체 조각 수가 분모, 먹은 조각 수가 분자예요.', '분모는 8, 분자는 3이에요.'],
      commonMistakes: [{ answer: '8/3', misconception: '분모와 분자를 바꿨어요. 전체가 분모, 부분이 분자예요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'fraction', 'real_life', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK02_WP01',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '케이크를 똑같이 나누었습니다. 민수는 케이크의 2/6을, 수아는 4/6을 먹었습니다. 누가 더 많이 먹었을까요?',
      options: [
        { id: 'a', text: '민수', isCorrect: false },
        { id: 'b', text: '수아', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
        { id: 'd', text: '알 수 없다', isCorrect: false },
      ],
      explanation: '분모가 같으면 분자가 큰 쪽이 더 큽니다. 4/6 > 2/6이므로 수아가 더 많이 먹었습니다.',
      hints: ['분모가 같으니 분자를 비교하세요.', '4 > 2이므로 4/6이 더 커요.'],
      commonMistakes: [{ answer: '민수', misconception: '분자가 작은 쪽을 골랐어요. 분모가 같으면 분자가 큰 쪽이 더 커요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'fraction', 'comparison', 'real_life', '3학년'],
  },

  // --- 길이와 시간 문장형 ---
  {
    id: 'G3_S1_SHAPE_04_SK01_WP01',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '학교에서 도서관까지 거리가 2km 300m입니다. 이것은 몇 m일까요?',
      correctAnswer: 2300,
      explanation: '2km = 2000m이므로 2000 + 300 = 2300m입니다.',
      hints: ['1km = 1000m예요.', '2km를 m로 바꾸면 2000m이에요.'],
      commonMistakes: [{ answer: '230', misconception: '2와 300을 합쳤어요. 1km = 1000m를 기억하세요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'length', 'unit_conversion', 'real_life', '3학년'],
  },
  {
    id: 'G3_S1_SHAPE_04_SK02_WP01',
    skillId: 'G3_S1_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '영화가 오후 2시 30분에 시작해서 오후 4시 10분에 끝났습니다. 영화 상영 시간은 몇 분일까요?',
      correctAnswer: 100,
      explanation: '2시 30분 → 4시 10분: 1시간 40분 = 100분입니다.',
      hints: ['먼저 시간 차이를 구하세요.', '2시 30분에서 4시 10분까지는 1시간 40분이에요. 1시간 = 60분.'],
      commonMistakes: [{ answer: '140', misconception: '1시간 40분을 140분으로 잘못 계산했어요. 1시간 = 60분이에요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['word_problem', 'time', 'real_life', '3학년'],
  },

  // --- 들이와 무게 문장형 ---
  {
    id: 'G3_S2_SHAPE_04_SK01_WP01',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '냉장고에 우유가 2L 500mL 있었습니다. 가족이 800mL를 마셨습니다. 남은 우유는 몇 mL일까요?',
      correctAnswer: 1700,
      explanation: '2L 500mL = 2500mL. 2500 - 800 = 1700mL입니다.',
      hints: ['먼저 2L 500mL를 mL로 바꾸세요.', '2L = 2000mL이니 2000 + 500 = 2500mL.'],
      commonMistakes: [{ answer: '1500', misconception: '2L에서만 800을 뺐어요. 2L 500mL = 2500mL입니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'volume', 'real_life', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK02_WP01',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '수박의 무게가 3kg 200g이고, 참외의 무게가 1kg 500g입니다. 수박이 참외보다 몇 g 더 무거울까요?',
      correctAnswer: 1700,
      explanation: '3kg 200g = 3200g, 1kg 500g = 1500g. 3200 - 1500 = 1700g입니다.',
      hints: ['먼저 kg을 g으로 바꾸세요.', '3kg = 3000g, 1kg = 1000g'],
      commonMistakes: [{ answer: '2700', misconception: '3200 - 500만 했어요. 1kg 500g = 1500g입니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'weight', 'real_life', '3학년'],
  },

  // --- 원 문장형 ---
  {
    id: 'G3_S2_SHAPE_02_SK01_WP01',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '원의 반지름이 5cm입니다. 이 원의 지름은 몇 cm일까요?',
      correctAnswer: 10,
      explanation: '지름 = 반지름 × 2 = 5 × 2 = 10cm입니다.',
      hints: ['지름은 반지름의 2배예요.', '5 × 2 = ?'],
      commonMistakes: [{ answer: '5', misconception: '반지름을 그대로 썼어요. 지름 = 반지름 × 2예요.' }],
    },
    estimatedTimeSeconds: 15,
    tags: ['word_problem', 'circle', 'real_life', '3학년'],
  },

  // ============================================================
  // 추가 문제: ORDERING (순서 정하기)
  // ============================================================

  // --- 세 자리 수 순서 ---
  {
    id: 'G3_S1_NUM_01_SK01_ORD01',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'ORDERING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 덧셈의 결과를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['120+130', '250+180', '310+290', '450+350'],
      explanation: '120+130=250, 250+180=430, 310+290=600, 450+350=800. 작은 순: 250, 430, 600, 800.',
      hints: ['각각의 덧셈을 먼저 계산하세요.', '계산 결과를 비교해 보세요.'],
      commonMistakes: [{ answer: '450+350,310+290,250+180,120+130', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 40,
    tags: ['ordering', 'addition', '3학년'],
  },
  {
    id: 'G3_S1_NUM_01_SK02_ORD01',
    skillId: 'G3_S1_NUM_01_SK02',
    questionType: 'ORDERING',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['198', '305', '472', '864'],
      explanation: '작은 수부터 나열하면 198, 305, 472, 864입니다.',
      hints: ['백의 자리를 먼저 비교하세요.', '1 < 3 < 4 < 8'],
      commonMistakes: [{ answer: '864,472,305,198', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['ordering', 'number_sense', '3학년'],
  },

  // --- 곱셈 결과 순서 ---
  {
    id: 'G3_S1_NUM_02_SK01_ORD01',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'ORDERING',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 곱셈의 결과를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['12 × 3', '15 × 4', '23 × 5', '31 × 6'],
      explanation: '12×3=36, 15×4=60, 23×5=115, 31×6=186. 작은 순: 36, 60, 115, 186.',
      hints: ['각 곱셈을 먼저 계산하세요.', '12×3=36, 15×4=60, ...'],
      commonMistakes: [{ answer: '31×6,23×5,15×4,12×3', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 45,
    tags: ['ordering', 'multiplication', '3학년'],
  },

  // --- 나눗셈 몫 순서 ---
  {
    id: 'G3_S2_NUM_01_SK01_ORD01',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'ORDERING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 나눗셈의 몫을 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['8 ÷ 4', '15 ÷ 3', '24 ÷ 4', '36 ÷ 4'],
      explanation: '8÷4=2, 15÷3=5, 24÷4=6, 36÷4=9. 작은 순: 2, 5, 6, 9.',
      hints: ['각 나눗셈의 몫을 구하세요.', '8÷4=2, 15÷3=5, ...'],
      commonMistakes: [{ answer: '36÷4,24÷4,15÷3,8÷4', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 40,
    tags: ['ordering', 'division', '3학년'],
  },

  // --- 분수 순서 ---
  {
    id: 'G3_S2_NUM_03_SK02_ORD01',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'ORDERING',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 분수를 작은 수부터 순서대로 놓으세요. (분모가 모두 같습니다)',
      correctOrder: ['1/8', '3/8', '5/8', '7/8'],
      explanation: '분모가 같으면 분자가 작을수록 작은 수입니다. 1/8 < 3/8 < 5/8 < 7/8.',
      hints: ['분모가 같으니 분자를 비교하세요.', '1 < 3 < 5 < 7'],
      commonMistakes: [{ answer: '7/8,5/8,3/8,1/8', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['ordering', 'fraction', '3학년'],
  },
  {
    id: 'G3_S2_NUM_03_SK02_ORD02',
    skillId: 'G3_S2_NUM_03_SK02',
    questionType: 'ORDERING',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 단위분수를 큰 수부터 순서대로 놓으세요.',
      correctOrder: ['1/2', '1/3', '1/5', '1/10'],
      explanation: '단위분수는 분모가 작을수록 큰 수입니다. 1/2 > 1/3 > 1/5 > 1/10.',
      hints: ['단위분수는 분모가 작을수록 커요.', '피자를 2조각으로 나눈 것이 10조각보다 한 조각이 크겠죠?'],
      commonMistakes: [{ answer: '1/10,1/5,1/3,1/2', misconception: '분모가 큰 것부터 나열했어요. 단위분수는 분모가 작을수록 커요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'fraction', 'unit_fraction', '3학년'],
  },

  // --- 길이 순서 ---
  {
    id: 'G3_S1_SHAPE_04_SK01_ORD01',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'ORDERING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 길이를 짧은 것부터 순서대로 놓으세요.',
      correctOrder: ['5mm', '30mm', '1cm 5mm', '3cm'],
      explanation: '5mm, 30mm=3cm, 1cm 5mm=15mm, 3cm=30mm. 짧은 순: 5mm, 15mm, 30mm, 30mm. → 5mm, 1cm 5mm, 30mm, 3cm.',
      hints: ['단위를 통일해서 비교하세요.', '1cm = 10mm예요.'],
      commonMistakes: [{ answer: '3cm,30mm,1cm 5mm,5mm', misconception: '긴 것부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['ordering', 'length', 'unit_conversion', '3학년'],
  },

  // --- 들이와 무게 순서 ---
  {
    id: 'G3_S2_SHAPE_04_SK01_ORD01',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'ORDERING',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 들이를 적은 것부터 순서대로 놓으세요.',
      correctOrder: ['200mL', '500mL', '1L', '2L 300mL'],
      explanation: '200mL < 500mL < 1L(=1000mL) < 2L 300mL(=2300mL).',
      hints: ['모두 mL로 바꿔서 비교하세요.', '1L = 1000mL예요.'],
      commonMistakes: [{ answer: '2L 300mL,1L,500mL,200mL', misconception: '많은 것부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'volume', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK02_ORD01',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'ORDERING',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 무게를 가벼운 것부터 순서대로 놓으세요.',
      correctOrder: ['300g', '1kg', '1kg 500g', '3kg'],
      explanation: '300g < 1kg(=1000g) < 1kg 500g(=1500g) < 3kg(=3000g).',
      hints: ['모두 g으로 바꿔서 비교하세요.', '1kg = 1000g예요.'],
      commonMistakes: [{ answer: '3kg,1kg 500g,1kg,300g', misconception: '무거운 것부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'weight', '3학년'],
  },

  // ============================================================
  // 추가 문제: MATCHING (짝짓기)
  // ============================================================

  // --- 세 자리 수 덧셈/뺄셈 매칭 ---
  {
    id: 'G3_S1_NUM_01_SK01_MAT01',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'MATCHING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '계산 결과가 같은 것끼리 연결하세요.',
      pairs: [
        { left: '150 + 250', right: '400' },
        { left: '320 + 180', right: '500' },
        { left: '275 + 125', right: '400' },
        { left: '410 + 90', right: '500' },
      ],
      explanation: '150+250=400, 320+180=500, 275+125=400, 410+90=500입니다.',
      hints: ['각 덧셈을 먼저 계산하세요.', '같은 결과끼리 연결하세요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '계산을 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 40,
    tags: ['matching', 'addition', '3학년'],
  },

  // --- 곱셈 매칭 ---
  {
    id: 'G3_S1_NUM_02_SK01_MAT01',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '곱셈과 그 답을 연결하세요.',
      pairs: [
        { left: '14 × 3', right: '42' },
        { left: '23 × 4', right: '92' },
        { left: '16 × 5', right: '80' },
        { left: '32 × 3', right: '96' },
      ],
      explanation: '14×3=42, 23×4=92, 16×5=80, 32×3=96입니다.',
      hints: ['각 곱셈을 계산해 보세요.', '일의 자리, 십의 자리를 각각 곱한 뒤 더하세요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '곱셈 계산을 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 40,
    tags: ['matching', 'multiplication', '3학년'],
  },

  // --- 나눗셈 매칭 ---
  {
    id: 'G3_S2_NUM_01_SK01_MAT01',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '나눗셈과 그 몫을 연결하세요.',
      pairs: [
        { left: '18 ÷ 3', right: '6' },
        { left: '32 ÷ 8', right: '4' },
        { left: '45 ÷ 9', right: '5' },
        { left: '56 ÷ 7', right: '8' },
      ],
      explanation: '18÷3=6, 32÷8=4, 45÷9=5, 56÷7=8입니다.',
      hints: ['곱셈구구를 이용하세요.', '3 × ? = 18'],
      commonMistakes: [{ answer: 'mixed', misconception: '곱셈구구를 떠올려 보세요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['matching', 'division', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK02_MAT01',
    skillId: 'G3_S2_NUM_01_SK02',
    questionType: 'MATCHING',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '곱셈과 나눗셈의 관계를 연결하세요.',
      pairs: [
        { left: '4 × 7 = 28', right: '28 ÷ 7 = 4' },
        { left: '6 × 5 = 30', right: '30 ÷ 5 = 6' },
        { left: '8 × 3 = 24', right: '24 ÷ 3 = 8' },
        { left: '9 × 6 = 54', right: '54 ÷ 6 = 9' },
      ],
      explanation: '곱셈을 뒤집으면 나눗셈이 됩니다.',
      hints: ['곱셈의 결과를 나누는 수로 나누면 다른 수가 나와요.', '4 × 7 = 28이면 28 ÷ 7 = ?'],
      commonMistakes: [{ answer: 'mixed', misconception: '곱셈과 나눗셈의 관계를 다시 생각해 보세요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['matching', 'multiplication', 'division', '3학년'],
  },

  // --- 분수 매칭 ---
  {
    id: 'G3_S2_NUM_03_SK01_MAT01',
    skillId: 'G3_S2_NUM_03_SK01',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '분수와 그 의미를 연결하세요.',
      pairs: [
        { left: '1/2', right: '전체를 2개로 나눈 것 중 1개' },
        { left: '1/4', right: '전체를 4개로 나눈 것 중 1개' },
        { left: '3/4', right: '전체를 4개로 나눈 것 중 3개' },
        { left: '2/3', right: '전체를 3개로 나눈 것 중 2개' },
      ],
      explanation: '분모는 전체를 나눈 수, 분자는 그 중 취한 수입니다.',
      hints: ['분모는 전체 조각 수, 분자는 취한 조각 수예요.', '1/2는 전체를 2개로 나눈 것 중 1개예요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '분모와 분자의 의미를 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['matching', 'fraction', '3학년'],
  },

  // --- 길이 단위 매칭 ---
  {
    id: 'G3_S1_SHAPE_04_SK01_MAT01',
    skillId: 'G3_S1_SHAPE_04_SK01',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '같은 길이끼리 연결하세요.',
      pairs: [
        { left: '2cm', right: '20mm' },
        { left: '3km', right: '3000m' },
        { left: '50mm', right: '5cm' },
        { left: '1km 500m', right: '1500m' },
      ],
      explanation: '2cm=20mm, 3km=3000m, 50mm=5cm, 1km 500m=1500m입니다.',
      hints: ['1cm = 10mm, 1km = 1000m예요.', '단위를 변환해서 비교하세요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '단위 변환을 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['matching', 'length', 'unit_conversion', '3학년'],
  },

  // --- 들이와 무게 매칭 ---
  {
    id: 'G3_S2_SHAPE_04_SK01_MAT01',
    skillId: 'G3_S2_SHAPE_04_SK01',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '같은 양끼리 연결하세요.',
      pairs: [
        { left: '2L', right: '2000mL' },
        { left: '1L 500mL', right: '1500mL' },
        { left: '3000mL', right: '3L' },
        { left: '500mL', right: '0.5L' },
      ],
      explanation: '1L = 1000mL를 이용하여 변환하면 됩니다.',
      hints: ['1L = 1000mL예요.', '2L를 mL로 바꾸면 2000mL예요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '1L = 1000mL를 기억하세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['matching', 'volume', 'unit_conversion', '3학년'],
  },
  {
    id: 'G3_S2_SHAPE_04_SK02_MAT01',
    skillId: 'G3_S2_SHAPE_04_SK02',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '같은 무게끼리 연결하세요.',
      pairs: [
        { left: '1kg', right: '1000g' },
        { left: '2kg 500g', right: '2500g' },
        { left: '3000g', right: '3kg' },
        { left: '500g', right: '0.5kg' },
      ],
      explanation: '1kg = 1000g를 이용하여 변환하면 됩니다.',
      hints: ['1kg = 1000g예요.', '2kg 500g은 2000 + 500 = 2500g이에요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '1kg = 1000g를 기억하세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['matching', 'weight', 'unit_conversion', '3학년'],
  },

  // --- 원 매칭 ---
  {
    id: 'G3_S2_SHAPE_02_SK01_MAT01',
    skillId: 'G3_S2_SHAPE_02_SK01',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '원에 대한 용어와 설명을 연결하세요.',
      pairs: [
        { left: '중심', right: '원의 가운데 점' },
        { left: '반지름', right: '중심에서 원까지의 거리' },
        { left: '지름', right: '원을 지나는 가장 긴 선분' },
        { left: '지름 = 반지름 × ?', right: '2' },
      ],
      explanation: '중심은 가운데 점, 반지름은 중심에서 원까지, 지름은 가장 긴 선분이며 반지름의 2배입니다.',
      hints: ['원의 부분 이름을 떠올려 보세요.', '지름은 반지름의 몇 배?'],
      commonMistakes: [{ answer: 'mixed', misconception: '원의 용어를 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['matching', 'circle', '3학년'],
  },

  // ============================================================
  // 추가 문제: 문장형 보충
  // ============================================================

  {
    id: 'G3_S1_NUM_01_SK01_WP03',
    skillId: 'G3_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '아빠가 온라인에서 책 345권과 문구류 287개를 주문했습니다. 주문한 물건은 모두 몇 개일까요?',
      correctAnswer: 632,
      explanation: '345 + 287 = 632개입니다.',
      hints: ['두 수를 더하세요.', '일의 자리: 5 + 7 = 12, 올림 1'],
      commonMistakes: [{ answer: '522', misconception: '십의 자리에서 올림을 잊었어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'addition', 'real_life', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK01_WP02',
    skillId: 'G3_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '빵 42개를 7명에게 똑같이 나누어 주면 한 사람에게 몇 개씩 줄 수 있을까요?',
      correctAnswer: 6,
      explanation: '42 ÷ 7 = 6개입니다.',
      hints: ['42를 7로 나누세요.', '7 × ? = 42'],
      commonMistakes: [{ answer: '35', misconception: '42 - 7을 했어요. 나누어 주는 것은 나눗셈이에요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'division', 'real_life', '3학년'],
  },
  {
    id: 'G3_S1_NUM_02_SK02_WP02',
    skillId: 'G3_S1_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '문구점에서 공책 한 권에 450원입니다. 공책 3권을 사면 얼마를 내야 할까요?',
      correctAnswer: 1350,
      explanation: '450 × 3 = 1350원입니다.',
      hints: ['450원짜리 3권이니 450 × 3을 구하세요.', '400 × 3 = 1200, 50 × 3 = 150, 1200 + 150 = ?'],
      commonMistakes: [{ answer: '453', misconception: '450 + 3을 했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'multiplication', 'money', 'real_life', '3학년'],
  },
  {
    id: 'G3_S2_NUM_01_SK03_WP02',
    skillId: 'G3_S2_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '딸기 50개를 한 접시에 8개씩 담으려 합니다. 접시는 최소 몇 개가 필요할까요?',
      correctAnswer: 7,
      explanation: '50 ÷ 8 = 6 ... 2. 나머지 2개도 담아야 하므로 접시는 6 + 1 = 7개 필요합니다.',
      hints: ['50 ÷ 8의 몫과 나머지를 구하세요.', '나머지가 있으면 접시가 1개 더 필요해요.'],
      commonMistakes: [{ answer: '6', misconception: '나머지 2개를 담을 접시를 잊었어요. 1개 더 필요합니다.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['word_problem', 'division', 'remainder', 'real_life', '3학년'],
  },

  // --- 추가 ORDERING ---
  {
    id: 'G3_S1_NUM_02_SK01_ORD02',
    skillId: 'G3_S1_NUM_02_SK01',
    questionType: 'ORDERING',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 곱셈의 결과를 큰 수부터 순서대로 놓으세요.',
      correctOrder: ['45 × 6', '32 × 7', '28 × 5', '11 × 9'],
      explanation: '45×6=270, 32×7=224, 28×5=140, 11×9=99. 큰 순: 270, 224, 140, 99.',
      hints: ['각 곱셈을 먼저 계산하세요.', '45×6=270이 가장 커요.'],
      commonMistakes: [{ answer: '11×9,28×5,32×7,45×6', misconception: '작은 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 45,
    tags: ['ordering', 'multiplication', '3학년'],
  },

  // --- 추가 MATCHING ---
  {
    id: 'G3_S1_DATA_05_SK01_MAT01',
    skillId: 'G3_S1_DATA_05_SK01',
    questionType: 'MATCHING',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '자료 정리 방법과 설명을 연결하세요.',
      pairs: [
        { left: '정(正) 자 세기', right: '획을 그어 5개씩 묶어 세기' },
        { left: '표', right: '항목과 수를 정리한 것' },
        { left: '그림그래프', right: '그림으로 수를 나타낸 것' },
        { left: '○, × 표시', right: '있다/없다를 표시하는 것' },
      ],
      explanation: '각각의 자료 정리 방법에는 특징이 있습니다.',
      hints: ['정(正) 자는 획을 하나씩 그어 5개가 되면 한 묶음이에요.', '표는 항목별로 수를 정리한 것이에요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '각 방법의 특징을 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['matching', 'data', '3학년'],
  },
];
