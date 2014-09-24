'use strict';

/**
 * Dependencies.
 */
var assert = require('assert');
require('..');

/**
 * Tests.
 */
describe('toCamelCase()', function() {
  it('should remove all leading underscores', function(done) {
    assert.equal('_____hi_there'.toCamelCase(), 'hiThere');
    assert.equal('___hi_there'.toCamelCase(), 'hiThere');
    assert.equal('_hi_there'.toCamelCase(), 'hiThere');
    done();
  });

  it('should remove all trailing underscores', function(done) {
    assert.equal('_hi_there___'.toCamelCase(), 'hiThere');
    assert.equal('_hi_there________'.toCamelCase(), 'hiThere');
    assert.equal('_hi_there_'.toCamelCase(), 'hiThere');
    done();
  });

  it('should remove all underscores', function(done) {
    assert.equal('_hi_there__'.toCamelCase(), 'hiThere');
    assert.equal('______'.toCamelCase(), '');
    assert.equal('_'.toCamelCase(), '');
    assert.equal('_ _'.toCamelCase(), ' ');
    done();
  });

  it('should never capitalize the first character', function(done) {
    assert.equal('HIthere'.toCamelCase(), 'hithere');
    assert.equal('_Hithere'.toCamelCase(), 'hithere');
    assert.equal('____Hithere'.toCamelCase(), 'hithere');
    done();
  });

  it('should always capitalize the character after an underscore', function(done) {
    assert.equal('hi_there'.toCamelCase(), 'hiThere');
    assert.equal('_hi_____there'.toCamelCase(), 'hiThere');
    assert.equal('_hi_There'.toCamelCase(), 'hiThere');
    done();
  });
});
