/* global describe, it */

(function() {
  'use strict';

  describe('Calculator', function() {
    describe('add(a, b)', function() {
      it('a + b should be add up', function() {
        expect(add(2, 3)).to.equal(5);
      });
      it('should throw an error for non numbers', function() {
        expect(add.bind(window, ['three', 'four'])).to.throw(
          Error);
        expect(add.bind(window, [3, 'four'])).to.throw(Error);
        expect(add.bind(window, ['3', 4])).to.throw(Error);
      });
    });

    describe('subtract(a, b)', function() {
      it('a - b should work', function() {
        expect(subtract(2, 3)).to.equal(-1);
      });
      it('should throw an error for non numbers', function() {
        expect(subtract.bind(window, ['three', 'four'])).to.throw(
          Error);
        expect(subtract.bind(window, ['3', 4])).to.throw(Error);
      });
    });

    describe('multiply(a, b)', function() {
      it('a * b should work', function() {
        expect(multiply(2, 3)).to.equal(6);
      });
      it('should throw an error for non numbers', function() {
        expect(multiply.bind(window, ['three', 'four'])).to.throw(
          Error);
        expect(multiply.bind(window, ['3', 4])).to.throw(Error);
      });
    })

    describe('divide(a, b)', function() {
        it('a / b should work', function() {
          expect(divide(6, 3)).to.equal(2);
        })
        it('should throw an error for non numbers', function() {
          expect(divide.bind(window, ['three', 'four'])).to.throw(
            Error);
          expect(divide.bind(window, ['3', 4])).to.throw(Error);
        });
      })
      //
    describe('isNumber(n)', function() {
      it('should return false if n is not a number', function() {
        assert.isFalse(isNumber(undefined));
        assert.isFalse(isNumber('string'));
      })
      it('should return true if n is a number', function() {
        assert.isTrue(isNumber(1));
      });
    })
  });
})();
