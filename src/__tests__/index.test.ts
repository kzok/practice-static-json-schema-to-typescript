import {staticAssert, Equals} from "../static_assert";

import {ParseJsonSchema} from "../index";

describe("ParseJsonSchema", () => {
  it("Simple primitive type", () => {
    type Expected = string;
    type Actual = ParseJsonSchema<{type: "string"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("Union primitive type", () => {
    type Expected = number | boolean;
    type Actual = ParseJsonSchema<{type: ["number", "boolean"]}>;
    staticAssert<Equals<Actual, Expected>>();
  });
});

