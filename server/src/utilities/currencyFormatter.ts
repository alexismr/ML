const currenFormatter = require('currency-formatter');

export default function currencyFormatter (price) {
  return currenFormatter.format(price, {
    symbol: '$ ',
    thousand: '.',
    precision: 0,
    decimalDigits: 2,
  });
}
