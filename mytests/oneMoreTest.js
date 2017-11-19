var assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

function sum(x,y) {
    return x + y
}

function mult(x,y) {
    return x * y
}

describe('Koko', function() {
    describe('sum()', function() {
        it('sum should add two numbers!!!!!', function() {
            assert.equal(sum(5,10),15);
        });
    });
});

describe('Kiko', function() {
    it('120 + 30 should be equal to 150', function() {
        assert.equal(sum(120,30),150);
    });

    it('220 + 230 should be equal to 450', function() {
        assert.equal(sum(120,230),450);
    });


    it('420 + 230 should be equal to 650', function() {
        assert.equal(sum(420,230),450);
    });
});

describe('Multiplying', function() {
   it('5 * 3 should be equal to 15', function() {
         assert.equal(mult(5,3),15);
     });

    it('51 * 3 should be equal to 153', function() {
        assert.equal(mult(5,3),150);
    });
});
