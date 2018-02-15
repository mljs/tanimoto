import { parseBinaryString } from 'ml-bit-array';

import { bitArraySimilarity, bitArrayDistance } from './bit-array';

export function binarySimilarity(A, B) {
  return bitArraySimilarity(parseBinaryString(A), parseBinaryString(B));
}

export function binaryDistance(A, B) {
  return bitArrayDistance(parseBinaryString(A), parseBinaryString(B));
}
