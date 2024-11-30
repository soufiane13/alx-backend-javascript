/**
 * 5-payment.js
 * Tests for sendPaymentRequestToApi function
 */

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  /**
   * beforeEach function
   * Sets up the test environment
   */
  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });

  /**
   * afterEach function
   * Cleans up the test environment
   */
  afterEach(() => {
    bigBrother.log.resetHistory();
  });

  /**
   * Test 1
   * Tests the function with parameters 100 and 20
   */
  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  /**
   * Test 2
   * Tests the function with parameters 10 and 10
   */
  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
