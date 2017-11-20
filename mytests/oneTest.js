// Inserted from team repo
// More comments
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

describe('Koko', function() {
    describe('sum()', function() {
        it('sum should add two numbers!!', function() {
            assert.equal(sum(5,10),15);
        });
    });
});

describe('Kikokiko', function() {
    it('20 + 30 should be equal to 50!!', function() {
        assert.equal(sum(20,30),50);
    });
});
