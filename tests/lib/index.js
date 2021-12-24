import { test } from "uvu";
import { strict as assert } from "assert";
import { add } from "../../lib/index.js";

test("add", () => {
  assert.strictEqual(add(1, 1), 2);
});

test.run();
