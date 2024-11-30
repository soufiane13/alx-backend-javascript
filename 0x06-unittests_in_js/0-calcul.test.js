/**
 * Tests for calculateNumber function
 * @file
 * @author
 * @copyright
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

/**
 * Tests for calculateNumber function
 * @function
 */
describe('calculateNumber', () => {
  /**
   * Test for floating point whole numbers
   * @function
   */
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  /**
   * Test for rounding down b's floating point fractional number
   * @function
   */
  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  /**
   * Test for rounding down a and b's floating point fractional number
   * @function
   */
  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  /**
   * Test for rounding down a's floating point fractional number
   * @function
   */
  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  /**
   * Test for rounding up b's floating point fractional numbers
   * @function
   */
  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  /**
   * Test for rounding up a and b's floating point fractional numbers
   * @function
   */
  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  /**
   * Test for rounding up a's floating point fractional numbers
   * @function
   */
  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  /**
   * Test for rounding down a and b floating point fractional numbers with trailing 9's
   * @function
   */
  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
