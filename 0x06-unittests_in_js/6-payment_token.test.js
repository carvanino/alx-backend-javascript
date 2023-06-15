// const { assert } = require('chai');
const assert = require('assert');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('returns the response from the API', (done) => {
    const stub = sinon.stub();
    const expectedRes = {
      data: 'Successful response from the API',
    };
    // stub.returns(Promise.resolve(expectedRes));
    stub.resolves(expectedRes);

    getPaymentTokenFromAPI(true).then((response) => {
      assert.deepEqual(response, expectedRes);
    })
      .then(() => done(), done);
  });
});
