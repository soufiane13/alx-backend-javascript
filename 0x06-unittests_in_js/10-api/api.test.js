/**
 * @description This is a test suite for the payment system API.
 *              It assumes that the API is running on localhost:7865
 */
const request = require('request');
const { expect } = require('chai');

/**
 * @description This test suite contains tests for the API endpoint
 */
describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  /**
   * @description This test checks that the root endpoint returns a valid response
   */
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  /**
   * @description This test checks that the /cart/:id endpoint returns a valid
   *              response given a valid :id
   */
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  /**
   * @description This test checks that the /cart/:id endpoint returns a 404
   *              response for negative number values in :id
   */
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * @description This test checks that the /cart/:id endpoint returns a 404
   *              response for non-numeric values in :id
   */
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * @description This test checks that the /login endpoint returns a valid
   *              response
   */
  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  /**
   * @description This test checks that the /available_payments endpoint returns
   *              a valid response
   */
  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
