const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Basic integration testing', () => {
  describe('GET /', () => {
    it('endpoint GET /', (done) => {
      const options = {
        method: 'GET',
        url: 'http://localhost:7865',
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system')
        done();
      });
    });
  });
});
describe('Regex integration testing', () => {
  describe('GET /cart/:id', () => {
    it('endpoint GET /cart/:id', (done) => {
      const options = {
        method: 'GET',
        url: 'http://localhost:7865/cart/12',
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart 12`)
        done();
      });
    });
  });
  describe('GET /cart/:isNaN', () => {
    it('endpoint GET /cart/:isNaN', (done) => {
      const options = {
        method: 'GET',
        url: 'http://localhost:7865/cart/anything',
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        // expect(body).to.equal('Payment methods for cart: id')
        done();
      });
    });
  });
});