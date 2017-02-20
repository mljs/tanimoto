'use strict';

var tanimoto = require('..');

var list1 = ['1', 'h', 'x', true, 'tru'];
var list2 = [true, false, 'y', 'l', 5, '1'];
const M01 = 4, M10 = 3, M11 = 2;

describe('tanimoto on binary strings', function () {
    it('similarity', function () {
        tanimoto.keywordSimilarity(list1, list2).should.be.approximately(M11 / (M11 + M01 + M01), 1e-4);
    });
    it('distance', function () {
        tanimoto.keywordDistance(list1, list2).should.be.approximately((M01 + M10) / (M01 + M10 + M11), 1e-4);
    });
});
