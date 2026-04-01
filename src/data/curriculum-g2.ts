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

  // ============================================================
  // ===== 추가 문제 시작 (스킬별 7문제 이상 확보) =====
  // ============================================================

  // ============================================================
  // 단원: 세 자리 수 - SK01: 백의 자리 이해 (추가)
  // ============================================================
  {
    id: 'G2_S1_NUM_01_SK01_Q04',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.8,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"100이 9개이면 900이다." 맞나요?',
      correctAnswer: true,
      explanation: '100이 9개이면 100 × 9 = 900입니다.',
      hints: [
        '100씩 9번 세어 보세요.',
        '100, 200, 300, ..., 800, 900!',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '100 × 9 = 900이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['세 자리 수', '백의 자리', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK01_Q05',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '300은 100이 ___개인 수입니다.',
      correctAnswer: 3,
      explanation: '300 = 100 × 3이므로 100이 3개인 수입니다.',
      hints: [
        '100씩 세어서 300이 되려면?',
        '100, 200, 300 - 몇 번?',
      ],
      commonMistakes: [
        { answer: '30', misconception: '10이 아니라 100의 개수를 물었어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['세 자리 수', '백의 자리', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK01_Q06',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '100이 6개이면 얼마인가요?',
      options: [
        { id: 'a', text: '16', isCorrect: false },
        { id: 'b', text: '60', isCorrect: false },
        { id: 'c', text: '600', isCorrect: true },
        { id: 'd', text: '6000', isCorrect: false },
      ],
      explanation: '100이 6개이면 100 × 6 = 600입니다.',
      hints: [
        '100씩 6번 세어 보세요.',
        '100, 200, 300, 400, 500, ?',
      ],
      commonMistakes: [
        { answer: '60', misconception: '10이 6개이면 60이지만, 100이 6개이면 600이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['세 자리 수', '백의 자리', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK01_Q07',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '500은 100이 몇 개인 수인가요?',
      correctAnswer: 5,
      explanation: '500 = 100 × 5이므로 100이 5개인 수입니다.',
      hints: [
        '100씩 세어서 500이 되려면?',
        '100, 200, 300, 400, 500 - 몇 번?',
      ],
      commonMistakes: [
        { answer: '50', misconception: '10의 개수가 아니라 100의 개수를 물었어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['세 자리 수', '백의 자리', '2학년'],
  },

  // ============================================================
  // 단원: 세 자리 수 - SK02: 세 자리 수 읽고 쓰기 (추가)
  // ============================================================
  {
    id: 'G2_S1_NUM_01_SK02_Q04',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"247에서 4는 40을 나타낸다." 맞나요?',
      correctAnswer: true,
      explanation: '247에서 4는 십의 자리에 있으므로 40을 나타냅니다.',
      hints: [
        '247에서 4는 어느 자리에 있나요?',
        '백의 자리는 2, 십의 자리는 4, 일의 자리는 7이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '4가 십의 자리에 있으므로 40을 나타내는 것이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자릿값', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK02_Q05',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '100이 5개, 10이 3개, 1이 9개이면 ___입니다.',
      correctAnswer: 539,
      explanation: '500 + 30 + 9 = 539입니다.',
      hints: [
        '100이 5개이면 500이에요.',
        '500 + 30 + 9 = ?',
      ],
      commonMistakes: [
        { answer: '593', misconception: '십의 자리와 일의 자리를 바꿨어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자릿값', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK02_Q06',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"삼백십오"를 수로 쓰면 얼마인가요?',
      correctAnswer: 315,
      explanation: '"삼백"은 300, "십"은 10, "오"는 5이므로 300 + 10 + 5 = 315입니다.',
      hints: [
        '"삼백"은 얼마인가요?',
        '300 + 10 + 5 = ?',
      ],
      commonMistakes: [
        { answer: '350', misconception: '"십오"를 50으로 읽었어요. "십"은 10, "오"는 5이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 읽기', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK02_Q07',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '806에서 0은 어떤 자릿값을 나타내나요?',
      options: [
        { id: 'a', text: '0', isCorrect: true },
        { id: 'b', text: '80', isCorrect: false },
        { id: 'c', text: '100', isCorrect: false },
        { id: 'd', text: '10', isCorrect: false },
      ],
      explanation: '806에서 0은 십의 자리에 있고, 십의 자리에 아무것도 없으므로 0을 나타냅니다.',
      hints: [
        '806 = 800 + 0 + 6이에요.',
        '십의 자리에 0이 있으면 십이 없다는 뜻이에요.',
      ],
      commonMistakes: [
        { answer: '80', misconception: '0이 있는 자리는 십의 자리이므로 0 × 10 = 0이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['자릿값', '세 자리 수', '2학년'],
  },

  // ============================================================
  // 단원: 세 자리 수 - SK03: 세 자리 수 크기 비교 (추가)
  // ============================================================
  {
    id: 'G2_S1_NUM_01_SK03_Q04',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"389는 412보다 크다." 맞나요?',
      correctAnswer: false,
      explanation: '백의 자리를 비교하면 3 < 4이므로 389가 412보다 작습니다.',
      hints: [
        '백의 자리를 먼저 비교해 보세요.',
        '3과 4 중 어느 것이 더 큰가요?',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '백의 자리가 3 < 4이므로 389가 더 작아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['수 비교', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK03_Q05',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '325, 253, 532 중 가장 큰 수는 ___입니다.',
      correctAnswer: 532,
      explanation: '백의 자리를 비교하면 5 > 3 > 2이므로 532가 가장 큽니다.',
      hints: [
        '백의 자리가 가장 큰 수를 찾아보세요.',
        '3, 2, 5 중 가장 큰 것은?',
      ],
      commonMistakes: [
        { answer: '325', misconception: '모든 수의 백의 자리를 비교해 보세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK03_Q06',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '467과 463 중 더 큰 수를 쓰세요.',
      correctAnswer: 467,
      explanation: '백의 자리(4)와 십의 자리(6)가 같으므로 일의 자리를 비교합니다. 7 > 3이므로 467이 더 큽니다.',
      hints: [
        '백의 자리와 십의 자리가 같으면 일의 자리를 비교해요.',
        '7과 3 중 어느 것이 더 큰가요?',
      ],
      commonMistakes: [
        { answer: '463', misconception: '일의 자리에서 7 > 3이므로 467이 더 커요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['수 비교', '세 자리 수', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK03_Q07',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 중 가장 작은 수는?',
      options: [
        { id: 'a', text: '305', isCorrect: true },
        { id: 'b', text: '350', isCorrect: false },
        { id: 'c', text: '503', isCorrect: false },
        { id: 'd', text: '530', isCorrect: false },
      ],
      explanation: '백의 자리를 비교하면 3 < 5이므로 305와 350이 후보이고, 305 < 350이므로 305가 가장 작습니다.',
      hints: [
        '백의 자리가 가장 작은 수를 먼저 찾아보세요.',
        '305와 350 중 더 작은 수는?',
      ],
      commonMistakes: [
        { answer: '350', misconception: '305의 십의 자리가 0이므로 305가 350보다 작아요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['수 비교', '세 자리 수', '2학년'],
  },

  // ============================================================
  // 단원: 여러 가지 도형 - SK01: 삼각형, 사각형, 원 알기 (추가)
  // ============================================================
  {
    id: 'G2_S1_SHAPE_02_SK01_Q04',
    skillId: 'G2_S1_SHAPE_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '둥근 선으로 이루어진 도형은 ___입니다.',
      correctAnswer: '원',
      explanation: '둥근 선으로 이루어진 도형을 원이라고 합니다.',
      hints: [
        '동그란 모양을 생각해 보세요.',
        '곧은 선이 없는 도형이에요.',
      ],
      commonMistakes: [
        { answer: '삼각형', misconception: '삼각형은 곧은 선 3개로 이루어져 있어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['도형', '원', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK01_Q05',
    skillId: 'G2_S1_SHAPE_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"삼각형은 곧은 선 4개로 둘러싸인 도형이다." 맞나요?',
      correctAnswer: false,
      explanation: '삼각형은 곧은 선 3개로 둘러싸인 도형입니다. 4개는 사각형이에요.',
      hints: [
        '"삼"은 숫자 3을 뜻해요.',
        '삼각형의 변은 몇 개인가요?',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '삼각형의 "삼"은 3이에요. 변이 3개예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['도형', '삼각형', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK01_Q06',
    skillId: 'G2_S1_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '곧은 선 4개로 둘러싸인 도형의 이름은 무엇인가요?',
      correctAnswer: '사각형',
      explanation: '곧은 선 4개로 둘러싸인 도형을 사각형이라고 합니다.',
      hints: [
        '"사"는 숫자 4를 뜻해요.',
        '변이 4개인 도형이에요.',
      ],
      commonMistakes: [
        { answer: '삼각형', misconception: '삼각형은 변이 3개예요. 변이 4개인 것은 사각형이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['도형', '사각형', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK01_Q07',
    skillId: 'G2_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 원의 특징이 아닌 것은?',
      options: [
        { id: 'a', text: '둥근 선으로 이루어져 있다', isCorrect: false },
        { id: 'b', text: '꼭짓점이 없다', isCorrect: false },
        { id: 'c', text: '변이 3개이다', isCorrect: true },
        { id: 'd', text: '곧은 선이 없다', isCorrect: false },
      ],
      explanation: '원에는 곧은 선(변)이 없으므로 "변이 3개"는 원의 특징이 아닙니다.',
      hints: [
        '원은 둥근 선으로만 이루어져 있어요.',
        '변이 3개인 도형은 삼각형이에요.',
      ],
      commonMistakes: [
        { answer: '꼭짓점이 없다', misconception: '원에는 정말 꼭짓점이 없어요. 그건 맞는 특징이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['도형', '원', '2학년'],
  },

  // ============================================================
  // 단원: 여러 가지 도형 - SK02: 변과 꼭짓점 (추가)
  // ============================================================
  {
    id: 'G2_S1_SHAPE_02_SK02_Q04',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"사각형의 꼭짓점은 4개이다." 맞나요?',
      correctAnswer: true,
      explanation: '사각형은 변이 4개이고 꼭짓점도 4개입니다.',
      hints: [
        '사각형을 그려서 꼭짓점을 세어 보세요.',
        '변과 변이 만나는 점이 꼭짓점이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '사각형의 꼭짓점은 4개가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['도형', '꼭짓점', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK02_Q05',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '삼각형의 변은 ___개입니다.',
      correctAnswer: 3,
      explanation: '삼각형은 곧은 선 3개로 둘러싸인 도형이므로 변이 3개입니다.',
      hints: [
        '"삼"각형의 "삼"은 3이에요.',
        '삼각형을 그려서 변을 세어 보세요.',
      ],
      commonMistakes: [
        { answer: '4', misconception: '변이 4개인 도형은 사각형이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['도형', '변', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK02_Q06',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '원의 꼭짓점은 몇 개인가요?',
      correctAnswer: 0,
      explanation: '원에는 곧은 선(변)이 없으므로 꼭짓점도 0개입니다.',
      hints: [
        '꼭짓점은 변과 변이 만나는 점이에요.',
        '원에는 변이 있나요?',
      ],
      commonMistakes: [
        { answer: '1', misconception: '원에는 변이 없으므로 꼭짓점도 없어요(0개).' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['도형', '꼭짓점', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_02_SK02_Q07',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '변이 4개이고 꼭짓점이 4개인 도형은?',
      options: [
        { id: 'a', text: '삼각형', isCorrect: false },
        { id: 'b', text: '사각형', isCorrect: true },
        { id: 'c', text: '원', isCorrect: false },
        { id: 'd', text: '오각형', isCorrect: false },
      ],
      explanation: '변 4개, 꼭짓점 4개인 도형은 사각형입니다.',
      hints: [
        '"사"는 4를 뜻해요.',
        '변이 4개인 도형의 이름은?',
      ],
      commonMistakes: [
        { answer: '삼각형', misconception: '삼각형은 변이 3개예요. 4개는 사각형이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['도형', '2학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈 - SK01: 두 자리 수 + 두 자리 수 (추가)
  // ============================================================
  {
    id: 'G2_S1_NUM_03_SK01_Q04',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '29 + 34 = ___',
      questionLatex: '29 + 34 = \\square',
      correctAnswer: 63,
      explanation: '일의 자리: 9 + 4 = 13 (3을 쓰고 1을 올림). 십의 자리: 2 + 3 + 1 = 6. 답은 63입니다.',
      hints: [
        '일의 자리끼리 먼저 더해 보세요.',
        '9 + 4 = 13이므로 일의 자리에 3을 쓰고 1을 올려요.',
      ],
      commonMistakes: [
        { answer: '53', misconception: '받아올림 1을 더하지 않았어요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['두 자리 덧셈', '받아올림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK01_Q05',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"46 + 37 = 83이다." 맞나요?',
      correctAnswer: true,
      explanation: '일의 자리: 6 + 7 = 13 (3을 쓰고 1을 올림). 십의 자리: 4 + 3 + 1 = 8. 답은 83입니다.',
      hints: [
        '일의 자리: 6 + 7 = ?',
        '13에서 3을 일의 자리에, 1을 올리면 4 + 3 + 1 = 8.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '46 + 37을 다시 계산해 보면 83이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['두 자리 덧셈', '받아올림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK01_Q06',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '68 + 25 = ?',
      questionLatex: '68 + 25 = \\square',
      correctAnswer: 93,
      explanation: '일의 자리: 8 + 5 = 13 (3을 쓰고 1을 올림). 십의 자리: 6 + 2 + 1 = 9. 답은 93입니다.',
      hints: [
        '일의 자리끼리 더하면 8 + 5 = ?',
        '13에서 3을 쓰고 1을 올려요.',
      ],
      commonMistakes: [
        { answer: '83', misconception: '받아올림을 빠뜨렸어요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['두 자리 덧셈', '받아올림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK01_Q07',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '문구점에서 공책을 57권, 연필을 36자루 샀습니다. 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '83개', isCorrect: false },
        { id: 'b', text: '93개', isCorrect: true },
        { id: 'c', text: '91개', isCorrect: false },
        { id: 'd', text: '103개', isCorrect: false },
      ],
      explanation: '57 + 36 = 93입니다.',
      hints: [
        '"모두"라는 말이 있으므로 덧셈이에요.',
        '일의 자리: 7 + 6 = 13, 올림 1. 십의 자리: 5 + 3 + 1 = 9.',
      ],
      commonMistakes: [
        { answer: '83개', misconception: '받아올림을 빠뜨렸어요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['두 자리 덧셈', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈 - SK02: 두 자리 수 - 두 자리 수 (추가)
  // ============================================================
  {
    id: 'G2_S1_NUM_03_SK02_Q04',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '41 - 17 = ___',
      questionLatex: '41 - 17 = \\square',
      correctAnswer: 24,
      explanation: '일의 자리: 1에서 7을 뺄 수 없으므로 받아내림. 11 - 7 = 4. 십의 자리: 3 - 1 = 2. 답은 24입니다.',
      hints: [
        '일의 자리에서 뺄 수 없으면 십의 자리에서 빌려와요.',
        '11 - 7 = 4, 3 - 1 = 2.',
      ],
      commonMistakes: [
        { answer: '36', misconception: '받아내림 없이 계산했어요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['두 자리 뺄셈', '받아내림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK02_Q05',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"83 - 45 = 38이다." 맞나요?',
      correctAnswer: true,
      explanation: '일의 자리: 13 - 5 = 8 (받아내림). 십의 자리: 7 - 4 = 3. 답은 38입니다.',
      hints: [
        '일의 자리: 3에서 5를 뺄 수 없으니 받아내림!',
        '13 - 5 = 8, 7 - 4 = 3.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '83 - 45를 다시 계산해 보면 38이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['두 자리 뺄셈', '받아내림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK02_Q06',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '90 - 53 = ?',
      questionLatex: '90 - 53 = \\square',
      correctAnswer: 37,
      explanation: '일의 자리: 0에서 3을 뺄 수 없으므로 받아내림. 10 - 3 = 7. 십의 자리: 8 - 5 = 3. 답은 37입니다.',
      hints: [
        '0에서 3을 뺄 수 없으니 받아내림!',
        '10 - 3 = 7, 8 - 5 = 3.',
      ],
      commonMistakes: [
        { answer: '47', misconception: '십의 자리에서 1을 빌려준 것을 잊었어요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['두 자리 뺄셈', '받아내림', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK02_Q07',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '연필이 75자루 있었는데 38자루를 나눠 주었습니다. 남은 연필은?',
      options: [
        { id: 'a', text: '37자루', isCorrect: true },
        { id: 'b', text: '43자루', isCorrect: false },
        { id: 'c', text: '47자루', isCorrect: false },
        { id: 'd', text: '33자루', isCorrect: false },
      ],
      explanation: '75 - 38 = 37자루입니다.',
      hints: [
        '"나눠 주었다"이므로 뺄셈이에요.',
        '일의 자리: 15 - 8 = 7, 십의 자리: 6 - 3 = 3.',
      ],
      commonMistakes: [
        { answer: '43개', misconception: '받아내림을 하지 않았어요.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['두 자리 뺄셈', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 덧셈과 뺄셈 - SK03: 문장제 (추가)
  // ============================================================
  {
    id: 'G2_S1_NUM_03_SK03_Q03',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '유리는 색종이 48장, 민호는 35장을 가지고 있습니다. 두 사람의 색종이는 모두 ___장입니다.',
      correctAnswer: 83,
      explanation: '48 + 35 = 83장입니다.',
      hints: [
        '"모두"라는 말이 나왔으니 덧셈이에요.',
        '48 + 35에서 일의 자리: 8 + 5 = 13. 올림 1.',
      ],
      commonMistakes: [
        { answer: '73', misconception: '받아올림을 빠뜨렸어요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['문장제', '덧셈', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK03_Q04',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"43명이 탄 버스에서 18명이 내리면 남은 사람은 25명이다." 맞나요?',
      correctAnswer: true,
      explanation: '43 - 18 = 25명입니다.',
      hints: [
        '"내리면"은 뺄셈이에요.',
        '43 - 18을 계산해 보세요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '43 - 18 = 25가 맞아요. 일의 자리: 13 - 8 = 5, 십의 자리: 3 - 1 = 2.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['문장제', '뺄셈', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK03_Q05',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '형은 구슬을 84개, 동생은 57개 가지고 있습니다. 형이 동생보다 구슬을 몇 개 더 많이 가지고 있나요?',
      correctAnswer: 27,
      explanation: '84 - 57 = 27개 더 많습니다.',
      hints: [
        '"더 많이"는 차이를 구하는 것이므로 뺄셈이에요.',
        '84 - 57을 계산해 보세요.',
      ],
      commonMistakes: [
        { answer: '33', misconception: '받아내림을 하지 않았어요. 일의 자리: 14 - 7 = 7, 십의 자리: 7 - 5 = 2.' },
      ],
    },
    estimatedTimeSeconds: 25,
    tags: ['문장제', '뺄셈', '2학년'],
  },

  // ============================================================
  // 단원: 길이 재기 (1학기) - SK01: cm로 길이 재기 (추가)
  // ============================================================
  {
    id: 'G2_S1_SHAPE_04_SK01_Q04',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"cm는 미터라고 읽는다." 맞나요?',
      correctAnswer: false,
      explanation: 'cm는 "센티미터"라고 읽습니다. m가 "미터"예요.',
      hints: [
        'cm 앞에 "센티"가 붙어요.',
        '1cm는 매우 짧은 길이예요.',
      ],
      commonMistakes: [
        { answer: 'true', misconception: 'cm는 센티미터, m는 미터예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'cm', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK01_Q05',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '자의 0부터 12까지의 길이는 ___cm입니다.',
      correctAnswer: 12,
      explanation: '0부터 12까지의 길이는 12cm입니다.',
      hints: [
        '시작점(0)부터 끝점(12)까지 몇 칸인가요?',
        '12 - 0 = ?',
      ],
      commonMistakes: [
        { answer: '11', misconception: '0부터 세기 시작하므로 12 - 0 = 12cm예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'cm', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK01_Q06',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '7cm와 6cm를 합하면 몇 cm인가요?',
      correctAnswer: 13,
      explanation: '7cm + 6cm = 13cm입니다.',
      hints: [
        '같은 단위끼리 더하면 돼요.',
        '7 + 6 = ?',
      ],
      commonMistakes: [
        { answer: '1', misconception: '뺄셈이 아니라 덧셈을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', '덧셈', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK01_Q07',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '15cm에서 9cm를 빼면 몇 cm인가요?',
      options: [
        { id: 'a', text: '4cm', isCorrect: false },
        { id: 'b', text: '6cm', isCorrect: true },
        { id: 'c', text: '24cm', isCorrect: false },
        { id: 'd', text: '8cm', isCorrect: false },
      ],
      explanation: '15cm - 9cm = 6cm입니다.',
      hints: [
        '같은 단위끼리 빼면 돼요.',
        '15 - 9 = ?',
      ],
      commonMistakes: [
        { answer: '24cm', misconception: '뺄셈이 아니라 덧셈을 했어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', '뺄셈', '2학년'],
  },

  // ============================================================
  // 단원: 길이 어림하기 - SK02 (추가)
  // ============================================================
  {
    id: 'G2_S1_SHAPE_04_SK02_Q02',
    skillId: 'G2_S1_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"손톱의 너비는 약 1cm이다." 맞나요?',
      correctAnswer: true,
      explanation: '손톱의 너비는 약 1cm 정도입니다.',
      hints: [
        '1cm는 매우 짧은 길이예요.',
        '자로 손톱 너비를 재면 약 1cm예요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '손톱의 너비는 정말 약 1cm 정도예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', '어림', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK02_Q03',
    skillId: 'G2_S1_SHAPE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '칠판의 길이는 약 ___cm 정도입니다. (30 / 300 / 3000)',
      correctAnswer: 300,
      explanation: '칠판의 길이는 약 3m, 즉 약 300cm 정도입니다.',
      hints: [
        '칠판은 꽤 길어요.',
        '팔을 벌린 길이가 약 1m = 100cm인데, 칠판은 그보다 훨씬 길어요.',
      ],
      commonMistakes: [
        { answer: '30', misconception: '칠판은 30cm보다 훨씬 길어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '어림', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK02_Q04',
    skillId: 'G2_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '교과서의 긴 쪽 길이는 약 얼마쯤 될까요?',
      options: [
        { id: 'a', text: '약 3cm', isCorrect: false },
        { id: 'b', text: '약 30cm', isCorrect: true },
        { id: 'c', text: '약 3m', isCorrect: false },
        { id: 'd', text: '약 300cm', isCorrect: false },
      ],
      explanation: '교과서의 긴 쪽 길이는 약 30cm 정도입니다.',
      hints: [
        '교과서를 자로 재어 본 적이 있나요?',
        '30cm 자와 비슷한 길이예요.',
      ],
      commonMistakes: [
        { answer: '약 3cm', misconception: '3cm는 너무 짧아요. 교과서는 그보다 훨씬 길어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '어림', '2학년'],
  },

  // ============================================================
  // 단원: 분류하기 - SK01 (추가)
  // ============================================================
  {
    id: 'G2_S1_DATA_05_SK01_Q03',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"모양으로 분류하면 삼각형과 원은 같은 무리이다." 맞나요?',
      correctAnswer: false,
      explanation: '삼각형과 원은 모양이 다르므로 같은 무리가 아닙니다.',
      hints: [
        '삼각형과 원의 모양이 같은가요?',
        '삼각형은 곧은 선 3개, 원은 둥근 선이에요.',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '삼각형과 원은 서로 다른 모양이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['분류', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK01_Q04',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '연필, 볼펜, 색연필, 크레파스를 "쓰는 도구"로 분류하면 ___가지입니다.',
      correctAnswer: 4,
      explanation: '연필, 볼펜, 색연필, 크레파스 모두 쓰는 도구이므로 4가지입니다.',
      hints: [
        '모두 글이나 그림을 쓰거나 그리는 도구예요.',
        '하나씩 세어 보세요.',
      ],
      commonMistakes: [
        { answer: '3', misconception: '하나를 빠뜨렸어요. 모두 세어 보세요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['분류', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK01_Q05',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '사과, 당근, 바나나, 오이, 포도, 배추 중 과일은 몇 가지인가요?',
      correctAnswer: 3,
      explanation: '과일은 사과, 바나나, 포도로 3가지입니다. 당근, 오이, 배추는 채소예요.',
      hints: [
        '과일과 채소를 구분해 보세요.',
        '사과, 바나나, 포도는 과일이에요.',
      ],
      commonMistakes: [
        { answer: '4', misconception: '당근이나 오이는 채소예요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분류', '2학년'],
  },

  // ============================================================
  // 단원: 분류하여 세기 - SK02 (추가)
  // ============================================================
  {
    id: 'G2_S1_DATA_05_SK02_Q03',
    skillId: 'G2_S1_DATA_05_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"빨간 구슬 5개, 파란 구슬 8개, 노란 구슬 3개가 있으면, 파란 구슬이 가장 많다." 맞나요?',
      correctAnswer: true,
      explanation: '파란 구슬이 8개로 가장 많습니다.',
      hints: [
        '5, 8, 3을 비교해 보세요.',
        '가장 큰 수는 8이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '8이 5, 3보다 크므로 파란 구슬이 가장 많아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['분류', '세기', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK02_Q04',
    skillId: 'G2_S1_DATA_05_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '장난감 자동차 6개, 인형 9개, 블록 4개가 있습니다. 장난감은 모두 ___개입니다.',
      correctAnswer: 19,
      explanation: '6 + 9 + 4 = 19개입니다.',
      hints: [
        '모든 장난감 수를 더하면 돼요.',
        '6 + 9 = 15이고, 15 + 4 = ?',
      ],
      commonMistakes: [
        { answer: '15', misconception: '블록 4개를 빼먹었어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분류', '세기', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK02_Q05',
    skillId: 'G2_S1_DATA_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '빨간 구슬 10개, 파란 구슬 7개가 있습니다. 빨간 구슬이 파란 구슬보다 몇 개 더 많나요?',
      correctAnswer: 3,
      explanation: '10 - 7 = 3개 더 많습니다.',
      hints: [
        '"더 많다"는 차이를 구하는 것이에요.',
        '10 - 7 = ?',
      ],
      commonMistakes: [
        { answer: '17', misconception: '빼기가 아니라 더하기를 했어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['분류', '비교', '2학년'],
  },

  // ============================================================
  // 단원: 네 자리 수 - SK01: 천의 자리 이해 (추가)
  // ============================================================
  {
    id: 'G2_S2_NUM_01_SK01_Q04',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"1000이 7개이면 7000이다." 맞나요?',
      correctAnswer: true,
      explanation: '1000이 7개이면 1000 × 7 = 7000입니다.',
      hints: [
        '1000씩 7번 세어 보세요.',
        '1000, 2000, ..., 7000!',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '1000 × 7 = 7000이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['네 자리 수', '천의 자리', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK01_Q05',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '9000은 1000이 ___개인 수입니다.',
      correctAnswer: 9,
      explanation: '9000 = 1000 × 9이므로 1000이 9개인 수입니다.',
      hints: [
        '1000씩 세어서 9000이 되려면?',
        '1000, 2000, ..., 9000 - 몇 번?',
      ],
      commonMistakes: [
        { answer: '90', misconception: '100의 개수가 아니라 1000의 개수를 물었어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['네 자리 수', '천의 자리', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK01_Q06',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1000이 4개이면 얼마인가요?',
      correctAnswer: 4000,
      explanation: '1000이 4개이면 1000 × 4 = 4000입니다.',
      hints: [
        '1000씩 4번 세어 보세요.',
        '1000 + 1000 + 1000 + 1000 = ?',
      ],
      commonMistakes: [
        { answer: '400', misconception: '100이 아니라 1000의 개수예요. 1000 × 4 = 4000이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['네 자리 수', '천의 자리', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK01_Q07',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '6000은 1000이 몇 개인 수인가요?',
      options: [
        { id: 'a', text: '3개', isCorrect: false },
        { id: 'b', text: '6개', isCorrect: true },
        { id: 'c', text: '60개', isCorrect: false },
        { id: 'd', text: '600개', isCorrect: false },
      ],
      explanation: '6000 = 1000 × 6이므로 1000이 6개입니다.',
      hints: [
        '6000 ÷ 1000 = ?',
        '1000, 2000, 3000, 4000, 5000, 6000 - 몇 번?',
      ],
      commonMistakes: [
        { answer: '60개', misconception: '100의 개수가 아니라 1000의 개수예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['네 자리 수', '천의 자리', '2학년'],
  },

  // ============================================================
  // 단원: 네 자리 수 - SK02: 네 자리 수 읽고 쓰기 (추가)
  // ============================================================
  {
    id: 'G2_S2_NUM_01_SK02_Q03',
    skillId: 'G2_S2_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"7089에서 0은 백의 자리이다." 맞나요?',
      correctAnswer: true,
      explanation: '7089에서 천의 자리는 7, 백의 자리는 0, 십의 자리는 8, 일의 자리는 9입니다.',
      hints: [
        '왼쪽부터 천, 백, 십, 일의 자리예요.',
        '7-0-8-9에서 0은 두 번째 자리에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '7089에서 0은 백의 자리가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['네 자리 수', '자릿값', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK02_Q04',
    skillId: 'G2_S2_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1000이 2개, 100이 5개, 10이 0개, 1이 3개이면 ___입니다.',
      correctAnswer: 2503,
      explanation: '2000 + 500 + 0 + 3 = 2503입니다.',
      hints: [
        '각 자릿값을 합해 보세요.',
        '2000 + 500 + 0 + 3 = ?',
      ],
      commonMistakes: [
        { answer: '253', misconception: '천의 자리를 빼먹었어요. 1000이 2개이면 2000이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '자릿값', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK02_Q05',
    skillId: 'G2_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"오천사백육십이"를 수로 쓰면?',
      correctAnswer: 5462,
      explanation: '5000 + 400 + 60 + 2 = 5462입니다.',
      hints: [
        '"오천"은 5000이에요.',
        '5000 + 400 + 60 + 2 = ?',
      ],
      commonMistakes: [
        { answer: '5426', misconception: '십의 자리와 일의 자리를 바꿨어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '읽기 쓰기', '2학년'],
  },

  // ============================================================
  // 단원: 네 자리 수 - SK03: 네 자리 수 크기 비교 (추가)
  // ============================================================
  {
    id: 'G2_S2_NUM_01_SK03_Q03',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"5678은 5687보다 크다." 맞나요?',
      correctAnswer: false,
      explanation: '천의 자리(5)와 백의 자리(6)가 같고, 십의 자리에서 7 < 8이므로 5678이 더 작습니다.',
      hints: [
        '큰 자리부터 비교해 보세요.',
        '천의 자리와 백의 자리가 같으면 십의 자리를 비교해요.',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '십의 자리에서 7 < 8이므로 5678이 더 작아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['네 자리 수', '비교', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK03_Q04',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '2345, 3245, 2435 중 가장 큰 수는 ___입니다.',
      correctAnswer: 3245,
      explanation: '천의 자리를 비교하면 3245만 천의 자리가 3이므로 가장 큽니다.',
      hints: [
        '천의 자리가 가장 큰 수를 찾아보세요.',
        '2, 3, 2 중 가장 큰 것은?',
      ],
      commonMistakes: [
        { answer: '2435', misconception: '천의 자리가 3인 수가 가장 커요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '비교', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK03_Q05',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '7801과 7810 중 더 작은 수를 쓰세요.',
      correctAnswer: 7801,
      explanation: '천의 자리(7)와 백의 자리(8)가 같고, 십의 자리에서 0 < 1이므로 7801이 더 작습니다.',
      hints: [
        '큰 자리부터 비교해 보세요.',
        '십의 자리에서 0과 1을 비교하세요.',
      ],
      commonMistakes: [
        { answer: '7810', misconception: '"더 작은 수"를 물었어요. 7801의 십의 자리가 0이므로 더 작아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '비교', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK01: 곱셈의 의미 (추가)
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK01_Q04',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"4 + 4 + 4 = 4 × 3이다." 맞나요?',
      correctAnswer: true,
      explanation: '4를 3번 더한 것이므로 4 × 3 = 12입니다.',
      hints: [
        '4가 몇 번 나와요?',
        '같은 수를 여러 번 더하면 곱셈이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '4 + 4 + 4 = 4 × 3 = 12가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈', '의미', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK01_Q05',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '6 + 6 + 6 + 6 + 6 = 6 × ___',
      correctAnswer: 5,
      explanation: '6을 5번 더했으므로 6 × 5입니다.',
      hints: [
        '6이 몇 번 나오는지 세어 보세요.',
        '6이 5번 나와요.',
      ],
      commonMistakes: [
        { answer: '30', misconception: '곱셈의 결과가 아니라 몇 번 더했는지를 물었어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈', '의미', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK01_Q06',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '한 봉지에 사탕이 7개씩 들어 있습니다. 3봉지에는 사탕이 모두 몇 개인가요?',
      correctAnswer: 21,
      explanation: '7 × 3 = 21개입니다.',
      hints: [
        '7개씩 3봉지이므로 7 × 3이에요.',
        '7 + 7 + 7 = ?',
      ],
      commonMistakes: [
        { answer: '10', misconception: '7 + 3 = 10으로 덧셈을 했어요. 7 × 3 = 21이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈', '의미', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK01_Q07',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '3 × 5와 같은 덧셈식은?',
      options: [
        { id: 'a', text: '3 + 5', isCorrect: false },
        { id: 'b', text: '5 + 5 + 5', isCorrect: false },
        { id: 'c', text: '3 + 3 + 3 + 3 + 3', isCorrect: true },
        { id: 'd', text: '3 + 3 + 5', isCorrect: false },
      ],
      explanation: '3 × 5는 3을 5번 더하는 것과 같습니다.',
      hints: [
        '3 × 5는 3을 5번 더하라는 뜻이에요.',
        '3을 5번 쓰고 더하면?',
      ],
      commonMistakes: [
        { answer: '5 + 5 + 5', misconception: '5 + 5 + 5 = 5 × 3이에요. 3 × 5는 3을 5번 더하는 거예요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈', '의미', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK02: 2, 5의 단 (추가)
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK02_Q04',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"2 × 9 = 18이다." 맞나요?',
      correctAnswer: true,
      explanation: '2 × 9 = 18입니다.',
      hints: [
        '2씩 9번 세어 보세요.',
        '2, 4, 6, 8, 10, 12, 14, 16, 18!',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '2 × 9 = 18이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈구구', '2의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK02_Q05',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '5 × 8 = ___',
      questionLatex: '5 \\times 8 = \\square',
      correctAnswer: 40,
      explanation: '5 × 8 = 40입니다.',
      hints: [
        '5씩 8번 세어 보세요.',
        '5, 10, 15, 20, 25, 30, 35, ?',
      ],
      commonMistakes: [
        { answer: '35', misconception: '5 × 7 = 35와 혼동했어요. 한 번 더 세어야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈구구', '5의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK02_Q06',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '2 × 5 = ?',
      questionLatex: '2 \\times 5 = \\square',
      correctAnswer: 10,
      explanation: '2 × 5 = 10입니다.',
      hints: [
        '2씩 5번 세어 보세요.',
        '2, 4, 6, 8, ?',
      ],
      commonMistakes: [
        { answer: '7', misconception: '2 + 5 = 7로 덧셈을 했어요. 곱셈을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈구구', '2의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK02_Q07',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '한 묶음에 5개씩 묶은 과자 7묶음은 모두 몇 개인가요?',
      options: [
        { id: 'a', text: '12개', isCorrect: false },
        { id: 'b', text: '30개', isCorrect: false },
        { id: 'c', text: '35개', isCorrect: true },
        { id: 'd', text: '40개', isCorrect: false },
      ],
      explanation: '5 × 7 = 35개입니다.',
      hints: [
        '5개씩 7묶음이므로 5 × 7이에요.',
        '5, 10, 15, 20, 25, 30, ?',
      ],
      commonMistakes: [
        { answer: '12개', misconception: '5 + 7 = 12로 덧셈을 했어요. 곱셈을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈구구', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK03: 3, 6, 9의 단 (추가)
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK03_Q04',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"6 × 7 = 42이다." 맞나요?',
      correctAnswer: true,
      explanation: '6 × 7 = 42입니다.',
      hints: [
        '6씩 7번 세어 보세요.',
        '6, 12, 18, 24, 30, 36, ?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '6 × 7 = 42가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈구구', '6의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_Q05',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '9 × 5 = ___',
      questionLatex: '9 \\times 5 = \\square',
      correctAnswer: 45,
      explanation: '9 × 5 = 45입니다.',
      hints: [
        '9씩 5번 세어 보세요.',
        '9, 18, 27, 36, ?',
      ],
      commonMistakes: [
        { answer: '36', misconception: '9 × 4 = 36과 혼동했어요. 한 번 더 세야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈구구', '9의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_Q06',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '3 × 9 = ?',
      questionLatex: '3 \\times 9 = \\square',
      correctAnswer: 27,
      explanation: '3 × 9 = 27입니다.',
      hints: [
        '3씩 9번 세어 보세요.',
        '3, 6, 9, 12, 15, 18, 21, 24, ?',
      ],
      commonMistakes: [
        { answer: '24', misconception: '3 × 8 = 24와 혼동했어요. 한 번 더 세야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈구구', '3의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_Q07',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 줄에 9명씩 6줄로 줄을 섰습니다. 모두 몇 명인가요?',
      options: [
        { id: 'a', text: '15명', isCorrect: false },
        { id: 'b', text: '45명', isCorrect: false },
        { id: 'c', text: '54명', isCorrect: true },
        { id: 'd', text: '63명', isCorrect: false },
      ],
      explanation: '9 × 6 = 54명입니다.',
      hints: [
        '9명씩 6줄이므로 9 × 6이에요.',
        '9, 18, 27, 36, 45, ?',
      ],
      commonMistakes: [
        { answer: '15명', misconception: '9 + 6 = 15로 덧셈을 했어요. 곱셈을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈구구', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 곱셈구구 - SK04: 4, 7, 8의 단 (추가)
  // ============================================================
  {
    id: 'G2_S2_NUM_02_SK04_Q04',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"4 × 7 = 28이다." 맞나요?',
      correctAnswer: true,
      explanation: '4 × 7 = 28입니다.',
      hints: [
        '4씩 7번 세어 보세요.',
        '4, 8, 12, 16, 20, 24, ?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '4 × 7 = 28이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['곱셈구구', '4의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK04_Q05',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '8 × 8 = ___',
      questionLatex: '8 \\times 8 = \\square',
      correctAnswer: 64,
      explanation: '8 × 8 = 64입니다.',
      hints: [
        '8씩 8번 세어 보세요.',
        '8, 16, 24, 32, 40, 48, 56, ?',
      ],
      commonMistakes: [
        { answer: '56', misconception: '8 × 7 = 56과 혼동했어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈구구', '8의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK04_Q06',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '7 × 6 = ?',
      questionLatex: '7 \\times 6 = \\square',
      correctAnswer: 42,
      explanation: '7 × 6 = 42입니다.',
      hints: [
        '7씩 6번 세어 보세요.',
        '7, 14, 21, 28, 35, ?',
      ],
      commonMistakes: [
        { answer: '35', misconception: '7 × 5 = 35와 혼동했어요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['곱셈구구', '7의 단', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK04_Q07',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '주차장에 자동차가 8대씩 7줄로 있습니다. 자동차는 모두 몇 대인가요?',
      options: [
        { id: 'a', text: '15대', isCorrect: false },
        { id: 'b', text: '48대', isCorrect: false },
        { id: 'c', text: '56대', isCorrect: true },
        { id: 'd', text: '64대', isCorrect: false },
      ],
      explanation: '8 × 7 = 56대입니다.',
      hints: [
        '8대씩 7줄이므로 8 × 7이에요.',
        '8씩 7번 세어 보세요.',
      ],
      commonMistakes: [
        { answer: '15대', misconception: '8 + 7 = 15로 덧셈을 했어요. 곱셈을 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['곱셈구구', '서술형', '2학년'],
  },

  // ============================================================
  // 단원: 길이 재기 (2학기) - SK01: m 단위 이해 (추가)
  // ============================================================
  {
    id: 'G2_S2_SHAPE_03_SK01_Q03',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"1m = 10cm이다." 맞나요?',
      correctAnswer: false,
      explanation: '1m = 100cm입니다. 10cm가 아니에요.',
      hints: [
        'm와 cm의 관계를 생각해 보세요.',
        '1m는 10cm보다 훨씬 길어요.',
      ],
      commonMistakes: [
        { answer: 'true', misconception: '1m = 100cm예요. 10cm가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'm', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK01_Q04',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '2m = ___cm',
      correctAnswer: 200,
      explanation: '1m = 100cm이므로 2m = 200cm입니다.',
      hints: [
        '1m = 100cm예요.',
        '100 × 2 = ?',
      ],
      commonMistakes: [
        { answer: '20', misconception: '1m = 100cm이지 10cm가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'm', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK01_Q05',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '운동장 한 바퀴가 약 200m입니다. 이것은 몇 cm인가요?',
      correctAnswer: 20000,
      explanation: '200m = 200 × 100 = 20000cm입니다.',
      hints: [
        '1m = 100cm를 이용하세요.',
        '200 × 100 = ?',
      ],
      commonMistakes: [
        { answer: '2000', misconception: '200 × 10 = 2000이 아니라 200 × 100 = 20000이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', 'm', '2학년'],
  },

  // ============================================================
  // 단원: 길이 재기 (2학기) - SK02: cm와 m 변환 (추가)
  // ============================================================
  {
    id: 'G2_S2_SHAPE_03_SK02_Q03',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"500cm = 5m이다." 맞나요?',
      correctAnswer: true,
      explanation: '500cm = 500 ÷ 100 = 5m입니다.',
      hints: [
        '100cm = 1m를 이용하세요.',
        '500 ÷ 100 = ?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '500 ÷ 100 = 5이므로 5m가 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', '단위 변환', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK02_Q04',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '4m 30cm = ___cm',
      correctAnswer: 430,
      explanation: '4m = 400cm이므로 400 + 30 = 430cm입니다.',
      hints: [
        '4m를 cm로 바꾸면?',
        '400 + 30 = ?',
      ],
      commonMistakes: [
        { answer: '43', misconception: '4m = 400cm이지 40cm가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '단위 변환', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK02_Q05',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '370cm는 몇 m 몇 cm인가요? m 수를 답하세요.',
      correctAnswer: 3,
      explanation: '370cm = 300cm + 70cm = 3m 70cm입니다.',
      hints: [
        '100cm = 1m이에요.',
        '370에서 100이 몇 개 들어가나요?',
      ],
      commonMistakes: [
        { answer: '37', misconception: '10cm가 아니라 100cm = 1m이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '단위 변환', '2학년'],
  },

  // ============================================================
  // 단원: 시각과 시간 - SK01: 몇 시 몇 분 읽기 (추가)
  // ============================================================
  {
    id: 'G2_S2_CHANGE_04_SK01_Q03',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"긴 바늘이 6을 가리키면 30분이다." 맞나요?',
      correctAnswer: true,
      explanation: '긴 바늘이 6을 가리키면 6 × 5 = 30분입니다.',
      hints: [
        '긴 바늘에서 숫자 하나는 5분이에요.',
        '6 × 5 = ?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '6 × 5 = 30이므로 30분이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시각', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK01_Q04',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 4와 5 사이, 긴 바늘이 12를 가리키면 ___시입니다.',
      correctAnswer: 4,
      explanation: '짧은 바늘이 4와 5 사이이면 4시이고, 긴 바늘이 12이면 정각입니다. 즉 4시입니다.',
      hints: [
        '짧은 바늘이 가리키는 수가 "시"예요.',
        '4와 5 사이이면 아직 4시예요.',
      ],
      commonMistakes: [
        { answer: '5', misconception: '짧은 바늘이 4와 5 사이이면 아직 4시예요. 5시가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시각', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK01_Q05',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '긴 바늘이 11을 가리키면 몇 분인가요?',
      correctAnswer: 55,
      explanation: '11 × 5 = 55분입니다.',
      hints: [
        '긴 바늘에서 숫자 하나는 5분이에요.',
        '11 × 5 = ?',
      ],
      commonMistakes: [
        { answer: '11', misconception: '긴 바늘의 숫자 × 5가 분이에요. 11분이 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시각', '2학년'],
  },

  // ============================================================
  // 단원: 시각과 시간 - SK02: 시간의 흐름 (추가)
  // ============================================================
  {
    id: 'G2_S2_CHANGE_04_SK02_Q03',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"2시간 = 120분이다." 맞나요?',
      correctAnswer: true,
      explanation: '1시간 = 60분이므로 2시간 = 120분입니다.',
      hints: [
        '1시간 = 60분이에요.',
        '60 × 2 = ?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '60 × 2 = 120이므로 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시간', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK02_Q04',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '지금 5시입니다. 2시간 후는 ___시입니다.',
      correctAnswer: 7,
      explanation: '5시에서 2시간 후는 7시입니다.',
      hints: [
        '5 + 2 = ?',
        '시계에서 5에서 2칸 더 가면?',
      ],
      commonMistakes: [
        { answer: '3', misconception: '2시간 후이므로 더해야 해요. 빼는 것이 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시간', '경과', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK02_Q05',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '지금 8시 30분입니다. 30분 후는 몇 시인가요?',
      correctAnswer: 9,
      explanation: '8시 30분에서 30분 후는 8시 60분 = 9시입니다.',
      hints: [
        '30분 + 30분 = 60분이에요.',
        '60분 = 1시간이에요.',
      ],
      commonMistakes: [
        { answer: '8', misconception: '30 + 30 = 60분 = 1시간이므로 9시가 돼요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['시간', '경과', '2학년'],
  },

  // ============================================================
  // 단원: 표와 그래프 - SK01: 표 읽기 (추가)
  // ============================================================
  {
    id: 'G2_S2_DATA_05_SK01_Q03',
    skillId: 'G2_S2_DATA_05_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '좋아하는 운동 조사: 축구 12명, 야구 8명, 농구 10명. "야구를 좋아하는 학생이 가장 적다." 맞나요?',
      correctAnswer: true,
      explanation: '8 < 10 < 12이므로 야구를 좋아하는 학생이 8명으로 가장 적습니다.',
      hints: [
        '12, 8, 10을 비교해 보세요.',
        '가장 작은 수는?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '8이 가장 작으므로 야구가 가장 적은 것이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['표', '자료 해석', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK01_Q04',
    skillId: 'G2_S2_DATA_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '좋아하는 계절: 봄 6명, 여름 9명, 가을 7명, 겨울 5명. 모두 ___명입니다.',
      correctAnswer: 27,
      explanation: '6 + 9 + 7 + 5 = 27명입니다.',
      hints: [
        '모든 인원을 더하면 돼요.',
        '6 + 9 = 15이고, 7 + 5 = 12이고, 15 + 12 = ?',
      ],
      commonMistakes: [
        { answer: '22', misconception: '한 항목을 빠뜨렸어요. 모두 더했는지 확인하세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['표', '자료 해석', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK01_Q05',
    skillId: 'G2_S2_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '좋아하는 간식: 떡볶이 11명, 피자 8명, 치킨 13명. 치킨과 피자의 차이는 몇 명인가요?',
      correctAnswer: 5,
      explanation: '13 - 8 = 5명입니다.',
      hints: [
        '치킨 13명, 피자 8명이에요.',
        '13 - 8 = ?',
      ],
      commonMistakes: [
        { answer: '21', misconception: '차이를 구할 때는 빼기를 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['표', '자료 해석', '2학년'],
  },

  // ============================================================
  // 단원: 표와 그래프 - SK02: 그래프 읽기 (추가)
  // ============================================================
  {
    id: 'G2_S2_DATA_05_SK02_Q03',
    skillId: 'G2_S2_DATA_05_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"그림그래프에서 ○ 하나가 5명을 나타낼 때, ○○는 10명이다." 맞나요?',
      correctAnswer: true,
      explanation: '○ 하나가 5명이므로 ○ 2개는 5 × 2 = 10명입니다.',
      hints: [
        '○ 하나가 5명이에요.',
        '5 × 2 = ?',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '5 × 2 = 10이 맞아요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['그래프', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK02_Q04',
    skillId: 'G2_S2_DATA_05_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '그림그래프에서 ○ 하나가 2명을 나타냅니다. 15명을 나타내려면 ○가 몇 개 반이 필요한가요? ○의 개수만 쓰세요.',
      correctAnswer: 7,
      explanation: '15 ÷ 2 = 7개 반입니다. ○ 7개와 반 개가 필요해요.',
      hints: [
        '2명씩 세어 보세요.',
        '2, 4, 6, 8, 10, 12, 14 = ○ 7개이고, 나머지 1명은 반 개예요.',
      ],
      commonMistakes: [
        { answer: '8', misconception: '15 ÷ 2 = 7 나머지 1이에요. ○ 7개와 반 개예요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['그래프', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK02_Q05',
    skillId: 'G2_S2_DATA_05_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '그림그래프에서 ○ 하나가 5명을 나타냅니다. 수학 ○○○, 국어 ○○○○, 체육 ○○. 가장 인기 있는 과목은?',
      options: [
        { id: 'a', text: '수학', isCorrect: false },
        { id: 'b', text: '국어', isCorrect: true },
        { id: 'c', text: '체육', isCorrect: false },
        { id: 'd', text: '모두 같다', isCorrect: false },
      ],
      explanation: '수학 15명, 국어 20명, 체육 10명이므로 국어가 가장 인기 있습니다.',
      hints: [
        '○의 개수를 비교해 보세요.',
        '○가 가장 많은 과목이 가장 인기 있어요.',
      ],
      commonMistakes: [
        { answer: '수학', misconception: '○가 가장 많은 것은 국어(4개)예요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['그래프', '자료 해석', '2학년'],
  },

  // ============================================================
  // ===== 추가 문제 2차 (스킬별 7문제 미달 보충) =====
  // ============================================================

  // --- G2_S1_SHAPE_04_SK02: 길이 어림하기 (3문제 추가) ---
  {
    id: 'G2_S1_SHAPE_04_SK02_Q05',
    skillId: 'G2_S1_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '지우개의 길이는 약 몇 cm일까요? (약 5cm)',
      correctAnswer: 5,
      explanation: '지우개의 길이는 보통 약 5cm 정도입니다.',
      hints: [
        '지우개를 손가락과 비교해 보세요.',
        '손가락 한 마디가 약 2cm이에요.',
      ],
      commonMistakes: [
        { answer: '50', misconception: '50cm는 매우 길어요. 지우개는 그보다 훨씬 짧아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '어림', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK02_Q06',
    skillId: 'G2_S1_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '책상의 긴 쪽 길이는 약 얼마쯤 될까요?',
      options: [
        { id: 'a', text: '약 7cm', isCorrect: false },
        { id: 'b', text: '약 70cm', isCorrect: true },
        { id: 'c', text: '약 7m', isCorrect: false },
        { id: 'd', text: '약 700cm', isCorrect: false },
      ],
      explanation: '책상의 긴 쪽 길이는 약 70cm 정도입니다.',
      hints: [
        '교과서(약 30cm)를 두 개 놓은 것보다 조금 더 길어요.',
        '7cm는 너무 짧고, 7m는 너무 길어요.',
      ],
      commonMistakes: [
        { answer: '약 7cm', misconception: '7cm는 너무 짧아요. 손가락 정도 길이밖에 안 돼요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['길이', '어림', '2학년'],
  },
  {
    id: 'G2_S1_SHAPE_04_SK02_Q07',
    skillId: 'G2_S1_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"어린이 키는 약 120cm 정도이다." 맞나요?',
      correctAnswer: true,
      explanation: '초등학교 저학년 어린이의 키는 약 120cm 정도입니다.',
      hints: [
        '1m = 100cm이에요. 어린이는 1m보다 조금 더 커요.',
        '120cm = 1m 20cm이에요.',
      ],
      commonMistakes: [
        { answer: 'false', misconception: '초등 1~2학년 어린이의 키는 보통 110~130cm 정도예요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', '어림', '2학년'],
  },

  // --- G2_S1_DATA_05_SK01: 기준에 따라 분류하기 (2문제 추가) ---
  {
    id: 'G2_S1_DATA_05_SK01_Q06',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 "동물"로 분류할 수 없는 것은?',
      options: [
        { id: 'a', text: '고양이', isCorrect: false },
        { id: 'b', text: '참새', isCorrect: false },
        { id: 'c', text: '장미', isCorrect: true },
        { id: 'd', text: '개구리', isCorrect: false },
      ],
      explanation: '장미는 꽃(식물)이지 동물이 아닙니다.',
      hints: [
        '동물은 스스로 움직일 수 있어요.',
        '장미는 어떤 것인가요?',
      ],
      commonMistakes: [
        { answer: '개구리', misconception: '개구리도 동물이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분류', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK01_Q07',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 중 짝수는 몇 개인가요?',
      correctAnswer: 5,
      explanation: '짝수는 2, 4, 6, 8, 10으로 5개입니다.',
      hints: [
        '짝수는 2로 나누어떨어지는 수예요.',
        '2, 4, 6, 8, 10을 세어 보세요.',
      ],
      commonMistakes: [
        { answer: '4', misconception: '10도 짝수예요. 빠뜨리지 마세요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['분류', '짝수', '2학년'],
  },

  // --- G2_S1_DATA_05_SK02: 분류하여 세기 (2문제 추가) ---
  {
    id: 'G2_S1_DATA_05_SK02_Q06',
    skillId: 'G2_S1_DATA_05_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '빨간 공 6개, 파란 공 4개, 노란 공 8개가 있습니다. 가장 적은 공의 색은?',
      options: [
        { id: 'a', text: '빨간 공', isCorrect: false },
        { id: 'b', text: '파란 공', isCorrect: true },
        { id: 'c', text: '노란 공', isCorrect: false },
      ],
      explanation: '파란 공이 4개로 가장 적습니다.',
      hints: [
        '6, 4, 8을 비교해 보세요.',
        '가장 작은 수는?',
      ],
      commonMistakes: [
        { answer: '빨간 공', misconception: '6 > 4이므로 빨간 공이 아니라 파란 공이 가장 적어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['분류', '비교', '2학년'],
  },
  {
    id: 'G2_S1_DATA_05_SK02_Q07',
    skillId: 'G2_S1_DATA_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '사탕 9개, 초콜릿 6개, 젤리 5개가 있습니다. 사탕과 젤리의 차이는 몇 개인가요?',
      correctAnswer: 4,
      explanation: '9 - 5 = 4개입니다.',
      hints: [
        '사탕 9개, 젤리 5개이에요.',
        '9 - 5 = ?',
      ],
      commonMistakes: [
        { answer: '14', misconception: '차이를 구할 때는 빼기를 해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['분류', '비교', '2학년'],
  },

  // --- G2_S1_NUM_03_SK03: 덧셈과 뺄셈 문장제 (2문제 추가) ---
  {
    id: 'G2_S1_NUM_03_SK03_Q06',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '철수는 사탕 25개, 영희는 37개를 가지고 있습니다. 영희가 철수보다 몇 개 더 많이 가지고 있나요?',
      options: [
        { id: 'a', text: '10개', isCorrect: false },
        { id: 'b', text: '12개', isCorrect: true },
        { id: 'c', text: '62개', isCorrect: false },
        { id: 'd', text: '22개', isCorrect: false },
      ],
      explanation: '37 - 25 = 12개 더 많습니다.',
      hints: [
        '"더 많이"는 차이를 구하는 것이에요. 뺄셈!',
        '37 - 25 = ?',
      ],
      commonMistakes: [
        { answer: '62개', misconception: '차이를 구할 때는 빼기를 해야 해요. 더하기가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['문장제', '뺄셈', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK03_Q07',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '가게에 빵이 56개 있었습니다. 오전에 19개, 오후에 23개를 팔았습니다. 남은 빵은 몇 개인가요?',
      correctAnswer: 14,
      explanation: '56 - 19 - 23 = 14개입니다. 또는 56 - (19 + 23) = 56 - 42 = 14개입니다.',
      hints: [
        '먼저 판 빵의 수를 구해 보세요. 19 + 23 = ?',
        '56 - 42 = ?',
      ],
      commonMistakes: [
        { answer: '37', misconception: '오전에 판 것만 빼고 오후에 판 것을 빼지 않았어요.' },
      ],
    },
    estimatedTimeSeconds: 30,
    tags: ['문장제', '뺄셈', '2학년'],
  },

  // --- G2_S2_CHANGE_04_SK01: 몇 시 몇 분 읽기 (2문제 추가) ---
  {
    id: 'G2_S2_CHANGE_04_SK01_Q06',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '짧은 바늘이 6과 7 사이, 긴 바늘이 9를 가리키면 몇 시 몇 분인가요?',
      options: [
        { id: 'a', text: '6시 9분', isCorrect: false },
        { id: 'b', text: '6시 45분', isCorrect: true },
        { id: 'c', text: '9시 30분', isCorrect: false },
        { id: 'd', text: '7시 45분', isCorrect: false },
      ],
      explanation: '짧은 바늘이 6과 7 사이이면 6시, 긴 바늘이 9이면 9 × 5 = 45분입니다.',
      hints: [
        '짧은 바늘이 "시", 긴 바늘이 "분"이에요.',
        '9 × 5 = 45분이에요.',
      ],
      commonMistakes: [
        { answer: '6시 9분', misconception: '긴 바늘의 숫자 × 5가 분이에요. 9분이 아니라 45분이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['시각', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK01_Q07',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '긴 바늘이 4를 가리키면 몇 분인가요?',
      correctAnswer: 20,
      explanation: '4 × 5 = 20분입니다.',
      hints: [
        '긴 바늘에서 숫자 하나는 5분이에요.',
        '4 × 5 = ?',
      ],
      commonMistakes: [
        { answer: '4', misconception: '4분이 아니에요. 긴 바늘은 숫자 × 5가 분이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시각', '2학년'],
  },

  // --- G2_S2_CHANGE_04_SK02: 시간의 흐름 (2문제 추가) ---
  {
    id: 'G2_S2_CHANGE_04_SK02_Q06',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '지금 10시입니다. 3시간 전은 몇 시였나요?',
      options: [
        { id: 'a', text: '7시', isCorrect: true },
        { id: 'b', text: '13시', isCorrect: false },
        { id: 'c', text: '8시', isCorrect: false },
        { id: 'd', text: '6시', isCorrect: false },
      ],
      explanation: '10 - 3 = 7이므로 3시간 전은 7시입니다.',
      hints: [
        '"전"이라고 했으므로 빼야 해요.',
        '10 - 3 = ?',
      ],
      commonMistakes: [
        { answer: '13시', misconception: '"전"이므로 빼야 해요. 더하는 것이 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['시간', '경과', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK02_Q07',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '지금 2시 40분입니다. 30분 후는 몇 시 몇 분인가요? 시(時)만 답하세요.',
      correctAnswer: 3,
      explanation: '2시 40분에서 30분 후는 2시 70분 = 3시 10분입니다.',
      hints: [
        '40분 + 30분 = 70분이에요.',
        '70분 = 60분 + 10분 = 1시간 10분이에요.',
      ],
      commonMistakes: [
        { answer: '2', misconception: '40 + 30 = 70분이므로 시간이 넘어가요. 3시 10분이에요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['시간', '경과', '2학년'],
  },

  // --- G2_S2_DATA_05_SK01: 표 읽기 (2문제 추가) ---
  {
    id: 'G2_S2_DATA_05_SK01_Q06',
    skillId: 'G2_S2_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '좋아하는 음식: 김밥 7명, 떡볶이 12명, 라면 9명, 피자 6명. 두 번째로 인기 있는 음식은?',
      options: [
        { id: 'a', text: '김밥', isCorrect: false },
        { id: 'b', text: '떡볶이', isCorrect: false },
        { id: 'c', text: '라면', isCorrect: true },
        { id: 'd', text: '피자', isCorrect: false },
      ],
      explanation: '12 > 9 > 7 > 6이므로 두 번째로 인기 있는 음식은 라면(9명)입니다.',
      hints: [
        '인원 수를 큰 것부터 나열해 보세요.',
        '12, 9, 7, 6 순서에서 두 번째는?',
      ],
      commonMistakes: [
        { answer: '떡볶이', misconception: '떡볶이는 1위예요. 2위를 찾아야 해요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['표', '자료 해석', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK01_Q07',
    skillId: 'G2_S2_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '좋아하는 색: 빨강 11명, 파랑 8명, 초록 6명, 노랑 5명. 빨강과 초록을 좋아하는 학생 수의 합은?',
      correctAnswer: 17,
      explanation: '11 + 6 = 17명입니다.',
      hints: [
        '빨강 11명, 초록 6명이에요.',
        '11 + 6 = ?',
      ],
      commonMistakes: [
        { answer: '5', misconception: '합이 아니라 차이를 구했어요. 더해야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['표', '자료 해석', '2학년'],
  },

  // --- G2_S2_DATA_05_SK02: 그래프 읽기 (2문제 추가) ---
  {
    id: 'G2_S2_DATA_05_SK02_Q06',
    skillId: 'G2_S2_DATA_05_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '그림그래프에서 ○ 하나가 4명입니다. ○○○○○이면 몇 명인가요?',
      correctAnswer: 20,
      explanation: '4 × 5 = 20명입니다.',
      hints: [
        '○ 하나가 4명이에요.',
        '4 × 5 = ?',
      ],
      commonMistakes: [
        { answer: '9', misconception: '4 + 5 = 9가 아니라 4 × 5 = 20이에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['그래프', '2학년'],
  },
  {
    id: 'G2_S2_DATA_05_SK02_Q07',
    skillId: 'G2_S2_DATA_05_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '그림그래프에서 ○ 하나가 3명입니다. 축구 ○○○○, 야구 ○○, 농구 ○○○. 축구와 야구를 좋아하는 학생 수의 합은?',
      options: [
        { id: 'a', text: '12명', isCorrect: false },
        { id: 'b', text: '15명', isCorrect: false },
        { id: 'c', text: '18명', isCorrect: true },
        { id: 'd', text: '21명', isCorrect: false },
      ],
      explanation: '축구 3×4=12명, 야구 3×2=6명. 12 + 6 = 18명입니다.',
      hints: [
        '축구: 3 × 4 = ?, 야구: 3 × 2 = ?',
        '12 + 6 = ?',
      ],
      commonMistakes: [
        { answer: '12명', misconception: '축구만 세고 야구를 빼먹었어요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['그래프', '자료 해석', '2학년'],
  },

  // --- G2_S2_NUM_01_SK02: 네 자리 수 읽고 쓰기 (2문제 추가) ---
  {
    id: 'G2_S2_NUM_01_SK02_Q06',
    skillId: 'G2_S2_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '8306에서 3은 어떤 자릿값을 나타내나요?',
      options: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '30', isCorrect: false },
        { id: 'c', text: '300', isCorrect: true },
        { id: 'd', text: '3000', isCorrect: false },
      ],
      explanation: '8306에서 3은 백의 자리에 있으므로 300을 나타냅니다.',
      hints: [
        '8306에서 3은 왼쪽에서 두 번째에요.',
        '천, 백, 십, 일의 자리 순서예요.',
      ],
      commonMistakes: [
        { answer: '3', misconception: '자릿값을 무시하고 숫자만 읽었어요. 백의 자리이므로 300이에요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '자릿값', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK02_Q07',
    skillId: 'G2_S2_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '"칠천팔"을 수로 쓰면?',
      correctAnswer: 7008,
      explanation: '"칠천"은 7000이고, "팔"은 8이므로 7000 + 8 = 7008입니다. 백의 자리와 십의 자리가 0이에요.',
      hints: [
        '"칠천"은 7000이에요.',
        '백의 자리와 십의 자리에 아무것도 없으면 0을 넣어요.',
      ],
      commonMistakes: [
        { answer: '78', misconception: '7000이지 70이 아니에요. 네 자리 수예요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '읽기 쓰기', '2학년'],
  },

  // --- G2_S2_NUM_01_SK03: 네 자리 수 크기 비교 (2문제 추가) ---
  {
    id: 'G2_S2_NUM_01_SK03_Q06',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 중 가장 작은 수는?',
      options: [
        { id: 'a', text: '4567', isCorrect: false },
        { id: 'b', text: '4576', isCorrect: false },
        { id: 'c', text: '4089', isCorrect: true },
        { id: 'd', text: '4765', isCorrect: false },
      ],
      explanation: '천의 자리가 모두 4이므로 백의 자리를 비교합니다. 0 < 5 < 7이므로 4089가 가장 작습니다.',
      hints: [
        '천의 자리가 같으면 백의 자리를 비교해요.',
        '백의 자리가 0인 수를 찾아보세요.',
      ],
      commonMistakes: [
        { answer: '4567', misconception: '4089의 백의 자리가 0이므로 가장 작아요.' },
      ],
    },
    estimatedTimeSeconds: 15,
    tags: ['네 자리 수', '비교', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK03_Q07',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '6543, 6534, 6345, 6354 중 가장 큰 수를 쓰세요.',
      correctAnswer: 6543,
      explanation: '천의 자리(6)가 모두 같으므로 백의 자리를 비교합니다. 5 > 3이므로 6543과 6534가 후보이고, 십의 자리에서 4 > 3이므로 6543이 가장 큽니다.',
      hints: [
        '백의 자리를 먼저 비교해 보세요.',
        '백의 자리가 5인 두 수 중에서 십의 자리를 비교하세요.',
      ],
      commonMistakes: [
        { answer: '6534', misconception: '6543과 6534에서 십의 자리를 비교하면 4 > 3이므로 6543이 더 커요.' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['네 자리 수', '비교', '2학년'],
  },

  // --- G2_S2_SHAPE_03_SK01: m 단위 이해 (2문제 추가) ---
  {
    id: 'G2_S2_SHAPE_03_SK01_Q06',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '학교에서 집까지의 거리를 재려면 어떤 단위가 적당한가요?',
      options: [
        { id: 'a', text: 'cm', isCorrect: false },
        { id: 'b', text: 'm', isCorrect: true },
        { id: 'c', text: 'mm', isCorrect: false },
      ],
      explanation: '학교에서 집까지는 매우 긴 거리이므로 m(미터)가 적당합니다.',
      hints: [
        '매우 긴 거리예요.',
        'cm나 mm로 재면 숫자가 너무 커져요.',
      ],
      commonMistakes: [
        { answer: 'cm', misconception: '학교에서 집까지는 cm로 재기엔 너무 길어요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', '단위 선택', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK01_Q07',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '5m는 몇 cm인가요?',
      correctAnswer: 500,
      explanation: '1m = 100cm이므로 5m = 500cm입니다.',
      hints: [
        '1m = 100cm예요.',
        '100 × 5 = ?',
      ],
      commonMistakes: [
        { answer: '50', misconception: '1m = 100cm이지 10cm가 아니에요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', 'm', '2학년'],
  },

  // --- G2_S2_SHAPE_03_SK02: cm와 m 변환 (2문제 추가) ---
  {
    id: 'G2_S2_SHAPE_03_SK02_Q06',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '600cm는 몇 m인가요?',
      options: [
        { id: 'a', text: '6m', isCorrect: true },
        { id: 'b', text: '60m', isCorrect: false },
        { id: 'c', text: '0.6m', isCorrect: false },
        { id: 'd', text: '600m', isCorrect: false },
      ],
      explanation: '600cm ÷ 100 = 6m입니다.',
      hints: [
        '100cm = 1m예요.',
        '600 ÷ 100 = ?',
      ],
      commonMistakes: [
        { answer: '60m', misconception: '10이 아니라 100으로 나눠야 해요.' },
      ],
    },
    estimatedTimeSeconds: 10,
    tags: ['길이', '단위 변환', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK02_Q07',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '1m 50cm + 2m 30cm = ?m ?cm. 총 몇 cm인가요?',
      correctAnswer: 380,
      explanation: '1m 50cm = 150cm, 2m 30cm = 230cm. 150 + 230 = 380cm = 3m 80cm입니다.',
      hints: [
        '먼저 모두 cm로 바꿔 보세요.',
        '150 + 230 = ?',
      ],
      commonMistakes: [
        { answer: '380', misconception: '' },
      ],
    },
    estimatedTimeSeconds: 20,
    tags: ['길이', '단위 변환', '2학년'],
  },

  // ============================================================
  // 추가 문제: 문장형(서술형) 문제 — Word Problems
  // ============================================================

  // --- 세 자리 수 문장형 ---
  {
    id: 'G2_S1_NUM_01_SK02_WP01',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '도서관에 책이 백의 자리에 3, 십의 자리에 5, 일의 자리에 8이 있습니다. 도서관에 있는 책은 모두 몇 권일까요?',
      correctAnswer: 358,
      explanation: '백의 자리 3, 십의 자리 5, 일의 자리 8이므로 300 + 50 + 8 = 358입니다.',
      hints: ['각 자릿값을 합해 보세요.', '300 + 50 + 8 = ?'],
      commonMistakes: [{ answer: '385', misconception: '자릿값의 순서를 혼동했어요. 백-십-일 순서로 쓰세요.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['word_problem', 'place_value', 'real_life', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK03_WP01',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '과일 가게에 사과가 452개, 배가 378개 있습니다. 어느 과일이 더 많을까요?',
      options: [
        { id: 'a', text: '사과', isCorrect: true },
        { id: 'b', text: '배', isCorrect: false },
        { id: 'c', text: '같다', isCorrect: false },
        { id: 'd', text: '알 수 없다', isCorrect: false },
      ],
      explanation: '452 > 378이므로 사과가 더 많습니다. 백의 자리: 4 > 3입니다.',
      hints: ['백의 자리를 먼저 비교하세요.', '4와 3 중 어느 것이 더 큰가요?'],
      commonMistakes: [{ answer: '배', misconception: '일의 자리만 보았어요. 백의 자리부터 비교해야 합니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['word_problem', 'comparison', 'real_life', '2학년'],
  },

  // --- 두 자리 수 덧셈/뺄셈 문장형 ---
  {
    id: 'G2_S1_NUM_03_SK01_WP01',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '학교 운동장에 2학년 학생 37명과 3학년 학생 45명이 모여 있습니다. 운동장에 있는 학생은 모두 몇 명일까요?',
      correctAnswer: 82,
      explanation: '37 + 45 = 82명입니다. 일의 자리: 7 + 5 = 12 → 2 쓰고 1 올림. 십의 자리: 3 + 4 + 1 = 8.',
      hints: ['두 학년의 학생 수를 더하세요.', '37 + 45를 일의 자리부터 계산해 보세요.'],
      commonMistakes: [{ answer: '72', misconception: '받아올림을 잊었어요. 일의 자리에서 10 이상이면 올림해야 해요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'addition', 'carry', 'real_life', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK02_WP01',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '마트에 우유가 63개 있었습니다. 오늘 28개가 팔렸습니다. 남은 우유는 몇 개일까요?',
      correctAnswer: 35,
      explanation: '63 - 28 = 35개입니다. 일의 자리: 3에서 8을 뺄 수 없으므로 13 - 8 = 5. 십의 자리: 5 - 2 = 3.',
      hints: ['팔렸으니 빼기를 해야 해요.', '63 - 28을 일의 자리부터 계산해 보세요.'],
      commonMistakes: [{ answer: '45', misconception: '받아내림을 하지 않았어요. 일의 자리에서 뺄 수 없으면 빌려와야 해요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'subtraction', 'borrow', 'real_life', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK03_WP01',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '버스에 사람이 42명 타고 있었습니다. 정류장에서 15명이 내리고 8명이 탔습니다. 버스에 있는 사람은 몇 명일까요?',
      correctAnswer: 35,
      explanation: '42 - 15 + 8 = 35명입니다. 먼저 42 - 15 = 27, 그 다음 27 + 8 = 35.',
      hints: ['내린 사람은 빼고, 탄 사람은 더하세요.', '42 - 15 = 27, 27 + 8 = ?'],
      commonMistakes: [{ answer: '19', misconception: '15와 8을 모두 빼버렸어요. 탄 사람은 더해야 해요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['word_problem', 'mixed_ops', 'real_life', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK01_WP02',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '아빠가 사탕 56개를 사 왔고, 엄마가 사탕 38개를 사 왔습니다. 사탕은 모두 몇 개일까요?',
      correctAnswer: 94,
      explanation: '56 + 38 = 94개입니다.',
      hints: ['두 수를 더하세요.', '일의 자리: 6 + 8 = 14 → 4 쓰고 1 올림'],
      commonMistakes: [{ answer: '84', misconception: '받아올림을 잊었어요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'addition', 'carry', 'real_life', '2학년'],
  },

  // --- 곱셈구구 문장형 ---
  {
    id: 'G2_S2_NUM_02_SK01_WP01',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '접시가 4개 있고, 각 접시에 떡볶이 떡이 3개씩 놓여 있습니다. 떡은 모두 몇 개일까요?',
      correctAnswer: 12,
      explanation: '3개씩 4접시이면 3 × 4 = 12개입니다.',
      hints: ['3개씩 4번 더하면 얼마일까요?', '3 + 3 + 3 + 3 = ? 또는 3 × 4 = ?'],
      commonMistakes: [{ answer: '7', misconception: '3과 4를 더했어요. 같은 수를 여러 번 더하는 것은 곱셈이에요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'multiplication', 'real_life', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK02_WP01',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '동물원에서 토끼가 5마리씩 3우리에 있습니다. 토끼는 모두 몇 마리일까요?',
      correctAnswer: 15,
      explanation: '5 × 3 = 15마리입니다.',
      hints: ['5마리씩 3우리니까 5를 3번 더하세요.', '5 × 3 = ?'],
      commonMistakes: [{ answer: '8', misconception: '5와 3을 더했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'multiplication', 'real_life', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_WP01',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '꽃병이 6개 있고, 각 꽃병에 장미가 3송이씩 꽂혀 있습니다. 장미는 모두 몇 송이일까요?',
      correctAnswer: 18,
      explanation: '6 × 3 = 18송이입니다.',
      hints: ['6개의 꽃병에 3송이씩이니까 6 × 3을 구하세요.', '6 × 3 = ?'],
      commonMistakes: [{ answer: '9', misconception: '6과 3을 더했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'multiplication', 'real_life', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK04_WP01',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 봉지에 사탕이 7개씩 들어 있습니다. 4봉지를 사면 사탕은 모두 몇 개일까요?',
      correctAnswer: 28,
      explanation: '7 × 4 = 28개입니다.',
      hints: ['7개씩 4봉지니까 7 × 4를 구하세요.', '7의 단에서 7 × 4 = ?'],
      commonMistakes: [{ answer: '11', misconception: '7과 4를 더했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'multiplication', 'real_life', '2학년'],
  },

  // --- 길이 재기 문장형 ---
  {
    id: 'G2_S1_SHAPE_04_SK01_WP01',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '연필의 길이가 15cm이고, 지우개의 길이가 4cm입니다. 연필은 지우개보다 몇 cm 더 길까요?',
      correctAnswer: 11,
      explanation: '15 - 4 = 11cm 더 깁니다.',
      hints: ['"더 긴" 것을 구하니 빼기를 하세요.', '15 - 4 = ?'],
      commonMistakes: [{ answer: '19', misconception: '더하기를 했어요. 차이를 구하니 빼야 해요.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['word_problem', 'length', 'real_life', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK02_WP01',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '우리 집에서 학교까지 거리가 2m 50cm입니다. 이것은 몇 cm일까요?',
      correctAnswer: 250,
      explanation: '2m = 200cm이므로 200 + 50 = 250cm입니다.',
      hints: ['1m = 100cm예요.', '2m를 cm로 바꾸면 200cm이에요.'],
      commonMistakes: [{ answer: '25', misconception: '2와 50을 합쳤어요. m를 cm로 바꿔야 해요. 1m = 100cm!' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'length', 'unit_conversion', 'real_life', '2학년'],
  },

  // --- 시각과 시간 문장형 ---
  {
    id: 'G2_S2_CHANGE_04_SK02_WP01',
    skillId: 'G2_S2_CHANGE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '수업이 오전 9시에 시작해서 오전 10시에 끝났습니다. 수업은 몇 분 동안 했을까요?',
      correctAnswer: 60,
      explanation: '9시부터 10시까지 1시간이고, 1시간 = 60분입니다.',
      hints: ['9시에서 10시까지 몇 시간인가요?', '1시간 = 60분이에요.'],
      commonMistakes: [{ answer: '1', misconception: '1시간이라고 답했지만 "몇 분"을 물었어요. 1시간 = 60분!' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'time', 'real_life', '2학년'],
  },

  // --- 분류 문장형 ---
  {
    id: 'G2_S1_DATA_05_SK01_WP01',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '우리 반 학생들이 좋아하는 과일을 조사했습니다. 사과 8명, 바나나 12명, 딸기 6명, 포도 4명이었습니다. 가장 인기 있는 과일을 좋아하는 학생은 몇 명인가요?',
      correctAnswer: 12,
      explanation: '바나나를 좋아하는 학생이 12명으로 가장 많습니다.',
      hints: ['각 과일을 좋아하는 학생 수를 비교하세요.', '8, 12, 6, 4 중 가장 큰 수는?'],
      commonMistakes: [{ answer: '8', misconception: '사과를 골랐어요. 가장 큰 수는 12입니다.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'data', 'real_life', '2학년'],
  },

  // --- 네 자리 수 문장형 ---
  {
    id: 'G2_S2_NUM_01_SK01_WP01',
    skillId: 'G2_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '놀이공원에 오늘 입장한 사람이 1000명씩 3묶음과 낱개 245명입니다. 오늘 입장한 사람은 모두 몇 명일까요?',
      correctAnswer: 3245,
      explanation: '1000 × 3 = 3000, 3000 + 245 = 3245명입니다.',
      hints: ['1000이 3개이면 3000이에요.', '3000 + 245 = ?'],
      commonMistakes: [{ answer: '3045', misconception: '245에서 200을 빠뜨렸어요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'place_value', 'real_life', '2학년'],
  },

  // --- 도형 문장형 ---
  {
    id: 'G2_S1_SHAPE_02_SK02_WP01',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -1.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '삼각형의 꼭짓점은 몇 개이고 변은 몇 개일까요? 꼭짓점 수와 변의 수를 더하면 얼마인가요?',
      correctAnswer: 6,
      explanation: '삼각형은 꼭짓점 3개, 변 3개입니다. 3 + 3 = 6.',
      hints: ['삼각형은 "삼"이 들어가요. 변과 꼭짓점이 각각 몇 개?', '3 + 3 = ?'],
      commonMistakes: [{ answer: '3', misconception: '꼭짓점만 세거나 변만 셌어요. 둘 다 더해야 해요.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['word_problem', 'shapes', 'real_life', '2학년'],
  },

  // ============================================================
  // 추가 문제: ORDERING (순서 정하기)
  // ============================================================

  // --- 세 자리 수 순서 ---
  {
    id: 'G2_S1_NUM_01_SK03_ORD01',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'ORDERING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['158', '287', '435', '692'],
      explanation: '작은 수부터 나열하면 158, 287, 435, 692입니다. 백의 자리를 비교하면 1 < 2 < 4 < 6.',
      hints: ['백의 자리 수를 먼저 비교하세요.', '백의 자리가 1인 수가 가장 작아요.'],
      commonMistakes: [{ answer: '692,435,287,158', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'number_sense', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK03_ORD02',
    skillId: 'G2_S1_NUM_01_SK03',
    questionType: 'ORDERING',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수를 큰 수부터 순서대로 놓으세요.',
      correctOrder: ['876', '543', '321', '109'],
      explanation: '큰 수부터 나열하면 876, 543, 321, 109입니다.',
      hints: ['가장 큰 수를 먼저 찾으세요.', '백의 자리를 비교하세요.'],
      commonMistakes: [{ answer: '109,321,543,876', misconception: '작은 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'number_sense', '2학년'],
  },

  // --- 네 자리 수 순서 ---
  {
    id: 'G2_S2_NUM_01_SK03_ORD01',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'ORDERING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['1350', '2780', '4560', '8920'],
      explanation: '작은 수부터 나열하면 1350, 2780, 4560, 8920입니다.',
      hints: ['천의 자리 수를 비교하세요.', '1 < 2 < 4 < 8'],
      commonMistakes: [{ answer: '8920,4560,2780,1350', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'number_sense', '2학년'],
  },
  {
    id: 'G2_S2_NUM_01_SK03_ORD02',
    skillId: 'G2_S2_NUM_01_SK03',
    questionType: 'ORDERING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 수를 큰 수부터 순서대로 놓으세요.',
      correctOrder: ['9501', '7230', '5004', '3187'],
      explanation: '큰 수부터 나열하면 9501, 7230, 5004, 3187입니다.',
      hints: ['천의 자리 수를 비교하세요.', '9 > 7 > 5 > 3'],
      commonMistakes: [{ answer: '3187,5004,7230,9501', misconception: '작은 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'number_sense', '2학년'],
  },

  // --- 곱셈구구 순서 ---
  {
    id: 'G2_S2_NUM_02_SK02_ORD01',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'ORDERING',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '2의 단 곱셈구구 결과를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['4', '8', '12', '16', '18'],
      explanation: '2×2=4, 2×4=8, 2×6=12, 2×8=16, 2×9=18입니다.',
      hints: ['2의 단을 떠올려 보세요.', '2, 4, 6, 8, 10, 12, 14, 16, 18'],
      commonMistakes: [{ answer: '18,16,12,8,4', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'multiplication', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK02_ORD02',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'ORDERING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '5의 단 곱셈구구 결과를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['10', '20', '30', '40', '45'],
      explanation: '5×2=10, 5×4=20, 5×6=30, 5×8=40, 5×9=45입니다.',
      hints: ['5의 단은 5씩 커져요.', '5, 10, 15, 20, ...'],
      commonMistakes: [{ answer: '45,40,30,20,10', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'multiplication', '2학년'],
  },

  // --- 길이 순서 ---
  {
    id: 'G2_S1_SHAPE_04_SK01_ORD01',
    skillId: 'G2_S1_SHAPE_04_SK01',
    questionType: 'ORDERING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 길이를 짧은 것부터 순서대로 놓으세요.',
      correctOrder: ['5cm', '12cm', '30cm', '48cm'],
      explanation: '짧은 것부터 나열하면 5cm, 12cm, 30cm, 48cm입니다.',
      hints: ['숫자가 작을수록 짧아요.', '5 < 12 < 30 < 48'],
      commonMistakes: [{ answer: '48cm,30cm,12cm,5cm', misconception: '긴 것부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['ordering', 'length', '2학년'],
  },
  {
    id: 'G2_S2_SHAPE_03_SK01_ORD01',
    skillId: 'G2_S2_SHAPE_03_SK01',
    questionType: 'ORDERING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 길이를 짧은 것부터 순서대로 놓으세요.',
      correctOrder: ['50cm', '1m', '2m', '5m'],
      explanation: '50cm = 0.5m이므로 50cm < 1m < 2m < 5m입니다.',
      hints: ['1m = 100cm예요. 50cm와 1m 중 어느 것이 짧을까요?', '50cm가 가장 짧아요.'],
      commonMistakes: [{ answer: '1m,50cm,2m,5m', misconception: '50cm와 1m를 비교할 때 1 < 50이라고 생각했어요. 단위를 맞춰 비교하세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['ordering', 'length', 'unit_conversion', '2학년'],
  },

  // --- 시각 순서 ---
  {
    id: 'G2_S2_CHANGE_04_SK01_ORD01',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'ORDERING',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '다음 시각을 이른 시각부터 순서대로 놓으세요.',
      correctOrder: ['오전 7시', '오전 9시', '낮 12시', '오후 3시'],
      explanation: '이른 시각부터 나열하면 오전 7시, 오전 9시, 낮 12시, 오후 3시입니다.',
      hints: ['오전이 오후보다 이른 시각이에요.', '아침부터 순서대로 생각해 보세요.'],
      commonMistakes: [{ answer: '오후 3시,낮 12시,오전 9시,오전 7시', misconception: '늦은 시각부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['ordering', 'time', '2학년'],
  },

  // ============================================================
  // 추가 문제: MATCHING (짝짓기)
  // ============================================================

  // --- 세 자리 수 매칭 ---
  {
    id: 'G2_S1_NUM_01_SK01_MAT01',
    skillId: 'G2_S1_NUM_01_SK01',
    questionType: 'MATCHING',
    difficulty: -1.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '수와 읽는 방법을 연결하세요.',
      pairs: [
        { left: '200', right: '이백' },
        { left: '500', right: '오백' },
        { left: '700', right: '칠백' },
        { left: '900', right: '구백' },
      ],
      explanation: '200=이백, 500=오백, 700=칠백, 900=구백입니다.',
      hints: ['100 단위의 수를 읽어 보세요.', '200은 100이 2개니까 "이백"이에요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '수의 읽는 방법을 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['matching', 'number_names', '2학년'],
  },
  {
    id: 'G2_S1_NUM_01_SK02_MAT01',
    skillId: 'G2_S1_NUM_01_SK02',
    questionType: 'MATCHING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '수를 자릿값으로 나타낸 것과 연결하세요.',
      pairs: [
        { left: '365', right: '300 + 60 + 5' },
        { left: '482', right: '400 + 80 + 2' },
        { left: '219', right: '200 + 10 + 9' },
        { left: '730', right: '700 + 30 + 0' },
      ],
      explanation: '365=300+60+5, 482=400+80+2, 219=200+10+9, 730=700+30+0입니다.',
      hints: ['각 자릿값을 분리해 보세요.', '365에서 백의 자리 3은 300이에요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '자릿값 분리를 다시 해 보세요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['matching', 'place_value', '2학년'],
  },

  // --- 덧셈과 뺄셈 매칭 ---
  {
    id: 'G2_S1_NUM_03_SK01_MAT01',
    skillId: 'G2_S1_NUM_03_SK01',
    questionType: 'MATCHING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '계산 결과가 같은 것끼리 연결하세요.',
      pairs: [
        { left: '15 + 23', right: '38' },
        { left: '42 - 10', right: '32' },
        { left: '27 + 11', right: '38' },
        { left: '50 - 18', right: '32' },
      ],
      explanation: '15+23=38, 42-10=32, 27+11=38, 50-18=32입니다.',
      hints: ['각각의 계산을 먼저 해 보세요.', '같은 답을 가진 것끼리 연결하세요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '계산 실수로 잘못 연결했어요.' }],
    },
    estimatedTimeSeconds: 40,
    tags: ['matching', 'computation', '2학년'],
  },

  // --- 곱셈구구 매칭 ---
  {
    id: 'G2_S2_NUM_02_SK02_MAT01',
    skillId: 'G2_S2_NUM_02_SK02',
    questionType: 'MATCHING',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '곱셈과 그 답을 연결하세요.',
      pairs: [
        { left: '2 × 7', right: '14' },
        { left: '5 × 6', right: '30' },
        { left: '2 × 9', right: '18' },
        { left: '5 × 8', right: '40' },
      ],
      explanation: '2×7=14, 5×6=30, 2×9=18, 5×8=40입니다.',
      hints: ['2의 단과 5의 단을 떠올려 보세요.', '2 × 7 = ?'],
      commonMistakes: [{ answer: 'mixed', misconception: '곱셈구구를 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['matching', 'multiplication', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_MAT01',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '곱셈과 그 답을 연결하세요.',
      pairs: [
        { left: '3 × 8', right: '24' },
        { left: '6 × 5', right: '30' },
        { left: '9 × 3', right: '27' },
        { left: '6 × 7', right: '42' },
      ],
      explanation: '3×8=24, 6×5=30, 9×3=27, 6×7=42입니다.',
      hints: ['3, 6, 9의 단을 떠올려 보세요.', '3 × 8 = ?'],
      commonMistakes: [{ answer: 'mixed', misconception: '곱셈구구를 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['matching', 'multiplication', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK04_MAT01',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'MATCHING',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '곱셈과 그 답을 연결하세요.',
      pairs: [
        { left: '4 × 6', right: '24' },
        { left: '7 × 5', right: '35' },
        { left: '8 × 3', right: '24' },
        { left: '7 × 8', right: '56' },
      ],
      explanation: '4×6=24, 7×5=35, 8×3=24, 7×8=56입니다.',
      hints: ['각 곱셈을 계산해 보세요.', '4 × 6과 8 × 3의 결과가 같아요!'],
      commonMistakes: [{ answer: 'mixed', misconception: '곱셈구구를 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['matching', 'multiplication', '2학년'],
  },

  // --- 길이 매칭 ---
  {
    id: 'G2_S2_SHAPE_03_SK02_MAT01',
    skillId: 'G2_S2_SHAPE_03_SK02',
    questionType: 'MATCHING',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '같은 길이끼리 연결하세요.',
      pairs: [
        { left: '1m', right: '100cm' },
        { left: '3m', right: '300cm' },
        { left: '200cm', right: '2m' },
        { left: '500cm', right: '5m' },
      ],
      explanation: '1m=100cm, 3m=300cm, 200cm=2m, 500cm=5m입니다.',
      hints: ['1m = 100cm예요.', 'm에서 cm로 바꿀 때 100을 곱하세요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '1m = 100cm를 기억하세요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['matching', 'length', 'unit_conversion', '2학년'],
  },

  // --- 시각 매칭 ---
  {
    id: 'G2_S2_CHANGE_04_SK01_MAT01',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'MATCHING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '시각과 설명을 연결하세요.',
      pairs: [
        { left: '3시 15분', right: '긴 바늘이 3을 가리킴' },
        { left: '6시 30분', right: '긴 바늘이 6을 가리킴' },
        { left: '9시 정각', right: '긴 바늘이 12를 가리킴' },
        { left: '12시 45분', right: '긴 바늘이 9를 가리킴' },
      ],
      explanation: '15분→3, 30분→6, 정각→12, 45분→9를 가리킵니다.',
      hints: ['긴 바늘이 1칸은 5분이에요.', '15분이면 긴 바늘은 3을 가리켜요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '분을 읽는 방법을 다시 확인해 보세요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['matching', 'time', '2학년'],
  },

  // --- 도형 매칭 ---
  {
    id: 'G2_S1_SHAPE_02_SK02_MAT01',
    skillId: 'G2_S1_SHAPE_02_SK02',
    questionType: 'MATCHING',
    difficulty: -1.0,
    difficultyLabel: '쉬움',
    content: {
      questionText: '도형과 변의 수를 연결하세요.',
      pairs: [
        { left: '삼각형', right: '3개' },
        { left: '사각형', right: '4개' },
        { left: '오각형', right: '5개' },
        { left: '육각형', right: '6개' },
      ],
      explanation: '삼각형은 변 3개, 사각형은 4개, 오각형은 5개, 육각형은 6개입니다.',
      hints: ['이름에 숫자가 들어 있어요.', '"삼"각형은 3, "사"각형은 4개예요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '도형 이름의 숫자와 변의 수를 연결해 보세요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['matching', 'shapes', '2학년'],
  },

  // ============================================================
  // 추가 문제: 문장형 보충
  // ============================================================

  {
    id: 'G2_S1_NUM_03_SK02_WP02',
    skillId: 'G2_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '형이 72장의 카드를 모았고, 동생에게 35장을 주었습니다. 형에게 남은 카드는 몇 장일까요?',
      correctAnswer: 37,
      explanation: '72 - 35 = 37장입니다.',
      hints: ['주었으니 빼기를 하세요.', '72 - 35를 계산해 보세요.'],
      commonMistakes: [{ answer: '47', misconception: '받아내림을 잘못 했어요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['word_problem', 'subtraction', 'borrow', 'real_life', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK01_WP02',
    skillId: 'G2_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '피자를 2조각씩 6명에게 나누어 주려면 피자 조각이 모두 몇 개 필요할까요?',
      correctAnswer: 12,
      explanation: '2 × 6 = 12조각이 필요합니다.',
      hints: ['2조각씩 6명이니 2를 6번 더하세요.', '2 × 6 = ?'],
      commonMistakes: [{ answer: '8', misconception: '2와 6을 더했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['word_problem', 'multiplication', 'real_life', '2학년'],
  },
  {
    id: 'G2_S2_CHANGE_04_SK01_WP01',
    skillId: 'G2_S2_CHANGE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '수영 수업이 4시 40분에 끝났습니다. 시계의 짧은 바늘은 어느 수 근처를 가리키고 있을까요?',
      options: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '4', isCorrect: true },
        { id: 'c', text: '5', isCorrect: false },
        { id: 'd', text: '8', isCorrect: false },
      ],
      explanation: '4시 40분이면 짧은 바늘은 4와 5 사이에서 4 쪽에 더 가깝습니다.',
      hints: ['짧은 바늘은 "시"를 나타내요.', '4시이니 4 근처를 가리켜요.'],
      commonMistakes: [{ answer: '8', misconception: '긴 바늘의 위치를 읽었어요. 짧은 바늘이 "시"예요.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['word_problem', 'time', 'real_life', '2학년'],
  },
  {
    id: 'G2_S1_NUM_03_SK03_WP02',
    skillId: 'G2_S1_NUM_03_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '가게에서 연필 한 자루에 50원입니다. 지우개 한 개에 30원입니다. 연필 1자루와 지우개 1개를 사고 100원을 냈습니다. 거스름돈은 얼마일까요?',
      correctAnswer: 20,
      explanation: '50 + 30 = 80원. 100 - 80 = 20원의 거스름돈을 받습니다.',
      hints: ['먼저 물건값을 합치세요.', '100 - 80 = ?'],
      commonMistakes: [{ answer: '80', misconception: '물건값의 합을 답했어요. 거스름돈 = 낸 돈 - 물건값이에요.' }],
    },
    estimatedTimeSeconds: 30,
    tags: ['word_problem', 'money', 'real_life', '2학년'],
  },
  {
    id: 'G2_S2_NUM_02_SK03_WP02',
    skillId: 'G2_S2_NUM_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '한 줄에 학생이 9명씩 서 있습니다. 3줄이면 학생은 모두 몇 명일까요?',
      correctAnswer: 27,
      explanation: '9 × 3 = 27명입니다.',
      hints: ['9명씩 3줄이니 9 × 3을 구하세요.', '9의 단: 9 × 3 = ?'],
      commonMistakes: [{ answer: '12', misconception: '9 + 3을 했어요. 곱셈을 해야 합니다.' }],
    },
    estimatedTimeSeconds: 20,
    tags: ['word_problem', 'multiplication', 'real_life', '2학년'],
  },

  // --- 추가 ORDERING ---
  {
    id: 'G2_S2_NUM_02_SK04_ORD01',
    skillId: 'G2_S2_NUM_02_SK04',
    questionType: 'ORDERING',
    difficulty: 0.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 곱셈의 결과를 작은 수부터 순서대로 놓으세요.',
      correctOrder: ['4 × 3', '7 × 3', '8 × 4', '7 × 7'],
      explanation: '4×3=12, 7×3=21, 8×4=32, 7×7=49. 작은 순: 12, 21, 32, 49.',
      hints: ['각 곱셈을 먼저 계산하세요.', '4×3=12, 7×3=21, ...'],
      commonMistakes: [{ answer: '7×7,8×4,7×3,4×3', misconception: '큰 수부터 나열했어요.' }],
    },
    estimatedTimeSeconds: 35,
    tags: ['ordering', 'multiplication', '2학년'],
  },

  // --- 추가 MATCHING ---
  {
    id: 'G2_S1_DATA_05_SK01_MAT01',
    skillId: 'G2_S1_DATA_05_SK01',
    questionType: 'MATCHING',
    difficulty: -0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '분류 기준과 예를 연결하세요.',
      pairs: [
        { left: '색깔로 분류', right: '빨간색, 파란색, 노란색' },
        { left: '모양으로 분류', right: '세모, 네모, 동그라미' },
        { left: '크기로 분류', right: '큰 것, 작은 것' },
        { left: '종류로 분류', right: '과일, 채소, 고기' },
      ],
      explanation: '색깔, 모양, 크기, 종류 등 여러 기준으로 분류할 수 있습니다.',
      hints: ['분류는 같은 특징끼리 묶는 거예요.', '색깔로 분류하면 빨간색끼리, 파란색끼리 묶어요.'],
      commonMistakes: [{ answer: 'mixed', misconception: '각 기준에 맞는 예를 연결하세요.' }],
    },
    estimatedTimeSeconds: 25,
    tags: ['matching', 'classification', '2학년'],
  },
];
