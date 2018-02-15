import { valueSimilarity, valueDistance } from '..';

var values1 = ['1', 1, 'x', true, 'true', []];
var values2 = [true, false, 'y', 'l', 5, '1', []];
const M01 = 5;
const M10 = 4;
const M11 = 2;

describe('tanimoto on value arrays', () => {
  it('similarity', () => {
    expect(valueSimilarity(values1, values2)).toBeCloseTo(M11 / (M11 + M01 + M10), 4);
  });
  it('distance', () => {
    expect(valueDistance(values1, values2)).toBeCloseTo((M01 + M10) / (M01 + M10 + M11), 4);
  });
});
