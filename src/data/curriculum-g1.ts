// ============================================================
// MathVerse 1학년 커리큘럼 시드 데이터
// 2022 개정 교육과정 기반
// ============================================================
import type { SeedUnit, SeedSkill, SeedQuestion } from './curriculum-types';

// ============================================================
// 1학년 단원 정의
// ============================================================
export const G1_UNITS: SeedUnit[] = [
  // === 1학년 1학기 ===
  {
    id: 'G1_S1_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 1,
    semester: 1,
    code: 'G1_S1_01',
    nameKo: '9까지의 수',
    descriptionKo: '1부터 9까지의 수를 세고, 읽고, 쓰고, 크기를 비교합니다.',
    sortOrder: 1,
  },
  {
    id: 'G1_S1_SHAPE_02',
    domainCode: 'SHAPE_MEAS',
    grade: 1,
    semester: 1,
    code: 'G1_S1_02',
    nameKo: '여러 가지 모양',
    descriptionKo: '상자 모양, 둥근기둥 모양, 공 모양 등 입체도형의 모양을 알아봅니다.',
    sortOrder: 2,
  },
  {
    id: 'G1_S1_NUM_03',
    domainCode: 'NUM_OPS',
    grade: 1,
    semester: 1,
    code: 'G1_S1_03',
    nameKo: '덧셈과 뺄셈(1)',
    descriptionKo: '합이 9 이하인 덧셈과 뺄셈의 기초를 학습합니다.',
    sortOrder: 3,
  },
  {
    id: 'G1_S1_NUM_04',
    domainCode: 'NUM_OPS',
    grade: 1,
    semester: 1,
    code: 'G1_S1_04',
    nameKo: '50까지의 수',
    descriptionKo: '10부터 50까지의 수를 세고, 읽고, 쓰고, 크기를 비교합니다.',
    sortOrder: 4,
  },
  {
    id: 'G1_S1_NUM_05',
    domainCode: 'NUM_OPS',
    grade: 1,
    semester: 1,
    code: 'G1_S1_05',
    nameKo: '덧셈과 뺄셈(2)',
    descriptionKo: '받아올림이 없는 두 자리 수의 덧셈과 뺄셈을 학습합니다.',
    sortOrder: 5,
  },
  // === 1학년 2학기 ===
  {
    id: 'G1_S2_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 1,
    semester: 2,
    code: 'G1_S2_01',
    nameKo: '100까지의 수',
    descriptionKo: '51부터 100까지의 수를 세고, 읽고, 쓰고, 크기를 비교합니다.',
    sortOrder: 6,
  },
  {
    id: 'G1_S2_NUM_02',
    domainCode: 'NUM_OPS',
    grade: 1,
    semester: 2,
    code: 'G1_S2_02',
    nameKo: '덧셈과 뺄셈(3)',
    descriptionKo: '받아올림과 받아내림이 있는 덧셈과 뺄셈을 학습합니다.',
    sortOrder: 7,
  },
  {
    id: 'G1_S2_CHANGE_03',
    domainCode: 'CHANGE_REL',
    grade: 1,
    semester: 2,
    code: 'G1_S2_03',
    nameKo: '시계 보기와 규칙 찾기',
    descriptionKo: '몇 시, 몇 시 30분을 읽고, 규칙을 찾아 여러 가지 무늬를 만듭니다.',
    sortOrder: 8,
  },
];

// ============================================================
// 1학년 스킬 정의
// ============================================================
export const G1_SKILLS: SeedSkill[] = [
  // --- 9까지의 수 ---
  {
    id: 'G1_S1_NUM_01_SK01',
    unitId: 'G1_S1_NUM_01',
    code: 'count_1_9',
    nameKo: '1부터 9까지 세기',
    descriptionKo: '물건의 수를 세고 수로 나타낼 수 있다.',
    defaultDifficulty: -2.5,
    sortOrder: 1,
    conceptExplanation: '물건을 하나씩 짚어가며 세면 몇 개인지 알 수 있어요. 1, 2, 3, 4, 5, 6, 7, 8, 9 순서로 세어 봅시다.',
  },
  {
    id: 'G1_S1_NUM_01_SK02',
    unitId: 'G1_S1_NUM_01',
    code: 'compare_1_9',
    nameKo: '9까지의 수 크기 비교',
    descriptionKo: '9까지의 수의 크기를 비교할 수 있다.',
    defaultDifficulty: -2.0,
    sortOrder: 2,
    conceptExplanation: '두 수의 크기를 비교할 때는 수를 세어 보면 됩니다. 더 많이 센 수가 더 큰 수예요.',
  },
  {
    id: 'G1_S1_NUM_01_SK03',
    unitId: 'G1_S1_NUM_01',
    code: 'order_1_9',
    nameKo: '수의 순서',
    descriptionKo: '1부터 9까지 수의 순서를 알고, 바로 앞의 수와 바로 뒤의 수를 말할 수 있다.',
    defaultDifficulty: -2.0,
    sortOrder: 3,
    conceptExplanation: '수는 순서가 있어요. 1, 2, 3, 4, 5, 6, 7, 8, 9 순서대로 나열할 수 있어요. 5 바로 앞의 수는 4이고, 바로 뒤의 수는 6이에요.',
  },
  // --- 여러 가지 모양 ---
  {
    id: 'G1_S1_SHAPE_02_SK01',
    unitId: 'G1_S1_SHAPE_02',
    code: 'solid_shapes',
    nameKo: '입체도형의 모양 알기',
    descriptionKo: '상자 모양, 둥근기둥 모양, 공 모양을 구별할 수 있다.',
    defaultDifficulty: -2.0,
    sortOrder: 1,
    conceptExplanation: '우리 주변에는 여러 가지 모양이 있어요. 상자처럼 네모난 모양, 음료수 캔처럼 둥근기둥 모양, 축구공처럼 둥근 공 모양이 있어요.',
  },
  {
    id: 'G1_S1_SHAPE_02_SK02',
    unitId: 'G1_S1_SHAPE_02',
    code: 'shape_classify',
    nameKo: '모양에 따라 분류하기',
    descriptionKo: '물건을 모양에 따라 분류할 수 있다.',
    defaultDifficulty: -1.5,
    sortOrder: 2,
    conceptExplanation: '물건의 생김새를 잘 살펴보면 같은 모양끼리 모을 수 있어요. 잘 굴러가는지, 쌓을 수 있는지 생각해 보세요.',
  },
  // --- 덧셈과 뺄셈(1) ---
  {
    id: 'G1_S1_NUM_03_SK01',
    unitId: 'G1_S1_NUM_03',
    code: 'add_basic',
    nameKo: '모으기와 가르기',
    descriptionKo: '9 이하의 수를 모으고 가르기를 할 수 있다.',
    defaultDifficulty: -2.0,
    sortOrder: 1,
    conceptExplanation: '두 수를 합하는 것을 "모으기"라고 해요. 하나의 수를 둘로 나누는 것을 "가르기"라고 해요. 예를 들어 3과 2를 모으면 5이고, 5를 3과 2로 가를 수 있어요.',
  },
  {
    id: 'G1_S1_NUM_03_SK02',
    unitId: 'G1_S1_NUM_03',
    code: 'add_sub_9',
    nameKo: '합이 9 이하인 덧셈과 뺄셈',
    descriptionKo: '합이 9 이하인 덧셈과 뺄셈을 할 수 있다.',
    defaultDifficulty: -1.5,
    sortOrder: 2,
    conceptExplanation: '덧셈은 두 수를 합하는 것이에요. 기호 "+"를 사용해요. 뺄셈은 빼는 것이에요. 기호 "-"를 사용해요. 3 + 2 = 5, 5 - 2 = 3이에요.',
  },
  {
    id: 'G1_S1_NUM_03_SK03',
    unitId: 'G1_S1_NUM_03',
    code: 'add_sub_0',
    nameKo: '0의 덧셈과 뺄셈',
    descriptionKo: '0이 포함된 덧셈과 뺄셈을 이해할 수 있다.',
    defaultDifficulty: -1.5,
    sortOrder: 3,
    conceptExplanation: '어떤 수에 0을 더하면 그 수 그대로예요. 어떤 수에서 0을 빼면 그 수 그대로예요. 어떤 수에서 같은 수를 빼면 0이 돼요.',
  },
  // --- 50까지의 수 ---
  {
    id: 'G1_S1_NUM_04_SK01',
    unitId: 'G1_S1_NUM_04',
    code: 'count_to_50',
    nameKo: '50까지의 수 세기',
    descriptionKo: '10부터 50까지의 수를 세고, 읽고, 쓸 수 있다.',
    defaultDifficulty: -1.5,
    sortOrder: 1,
    conceptExplanation: '10개씩 묶어 세면 편리해요. 10이 1개이면 십(10), 10이 2개이면 이십(20), 10이 5개이면 오십(50)이에요.',
  },
  {
    id: 'G1_S1_NUM_04_SK02',
    unitId: 'G1_S1_NUM_04',
    code: 'tens_ones',
    nameKo: '몇십 몇 알기',
    descriptionKo: '두 자리 수의 십의 자리와 일의 자리를 이해할 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 2,
    conceptExplanation: '두 자리 수는 십의 자리 수와 일의 자리 수로 이루어져 있어요. 예를 들어 35는 10이 3개(30)와 낱개 5개로 이루어진 수예요.',
  },
  {
    id: 'G1_S1_NUM_04_SK03',
    unitId: 'G1_S1_NUM_04',
    code: 'compare_to_50',
    nameKo: '50까지의 수 크기 비교',
    descriptionKo: '50까지의 수의 크기를 비교할 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 3,
    conceptExplanation: '두 자리 수의 크기를 비교할 때는 먼저 십의 자리 수를 비교해요. 십의 자리 수가 같으면 일의 자리 수를 비교해요.',
  },
  // --- 덧셈과 뺄셈(2) ---
  {
    id: 'G1_S1_NUM_05_SK01',
    unitId: 'G1_S1_NUM_05',
    code: 'add_tens',
    nameKo: '받아올림 없는 덧셈',
    descriptionKo: '받아올림이 없는 (몇십)+(몇), (몇십 몇)+(몇) 덧셈을 할 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 1,
    conceptExplanation: '십의 자리는 십의 자리끼리, 일의 자리는 일의 자리끼리 더해요. 예를 들어 20 + 3 = 23, 31 + 5 = 36이에요.',
  },
  {
    id: 'G1_S1_NUM_05_SK02',
    unitId: 'G1_S1_NUM_05',
    code: 'sub_tens',
    nameKo: '받아내림 없는 뺄셈',
    descriptionKo: '받아내림이 없는 (몇십 몇)-(몇) 뺄셈을 할 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 2,
    conceptExplanation: '일의 자리는 일의 자리끼리 빼요. 예를 들어 37 - 5 = 32예요. 십의 자리 3은 그대로, 일의 자리 7 - 5 = 2예요.',
  },
  // --- 100까지의 수 ---
  {
    id: 'G1_S2_NUM_01_SK01',
    unitId: 'G1_S2_NUM_01',
    code: 'count_to_100',
    nameKo: '100까지의 수 세기',
    descriptionKo: '51부터 100까지의 수를 세고, 읽고, 쓸 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 1,
    conceptExplanation: '50보다 큰 수도 10개씩 묶어 셀 수 있어요. 10이 6개이면 60, 10이 10개이면 100이에요. 100은 "백"이라고 읽어요.',
  },
  {
    id: 'G1_S2_NUM_01_SK02',
    unitId: 'G1_S2_NUM_01',
    code: 'compare_to_100',
    nameKo: '100까지의 수 크기 비교',
    descriptionKo: '100까지의 수의 크기를 비교할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 2,
    conceptExplanation: '두 자리 수의 크기를 비교할 때는 십의 자리부터 비교해요. 십의 자리 수가 더 큰 수가 더 큰 수예요.',
  },
  // --- 덧셈과 뺄셈(3) ---
  {
    id: 'G1_S2_NUM_02_SK01',
    unitId: 'G1_S2_NUM_02',
    code: 'add_carry',
    nameKo: '받아올림이 있는 덧셈',
    descriptionKo: '받아올림이 있는 한 자리 수끼리의 덧셈을 할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '일의 자리끼리 더해서 10 이상이 되면 10을 십의 자리로 올려요. 예를 들어 7 + 5 = 12에서 일의 자리에 2를 쓰고 십의 자리에 1을 올려요.',
  },
  {
    id: 'G1_S2_NUM_02_SK02',
    unitId: 'G1_S2_NUM_02',
    code: 'sub_borrow',
    nameKo: '받아내림이 있는 뺄셈',
    descriptionKo: '받아내림이 있는 (십 몇)-(몇) 뺄셈을 할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 2,
    conceptExplanation: '일의 자리에서 뺄 수 없으면 십의 자리에서 10을 빌려와요. 예를 들어 13 - 7에서 3에서 7을 뺄 수 없으니 10을 빌려 13 - 7 = 6이에요.',
  },
  {
    id: 'G1_S2_NUM_02_SK03',
    unitId: 'G1_S2_NUM_02',
    code: 'add_sub_three',
    nameKo: '세 수의 덧셈과 뺄셈',
    descriptionKo: '세 수의 덧셈과 뺄셈을 할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 3,
    conceptExplanation: '세 수의 계산은 앞에서부터 차례대로 해요. 예를 들어 3 + 4 + 2는 먼저 3 + 4 = 7을 구하고, 7 + 2 = 9를 구해요.',
  },
  // --- 시계 보기와 규칙 찾기 ---
  {
    id: 'G1_S2_CHANGE_03_SK01',
    unitId: 'G1_S2_CHANGE_03',
    code: 'clock_read',
    nameKo: '시계 보기',
    descriptionKo: '몇 시와 몇 시 30분을 읽을 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 1,
    conceptExplanation: '시계의 짧은 바늘이 가리키는 수가 "시"예요. 긴 바늘이 12를 가리키면 "몇 시 정각", 6을 가리키면 "몇 시 30분"이에요.',
  },
  {
    id: 'G1_S2_CHANGE_03_SK02',
    unitId: 'G1_S2_CHANGE_03',
    code: 'pattern_find',
    nameKo: '규칙 찾기',
    descriptionKo: '규칙을 찾아 여러 가지 무늬를 꾸밀 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 2,
    conceptExplanation: '반복되는 부분을 찾으면 규칙을 알 수 있어요. 예를 들어 ○△○△○△에서 ○△가 반복되는 규칙이에요.',
  },
];

// ============================================================
// 1학년 문제 데이터
// ============================================================
export const G1_QUESTIONS: SeedQuestion[] = [
  // ============================================================
  // 단원: 9까지의 수 - SK01: 1부터 9까지 세기
  // ============================================================
  {
    id: 'G1_S1_NUM_01_SK01_Q01',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -2.5,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '사과가 🍎🍎🍎 있습니다. 사과는 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '2개', isCorrect: false },
        { id: 'b', text: '3개', isCorrect: true },
        { id: 'c', text: '4개', isCorrect: false },
        { id: 'd', text: '5개', isCorrect: false },
      ],
      explanation: '사과를 하나씩 세어 보면 1, 2, 3이므로 모두 3개입니다.',
      hints: [
        '사과를 하나씩 손가락으로 짚어가며 세어 보세요.',
        '1, 2, ... 다음에 오는 수는 무엇인가요?',
      ],
      commonMistakes: [
        { answer: '2개', misconception: '마지막 사과를 세지 않았습니다. 하나씩 빠짐없이 세어 보세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK01_Q02',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -2.5,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '별이 ⭐⭐⭐⭐⭐ 있습니다. 별은 모두 몇 개인가요?',
      correctAnswer: 5,
      explanation: '별을 하나씩 세어 보면 1, 2, 3, 4, 5이므로 모두 5개입니다.',
      hints: [
        '별을 왼쪽부터 하나씩 세어 보세요.',
        '1, 2, 3, 4, ... 다음 수는 무엇일까요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK01_Q03',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -2.3,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '손가락을 7개 펴고 있습니다. 수로 나타내면 얼마인가요?',
      options: [
        { id: 'a', text: '6', isCorrect: false },
        { id: 'b', text: '7', isCorrect: true },
        { id: 'c', text: '8', isCorrect: false },
        { id: 'd', text: '9', isCorrect: false },
      ],
      explanation: '손가락 7개를 편 것은 수 7을 나타냅니다.',
      hints: [
        '손가락을 하나씩 세어 보세요.',
        '한 손은 5개, 다른 손에서 2개를 더 펴면 모두 몇 개일까요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK01_Q04',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '연필이 9자루 있었는데, 1자루를 잃어버렸습니다. 남은 연필을 세면 몇 자루인가요?',
      correctAnswer: 8,
      explanation: '9자루에서 1자루를 잃어버렸으므로 9 - 1 = 8, 남은 연필은 8자루입니다.',
      hints: [
        '9에서 1을 빼면 됩니다.',
        '9 바로 앞의 수는 무엇일까요?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수 세기', '1학년'],
  },

  // ============================================================
  // 단원: 9까지의 수 - SK02: 9까지의 수 크기 비교
  // ============================================================
  {
    id: 'G1_S1_NUM_01_SK02_Q01',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '3과 7 중에서 더 큰 수는 어느 것인가요?',
      options: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '7', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '7은 3보다 뒤에 나오는 수이므로 7이 3보다 더 큽니다.',
      hints: [
        '수를 세는 순서를 생각해 보세요. 더 뒤에 나오는 수가 더 커요.',
        '1, 2, 3, ... , 7 에서 어떤 수가 더 뒤에 나오나요?',
      ],
      commonMistakes: [
        { answer: '3', misconception: '작은 수와 큰 수를 혼동했습니다. 수를 셀 때 나중에 나오는 수가 더 큰 수예요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK02_Q02',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '다음 중 가장 작은 수를 고르세요.',
      options: [
        { id: 'a', text: '5', isCorrect: false },
        { id: 'b', text: '2', isCorrect: true },
        { id: 'c', text: '8', isCorrect: false },
        { id: 'd', text: '6', isCorrect: false },
      ],
      explanation: '2, 5, 6, 8 중에서 가장 먼저 나오는 수는 2이므로 2가 가장 작습니다.',
      hints: [
        '수를 작은 것부터 순서대로 나열해 보세요.',
        '1, 2, 3, 4, 5, 6, 7, 8 에서 가장 먼저 나오는 수를 찾아보세요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK02_Q03',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"4는 6보다 크다." 이 말은 맞나요?',
      correctAnswer: false,
      explanation: '4는 6보다 작습니다. 수를 셀 때 4가 6보다 앞에 나오기 때문입니다.',
      hints: [
        '수를 세는 순서를 떠올려 보세요.',
        '4와 6 중 어떤 수가 더 뒤에 세어지나요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },

  // ============================================================
  // 단원: 9까지의 수 - SK03: 수의 순서
  // ============================================================
  {
    id: 'G1_S1_NUM_01_SK03_Q01',
    skillId: 'G1_S1_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '5 바로 뒤의 수는 무엇인가요?',
      correctAnswer: 6,
      explanation: '수의 순서에서 5 바로 뒤에 오는 수는 6입니다. 5 다음 수를 세면 6이에요.',
      hints: [
        '5에서 하나 더 세어 보세요.',
        '5, ___  빈칸에 들어갈 수는?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수의 순서', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK03_Q02',
    skillId: 'G1_S1_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '8 바로 앞의 수는 무엇인가요?',
      correctAnswer: 7,
      explanation: '수의 순서에서 8 바로 앞에 오는 수는 7입니다.',
      hints: [
        '8보다 1 작은 수를 생각해 보세요.',
        '..., 6, 7, 8 에서 8 바로 앞은?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수의 순서', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK03_Q03',
    skillId: 'G1_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '1, 2, __, 4, 5에서 빈칸에 알맞은 수는 무엇인가요?',
      options: [
        { id: 'a', text: '0', isCorrect: false },
        { id: 'b', text: '3', isCorrect: true },
        { id: 'c', text: '6', isCorrect: false },
        { id: 'd', text: '7', isCorrect: false },
      ],
      explanation: '1, 2 다음에 오는 수는 3이고, 그 다음이 4, 5입니다. 빈칸에는 3이 들어갑니다.',
      hints: [
        '수를 순서대로 세어 보세요.',
        '2 바로 뒤에 오는 수는 무엇인가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수의 순서', '1학년'],
  },

  // ============================================================
  // 단원: 여러 가지 모양 - SK01: 입체도형의 모양 알기
  // ============================================================
  {
    id: 'G1_S1_SHAPE_02_SK01_Q01',
    skillId: 'G1_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '축구공은 어떤 모양인가요?',
      options: [
        { id: 'a', text: '상자 모양', isCorrect: false },
        { id: 'b', text: '둥근기둥 모양', isCorrect: false },
        { id: 'c', text: '공 모양', isCorrect: true },
      ],
      explanation: '축구공은 어디서 보아도 둥글기 때문에 공 모양입니다.',
      hints: [
        '축구공을 굴려 보면 어떻게 될까요?',
        '어디에서 봐도 동그란 모양을 생각해 보세요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['입체도형', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK01_Q02',
    skillId: 'G1_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '선물 상자는 어떤 모양인가요?',
      options: [
        { id: 'a', text: '상자 모양', isCorrect: true },
        { id: 'b', text: '둥근기둥 모양', isCorrect: false },
        { id: 'c', text: '공 모양', isCorrect: false },
      ],
      explanation: '선물 상자는 위아래가 평평하고 네모난 면이 있으므로 상자 모양입니다.',
      hints: [
        '선물 상자의 면을 살펴보세요. 네모난 면이 있나요?',
        '쌓을 수 있고 잘 굴러가지 않는 모양이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['입체도형', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK01_Q03',
    skillId: 'G1_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '음료수 캔은 어떤 모양인가요?',
      options: [
        { id: 'a', text: '상자 모양', isCorrect: false },
        { id: 'b', text: '둥근기둥 모양', isCorrect: true },
        { id: 'c', text: '공 모양', isCorrect: false },
      ],
      explanation: '음료수 캔은 위아래가 동그랗고 옆면이 둥근 모양이므로 둥근기둥 모양입니다.',
      hints: [
        '음료수 캔을 옆으로 놓으면 굴러가나요?',
        '위아래가 동그랗고 길쭉한 모양이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['입체도형', '1학년'],
  },

  // ============================================================
  // 단원: 여러 가지 모양 - SK02: 모양에 따라 분류하기
  // ============================================================
  {
    id: 'G1_S1_SHAPE_02_SK02_Q01',
    skillId: 'G1_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '다음 중 잘 굴러가는 모양을 모두 고르면?',
      options: [
        { id: 'a', text: '공 모양, 둥근기둥 모양', isCorrect: true },
        { id: 'b', text: '상자 모양, 공 모양', isCorrect: false },
        { id: 'c', text: '상자 모양만', isCorrect: false },
      ],
      explanation: '공 모양과 둥근기둥 모양은 둥근 면이 있어서 잘 굴러갑니다. 상자 모양은 평평한 면만 있어서 잘 굴러가지 않습니다.',
      hints: [
        '둥근 면이 있는 모양은 잘 굴러가요.',
        '상자 모양은 모든 면이 평평해요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['모양 분류', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK02_Q02',
    skillId: 'G1_S1_SHAPE_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"상자 모양은 잘 쌓을 수 있다." 맞나요?',
      correctAnswer: true,
      explanation: '상자 모양은 면이 평평하여 위에 다른 물건을 잘 쌓을 수 있습니다.',
      hints: [
        '상자 모양의 면은 어떤 모양인가요?',
        '평평한 면은 물건을 올려놓기 좋아요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['모양 분류', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK02_Q03',
    skillId: 'G1_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '둥근기둥 모양의 물건이 아닌 것은 무엇인가요?',
      options: [
        { id: 'a', text: '휴지 롤', isCorrect: false },
        { id: 'b', text: '주사위', isCorrect: true },
        { id: 'c', text: '음료수 캔', isCorrect: false },
        { id: 'd', text: '크레파스', isCorrect: false },
      ],
      explanation: '주사위는 모든 면이 네모나서 상자 모양입니다. 나머지는 모두 둥근기둥 모양입니다.',
      hints: [
        '둥근기둥 모양은 위아래가 동그랗고 옆이 둥글어요.',
        '주사위의 면은 어떤 모양인가요?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['모양 분류', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(1) - SK01: 모으기와 가르기
  // ============================================================
  {
    id: 'G1_S1_NUM_03_SK01_Q01',
    skillId: 'G1_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '사탕 2개와 사탕 3개를 모으면 모두 몇 개인가요?',
      correctAnswer: 5,
      explanation: '2와 3을 모으면 5입니다. 사탕 2개에 3개를 더하면 모두 5개예요.',
      hints: [
        '2개부터 시작해서 하나씩 3번 더 세어 보세요.',
        '2, 3, 4, 5! 모두 몇 개인가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['모으기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK01_Q02',
    skillId: 'G1_S1_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '7을 4와 몇으로 가를 수 있나요?',
      options: [
        { id: 'a', text: '2', isCorrect: false },
        { id: 'b', text: '3', isCorrect: true },
        { id: 'c', text: '4', isCorrect: false },
        { id: 'd', text: '5', isCorrect: false },
      ],
      explanation: '7을 4와 3으로 가를 수 있습니다. 4 + 3 = 7이기 때문입니다.',
      hints: [
        '7에서 4를 빼면 얼마가 남을까요?',
        '4 + __ = 7에서 빈칸에 들어갈 수를 찾아보세요.',
      ],
      commonMistakes: [
        { answer: '4', misconception: '7을 반으로 나누려고 했습니다. 4 + 4 = 8이므로 7이 되지 않아요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['가르기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK01_Q03',
    skillId: 'G1_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '6을 1과 몇으로 가를 수 있나요?',
      correctAnswer: 5,
      explanation: '6을 1과 5로 가를 수 있습니다. 1 + 5 = 6이기 때문입니다.',
      hints: [
        '6에서 1을 빼면 몇이 남나요?',
        '1 + __ = 6을 생각해 보세요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['가르기', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(1) - SK02: 합이 9 이하인 덧셈과 뺄셈
  // ============================================================
  {
    id: 'G1_S1_NUM_03_SK02_Q01',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '3 + 4 = ?',
      questionLatex: '3 + 4 = \\square',
      correctAnswer: 7,
      explanation: '3에 4를 더하면 7입니다. 3에서부터 4를 하나씩 세면 4, 5, 6, 7이에요.',
      hints: [
        '3에서 시작해서 4번 더 세어 보세요.',
        '3, 4, 5, 6, ... 하나 더!',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['덧셈', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK02_Q02',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '8 - 3 = ?',
      questionLatex: '8 - 3 = \\square',
      correctAnswer: 5,
      explanation: '8에서 3을 빼면 5입니다. 8에서 하나씩 3번 빼면 7, 6, 5예요.',
      hints: [
        '8에서 시작해서 3번 거꾸로 세어 보세요.',
        '8, 7, 6, ... 하나 더 빼면?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['뺄셈', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK02_Q03',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '바구니에 귤이 5개 있었는데, 2개를 더 넣었습니다. 귤은 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '3개', isCorrect: false },
        { id: 'b', text: '6개', isCorrect: false },
        { id: 'c', text: '7개', isCorrect: true },
        { id: 'd', text: '8개', isCorrect: false },
      ],
      explanation: '있던 5개에 2개를 더 넣었으므로 5 + 2 = 7, 모두 7개입니다.',
      hints: [
        '"더 넣었다"는 덧셈을 해야 한다는 뜻이에요.',
        '5 + 2를 계산해 보세요.',
      ],
      commonMistakes: [
        { answer: '3개', misconception: '덧셈 대신 뺄셈을 했습니다. "더 넣었다"이므로 더해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['덧셈', '서술형', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK02_Q04',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '연못에 개구리 9마리가 있었습니다. 4마리가 뛰어 나갔습니다. 남은 개구리는 몇 마리인가요?',
      correctAnswer: 5,
      explanation: '9마리에서 4마리가 나갔으므로 9 - 4 = 5, 남은 개구리는 5마리입니다.',
      hints: [
        '"뛰어 나갔다"는 뺄셈을 해야 한다는 뜻이에요.',
        '9 - 4를 계산해 보세요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['뺄셈', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(1) - SK03: 0의 덧셈과 뺄셈
  // ============================================================
  {
    id: 'G1_S1_NUM_03_SK03_Q01',
    skillId: 'G1_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '5 + 0 = ?',
      questionLatex: '5 + 0 = \\square',
      correctAnswer: 5,
      explanation: '어떤 수에 0을 더하면 그 수 그대로입니다. 5 + 0 = 5예요.',
      hints: [
        '0은 "아무것도 없다"는 뜻이에요.',
        '5에 아무것도 더하지 않으면 얼마일까요?',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['0의 계산', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK03_Q02',
    skillId: 'G1_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '7 - 0 = ?',
      questionLatex: '7 - 0 = \\square',
      correctAnswer: 7,
      explanation: '어떤 수에서 0을 빼면 그 수 그대로입니다. 7 - 0 = 7이에요.',
      hints: [
        '0을 빼는 것은 아무것도 빼지 않는다는 뜻이에요.',
        '7에서 아무것도 빼지 않으면?',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['0의 계산', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK03_Q03',
    skillId: 'G1_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '6 - 6 = ?',
      questionLatex: '6 - 6 = \\square',
      correctAnswer: 0,
      explanation: '같은 수에서 같은 수를 빼면 0이 됩니다. 6 - 6 = 0이에요.',
      hints: [
        '사탕 6개를 모두 먹으면 남는 사탕은 몇 개일까요?',
        '같은 수끼리 빼면 항상 어떤 수가 될까요?',
      ],
      commonMistakes: [
        { answer: '6', misconception: '빼기를 하지 않고 원래 수를 적었습니다. 6에서 6을 모두 빼면 아무것도 남지 않아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['0의 계산', '1학년'],
  },

  // ============================================================
  // 단원: 50까지의 수 - SK01: 50까지의 수 세기
  // ============================================================
  {
    id: 'G1_S1_NUM_04_SK01_Q01',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '10이 3개이면 얼마인가요?',
      options: [
        { id: 'a', text: '13', isCorrect: false },
        { id: 'b', text: '30', isCorrect: true },
        { id: 'c', text: '31', isCorrect: false },
        { id: 'd', text: '3', isCorrect: false },
      ],
      explanation: '10이 3개이면 10 + 10 + 10 = 30입니다. "삼십"이라고 읽어요.',
      hints: [
        '10씩 세어 보세요. 10, 20, ...',
        '10이 3개이면 10 + 10 + 10은?',
      ],
      commonMistakes: [
        { answer: '13', misconception: '10이 1개와 3을 더한 13으로 착각했습니다. 10이 "3개"이므로 30이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '십의 자리', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK01_Q02',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '10씩 뛰어 세기를 할 때, 20 다음에 오는 수는 무엇인가요?',
      correctAnswer: 30,
      explanation: '10씩 뛰어 세면 10, 20, 30, 40, 50입니다. 20 다음은 30이에요.',
      hints: [
        '20에 10을 더하면?',
        '10, 20, __, 40, 50 에서 빈칸은?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['뛰어 세기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK01_Q03',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"사십칠"을 수로 쓰면 얼마인가요?',
      options: [
        { id: 'a', text: '47', isCorrect: true },
        { id: 'b', text: '74', isCorrect: false },
        { id: 'c', text: '407', isCorrect: false },
        { id: 'd', text: '40', isCorrect: false },
      ],
      explanation: '"사십칠"은 40과 7을 합한 수이므로 47입니다.',
      hints: [
        '"사십"은 40이에요. 거기에 "칠"은 7이에요.',
        '40 + 7 = ?',
      ],
      commonMistakes: [
        { answer: '74', misconception: '십의 자리와 일의 자리를 바꿔 적었습니다. "사십"이 앞에 오므로 4가 십의 자리예요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수 읽기 쓰기', '1학년'],
  },

  // ============================================================
  // 단원: 50까지의 수 - SK02: 몇십 몇 알기
  // ============================================================
  {
    id: 'G1_S1_NUM_04_SK02_Q01',
    skillId: 'G1_S1_NUM_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '35에서 십의 자리 숫자는 무엇인가요?',
      options: [
        { id: 'a', text: '3', isCorrect: true },
        { id: 'b', text: '5', isCorrect: false },
        { id: 'c', text: '35', isCorrect: false },
        { id: 'd', text: '30', isCorrect: false },
      ],
      explanation: '35에서 십의 자리 숫자는 3입니다. 이것은 10이 3개라는 뜻이에요.',
      hints: [
        '두 자리 수에서 왼쪽 숫자가 십의 자리예요.',
        '35 = 30 + 5에서 30은 10이 몇 개인가요?',
      ],
      commonMistakes: [
        { answer: '5', misconception: '십의 자리와 일의 자리를 혼동했습니다. 왼쪽이 십의 자리, 오른쪽이 일의 자리예요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자릿값', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK02_Q02',
    skillId: 'G1_S1_NUM_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '10이 2개이고 1이 8개이면 얼마인가요?',
      correctAnswer: 28,
      explanation: '10이 2개이면 20이고, 1이 8개이면 8이므로 20 + 8 = 28입니다.',
      hints: [
        '10이 2개이면 얼마인가요?',
        '20 + 8 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자릿값', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK02_Q03',
    skillId: 'G1_S1_NUM_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '42는 10이 몇 개이고 1이 몇 개인 수인가요? 10의 개수를 답하세요.',
      correctAnswer: 4,
      explanation: '42 = 40 + 2이므로 10이 4개이고 1이 2개인 수입니다.',
      hints: [
        '42에서 십의 자리 숫자를 보세요.',
        '42 = __ × 10 + 2 에서 빈칸은?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['자릿값', '1학년'],
  },

  // ============================================================
  // 단원: 50까지의 수 - SK03: 50까지의 수 크기 비교
  // ============================================================
  {
    id: 'G1_S1_NUM_04_SK03_Q01',
    skillId: 'G1_S1_NUM_04_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '27과 35 중 더 큰 수는 어느 것인가요?',
      options: [
        { id: 'a', text: '27', isCorrect: false },
        { id: 'b', text: '35', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '십의 자리를 비교하면 2 < 3이므로 35가 27보다 더 큽니다.',
      hints: [
        '먼저 십의 자리 수를 비교해 보세요.',
        '2와 3 중 어느 것이 더 큰가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK03_Q02',
    skillId: 'G1_S1_NUM_04_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '43과 46 중 더 큰 수는 어느 것인가요?',
      options: [
        { id: 'a', text: '43', isCorrect: false },
        { id: 'b', text: '46', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '십의 자리가 모두 4로 같으므로 일의 자리를 비교합니다. 3 < 6이므로 46이 더 큽니다.',
      hints: [
        '십의 자리 수가 같을 때는 일의 자리를 비교해요.',
        '3과 6 중 어느 것이 더 큰가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK03_Q03',
    skillId: 'G1_S1_NUM_04_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수를 작은 것부터 순서대로 나열한 것은?  15, 32, 28, 41',
      options: [
        { id: 'a', text: '15, 28, 32, 41', isCorrect: true },
        { id: 'b', text: '41, 32, 28, 15', isCorrect: false },
        { id: 'c', text: '15, 32, 28, 41', isCorrect: false },
        { id: 'd', text: '28, 15, 41, 32', isCorrect: false },
      ],
      explanation: '십의 자리가 1 < 2 < 3 < 4 이므로 15 < 28 < 32 < 41 순서입니다.',
      hints: [
        '먼저 십의 자리 숫자를 비교해서 정렬해 보세요.',
        '십의 자리가 1, 2, 3, 4인 순서로 나열해 보세요.',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['수 비교', '순서', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(2) - SK01: 받아올림 없는 덧셈
  // ============================================================
  {
    id: 'G1_S1_NUM_05_SK01_Q01',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '20 + 5 = ?',
      questionLatex: '20 + 5 = \\square',
      correctAnswer: 25,
      explanation: '20에 5를 더하면 25입니다. 십의 자리 2는 그대로, 일의 자리에 5가 들어가요.',
      hints: [
        '20은 10이 2개예요. 거기에 낱개 5개를 더하면?',
        '이십에 오를 더하면 이십오!',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['덧셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK01_Q02',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '31 + 6 = ?',
      questionLatex: '31 + 6 = \\square',
      correctAnswer: 37,
      explanation: '31 + 6 = 37입니다. 십의 자리 3은 그대로, 일의 자리 1 + 6 = 7이에요.',
      hints: [
        '십의 자리는 변하지 않아요.',
        '일의 자리끼리 더하면 1 + 6 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['덧셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK01_Q03',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '색연필이 42자루 있었는데 7자루를 더 받았습니다. 색연필은 모두 몇 자루인가요?',
      options: [
        { id: 'a', text: '35자루', isCorrect: false },
        { id: 'b', text: '47자루', isCorrect: false },
        { id: 'c', text: '49자루', isCorrect: true },
        { id: 'd', text: '50자루', isCorrect: false },
      ],
      explanation: '42 + 7 = 49입니다. 십의 자리 4는 그대로, 일의 자리 2 + 7 = 9예요.',
      hints: [
        '"더 받았다"이므로 덧셈을 해요.',
        '42 + 7에서 일의 자리끼리 더하면 2 + 7 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['덧셈', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(2) - SK02: 받아내림 없는 뺄셈
  // ============================================================
  {
    id: 'G1_S1_NUM_05_SK02_Q01',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '37 - 5 = ?',
      questionLatex: '37 - 5 = \\square',
      correctAnswer: 32,
      explanation: '37 - 5 = 32입니다. 십의 자리 3은 그대로, 일의 자리 7 - 5 = 2예요.',
      hints: [
        '십의 자리는 변하지 않아요.',
        '일의 자리끼리 빼면 7 - 5 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['뺄셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK02_Q02',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '49 - 3 = ?',
      questionLatex: '49 - 3 = \\square',
      correctAnswer: 46,
      explanation: '49 - 3 = 46입니다. 십의 자리 4는 그대로, 일의 자리 9 - 3 = 6이에요.',
      hints: [
        '일의 자리끼리 빼 보세요.',
        '9 - 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['뺄셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK02_Q03',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '도서관에 책이 48권 있었습니다. 6권을 빌려갔습니다. 남은 책은 몇 권인가요?',
      options: [
        { id: 'a', text: '40권', isCorrect: false },
        { id: 'b', text: '42권', isCorrect: true },
        { id: 'c', text: '44권', isCorrect: false },
        { id: 'd', text: '54권', isCorrect: false },
      ],
      explanation: '48 - 6 = 42입니다. "빌려갔다"이므로 빼기를 해요.',
      hints: [
        '"빌려갔다"이므로 뺄셈을 해요.',
        '48 - 6에서 일의 자리: 8 - 6 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['뺄셈', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 100까지의 수 - SK01: 100까지의 수 세기
  // ============================================================
  {
    id: 'G1_S2_NUM_01_SK01_Q01',
    skillId: 'G1_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '10이 7개이면 얼마인가요?',
      correctAnswer: 70,
      explanation: '10이 7개이면 10 × 7 = 70입니다. "칠십"이라고 읽어요.',
      hints: [
        '10씩 7번 세어 보세요.',
        '10, 20, 30, 40, 50, 60, ...',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK01_Q02',
    skillId: 'G1_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '"구십삼"을 수로 쓰면 얼마인가요?',
      options: [
        { id: 'a', text: '39', isCorrect: false },
        { id: 'b', text: '93', isCorrect: true },
        { id: 'c', text: '903', isCorrect: false },
        { id: 'd', text: '90', isCorrect: false },
      ],
      explanation: '"구십"은 90이고, "삼"은 3이므로 90 + 3 = 93입니다.',
      hints: [
        '"구십"은 얼마인가요?',
        '90 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '39', misconception: '십의 자리와 일의 자리 숫자를 바꿔 적었습니다.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 읽기 쓰기', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK01_Q03',
    skillId: 'G1_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '10이 10개이면 얼마인가요?',
      correctAnswer: 100,
      explanation: '10이 10개이면 100입니다. "백"이라고 읽어요. 100은 99보다 1 큰 수예요.',
      hints: [
        '10씩 세어 보세요. 10, 20, ..., 90 다음은?',
        '99보다 1 큰 수는?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '100', '1학년'],
  },

  // ============================================================
  // 단원: 100까지의 수 - SK02: 100까지의 수 크기 비교
  // ============================================================
  {
    id: 'G1_S2_NUM_01_SK02_Q01',
    skillId: 'G1_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '58과 72 중 더 큰 수는 어느 것인가요?',
      options: [
        { id: 'a', text: '58', isCorrect: false },
        { id: 'b', text: '72', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '십의 자리를 비교하면 5 < 7이므로 72가 58보다 더 큽니다.',
      hints: [
        '십의 자리 수를 먼저 비교해 보세요.',
        '5와 7 중 어느 것이 더 큰가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK02_Q02',
    skillId: 'G1_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '87과 83 중 더 작은 수는 어느 것인가요?',
      options: [
        { id: 'a', text: '87', isCorrect: false },
        { id: 'b', text: '83', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '십의 자리가 둘 다 8로 같으므로 일의 자리를 비교합니다. 3 < 7이므로 83이 더 작습니다.',
      hints: [
        '십의 자리가 같을 때는 일의 자리를 비교해요.',
        '3과 7 중 어느 것이 더 작은가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK02_Q03',
    skillId: 'G1_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 76보다 크고 80보다 작은 수는 어느 것인가요?',
      options: [
        { id: 'a', text: '75', isCorrect: false },
        { id: 'b', text: '78', isCorrect: true },
        { id: 'c', text: '80', isCorrect: false },
        { id: 'd', text: '82', isCorrect: false },
      ],
      explanation: '76보다 크고 80보다 작은 수는 77, 78, 79입니다. 보기 중에서는 78이 해당됩니다.',
      hints: [
        '76보다 큰 수를 찾아보세요.',
        '그 중에서 80보다 작은 수는?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['수 비교', '범위', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(3) - SK01: 받아올림이 있는 덧셈
  // ============================================================
  {
    id: 'G1_S2_NUM_02_SK01_Q01',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '7 + 5 = ?',
      questionLatex: '7 + 5 = \\square',
      correctAnswer: 12,
      explanation: '7 + 5 = 12입니다. 7에 3을 더하면 10이 되고, 나머지 2를 더하면 12예요.',
      hints: [
        '7에 얼마를 더하면 10이 되나요?',
        '7 + 3 = 10이고, 5에서 3을 쓰면 2가 남아요. 10 + 2 = ?',
      ],
      commonMistakes: [
        { answer: '11', misconception: '받아올림 계산에서 1을 빼먹었습니다. 7 + 5에서 10을 넘으므로 12가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['받아올림', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK01_Q02',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '8 + 6 = ?',
      questionLatex: '8 + 6 = \\square',
      correctAnswer: 14,
      explanation: '8 + 6 = 14입니다. 8에 2를 더하면 10, 나머지 4를 더하면 14예요.',
      hints: [
        '8에 얼마를 더하면 10이 될까요?',
        '8 + 2 = 10이고, 6 - 2 = 4이므로 10 + 4 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['받아올림', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK01_Q03',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '빵이 6개 있었는데 9개를 더 만들었습니다. 빵은 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '13개', isCorrect: false },
        { id: 'b', text: '14개', isCorrect: false },
        { id: 'c', text: '15개', isCorrect: true },
        { id: 'd', text: '16개', isCorrect: false },
      ],
      explanation: '6 + 9 = 15입니다. 6에 4를 더하면 10, 나머지 5를 더하면 15예요.',
      hints: [
        '"더 만들었다"이므로 덧셈을 해요.',
        '6 + 9에서 10을 만들어 보세요.',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['받아올림', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(3) - SK02: 받아내림이 있는 뺄셈
  // ============================================================
  {
    id: 'G1_S2_NUM_02_SK02_Q01',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '13 - 7 = ?',
      questionLatex: '13 - 7 = \\square',
      correctAnswer: 6,
      explanation: '13 - 7 = 6입니다. 13을 10과 3으로 가르고, 10 - 7 = 3, 3 + 3 = 6이에요.',
      hints: [
        '13을 10과 3으로 나누어 생각해 보세요.',
        '10에서 7을 빼면 3이에요. 3 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '4', misconception: '10 - 7 = 3까지만 계산하고 나머지 3을 더하지 않았습니다.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['받아내림', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK02_Q02',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '15 - 8 = ?',
      questionLatex: '15 - 8 = \\square',
      correctAnswer: 7,
      explanation: '15 - 8 = 7입니다. 15를 10과 5로 나누고, 10 - 8 = 2, 2 + 5 = 7이에요.',
      hints: [
        '15를 10과 5로 나누어 생각해 보세요.',
        '10 - 8 = 2이고, 2 + 5 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['받아내림', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK02_Q03',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '사탕이 11개 있었습니다. 친구에게 4개를 주었습니다. 남은 사탕은 몇 개인가요?',
      options: [
        { id: 'a', text: '6개', isCorrect: false },
        { id: 'b', text: '7개', isCorrect: true },
        { id: 'c', text: '8개', isCorrect: false },
        { id: 'd', text: '15개', isCorrect: false },
      ],
      explanation: '11 - 4 = 7입니다. "주었다"이므로 빼기를 해요.',
      hints: [
        '"주었다"이므로 뺄셈을 해요.',
        '11 - 4를 계산해 보세요. 11을 10과 1로 나누면?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['받아내림', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(3) - SK03: 세 수의 덧셈과 뺄셈
  // ============================================================
  {
    id: 'G1_S2_NUM_02_SK03_Q01',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '3 + 4 + 2 = ?',
      questionLatex: '3 + 4 + 2 = \\square',
      correctAnswer: 9,
      explanation: '앞에서부터 차례대로 계산합니다. 3 + 4 = 7, 7 + 2 = 9예요.',
      hints: [
        '먼저 앞의 두 수를 더해 보세요.',
        '3 + 4 = 7이에요. 그 다음 7 + 2 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['세 수의 계산', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK03_Q02',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '9 - 3 - 2 = ?',
      questionLatex: '9 - 3 - 2 = \\square',
      correctAnswer: 4,
      explanation: '앞에서부터 차례대로 계산합니다. 9 - 3 = 6, 6 - 2 = 4예요.',
      hints: [
        '먼저 9 - 3을 계산해 보세요.',
        '9 - 3 = 6이에요. 그 다음 6 - 2 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['세 수의 계산', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK03_Q03',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '5 + 3 - 4 = ?',
      questionLatex: '5 + 3 - 4 = \\square',
      correctAnswer: 4,
      explanation: '앞에서부터 차례대로 계산합니다. 5 + 3 = 8, 8 - 4 = 4예요.',
      hints: [
        '먼저 5 + 3을 계산하세요.',
        '5 + 3 = 8이에요. 그 다음 8 - 4 = ?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['세 수의 계산', '혼합', '1학년'],
  },

  // ============================================================
  // 단원: 시계 보기와 규칙 찾기 - SK01: 시계 보기
  // ============================================================
  {
    id: 'G1_S2_CHANGE_03_SK01_Q01',
    skillId: 'G1_S2_CHANGE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 3, 긴 바늘이 12를 가리키고 있습니다. 지금 몇 시인가요?',
      options: [
        { id: 'a', text: '12시', isCorrect: false },
        { id: 'b', text: '3시', isCorrect: true },
        { id: 'c', text: '3시 30분', isCorrect: false },
        { id: 'd', text: '12시 3분', isCorrect: false },
      ],
      explanation: '짧은 바늘이 3을, 긴 바늘이 12를 가리키면 3시 정각입니다.',
      hints: [
        '짧은 바늘이 가리키는 수가 "시"예요.',
        '긴 바늘이 12를 가리키면 "정각"이에요.',
      ],
      commonMistakes: [
        { answer: '12시', misconception: '긴 바늘이 가리키는 수를 "시"로 읽었습니다. "시"는 짧은 바늘을 보세요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['시계', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK01_Q02',
    skillId: 'G1_S2_CHANGE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 7과 8 사이, 긴 바늘이 6을 가리키고 있습니다. 지금 몇 시 몇 분인가요?',
      options: [
        { id: 'a', text: '6시 30분', isCorrect: false },
        { id: 'b', text: '7시 30분', isCorrect: true },
        { id: 'c', text: '8시 30분', isCorrect: false },
        { id: 'd', text: '7시', isCorrect: false },
      ],
      explanation: '짧은 바늘이 7과 8 사이에 있으므로 7시이고, 긴 바늘이 6을 가리키면 30분입니다. 7시 30분이에요.',
      hints: [
        '짧은 바늘이 7과 8 사이에 있으면 7시예요.',
        '긴 바늘이 6을 가리키면 30분이에요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['시계', '30분', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK01_Q03',
    skillId: 'G1_S2_CHANGE_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"긴 바늘이 12를 가리키면 몇 시 30분이다." 맞나요?',
      correctAnswer: false,
      explanation: '긴 바늘이 12를 가리키면 "정각(몇 시)"입니다. 30분은 긴 바늘이 6을 가리킬 때예요.',
      hints: [
        '긴 바늘이 12를 가리키면 정각이에요.',
        '30분일 때 긴 바늘은 어디를 가리킬까요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['시계', '1학년'],
  },

  // ============================================================
  // 단원: 시계 보기와 규칙 찾기 - SK02: 규칙 찾기
  // ============================================================
  {
    id: 'G1_S2_CHANGE_03_SK02_Q01',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 규칙에서 빈칸에 들어갈 것은 무엇인가요? ○, △, ○, △, ○, __',
      options: [
        { id: 'a', text: '○', isCorrect: false },
        { id: 'b', text: '△', isCorrect: true },
        { id: 'c', text: '□', isCorrect: false },
      ],
      explanation: '○와 △가 번갈아 나오는 규칙입니다. ○ 다음에는 △가 와야 해요.',
      hints: [
        '반복되는 부분을 찾아보세요.',
        '○, △가 반복되고 있어요. ○ 다음은?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['규칙', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK02_Q02',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수 배열에서 빈칸에 알맞은 수를 써 넣으세요. 2, 4, 6, 8, __',
      correctAnswer: 10,
      explanation: '2씩 커지는 규칙입니다. 8 다음에는 8 + 2 = 10이 와야 합니다.',
      hints: [
        '수가 얼마씩 커지고 있는지 찾아보세요.',
        '2, 4, 6, 8에서 앞의 수보다 항상 2씩 커지고 있어요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['규칙', '수 배열', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK02_Q03',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 규칙에서 빈칸에 들어갈 것은 무엇인가요? ♥, ♥, ★, ♥, ♥, ★, ♥, ♥, __',
      options: [
        { id: 'a', text: '♥', isCorrect: false },
        { id: 'b', text: '★', isCorrect: true },
        { id: 'c', text: '♦', isCorrect: false },
      ],
      explanation: '♥, ♥, ★이 반복되는 규칙입니다. ♥, ♥ 다음에는 ★이 와야 해요.',
      hints: [
        '3개씩 묶어서 살펴보세요.',
        '♥, ♥, ★ / ♥, ♥, ★ / ♥, ♥, __ 에서 빈칸은?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['규칙', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK02_Q04',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 수 배열에서 빈칸에 알맞은 수는? 10, 20, 30, __, 50',
      correctAnswer: 40,
      explanation: '10씩 커지는 규칙입니다. 30 다음에는 30 + 10 = 40이 와야 합니다.',
      hints: [
        '수가 얼마씩 커지고 있는지 찾아보세요.',
        '10, 20, 30에서 10씩 커지고 있어요. 30 + 10 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['규칙', '수 배열', '1학년'],
  },

  // ============================================================
  // ===== 추가 문제 시작 (스킬별 7문제 이상 확보) =====
  // ============================================================

  // ============================================================
  // 단원: 9까지의 수 - SK01: 1부터 9까지 세기 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_01_SK01_Q05',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -2.8,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '"하트가 ♥♥♥♥ 있으면 4개이다." 맞나요?',
      correctAnswer: true,
      explanation: '하트를 하나씩 세면 1, 2, 3, 4이므로 4개가 맞습니다.',
      hints: [
        '하트를 하나씩 세어 보세요.',
        '1, 2, 3, 4! 맞나요?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '세는 것을 잘못했을 수 있어요. 천천히 하나씩 세어 보세요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK01_Q06',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -2.3,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '달이 🌙🌙🌙🌙🌙🌙 있습니다. 달은 모두 ___개입니다.',
      correctAnswer: 6,
      explanation: '달을 하나씩 세면 1, 2, 3, 4, 5, 6이므로 6개입니다.',
      hints: [
        '왼쪽부터 하나씩 세어 보세요.',
        '1, 2, 3, 4, 5, ... 하나 더!',
      ],
      commonMistakes: [
        { answer: '5', misconception: '마지막 하나를 빠뜨렸어요. 다시 한번 세어 보세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK01_Q07',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -2.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '나비가 🦋🦋🦋🦋🦋🦋🦋🦋 있습니다. 나비는 모두 몇 마리인가요?',
      options: [
        { id: 'a', text: '6마리', isCorrect: false },
        { id: 'b', text: '7마리', isCorrect: false },
        { id: 'c', text: '8마리', isCorrect: true },
        { id: 'd', text: '9마리', isCorrect: false },
      ],
      explanation: '나비를 하나씩 세면 1, 2, 3, 4, 5, 6, 7, 8이므로 8마리입니다.',
      hints: [
        '나비를 왼쪽부터 차근차근 세어 보세요.',
        '한 손은 5마리, 나머지를 더 세어 보세요.',
      ],
      commonMistakes: [
        { answer: '7마리', misconception: '하나를 빠뜨리고 셌어요. 다시 천천히 세어 보세요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수 세기', '1학년'],
  },

  // ============================================================
  // 단원: 9까지의 수 - SK02: 9까지의 수 크기 비교 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_01_SK02_Q04',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -2.3,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '1과 9 중에서 더 큰 수는 ___입니다.',
      correctAnswer: 9,
      explanation: '9는 1보다 뒤에 나오는 수이므로 9가 더 큽니다.',
      hints: [
        '수를 세는 순서를 생각해 보세요.',
        '1, 2, 3, ..., 9에서 어느 수가 나중에 나오나요?',
      ],
      commonMistakes: [
        { answer: '1', misconception: '큰 수와 작은 수를 혼동했어요. 나중에 세는 수가 더 커요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK02_Q05',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '다음 중 가장 큰 수는 무엇인가요?',
      options: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '9', isCorrect: true },
        { id: 'c', text: '1', isCorrect: false },
        { id: 'd', text: '5', isCorrect: false },
      ],
      explanation: '1, 3, 5, 9 중에서 가장 나중에 세는 수는 9이므로 9가 가장 큽니다.',
      hints: [
        '보기의 수를 작은 것부터 순서대로 나열해 보세요.',
        '1, 3, 5, 9 중 가장 뒤에 나오는 수는?',
      ],
      commonMistakes: [
        { answer: '5', misconception: '9를 보지 못했을 수 있어요. 모든 보기를 확인하세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK02_Q06',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '6과 2 중에서 더 작은 수를 쓰세요.',
      correctAnswer: 2,
      explanation: '2는 6보다 먼저 세는 수이므로 2가 더 작습니다.',
      hints: [
        '더 먼저 세는 수가 더 작아요.',
        '1, 2, 3, 4, 5, 6에서 2가 먼저 나와요.',
      ],
      commonMistakes: [
        { answer: '6', misconception: '"더 작은 수"를 묻고 있어요. 큰 수가 아니라 작은 수를 찾아 보세요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK02_Q07',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"8은 5보다 크다." 맞나요?',
      correctAnswer: true,
      explanation: '8은 5보다 뒤에 세는 수이므로 8이 5보다 큽니다.',
      hints: [
        '수를 세는 순서를 생각해 보세요.',
        '5 다음에 6, 7, 8이 나와요. 뒤에 나오는 수가 더 커요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '크다와 작다를 반대로 생각했어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '1학년'],
  },

  // ============================================================
  // 단원: 9까지의 수 - SK03: 수의 순서 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_01_SK03_Q04',
    skillId: 'G1_S1_NUM_01_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: -2.3,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '3 바로 뒤의 수는 ___입니다.',
      correctAnswer: 4,
      explanation: '수의 순서에서 3 바로 뒤에 오는 수는 4입니다.',
      hints: [
        '3에서 하나 더 세어 보세요.',
        '1, 2, 3, ___ 빈칸에 들어갈 수는?',
      ],
      commonMistakes: [
        { answer: '2', misconception: '"뒤"를 "앞"으로 혼동했어요. 바로 뒤는 다음에 오는 수예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수의 순서', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK03_Q05',
    skillId: 'G1_S1_NUM_01_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"7 바로 앞의 수는 8이다." 맞나요?',
      correctAnswer: false,
      explanation: '7 바로 앞의 수는 6입니다. 8은 7 바로 뒤의 수예요.',
      hints: [
        '"바로 앞"은 더 작은 수 쪽이에요.',
        '..., 5, 6, 7, 8에서 7 앞에 있는 수는?',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '"앞"과 "뒤"를 반대로 생각했어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수의 순서', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK03_Q06',
    skillId: 'G1_S1_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '4, 5, __, 7에서 빈칸에 알맞은 수는?',
      correctAnswer: 6,
      explanation: '4, 5 다음에 오는 수는 6이고, 그 다음이 7입니다.',
      hints: [
        '수를 순서대로 세어 보세요.',
        '5 바로 뒤에 오는 수는?',
      ],
      commonMistakes: [
        { answer: '8', misconception: '7 다음 수를 적었어요. 5와 7 사이의 수를 찾아야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수의 순서', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK03_Q07',
    skillId: 'G1_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 수의 순서가 바른 것은?',
      options: [
        { id: 'a', text: '3, 5, 4, 6', isCorrect: false },
        { id: 'b', text: '2, 3, 4, 5', isCorrect: true },
        { id: 'c', text: '1, 3, 2, 4', isCorrect: false },
        { id: 'd', text: '7, 6, 8, 9', isCorrect: false },
      ],
      explanation: '2, 3, 4, 5는 순서대로 나열된 것입니다.',
      hints: [
        '수가 하나씩 커지는 순서를 찾아보세요.',
        '2 다음 3, 3 다음 4, 4 다음 5가 맞는지 확인하세요.',
      ],
      commonMistakes: [
        { answer: '7, 6, 8, 9', misconception: '7 다음에 6이 오면 순서가 바르지 않아요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수의 순서', '1학년'],
  },

  // ============================================================
  // 단원: 여러 가지 모양 - SK01: 입체도형의 모양 알기 (추가)
  // ============================================================
  {
    id: 'G1_S1_SHAPE_02_SK01_Q04',
    skillId: 'G1_S1_SHAPE_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"농구공은 상자 모양이다." 맞나요?',
      correctAnswer: false,
      explanation: '농구공은 어디서 보아도 둥글기 때문에 공 모양입니다.',
      hints: [
        '농구공의 생김새를 떠올려 보세요.',
        '둥글둥글한 모양은 공 모양이에요.',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '상자 모양은 네모난 면이 있는 것이에요. 농구공은 둥글어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['입체도형', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK01_Q05',
    skillId: 'G1_S1_SHAPE_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '두루마리 휴지는 ___ 모양입니다. (상자/둥근기둥/공)',
      correctAnswer: '둥근기둥',
      explanation: '두루마리 휴지는 위아래가 동그랗고 옆면이 둥근 둥근기둥 모양입니다.',
      hints: [
        '두루마리 휴지를 옆에서 보면 길쭉해요.',
        '위아래가 동그랗고 옆으로 굴러가는 모양이에요.',
      ],
      commonMistakes: [
        { answer: '공', misconception: '공 모양은 어디서 봐도 동그래요. 휴지는 위아래가 평평하고 길쭉해요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['입체도형', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK01_Q06',
    skillId: 'G1_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 공 모양인 것은?',
      options: [
        { id: 'a', text: '책', isCorrect: false },
        { id: 'b', text: '수박', isCorrect: true },
        { id: 'c', text: '연필', isCorrect: false },
        { id: 'd', text: '상자', isCorrect: false },
      ],
      explanation: '수박은 둥근 모양이므로 공 모양입니다.',
      hints: [
        '어디서 봐도 둥근 것을 찾아보세요.',
        '수박의 모양을 떠올려 보세요.',
      ],
      commonMistakes: [
        { answer: '연필', misconception: '연필은 둥근기둥 모양에 가까워요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['입체도형', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK01_Q07',
    skillId: 'G1_S1_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '상자 모양, 둥근기둥 모양, 공 모양 중 위에 물건을 가장 잘 쌓을 수 있는 모양은 무엇인가요?',
      correctAnswer: '상자 모양',
      explanation: '상자 모양은 면이 평평하여 위에 물건을 잘 쌓을 수 있습니다.',
      hints: [
        '평평한 면이 있으면 물건을 올려놓기 좋아요.',
        '공 모양 위에 물건을 올리면 어떻게 될까요?',
      ],
      commonMistakes: [
        { answer: '공 모양', misconception: '공 모양은 둥글어서 위에 물건을 올리면 굴러 떨어져요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['입체도형', '1학년'],
  },

  // ============================================================
  // 단원: 여러 가지 모양 - SK02: 모양에 따라 분류하기 (추가)
  // ============================================================
  {
    id: 'G1_S1_SHAPE_02_SK02_Q04',
    skillId: 'G1_S1_SHAPE_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '잘 쌓을 수 있고 잘 굴러가지 않는 모양은 ___ 모양입니다.',
      correctAnswer: '상자',
      explanation: '상자 모양은 면이 모두 평평해서 잘 쌓이고, 둥근 면이 없어서 잘 굴러가지 않습니다.',
      hints: [
        '평평한 면만 있는 모양은?',
        '블록처럼 쌓을 수 있는 모양이에요.',
      ],
      commonMistakes: [
        { answer: '공', misconception: '공 모양은 잘 굴러가지만 쌓기 어려워요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['모양 분류', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK02_Q05',
    skillId: 'G1_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '공, 야구공, 구슬은 어떤 모양으로 같은 무리인가요?',
      options: [
        { id: 'a', text: '상자 모양', isCorrect: false },
        { id: 'b', text: '둥근기둥 모양', isCorrect: false },
        { id: 'c', text: '공 모양', isCorrect: true },
      ],
      explanation: '공, 야구공, 구슬은 모두 어디서 봐도 둥근 공 모양입니다.',
      hints: [
        '세 물건의 공통점을 찾아보세요.',
        '모두 둥글둥글해요.',
      ],
      commonMistakes: [
        { answer: '둥근기둥 모양', misconception: '둥근기둥은 위아래가 평평하고 길쭉한 모양이에요. 공, 야구공, 구슬은 모두 둥글어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['모양 분류', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK02_Q06',
    skillId: 'G1_S1_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '휴지 롤, 음료수 캔, 크레파스는 모두 어떤 모양인가요?',
      correctAnswer: '둥근기둥 모양',
      explanation: '휴지 롤, 음료수 캔, 크레파스는 모두 위아래가 동그랗고 옆면이 둥근 둥근기둥 모양입니다.',
      hints: [
        '이 물건들의 공통점을 찾아보세요.',
        '위아래가 동그랗고 길쭉한 모양이에요.',
      ],
      commonMistakes: [
        { answer: '공 모양', misconception: '공 모양은 어디서 봐도 완전히 둥글어요. 이것들은 길쭉한 모양이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['모양 분류', '1학년'],
  },
  {
    id: 'G1_S1_SHAPE_02_SK02_Q07',
    skillId: 'G1_S1_SHAPE_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"둥근기둥 모양은 한쪽으로 잘 굴러간다." 맞나요?',
      correctAnswer: true,
      explanation: '둥근기둥 모양은 옆면이 둥글기 때문에 한쪽 방향으로 잘 굴러갑니다.',
      hints: [
        '둥근기둥 모양을 옆으로 놓으면 어떻게 될까요?',
        '음료수 캔을 옆으로 놓으면 잘 굴러가요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '둥근기둥 모양의 옆면은 둥글어서 잘 굴러가요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['모양 분류', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(1) - SK01: 모으기와 가르기 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_03_SK01_Q04',
    skillId: 'G1_S1_NUM_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -2.3,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '1과 4를 모으면 ___입니다.',
      correctAnswer: 5,
      explanation: '1과 4를 모으면 1 + 4 = 5입니다.',
      hints: [
        '1에서 4개를 더 세어 보세요.',
        '1, 2, 3, 4, 5! 모두 몇인가요?',
      ],
      commonMistakes: [
        { answer: '3', misconception: '4 - 1을 한 것 같아요. 모으기는 합하는 것이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['모으기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK01_Q05',
    skillId: 'G1_S1_NUM_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"8을 3과 5로 가를 수 있다." 맞나요?',
      correctAnswer: true,
      explanation: '3 + 5 = 8이므로 8을 3과 5로 가를 수 있습니다.',
      hints: [
        '3과 5를 모으면 얼마인가요?',
        '3 + 5 = 8이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '3 + 5를 계산해 보면 8이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['가르기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK01_Q06',
    skillId: 'G1_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '9를 6과 몇으로 가를 수 있나요?',
      correctAnswer: 3,
      explanation: '9를 6과 3으로 가를 수 있습니다. 6 + 3 = 9이기 때문입니다.',
      hints: [
        '9에서 6을 빼면 얼마가 남나요?',
        '6 + __ = 9에서 빈칸은?',
      ],
      commonMistakes: [
        { answer: '6', misconception: '9 - 3을 거꾸로 생각했어요. 9 - 6 = 3이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['가르기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK01_Q07',
    skillId: 'G1_S1_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '5를 두 수로 가르는 방법이 아닌 것은?',
      options: [
        { id: 'a', text: '1과 4', isCorrect: false },
        { id: 'b', text: '2와 3', isCorrect: false },
        { id: 'c', text: '3과 3', isCorrect: true },
        { id: 'd', text: '0과 5', isCorrect: false },
      ],
      explanation: '3 + 3 = 6이므로 5를 3과 3으로 가를 수 없습니다.',
      hints: [
        '각 두 수를 더해서 5가 되는지 확인해 보세요.',
        '3 + 3은 얼마인가요?',
      ],
      commonMistakes: [
        { answer: '0과 5', misconception: '0 + 5 = 5이므로 맞는 가르기예요. 0도 수이니까요!' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['가르기', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(1) - SK02: 합이 9 이하인 덧셈과 뺄셈 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_03_SK02_Q05',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"2 + 5 = 8이다." 맞나요?',
      correctAnswer: false,
      explanation: '2 + 5 = 7입니다. 8이 아니에요.',
      hints: [
        '2에서 시작해서 5를 더 세어 보세요.',
        '2, 3, 4, 5, 6, 7! 답은?',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '2 + 5를 다시 계산해 보세요. 2 + 5 = 7이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['덧셈', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK02_Q06',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '6 + 2 = ___',
      questionLatex: '6 + 2 = \\square',
      correctAnswer: 8,
      explanation: '6에 2를 더하면 8입니다.',
      hints: [
        '6에서 2를 더 세어 보세요.',
        '6, 7, 8! 답은?',
      ],
      commonMistakes: [
        { answer: '4', misconception: '덧셈이 아니라 뺄셈을 했어요. 6 + 2는 더하는 것이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['덧셈', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK02_Q07',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '나무에 새가 4마리 앉아 있었는데, 3마리가 더 날아왔습니다. 새는 모두 몇 마리인가요?',
      correctAnswer: 7,
      explanation: '4 + 3 = 7, 새는 모두 7마리입니다.',
      hints: [
        '"더 날아왔다"는 덧셈이에요.',
        '4 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '1', misconception: '뺄셈을 했어요. "더 날아왔다"이므로 더해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['덧셈', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(1) - SK03: 0의 덧셈과 뺄셈 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_03_SK03_Q04',
    skillId: 'G1_S1_NUM_03_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"0 + 3 = 3이다." 맞나요?',
      correctAnswer: true,
      explanation: '0에 3을 더하면 3입니다. 0은 아무것도 없다는 뜻이에요.',
      hints: [
        '아무것도 없는데 3을 더하면?',
        '0 + 아무 수 = 그 수 그대로예요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '0을 더하거나 0에 수를 더하면 그 수 그대로예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['0의 계산', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK03_Q05',
    skillId: 'G1_S1_NUM_03_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '8 - 8 = ___',
      questionLatex: '8 - 8 = \\square',
      correctAnswer: 0,
      explanation: '같은 수에서 같은 수를 빼면 0이 됩니다. 8 - 8 = 0이에요.',
      hints: [
        '과자 8개를 모두 먹으면 남는 것은?',
        '같은 수끼리 빼면 항상 0이 돼요.',
      ],
      commonMistakes: [
        { answer: '8', misconception: '빼기를 하지 않았어요. 8에서 8을 모두 빼면 아무것도 남지 않아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['0의 계산', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK03_Q06',
    skillId: 'G1_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '4 + 0 = ?',
      questionLatex: '4 + 0 = \\square',
      correctAnswer: 4,
      explanation: '어떤 수에 0을 더하면 그 수 그대로입니다. 4 + 0 = 4예요.',
      hints: [
        '0은 아무것도 없다는 뜻이에요.',
        '4에 아무것도 더하지 않으면?',
      ],
      commonMistakes: [
        { answer: '0', misconception: '4에 0을 더한 것이지, 4를 0으로 바꾼 것이 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['0의 계산', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK03_Q07',
    skillId: 'G1_S1_NUM_03_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 답이 0인 것은?',
      options: [
        { id: 'a', text: '3 + 0', isCorrect: false },
        { id: 'b', text: '5 - 0', isCorrect: false },
        { id: 'c', text: '7 - 7', isCorrect: true },
        { id: 'd', text: '0 + 9', isCorrect: false },
      ],
      explanation: '7 - 7 = 0입니다. 같은 수끼리 빼면 0이에요.',
      hints: [
        '각 식을 하나씩 계산해 보세요.',
        '같은 수끼리 빼면 0이 돼요.',
      ],
      commonMistakes: [
        { answer: '3 + 0', misconception: '3 + 0 = 3이에요. 0이 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['0의 계산', '1학년'],
  },

  // ============================================================
  // 단원: 50까지의 수 - SK01: 50까지의 수 세기 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_04_SK01_Q04',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"10이 5개이면 50이다." 맞나요?',
      correctAnswer: true,
      explanation: '10이 5개이면 10 + 10 + 10 + 10 + 10 = 50입니다.',
      hints: [
        '10씩 5번 세어 보세요.',
        '10, 20, 30, 40, 50!',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '10 × 5 = 50이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 세기', '십의 자리', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK01_Q05',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"이십삼"을 수로 쓰면 ___입니다.',
      correctAnswer: 23,
      explanation: '"이십"은 20이고 "삼"은 3이므로 20 + 3 = 23입니다.',
      hints: [
        '"이십"은 얼마인가요?',
        '20 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '32', misconception: '십의 자리와 일의 자리를 바꿨어요. "이십"이 앞(큰 수)이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 읽기 쓰기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK01_Q06',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '40은 10이 몇 개인 수인가요?',
      correctAnswer: 4,
      explanation: '40 = 10 × 4이므로 10이 4개인 수입니다.',
      hints: [
        '10씩 세어서 40이 되려면 몇 번 세야 하나요?',
        '10, 20, 30, 40 - 몇 번?',
      ],
      commonMistakes: [
        { answer: '40', misconception: '10의 개수를 묻고 있어요. 40 자체가 아니라 10이 몇 개인지 생각해 보세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 세기', '십의 자리', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK01_Q07',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '10, 20, 30, __, 50에서 빈칸에 알맞은 수는?',
      options: [
        { id: 'a', text: '35', isCorrect: false },
        { id: 'b', text: '40', isCorrect: true },
        { id: 'c', text: '45', isCorrect: false },
        { id: 'd', text: '31', isCorrect: false },
      ],
      explanation: '10씩 커지는 규칙이므로 30 다음은 40입니다.',
      hints: [
        '수가 얼마씩 커지고 있는지 찾아보세요.',
        '10, 20, 30 다음에 10을 더하면?',
      ],
      commonMistakes: [
        { answer: '35', misconception: '5씩 아니라 10씩 커지고 있어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['뛰어 세기', '1학년'],
  },

  // ============================================================
  // 단원: 50까지의 수 - SK02: 몇십 몇 알기 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_04_SK02_Q04',
    skillId: 'G1_S1_NUM_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"25에서 십의 자리 숫자는 5이다." 맞나요?',
      correctAnswer: false,
      explanation: '25에서 십의 자리 숫자는 2이고, 일의 자리 숫자가 5입니다.',
      hints: [
        '두 자리 수에서 왼쪽이 십의 자리, 오른쪽이 일의 자리예요.',
        '25에서 왼쪽 숫자는?',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '십의 자리와 일의 자리를 헷갈린 거예요. 왼쪽이 십의 자리예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['자릿값', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK02_Q05',
    skillId: 'G1_S1_NUM_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '10이 3개, 1이 6개이면 ___입니다.',
      correctAnswer: 36,
      explanation: '10이 3개이면 30, 1이 6개이면 6이므로 30 + 6 = 36입니다.',
      hints: [
        '10이 3개이면 얼마인가요?',
        '30 + 6 = ?',
      ],
      commonMistakes: [
        { answer: '63', misconception: '십의 자리와 일의 자리를 바꿨어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자릿값', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK02_Q06',
    skillId: 'G1_S1_NUM_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '47에서 일의 자리 숫자는 무엇인가요?',
      correctAnswer: 7,
      explanation: '47에서 일의 자리 숫자는 7입니다. 오른쪽 숫자가 일의 자리예요.',
      hints: [
        '두 자리 수에서 오른쪽 숫자가 일의 자리예요.',
        '47에서 오른쪽 숫자는?',
      ],
      commonMistakes: [
        { answer: '4', misconception: '십의 자리 숫자를 적었어요. 일의 자리는 오른쪽 숫자예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['자릿값', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK02_Q07',
    skillId: 'G1_S1_NUM_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 10이 4개이고 1이 1개인 수는?',
      options: [
        { id: 'a', text: '14', isCorrect: false },
        { id: 'b', text: '41', isCorrect: true },
        { id: 'c', text: '40', isCorrect: false },
        { id: 'd', text: '44', isCorrect: false },
      ],
      explanation: '10이 4개이면 40, 1이 1개이면 1이므로 40 + 1 = 41입니다.',
      hints: [
        '10이 4개이면 얼마인가요?',
        '40 + 1 = ?',
      ],
      commonMistakes: [
        { answer: '14', misconception: '4와 1을 합쳐서 14로 적었어요. 10이 "4개"이므로 40이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자릿값', '1학년'],
  },

  // ============================================================
  // 단원: 50까지의 수 - SK03: 50까지의 수 크기 비교 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_04_SK03_Q04',
    skillId: 'G1_S1_NUM_04_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"19는 21보다 크다." 맞나요?',
      correctAnswer: false,
      explanation: '19는 21보다 작습니다. 십의 자리를 비교하면 1 < 2이기 때문입니다.',
      hints: [
        '십의 자리 수를 먼저 비교해 보세요.',
        '19의 십의 자리는 1, 21의 십의 자리는 2예요.',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '일의 자리만 보면 9 > 1이지만, 십의 자리를 먼저 비교해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK03_Q05',
    skillId: 'G1_S1_NUM_04_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '38과 41 중 더 작은 수는 ___입니다.',
      correctAnswer: 38,
      explanation: '십의 자리를 비교하면 3 < 4이므로 38이 더 작습니다.',
      hints: [
        '십의 자리 수를 비교해 보세요.',
        '3과 4 중 어느 것이 더 작은가요?',
      ],
      commonMistakes: [
        { answer: '41', misconception: '"더 작은 수"를 묻고 있어요. 38이 41보다 작아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK03_Q06',
    skillId: 'G1_S1_NUM_04_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '12, 25, 31, 48 중에서 가장 큰 수는 얼마인가요?',
      correctAnswer: 48,
      explanation: '십의 자리를 비교하면 1 < 2 < 3 < 4이므로 48이 가장 큽니다.',
      hints: [
        '십의 자리가 가장 큰 수를 찾아보세요.',
        '각 수의 십의 자리: 1, 2, 3, 4 중 가장 큰 것은?',
      ],
      commonMistakes: [
        { answer: '31', misconception: '모든 수를 비교해 보세요. 48의 십의 자리가 가장 커요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK03_Q07',
    skillId: 'G1_S1_NUM_04_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '30보다 크고 35보다 작은 수는?',
      options: [
        { id: 'a', text: '29', isCorrect: false },
        { id: 'b', text: '32', isCorrect: true },
        { id: 'c', text: '35', isCorrect: false },
        { id: 'd', text: '36', isCorrect: false },
      ],
      explanation: '30보다 크고 35보다 작은 수는 31, 32, 33, 34입니다. 보기 중에서는 32가 해당됩니다.',
      hints: [
        '30보다 큰 수를 찾아보세요.',
        '그 중에서 35보다 작은 수는?',
      ],
      commonMistakes: [
        { answer: '35', misconception: '"35보다 작은"이라고 했으므로 35는 해당되지 않아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '범위', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(2) - SK01: 받아올림 없는 덧셈 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_05_SK01_Q04',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '10 + 8 = ___',
      questionLatex: '10 + 8 = \\square',
      correctAnswer: 18,
      explanation: '10에 8을 더하면 18입니다. 십의 자리 1은 그대로, 일의 자리에 8이 들어가요.',
      hints: [
        '10은 십이에요. 거기에 8을 더하면?',
        '십팔!',
      ],
      commonMistakes: [
        { answer: '80', misconception: '10과 8을 곱한 것 같아요. 더하기를 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['덧셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK01_Q05',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '"24 + 3 = 27이다." 맞나요?',
      correctAnswer: true,
      explanation: '24 + 3 = 27입니다. 십의 자리 2는 그대로, 일의 자리 4 + 3 = 7이에요.',
      hints: [
        '일의 자리끼리 더해 보세요.',
        '4 + 3 = 7이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '24 + 3을 다시 계산해 보면 27이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['덧셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK01_Q06',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '30 + 7 = ?',
      questionLatex: '30 + 7 = \\square',
      correctAnswer: 37,
      explanation: '30 + 7 = 37입니다.',
      hints: [
        '30은 삼십이에요. 거기에 7을 더하면?',
        '삼십칠!',
      ],
      commonMistakes: [
        { answer: '10', misconception: '3 + 7을 계산한 것 같아요. 30 + 7을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['덧셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK01_Q07',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '접시에 과자가 33개 있었는데 4개를 더 올렸습니다. 과자는 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '29개', isCorrect: false },
        { id: 'b', text: '37개', isCorrect: true },
        { id: 'c', text: '73개', isCorrect: false },
        { id: 'd', text: '34개', isCorrect: false },
      ],
      explanation: '33 + 4 = 37입니다.',
      hints: [
        '"더 올렸다"이므로 덧셈이에요.',
        '33 + 4에서 일의 자리: 3 + 4 = ?',
      ],
      commonMistakes: [
        { answer: '29개', misconception: '뺄셈을 했어요. "더 올렸다"이므로 더해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['덧셈', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(2) - SK02: 받아내림 없는 뺄셈 (추가)
  // ============================================================
  {
    id: 'G1_S1_NUM_05_SK02_Q04',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '28 - 5 = ___',
      questionLatex: '28 - 5 = \\square',
      correctAnswer: 23,
      explanation: '28 - 5 = 23입니다. 십의 자리 2는 그대로, 일의 자리 8 - 5 = 3이에요.',
      hints: [
        '일의 자리끼리 빼 보세요.',
        '8 - 5 = ?',
      ],
      commonMistakes: [
        { answer: '33', misconception: '빼기 대신 더하기를 했어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['뺄셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK02_Q05',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '"36 - 4 = 32이다." 맞나요?',
      correctAnswer: true,
      explanation: '36 - 4 = 32입니다. 십의 자리 3은 그대로, 일의 자리 6 - 4 = 2예요.',
      hints: [
        '일의 자리끼리 빼 보세요.',
        '6 - 4 = 2예요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '36 - 4를 다시 계산해 보면 32가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['뺄셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK02_Q06',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '45 - 2 = ?',
      questionLatex: '45 - 2 = \\square',
      correctAnswer: 43,
      explanation: '45 - 2 = 43입니다. 십의 자리 4는 그대로, 일의 자리 5 - 2 = 3이에요.',
      hints: [
        '일의 자리끼리 빼 보세요.',
        '5 - 2 = ?',
      ],
      commonMistakes: [
        { answer: '47', misconception: '뺄셈이 아니라 덧셈을 했어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['뺄셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK02_Q07',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '사탕이 39개 있었는데 7개를 먹었습니다. 남은 사탕은?',
      options: [
        { id: 'a', text: '30개', isCorrect: false },
        { id: 'b', text: '32개', isCorrect: true },
        { id: 'c', text: '46개', isCorrect: false },
        { id: 'd', text: '31개', isCorrect: false },
      ],
      explanation: '39 - 7 = 32입니다.',
      hints: [
        '"먹었다"이므로 뺄셈이에요.',
        '39 - 7에서 일의 자리: 9 - 7 = ?',
      ],
      commonMistakes: [
        { answer: '46개', misconception: '뺄셈이 아니라 덧셈을 했어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['뺄셈', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 100까지의 수 - SK01: 100까지의 수 세기 (추가)
  // ============================================================
  {
    id: 'G1_S2_NUM_01_SK01_Q04',
    skillId: 'G1_S2_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"10이 8개이면 80이다." 맞나요?',
      correctAnswer: true,
      explanation: '10이 8개이면 10 × 8 = 80입니다.',
      hints: [
        '10씩 8번 세어 보세요.',
        '10, 20, 30, 40, 50, 60, 70, 80!',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '10 × 8 = 80이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK01_Q05',
    skillId: 'G1_S2_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '"칠십육"을 수로 쓰면 ___입니다.',
      correctAnswer: 76,
      explanation: '"칠십"은 70이고 "육"은 6이므로 70 + 6 = 76입니다.',
      hints: [
        '"칠십"은 얼마인가요?',
        '70 + 6 = ?',
      ],
      commonMistakes: [
        { answer: '67', misconception: '십의 자리와 일의 자리를 바꿨어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 읽기 쓰기', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK01_Q06',
    skillId: 'G1_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '60은 10이 몇 개인 수인가요?',
      correctAnswer: 6,
      explanation: '60 = 10 × 6이므로 10이 6개인 수입니다.',
      hints: [
        '10씩 세어서 60이 되려면?',
        '10, 20, 30, 40, 50, 60 - 몇 번?',
      ],
      commonMistakes: [
        { answer: '60', misconception: '10의 개수를 묻고 있어요. 60 자체가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK01_Q07',
    skillId: 'G1_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '99보다 1 큰 수는 무엇인가요?',
      options: [
        { id: 'a', text: '98', isCorrect: false },
        { id: 'b', text: '100', isCorrect: true },
        { id: 'c', text: '109', isCorrect: false },
        { id: 'd', text: '90', isCorrect: false },
      ],
      explanation: '99보다 1 큰 수는 100입니다. 100은 "백"이라고 읽어요.',
      hints: [
        '99 다음에 오는 수를 생각해 보세요.',
        '99 + 1 = ?',
      ],
      commonMistakes: [
        { answer: '109', misconception: '99 + 10이 아니라 99 + 1을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 세기', '100', '1학년'],
  },

  // ============================================================
  // 단원: 100까지의 수 - SK02: 100까지의 수 크기 비교 (추가)
  // ============================================================
  {
    id: 'G1_S2_NUM_01_SK02_Q04',
    skillId: 'G1_S2_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"65는 56보다 크다." 맞나요?',
      correctAnswer: true,
      explanation: '십의 자리를 비교하면 6 > 5이므로 65가 56보다 큽니다.',
      hints: [
        '십의 자리 수를 비교해 보세요.',
        '6과 5 중 어느 것이 더 큰가요?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '일의 자리만 보지 말고 십의 자리를 먼저 비교하세요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK02_Q05',
    skillId: 'G1_S2_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '54, 67, 91, 73 중 가장 큰 수는 ___입니다.',
      correctAnswer: 91,
      explanation: '십의 자리를 비교하면 5 < 6 < 7 < 9이므로 91이 가장 큽니다.',
      hints: [
        '십의 자리가 가장 큰 수를 찾아보세요.',
        '9로 시작하는 수가 가장 커요.',
      ],
      commonMistakes: [
        { answer: '73', misconception: '모든 수를 비교해야 해요. 91의 십의 자리가 가장 커요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK02_Q06',
    skillId: 'G1_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '60보다 크고 63보다 작은 수를 하나 쓰세요.',
      correctAnswer: 61,
      explanation: '60보다 크고 63보다 작은 수는 61, 62입니다. 61이 정답이에요.',
      hints: [
        '60 다음에 오는 수들을 생각해 보세요.',
        '61, 62는 60보다 크고 63보다 작아요.',
      ],
      commonMistakes: [
        { answer: '60', misconception: '"60보다 크다"이므로 60은 포함되지 않아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '범위', '1학년'],
  },
  {
    id: 'G1_S2_NUM_01_SK02_Q07',
    skillId: 'G1_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수를 큰 것부터 순서대로 나열한 것은? 55, 78, 62, 90',
      options: [
        { id: 'a', text: '90, 78, 62, 55', isCorrect: true },
        { id: 'b', text: '55, 62, 78, 90', isCorrect: false },
        { id: 'c', text: '78, 90, 55, 62', isCorrect: false },
        { id: 'd', text: '90, 62, 78, 55', isCorrect: false },
      ],
      explanation: '큰 것부터 나열하면 90, 78, 62, 55입니다.',
      hints: [
        '가장 큰 수부터 찾아보세요.',
        '십의 자리가 9, 7, 6, 5 순서예요.',
      ],
      commonMistakes: [
        { answer: '55, 62, 78, 90', misconception: '이것은 작은 것부터 나열한 것이에요. "큰 것부터"라고 했어요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수 비교', '순서', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(3) - SK01: 받아올림이 있는 덧셈 (추가)
  // ============================================================
  {
    id: 'G1_S2_NUM_02_SK01_Q04',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '9 + 4 = ___',
      questionLatex: '9 + 4 = \\square',
      correctAnswer: 13,
      explanation: '9 + 4 = 13입니다. 9에 1을 더하면 10이 되고, 나머지 3을 더하면 13이에요.',
      hints: [
        '9에 얼마를 더하면 10이 되나요?',
        '9 + 1 = 10이고, 4에서 1을 쓰면 3이 남아요. 10 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '12', misconception: '10을 만든 후 나머지를 잘못 더했어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['받아올림', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK01_Q05',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"5 + 7 = 13이다." 맞나요?',
      correctAnswer: false,
      explanation: '5 + 7 = 12입니다. 13이 아니에요.',
      hints: [
        '5에 5를 더하면 10이에요.',
        '7 - 5 = 2이므로 10 + 2 = 12예요.',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '5 + 7을 다시 계산해 보세요. 5 + 7 = 12예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['받아올림', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK01_Q06',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '4 + 8 = ?',
      questionLatex: '4 + 8 = \\square',
      correctAnswer: 12,
      explanation: '4 + 8 = 12입니다. 4에 6을 더하면 10, 나머지 2를 더하면 12예요.',
      hints: [
        '10을 만들어 보세요.',
        '4 + 6 = 10이고, 8 - 6 = 2이므로 10 + 2 = ?',
      ],
      commonMistakes: [
        { answer: '11', misconception: '계산을 다시 해 보세요. 4 + 8 = 12예요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['받아올림', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK01_Q07',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '주머니에 구슬이 7개 있었는데 8개를 더 넣었습니다. 구슬은 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '13개', isCorrect: false },
        { id: 'b', text: '14개', isCorrect: false },
        { id: 'c', text: '15개', isCorrect: true },
        { id: 'd', text: '16개', isCorrect: false },
      ],
      explanation: '7 + 8 = 15입니다.',
      hints: [
        '"더 넣었다"이므로 덧셈이에요.',
        '7 + 3 = 10이고 8 - 3 = 5이므로 10 + 5 = ?',
      ],
      commonMistakes: [
        { answer: '13개', misconception: '7 + 8을 다시 계산해 보세요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['받아올림', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(3) - SK02: 받아내림이 있는 뺄셈 (추가)
  // ============================================================
  {
    id: 'G1_S2_NUM_02_SK02_Q04',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '12 - 5 = ___',
      questionLatex: '12 - 5 = \\square',
      correctAnswer: 7,
      explanation: '12 - 5 = 7입니다. 12를 10과 2로 나누고, 10 - 5 = 5, 5 + 2 = 7이에요.',
      hints: [
        '12를 10과 2로 나누어 생각해 보세요.',
        '10 - 5 = 5이고, 5 + 2 = ?',
      ],
      commonMistakes: [
        { answer: '3', misconception: '10 - 5 = 5까지만 계산하고 2를 빼버렸어요. 더해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['받아내림', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK02_Q05',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"14 - 6 = 8이다." 맞나요?',
      correctAnswer: true,
      explanation: '14 - 6 = 8입니다. 14를 10과 4로 나누고, 10 - 6 = 4, 4 + 4 = 8이에요.',
      hints: [
        '14를 10과 4로 나누어 생각해 보세요.',
        '10 - 6 = 4이고, 4 + 4 = 8이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '14 - 6을 다시 계산해 보면 8이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['받아내림', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK02_Q06',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '16 - 9 = ?',
      questionLatex: '16 - 9 = \\square',
      correctAnswer: 7,
      explanation: '16 - 9 = 7입니다.',
      hints: [
        '16을 10과 6으로 나누어 생각해 보세요.',
        '10 - 9 = 1이고, 1 + 6 = 7이에요.',
      ],
      commonMistakes: [
        { answer: '5', misconception: '계산이 틀렸어요. 10 - 9 = 1, 1 + 6 = 7이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['받아내림', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK02_Q07',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '과자가 17개 있었는데 9개를 먹었습니다. 남은 과자는?',
      options: [
        { id: 'a', text: '6개', isCorrect: false },
        { id: 'b', text: '8개', isCorrect: true },
        { id: 'c', text: '9개', isCorrect: false },
        { id: 'd', text: '26개', isCorrect: false },
      ],
      explanation: '17 - 9 = 8입니다.',
      hints: [
        '"먹었다"이므로 뺄셈이에요.',
        '17 - 9를 계산해 보세요.',
      ],
      commonMistakes: [
        { answer: '26개', misconception: '뺄셈이 아니라 덧셈을 했어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['받아내림', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈(3) - SK03: 세 수의 덧셈과 뺄셈 (추가)
  // ============================================================
  {
    id: 'G1_S2_NUM_02_SK03_Q04',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '2 + 5 + 1 = ___',
      questionLatex: '2 + 5 + 1 = \\square',
      correctAnswer: 8,
      explanation: '앞에서부터 계산합니다. 2 + 5 = 7, 7 + 1 = 8이에요.',
      hints: [
        '먼저 2 + 5를 계산하세요.',
        '7 + 1 = ?',
      ],
      commonMistakes: [
        { answer: '6', misconception: '5 + 1만 더하고 2를 빼먹었어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 수의 계산', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK03_Q05',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"8 - 2 - 3 = 3이다." 맞나요?',
      correctAnswer: true,
      explanation: '8 - 2 = 6, 6 - 3 = 3입니다.',
      hints: [
        '먼저 8 - 2를 계산하세요.',
        '6 - 3 = ?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '8 - 2 - 3을 다시 계산해 보면 3이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 수의 계산', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK03_Q06',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '7 - 2 + 4 = ?',
      questionLatex: '7 - 2 + 4 = \\square',
      correctAnswer: 9,
      explanation: '앞에서부터 계산합니다. 7 - 2 = 5, 5 + 4 = 9예요.',
      hints: [
        '먼저 7 - 2를 계산하세요.',
        '5 + 4 = ?',
      ],
      commonMistakes: [
        { answer: '1', misconception: '2 + 4 = 6을 먼저 계산하고 7 - 6을 한 것 같아요. 앞에서부터 차례대로 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 수의 계산', '혼합', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK03_Q07',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '사과 4개, 배 3개, 귤 2개가 있습니다. 과일은 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '7개', isCorrect: false },
        { id: 'b', text: '8개', isCorrect: false },
        { id: 'c', text: '9개', isCorrect: true },
        { id: 'd', text: '10개', isCorrect: false },
      ],
      explanation: '4 + 3 + 2 = 9개입니다.',
      hints: [
        '세 수를 모두 더해 보세요.',
        '4 + 3 = 7이고, 7 + 2 = ?',
      ],
      commonMistakes: [
        { answer: '7개', misconception: '귤 2개를 빼먹었어요. 세 가지 과일을 모두 더해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['세 수의 계산', '서술형', '1학년'],
  },

  // ============================================================
  // 단원: 시계 보기와 규칙 찾기 - SK01: 시계 보기 (추가)
  // ============================================================
  {
    id: 'G1_S2_CHANGE_03_SK01_Q04',
    skillId: 'G1_S2_CHANGE_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 5, 긴 바늘이 12를 가리키면 ___시입니다.',
      correctAnswer: 5,
      explanation: '짧은 바늘이 5, 긴 바늘이 12를 가리키면 5시 정각입니다.',
      hints: [
        '짧은 바늘이 가리키는 수가 "시"예요.',
        '긴 바늘이 12를 가리키면 정각이에요.',
      ],
      commonMistakes: [
        { answer: '12', misconception: '긴 바늘이 아니라 짧은 바늘이 "시"를 알려줘요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시계', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK01_Q05',
    skillId: 'G1_S2_CHANGE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 10과 11 사이, 긴 바늘이 6을 가리키면 몇 시 몇 분인가요?',
      options: [
        { id: 'a', text: '10시', isCorrect: false },
        { id: 'b', text: '10시 30분', isCorrect: true },
        { id: 'c', text: '11시 30분', isCorrect: false },
        { id: 'd', text: '6시 10분', isCorrect: false },
      ],
      explanation: '짧은 바늘이 10과 11 사이이면 10시이고, 긴 바늘이 6을 가리키면 30분입니다.',
      hints: [
        '짧은 바늘이 10과 11 사이이면 10시예요.',
        '긴 바늘이 6을 가리키면 30분이에요.',
      ],
      commonMistakes: [
        { answer: '11시 30분', misconception: '짧은 바늘이 10과 11 사이이면 아직 10시예요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['시계', '30분', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK01_Q06',
    skillId: 'G1_S2_CHANGE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 1, 긴 바늘이 12를 가리키면 몇 시인가요?',
      correctAnswer: 1,
      explanation: '짧은 바늘이 1, 긴 바늘이 12를 가리키면 1시 정각입니다.',
      hints: [
        '짧은 바늘이 가리키는 수를 읽어 보세요.',
        '긴 바늘이 12이면 정각이에요.',
      ],
      commonMistakes: [
        { answer: '12', misconception: '"시"는 짧은 바늘이 알려줘요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시계', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK01_Q07',
    skillId: 'G1_S2_CHANGE_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"짧은 바늘이 9와 10 사이, 긴 바늘이 6을 가리키면 9시 30분이다." 맞나요?',
      correctAnswer: true,
      explanation: '짧은 바늘이 9와 10 사이이면 9시이고, 긴 바늘이 6이면 30분이므로 9시 30분입니다.',
      hints: [
        '짧은 바늘로 "시"를 읽어 보세요.',
        '긴 바늘이 6이면 30분이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '짧은 바늘이 9와 10 사이이면 9시가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시계', '30분', '1학년'],
  },

  // ============================================================
  // 단원: 시계 보기와 규칙 찾기 - SK02: 규칙 찾기 (추가)
  // ============================================================
  {
    id: 'G1_S2_CHANGE_03_SK02_Q05',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '1, 3, 5, 7, ___에서 빈칸에 알맞은 수는?',
      correctAnswer: 9,
      explanation: '2씩 커지는 규칙입니다. 7 + 2 = 9가 빈칸에 들어갑니다.',
      hints: [
        '수가 얼마씩 커지고 있는지 찾아보세요.',
        '3 - 1 = 2, 5 - 3 = 2, 7 - 5 = 2이에요. 7 + 2 = ?',
      ],
      commonMistakes: [
        { answer: '8', misconception: '2씩 커지는 규칙이에요. 1씩이 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['규칙', '수 배열', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK02_Q06',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"□, ○, □, ○, □, ○에서 □와 ○가 반복되는 규칙이다." 맞나요?',
      correctAnswer: true,
      explanation: '□, ○가 번갈아 반복되고 있으므로 맞습니다.',
      hints: [
        '반복되는 부분을 찾아보세요.',
        '□, ○ / □, ○ / □, ○ 로 묶을 수 있어요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '□와 ○가 번갈아 나오는 규칙이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['규칙', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK02_Q07',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '5, 10, 15, 20, __에서 빈칸에 알맞은 수는?',
      options: [
        { id: 'a', text: '21', isCorrect: false },
        { id: 'b', text: '25', isCorrect: true },
        { id: 'c', text: '30', isCorrect: false },
        { id: 'd', text: '22', isCorrect: false },
      ],
      explanation: '5씩 커지는 규칙입니다. 20 + 5 = 25가 빈칸에 들어갑니다.',
      hints: [
        '수가 얼마씩 커지는지 찾아보세요.',
        '10 - 5 = 5, 15 - 10 = 5, 20 + 5 = ?',
      ],
      commonMistakes: [
        { answer: '30', misconception: '10씩이 아니라 5씩 커지는 규칙이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['규칙', '수 배열', '1학년'],
  },

  // ============================================================
  // ===== 추가 문제 2차 (150문제 달성용, 다양한 스킬 보충) =====
  // ============================================================
  {
    id: 'G1_S1_NUM_01_SK01_Q08',
    skillId: 'G1_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -2.5,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '풍선이 🎈🎈 있습니다. 풍선은 몇 개인가요?',
      options: [
        { id: 'a', text: '1개', isCorrect: false },
        { id: 'b', text: '2개', isCorrect: true },
        { id: 'c', text: '3개', isCorrect: false },
        { id: 'd', text: '4개', isCorrect: false },
      ],
      explanation: '풍선을 하나씩 세면 1, 2이므로 2개입니다.',
      hints: [
        '풍선을 하나씩 세어 보세요.',
        '1, 2! 모두 몇 개인가요?',
      ],
      commonMistakes: [
        { answer: '3개', misconception: '풍선은 2개예요. 다시 세어 보세요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 세기', '1학년'],
  },
  {
    id: 'G1_S1_NUM_01_SK02_Q08',
    skillId: 'G1_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '4와 8 중에서 더 큰 수는 무엇인가요?',
      correctAnswer: 8,
      explanation: '8은 4보다 뒤에 나오는 수이므로 8이 더 큽니다.',
      hints: [
        '수를 세는 순서를 떠올려 보세요.',
        '4, 5, 6, 7, 8에서 어떤 수가 나중에 나오나요?',
      ],
      commonMistakes: [
        { answer: '4', misconception: '나중에 세는 수가 더 큰 수예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '1학년'],
  },
  {
    id: 'G1_S1_NUM_03_SK02_Q08',
    skillId: 'G1_S1_NUM_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '1 + 8 = ___',
      questionLatex: '1 + 8 = \\square',
      correctAnswer: 9,
      explanation: '1 + 8 = 9입니다.',
      hints: [
        '1에서 8을 더 세어 보세요.',
        '1, 2, 3, 4, 5, 6, 7, 8, 9!',
      ],
      commonMistakes: [
        { answer: '7', misconception: '뺄셈이 아니라 덧셈이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['덧셈', '1학년'],
  },
  {
    id: 'G1_S1_NUM_04_SK01_Q08',
    skillId: 'G1_S1_NUM_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '10이 2개이면 얼마인가요?',
      correctAnswer: 20,
      explanation: '10이 2개이면 10 + 10 = 20입니다.',
      hints: [
        '10씩 2번 세어 보세요.',
        '10, 20!',
      ],
      commonMistakes: [
        { answer: '12', misconception: '10이 1개와 2를 합한 것이 아니라, 10이 2개이므로 20이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 세기', '십의 자리', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK01_Q08',
    skillId: 'G1_S1_NUM_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '15 + 4 = ?',
      questionLatex: '15 + 4 = \\square',
      correctAnswer: 19,
      explanation: '15 + 4 = 19입니다. 십의 자리 1은 그대로, 일의 자리 5 + 4 = 9예요.',
      hints: [
        '일의 자리끼리 더하면 5 + 4 = ?',
        '십의 자리 1은 그대로예요.',
      ],
      commonMistakes: [
        { answer: '11', misconception: '뺄셈을 했어요. 더하기를 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['덧셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S1_NUM_05_SK02_Q08',
    skillId: 'G1_S1_NUM_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '26 - 4 = ?',
      questionLatex: '26 - 4 = \\square',
      correctAnswer: 22,
      explanation: '26 - 4 = 22입니다. 십의 자리 2는 그대로, 일의 자리 6 - 4 = 2예요.',
      hints: [
        '일의 자리끼리 빼면 6 - 4 = ?',
        '십의 자리 2는 그대로예요.',
      ],
      commonMistakes: [
        { answer: '30', misconception: '뺄셈이 아니라 덧셈을 했어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['뺄셈', '두 자리 수', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK01_Q08',
    skillId: 'G1_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '6 + 7 = ?',
      questionLatex: '6 + 7 = \\square',
      correctAnswer: 13,
      explanation: '6 + 7 = 13입니다. 6에 4를 더하면 10이 되고, 나머지 3을 더하면 13이에요.',
      hints: [
        '6에 얼마를 더하면 10이 되나요?',
        '6 + 4 = 10이고, 7 - 4 = 3이므로 10 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '12', misconception: '6 + 7을 다시 계산해 보세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['받아올림', '덧셈', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK02_Q08',
    skillId: 'G1_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '11 - 5 = ?',
      questionLatex: '11 - 5 = \\square',
      correctAnswer: 6,
      explanation: '11 - 5 = 6입니다. 11을 10과 1로 나누고, 10 - 5 = 5, 5 + 1 = 6이에요.',
      hints: [
        '11을 10과 1로 나누어 생각해 보세요.',
        '10 - 5 = 5이고, 5 + 1 = ?',
      ],
      commonMistakes: [
        { answer: '5', misconception: '10 - 5 = 5까지만 하고 나머지 1을 더하지 않았어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['받아내림', '뺄셈', '1학년'],
  },
  {
    id: 'G1_S2_CHANGE_03_SK02_Q08',
    skillId: 'G1_S2_CHANGE_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '10, 8, 6, 4, ___에서 빈칸에 알맞은 수는?',
      correctAnswer: 2,
      explanation: '2씩 작아지는 규칙입니다. 4 - 2 = 2가 빈칸에 들어갑니다.',
      hints: [
        '수가 얼마씩 작아지고 있는지 찾아보세요.',
        '10, 8, 6, 4에서 2씩 작아지고 있어요. 4 - 2 = ?',
      ],
      commonMistakes: [
        { answer: '3', misconception: '1씩이 아니라 2씩 작아지는 규칙이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['규칙', '수 배열', '1학년'],
  },
  {
    id: 'G1_S2_NUM_02_SK03_Q08',
    skillId: 'G1_S2_NUM_02_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1 + 2 + 3 = ?',
      options: [
        { id: 'a', text: '5', isCorrect: false },
        { id: 'b', text: '6', isCorrect: true },
        { id: 'c', text: '7', isCorrect: false },
        { id: 'd', text: '4', isCorrect: false },
      ],
      explanation: '1 + 2 = 3이고, 3 + 3 = 6입니다.',
      hints: [
        '먼저 1 + 2를 계산하세요.',
        '3 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '5', misconception: '1 + 2 + 3을 다시 계산해 보세요. 1 + 2 = 3, 3 + 3 = 6이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 수의 계산', '덧셈', '1학년'],
  },
];
