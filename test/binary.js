'use strict';

var tanimoto = require('..');

var str1 = '1100000011111110010111010110011010100111110100100100110110111110';
var str2 = '0111000100100001100101001001111000000111001001001001010001011101';
// M01 = 14, M10 = 24, M11 = 13

describe('tanimoto on binary strings', function () {
    it('similarity', function () {
        tanimoto.binarySimilarity(str1, str2).should.be.approximately(0.2549, 1e-4);
    });
    it('distance', function () {
        tanimoto.binaryDistance(str1, str2).should.be.approximately(0.7451, 1e-4);
    });
});
