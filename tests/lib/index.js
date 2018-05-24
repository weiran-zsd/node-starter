'use strict';

const assert = require('assert');
const add = require('../../dist/lib.js');

describe('add', () => {
  it('1 + 1 === 2', () => {
    assert.equal(add(1, 1), 2);
  });
});
