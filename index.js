'use strict';


/**
 * This function returns true if the string is uppercase, false otherwise.
 *
 * @method
 * @private
 *
 * @returns true if the string is uppercase, false otherwise.
 */
function isUpper(s) {
  return s === s.toUpperCase();
}

/**
 * This function returns true if the string is lowercase, false otherwise.
 *
 * @method
 * @private
 *
 * @returns true if the string is lowercase, false otherwise.
 */
function isLower(s) {
  return s === s.toLowerCase();
}

/**
 * This function returns a camelCased version of the string.
 *
 * @method
 * @public
 *
 * @returns A camelCased version of this string.
 */
String.prototype.toCamelCase = function() {
  var str = this.toLowerCase();
  var modified = '';

  var mark = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      mark = true;
      continue;
    }

    if (mark) {
      if (modified.length > 0) {
        modified += str[i].toUpperCase();
      } else {
        modified = str[i];
      }
      mark = false;
    } else {
      modified += str[i];
    }
  }

  return modified;
};
