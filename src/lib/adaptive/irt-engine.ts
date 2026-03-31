// ============================================================
// IRT 3PL (Three-Parameter Logistic) Engine
// ============================================================
//
// Parameters:
//   θ (theta) — student ability
//   a — discrimination (how well the item differentiates)
//   b — difficulty
//   c — pseudo-guessing parameter
//
// P(θ) = c + (1 - c) / (1 + exp(-a * (θ - b)))
// ============================================================

export interface IRTItem {
  id: string;
  difficulty_irt_b: number;
  discrimination_irt_a: number;
  guessing_irt_c: number;
}

export interface IRTResponse {
  item: IRTItem;
  is_correct: boolean;
  time_spent_ms: number;
}

/** Prior distribution parameters for EAP estimation */
const PRIOR_MEAN = 0;
const PRIOR_SD = 1;

/** Quadrature points for numerical integration */
const QUAD_POINTS = 41;
const QUAD_MIN = -4;
const QUAD_MAX = 4;

/** Time weighting constants */
const EXPECTED_TIME_MS = 30_000;
const TIME_WEIGHT_MIN = 0.3;
const TIME_WEIGHT_MAX = 1.0;

/**
 * Calculate the probability of correct response using the 3PL model.
 *
 * P(θ) = c + (1 - c) * 1 / (1 + exp(-a * (θ - b)))
 */
export function calculateProbability(theta: number, item: IRTItem): number {
  const { difficulty_irt_b: b, discrimination_irt_a: a, guessing_irt_c: c } = item;
  const exponent = -a * (theta - b);
  const logistic = 1 / (1 + Math.exp(exponent));
  return c + (1 - c) * logistic;
}

/**
 * Calculate the information function for an item at a given theta.
 *
 * I(θ) = a² * (P - c)² / ((1 - c)² * P * (1 - P))
 */
export function calculateInformation(theta: number, item: IRTItem): number {
  const { discrimination_irt_a: a, guessing_irt_c: c } = item;
  const p = calculateProbability(theta, item);
  const q = 1 - p;

  if (p <= c || q <= 0) return 0;

  const numerator = a * a * (p - c) * (p - c);
  const denominator = (1 - c) * (1 - c) * p * q;

  return denominator > 0 ? numerator / denominator : 0;
}

/**
 * Calculate time-based weighting factor.
 * Very fast correct answers count more. Very slow answers or
 * very fast incorrect answers are down-weighted.
 */
function calculateTimeWeight(timeSpentMs: number, isCorrect: boolean): number {
  const ratio = timeSpentMs / EXPECTED_TIME_MS;

  if (isCorrect) {
    // Fast correct answers get higher weight (up to 1.0),
    // very slow answers get lower weight (down to 0.3)
    if (ratio <= 0.5) return TIME_WEIGHT_MAX;
    if (ratio >= 3.0) return TIME_WEIGHT_MIN;
    return TIME_WEIGHT_MAX - (TIME_WEIGHT_MAX - TIME_WEIGHT_MIN) * ((ratio - 0.5) / 2.5);
  } else {
    // Fast wrong answers (likely guessing) get lower weight
    if (ratio <= 0.2) return TIME_WEIGHT_MIN;
    if (ratio >= 1.0) return TIME_WEIGHT_MAX;
    return TIME_WEIGHT_MIN + (TIME_WEIGHT_MAX - TIME_WEIGHT_MIN) * ((ratio - 0.2) / 0.8);
  }
}

/**
 * Normal PDF for the prior distribution.
 */
function normalPdf(x: number, mean: number, sd: number): number {
  const z = (x - mean) / sd;
  return Math.exp(-0.5 * z * z) / (sd * Math.sqrt(2 * Math.PI));
}

/**
 * Generate quadrature points evenly spaced.
 */
function generateQuadPoints(): number[] {
  const points: number[] = [];
  const step = (QUAD_MAX - QUAD_MIN) / (QUAD_POINTS - 1);
  for (let i = 0; i < QUAD_POINTS; i++) {
    points.push(QUAD_MIN + i * step);
  }
  return points;
}

/**
 * Update theta using Expected A Posteriori (EAP) estimation
 * with response time weighting.
 *
 * EAP = ∫ θ * L(θ|responses) * prior(θ) dθ / ∫ L(θ|responses) * prior(θ) dθ
 */
export function updateTheta(
  currentTheta: number,
  currentSE: number,
  responses: IRTResponse[],
): { theta: number; se: number } {
  if (responses.length === 0) {
    return { theta: currentTheta, se: currentSE };
  }

  const quadPoints = generateQuadPoints();

  // Calculate posterior at each quadrature point
  const posteriorValues: number[] = [];
  let maxLogLikelihood = -Infinity;

  // First pass: compute log-likelihood at each point to find max for numerical stability
  const logLikelihoods = quadPoints.map((thetaQ) => {
    let logL = 0;
    for (const response of responses) {
      const p = calculateProbability(thetaQ, response.item);
      const weight = calculateTimeWeight(response.time_spent_ms, response.is_correct);

      if (response.is_correct) {
        logL += weight * Math.log(Math.max(p, 1e-10));
      } else {
        logL += weight * Math.log(Math.max(1 - p, 1e-10));
      }
    }
    // Add prior
    logL += Math.log(normalPdf(thetaQ, PRIOR_MEAN, PRIOR_SD));

    if (logL > maxLogLikelihood) {
      maxLogLikelihood = logL;
    }
    return logL;
  });

  // Second pass: convert to posteriors with numerical stability
  for (let i = 0; i < quadPoints.length; i++) {
    posteriorValues.push(Math.exp(logLikelihoods[i] - maxLogLikelihood));
  }

  // Compute EAP
  const step = (QUAD_MAX - QUAD_MIN) / (QUAD_POINTS - 1);
  let numerator = 0;
  let denominator = 0;
  let varianceNumerator = 0;

  for (let i = 0; i < quadPoints.length; i++) {
    const w = posteriorValues[i] * step;
    numerator += quadPoints[i] * w;
    denominator += w;
  }

  const newTheta = denominator > 0 ? numerator / denominator : currentTheta;

  // Compute posterior variance for SE
  for (let i = 0; i < quadPoints.length; i++) {
    const w = posteriorValues[i] * step;
    const diff = quadPoints[i] - newTheta;
    varianceNumerator += diff * diff * w;
  }

  const posteriorVariance = denominator > 0 ? varianceNumerator / denominator : currentSE * currentSE;
  const newSE = Math.sqrt(posteriorVariance);

  // Clamp theta to reasonable range
  const clampedTheta = Math.max(-4, Math.min(4, newTheta));
  const clampedSE = Math.max(0.1, Math.min(2.0, newSE));

  return { theta: clampedTheta, se: clampedSE };
}

/**
 * Select the optimal difficulty for the next question.
 *
 * For maximum information, the optimal b is close to θ,
 * but we add slight randomization to avoid predictability.
 */
export function selectOptimalDifficulty(
  theta: number,
  se: number,
  options?: {
    targetSuccessRate?: number;
    randomness?: number;
  },
): { targetDifficulty: number; minDifficulty: number; maxDifficulty: number } {
  const { targetSuccessRate = 0.7, randomness = 0.3 } = options ?? {};

  // The 3PL model's optimal information is when b is near theta.
  // But for learning, we want ~70% success rate, so slightly easier.
  const offset = -Math.log(1 / targetSuccessRate - 1) * 0.5;
  const targetDifficulty = theta + offset;

  // Add controlled randomness based on SE (more uncertain → wider range)
  const range = Math.max(se, 0.5) * (1 + randomness);
  const jitter = (Math.random() - 0.5) * randomness;

  return {
    targetDifficulty: Math.max(-4, Math.min(4, targetDifficulty + jitter)),
    minDifficulty: Math.max(-4, targetDifficulty - range),
    maxDifficulty: Math.min(4, targetDifficulty + range),
  };
}

/**
 * Select the best item from a pool based on maximum information.
 */
export function selectBestItem(theta: number, items: IRTItem[]): IRTItem | null {
  if (items.length === 0) return null;

  let bestItem = items[0];
  let bestInfo = calculateInformation(theta, items[0]);

  for (let i = 1; i < items.length; i++) {
    const info = calculateInformation(theta, items[i]);
    if (info > bestInfo) {
      bestInfo = info;
      bestItem = items[i];
    }
  }

  return bestItem;
}
