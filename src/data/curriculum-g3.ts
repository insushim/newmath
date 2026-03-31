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
];
