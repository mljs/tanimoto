'use strict';

var tanimoto = require('..');

var list1 = ['1', 1, 'x', true, 'true', []];
var list2 = [true, false, 'y', 'l', 5, '1', []];
const M01 = 5, M10 = 4, M11 = 2;

describe('tanimoto on keyword arrays', function () {
    it('similarity', function () {
        tanimoto.keywordSimilarity(list1, list2).should.be.approximately(M11 / (M11 + M01 + M10), 1e-4);
    });
    it('distance', function () {
        tanimoto.keywordDistance(list1, list2).should.be.approximately((M01 + M10) / (M01 + M10 + M11), 1e-4);
    });
});
