import { bitArraySimilarity, bitArrayDistance } from '..';

const values1 = [1, 1, 0, 0];
const values2 = [1, 0, 1, 0];

describe('tanimoto on bit-arrays', () => {
  it('similarity', () => {
    expect(bitArraySimilarity(values1, values2)).toBeCloseTo(1 / 3, 4);
  });
  it('distance', () => {
    expect(bitArrayDistance(values1, values2)).toBeCloseTo(2 / 3, 4);
  });
});
