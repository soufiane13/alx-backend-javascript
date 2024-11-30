/**
 * Tests for the calculateNumber function
 */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

/**
 * Tests for the calculateNumber function
 * @param {string} type - The type of calculation to perform
 * @param {number} a - The first operand
 * @param {number} b - The second operand
 * @return {number|string} - The result of the calculation or 'Error' if the
 * calculation is invalid
 */
describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
   <|end_header|>
