const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const LOG_2 = 0.693;

module.exports = function dateSample(sampleActivity) {

  const SAMPLE_ACTIVITY = parseFloat(sampleActivity)
  if (typeof sampleActivity === 'string' &&
      SAMPLE_ACTIVITY < MODERN_ACTIVITY &&
      SAMPLE_ACTIVITY > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) * HALF_LIFE_PERIOD / LOG_2);
  }
  return false;
};
