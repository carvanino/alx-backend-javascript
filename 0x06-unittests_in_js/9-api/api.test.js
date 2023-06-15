const request = require('request');
const assert = require('assert');

describe('Test the Index page', () => {
  it('should check for correct status code and response body', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      assert.equal(body, 'Welcome to the payment system')
      done();
    });
  });
});

describe('Test for the cart route', () => {
  it('should check for the correct status code for the /cart/:id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      assert.equal(body, 'Payment method for cart 12');
      done();
    });
  });
});
describe ('Test for the cart route without a number', () => {
  it('should check for the correct status code for the /cart/:NaN', (done) => {
    request.get('http://localhost:7865/cart/Not_a_number', (error, respnse) => {
      assert.equal(respnse.statusCode, 404);
      done();
    });
  });
});