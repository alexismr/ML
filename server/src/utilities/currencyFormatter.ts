const currenFormatter = require('currency-formatter');

export function currencyFormatter(price){
        return currenFormatter.format(price, {
           symbol: '$ ',
           thousand: '.',
           precision: 0,
           decimalDigits: 2
        });
      
}