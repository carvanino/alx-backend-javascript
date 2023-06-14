const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should make sure that Utils.calculateNumber is same math as sendPaymentRequestToApi', () => {
    // const object = sendPaymentRequestToApi;
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(spy.withArgs('SUM', 100, 20).calledOnce);
    spy.restore();
  });
});
