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

/**
 * This function returns an underscored version of the string.
 *
 * @method
 * @public
 *
 * @returns An underscored version of this string.
 */
String.prototype.toUnderscore = function() {
  var str = this;
  var modified = '';

  for (var i = 0; i < str.length; i++) {

    // If this character is lowercase, append it to the string.
    if (isLower(str[i])) {
      modified += str[i];

    // If this character is uppercase, continue processing.
    } else {

      // If there is a previous character, continue processing.
      if (str.length > i-1) {

        // If the previous character is lowercase, then we need to append an
        // underscore.
        if (isLower(str[i-1])) {
          modified += '_' + str[i].toLowerCase();
        } else {
          modified += str[i].toLowerCase();
        }

      // If there's no previous character, then just lowercase this one.
      } else {
        modified += str[i].toLowerCase();
      }

    }

  }

  return modified;
};
