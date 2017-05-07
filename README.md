# OBVL
[![license](https://img.shields.io/github/license/value-fallback/OBVL.svg?style=flat-square)](https://github.com/value-fallback/OBVL/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/obvl.svg?style=flat-square)](https://www.npmjs.com/package/obvl)
[![npm](https://img.shields.io/npm/dt/obvl.svg?style=flat-square)](https://www.npmjs.com/package/obvl)
[![Travis](https://img.shields.io/travis/value-fallback/OBVL.svg?style=flat-square)](https://travis-ci.org/value-fallback/OBVL)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Fallback when a value is not [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/obvl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/obvl)

```
npm install obvl
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add obvl
```

## Usage

```javascript
const obvl = require('obvl');

// When a value is not Object, it will return fallback value.
let a = obvl(null, 0); // a = 0
let b = obvl([1, 2, 3], 'x'); // b = 'x'

// When a value is Object, it will return that value.
let c = obvl({ a: 1, b: 2, c: 3 }, 1); // c = { a: 1, b: 2, c: 3 }
let d = obvl(new Object(), [1, 2, 3]); // d = Object {  }
```

## API

### obvl(value, fallbackValue)

#### value
A main value.

#### fallbackValue
A fallback value.
