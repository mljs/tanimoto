'use strict';

var bitArray = require('./bit-array');
exports.bitArraySimilarity = bitArray.similarity;
exports.bitArrayDistance = bitArray.distance;

var binary = require('./binary');
exports.binarySimilarity = binary.similarity;
exports.binaryDistance = binary.distance;

var keyword = require('./keyword');
exports.keywordSimilarity = keyword.similarity;
exports.keywordDistance = keyword.distance;
