const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should make sure that Utils.calculateNumber is same math as sendPaymentRequestToApi', () => {
    // const object = sendPaymentRequestToApi;
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber');
    const message = 'The total is: 10';
    stub.returns(10);

    sendPaymentRequestToApi(100, 20);

    assert(stub.alwaysCalledWith('SUM', 100, 20));
    assert(spy.calledWith(message));

    // assert(spy.withArgs('SUM', 100, 20).calledOnce);
    stub.restore();
    spy.restore();
  });
});
