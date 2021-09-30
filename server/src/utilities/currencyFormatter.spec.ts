import currencyFormatter from './currencyFormatter';

const { assert } = require('chai');

describe('Test currencyFormatter', () => {
  it('Send 0  returns $ 0 ', () => {
    const result = currencyFormatter(0);
    assert.equal(result, '$ 0');
  });

  it('send 1000 returns $1,000.00', () => {
    const result = currencyFormatter(1000);
    assert.equal(result, '$ 1.000');
  });

  it('send string value return ($ 0 )', () => {
    const result = currencyFormatter('string');
    assert.equal(result, '$ 0');
  });

  it('send -1400 negative  value return (-$ 1.400 )', () => {
    const result = currencyFormatter(-1400);
    assert.equal(result, '-$ 1.400');
  });

  it('send null value return ($ 0) ', () => {
    const result = currencyFormatter(null);
    assert.equal(result, '$ 0');
  });
});
