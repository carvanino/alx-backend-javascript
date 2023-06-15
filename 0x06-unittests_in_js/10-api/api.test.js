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
      assert.equal(body, 'Payment methods for cart 12');
      done();
    });
  });

  it('should check for the correct status code for the /cart/:NaN', (done) => {
    request.get('http://localhost:7865/cart/Not_a_number', (error, respnse) => {
      assert.equal(respnse.statusCode, 404);
      done();
    });
  });
});

describe('Test for /available_payments endpoint', (req, res) => {
  it('Should check for the correct status code & returned object', (done) => {
    const expectedRes = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
        assert.deepEqual(JSON.parse(body), expectedRes);
        assert.equal(response.statusCode, 200);
      });
      done();
    });
});

describe('Test for the /login endpoint', (req, res) => {
  it('should check for the correct response and status code', (done) => {
    const data = {
      userName: "Betty",
    }
    request.post('http://localhost:7865/login', {json: data}, (error, response, body) => {
      assert.equal(body, 'Welcome Betty');
      assert.equal(response.statusCode, 200);
      done();
    });
  });
});