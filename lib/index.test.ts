import { strict as assert } from "assert";
import { add } from "./index";

describe("add", () => {
  it("1 + 1 === 2", () => {
    assert.equal(add(1, 1), 2);
  });
});
