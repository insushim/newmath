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
];
