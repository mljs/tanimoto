import { count, and, xor } from 'ml-bit-array';

export function bitArraySimilarity(A, B) {
  var AandB = and(A, B);

  var M11 = count(AandB);
  var M01 = count(xor(AandB, B));
  var M10 = count(xor(AandB, A));

  return M11 / (M01 + M10 + M11);
}

export function bitArrayDistance(A, B) {
  var AandB = and(A, B);

  var M11 = count(AandB);
  var M01 = count(xor(AandB, B));
  var M10 = count(xor(AandB, A));

  return (M01 + M10) / (M01 + M10 + M11);
}
