var assert = require('assert');

describe('my first test case', function () {
  it('should return -1 when the value is not present', function () {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });


  it('should return 1', function () {
    assert.equal([1, 2, 3].indexOf(2), 1);
  });
});
