const request = require('request');
const assert = require('assert');

describe('Test the Index page', () => {
  it('should check for correct status code', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });
});
