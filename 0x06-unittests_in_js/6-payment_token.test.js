/**
 * Import necessary modules and functions
 */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/**
 * Test suite for the getPaymentTokenFromAPI function
 */
describe('getPaymentTokenFromAPI', () => {
  /**
   * Test case: Verifies that getPaymentTokenFromAPI returns
   * the expected response when success is true
   */
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // Assert that the response matches the expected output
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
