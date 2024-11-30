/**
 * Test that the sendPaymentRequestToApi function uses the
 * calculateNumber method of the Utils module.
 */
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    // Set up a spy to watch the calculateNumber function
    const bigBrother = sinon.spy(Utils);

    // Call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that the calculateNumber function was called with the
    // correct parameters
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that the calculateNumber function was only called once
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

    // Clean up after the test so that the spy is not active
    // for other tests
    bigBrother.calculateNumber.restore();
  });
});
