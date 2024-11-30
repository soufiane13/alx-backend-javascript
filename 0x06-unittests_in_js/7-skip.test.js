/**
 * @module numbers
 * @description A collection of tests for testing numbers
 */
const { expect } = require('chai');

/**
 * @function describe
 * @description A suite of tests for testing numbers
 */
describe('Testing numbers', () => {
  /**
   * @function it
   * @description Test that 1 is equal to 1
   */
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  /**
   * @function it
   * @description Test that 2 is equal to 2
   */
  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  /**
   * @function it.skip
   * @description Test that 1 is equal to 3 (this test is skipped)
   */
  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  /**
   * @function it
   * @description Test that 3 is equal to 3
   */
  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  /**
   * @function it
   * @description Test that 4 is equal to 4
   */
  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  /**
   * @function it
   * @description Test that 5 is equal to 5
   */
  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  /**
   * @function it
   * @description Test that 6 is equal to 6
   */
  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  /**
   * @function it
   * @description Test that 7 is equal to 7
   */
  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});
