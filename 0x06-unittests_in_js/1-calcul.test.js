const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should SUM two numbers', () => {
      assert.equal(calculateNumber('SUM', 5.3, 4.5), 10);
      assert.equal(calculateNumber('SUM', 5.0, 4.5), 10);
      assert.equal(calculateNumber('SUM', -5.5, 4.5), 0);
      assert.equal(calculateNumber('SUM', 5.0, -4.5), 1);
      assert.equal(calculateNumber('SUM', 5.0, -4.6), 0);
    });

    it('should return NaN', () => {
      assert.ok(isNaN(calculateNumber('SUM', 'a', 'b'), NaN));
      assert.ok(isNaN(calculateNumber('SUM', [2, 4, 5], 5)));
      assert.ok(isNaN(calculateNumber('SUM')));
      assert.ok(isNaN(calculateNumber('SUM', 2.5)));
      assert.ok(isNaN(calculateNumber()));
    });
  });
  describe('SUBTACT', () => {
    it('should SUBTRACT two numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.3, 4.5), 0);
      assert.equal(calculateNumber('SUBTRACT', 5.0, -4.5), 9);
      assert.equal(calculateNumber('SUBTRACT', -5.5, 4.5), -10);
      assert.equal(calculateNumber('SUBTRACT', 5.0, -4.5), 9);
      assert.equal(calculateNumber('SUBTRACT', 5.0, -4.6), 10);
    });
    it('should return NaN', () => {
      assert.ok(isNaN(calculateNumber('SUBTRACT', 'a', 'b'), NaN));
      assert.ok(isNaN(calculateNumber('SUBTRACT', [2, 4, 5], 5)));
      assert.ok(isNaN(calculateNumber('SUBTRACT')));
    });
  });
  describe('DIVIDE', () => {
    it('should DIVIDE two numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 15.3, 4.5), 3);
      assert.equal(calculateNumber('DIVIDE', 15.0, -4.5), -3.75);
      assert.equal(calculateNumber('DIVIDE', -15.5, 4.5), -3);
      assert.equal(calculateNumber('DIVIDE', 15.0, -4.5), -3.75);
      assert.equal(calculateNumber('DIVIDE', 15.0, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 0.4, 12.0), 0);
    });
    it('should return NaN', () => {
      assert.ok(isNaN(calculateNumber('DIVIDE', 'a', 'b'), NaN));
      assert.ok(isNaN(calculateNumber('DIVIDE', [2, 4, 5], 5)));
      assert.ok(isNaN(calculateNumber('DIVIDE')));
    });
  });
});
