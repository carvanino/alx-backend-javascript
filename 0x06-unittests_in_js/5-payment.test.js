const sinon = require('sinon');
const { assert } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('usage of hooks on a spy', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spy.restore();
  });

  it('should verify the log value and that its called once', () => {
    sendPaymentRequestToApi(100, 20);
    const message = 'The total is: 120';
    assert(spy.calledWith(message));
    assert(spy.calledOnce);
  });

  it('should verify the log value and that its called once', () => {
    sendPaymentRequestToApi(10, 10);
    const message = 'The total is: 20';
    assert(spy.calledWith(message));
    assert(spy.calledOnce);
  });
});
