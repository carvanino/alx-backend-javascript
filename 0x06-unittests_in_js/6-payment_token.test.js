const { assert } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  context('On success', () => {
    it('returns the response from the API', () => new Promise((done) => {
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
    }));
  });
});