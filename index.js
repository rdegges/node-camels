'use strict';


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
