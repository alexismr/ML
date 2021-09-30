import { currencyFormatter } from "./currencyFormatter";


var assert = require("chai").assert;


describe('Test currencyFormatter', () => {

    it('Send 0  returns $ 0 ', () => {
        var result = currencyFormatter(0)
        assert.equal(result, '$ 0')
    })

    it('send 1000 returns $1,000.00', () => {
        var result = currencyFormatter(1000)
        assert.equal(result, '$ 1.000')
    })


    it('send string value return ($ 0 )', () => {
        var result = currencyFormatter("string")
        assert.equal(result, '$ 0')
    })

    it('send -1400 negative  value return (-$ 1.400 )', () => {
        var result = currencyFormatter(-1400)
        assert.equal(result, '-$ 1.400')
    })

    it('send null value return ($ 0) ', () => {
        var result = currencyFormatter(null)
        assert.equal(result, '$ 0')
    })

})