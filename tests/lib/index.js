'use strict';

import { strict as assert } from 'assert';
import { add } from '../../lib/index.js';

describe('add', () => {
  it('1 + 1 === 2', () => {
    assert.strictEqual(add(1, 1), 2);
  });
});

