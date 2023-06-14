// const assert = require('assert');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should SUM two numbers', () => {
      expect(calculateNumber('SUM', 5.3, 4.5)).to.equal(10);
      expect(calculateNumber('SUM', 5.0, 4.5)).to.equal(10);
      expect(calculateNumber('SUM', -5.5, 4.5)).to.equal(0);
      expect(calculateNumber('SUM', 5.0, -4.5)).to.equal(1);
      expect(calculateNumber('SUM', 5.0, -4.6)).to.equal(0);
    });

    it('should return NaN', () => {
      expect(isNaN(calculateNumber('SUM', 'a', 'b'))).to.be.true;
      expect(isNaN(calculateNumber('SUM', [2, 4, 5], 5))).to.be.true;
      expect(isNaN(calculateNumber('SUM'))).to.be.true;
      expect(isNaN(calculateNumber('SUM', 2.5))).to.be.true;
      expect(isNaN(calculateNumber())).to.be.true;
    });
  });
  describe('SUBTACT', () => {
    it('should SUBTRACT two numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.3, 4.5)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 5.0, -4.5)).to.equal(9);
      expect(calculateNumber('SUBTRACT', -5.5, 4.5)).to.equal(-10);
      expect(calculateNumber('SUBTRACT', 5.0, -4.5)).to.equal(9);
      expect(calculateNumber('SUBTRACT', 5.0, -4.6)).to.equal(10);
    });
    it('should return NaN', () => {
      expect(isNaN(calculateNumber('SUBTRACT', 'a', 'b'))).to.be.true;
      expect(isNaN(calculateNumber('SUBTRACT', [2, 4, 5], 5))).to.be.true;
      expect(isNaN(calculateNumber('SUBTRACT'))).to.be.true;
    });
  });
  describe('DIVIDE', () => {
    it('should DIVIDE two numbers', () => {
      expect(calculateNumber('DIVIDE', 15.3, 4.5)).to.equal(3);
      expect(calculateNumber('DIVIDE', 15.0, -4.5)).to.equal(-3.75);
      expect(calculateNumber('DIVIDE', -15.5, 4.5)).to.equal(-3);
      expect(calculateNumber('DIVIDE', 15.0, -4.5)).to.equal(-3.75);
      expect(calculateNumber('DIVIDE', 15.0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0.4, 12.0)).to.equal(0);
    });
    it('should return NaN', () => {
      expect(isNaN(calculateNumber('DIVIDE'))).to.be.true;
      expect(isNaN(calculateNumber('DIVIDE', 'a', 'b', NaN))).to.be.true;
      expect(isNaN(calculateNumber('DIVIDE', [2, 4, 5], 5))).to.be.true;
    });
  });
});
