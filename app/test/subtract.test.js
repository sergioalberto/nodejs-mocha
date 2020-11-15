const sut = require('../src/subtract');
var expect  = require('chai').expect;

describe('calculator/subtract', function() {
    it('should return a number when parameters are passed to `subtract()`', () => {
        expect(sut.subtract(1,1)).to.be.a('number');
    });

    it('should return sum of `1` when 2 - 1 is passed to `subtract()`', () => {
        expect(sut.subtract(2,1)).to.equal(1);
    });
});
