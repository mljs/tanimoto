/**
 * Calculates similarity among non binary elements
 * @param {Array} A - first array of elements to compare
 * @param {Array} B - second array of elements to compare
 * @return {number}
 */
export function valueSimilarity(A, B) {
  let M11 = 0;
  let M01 = 0;
  let M10 = 0;
  const len = Math.min(A.length, B.length);
  for (let index = 0; index < len; index++) {
    if (A[index] || B[index]) {
      if (A[index] && B[index]) {
        M11++;
      } else if (A[index]) {
        M10++;
      } else {
        M01++;
      }
    }
  }

  return M11 / (M01 + M10 + M11);
}

/**
 * Calculates distance among non binary elements
 * @param {Array} A - first array of elements to compare
 * @param {Array} B - second array of elements to compare
 * @return {number}
 */
export function valueDistance(A, B) {
  return 1 - valueSimilarity(A, B);
}
