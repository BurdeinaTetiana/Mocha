const assert = require('assert');

const {sum, mult} = require('../index.js');
describe('function sum', () => {
    it('should variable a equals 10', () => {
        assert.equal(sum(2, 4), 6);
    });

    it('should variabls a not equals 0', () => {
        assert.notEqual(sum(2, 4), 0)
    });
})


it('should mult works correct 8', () => {
    assert.equal(mult(2, 4), 8);
});

