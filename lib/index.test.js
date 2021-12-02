"use strict";

import assert from "assert";
import { add } from "./index.js";

describe("add", () => {
  it("1 + 1 === 2", () => {
    assert.strictEqual(add(1, 1), 2);
  });
});
