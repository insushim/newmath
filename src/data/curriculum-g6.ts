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

  // ============================================================
  // 추가 문제: 분수의 나눗셈 - SK01 (분수 ÷ 자연수)
  // ============================================================
  {
    id: 'G6_S1_NUM_01_SK01_Q03',
    skillId: 'G6_S1_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '2/7 ÷ 2 = ?',
      questionLatex: '\\frac{2}{7} \\div 2 = \\square',
      options: [
        { id: 'a', text: '1/7', isCorrect: true },
        { id: 'b', text: '4/7', isCorrect: false },
        { id: 'c', text: '2/14', isCorrect: false },
        { id: 'd', text: '2/9', isCorrect: false },
      ],
      explanation: '2/7 ÷ 2 = 2/(7×2) = 2/14 = 1/7',
      hints: ['분모에 자연수를 곱해보세요', '2/14를 약분하면?'],
      commonMistakes: [{ answer: '4/7', misconception: '분자에 2를 곱했습니다. 나눗셈이므로 분모에 곱해야 해요.' }],
    },
    estimatedTimeSeconds: 25, tags: ['분수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_01_SK01_Q04',
    skillId: 'G6_S1_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -1.0,
    difficultyLabel: '매우 쉬움',
    content: {
      questionText: '"6/8 ÷ 3 = 2/8 = 1/4이다." 맞나요?',
      correctAnswer: true,
      explanation: '6/8 ÷ 3 = 6/(8×3) = 6/24 = 1/4. 또는 분자를 나누면 6÷3=2이므로 2/8 = 1/4. 맞습니다.',
      hints: ['분자 6을 3으로 나눌 수 있어요', '2/8을 약분하면 1/4'],
      commonMistakes: [{ answer: 'false', misconception: '6/24으로만 생각하고 2/8과 다르다고 판단했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['분수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_01_SK01_Q05',
    skillId: 'G6_S1_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '5/6 ÷ 5 = □',
      questionLatex: '\\frac{5}{6} \\div 5 = \\square',
      correctAnswer: '1/6',
      explanation: '5/6 ÷ 5 = 5/(6×5) = 5/30 = 1/6. 또는 분자 5÷5 = 1이므로 1/6',
      hints: ['분자를 5로 나눌 수 있나요?', '5÷5 = 1, 분모는 그대로 6'],
      commonMistakes: [{ answer: '1/30', misconception: '약분을 하지 않았습니다. 5/30 = 1/6이에요.' }],
    },
    estimatedTimeSeconds: 25, tags: ['분수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_01_SK01_Q06',
    skillId: 'G6_S1_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '7/12 ÷ 7 = ?',
      questionLatex: '\\frac{7}{12} \\div 7 = \\square',
      correctAnswer: '1/12',
      explanation: '7/12 ÷ 7 = 7/(12×7) = 7/84 = 1/12',
      hints: ['분모에 7을 곱하면 12×7 = 84', '7/84를 약분하면?'],
      commonMistakes: [{ answer: '1/84', misconception: '분자를 1로 바꿨지만 분모는 12가 아닌 84로 두었습니다.' }],
    },
    estimatedTimeSeconds: 30, tags: ['분수', '나눗셈'],
  },

  // ============================================================
  // 추가 문제: 분수의 나눗셈 - SK02 (분수 ÷ 분수)
  // ============================================================
  {
    id: 'G6_S1_NUM_01_SK02_Q02',
    skillId: 'G6_S1_NUM_01_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '3/5 ÷ 1/2 = ?',
      questionLatex: '\\frac{3}{5} \\div \\frac{1}{2} = \\square',
      options: [
        { id: 'a', text: '6/5', isCorrect: true },
        { id: 'b', text: '3/10', isCorrect: false },
        { id: 'c', text: '5/6', isCorrect: false },
        { id: 'd', text: '3/7', isCorrect: false },
      ],
      explanation: '3/5 ÷ 1/2 = 3/5 × 2/1 = 6/5 = 1과 1/5',
      hints: ['나누는 분수의 역수를 곱하세요', '1/2의 역수는 2/1'],
      commonMistakes: [{ answer: '3/10', misconception: '역수를 곱하지 않고 분모끼리 곱했습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['분수', '나눗셈', '역수'],
  },
  {
    id: 'G6_S1_NUM_01_SK02_Q03',
    skillId: 'G6_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '5/8 ÷ 3/4 = ?',
      questionLatex: '\\frac{5}{8} \\div \\frac{3}{4} = \\square',
      correctAnswer: '5/6',
      explanation: '5/8 ÷ 3/4 = 5/8 × 4/3 = 20/24 = 5/6',
      hints: ['3/4의 역수는 4/3', '5/8 × 4/3 = 20/24', '20/24를 약분하면?'],
      commonMistakes: [{ answer: '20/24', misconception: '약분을 하지 않았습니다. 4로 나누면 5/6이에요.' }],
    },
    estimatedTimeSeconds: 40, tags: ['분수', '나눗셈', '역수'],
  },
  {
    id: 'G6_S1_NUM_01_SK02_Q04',
    skillId: 'G6_S1_NUM_01_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"1/3 ÷ 1/3 = 1이다." 맞나요?',
      correctAnswer: true,
      explanation: '1/3 ÷ 1/3 = 1/3 × 3/1 = 3/3 = 1. 같은 수끼리 나누면 항상 1입니다.',
      hints: ['같은 수를 나누면 결과가 얼마인가요?', '1/3의 역수는 3/1'],
      commonMistakes: [{ answer: 'false', misconception: '분수끼리 나누면 1이 안 된다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['분수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_01_SK02_Q05',
    skillId: 'G6_S1_NUM_01_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '7/9 ÷ 2/3 = □',
      questionLatex: '\\frac{7}{9} \\div \\frac{2}{3} = \\square',
      correctAnswer: '7/6',
      explanation: '7/9 ÷ 2/3 = 7/9 × 3/2 = 21/18 = 7/6 = 1과 1/6',
      hints: ['2/3의 역수는 3/2', '7/9 × 3/2 = 21/18', '약분하면 7/6'],
      commonMistakes: [{ answer: '21/18', misconception: '약분을 하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 45, tags: ['분수', '나눗셈', '역수'],
  },
  {
    id: 'G6_S1_NUM_01_SK02_Q06',
    skillId: 'G6_S1_NUM_01_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '1/4 ÷ 1/8 = ?',
      questionLatex: '\\frac{1}{4} \\div \\frac{1}{8} = \\square',
      correctAnswer: '2',
      explanation: '1/4 ÷ 1/8 = 1/4 × 8/1 = 8/4 = 2. 1/4 안에 1/8이 2개 들어갑니다.',
      hints: ['1/8의 역수는 8', '1/4 × 8 = 8/4 = 2'],
      commonMistakes: [{ answer: '1/2', misconception: '분자끼리 나누고 분모끼리 나누어 1/2로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['분수', '나눗셈'],
  },

  // ============================================================
  // 추가 문제: 분수 나눗셈 문장제 - SK03
  // ============================================================
  {
    id: 'G6_S1_NUM_01_SK03_Q02',
    skillId: 'G6_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.2,
    difficultyLabel: '어려움',
    content: {
      questionText: '밀가루 2/3 kg을 4명이 똑같이 나누면 한 사람은 몇 kg을 받나요?',
      options: [
        { id: 'a', text: '1/6 kg', isCorrect: true },
        { id: 'b', text: '2/7 kg', isCorrect: false },
        { id: 'c', text: '8/3 kg', isCorrect: false },
        { id: 'd', text: '1/12 kg', isCorrect: false },
      ],
      explanation: '2/3 ÷ 4 = 2/(3×4) = 2/12 = 1/6 (kg)',
      hints: ['전체를 사람 수로 나누세요', '2/3 ÷ 4를 계산하세요'],
      commonMistakes: [{ answer: '8/3 kg', misconception: '곱셈으로 계산했습니다. 나눠야 해요.' }],
    },
    estimatedTimeSeconds: 40, tags: ['분수', '나눗셈', '문장제'],
  },
  {
    id: 'G6_S1_NUM_01_SK03_Q03',
    skillId: 'G6_S1_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '주스 5/6 L를 1/3 L씩 컵에 나누어 담으면 몇 컵이 되나요?',
      correctAnswer: '5/2',
      explanation: '5/6 ÷ 1/3 = 5/6 × 3/1 = 15/6 = 5/2 = 2.5컵',
      hints: ['전체 양을 한 컵의 양으로 나누세요', '5/6 ÷ 1/3을 계산하세요', '역수를 곱하면 5/6 × 3 = 15/6'],
      commonMistakes: [{ answer: '5/18', misconception: '역수를 곱하지 않고 분모끼리 곱했습니다.' }],
    },
    estimatedTimeSeconds: 50, tags: ['분수', '나눗셈', '문장제'],
  },
  {
    id: 'G6_S1_NUM_01_SK03_Q04',
    skillId: 'G6_S1_NUM_01_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '철사 6/7 m를 2명이 똑같이 나누면 한 사람은 몇 m?',
      options: [
        { id: 'a', text: '3/7 m', isCorrect: true },
        { id: 'b', text: '6/9 m', isCorrect: false },
        { id: 'c', text: '12/7 m', isCorrect: false },
        { id: 'd', text: '3/14 m', isCorrect: false },
      ],
      explanation: '6/7 ÷ 2 = 6/(7×2) = 6/14 = 3/7 (m)',
      hints: ['분모에 2를 곱하거나 분자를 2로 나누세요', '6/14를 약분하면?'],
      commonMistakes: [{ answer: '12/7 m', misconception: '나눗셈이 아니라 곱셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['분수', '나눗셈', '문장제'],
  },
  {
    id: 'G6_S1_NUM_01_SK03_Q05',
    skillId: 'G6_S1_NUM_01_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 2.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '페인트 3/4 L로 벽 2/5 m²를 칠할 수 있습니다. 1m²를 칠하려면 페인트가 몇 L 필요한가요?',
      correctAnswer: '15/8',
      explanation: '1m² 당 페인트 = 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1과 7/8 (L)',
      hints: ['1m²당 양 = 전체 양 ÷ 면적', '3/4 ÷ 2/5를 계산하세요', '역수를 곱하면 3/4 × 5/2'],
      commonMistakes: [{ answer: '6/20', misconception: '역수를 곱하지 않고 분자끼리 분모끼리 나누었습니다.' }],
    },
    estimatedTimeSeconds: 60, tags: ['분수', '나눗셈', '문장제', '심화'],
  },

  // ============================================================
  // 추가 문제: 각기둥의 구성 요소 - SK01
  // ============================================================
  {
    id: 'G6_S1_SHAPE_02_SK01_Q02',
    skillId: 'G6_S1_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '오각기둥의 면의 수는 몇 개인가요?',
      correctAnswer: '7',
      explanation: '오각기둥: 밑면 2개(오각형) + 옆면 5개(직사각형) = 7개',
      hints: ['밑면은 위아래 2개', '옆면은 밑면의 변의 수만큼'],
      commonMistakes: [{ answer: '5', misconception: '옆면만 세었습니다. 밑면 2개를 더해야 해요.' }],
    },
    estimatedTimeSeconds: 20, tags: ['각기둥', '면'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK01_Q03',
    skillId: 'G6_S1_SHAPE_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '사각기둥의 모서리는 몇 개인가요?',
      options: [
        { id: 'a', text: '8개', isCorrect: false },
        { id: 'b', text: '10개', isCorrect: false },
        { id: 'c', text: '12개', isCorrect: true },
        { id: 'd', text: '16개', isCorrect: false },
      ],
      explanation: '사각기둥: 밑면 모서리 4×2 = 8개 + 옆 모서리 4개 = 12개',
      hints: ['밑면의 변 수 × 3이 전체 모서리 수예요', '4 × 3 = 12'],
      commonMistakes: [{ answer: '8', misconception: '밑면 모서리만 세었습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['각기둥', '모서리'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK01_Q04',
    skillId: 'G6_S1_SHAPE_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '삼각기둥의 꼭짓점은 □개이다.',
      correctAnswer: '6',
      explanation: '삼각기둥: 밑면 꼭짓점 3 × 2 = 6개',
      hints: ['위와 아래 밑면에 각각 꼭짓점이 있어요', '삼각형 꼭짓점 3개 × 2'],
      commonMistakes: [{ answer: '5', misconception: '각뿔과 혼동했습니다. 기둥은 밑면이 2개예요.' }],
    },
    estimatedTimeSeconds: 15, tags: ['각기둥', '꼭짓점'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK01_Q05',
    skillId: 'G6_S1_SHAPE_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"각기둥의 옆면은 모두 직사각형이다." 맞나요?',
      correctAnswer: true,
      explanation: '각기둥의 옆면은 모두 직사각형입니다. 밑면에 수직인 면이기 때문이에요.',
      hints: ['각기둥을 옆에서 보면 어떤 모양인가요?'],
      commonMistakes: [{ answer: 'false', misconception: '사각형이라고만 생각했지만, 옆면은 반드시 직사각형이에요.' }],
    },
    estimatedTimeSeconds: 15, tags: ['각기둥', '옆면'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK01_Q06',
    skillId: 'G6_S1_SHAPE_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '육각기둥의 꼭짓점, 모서리, 면의 수를 각각 구하세요. 꼭짓점의 수만 답하세요.',
      correctAnswer: '12',
      explanation: '육각기둥: 꼭짓점 6×2=12개, 모서리 6×3=18개, 면 6+2=8개',
      hints: ['밑면의 변 수(n)일 때: 꼭짓점=2n, 모서리=3n, 면=n+2', '육각형이므로 n=6'],
      commonMistakes: [{ answer: '8', misconception: '면의 수와 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['각기둥', '꼭짓점'],
  },

  // ============================================================
  // 추가 문제: 각뿔의 구성 요소 - SK02
  // ============================================================
  {
    id: 'G6_S1_SHAPE_02_SK02_Q02',
    skillId: 'G6_S1_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '삼각뿔의 면의 수는 몇 개인가요?',
      correctAnswer: '4',
      explanation: '삼각뿔: 밑면 1개(삼각형) + 옆면 3개(삼각형) = 4개',
      hints: ['밑면은 1개, 옆면은 밑면의 변 수만큼'],
      commonMistakes: [{ answer: '3', misconception: '밑면을 세지 않았습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['각뿔', '면'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK02_Q03',
    skillId: 'G6_S1_SHAPE_02_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '오각뿔의 모서리는 몇 개인가요?',
      options: [
        { id: 'a', text: '8개', isCorrect: false },
        { id: 'b', text: '10개', isCorrect: true },
        { id: 'c', text: '12개', isCorrect: false },
        { id: 'd', text: '15개', isCorrect: false },
      ],
      explanation: '오각뿔: 밑면 모서리 5개 + 옆 모서리 5개 = 10개',
      hints: ['밑면의 변 수(n)일 때 모서리 = 2n', '오각형이므로 n=5, 2×5=10'],
      commonMistakes: [{ answer: '15', misconception: '각기둥의 공식(3n)을 사용했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['각뿔', '모서리'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK02_Q04',
    skillId: 'G6_S1_SHAPE_02_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"각뿔의 옆면은 모두 삼각형이다." 맞나요?',
      correctAnswer: true,
      explanation: '각뿔의 옆면은 밑면의 각 변과 꼭대기 점을 이어 만들어지므로 모두 삼각형입니다.',
      hints: ['꼭대기 점과 밑면의 한 변이 만나면 어떤 도형?'],
      commonMistakes: [{ answer: 'false', misconception: '사각뿔의 경우 사각형이라고 착각했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['각뿔', '옆면'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK02_Q05',
    skillId: 'G6_S1_SHAPE_02_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '삼각뿔의 꼭짓점은 □개이다.',
      correctAnswer: '4',
      explanation: '삼각뿔: 밑면 꼭짓점 3개 + 꼭대기 1개 = 4개',
      hints: ['밑면(삼각형)의 꼭짓점 수에 꼭대기 1개를 더하세요'],
      commonMistakes: [{ answer: '3', misconception: '꼭대기 점을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['각뿔', '꼭짓점'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK02_Q06',
    skillId: 'G6_S1_SHAPE_02_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '육각뿔의 면의 수는?',
      correctAnswer: '7',
      explanation: '육각뿔: 밑면 1개 + 옆면 6개 = 7개',
      hints: ['밑면의 변 수(n)일 때 면 = n+1', '6+1=7'],
      commonMistakes: [{ answer: '8', misconception: '각기둥의 공식(n+2)을 사용했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['각뿔', '면'],
  },

  // ============================================================
  // 추가 문제: 각기둥의 전개도 - SK03
  // ============================================================
  {
    id: 'G6_S1_SHAPE_02_SK03_Q01',
    skillId: 'G6_S1_SHAPE_02_SK03',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '삼각기둥의 전개도는 어떤 도형들로 이루어져 있나요?',
      options: [
        { id: 'a', text: '삼각형 2개, 직사각형 3개', isCorrect: true },
        { id: 'b', text: '삼각형 3개, 직사각형 2개', isCorrect: false },
        { id: 'c', text: '직사각형 5개', isCorrect: false },
        { id: 'd', text: '삼각형 2개, 직사각형 2개', isCorrect: false },
      ],
      explanation: '삼각기둥의 전개도: 밑면(삼각형) 2개 + 옆면(직사각형) 3개',
      hints: ['밑면이 삼각형이므로 삼각형 2개', '옆면은 삼각형의 변 수만큼'],
      commonMistakes: [{ answer: '삼각형 3개, 직사각형 2개', misconception: '밑면과 옆면의 수를 바꿔 생각했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['각기둥', '전개도'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK03_Q02',
    skillId: 'G6_S1_SHAPE_02_SK03',
    questionType: 'TRUE_FALSE',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '"사각기둥의 전개도에서 옆면은 하나의 큰 직사각형으로 이어져 있다." 맞나요?',
      correctAnswer: true,
      explanation: '사각기둥의 옆면 4개는 전개도에서 하나로 이어진 큰 직사각형을 이룰 수 있습니다.',
      hints: ['옆면을 펼쳐서 이어보세요', '4개의 직사각형이 이어지면?'],
      commonMistakes: [{ answer: 'false', misconception: '항상 분리되어야 한다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['각기둥', '전개도'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK03_Q03',
    skillId: 'G6_S1_SHAPE_02_SK03',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '오각기둥의 전개도를 그리면 도형이 모두 □개 필요하다.',
      correctAnswer: '7',
      explanation: '오각기둥: 밑면(오각형) 2개 + 옆면(직사각형) 5개 = 7개',
      hints: ['밑면 2개 + 옆면(밑면의 변 수)개', '2 + 5 = 7'],
      commonMistakes: [{ answer: '5', misconception: '옆면만 세었습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['각기둥', '전개도'],
  },
  {
    id: 'G6_S1_SHAPE_02_SK03_Q04',
    skillId: 'G6_S1_SHAPE_02_SK03',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '사각기둥의 전개도에는 직사각형이 모두 몇 개 있나요? (밑면이 직사각형인 경우)',
      correctAnswer: '6',
      explanation: '밑면 직사각형 2개 + 옆면 직사각형 4개 = 6개',
      hints: ['사각기둥의 밑면이 직사각형이면 밑면도 직사각형', '밑면 2개 + 옆면 4개'],
      commonMistakes: [{ answer: '4', misconception: '옆면만 세었습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['각기둥', '전개도'],
  },

  // ============================================================
  // 추가 문제: 소수의 나눗셈 - SK01 (소수 ÷ 자연수)
  // ============================================================
  {
    id: 'G6_S1_NUM_03_SK01_Q02',
    skillId: 'G6_S1_NUM_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '9.6 ÷ 3 = ?',
      options: [
        { id: 'a', text: '3.2', isCorrect: true },
        { id: 'b', text: '32', isCorrect: false },
        { id: 'c', text: '0.32', isCorrect: false },
        { id: 'd', text: '3.3', isCorrect: false },
      ],
      explanation: '96 ÷ 3 = 32, 소수점 한 자리이므로 3.2',
      hints: ['소수점 무시하고 96 ÷ 3 = 32', '소수점을 다시 찍으면 3.2'],
      commonMistakes: [{ answer: '32', misconception: '소수점을 찍지 않았습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK01_Q03',
    skillId: 'G6_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '4.8 ÷ 2 = ?',
      correctAnswer: '2.4',
      explanation: '48 ÷ 2 = 24, 소수점 한 자리이므로 2.4',
      hints: ['48 ÷ 2를 먼저 계산하세요', '소수점을 한 자리 찍으면?'],
      commonMistakes: [{ answer: '24', misconception: '소수점을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK01_Q04',
    skillId: 'G6_S1_NUM_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '15.75 ÷ 5 = □',
      correctAnswer: '3.15',
      explanation: '1575 ÷ 5 = 315, 소수점 두 자리이므로 3.15',
      hints: ['1575 ÷ 5를 계산하세요', '소수점 아래 두 자리를 찍으세요'],
      commonMistakes: [{ answer: '31.5', misconception: '소수점 위치를 잘못 찍었습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK01_Q05',
    skillId: 'G6_S1_NUM_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"12.6 ÷ 6 = 2.1이다." 맞나요?',
      correctAnswer: true,
      explanation: '126 ÷ 6 = 21, 소수점 한 자리이므로 2.1. 맞습니다.',
      hints: ['126 ÷ 6을 먼저 계산해보세요', '21에 소수점을 찍으면?'],
      commonMistakes: [{ answer: 'false', misconception: '계산 오류로 2.6이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK01_Q06',
    skillId: 'G6_S1_NUM_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '0.84 ÷ 7 = ?',
      correctAnswer: '0.12',
      explanation: '84 ÷ 7 = 12, 소수점 두 자리이므로 0.12',
      hints: ['84 ÷ 7 = 12', '0.84는 소수점 아래 두 자리이므로 0.12'],
      commonMistakes: [{ answer: '1.2', misconception: '소수점 위치를 잘못 찍었습니다.' }],
    },
    estimatedTimeSeconds: 30, tags: ['소수', '나눗셈'],
  },

  // ============================================================
  // 추가 문제: 소수의 나눗셈 - SK02 (소수 ÷ 소수)
  // ============================================================
  {
    id: 'G6_S1_NUM_03_SK02_Q02',
    skillId: 'G6_S1_NUM_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '2.4 ÷ 0.6 = ?',
      options: [
        { id: 'a', text: '4', isCorrect: true },
        { id: 'b', text: '0.4', isCorrect: false },
        { id: 'c', text: '40', isCorrect: false },
        { id: 'd', text: '1.4', isCorrect: false },
      ],
      explanation: '양쪽에 10을 곱하면 24 ÷ 6 = 4',
      hints: ['나누는 수를 자연수로 만드세요', '0.6 × 10 = 6, 2.4 × 10 = 24'],
      commonMistakes: [{ answer: '0.4', misconception: '소수점을 잘못 찍었습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK02_Q03',
    skillId: 'G6_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '3.75 ÷ 0.25 = ?',
      correctAnswer: '15',
      explanation: '양쪽에 100을 곱하면 375 ÷ 25 = 15',
      hints: ['나누는 수를 자연수로 만들기 위해 100을 곱하세요', '375 ÷ 25 = ?'],
      commonMistakes: [{ answer: '1.5', misconception: '10만 곱해서 37.5 ÷ 2.5로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 40, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK02_Q04',
    skillId: 'G6_S1_NUM_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '4.5 ÷ 0.5 = □',
      correctAnswer: '9',
      explanation: '양쪽에 10을 곱하면 45 ÷ 5 = 9',
      hints: ['0.5를 자연수로 만드세요', '45 ÷ 5 = ?'],
      commonMistakes: [{ answer: '0.9', misconception: '소수점을 잘못 찍었습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK02_Q05',
    skillId: 'G6_S1_NUM_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '"1.2 ÷ 0.4 = 3이다." 맞나요?',
      correctAnswer: true,
      explanation: '양쪽에 10을 곱하면 12 ÷ 4 = 3. 맞습니다.',
      hints: ['10을 곱해서 자연수로 만들어 보세요', '12 ÷ 4 = ?'],
      commonMistakes: [{ answer: 'false', misconception: '0.3이라고 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S1_NUM_03_SK02_Q06',
    skillId: 'G6_S1_NUM_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '0.8 ÷ 0.2 = ?',
      correctAnswer: '4',
      explanation: '양쪽에 10을 곱하면 8 ÷ 2 = 4',
      hints: ['10을 곱하면 8 ÷ 2', '간단한 나눗셈이에요'],
      commonMistakes: [{ answer: '0.4', misconception: '소수점을 잘못 찍었습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['소수', '나눗셈'],
  },

  // ============================================================
  // 추가 문제: 비 알기 - SK01
  // ============================================================
  {
    id: 'G6_S1_CHANGE_04_SK01_Q02',
    skillId: 'G6_S1_CHANGE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '남자 12명, 여자 8명일 때 남자와 여자의 비를 가장 간단한 자연수의 비로 나타내면?',
      correctAnswer: '3:2',
      explanation: '12:8 = 3:2 (4로 나누면)',
      hints: ['12와 8의 최대공약수로 나누세요', '최대공약수는 4'],
      commonMistakes: [{ answer: '12:8', misconception: '간단한 비로 나타내지 않았습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['비', '비교'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK01_Q03',
    skillId: 'G6_S1_CHANGE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '빨간 구슬 2개, 파란 구슬 7개의 비는?',
      options: [
        { id: 'a', text: '2 : 7', isCorrect: true },
        { id: 'b', text: '7 : 2', isCorrect: false },
        { id: 'c', text: '2 : 9', isCorrect: false },
        { id: 'd', text: '9 : 2', isCorrect: false },
      ],
      explanation: '빨간 대 파란 = 2 : 7',
      hints: ['앞에 나온 것이 비의 앞자리'],
      commonMistakes: [{ answer: '7 : 2', misconception: '순서를 바꿨습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['비', '비교'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK01_Q04',
    skillId: 'G6_S1_CHANGE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"6:9와 2:3은 같은 비이다." 맞나요?',
      correctAnswer: true,
      explanation: '6:9를 3으로 나누면 2:3이므로 같은 비입니다.',
      hints: ['6과 9의 최대공약수로 나누어보세요', '6÷3=2, 9÷3=3'],
      commonMistakes: [{ answer: 'false', misconception: '숫자가 다르므로 다른 비라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['비', '같은 비'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK01_Q05',
    skillId: 'G6_S1_CHANGE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '15 : 25를 가장 간단한 자연수의 비로 나타내면 □ : □ → 앞의 수만 답하세요.',
      correctAnswer: '3',
      explanation: '15:25 = 3:5 (5로 나누면)',
      hints: ['15와 25의 최대공약수는?', '5로 나누세요'],
      commonMistakes: [{ answer: '15', misconception: '약분하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['비', '간단한 비'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK01_Q06',
    skillId: 'G6_S1_CHANGE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.2,
    difficultyLabel: '어려움',
    content: {
      questionText: '0.3 : 0.5를 자연수의 비로 나타내면? (앞의 수:뒤의 수 형식으로 답하세요)',
      correctAnswer: '3:5',
      explanation: '양쪽에 10을 곱하면 3:5',
      hints: ['소수를 자연수로 만들기 위해 10을 곱하세요', '0.3×10=3, 0.5×10=5'],
      commonMistakes: [{ answer: '0.3:0.5', misconception: '자연수의 비로 바꾸지 않았습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['비', '소수 비'],
  },

  // ============================================================
  // 추가 문제: 비율과 백분율 - SK02
  // ============================================================
  {
    id: 'G6_S1_CHANGE_04_SK02_Q02',
    skillId: 'G6_S1_CHANGE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '전체 50명 중 합격자가 30명입니다. 합격률은?',
      options: [
        { id: 'a', text: '60%', isCorrect: true },
        { id: 'b', text: '30%', isCorrect: false },
        { id: 'c', text: '50%', isCorrect: false },
        { id: 'd', text: '40%', isCorrect: false },
      ],
      explanation: '30 ÷ 50 = 0.6, 0.6 × 100 = 60%',
      hints: ['비율 = 합격자 ÷ 전체', '0.6을 백분율로 바꾸면?'],
      commonMistakes: [{ answer: '30%', misconception: '합격자 수 자체를 백분율로 적었습니다.' }],
    },
    estimatedTimeSeconds: 30, tags: ['비율', '백분율'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK02_Q03',
    skillId: 'G6_S1_CHANGE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '10명 중 5명이 수학을 좋아합니다. 수학을 좋아하는 학생의 비율은 몇 %?',
      correctAnswer: '50',
      explanation: '5 ÷ 10 = 0.5, 0.5 × 100 = 50%',
      hints: ['비율 = 5 ÷ 10', '0.5는 몇 %?'],
      commonMistakes: [{ answer: '5', misconception: '% 단위를 무시하고 인원만 적었습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['비율', '백분율'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK02_Q04',
    skillId: 'G6_S1_CHANGE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '25명 중 5명이 결석했습니다. 출석률은 □%이다.',
      correctAnswer: '80',
      explanation: '출석 = 25-5 = 20명. 비율 = 20÷25 = 0.8 = 80%',
      hints: ['먼저 출석 인원을 구하세요', '20÷25 = 0.8 = ?%'],
      commonMistakes: [{ answer: '20', misconception: '결석률(20%)을 구했거나 출석 인원(20명)을 적었습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['비율', '백분율'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK02_Q05',
    skillId: 'G6_S1_CHANGE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"비율 0.25는 백분율로 25%이다." 맞나요?',
      correctAnswer: true,
      explanation: '0.25 × 100 = 25%',
      hints: ['비율에 100을 곱하면 백분율'],
      commonMistakes: [{ answer: 'false', misconception: '2.5%라고 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['비율', '백분율'],
  },
  {
    id: 'G6_S1_CHANGE_04_SK02_Q06',
    skillId: 'G6_S1_CHANGE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '원래 가격이 8000원인 물건을 6400원에 샀습니다. 할인율은 몇 %인가요?',
      correctAnswer: '20',
      explanation: '할인 금액 = 8000-6400 = 1600원. 할인율 = 1600÷8000 = 0.2 = 20%',
      hints: ['할인 금액을 먼저 구하세요', '1600 ÷ 8000 = ?'],
      commonMistakes: [{ answer: '80', misconception: '6400÷8000=80%는 판매율이지 할인율이 아닙니다.' }],
    },
    estimatedTimeSeconds: 45, tags: ['비율', '백분율', '할인'],
  },

  // ============================================================
  // 추가 문제: 띠그래프와 원그래프 - SK01
  // ============================================================
  {
    id: 'G6_S1_DATA_05_SK01_Q02',
    skillId: 'G6_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '원그래프에서 25%를 차지하는 부분의 각도는 몇 도인가요?',
      correctAnswer: '90',
      explanation: '360° × 25/100 = 360° × 0.25 = 90°',
      hints: ['전체 360°의 25%', '360 × 0.25 = ?'],
      commonMistakes: [{ answer: '25', misconception: '백분율을 그대로 각도로 적었습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['원그래프', '각도'],
  },
  {
    id: 'G6_S1_DATA_05_SK01_Q03',
    skillId: 'G6_S1_DATA_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '띠그래프에서 전체를 100%라 할 때, A항목이 30%, B항목이 45%이면 나머지는?',
      options: [
        { id: 'a', text: '25%', isCorrect: true },
        { id: 'b', text: '15%', isCorrect: false },
        { id: 'c', text: '35%', isCorrect: false },
        { id: 'd', text: '75%', isCorrect: false },
      ],
      explanation: '100% - 30% - 45% = 25%',
      hints: ['전체 100%에서 A와 B를 빼세요', '100 - 30 - 45 = ?'],
      commonMistakes: [{ answer: '75%', misconception: 'A+B의 합을 답으로 적었습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['띠그래프'],
  },
  {
    id: 'G6_S1_DATA_05_SK01_Q04',
    skillId: 'G6_S1_DATA_05_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"띠그래프에서 각 부분의 백분율의 합은 항상 100%이다." 맞나요?',
      correctAnswer: true,
      explanation: '띠그래프는 전체를 100%로 놓고 각 부분의 비율을 나타내므로 합은 항상 100%입니다.',
      hints: ['전체 = 100%'],
      commonMistakes: [{ answer: 'false', misconception: '반올림 때문에 100%가 안 된다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10, tags: ['띠그래프'],
  },
  {
    id: 'G6_S1_DATA_05_SK01_Q05',
    skillId: 'G6_S1_DATA_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '원그래프에서 50%를 차지하는 부분의 각도는?',
      correctAnswer: '180',
      explanation: '360° × 50/100 = 180°',
      hints: ['전체 360°의 절반', '360 × 0.5 = ?'],
      commonMistakes: [{ answer: '50', misconception: '%와 °를 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['원그래프', '각도'],
  },
  {
    id: 'G6_S1_DATA_05_SK01_Q06',
    skillId: 'G6_S1_DATA_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '원그래프에서 전체에 대한 비율이 가장 큰 항목은 원에서 가장 □ 부분이다.',
      correctAnswer: '넓은',
      explanation: '비율이 클수록 원그래프에서 차지하는 부분(부채꼴)이 넓어집니다.',
      hints: ['비율이 크면 각도도 크고 면적도 커요'],
      commonMistakes: [{ answer: '작은', misconception: '반대로 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['원그래프'],
  },

  // ============================================================
  // 추가 문제: 대분수 나눗셈 - SK01
  // ============================================================
  {
    id: 'G6_S2_NUM_01_SK01_Q02',
    skillId: 'G6_S2_NUM_01_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '2와 1/3 ÷ 1과 1/6 = ?',
      questionLatex: '2\\frac{1}{3} \\div 1\\frac{1}{6} = \\square',
      options: [
        { id: 'a', text: '2', isCorrect: true },
        { id: 'b', text: '3/2', isCorrect: false },
        { id: 'c', text: '7/3', isCorrect: false },
        { id: 'd', text: '1/2', isCorrect: false },
      ],
      explanation: '7/3 ÷ 7/6 = 7/3 × 6/7 = 42/21 = 2',
      hints: ['대분수를 가분수로 바꾸세요', '7/3 ÷ 7/6 → 역수를 곱하면?'],
      commonMistakes: [{ answer: '7/3', misconception: '역수를 곱하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 50, tags: ['대분수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_01_SK01_Q03',
    skillId: 'G6_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '3과 1/4 ÷ 1과 5/8 = ?',
      questionLatex: '3\\frac{1}{4} \\div 1\\frac{5}{8} = \\square',
      correctAnswer: '2',
      explanation: '13/4 ÷ 13/8 = 13/4 × 8/13 = 104/52 = 2',
      hints: ['대분수를 가분수로: 13/4 ÷ 13/8', '역수를 곱하면: 13/4 × 8/13', '약분하면?'],
      commonMistakes: [{ answer: '13/32', misconception: '역수를 곱하지 않고 분자끼리 곱했습니다.' }],
    },
    estimatedTimeSeconds: 55, tags: ['대분수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_01_SK01_Q04',
    skillId: 'G6_S2_NUM_01_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '1과 1/3 ÷ 2 = □',
      questionLatex: '1\\frac{1}{3} \\div 2 = \\square',
      correctAnswer: '2/3',
      explanation: '4/3 ÷ 2 = 4/(3×2) = 4/6 = 2/3',
      hints: ['대분수를 가분수로: 4/3', '4/3 ÷ 2 = 4/6'],
      commonMistakes: [{ answer: '4/6', misconception: '약분을 하지 않았습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['대분수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_01_SK01_Q05',
    skillId: 'G6_S2_NUM_01_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '"2와 1/2 ÷ 1과 1/4 = 2이다." 맞나요?',
      correctAnswer: true,
      explanation: '5/2 ÷ 5/4 = 5/2 × 4/5 = 20/10 = 2. 맞습니다.',
      hints: ['대분수를 가분수로 바꿔보세요', '5/2 ÷ 5/4를 계산하세요'],
      commonMistakes: [{ answer: 'false', misconception: '계산 오류로 5/8이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 40, tags: ['대분수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_01_SK01_Q06',
    skillId: 'G6_S2_NUM_01_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '1과 1/2 ÷ 3 = ?',
      questionLatex: '1\\frac{1}{2} \\div 3 = \\square',
      correctAnswer: '1/2',
      explanation: '3/2 ÷ 3 = 3/(2×3) = 3/6 = 1/2',
      hints: ['대분수를 가분수로: 3/2', '분모에 3을 곱하세요'],
      commonMistakes: [{ answer: '1/6', misconception: '약분을 하지 않았습니다. 3/6 = 1/2' }],
    },
    estimatedTimeSeconds: 30, tags: ['대분수', '나눗셈'],
  },

  // ============================================================
  // 추가 문제: 몫의 소수점 위치 - SK01
  // ============================================================
  {
    id: 'G6_S2_NUM_02_SK01_Q02',
    skillId: 'G6_S2_NUM_02_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '7.2 ÷ 0.08 = ?',
      options: [
        { id: 'a', text: '90', isCorrect: true },
        { id: 'b', text: '9', isCorrect: false },
        { id: 'c', text: '900', isCorrect: false },
        { id: 'd', text: '0.9', isCorrect: false },
      ],
      explanation: '양쪽에 100을 곱하면 720 ÷ 8 = 90',
      hints: ['나누는 수를 자연수로 만드세요', '0.08 × 100 = 8, 7.2 × 100 = 720'],
      commonMistakes: [{ answer: '9', misconception: '10만 곱해서 72 ÷ 0.8으로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_02_SK01_Q03',
    skillId: 'G6_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '3.6 ÷ 0.4 = ?',
      correctAnswer: '9',
      explanation: '양쪽에 10을 곱하면 36 ÷ 4 = 9',
      hints: ['10을 곱하면 36 ÷ 4', '36 ÷ 4 = ?'],
      commonMistakes: [{ answer: '0.9', misconception: '소수점 위치를 잘못 찍었습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_02_SK01_Q04',
    skillId: 'G6_S2_NUM_02_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"0.48 ÷ 0.06 = 8이다." 맞나요?',
      correctAnswer: true,
      explanation: '양쪽에 100을 곱하면 48 ÷ 6 = 8. 맞습니다.',
      hints: ['100을 곱하면 48 ÷ 6', '48 ÷ 6 = ?'],
      commonMistakes: [{ answer: 'false', misconception: '0.8이라고 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_02_SK01_Q05',
    skillId: 'G6_S2_NUM_02_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '12.5 ÷ 0.05 = □',
      correctAnswer: '250',
      explanation: '양쪽에 100을 곱하면 1250 ÷ 5 = 250',
      hints: ['0.05를 자연수로 만들기 위해 100을 곱하세요', '1250 ÷ 5 = ?'],
      commonMistakes: [{ answer: '25', misconception: '10만 곱해서 계산했습니다.' }],
    },
    estimatedTimeSeconds: 40, tags: ['소수', '나눗셈'],
  },
  {
    id: 'G6_S2_NUM_02_SK01_Q06',
    skillId: 'G6_S2_NUM_02_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '1.5 ÷ 0.5 = ?',
      correctAnswer: '3',
      explanation: '양쪽에 10을 곱하면 15 ÷ 5 = 3',
      hints: ['10을 곱하면 15 ÷ 5', '간단해요!'],
      commonMistakes: [{ answer: '0.3', misconception: '소수점 위치를 잘못 찍었습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['소수', '나눗셈'],
  },

  // ============================================================
  // 추가 문제: 비례식 - SK01
  // ============================================================
  {
    id: 'G6_S2_CHANGE_03_SK01_Q02',
    skillId: 'G6_S2_CHANGE_03_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '3 : 4 = 9 : □에서 □는?',
      options: [
        { id: 'a', text: '12', isCorrect: true },
        { id: 'b', text: '10', isCorrect: false },
        { id: 'c', text: '16', isCorrect: false },
        { id: 'd', text: '15', isCorrect: false },
      ],
      explanation: '외항의 곱 = 내항의 곱: 3 × □ = 4 × 9 = 36, □ = 12',
      hints: ['외항의 곱 = 내항의 곱', '3 × □ = 36'],
      commonMistakes: [{ answer: '16', misconception: '4 × 4 = 16으로 잘못 계산했습니다.' }],
    },
    estimatedTimeSeconds: 30, tags: ['비례식'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK01_Q03',
    skillId: 'G6_S2_CHANGE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '□ : 6 = 10 : 15에서 □는?',
      correctAnswer: '4',
      explanation: '외항의 곱 = 내항의 곱: □ × 15 = 6 × 10 = 60, □ = 60 ÷ 15 = 4',
      hints: ['외항의 곱 = 내항의 곱', '□ × 15 = 60'],
      commonMistakes: [{ answer: '9', misconception: '비례식을 잘못 세웠습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['비례식', '외항내항'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK01_Q04',
    skillId: 'G6_S2_CHANGE_03_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"2:3 = 6:9는 비례식이다." 맞나요?',
      correctAnswer: true,
      explanation: '외항의 곱: 2×9=18, 내항의 곱: 3×6=18. 같으므로 비례식입니다.',
      hints: ['외항의 곱과 내항의 곱이 같은지 확인하세요'],
      commonMistakes: [{ answer: 'false', misconception: '외항과 내항의 곱을 잘못 비교했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['비례식'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK01_Q05',
    skillId: 'G6_S2_CHANGE_03_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '1 : 2 = 5 : □에서 □는?',
      correctAnswer: '10',
      explanation: '1 × □ = 2 × 5 = 10, □ = 10',
      hints: ['외항의 곱 = 내항의 곱', '양쪽을 같은 수로 곱했어요'],
      commonMistakes: [{ answer: '7', misconception: '5+2=7로 덧셈을 했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['비례식'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK01_Q06',
    skillId: 'G6_S2_CHANGE_03_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 2.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '0.5 : 1.5 = □ : 9에서 □는?',
      correctAnswer: '3',
      explanation: '0.5 × 9 = 1.5 × □, 4.5 = 1.5 × □, □ = 3',
      hints: ['외항의 곱 = 내항의 곱', '0.5 × 9 = 4.5, 4.5 ÷ 1.5 = ?'],
      commonMistakes: [{ answer: '6', misconception: '0.5:1.5=1:3이므로 □:9=1:3에서 □=3이 맞지만 6으로 잘못 계산' }],
    },
    estimatedTimeSeconds: 45, tags: ['비례식', '소수'],
  },

  // ============================================================
  // 추가 문제: 비례배분 - SK02
  // ============================================================
  {
    id: 'G6_S2_CHANGE_03_SK02_Q02',
    skillId: 'G6_S2_CHANGE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '60개의 구슬을 2:3으로 비례배분하면 적은 쪽은 몇 개?',
      correctAnswer: '24',
      explanation: '비의 합: 2+3=5. 적은 쪽: 60 × 2/5 = 24개',
      hints: ['비의 합을 먼저 구하세요', '적은 쪽 = 전체 × 2/5'],
      commonMistakes: [{ answer: '36', misconception: '많은 쪽을 답으로 적었습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['비례배분'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK02_Q03',
    skillId: 'G6_S2_CHANGE_03_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '200mL의 음료를 1:3으로 비례배분하면 많은 쪽은?',
      options: [
        { id: 'a', text: '150mL', isCorrect: true },
        { id: 'b', text: '100mL', isCorrect: false },
        { id: 'c', text: '50mL', isCorrect: false },
        { id: 'd', text: '120mL', isCorrect: false },
      ],
      explanation: '비의 합: 1+3=4. 많은 쪽: 200 × 3/4 = 150mL',
      hints: ['비의 합 = 4', '200 × 3/4 = ?'],
      commonMistakes: [{ answer: '50mL', misconception: '적은 쪽(200×1/4)을 구했습니다.' }],
    },
    estimatedTimeSeconds: 30, tags: ['비례배분'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK02_Q04',
    skillId: 'G6_S2_CHANGE_03_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '형과 동생이 용돈 15000원을 3:2로 나누면 형은 □원을 받는다.',
      correctAnswer: '9000',
      explanation: '비의 합: 3+2=5. 형: 15000 × 3/5 = 9000원',
      hints: ['비의 합 = 5', '15000 × 3/5 = ?'],
      commonMistakes: [{ answer: '6000', misconception: '동생 몫(15000×2/5)을 적었습니다.' }],
    },
    estimatedTimeSeconds: 40, tags: ['비례배분', '문장제'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK02_Q05',
    skillId: 'G6_S2_CHANGE_03_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"100을 1:1로 비례배분하면 각각 50이다." 맞나요?',
      correctAnswer: true,
      explanation: '비의 합: 1+1=2. 각각: 100 × 1/2 = 50',
      hints: ['1:1이면 똑같이 나누는 것과 같아요'],
      commonMistakes: [{ answer: 'false', misconception: '비례배분과 균등배분이 다르다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['비례배분'],
  },
  {
    id: 'G6_S2_CHANGE_03_SK02_Q06',
    skillId: 'G6_S2_CHANGE_03_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '12개의 과자를 1:2로 비례배분하면 많은 쪽은 몇 개?',
      correctAnswer: '8',
      explanation: '비의 합: 1+2=3. 많은 쪽: 12 × 2/3 = 8개',
      hints: ['비의 합 = 3', '12 × 2/3 = ?'],
      commonMistakes: [{ answer: '4', misconception: '적은 쪽을 답했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['비례배분'],
  },

  // ============================================================
  // 추가 문제: 원주와 원주율 - SK01
  // ============================================================
  {
    id: 'G6_S2_SHAPE_04_SK01_Q02',
    skillId: 'G6_S2_SHAPE_04_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '반지름이 7cm인 원의 원주는? (원주율 = 3.14)',
      options: [
        { id: 'a', text: '43.96cm', isCorrect: true },
        { id: 'b', text: '21.98cm', isCorrect: false },
        { id: 'c', text: '153.86cm', isCorrect: false },
        { id: 'd', text: '49cm', isCorrect: false },
      ],
      explanation: '지름 = 7×2 = 14cm. 원주 = 14 × 3.14 = 43.96cm',
      hints: ['먼저 지름을 구하세요', '지름 × 원주율'],
      commonMistakes: [{ answer: '21.98cm', misconception: '반지름 × 원주율로 계산했습니다. 지름을 사용해야 해요.' }],
    },
    estimatedTimeSeconds: 30, tags: ['원주', '원주율'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK01_Q03',
    skillId: 'G6_S2_SHAPE_04_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: -0.3,
    difficultyLabel: '쉬움',
    content: {
      questionText: '"원주율은 약 3.14이다." 맞나요?',
      correctAnswer: true,
      explanation: '원주율(π)은 원주 ÷ 지름으로, 약 3.14159...이며 초등에서는 3.14를 사용합니다.',
      hints: ['원주율 = 원주 ÷ 지름'],
      commonMistakes: [{ answer: 'false', misconception: '정확히 3.14라고 생각해서 "약"이 아니라고 했습니다.' }],
    },
    estimatedTimeSeconds: 10, tags: ['원주율'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK01_Q04',
    skillId: 'G6_S2_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '원주가 62.8cm인 원의 지름은? (원주율 = 3.14)',
      correctAnswer: '20',
      explanation: '지름 = 원주 ÷ 원주율 = 62.8 ÷ 3.14 = 20cm',
      hints: ['원주 = 지름 × 원주율의 역으로', '62.8 ÷ 3.14 = ?'],
      commonMistakes: [{ answer: '10', misconception: '반지름을 답했습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['원주', '지름'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK01_Q05',
    skillId: 'G6_S2_SHAPE_04_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '지름이 4cm인 원의 원주는 □cm이다. (원주율 = 3.14)',
      correctAnswer: '12.56',
      explanation: '원주 = 4 × 3.14 = 12.56cm',
      hints: ['원주 = 지름 × 원주율', '4 × 3.14 = ?'],
      commonMistakes: [{ answer: '6.28', misconception: '반지름(2cm)으로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['원주'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK01_Q06',
    skillId: 'G6_S2_SHAPE_04_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '지름이 6cm인 바퀴가 5바퀴 굴러갔습니다. 이동한 거리는? (원주율 = 3.14)',
      correctAnswer: '94.2',
      explanation: '원주 = 6 × 3.14 = 18.84cm. 5바퀴 = 18.84 × 5 = 94.2cm',
      hints: ['한 바퀴 = 원주만큼 이동', '원주 × 바퀴 수'],
      commonMistakes: [{ answer: '18.84', misconception: '한 바퀴만 계산했습니다.' }],
    },
    estimatedTimeSeconds: 45, tags: ['원주', '응용'],
  },

  // ============================================================
  // 추가 문제: 원의 넓이 구하기 - SK02
  // ============================================================
  {
    id: 'G6_S2_SHAPE_04_SK02_Q02',
    skillId: 'G6_S2_SHAPE_04_SK02',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '반지름이 3cm인 원의 넓이는? (원주율 = 3.14)',
      options: [
        { id: 'a', text: '28.26cm²', isCorrect: true },
        { id: 'b', text: '18.84cm²', isCorrect: false },
        { id: 'c', text: '9.42cm²', isCorrect: false },
        { id: 'd', text: '12cm²', isCorrect: false },
      ],
      explanation: '넓이 = π × r² = 3.14 × 9 = 28.26cm²',
      hints: ['넓이 = π × 반지름²', '3 × 3 = 9, 9 × 3.14 = ?'],
      commonMistakes: [{ answer: '18.84cm²', misconception: '원주를 구했습니다. 넓이는 π×r²이에요.' }],
    },
    estimatedTimeSeconds: 30, tags: ['원', '넓이'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK02_Q03',
    skillId: 'G6_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '지름이 8cm인 원의 넓이는? (원주율 = 3.14)',
      correctAnswer: '50.24',
      explanation: '반지름 = 4cm. 넓이 = 3.14 × 4 × 4 = 3.14 × 16 = 50.24cm²',
      hints: ['먼저 반지름을 구하세요: 8÷2=4', '3.14 × 4 × 4 = ?'],
      commonMistakes: [{ answer: '200.96', misconception: '지름을 반지름 대신 사용했습니다.' }],
    },
    estimatedTimeSeconds: 35, tags: ['원', '넓이'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK02_Q04',
    skillId: 'G6_S2_SHAPE_04_SK02',
    questionType: 'TRUE_FALSE',
    difficulty: 0.3,
    difficultyLabel: '보통',
    content: {
      questionText: '"반지름이 2배가 되면 원의 넓이는 4배가 된다." 맞나요?',
      correctAnswer: true,
      explanation: '넓이 = π × r². 반지름이 2배이면 (2r)² = 4r²이므로 넓이는 4배.',
      hints: ['넓이 공식에서 반지름이 제곱이에요', '2를 제곱하면 4'],
      commonMistakes: [{ answer: 'false', misconception: '2배가 되면 넓이도 2배라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['원', '넓이'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK02_Q05',
    skillId: 'G6_S2_SHAPE_04_SK02',
    questionType: 'FILL_IN_BLANK',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '반지름이 10cm인 원의 넓이는 □cm²이다. (원주율 = 3.14)',
      correctAnswer: '314',
      explanation: '넓이 = 3.14 × 10 × 10 = 3.14 × 100 = 314cm²',
      hints: ['10 × 10 = 100', '100 × 3.14 = ?'],
      commonMistakes: [{ answer: '31.4', misconception: '원주(2×π×r)를 구했습니다.' }],
    },
    estimatedTimeSeconds: 20, tags: ['원', '넓이'],
  },
  {
    id: 'G6_S2_SHAPE_04_SK02_Q06',
    skillId: 'G6_S2_SHAPE_04_SK02',
    questionType: 'SHORT_ANSWER',
    difficulty: 2.0,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '반지름이 6cm인 반원의 넓이는? (원주율 = 3.14)',
      correctAnswer: '56.52',
      explanation: '원의 넓이 = 3.14 × 36 = 113.04. 반원 = 113.04 ÷ 2 = 56.52cm²',
      hints: ['먼저 원 전체의 넓이를 구하세요', '반원 = 원의 넓이 ÷ 2'],
      commonMistakes: [{ answer: '113.04', misconception: '반원이 아닌 전체 원의 넓이를 구했습니다.' }],
    },
    estimatedTimeSeconds: 45, tags: ['원', '반원', '넓이'],
  },

  // ============================================================
  // 추가 문제: 원기둥의 성질 - SK01
  // ============================================================
  {
    id: 'G6_S2_SHAPE_05_SK01_Q02',
    skillId: 'G6_S2_SHAPE_05_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '"원기둥의 두 밑면은 합동이고 서로 평행하다." 맞나요?',
      correctAnswer: true,
      explanation: '원기둥의 두 밑면은 크기가 같은 원(합동)이며, 서로 평행합니다.',
      hints: ['원기둥의 위와 아래 면을 생각해보세요'],
      commonMistakes: [{ answer: 'false', misconception: '평행하지 않다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['원기둥'],
  },
  {
    id: 'G6_S2_SHAPE_05_SK01_Q03',
    skillId: 'G6_S2_SHAPE_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.3,
    difficultyLabel: '어려움',
    content: {
      questionText: '원기둥의 전개도에서 옆면의 가로 길이는 무엇과 같나요?',
      options: [
        { id: 'a', text: '밑면의 원주', isCorrect: true },
        { id: 'b', text: '밑면의 지름', isCorrect: false },
        { id: 'c', text: '밑면의 반지름', isCorrect: false },
        { id: 'd', text: '원기둥의 높이', isCorrect: false },
      ],
      explanation: '원기둥의 옆면을 펼치면 직사각형이 되고, 가로 = 밑면의 원주입니다.',
      hints: ['옆면을 펼쳐서 생각해보세요', '밑면의 둘레가 옆면의 가로가 돼요'],
      commonMistakes: [{ answer: '밑면의 지름', misconception: '원주와 지름을 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['원기둥', '전개도'],
  },
  {
    id: 'G6_S2_SHAPE_05_SK01_Q04',
    skillId: 'G6_S2_SHAPE_05_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '원기둥의 밑면의 모양은 무엇인가요?',
      correctAnswer: '원',
      explanation: '원기둥의 밑면은 원 모양입니다.',
      hints: ['원"기둥"의 "원"이 힌트예요'],
      commonMistakes: [{ answer: '직사각형', misconception: '옆면의 모양과 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 10, tags: ['원기둥'],
  },
  {
    id: 'G6_S2_SHAPE_05_SK01_Q05',
    skillId: 'G6_S2_SHAPE_05_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 0.8,
    difficultyLabel: '보통',
    content: {
      questionText: '원기둥의 전개도에서 옆면의 세로 길이는 원기둥의 □와 같다.',
      correctAnswer: '높이',
      explanation: '원기둥의 전개도에서 옆면은 직사각형이며, 세로 = 원기둥의 높이입니다.',
      hints: ['옆면을 펼치면 직사각형인데, 세로는?'],
      commonMistakes: [{ answer: '지름', misconception: '세로를 지름과 혼동했습니다.' }],
    },
    estimatedTimeSeconds: 15, tags: ['원기둥', '전개도'],
  },
  {
    id: 'G6_S2_SHAPE_05_SK01_Q06',
    skillId: 'G6_S2_SHAPE_05_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '다음 중 원뿔의 특징이 아닌 것은?',
      options: [
        { id: 'a', text: '밑면이 원이다', isCorrect: false },
        { id: 'b', text: '꼭짓점이 1개이다', isCorrect: false },
        { id: 'c', text: '옆면이 직사각형이다', isCorrect: true },
        { id: 'd', text: '옆면이 곡면이다', isCorrect: false },
      ],
      explanation: '원뿔의 옆면은 곡면(부채꼴 모양)이지 직사각형이 아닙니다.',
      hints: ['원뿔은 뾰족하게 모아지는 형태예요', '직사각형 옆면은 원기둥의 특징이에요'],
      commonMistakes: [{ answer: '꼭짓점이 1개이다', misconception: '꼭짓점이 여러 개라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['원뿔'],
  },

  // ============================================================
  // 추가 문제: 가능성을 수로 나타내기 - SK01
  // ============================================================
  {
    id: 'G6_S2_DATA_06_SK01_Q03',
    skillId: 'G6_S2_DATA_06_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 0.5,
    difficultyLabel: '보통',
    content: {
      questionText: '주사위를 던질 때 3의 배수가 나올 가능성을 분수로 나타내면?',
      correctAnswer: '1/3',
      explanation: '3의 배수: 3, 6 → 2가지. 전체: 6가지. 가능성 = 2/6 = 1/3',
      hints: ['1~6 중 3의 배수를 찾아보세요', '2개/6개 = ?'],
      commonMistakes: [{ answer: '1/6', misconception: '3만 세고 6을 빠뜨렸습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['가능성', '확률'],
  },
  {
    id: 'G6_S2_DATA_06_SK01_Q04',
    skillId: 'G6_S2_DATA_06_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: -0.5,
    difficultyLabel: '쉬움',
    content: {
      questionText: '불가능한 일의 가능성을 수로 나타내면?',
      options: [
        { id: 'a', text: '0', isCorrect: true },
        { id: 'b', text: '1', isCorrect: false },
        { id: 'c', text: '1/2', isCorrect: false },
        { id: 'd', text: '-1', isCorrect: false },
      ],
      explanation: '불가능한 일의 가능성은 0입니다.',
      hints: ['절대 일어나지 않는 일의 가능성은?'],
      commonMistakes: [{ answer: '-1', misconception: '음수로 나타낸다고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 10, tags: ['가능성'],
  },
  {
    id: 'G6_S2_DATA_06_SK01_Q05',
    skillId: 'G6_S2_DATA_06_SK01',
    questionType: 'FILL_IN_BLANK',
    difficulty: 1.0,
    difficultyLabel: '어려움',
    content: {
      questionText: '빨간 공 3개, 파란 공 7개가 들어 있는 주머니에서 공 1개를 꺼낼 때, 빨간 공이 나올 가능성은 □이다.',
      correctAnswer: '3/10',
      explanation: '전체 10개 중 빨간 공 3개. 가능성 = 3/10',
      hints: ['전체 공은 3+7=10개', '빨간 공은 3개'],
      commonMistakes: [{ answer: '3/7', misconception: '파란 공 수를 전체로 사용했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['가능성', '확률'],
  },
  {
    id: 'G6_S2_DATA_06_SK01_Q06',
    skillId: 'G6_S2_DATA_06_SK01',
    questionType: 'MULTIPLE_CHOICE',
    difficulty: 1.5,
    difficultyLabel: '어려움',
    content: {
      questionText: '주사위를 던질 때 짝수가 나올 가능성은?',
      options: [
        { id: 'a', text: '1/2', isCorrect: true },
        { id: 'b', text: '1/3', isCorrect: false },
        { id: 'c', text: '1/6', isCorrect: false },
        { id: 'd', text: '2/3', isCorrect: false },
      ],
      explanation: '짝수: 2, 4, 6 → 3가지. 전체: 6가지. 가능성 = 3/6 = 1/2',
      hints: ['1~6 중 짝수는 몇 개?', '3/6을 약분하면?'],
      commonMistakes: [{ answer: '1/3', misconception: '짝수 3가지이므로 1/3이라고 생각했습니다.' }],
    },
    estimatedTimeSeconds: 25, tags: ['가능성', '확률'],
  },
  {
    id: 'G6_S2_DATA_06_SK01_Q07',
    skillId: 'G6_S2_DATA_06_SK01',
    questionType: 'TRUE_FALSE',
    difficulty: 0.0,
    difficultyLabel: '보통',
    content: {
      questionText: '"가능성이 1/2이면 반반이라는 뜻이다." 맞나요?',
      correctAnswer: true,
      explanation: '가능성 1/2은 일어날 가능성과 일어나지 않을 가능성이 같다는 뜻입니다.',
      hints: ['1/2 = 50%', '동전 던지기와 같아요'],
      commonMistakes: [{ answer: 'false', misconception: '1/2이 반반이 아니라고 착각했습니다.' }],
    },
    estimatedTimeSeconds: 10, tags: ['가능성'],
  },
  {
    id: 'G6_S2_DATA_06_SK01_Q08',
    skillId: 'G6_S2_DATA_06_SK01',
    questionType: 'SHORT_ANSWER',
    difficulty: 1.8,
    difficultyLabel: '매우 어려움',
    content: {
      questionText: '1~10까지 적힌 카드에서 한 장을 뽑을 때, 소수(素數)가 나올 가능성을 분수로 나타내면?',
      correctAnswer: '2/5',
      explanation: '1~10 중 소수: 2, 3, 5, 7 → 4개. 가능성 = 4/10 = 2/5',
      hints: ['1~10 중 소수를 모두 찾아보세요', '2, 3, 5, 7이 소수예요', '4/10을 약분하면?'],
      commonMistakes: [{ answer: '1/2', misconception: '1을 소수에 포함시켜 5개로 계산했습니다.' }],
    },
    estimatedTimeSeconds: 40, tags: ['가능성', '확률', '소수'],
  },
];
