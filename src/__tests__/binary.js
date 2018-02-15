import { binarySimilarity, binaryDistance } from '..';

const str1 = '1100000011111110010111010110011010100111110100100100110110111110';
const str2 = '0111000100100001100101001001111000000111001001001001010001011101';

describe('tanimoto on binary strings', () => {
  it('similarity', () => {
    expect(binarySimilarity(str1, str2)).toBeCloseTo(0.2549, 4);
  });
  it('distance', () => {
    expect(binaryDistance(str1, str2)).toBeCloseTo(0.7451, 4);
  });
});
