import { valueSimilarity, valueDistance } from '..';

const values1 = [true, true, false, false];
const values2 = [true, false, true, false];
const M01 = 1;
const M10 = 1;
const M11 = 1;

describe('tanimoto on value arrays', () => {
  it('similarity', () => {
    expect(valueSimilarity(values1, values2)).toBeCloseTo(M11 / (M11 + M01 + M10), 4);
  });
  it('distance', () => {
    expect(valueDistance(values1, values2)).toBeCloseTo((M01 + M10) / (M01 + M10 + M11), 4);
  });
});
