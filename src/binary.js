'use strict';

var BitArray = require('ml-bit-array');
var bitArray = require('./bit-array');

exports.similarity = function tanimotoBinarySimilarity(A, B) {
    return bitArray.similarity(BitArray.parseBinaryString(A), BitArray.parseBinaryString(B));
};

exports.distance = function tanimotoBinaryDistance(A, B) {
    return bitArray.distance(BitArray.parseBinaryString(A), BitArray.parseBinaryString(B));
};
