import { parseBinaryString } from 'ml-bit-array';

import { bitArraySimilarity, bitArrayDistance } from './bit-array';

/**
 * Calculates similarity using 32bit strings
 * @param {string} A - first string of elements to compare
 * @param {string} B - second string of elements to compare
 * @return {number}
 */
export function binarySimilarity(A, B) {
  return bitArraySimilarity(parseBinaryString(A), parseBinaryString(B));
}

/**
 * Calculates distance using 32bit strings
 * @param {string} A - first string of elements to compare
 * @param {string} B - second string of elements to compare
 * @return {number}
 */
export function binaryDistance(A, B) {
  return bitArrayDistance(parseBinaryString(A), parseBinaryString(B));
}
