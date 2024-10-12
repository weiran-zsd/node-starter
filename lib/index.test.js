"use strict";

import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add } from "./index.js";

describe("add", () => {
  it("1 + 1 === 2", () => {
    assert.equal(add(1, 1), 2);
  });
});
