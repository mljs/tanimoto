'use strict';

var bitArray = require('./bit-array');
exports.bitArraySimilarity = bitArray.similarity;
exports.bitArrayDistance = bitArray.distance;

var binary = require('./binary');
exports.binarySimilarity = binary.similarity;
exports.binaryDistance = binary.distance;

var value = require('./value');
exports.valueSimilarity = value.similarity;
exports.valueDistance = value.distance;
