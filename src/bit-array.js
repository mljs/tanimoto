import { count, and, xor } from 'ml-bit-array';

/**
 * Calculates similarity using bitwise operations
 * @param {Array} A - first array of elements to compare
 * @param {Array} B - second array of elements to compare
 * @return {number}
 */
export function bitArraySimilarity(A, B) {
  var AandB = and(A, B);

  var M11 = count(AandB);
  var M01 = count(xor(AandB, B));
  var M10 = count(xor(AandB, A));

  const div = M01 + M10 + M11;
  if (div === 0) return 1;
  return M11 / div;
}

/**
 * Calculates distance using bitwise operations
 * @param {Array} A - first array of elements to compare
 * @param {Array} B - second array of elements to compare
 * @return {number}
 */
export function bitArrayDistance(A, B) {
  var AandB = and(A, B);

  var M11 = count(AandB);
  var M01 = count(xor(AandB, B));
  var M10 = count(xor(AandB, A));

  const div = M01 + M10 + M11;
  if (div === 0) return 0;
  return (M01 + M10) / div;
}
