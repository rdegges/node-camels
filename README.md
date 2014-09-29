# node-camels

[![NPM Version](https://img.shields.io/npm/v/camels.svg?style=flat)](https://npmjs.org/package/camels)
[![NPM Downloads](http://img.shields.io/npm/dm/camels.svg?style=flat)](https://npmjs.org/package/camels)
[![Build Status](https://img.shields.io/travis/rdegges/node-camels.svg?style=flat)](https://travis-ci.org/rdegges/node-camels)

*Easily convert to and from camelCase and under_score notation.*

![Banana Peel Sketch](https://github.com/rdegges/node-camels/raw/master/assets/banana-peel.jpg)


## Meta

- Author: Randall Degges
- Email: r@rdegges.com
- Twitter: [@rdegges](https://twitter.com/rdegges)
- Site: http://www.rdegges.com
- Status: production ready


## Installation

To install `camels` using [npm](https://www.npmjs.org/), simply run:

```console
$ npm install camels
```

In the root of your project directory.


## Usage

Once you have `camels` installed, you can use it to easily convert function names
to and from camelCase.  `camels` adds several string methods which you can call
directly after `require`'ing this module:

```javascript
var camels = require('camels');

console.log('hiThere'.toUnderscore());          // hi_there
console.log('hiTHERE'.toUnderscore());          // hi_there
console.log('hiThereDude'.toUnderscore());      // hi_there_dude

console.log('hi_there'.toCamelCase());          // hiThere
console.log('hi_there_dude'.toCamelCase());     // hiThereDude
```

**NOTE**: This library assumes that the string you're calling the desired method
on is 'properly' formed.  For instance, if you run `s.toCamelCase()`, the
library presumes that your string, `s`, is *already* underscored.


## Changelog

v0.0.1: 9-28-2014

    - First release!
