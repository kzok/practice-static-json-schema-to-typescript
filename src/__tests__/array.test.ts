import {staticAssert, Equals} from "../static_assert";

import {MapArrayType} from "../array";

describe("Array types", () => {
  it("not array", () => {
    type Expected = never;
    type Actual = MapArrayType<{type: "string"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("unknown array", () => {
    type Expected = unknown[];
    type Actual = MapArrayType<{type: "array"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("string array", () => {
    type Expected = string[];
    type Actual = MapArrayType<{type: "array"; items: {type: "string"}}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("null or number array", () => {
    type Expected = (null | number)[];
    type Actual = MapArrayType<{type: "array"; items: {type: ["null", "number"]}}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("nested boolean array", () => {
    type Expected = boolean[][];
    type Actual = MapArrayType<{
      type: "array";
      items: {
        type: "array";
        items: {type: "boolean"};
      };
    }>;
    staticAssert<Equals<Actual, Expected>>();
  });
});
