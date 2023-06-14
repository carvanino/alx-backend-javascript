const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the addition of two numbers', () => {
    assert.equal(calculateNumber(4, 5), 9);
    assert.equal(calculateNumber(4.5, 5.1), 10);
    assert.equal(calculateNumber(4.3, 5.0), 9);
    assert.equal(calculateNumber(-4.5, 5.1), 1);
    assert.equal(calculateNumber(4.3, -5.1), -1);
  });
  it('should return NaN', () => {
    // assert(isNaN(calculateNumber('b', 'a'), NaN));
    // assert.ok(calculateNumber('a', 'b'), NaN)
    assert.ok(isNaN(calculateNumber('a', 'b')));
    assert.ok(isNaN(calculateNumber([2, 4, 5], 5)));
    assert.ok(isNaN(calculateNumber()));
    assert.ok(isNaN(calculateNumber(2.5)));
  });
});
