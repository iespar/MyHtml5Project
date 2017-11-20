var assert = require('assert');

describe('Array', function() {
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

describe('Kokoko', function() {
    describe('sum()', function() {
        it('sum should add two numbers!!!!!', function() {
            assert.equal(sum(85,100),185);
        });
    });
});

describe('Kiko', function() {
    it('420 + 30 should be equal to 450', function() {
        assert.equal(sum(20,30),50);
    });
});
