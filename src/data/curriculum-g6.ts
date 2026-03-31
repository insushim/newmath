// ============================================================
// MathVerse 6학년 커리큘럼 시드 데이터
// 2022 개정 교육과정 기반
// ============================================================
import type { SeedUnit, SeedSkill, SeedQuestion } from './curriculum-types';

// ============================================================
// 6학년 단원 정의
// ============================================================
export const G6_UNITS: SeedUnit[] = [
  // === 6학년 1학기 ===
  {
    id: 'G6_S1_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 6,
    semester: 1,
    code: 'G6_S1_01',
    nameKo: '분수의 나눗셈',
    descriptionKo: '(분수) ÷ (자연수), (분수) ÷ (분수) 를 계산할 수 있습니다.',
    sortOrder: 1,
  },
  {
    id: 'G6_S1_SHAPE_02',
    domainCode: 'SHAPE_MEAS',
    grade: 6,
    semester: 1,
    code: 'G6_S1_02',
    nameKo: '각기둥과 각뿔',
    descriptionKo: '각기둥과 각뿔의 구성 요소와 성질을 이해합니다.',
    sortOrder: 2,
  },
  {
    id: 'G6_S1_NUM_03',
    domainCode: 'NUM_OPS',
    grade: 6,
    semester: 1,
    code: 'G6_S1_03',
    nameKo: '소수의 나눗셈',
    descriptionKo: '(소수) ÷ (자연수), (소수) ÷ (소수) 를 계산할 수 있습니다.',
    sortOrder: 3,
  },
  {
    id: 'G6_S1_CHANGE_04',
    domainCode: 'CHANGE_REL',
    grade: 6,
    semester: 1,
    code: 'G6_S1_04',
    nameKo: '비와 비율',
    descriptionKo: '비와 비율의 의미를 이해하고 백분율을 구할 수 있습니다.',
    sortOrder: 4,
  },
  {
    id: 'G6_S1_DATA_05',
    domainCode: 'DATA_PROB',
    grade: 6,
    semester: 1,
    code: 'G6_S1_05',
    nameKo: '여러 가지 그래프',
    descriptionKo: '띠그래프, 원그래프를 그리고 해석할 수 있습니다.',
    sortOrder: 5,
  },
  // === 6학년 2학기 ===
  {
    id: 'G6_S2_NUM_01',
    domainCode: 'NUM_OPS',
    grade: 6,
    semester: 2,
    code: 'G6_S2_01',
    nameKo: '분수의 나눗셈 (2)',
    descriptionKo: '여러 가지 분수의 나눗셈 문제를 해결할 수 있습니다.',
    sortOrder: 1,
  },
  {
    id: 'G6_S2_NUM_02',
    domainCode: 'NUM_OPS',
    grade: 6,
    semester: 2,
    code: 'G6_S2_02',
    nameKo: '소수의 나눗셈 (2)',
    descriptionKo: '여러 가지 소수의 나눗셈 문제를 해결할 수 있습니다.',
    sortOrder: 2,
  },
  {
    id: 'G6_S2_CHANGE_03',
    domainCode: 'CHANGE_REL',
    grade: 6,
    semester: 2,
    code: 'G6_S2_03',
    nameKo: '비례식과 비례배분',
    descriptionKo: '비례식의 성질을 이해하고 비례배분을 할 수 있습니다.',
    sortOrder: 3,
  },
  {
    id: 'G6_S2_SHAPE_04',
    domainCode: 'SHAPE_MEAS',
    grade: 6,
    semester: 2,
    code: 'G6_S2_04',
    nameKo: '원의 넓이',
    descriptionKo: '원주율을 이해하고 원의 넓이를 구할 수 있습니다.',
    sortOrder: 4,
  },
  {
    id: 'G6_S2_SHAPE_05',
    domainCode: 'SHAPE_MEAS',
    grade: 6,
    semester: 2,
    code: 'G6_S2_05',
    nameKo: '원기둥, 원뿔, 구',
    descriptionKo: '원기둥, 원뿔, 구의 구성 요소와 성질을 이해합니다.',
    sortOrder: 5,
  },
  {
    id: 'G6_S2_DATA_06',
    domainCode: 'DATA_PROB',
    grade: 6,
    semester: 2,
    code: 'G6_S2_06',
    nameKo: '가능성과 통계',
    descriptionKo: '사건이 일어날 가능성을 수로 표현하고 비교할 수 있습니다.',
    sortOrder: 6,
  },
];

// ============================================================
// 6학년 스킬 정의
// ============================================================
export const G6_SKILLS: SeedSkill[] = [
  // 분수의 나눗셈
  { id: 'G6_S1_NUM_01_SK01', unitId: 'G6_S1_NUM_01', code: 'G6_S1_01_SK01', nameKo: '(분수) ÷ (자연수)', descriptionKo: '분수를 자연수로 나누기', defaultDifficulty: 1.0, sortOrder: 1, conceptExplanation: '분수를 자연수로 나눌 때는 분모에 자연수를 곱합니다.' },
  { id: 'G6_S1_NUM_01_SK02', unitId: 'G6_S1_NUM_01', code: 'G6_S1_01_SK02', nameKo: '(분수) ÷ (분수)', descriptionKo: '분수를 분수로 나누기', defaultDifficulty: 1.5, sortOrder: 2, conceptExplanation: '나누는 분수의 역수를 곱합니다.' },
  { id: 'G6_S1_NUM_01_SK03', unitId: 'G6_S1_NUM_01', code: 'G6_S1_01_SK03', nameKo: '분수 나눗셈 문장제', descriptionKo: '분수의 나눗셈을 활용한 문장제', defaultDifficulty: 1.8, sortOrder: 3, conceptExplanation: '상황에 맞는 나눗셈 식을 세우고 계산합니다.' },

  // 각기둥과 각뿔
  { id: 'G6_S1_SHAPE_02_SK01', unitId: 'G6_S1_SHAPE_02', code: 'G6_S1_02_SK01', nameKo: '각기둥의 구성 요소', descriptionKo: '각기둥의 면, 꼭짓점, 모서리', defaultDifficulty: 0.8, sortOrder: 1, conceptExplanation: '각기둥은 두 밑면이 합동인 다각형이고 옆면이 직사각형입니다.' },
  { id: 'G6_S1_SHAPE_02_SK02', unitId: 'G6_S1_SHAPE_02', code: 'G6_S1_02_SK02', nameKo: '각뿔의 구성 요소', descriptionKo: '각뿔의 면, 꼭짓점, 모서리', defaultDifficulty: 0.9, sortOrder: 2, conceptExplanation: '각뿔은 밑면이 다각형이고 옆면이 삼각형입니다.' },
  { id: 'G6_S1_SHAPE_02_SK03', unitId: 'G6_S1_SHAPE_02', code: 'G6_S1_02_SK03', nameKo: '각기둥의 전개도', descriptionKo: '각기둥의 전개도 그리기', defaultDifficulty: 1.2, sortOrder: 3, conceptExplanation: '각기둥을 펼치면 밑면 2개와 옆면으로 이루어진 전개도가 됩니다.' },

  // 소수의 나눗셈
  { id: 'G6_S1_NUM_03_SK01', unitId: 'G6_S1_NUM_03', code: 'G6_S1_03_SK01', nameKo: '(소수) ÷ (자연수)', descriptionKo: '소수를 자연수로 나누기', defaultDifficulty: 1.0, sortOrder: 1, conceptExplanation: '자연수의 나눗셈과 같이 계산하고 소수점을 찍습니다.' },
  { id: 'G6_S1_NUM_03_SK02', unitId: 'G6_S1_NUM_03', code: 'G6_S1_03_SK02', nameKo: '(소수) ÷ (소수)', descriptionKo: '소수를 소수로 나누기', defaultDifficulty: 1.5, sortOrder: 2, conceptExplanation: '나누는 수를 자연수로 만든 후 계산합니다.' },

  // 비와 비율
  { id: 'G6_S1_CHANGE_04_SK01', unitId: 'G6_S1_CHANGE_04', code: 'G6_S1_04_SK01', nameKo: '비 알기', descriptionKo: '비의 의미와 표현', defaultDifficulty: 0.7, sortOrder: 1, conceptExplanation: '두 수를 비교할 때 "A 대 B" 또는 A:B로 나타냅니다.' },
  { id: 'G6_S1_CHANGE_04_SK02', unitId: 'G6_S1_CHANGE_04', code: 'G6_S1_04_SK02', nameKo: '비율과 백분율', descriptionKo: '비율의 의미와 백분율 구하기', defaultDifficulty: 1.0, sortOrder: 2, conceptExplanation: '비율 = (비교하는 양) ÷ (기준량), 백분율 = 비율 × 100 (%)' },

  // 여러 가지 그래프
  { id: 'G6_S1_DATA_05_SK01', unitId: 'G6_S1_DATA_05', code: 'G6_S1_05_SK01', nameKo: '띠그래프와 원그래프', descriptionKo: '띠그래프와 원그래프 읽기', defaultDifficulty: 0.8, sortOrder: 1, conceptExplanation: '전체에 대한 각 부분의 비율을 띠나 원으로 나타낸 그래프입니다.' },

  // 분수의 나눗셈 (2)
  { id: 'G6_S2_NUM_01_SK01', unitId: 'G6_S2_NUM_01', code: 'G6_S2_01_SK01', nameKo: '(대분수) ÷ (대분수)', descriptionKo: '대분수끼리 나누기', defaultDifficulty: 1.6, sortOrder: 1, conceptExplanation: '대분수를 가분수로 바꾼 뒤 역수를 곱합니다.' },

  // 소수의 나눗셈 (2)
  { id: 'G6_S2_NUM_02_SK01', unitId: 'G6_S2_NUM_02', code: 'G6_S2_02_SK01', nameKo: '몫의 소수점 위치', descriptionKo: '소수 나눗셈에서 몫의 소수점 찾기', defaultDifficulty: 1.4, sortOrder: 1, conceptExplanation: '나누는 수를 10배, 100배 하면 나누어지는 수도 같이 합니다.' },

  // 비례식과 비례배분
  { id: 'G6_S2_CHANGE_03_SK01', unitId: 'G6_S2_CHANGE_03', code: 'G6_S2_03_SK01', nameKo: '비례식', descriptionKo: '비례식의 성질 (외항의 곱 = 내항의 곱)', defaultDifficulty: 1.3, sortOrder: 1, conceptExplanation: 'a:b = c:d 일 때 a×d = b×c 입니다.' },
  { id: 'G6_S2_CHANGE_03_SK02', unitId: 'G6_S2_CHANGE_03', code: 'G6_S2_03_SK02', nameKo: '비례배분', descriptionKo: '주어진 비로 전체를 나누기', defaultDifficulty: 1.5, sortOrder: 2, conceptExplanation: '전체 × (각 비 / 비의 합)으로 구합니다.' },

  // 원의 넓이
  { id: 'G6_S2_SHAPE_04_SK01', unitId: 'G6_S2_SHAPE_04', code: 'G6_S2_04_SK01', nameKo: '원주와 원주율', descriptionKo: '원주와 원주율(π)의 이해', defaultDifficulty: 1.0, sortOrder: 1, conceptExplanation: '원주 = 지름 × 원주율(π ≈ 3.14)' },
  { id: 'G6_S2_SHAPE_04_SK02', unitId: 'G6_S2_SHAPE_04', code: 'G6_S2_04_SK02', nameKo: '원의 넓이 구하기', descriptionKo: '원의 넓이 = π × r²', defaultDifficulty: 1.3, sortOrder: 2, conceptExplanation: '원의 넓이 = 반지름 × 반지름 × 원주율' },

  // 원기둥, 원뿔, 구
  { id: 'G6_S2_SHAPE_05_SK01', unitId: 'G6_S2_SHAPE_05', code: 'G6_S2_05_SK01', nameKo: '원기둥의 성질', descriptionKo: '원기둥의 구성 요소와 전개도', defaultDifficulty: 1.1, sortOrder: 1, conceptExplanation: '원기둥은 두 밑면이 합동인 원이고 옆면은 직사각형입니다.' },

  // 가능성과 통계
  { id: 'G6_S2_DATA_06_SK01', unitId: 'G6_S2_DATA_06', code: 'G6_S2_06_SK01', nameKo: '가능성을 수로 나타내기', descriptionKo: '사건의 가능성을 0~1로 표현', defaultDifficulty: 1.0, sortOrder: 1, conceptExplanation: '불가능 = 0, 반반 = 1/2, 확실 = 1' },
];

// ============================================================
// 6학년 문제 정의
// ============================================================
export const G6_QUESTIONS: SeedQuestion[] = [
  // === 분수의 나눗셈 ===
  {
    id: 'G6_Q001', skillId: 'G6_S1_NUM_01_SK01', questionType: 'SHORT_ANSWER', difficulty: 0.8, difficultyLabel: '보통',
    content: {
      questionText: '4/5 ÷ 2 = ?',
      questionLatex: '\\frac{4}{5} \\div 2 = \\square',
      explanation: '4/5 ÷ 2 = 4/(5×2) = 4/10 = 2/5',
      hints: ['분수를 자연수로 나눌 때는 분모에 자연수를 곱해요', '4/(5×2) = 4/10', '약분하면 2/5'],
      correctAnswer: '2/5',
      commonMistakes: [{ answer: '8/5', misconception: '분자에 곱했어요' }],
    },
    estimatedTimeSeconds: 30, tags: ['분수', '나눗셈'],
  },
  {
    id: 'G6_Q002', skillId: 'G6_S1_NUM_01_SK01', questionType: 'MULTIPLE_CHOICE', difficulty: 0.9, difficultyLabel: '보통',
    content: {
      questionText: '3/4 ÷ 3 의 값은?',
      questionLatex: '\\frac{3}{4} \\div 3 = ?',
      options: [
        { id: 'a', text: '1/4', isCorrect: true },
        { id: 'b', text: '3/4', isCorrect: false },
        { id: 'c', text: '9/4', isCorrect: false },
        { id: 'd', text: '1/12', isCorrect: false },
      ],
      explanation: '3/4 ÷ 3 = 3/(4×3) = 3/12 = 1/4',
      hints: ['분모에 3을 곱해보세요', '3/12을 약분하면?'],
    },
    estimatedTimeSeconds: 25, tags: ['분수', '나눗셈'],
  },
  {
    id: 'G6_Q003', skillId: 'G6_S1_NUM_01_SK02', questionType: 'SHORT_ANSWER', difficulty: 1.3, difficultyLabel: '어려움',
    content: {
      questionText: '2/3 ÷ 4/5 = ?',
      questionLatex: '\\frac{2}{3} \\div \\frac{4}{5} = \\square',
      explanation: '2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6',
      hints: ['나누는 분수의 역수를 곱해요', '4/5의 역수는 5/4', '2/3 × 5/4 = 10/12, 약분하면?'],
      correctAnswer: '5/6',
      commonMistakes: [{ answer: '8/15', misconception: '분자끼리, 분모끼리 나눴어요' }],
    },
    estimatedTimeSeconds: 40, tags: ['분수', '나눗셈', '역수'],
  },
  {
    id: 'G6_Q004', skillId: 'G6_S1_NUM_01_SK03', questionType: 'SHORT_ANSWER', difficulty: 1.6, difficultyLabel: '어려움',
    content: {
      questionText: '리본 3/4 m를 3명이 똑같이 나누면 한 사람은 몇 m를 받나요?',
      explanation: '3/4 ÷ 3 = 3/(4×3) = 3/12 = 1/4 (m)',
      hints: ['전체 길이를 사람 수로 나눠요', '3/4 ÷ 3을 계산하세요', '3/12을 약분하면 1/4'],
      correctAnswer: '1/4',
    },
    estimatedTimeSeconds: 45, tags: ['분수', '나눗셈', '문장제'],
  },

  // === 각기둥과 각뿔 ===
  {
    id: 'G6_Q005', skillId: 'G6_S1_SHAPE_02_SK01', questionType: 'MULTIPLE_CHOICE', difficulty: 0.7, difficultyLabel: '쉬움',
    content: {
      questionText: '삼각기둥의 면의 수는?',
      options: [
        { id: 'a', text: '5개', isCorrect: true },
        { id: 'b', text: '4개', isCorrect: false },
        { id: 'c', text: '6개', isCorrect: false },
        { id: 'd', text: '3개', isCorrect: false },
      ],
      explanation: '삼각기둥: 밑면 2개(삼각형) + 옆면 3개(직사각형) = 5개',
      hints: ['밑면은 위아래 2개, 옆면은 삼각형의 변 수만큼'],
    },
    estimatedTimeSeconds: 20, tags: ['각기둥', '면'],
  },
  {
    id: 'G6_Q006', skillId: 'G6_S1_SHAPE_02_SK02', questionType: 'MULTIPLE_CHOICE', difficulty: 0.8, difficultyLabel: '보통',
    content: {
      questionText: '사각뿔의 꼭짓점은 몇 개인가요?',
      options: [
        { id: 'a', text: '5개', isCorrect: true },
        { id: 'b', text: '4개', isCorrect: false },
        { id: 'c', text: '8개', isCorrect: false },
        { id: 'd', text: '6개', isCorrect: false },
      ],
      explanation: '사각뿔: 밑면 꼭짓점 4개 + 꼭대기 1개 = 5개',
      hints: ['밑면(사각형)의 꼭짓점에 꼭대기 점을 더해요'],
    },
    estimatedTimeSeconds: 20, tags: ['각뿔', '꼭짓점'],
  },

  // === 소수의 나눗셈 ===
  {
    id: 'G6_Q007', skillId: 'G6_S1_NUM_03_SK01', questionType: 'SHORT_ANSWER', difficulty: 1.0, difficultyLabel: '보통',
    content: {
      questionText: '7.2 ÷ 4 = ?',
      questionLatex: '7.2 \\div 4 = \\square',
      explanation: '72 ÷ 4 = 18이고, 원래 수가 소수 한 자리이므로 1.8',
      hints: ['소수점을 무시하고 72 ÷ 4를 먼저 계산해보세요', '18에 소수점을 다시 찍으면?'],
      correctAnswer: '1.8',
    },
    estimatedTimeSeconds: 25, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_Q008', skillId: 'G6_S1_NUM_03_SK02', questionType: 'SHORT_ANSWER', difficulty: 1.4, difficultyLabel: '어려움',
    content: {
      questionText: '6.3 ÷ 0.9 = ?',
      questionLatex: '6.3 \\div 0.9 = \\square',
      explanation: '양쪽에 10을 곱하면 63 ÷ 9 = 7',
      hints: ['나누는 수를 자연수로 만들어보세요', '0.9 × 10 = 9, 6.3 × 10 = 63', '63 ÷ 9 = ?'],
      correctAnswer: '7',
    },
    estimatedTimeSeconds: 30, tags: ['소수', '나눗셈'],
  },

  // === 비와 비율 ===
  {
    id: 'G6_Q009', skillId: 'G6_S1_CHANGE_04_SK01', questionType: 'MULTIPLE_CHOICE', difficulty: 0.6, difficultyLabel: '쉬움',
    content: {
      questionText: '사과 3개와 귤 5개의 비는?',
      options: [
        { id: 'a', text: '3 : 5', isCorrect: true },
        { id: 'b', text: '5 : 3', isCorrect: false },
        { id: 'c', text: '3 : 8', isCorrect: false },
        { id: 'd', text: '8 : 3', isCorrect: false },
      ],
      explanation: '사과 대 귤 = 3 : 5',
      hints: ['앞에 나온 것이 비의 앞, 뒤에 나온 것이 비의 뒤'],
    },
    estimatedTimeSeconds: 15, tags: ['비', '비교'],
  },
  {
    id: 'G6_Q010', skillId: 'G6_S1_CHANGE_04_SK02', questionType: 'SHORT_ANSWER', difficulty: 1.0, difficultyLabel: '보통',
    content: {
      questionText: '20명 중 8명이 안경을 쓰고 있습니다. 안경을 쓴 학생의 비율은 몇 %인가요?',
      explanation: '비율 = 8 ÷ 20 = 0.4, 백분율 = 0.4 × 100 = 40%',
      hints: ['비율 = (비교하는 양) ÷ (기준량)', '8 ÷ 20 = 0.4', '0.4를 백분율로 바꾸면?'],
      correctAnswer: '40',
    },
    estimatedTimeSeconds: 35, tags: ['비율', '백분율'],
  },

  // === 띠그래프와 원그래프 ===
  {
    id: 'G6_Q011', skillId: 'G6_S1_DATA_05_SK01', questionType: 'MULTIPLE_CHOICE', difficulty: 0.7, difficultyLabel: '쉬움',
    content: {
      questionText: '원그래프에서 전체를 나타내는 각도는?',
      options: [
        { id: 'a', text: '360°', isCorrect: true },
        { id: 'b', text: '180°', isCorrect: false },
        { id: 'c', text: '100°', isCorrect: false },
        { id: 'd', text: '90°', isCorrect: false },
      ],
      explanation: '원 한 바퀴 = 360°이므로, 원그래프의 전체 = 360°',
      hints: ['원 한 바퀴는 몇 도인가요?'],
    },
    estimatedTimeSeconds: 15, tags: ['원그래프', '각도'],
  },

  // === 비례식 ===
  {
    id: 'G6_Q012', skillId: 'G6_S2_CHANGE_03_SK01', questionType: 'SHORT_ANSWER', difficulty: 1.2, difficultyLabel: '어려움',
    content: {
      questionText: '2 : 5 = □ : 20 에서 □에 알맞은 수는?',
      questionLatex: '2 : 5 = \\square : 20',
      explanation: '외항의 곱 = 내항의 곱\n2 × 20 = 5 × □\n40 = 5 × □\n□ = 8',
      hints: ['비례식의 성질: 외항의 곱 = 내항의 곱', '2 × 20 = 5 × □', '40 ÷ 5 = ?'],
      correctAnswer: '8',
    },
    estimatedTimeSeconds: 30, tags: ['비례식', '외항내항'],
  },
  {
    id: 'G6_Q013', skillId: 'G6_S2_CHANGE_03_SK02', questionType: 'SHORT_ANSWER', difficulty: 1.4, difficultyLabel: '어려움',
    content: {
      questionText: '120개의 사탕을 3 : 5로 비례배분하면 더 많이 받는 쪽은 몇 개?',
      explanation: '비의 합: 3+5 = 8\n더 많은 쪽: 120 × 5/8 = 75개',
      hints: ['비의 합을 먼저 구해요: 3+5 = 8', '많은 쪽은 전체 × 5/8', '120 × 5/8 = ?'],
      correctAnswer: '75',
    },
    estimatedTimeSeconds: 40, tags: ['비례배분'],
  },

  // === 원의 넓이 ===
  {
    id: 'G6_Q014', skillId: 'G6_S2_SHAPE_04_SK01', questionType: 'SHORT_ANSWER', difficulty: 0.9, difficultyLabel: '보통',
    content: {
      questionText: '지름이 10cm인 원의 원주는? (원주율 = 3.14)',
      explanation: '원주 = 지름 × π = 10 × 3.14 = 31.4 (cm)',
      hints: ['원주 = 지름 × 원주율', '10 × 3.14 = ?'],
      correctAnswer: '31.4',
    },
    estimatedTimeSeconds: 25, tags: ['원주', '원주율'],
  },
  {
    id: 'G6_Q015', skillId: 'G6_S2_SHAPE_04_SK02', questionType: 'SHORT_ANSWER', difficulty: 1.2, difficultyLabel: '어려움',
    content: {
      questionText: '반지름이 5cm인 원의 넓이는? (원주율 = 3.14)',
      questionLatex: '\\pi \\times 5^2 = ?',
      explanation: '원의 넓이 = π × r² = 3.14 × 5 × 5 = 3.14 × 25 = 78.5 (cm²)',
      hints: ['원의 넓이 = π × 반지름 × 반지름', '5 × 5 = 25', '3.14 × 25 = ?'],
      correctAnswer: '78.5',
    },
    estimatedTimeSeconds: 35, tags: ['원', '넓이'],
  },

  // === 원기둥 ===
  {
    id: 'G6_Q016', skillId: 'G6_S2_SHAPE_05_SK01', questionType: 'MULTIPLE_CHOICE', difficulty: 1.0, difficultyLabel: '보통',
    content: {
      questionText: '원기둥의 전개도에서 옆면의 모양은?',
      options: [
        { id: 'a', text: '직사각형', isCorrect: true },
        { id: 'b', text: '원', isCorrect: false },
        { id: 'c', text: '삼각형', isCorrect: false },
        { id: 'd', text: '사다리꼴', isCorrect: false },
      ],
      explanation: '원기둥을 펼치면 옆면은 직사각형이 됩니다. 가로 = 원주, 세로 = 높이',
      hints: ['원기둥의 옆면을 가위로 자르면 어떤 모양이 될까요?'],
    },
    estimatedTimeSeconds: 20, tags: ['원기둥', '전개도'],
  },

  // === 가능성과 통계 ===
  {
    id: 'G6_Q017', skillId: 'G6_S2_DATA_06_SK01', questionType: 'MULTIPLE_CHOICE', difficulty: 0.8, difficultyLabel: '보통',
    content: {
      questionText: '동전을 던질 때 앞면이 나올 가능성을 수로 나타내면?',
      options: [
        { id: 'a', text: '1/2', isCorrect: true },
        { id: 'b', text: '1', isCorrect: false },
        { id: 'c', text: '0', isCorrect: false },
        { id: 'd', text: '1/4', isCorrect: false },
      ],
      explanation: '동전의 면은 앞면과 뒷면 2가지이므로 앞면이 나올 가능성 = 1/2',
      hints: ['가능한 결과가 2가지인데 그 중 1가지'],
    },
    estimatedTimeSeconds: 15, tags: ['가능성', '확률'],
  },
  {
    id: 'G6_Q018', skillId: 'G6_S2_DATA_06_SK01', questionType: 'TRUE_FALSE', difficulty: 0.7, difficultyLabel: '쉬움',
    content: {
      questionText: '"내일 해가 동쪽에서 뜬다"의 가능성은 1이다.',
      correctAnswer: true,
      explanation: '해가 동쪽에서 뜨는 것은 확실한 일이므로 가능성은 1입니다.',
      hints: ['확실한 일의 가능성은 얼마인가요?'],
    },
    estimatedTimeSeconds: 10, tags: ['가능성'],
  },

  // === 대분수 나눗셈 ===
  {
    id: 'G6_Q019', skillId: 'G6_S2_NUM_01_SK01', questionType: 'SHORT_ANSWER', difficulty: 1.5, difficultyLabel: '어려움',
    content: {
      questionText: '1과 1/2 ÷ 2와 1/4 = ?',
      questionLatex: '1\\frac{1}{2} \\div 2\\frac{1}{4} = \\square',
      explanation: '1과 1/2 = 3/2, 2와 1/4 = 9/4\n3/2 ÷ 9/4 = 3/2 × 4/9 = 12/18 = 2/3',
      hints: ['대분수를 가분수로 바꾸세요', '3/2 ÷ 9/4', '역수를 곱하면: 3/2 × 4/9'],
      correctAnswer: '2/3',
    },
    estimatedTimeSeconds: 50, tags: ['대분수', '나눗셈'],
  },

  // === 소수 나눗셈 심화 ===
  {
    id: 'G6_Q020', skillId: 'G6_S2_NUM_02_SK01', questionType: 'SHORT_ANSWER', difficulty: 1.3, difficultyLabel: '어려움',
    content: {
      questionText: '4.56 ÷ 0.12 = ?',
      questionLatex: '4.56 \\div 0.12 = \\square',
      explanation: '양쪽에 100을 곱하면: 456 ÷ 12 = 38',
      hints: ['나누는 수를 자연수로 만들기 위해 100을 곱해요', '456 ÷ 12 = ?', '12 × 38 = 456 확인!'],
      correctAnswer: '38',
    },
    estimatedTimeSeconds: 40, tags: ['소수', '나눗셈'],
  },
];
