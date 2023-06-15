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
