/* global describe, it */

(function() {
  'use strict';

  describe('Calculator', function() {
    describe('add()', function() {
      it('a + b should be add up', function() {
        assert.equal(3, add(1, 2));
        assert.equal(-1, add(1, -2));
        assert.equal(100, add(90, 10));
      });
    });
  });
})();
