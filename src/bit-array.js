'use strict';

var BitArray = require('ml-bit-array');

exports.similarity = function tanimotoBitArraySimilarity(A, B) {
    var AandB = BitArray.and(A, B);

    var M11 = BitArray.count(AandB);
    var M01 = BitArray.count(BitArray.xor(AandB, B));
    var M10 = BitArray.count(BitArray.xor(AandB, A));

    return M11 / (M01 + M10 + M11);
};

exports.distance = function tanimotoBitArrayDistance(A, B) {
    var AandB = BitArray.and(A, B);

    var M11 = BitArray.count(AandB);
    var M01 = BitArray.count(BitArray.xor(AandB, B));
    var M10 = BitArray.count(BitArray.xor(AandB, A));

    return (M01 + M10) / (M01 + M10 + M11);
};
