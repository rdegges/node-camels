# node-camel

[![NPM Version](https://img.shields.io/npm/v/camel.svg?style=flat)](https://npmjs.org/package/camel)
[![NPM Downloads](http://img.shields.io/npm/dm/camel.svg?style=flat)](https://npmjs.org/package/camel)
[![Build Status](https://img.shields.io/travis/rdegges/node-camel.svg?style=flat)](https://travis-ci.org/rdegges/node-camel)

*Easily convert to and from camelCase.*

![Banana Peel Sketch](https://github.com/rdegges/node-camel/raw/master/assets/banana-peel.jpg)


## Meta

- Author: Randall Degges
- Email: r@rdegges.com
- Twitter: [@rdegges](https://twitter.com/rdegges)
- Site: http://www.rdegges.com
- Status: production ready


## Installation

To install `camel` using [npm](https://www.npmjs.org/), simply run:

```console
$ npm install camel
```

In the root of your project directory.


## Usage

Once you have `camel` installed, you can use it to easily convert function names
to and from camelCase.  `camel` adds several string methods which you can call
directly after `require`'ing this module:

```javascript
var camel = require('camel');

console.log('hiThere'.toUnderscore());          // hi_there
console.log('hiTHERE'.toUnderscore());          // hi_there
console.log('hiThereDude'.toUnderscore());      // hi_there_dude

console.log('hi_there'.toCamelCase());          // hiThere
console.log('hi_there_dude'.toUnderscore());    // hiThereDude
```

**NOTE**: This library assumes that the string you're calling the desired method
on is 'properly' formed.  For instance, if you run `s.toCamelCase()`, the
library presumes that your string, `s`, is *already* underscored.


## Changelog

v0.0.1: 9-28-2014

    - First release!
