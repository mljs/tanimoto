# tanimoto

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![npm download][download-image]][download-url]

Tanimoto similarity and distance methods.

## Installation

`$ npm install --save ml-tanimoto`

## Usage
### Binary
```js
import { binarySimilarity, binaryDistance } from 'ml-tanimoto';

const str1 = '1100000011111110010111010110011010100111110100100100110110111110';
const str2 = '0111000100100001100101001001111000000111001001001001010001011101';

binarySimilarity(str1, str2) === 0.2549;
binaryDistance(str1, str2) === 0.7451;
```

### General values
```js
import { valueSimilarity, valueDistance } from 'ml-tanimoto';

const values1 = [true, true, true];
const values2 = [true, false, false];

valueSimilarity(values1, values2) === 0.5;
valueDistance(values1, values2) === 0.5;
```

### Bit-array values
```js
import { bitArraySimilarity, bitArrayDistance } from 'ml-tanimoto';

const values1 = [1, 1, 1];
const values2 = [1, 0, 0];

bitArraySimilarity(values1, values2) === 0.333;
bitArrayDistance(values1, values2) === 0.666;
```

## [API Documentation](https://mljs.github.io/tanimoto/)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-tanimoto.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ml-tanimoto
[travis-image]: https://img.shields.io/travis/mljs/tanimoto/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/tanimoto
[codecov-image]: https://img.shields.io/codecov/c/github/mljs/tanimoto.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/mljs/tanimoto
[download-image]: https://img.shields.io/npm/dm/ml-tanimoto.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/ml-tanimoto
