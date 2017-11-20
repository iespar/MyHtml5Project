// Comment from team to anotherTest
var assert = require('assert');

describe('Array-team', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

function sum(x,y) {
  if (x==0) {
      return 0
  }
  else {
      return x + y
  }
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

    it('50 + 75 should be equal to 125', function() {
        assert.equal(sum(50,50),100);
    });
});
