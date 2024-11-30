/**
 * This file contains API integration tests for the payment system.
 *
 * @author Bogdan Matsko <matcous@gmail.com>
 * @license MIT
 */
const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  /**
   * URL of the API to be tested.
   *
   * @constant
   * @type {String}
   */
  const API_URL = 'http://localhost:7865';

  /**
   * Integration test for the root endpoint.
   *
   * @test
   */
  it('GET / returns correct response', (done) => {
    /**
     * Make a GET request to the root endpoint.
     *
     * @param  {String}   url   URL of the API.
     * @param  {Function} callback Function to be called on request completion.
     */
    request.get(`${API_URL}/`, (_err, res, body) => {
      /**
       * Check that the response is correct.
       *
       * @todo   Add more checks. Currently, the test only checks the status
       *         code and the response body.
       */
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
