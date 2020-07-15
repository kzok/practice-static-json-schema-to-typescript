import {staticAssert, Equals} from "../static_assert";

import {ParseJsonSchema} from "../index";

describe("ParseJsonSchema", () => {
  it("simple primitive type", () => {
    type Expected = string;
    type Actual = ParseJsonSchema<{type: "string"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("empty union type would be never", () => {
    type Expected = never;
    type Actual = ParseJsonSchema<{type: []}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("union primitive type", () => {
    type Expected = number | boolean;
    type Actual = ParseJsonSchema<{type: ["number", "boolean"]}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("simple array type", () => {
    type Expected = boolean[];
    type Actual = ParseJsonSchema<{type: "array"; items: {type: "boolean"}}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("string array or null type", () => {
    type Expected = string[] | null;
    type Actual = ParseJsonSchema<{type: ["array", "null"]; items: {type: "string"}}>;
    staticAssert<Equals<Actual, Expected>>();
  });
});
