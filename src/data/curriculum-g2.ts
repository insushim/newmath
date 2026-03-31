// ============================================================
// MathVerse 2학년 커리큘럼 시드 데이터
// 2022 개정 교육과정 기반
// ============================================================
import type { SeedUnit, SeedSkill, SeedQuestion } from './curriculum-types';

// ============================================================
// 2학년 단원 정의
// ============================================================
export const G2_UNITS: SeedUnit[] = [
  // === 2학년 1학기 ===
  {
    id: 'G2_S1_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 2,
    semester: 1,
    code: 'G2_S1_01',
    nameKo: '세 자리 수',
    descriptionKo: '100부터 999까지의 세 자리 수를 이해하고, 읽고, 쓸 수 있습니다.',
    sortOrder: 1,
  },
  {
    id: 'G2_S1_SHAPE_02',
    domainCode: 'SHAPE_MEAS',
    grade: 2,
    semester: 1,
    code: 'G2_S1_02',
    nameKo: '여러 가지 도형',
    descriptionKo: '삼각형, 사각형, 원의 개념을 이해하고 구별합니다.',
    sortOrder: 2,
  },
  {
    id: 'G2_S1_NUM_03',
    domainCode: 'NUM_OPS',
    grade: 2,
    semester: 1,
    code: 'G2_S1_03',
    nameKo: '덧셈과 뺄셈',
    descriptionKo: '두 자리 수의 덧셈과 뺄셈을 할 수 있습니다.',
    sortOrder: 3,
  },
  {
    id: 'G2_S1_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 2,
    semester: 1,
    code: 'G2_S1_04',
    nameKo: '길이 재기',
    descriptionKo: 'cm 단위를 이해하고 길이를 재고 어림할 수 있습니다.',
    sortOrder: 4,
  },
  {
    id: 'G2_S1_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 2,
    semester: 1,
    code: 'G2_S1_05',
    nameKo: '분류하기',
    descriptionKo: '기준에 따라 사물을 분류하고 세어 봅니다.',
    sortOrder: 5,
  },
  // === 2학년 2학기 ===
  {
    id: 'G2_S2_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 2,
    semester: 2,
    code: 'G2_S2_01',
    nameKo: '네 자리 수',
    descriptionKo: '1000부터 9999까지의 네 자리 수를 이해하고 크기를 비교합니다.',
    sortOrder: 6,
  },
  {
    id: 'G2_S2_NUM_02',
    domainCode: 'NUM_OPS',
    grade: 2,
    semester: 2,
    code: 'G2_S2_02',
    nameKo: '곱셈구구',
    descriptionKo: '곱셈의 의미를 이해하고 곱셈구구를 익힙니다.',
    sortOrder: 7,
  },
  {
    id: 'G2_S2_SHAPE_03',
    domainCode: 'SHAPE_MEAS',
    grade: 2,
    semester: 2,
    code: 'G2_S2_03',
    nameKo: '길이 재기',
    descriptionKo: 'm 단위를 알고, cm와 m의 관계를 이해합니다.',
    sortOrder: 8,
  },
  {
    id: 'G2_S2_CHANGE_04',
    domainCode: 'CHANGE_REL',
    grade: 2,
    semester: 2,
    code: 'G2_S2_04',
    nameKo: '시각과 시간',
    descriptionKo: '몇 시 몇 분을 읽고, 시간의 흐름을 이해합니다.',
    sortOrder: 9,
  },
  {
    id: 'G2_S2_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 2,
    semester: 2,
    code: 'G2_S2_05',
    nameKo: '표와 그래프',
    descriptionKo: '자료를 표와 그래프로 나타내고 해석합니다.',
    sortOrder: 10,
  },
];

// ============================================================
// 2학년 스킬 정의
// ============================================================
export const G2_SKILLS: SeedSkill[] = [
  // --- 세 자리 수 ---
  {
    id: 'G2_S1_NUM_01_SK01',
    unitId: 'G2_S1_NUM_01',
    code: 'hundreds',
    nameKo: '백의 자리 이해',
    descriptionKo: '100, 200, ..., 900 등 백의 자리를 이해할 수 있다.',
    defaultDifficulty: -1.5,
    sortOrder: 1,
    conceptExplanation: '10이 10개이면 100이에요. 100이 1개이면 백, 100이 2개이면 이백(200)이에요.',
  },
  {
    id: 'G2_S1_NUM_01_SK02',
    unitId: 'G2_S1_NUM_01',
    code: 'three_digit_rw',
    nameKo: '세 자리 수 읽고 쓰기',
    descriptionKo: '세 자리 수를 읽고, 쓰고, 자릿값을 이해할 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 2,
    conceptExplanation: '세 자리 수는 백의 자리, 십의 자리, 일의 자리로 이루어져 있어요. 예: 365 = 300 + 60 + 5',
  },
  {
    id: 'G2_S1_NUM_01_SK03',
    unitId: 'G2_S1_NUM_01',
    code: 'three_digit_compare',
    nameKo: '세 자리 수 크기 비교',
    descriptionKo: '세 자리 수의 크기를 비교할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 3,
    conceptExplanation: '세 자리 수의 크기를 비교할 때는 백의 자리부터 비교합니다. 백의 자리가 같으면 십의 자리, 그것도 같으면 일의 자리를 비교해요.',
  },
  // --- 여러 가지 도형 ---
  {
    id: 'G2_S1_SHAPE_02_SK01',
    unitId: 'G2_S1_SHAPE_02',
    code: 'plane_shapes',
    nameKo: '삼각형, 사각형, 원 알기',
    descriptionKo: '삼각형, 사각형, 원을 구별하고 특징을 말할 수 있다.',
    defaultDifficulty: -1.5,
    sortOrder: 1,
    conceptExplanation: '삼각형은 곧은 선 3개로 둘러싸인 도형, 사각형은 곧은 선 4개로 둘러싸인 도형, 원은 둥근 선으로 이루어진 도형이에요.',
  },
  {
    id: 'G2_S1_SHAPE_02_SK02',
    unitId: 'G2_S1_SHAPE_02',
    code: 'shape_sides_vertices',
    nameKo: '변과 꼭짓점',
    descriptionKo: '도형의 변과 꼭짓점의 수를 알 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 2,
    conceptExplanation: '곧은 선 부분을 "변"이라고 하고, 변과 변이 만나는 점을 "꼭짓점"이라고 해요. 삼각형은 변 3개, 꼭짓점 3개이고, 사각형은 변 4개, 꼭짓점 4개예요.',
  },
  // --- 덧셈과 뺄셈 ---
  {
    id: 'G2_S1_NUM_03_SK01',
    unitId: 'G2_S1_NUM_03',
    code: 'add_two_digit',
    nameKo: '두 자리 수 + 두 자리 수',
    descriptionKo: '받아올림이 있는 두 자리 수의 덧셈을 할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '일의 자리끼리 더해서 10 이상이 되면 십의 자리로 올려요. 예: 37 + 45에서 7 + 5 = 12이므로 일의 자리에 2, 십의 자리에 1을 올려 3 + 4 + 1 = 8. 답은 82예요.',
  },
  {
    id: 'G2_S1_NUM_03_SK02',
    unitId: 'G2_S1_NUM_03',
    code: 'sub_two_digit',
    nameKo: '두 자리 수 - 두 자리 수',
    descriptionKo: '받아내림이 있는 두 자리 수의 뺄셈을 할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 2,
    conceptExplanation: '일의 자리에서 뺄 수 없으면 십의 자리에서 10을 빌려와요. 예: 52 - 28에서 2에서 8을 뺄 수 없으니 십의 자리에서 10을 빌려 12 - 8 = 4, 4 - 2 = 2. 답은 24예요.',
  },
  {
    id: 'G2_S1_NUM_03_SK03',
    unitId: 'G2_S1_NUM_03',
    code: 'add_sub_word',
    nameKo: '덧셈과 뺄셈 문장제',
    descriptionKo: '문장을 읽고 덧셈 또는 뺄셈을 판단하여 해결할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 3,
    conceptExplanation: '"합하면", "모두", "더했다" 같은 말이 나오면 덧셈이에요. "남았다", "빼면", "차이" 같은 말이 나오면 뺄셈이에요.',
  },
  // --- 길이 재기 (1학기) ---
  {
    id: 'G2_S1_SHAPE_04_SK01',
    unitId: 'G2_S1_SHAPE_04',
    code: 'cm_measure',
    nameKo: 'cm로 길이 재기',
    descriptionKo: '자를 사용하여 cm 단위로 길이를 잴 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 1,
    conceptExplanation: '길이의 단위 중 하나는 cm(센티미터)예요. 1cm는 손톱 너비 정도의 길이예요. 자의 눈금을 읽어 길이를 잴 수 있어요.',
  },
  {
    id: 'G2_S1_SHAPE_04_SK02',
    unitId: 'G2_S1_SHAPE_04',
    code: 'cm_estimate',
    nameKo: '길이 어림하기',
    descriptionKo: '물건의 길이를 어림하고 실제로 재어 확인할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 2,
    conceptExplanation: '어림은 대략적인 길이를 짐작하는 것이에요. 알고 있는 길이를 기준으로 비교하면 어림할 수 있어요.',
  },
  // --- 분류하기 ---
  {
    id: 'G2_S1_DATA_05_SK01',
    unitId: 'G2_S1_DATA_05',
    code: 'classify',
    nameKo: '기준에 따라 분류하기',
    descriptionKo: '주어진 기준에 따라 사물을 분류할 수 있다.',
    defaultDifficulty: -1.0,
    sortOrder: 1,
    conceptExplanation: '분류는 같은 특징을 가진 것끼리 나누는 것이에요. 색깔, 모양, 크기 등 여러 가지 기준으로 분류할 수 있어요.',
  },
  {
    id: 'G2_S1_DATA_05_SK02',
    unitId: 'G2_S1_DATA_05',
    code: 'count_classify',
    nameKo: '분류하여 세기',
    descriptionKo: '분류한 결과를 세어 보고 비교할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 2,
    conceptExplanation: '분류한 후 각 묶음의 수를 세면 어떤 것이 가장 많고 적은지 알 수 있어요.',
  },
  // --- 네 자리 수 ---
  {
    id: 'G2_S2_NUM_01_SK01',
    unitId: 'G2_S2_NUM_01',
    code: 'thousands',
    nameKo: '천의 자리 이해',
    descriptionKo: '1000 이상의 수를 이해하고, 천의 자리를 알 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '100이 10개이면 1000이에요. 1000은 "천"이라고 읽어요. 1000이 2개이면 2000(이천)이에요.',
  },
  {
    id: 'G2_S2_NUM_01_SK02',
    unitId: 'G2_S2_NUM_01',
    code: 'four_digit_rw',
    nameKo: '네 자리 수 읽고 쓰기',
    descriptionKo: '네 자리 수를 읽고, 쓰고, 자릿값을 이해할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 2,
    conceptExplanation: '네 자리 수는 천의 자리, 백의 자리, 십의 자리, 일의 자리로 이루어져 있어요. 예: 4527 = 4000 + 500 + 20 + 7',
  },
  {
    id: 'G2_S2_NUM_01_SK03',
    unitId: 'G2_S2_NUM_01',
    code: 'four_digit_compare',
    nameKo: '네 자리 수 크기 비교',
    descriptionKo: '네 자리 수의 크기를 비교할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 3,
    conceptExplanation: '네 자리 수의 크기를 비교할 때는 천의 자리부터 차례로 비교합니다.',
  },
  // --- 곱셈구구 ---
  {
    id: 'G2_S2_NUM_02_SK01',
    unitId: 'G2_S2_NUM_02',
    code: 'mult_concept',
    nameKo: '곱셈의 의미',
    descriptionKo: '같은 수를 여러 번 더하는 것이 곱셈임을 이해할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '같은 수를 여러 번 더할 때 곱셈을 사용해요. 예: 3 + 3 + 3 + 3 = 3 × 4 = 12. "곱하기" 기호 ×를 사용해요.',
  },
  {
    id: 'G2_S2_NUM_02_SK02',
    unitId: 'G2_S2_NUM_02',
    code: 'mult_2_5',
    nameKo: '2, 5의 단 곱셈구구',
    descriptionKo: '2의 단과 5의 단 곱셈구구를 외울 수 있다.',
    defaultDifficulty: -0.3,
    sortOrder: 2,
    conceptExplanation: '2의 단: 2, 4, 6, 8, 10, 12, 14, 16, 18. 5의 단: 5, 10, 15, 20, 25, 30, 35, 40, 45. 규칙을 찾아보세요!',
  },
  {
    id: 'G2_S2_NUM_02_SK03',
    unitId: 'G2_S2_NUM_02',
    code: 'mult_3_6_9',
    nameKo: '3, 6, 9의 단 곱셈구구',
    descriptionKo: '3, 6, 9의 단 곱셈구구를 외울 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 3,
    conceptExplanation: '3의 단은 3씩, 6의 단은 6씩, 9의 단은 9씩 커져요. 곱셈구구를 외우면 계산이 빨라져요.',
  },
  {
    id: 'G2_S2_NUM_02_SK04',
    unitId: 'G2_S2_NUM_02',
    code: 'mult_4_7_8',
    nameKo: '4, 7, 8의 단 곱셈구구',
    descriptionKo: '4, 7, 8의 단 곱셈구구를 외울 수 있다.',
    defaultDifficulty: 0.3,
    sortOrder: 4,
    conceptExplanation: '4의 단은 4씩, 7의 단은 7씩, 8의 단은 8씩 커져요. 이미 배운 다른 단과 연결해서 외우면 편해요.',
  },
  // --- 길이 재기 (2학기) ---
  {
    id: 'G2_S2_SHAPE_03_SK01',
    unitId: 'G2_S2_SHAPE_03',
    code: 'm_measure',
    nameKo: 'm 단위 이해',
    descriptionKo: 'm(미터) 단위를 알고, 1m = 100cm임을 이해할 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '긴 길이를 잴 때는 m(미터) 단위를 사용해요. 1m = 100cm예요. 양팔을 벌린 길이가 약 1m 정도예요.',
  },
  {
    id: 'G2_S2_SHAPE_03_SK02',
    unitId: 'G2_S2_SHAPE_03',
    code: 'cm_m_convert',
    nameKo: 'cm와 m 변환',
    descriptionKo: 'cm와 m를 서로 변환할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 2,
    conceptExplanation: '1m = 100cm이므로, 200cm = 2m, 3m = 300cm예요. m를 cm로 바꿀 때는 100을 곱하고, cm를 m로 바꿀 때는 100으로 나눠요.',
  },
  // --- 시각과 시간 ---
  {
    id: 'G2_S2_CHANGE_04_SK01',
    unitId: 'G2_S2_CHANGE_04',
    code: 'read_minutes',
    nameKo: '몇 시 몇 분 읽기',
    descriptionKo: '시계에서 몇 시 몇 분을 정확히 읽을 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '짧은 바늘이 "시"를 나타내고, 긴 바늘이 "분"을 나타내요. 긴 바늘이 숫자 1을 가리키면 5분, 2를 가리키면 10분이에요.',
  },
  {
    id: 'G2_S2_CHANGE_04_SK02',
    unitId: 'G2_S2_CHANGE_04',
    code: 'time_duration',
    nameKo: '시간의 흐름',
    descriptionKo: '1시간 = 60분을 알고, 시간의 흐름을 이해할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 2,
    conceptExplanation: '1시간은 60분이에요. 2시에서 1시간이 지나면 3시, 30분이 지나면 2시 30분이에요.',
  },
  // --- 표와 그래프 ---
  {
    id: 'G2_S2_DATA_05_SK01',
    unitId: 'G2_S2_DATA_05',
    code: 'table_read',
    nameKo: '표 읽기',
    descriptionKo: '자료를 정리한 표를 읽을 수 있다.',
    defaultDifficulty: -0.5,
    sortOrder: 1,
    conceptExplanation: '표는 자료를 보기 쉽게 정리한 것이에요. 행과 열을 찾아 원하는 정보를 읽을 수 있어요.',
  },
  {
    id: 'G2_S2_DATA_05_SK02',
    unitId: 'G2_S2_DATA_05',
    code: 'graph_read',
    nameKo: '그래프 읽기',
    descriptionKo: '간단한 그래프를 읽고 해석할 수 있다.',
    defaultDifficulty: 0.0,
    sortOrder: 2,
    conceptExplanation: '그래프는 자료의 크기를 그림으로 나타낸 것이에요. 그래프를 보면 어떤 것이 가장 많고 적은지 한눈에 알 수 있어요.',
  },
];

// ============================================================
// 2학년 문제 데이터
// ============================================================
export const G2_QUESTIONS: SeedQuestion[] = [
  // ============================================================
  // 단원: 세 자리 수 - SK01: 백의 자리 이해
  // ============================================================
  {
    id: 'G2_S1_NUM_01_SK01_Q01',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '100이 4개이면 얼마인가요?',
      correctAnswer: 400,
      explanation: '100이 4개이면 100 × 4 = 400입니다. "사백"이라고 읽어요.',
      hints: [
        '100씩 세어 보세요. 100, 200, 300, ...',
        '100이 4개이면 100 + 100 + 100 + 100 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 자리 수', '백의 자리', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK01_Q02',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '10이 10개이면 얼마인가요?',
      options: [
        { id: 'a', text: '10', isCorrect: false },
        { id: 'b', text: '100', isCorrect: true },
        { id: 'c', text: '110', isCorrect: false },
        { id: 'd', text: '1000', isCorrect: false },
      ],
      explanation: '10이 10개이면 100입니다. 10 × 10 = 100이에요.',
      hints: [
        '10씩 10번 세어 보세요.',
        '10, 20, 30, ..., 90, ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 자리 수', '백의 자리', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK01_Q03',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '700은 100이 몇 개인 수인가요?',
      correctAnswer: 7,
      explanation: '700 = 100 × 7이므로 100이 7개인 수입니다.',
      hints: [
        '100씩 세어서 700이 되려면 몇 번 세야 할까요?',
        '100, 200, 300, 400, 500, 600, 700 - 몇 개?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['세 자리 수', '백의 자리', '2학년'],
  },

  // ============================================================
  // 단원: 세 자리 수 - SK02: 세 자리 수 읽고 쓰기
  // ============================================================
  {
    id: 'G2_S1_NUM_01_SK02_Q01',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '365에서 6은 어떤 자릿값을 나타내나요?',
      options: [
        { id: 'a', text: '6', isCorrect: false },
        { id: 'b', text: '60', isCorrect: true },
        { id: 'c', text: '600', isCorrect: false },
        { id: 'd', text: '360', isCorrect: false },
      ],
      explanation: '365에서 6은 십의 자리에 있으므로 60을 나타냅니다.',
      hints: [
        '365에서 6은 어느 자리에 있나요?',
        '백의 자리는 3, 십의 자리는 6, 일의 자리는 5예요.',
      ],
      commonMistakes: [
        { answer: '6', misconception: '자릿값을 무시하고 숫자만 읽었습니다. 6은 십의 자리에 있으므로 60을 나타내요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['자릿값', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK02_Q02',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '"오백이십삼"을 수로 쓰면 얼마인가요?',
      options: [
        { id: 'a', text: '523', isCorrect: true },
        { id: 'b', text: '532', isCorrect: false },
        { id: 'c', text: '5023', isCorrect: false },
        { id: 'd', text: '253', isCorrect: false },
      ],
      explanation: '"오백"은 500, "이십"은 20, "삼"은 3이므로 500 + 20 + 3 = 523입니다.',
      hints: [
        '"오백"은 얼마인가요?',
        '500 + 20 + 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 읽기', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK02_Q03',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '100이 3개, 10이 7개, 1이 2개이면 얼마인가요?',
      correctAnswer: 372,
      explanation: '300 + 70 + 2 = 372입니다.',
      hints: [
        '100이 3개이면 300, 10이 7개이면 70, 1이 2개이면 2예요.',
        '300 + 70 + 2 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['자릿값', '세 자리 수', '2학년'],
  },

  // ============================================================
  // 단원: 세 자리 수 - SK03: 세 자리 수 크기 비교
  // ============================================================
  {
    id: 'G2_S1_NUM_01_SK03_Q01',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '457과 482 중 더 큰 수는?',
      options: [
        { id: 'a', text: '457', isCorrect: false },
        { id: 'b', text: '482', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '백의 자리가 둘 다 4로 같으므로 십의 자리를 비교합니다. 5 < 8이므로 482가 더 큽니다.',
      hints: [
        '백의 자리가 같으면 십의 자리를 비교해요.',
        '5와 8 중 어느 것이 더 큰가요?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수 비교', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK03_Q02',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '698과 703 중 더 큰 수는?',
      options: [
        { id: 'a', text: '698', isCorrect: false },
        { id: 'b', text: '703', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '백의 자리를 비교하면 6 < 7이므로 703이 더 큽니다.',
      hints: [
        '먼저 백의 자리를 비교해 보세요.',
        '6과 7 중 어느 것이 더 큰가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK03_Q03',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 가장 큰 수는?',
      options: [
        { id: 'a', text: '589', isCorrect: false },
        { id: 'b', text: '598', isCorrect: false },
        { id: 'c', text: '601', isCorrect: true },
        { id: 'd', text: '596', isCorrect: false },
      ],
      explanation: '백의 자리를 먼저 비교하면 601은 백의 자리가 6이고 나머지는 5입니다. 601이 가장 큽니다.',
      hints: [
        '백의 자리가 가장 큰 수를 찾아보세요.',
        '5로 시작하는 수와 6으로 시작하는 수 중 어느 쪽이 더 큰가요?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['수 비교', '세 자리 수', '2학년'],
  },

  // ============================================================
  // 단원: 여러 가지 도형 - SK01: 삼각형, 사각형, 원 알기
  // ============================================================
  {
    id: 'G2_S1_SHAPE_02_SK01_Q01',
    skillId: 'G2_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '곧은 선 3개로 둘러싸인 도형을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '원', isCorrect: false },
        { id: 'b', text: '삼각형', isCorrect: true },
        { id: 'c', text: '사각형', isCorrect: false },
        { id: 'd', text: '오각형', isCorrect: false },
      ],
      explanation: '곧은 선 3개로 둘러싸인 도형을 삼각형이라고 합니다.',
      hints: [
        '"삼"은 숫자 3을 뜻해요.',
        '변이 3개인 도형이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형', '삼각형', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK01_Q02',
    skillId: 'G2_S1_SHAPE_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"원에는 꼭짓점이 있다." 맞나요?',
      correctAnswer: false,
      explanation: '원은 둥근 선으로 이루어진 도형으로, 곧은 선(변)도 없고 꼭짓점도 없습니다.',
      hints: [
        '꼭짓점은 변과 변이 만나는 점이에요.',
        '원에는 변이 있나요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형', '원', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK01_Q03',
    skillId: 'G2_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '곧은 선 4개로 둘러싸인 도형을 무엇이라고 하나요?',
      options: [
        { id: 'a', text: '삼각형', isCorrect: false },
        { id: 'b', text: '사각형', isCorrect: true },
        { id: 'c', text: '오각형', isCorrect: false },
        { id: 'd', text: '원', isCorrect: false },
      ],
      explanation: '곧은 선 4개로 둘러싸인 도형을 사각형이라고 합니다.',
      hints: [
        '"사"는 숫자 4를 뜻해요.',
        '변이 4개인 도형이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형', '사각형', '2학년'],
  },

  // ============================================================
  // 단원: 여러 가지 도형 - SK02: 변과 꼭짓점
  // ============================================================
  {
    id: 'G2_S1_SHAPE_02_SK02_Q01',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '삼각형의 꼭짓점은 몇 개인가요?',
      correctAnswer: 3,
      explanation: '삼각형은 변이 3개이고, 꼭짓점도 3개입니다.',
      hints: [
        '삼각형을 그려 보세요.',
        '변과 변이 만나는 점이 꼭짓점이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형', '꼭짓점', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK02_Q02',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '사각형의 변은 몇 개인가요?',
      correctAnswer: 4,
      explanation: '사각형은 곧은 선 4개로 둘러싸인 도형이므로 변이 4개입니다.',
      hints: [
        '사각형을 그려서 변을 세어 보세요.',
        '"사"각형의 "사"는 4를 뜻해요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형', '변', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK02_Q03',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '꼭짓점이 3개이고 변이 3개인 도형은 무엇인가요?',
      options: [
        { id: 'a', text: '원', isCorrect: false },
        { id: 'b', text: '삼각형', isCorrect: true },
        { id: 'c', text: '사각형', isCorrect: false },
        { id: 'd', text: '오각형', isCorrect: false },
      ],
      explanation: '꼭짓점 3개, 변 3개인 도형은 삼각형입니다.',
      hints: [
        '변이 3개인 도형을 생각해 보세요.',
        '"삼"은 3이에요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형', '2학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈 - SK01: 두 자리 수 + 두 자리 수
  // ============================================================
  {
    id: 'G2_S1_NUM_03_SK01_Q01',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '37 + 45 = ?',
      questionLatex: '37 + 45 = \\square',
      correctAnswer: 82,
      explanation: '일의 자리: 7 + 5 = 12 (2를 쓰고 1을 올림). 십의 자리: 3 + 4 + 1 = 8. 답은 82입니다.',
      hints: [
        '일의 자리끼리 먼저 더해 보세요. 7 + 5 = ?',
        '7 + 5 = 12이므로 일의 자리에 2를 쓰고 십의 자리에 1을 올려요.',
      ],
      commonMistakes: [
        { answer: '72', misconception: '받아올림 1을 더하지 않았습니다. 7 + 5 = 12이므로 1을 올려야 해요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['두 자리 덧셈', '받아올림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK01_Q02',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '56 + 28 = ?',
      questionLatex: '56 + 28 = \\square',
      correctAnswer: 84,
      explanation: '일의 자리: 6 + 8 = 14 (4를 쓰고 1을 올림). 십의 자리: 5 + 2 + 1 = 8. 답은 84입니다.',
      hints: [
        '일의 자리: 6 + 8 = ?',
        '14에서 4를 일의 자리에 쓰고, 1을 올려요.',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['두 자리 덧셈', '받아올림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK01_Q03',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '영수는 사탕 38개를 가지고 있고, 지민이는 47개를 가지고 있습니다. 두 사람의 사탕은 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '75개', isCorrect: false },
        { id: 'b', text: '85개', isCorrect: true },
        { id: 'c', text: '81개', isCorrect: false },
        { id: 'd', text: '95개', isCorrect: false },
      ],
      explanation: '38 + 47 = 85입니다. 일의 자리: 8 + 7 = 15. 십의 자리: 3 + 4 + 1 = 8.',
      hints: [
        '"모두"라는 말이 있으므로 덧셈을 해요.',
        '38 + 47에서 일의 자리: 8 + 7 = ?',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['두 자리 덧셈', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈 - SK02: 두 자리 수 - 두 자리 수
  // ============================================================
  {
    id: 'G2_S1_NUM_03_SK02_Q01',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '52 - 28 = ?',
      questionLatex: '52 - 28 = \\square',
      correctAnswer: 24,
      explanation: '일의 자리: 2에서 8을 뺄 수 없으므로 십의 자리에서 10을 빌려옴. 12 - 8 = 4. 십의 자리: 4 - 2 = 2. 답은 24입니다.',
      hints: [
        '일의 자리 2에서 8을 뺄 수 없으니 십의 자리에서 빌려와요.',
        '12 - 8 = 4, 4 - 2 = 2이므로 답은?',
      ],
      commonMistakes: [
        { answer: '36', misconception: '받아내림 없이 각 자리를 따로 뺐습니다(8-2=6, 5-2=3). 일의 자리에서 뺄 수 없을 때는 받아내림을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['두 자리 뺄셈', '받아내림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK02_Q02',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '73 - 36 = ?',
      questionLatex: '73 - 36 = \\square',
      correctAnswer: 37,
      explanation: '일의 자리: 3에서 6을 뺄 수 없으므로 받아내림. 13 - 6 = 7. 십의 자리: 6 - 3 = 3. 답은 37입니다.',
      hints: [
        '일의 자리에서 뺄 수 없으면 십의 자리에서 빌려와요.',
        '13 - 6 = ?, 6 - 3 = ?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['두 자리 뺄셈', '받아내림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK02_Q03',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '버스에 65명이 타고 있었습니다. 정류장에서 29명이 내렸습니다. 버스에 남은 사람은 몇 명인가요?',
      options: [
        { id: 'a', text: '34명', isCorrect: false },
        { id: 'b', text: '36명', isCorrect: true },
        { id: 'c', text: '44명', isCorrect: false },
        { id: 'd', text: '46명', isCorrect: false },
      ],
      explanation: '65 - 29 = 36입니다. "내렸다"이므로 뺄셈을 해요.',
      hints: [
        '"내렸다"이므로 뺄셈을 해요.',
        '65 - 29에서 일의 자리: 15 - 9 = ?, 십의 자리: 5 - 2 = ?',
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['두 자리 뺄셈', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 길이 재기 (1학기) - SK01: cm로 길이 재기
  // ============================================================
  {
    id: 'G2_S1_SHAPE_04_SK01_Q01',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '연필의 길이가 약 15cm입니다. 이것을 읽으면?',
      options: [
        { id: 'a', text: '십오 센티미터', isCorrect: true },
        { id: 'b', text: '십오 미터', isCorrect: false },
        { id: 'c', text: '일오 센티미터', isCorrect: false },
        { id: 'd', text: '열다섯 미리미터', isCorrect: false },
      ],
      explanation: '15cm는 "십오 센티미터"라고 읽습니다. cm는 센티미터라고 읽어요.',
      hints: [
        'cm는 "센티미터"라고 읽어요.',
        '15는 "십오"라고 읽어요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', 'cm', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK01_Q02',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '자의 0부터 8까지의 길이는 몇 cm인가요?',
      correctAnswer: 8,
      explanation: '자의 0 눈금부터 8 눈금까지의 길이는 8cm입니다.',
      hints: [
        '자의 눈금에서 시작점(0)부터 끝점까지의 수를 읽어요.',
        '0부터 8까지 칸이 몇 칸인가요?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', 'cm', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK01_Q03',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '3cm와 5cm를 합하면 몇 cm인가요?',
      options: [
        { id: 'a', text: '2cm', isCorrect: false },
        { id: 'b', text: '8cm', isCorrect: true },
        { id: 'c', text: '15cm', isCorrect: false },
        { id: 'd', text: '35cm', isCorrect: false },
      ],
      explanation: '3cm + 5cm = 8cm입니다. 같은 단위끼리 더하면 됩니다.',
      hints: [
        '같은 단위끼리 더해 보세요.',
        '3 + 5 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '덧셈', '2학년'],
  },

  // ============================================================
  // 단원: 분류하기 - SK01: 기준에 따라 분류하기
  // ============================================================
  {
    id: 'G2_S1_DATA_05_SK01_Q01',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '사과, 바나나, 딸기, 수박을 색깔로 분류할 때, 빨간색 과일은 무엇인가요?',
      options: [
        { id: 'a', text: '사과, 바나나', isCorrect: false },
        { id: 'b', text: '사과, 딸기', isCorrect: true },
        { id: 'c', text: '바나나, 수박', isCorrect: false },
        { id: 'd', text: '딸기, 수박', isCorrect: false },
      ],
      explanation: '빨간색 과일은 사과와 딸기입니다. 바나나는 노란색, 수박은 초록색(겉)이에요.',
      hints: [
        '각 과일의 색깔을 생각해 보세요.',
        '사과는 빨간색, 바나나는 노란색, 딸기는 빨간색, 수박은 초록색이에요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분류', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK01_Q02',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 "탈것"으로 분류할 수 있는 것은?',
      options: [
        { id: 'a', text: '자동차, 비행기, 배', isCorrect: true },
        { id: 'b', text: '자동차, 연필, 배', isCorrect: false },
        { id: 'c', text: '비행기, 사과, 기차', isCorrect: false },
        { id: 'd', text: '연필, 지우개, 볼펜', isCorrect: false },
      ],
      explanation: '자동차, 비행기, 배는 모두 사람이나 물건을 실어 나르는 "탈것"입니다.',
      hints: [
        '탈것은 사람이나 물건을 실어 나르는 것이에요.',
        '연필, 사과, 지우개는 탈것이 아니에요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분류', '2학년'],
  },

  // ============================================================
  // 단원: 네 자리 수 - SK01: 천의 자리 이해
  // ============================================================
  {
    id: 'G2_S2_NUM_01_SK01_Q01',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '1000이 3개이면 얼마인가요?',
      correctAnswer: 3000,
      explanation: '1000이 3개이면 1000 × 3 = 3000입니다. "삼천"이라고 읽어요.',
      hints: [
        '1000씩 세어 보세요. 1000, 2000, ...',
        '1000 + 1000 + 1000 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '천의 자리', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK01_Q02',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '100이 10개이면 얼마인가요?',
      options: [
        { id: 'a', text: '100', isCorrect: false },
        { id: 'b', text: '110', isCorrect: false },
        { id: 'c', text: '1000', isCorrect: true },
        { id: 'd', text: '10000', isCorrect: false },
      ],
      explanation: '100이 10개이면 100 × 10 = 1000입니다.',
      hints: [
        '100씩 10번 세어 보세요.',
        '100, 200, ..., 900, ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '천의 자리', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK01_Q03',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '5000은 1000이 몇 개인 수인가요?',
      correctAnswer: 5,
      explanation: '5000 = 1000 × 5이므로 1000이 5개인 수입니다.',
      hints: [
        '1000씩 세어서 5000이 되려면?',
        '5000 ÷ 1000 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '천의 자리', '2학년'],
  },

  // ============================================================
  // 단원: 네 자리 수 - SK02: 네 자리 수 읽고 쓰기
  // ============================================================
  {
    id: 'G2_S2_NUM_01_SK02_Q01',
    skillId: 'G2_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"삼천이백오십칠"을 수로 쓰면?',
      options: [
        { id: 'a', text: '3257', isCorrect: true },
        { id: 'b', text: '3527', isCorrect: false },
        { id: 'c', text: '32057', isCorrect: false },
        { id: 'd', text: '3207', isCorrect: false },
      ],
      explanation: '"삼천"은 3000, "이백"은 200, "오십"은 50, "칠"은 7. 3000 + 200 + 50 + 7 = 3257입니다.',
      hints: [
        '"삼천"은 3000이에요.',
        '3000 + 200 + 50 + 7 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['네 자리 수', '읽기 쓰기', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK02_Q02',
    skillId: 'G2_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '4527에서 5는 어떤 자릿값을 나타내나요? 수로 답하세요.',
      correctAnswer: 500,
      explanation: '4527에서 5는 백의 자리에 있으므로 500을 나타냅니다.',
      hints: [
        '4527에서 5는 왼쪽에서 두 번째에 있어요.',
        '천의 자리, 백의 자리, 십의 자리, 일의 자리 순서예요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['네 자리 수', '자릿값', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK01: 곱셈의 의미
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK01_Q01',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '접시가 4개 있고, 각 접시에 사과가 3개씩 놓여 있습니다. 사과는 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '7개', isCorrect: false },
        { id: 'b', text: '10개', isCorrect: false },
        { id: 'c', text: '12개', isCorrect: true },
        { id: 'd', text: '15개', isCorrect: false },
      ],
      explanation: '3 + 3 + 3 + 3 = 3 × 4 = 12개입니다. 같은 수를 여러 번 더하는 것이 곱셈이에요.',
      hints: [
        '3개씩 4번 더해 보세요.',
        '3 + 3 + 3 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '7개', misconception: '3 + 4 = 7로 덧셈을 했습니다. "3개씩 4접시"이므로 곱셈을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['곱셈', '의미', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK01_Q02',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '5 + 5 + 5을 곱셈식으로 나타내면 5 × 몇인가요?',
      correctAnswer: 3,
      explanation: '5를 3번 더했으므로 5 × 3입니다.',
      hints: [
        '5를 몇 번 더했는지 세어 보세요.',
        '5가 3번 나와요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈', '의미', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK01_Q03',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '2 × 6과 같은 덧셈식은 어느 것인가요?',
      options: [
        { id: 'a', text: '2 + 6', isCorrect: false },
        { id: 'b', text: '6 + 6', isCorrect: false },
        { id: 'c', text: '2 + 2 + 2 + 2 + 2 + 2', isCorrect: true },
        { id: 'd', text: '2 + 2 + 6', isCorrect: false },
      ],
      explanation: '2 × 6은 2를 6번 더하는 것과 같습니다. 2 + 2 + 2 + 2 + 2 + 2 = 12입니다.',
      hints: [
        '2 × 6은 2를 6번 더하라는 뜻이에요.',
        '2를 6번 쓰고 더해 보세요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈', '의미', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK02: 2, 5의 단
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK02_Q01',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '2 × 7 = ?',
      questionLatex: '2 \\times 7 = \\square',
      correctAnswer: 14,
      explanation: '2 × 7 = 14입니다. 2씩 7번 더하면 2, 4, 6, 8, 10, 12, 14예요.',
      hints: [
        '2씩 7번 세어 보세요.',
        '2, 4, 6, 8, 10, 12, ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈구구', '2의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK02_Q02',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '5 × 6 = ?',
      questionLatex: '5 \\times 6 = \\square',
      correctAnswer: 30,
      explanation: '5 × 6 = 30입니다. 5씩 6번 더하면 5, 10, 15, 20, 25, 30이에요.',
      hints: [
        '5씩 6번 세어 보세요.',
        '5, 10, 15, 20, 25, ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈구구', '5의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK02_Q03',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '한 상자에 연필이 5자루씩 들어 있습니다. 4상자에는 연필이 모두 몇 자루인가요?',
      options: [
        { id: 'a', text: '9자루', isCorrect: false },
        { id: 'b', text: '15자루', isCorrect: false },
        { id: 'c', text: '20자루', isCorrect: true },
        { id: 'd', text: '25자루', isCorrect: false },
      ],
      explanation: '5 × 4 = 20자루입니다.',
      hints: [
        '5자루씩 4상자이므로 5 × 4를 계산해요.',
        '5, 10, 15, ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈구구', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK03: 3, 6, 9의 단
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK03_Q01',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '3 × 8 = ?',
      questionLatex: '3 \\times 8 = \\square',
      correctAnswer: 24,
      explanation: '3 × 8 = 24입니다.',
      hints: [
        '3씩 8번 세어 보세요.',
        '3, 6, 9, 12, 15, 18, 21, ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈구구', '3의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_Q02',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '6 × 5 = ?',
      questionLatex: '6 \\times 5 = \\square',
      correctAnswer: 30,
      explanation: '6 × 5 = 30입니다.',
      hints: [
        '6씩 5번 세어 보세요.',
        '6, 12, 18, 24, ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈구구', '6의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_Q03',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '9 × 7 = ?',
      questionLatex: '9 \\times 7 = \\square',
      correctAnswer: 63,
      explanation: '9 × 7 = 63입니다.',
      hints: [
        '9의 단에서 7번째 수를 찾아보세요.',
        '9, 18, 27, 36, 45, 54, ?',
      ],
      commonMistakes: [
        { answer: '56', misconception: '7 × 8 = 56과 혼동했습니다. 9 × 7을 다시 계산해 보세요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈구구', '9의 단', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK04: 4, 7, 8의 단
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK04_Q01',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '7 × 8 = ?',
      questionLatex: '7 \\times 8 = \\square',
      correctAnswer: 56,
      explanation: '7 × 8 = 56입니다.',
      hints: [
        '7씩 8번 세어 보세요.',
        '7, 14, 21, 28, 35, 42, 49, ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈구구', '7의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK04_Q02',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '8 × 6 = ?',
      questionLatex: '8 \\times 6 = \\square',
      correctAnswer: 48,
      explanation: '8 × 6 = 48입니다.',
      hints: [
        '8씩 6번 세어 보세요.',
        '8, 16, 24, 32, 40, ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈구구', '8의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK04_Q03',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '4 × 9 = ?',
      questionLatex: '4 \\times 9 = \\square',
      correctAnswer: 36,
      explanation: '4 × 9 = 36입니다.',
      hints: [
        '4씩 9번 세어 보세요.',
        '4, 8, 12, 16, 20, 24, 28, 32, ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈구구', '4의 단', '2학년'],
  },

  // ============================================================
  // 단원: 길이 재기 (2학기) - SK01: m 단위 이해
  // ============================================================
  {
    id: 'G2_S2_SHAPE_03_SK01_Q01',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '1m는 몇 cm인가요?',
      correctAnswer: 100,
      explanation: '1m = 100cm입니다.',
      hints: [
        'm와 cm의 관계를 생각해 보세요.',
        '미터는 센티미터보다 큰 단위예요.',
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'm', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK01_Q02',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '교실 칠판의 길이를 재려면 어떤 단위가 적당한가요?',
      options: [
        { id: 'a', text: 'cm', isCorrect: false },
        { id: 'b', text: 'm', isCorrect: true },
        { id: 'c', text: 'mm', isCorrect: false },
      ],
      explanation: '칠판은 매우 길기 때문에 m(미터) 단위를 사용하는 것이 적당합니다.',
      hints: [
        '칠판은 매우 길어요. 큰 단위가 필요해요.',
        'cm로 재면 숫자가 너무 커져요.',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '단위 선택', '2학년'],
  },

  // ============================================================
  // 단원: 길이 재기 (2학기) - SK02: cm와 m 변환
  // ============================================================
  {
    id: 'G2_S2_SHAPE_03_SK02_Q01',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '3m는 몇 cm인가요?',
      correctAnswer: 300,
      explanation: '1m = 100cm이므로 3m = 300cm입니다.',
      hints: [
        '1m = 100cm예요.',
        '100 × 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '단위 변환', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK02_Q02',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '250cm는 몇 m 몇 cm인가요?',
      options: [
        { id: 'a', text: '2m 50cm', isCorrect: true },
        { id: 'b', text: '25m 0cm', isCorrect: false },
        { id: 'c', text: '2m 5cm', isCorrect: false },
        { id: 'd', text: '20m 50cm', isCorrect: false },
      ],
      explanation: '250cm = 200cm + 50cm = 2m 50cm입니다. 100cm = 1m이므로 200cm = 2m예요.',
      hints: [
        '100cm = 1m를 이용하세요.',
        '250에서 100이 몇 개 들어가나요?',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['길이', '단위 변환', '2학년'],
  },

  // ============================================================
  // 단원: 시각과 시간 - SK01: 몇 시 몇 분 읽기
  // ============================================================
  {
    id: 'G2_S2_CHANGE_04_SK01_Q01',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 9와 10 사이, 긴 바늘이 3을 가리키고 있습니다. 몇 시 몇 분인가요?',
      options: [
        { id: 'a', text: '9시 3분', isCorrect: false },
        { id: 'b', text: '9시 15분', isCorrect: true },
        { id: 'c', text: '3시 45분', isCorrect: false },
        { id: 'd', text: '10시 15분', isCorrect: false },
      ],
      explanation: '짧은 바늘이 9와 10 사이이면 9시이고, 긴 바늘이 3을 가리키면 15분입니다. 9시 15분이에요.',
      hints: [
        '짧은 바늘이 "시", 긴 바늘이 "분"이에요.',
        '긴 바늘에서 숫자 하나는 5분을 뜻해요. 3 × 5 = ?',
      ],
      commonMistakes: [
        { answer: '9시 3분', misconception: '긴 바늘의 숫자를 그대로 분으로 읽었습니다. 긴 바늘은 1칸이 5분이에요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['시각', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK01_Q02',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 2와 3 사이, 긴 바늘이 8을 가리키고 있습니다. 몇 시 몇 분인가요?',
      options: [
        { id: 'a', text: '2시 40분', isCorrect: true },
        { id: 'b', text: '2시 8분', isCorrect: false },
        { id: 'c', text: '8시 10분', isCorrect: false },
        { id: 'd', text: '3시 40분', isCorrect: false },
      ],
      explanation: '짧은 바늘이 2와 3 사이이면 2시이고, 긴 바늘이 8을 가리키면 8 × 5 = 40분입니다.',
      hints: [
        '긴 바늘이 가리키는 수 × 5가 분이에요.',
        '8 × 5 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['시각', '2학년'],
  },

  // ============================================================
  // 단원: 시각과 시간 - SK02: 시간의 흐름
  // ============================================================
  {
    id: 'G2_S2_CHANGE_04_SK02_Q01',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1시간은 몇 분인가요?',
      options: [
        { id: 'a', text: '30분', isCorrect: false },
        { id: 'b', text: '50분', isCorrect: false },
        { id: 'c', text: '60분', isCorrect: true },
        { id: 'd', text: '100분', isCorrect: false },
      ],
      explanation: '1시간 = 60분입니다.',
      hints: [
        '시계에서 긴 바늘이 한 바퀴 도는 시간이 1시간이에요.',
        '시계에는 1부터 12까지 숫자가 있고, 각 숫자 사이가 5분이에요. 12 × 5 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['시간', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK02_Q02',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '지금 3시 20분입니다. 40분 후는 몇 시 몇 분인가요?',
      options: [
        { id: 'a', text: '3시 60분', isCorrect: false },
        { id: 'b', text: '4시', isCorrect: true },
        { id: 'c', text: '4시 20분', isCorrect: false },
        { id: 'd', text: '3시 40분', isCorrect: false },
      ],
      explanation: '3시 20분에서 40분 후는 3시 60분 = 4시입니다. 60분 = 1시간이에요.',
      hints: [
        '20분 + 40분 = 60분이에요.',
        '60분 = 1시간이에요.',
      ],
      commonMistakes: [
        { answer: '3시 60분', misconception: '60분이 되면 1시간으로 올려야 합니다. 60분 = 1시간이에요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['시간', '경과', '2학년'],
  },

  // ============================================================
  // 단원: 표와 그래프 - SK01: 표 읽기
  // ============================================================
  {
    id: 'G2_S2_DATA_05_SK01_Q01',
    skillId: 'G2_S2_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '좋아하는 과일 조사 결과: 사과 8명, 바나나 5명, 포도 7명, 딸기 10명. 가장 인기 있는 과일은?',
      options: [
        { id: 'a', text: '사과', isCorrect: false },
        { id: 'b', text: '바나나', isCorrect: false },
        { id: 'c', text: '포도', isCorrect: false },
        { id: 'd', text: '딸기', isCorrect: true },
      ],
      explanation: '딸기를 좋아하는 사람이 10명으로 가장 많으므로 가장 인기 있는 과일은 딸기입니다.',
      hints: [
        '각 과일의 수를 비교해 보세요.',
        '가장 큰 수를 찾아보세요. 8, 5, 7, 10 중에서?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['표', '자료 해석', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK01_Q02',
    skillId: 'G2_S2_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '좋아하는 동물 조사 결과: 강아지 12명, 고양이 9명, 토끼 6명. 강아지와 토끼를 좋아하는 학생 수의 차이는 몇 명인가요?',
      correctAnswer: 6,
      explanation: '12 - 6 = 6명입니다.',
      hints: [
        '강아지 12명, 토끼 6명이에요.',
        '12 - 6 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['표', '자료 해석', '2학년'],
  },

  // ============================================================
  // 단원: 표와 그래프 - SK02: 그래프 읽기
  // ============================================================
  {
    id: 'G2_S2_DATA_05_SK02_Q01',
    skillId: 'G2_S2_DATA_05_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '그림그래프에서 ○ 하나가 2명을 나타낼 때, ○○○은 몇 명을 나타내나요?',
      options: [
        { id: 'a', text: '3명', isCorrect: false },
        { id: 'b', text: '5명', isCorrect: false },
        { id: 'c', text: '6명', isCorrect: true },
        { id: 'd', text: '8명', isCorrect: false },
      ],
      explanation: '○ 하나가 2명이므로 ○ 3개는 2 × 3 = 6명입니다.',
      hints: [
        '○ 하나가 2명이에요.',
        '○가 3개이면 2 × 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['그래프', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK02_Q02',
    skillId: 'G2_S2_DATA_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '그림그래프에서 ○ 하나가 3명을 나타냅니다. 축구를 좋아하는 학생이 ○○○○이면 몇 명인가요?',
      correctAnswer: 12,
      explanation: '○ 하나가 3명이고 ○가 4개이므로 3 × 4 = 12명입니다.',
      hints: [
        '○ 하나가 3명이에요.',
        '3 × 4 = ?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['그래프', '2학년'],
  },

  // ============================================================
  // 추가: 덧셈과 뺄셈 문장제 - SK03
  // ============================================================
  {
    id: 'G2_S1_NUM_03_SK03_Q01',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '동화책이 35권, 과학책이 28권 있습니다. 책은 모두 몇 권인가요?',
      options: [
        { id: 'a', text: '53권', isCorrect: false },
        { id: 'b', text: '63권', isCorrect: true },
        { id: 'c', text: '57권', isCorrect: false },
        { id: 'd', text: '73권', isCorrect: false },
      ],
      explanation: '35 + 28 = 63권입니다. "모두"라는 말이 있으므로 덧셈을 합니다.',
      hints: [
        '"모두"라는 말은 덧셈을 뜻해요.',
        '35 + 28에서 일의 자리: 5 + 8 = 13. 올림 1.',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['문장제', '덧셈', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK03_Q02',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '현수는 구슬을 72개 가지고 있었습니다. 동생에게 35개를 주었습니다. 현수에게 남은 구슬은 몇 개인가요?',
      correctAnswer: 37,
      explanation: '72 - 35 = 37개입니다. "주었다"이므로 뺄셈을 합니다.',
      hints: [
        '"주었다"는 뺄셈을 뜻해요.',
        '72 - 35에서 일의 자리: 12 - 5 = 7 (받아내림 후). 십의 자리: 6 - 3 = 3.',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['문장제', '뺄셈', '2학년'],
  },

  // ============================================================
  // 추가: 길이 어림하기
  // ============================================================
  {
    id: 'G2_S1_SHAPE_04_SK02_Q01',
    skillId: 'G2_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '연필의 길이는 약 얼마쯤 될까요?',
      options: [
        { id: 'a', text: '약 2cm', isCorrect: false },
        { id: 'b', text: '약 18cm', isCorrect: true },
        { id: 'c', text: '약 50cm', isCorrect: false },
        { id: 'd', text: '약 1m', isCorrect: false },
      ],
      explanation: '연필의 길이는 보통 약 18cm 정도입니다.',
      hints: [
        '연필을 자로 재어 본 적이 있나요?',
        '손가락 길이(약 7cm)와 비교해 보세요. 연필은 손가락보다 더 길어요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['길이', '어림', '2학년'],
  },

  // ============================================================
  // 추가: 분류하여 세기
  // ============================================================
  {
    id: 'G2_S1_DATA_05_SK02_Q01',
    skillId: 'G2_S1_DATA_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '상자에 빨간 구슬 7개, 파란 구슬 5개, 노란 구슬 3개가 있습니다. 구슬은 모두 몇 개인가요?',
      correctAnswer: 15,
      explanation: '7 + 5 + 3 = 15개입니다.',
      hints: [
        '각 색깔의 구슬 수를 모두 더하면 돼요.',
        '7 + 5 + 3 = ?',
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분류', '세기', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK02_Q02',
    skillId: 'G2_S1_DATA_05_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '학급에서 좋아하는 색을 조사했습니다. 빨강 8명, 파랑 10명, 노랑 6명, 초록 4명. 가장 적은 학생이 좋아하는 색은?',
      options: [
        { id: 'a', text: '빨강', isCorrect: false },
        { id: 'b', text: '파랑', isCorrect: false },
        { id: 'c', text: '노랑', isCorrect: false },
        { id: 'd', text: '초록', isCorrect: true },
      ],
      explanation: '초록을 좋아하는 학생이 4명으로 가장 적습니다.',
      hints: [
        '각 색의 학생 수를 비교해 보세요.',
        '8, 10, 6, 4 중 가장 작은 수는?',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['분류', '비교', '2학년'],
  },

  // ============================================================
  // 추가: 네 자리 수 크기 비교
  // ============================================================
  {
    id: 'G2_S2_NUM_01_SK03_Q01',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '3456과 3489 중 더 큰 수는?',
      options: [
        { id: 'a', text: '3456', isCorrect: false },
        { id: 'b', text: '3489', isCorrect: true },
        { id: 'c', text: '같다', isCorrect: false },
      ],
      explanation: '천의 자리(3)와 백의 자리(4)가 같으므로 십의 자리를 비교합니다. 5 < 8이므로 3489가 더 큽니다.',
      hints: [
        '큰 자리부터 비교해 보세요.',
        '천의 자리와 백의 자리가 같으니 십의 자리를 비교하세요.',
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['네 자리 수', '비교', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK03_Q02',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 중 가장 큰 수는?',
      options: [
        { id: 'a', text: '8976', isCorrect: false },
        { id: 'b', text: '9012', isCorrect: true },
        { id: 'c', text: '8999', isCorrect: false },
        { id: 'd', text: '8987', isCorrect: false },
      ],
      explanation: '천의 자리를 비교하면 9012만 천의 자리가 9이므로 가장 큽니다.',
      hints: [
        '천의 자리가 가장 큰 수를 찾아보세요.',
        '9로 시작하는 수가 8로 시작하는 수보다 항상 커요.',
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['네 자리 수', '비교', '2학년'],
  },
];
