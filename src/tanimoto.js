'use strict';

var bitArray = require('./bit-array');
exports.bitArraySimilarity = bitArray.similarity;
exports.bitArrayDistance = bitArray.distance;

var binary = require('./binary');
exports.binarySimilarity = binary.similarity;
exports.binaryDistance = binary.distance;
