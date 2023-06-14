const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const grandTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${grandTotal}`);
}

module.exports = sendPaymentRequestToApi;
