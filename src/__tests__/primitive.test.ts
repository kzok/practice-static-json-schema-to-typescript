import {staticAssert, Equals} from "../static_assert";

import {MapPrimitiveType} from "../primitive";

describe("Primitive types", () => {
  it("string", () => {
    type Expected = string;
    type Actual = MapPrimitiveType<{type: "string"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("number", () => {
    type Expected = number;
    type Actual = MapPrimitiveType<{type: "number"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("integer", () => {
    type Expected = number;
    type Actual = MapPrimitiveType<{type: "integer"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("boolean", () => {
    type Expected = boolean;
    type Actual = MapPrimitiveType<{type: "boolean"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("null", () => {
    type Expected = null;
    type Actual = MapPrimitiveType<{type: "null"}>;
    staticAssert<Equals<Actual, Expected>>();
  });
});

describe("Non primitive types", () => {
  it("array", () => {
    type Expected = never;
    type Actual = MapPrimitiveType<{type: "array"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("object", () => {
    type Expected = never;
    type Actual = MapPrimitiveType<{type: "object"}>;
    staticAssert<Equals<Actual, Expected>>();
  });
});

describe("Union types", () => {
  it("string | number", () => {
    type Expected = string | number;
    type Actual = MapPrimitiveType<{type: "string" | "number"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("string | object", () => {
    type Expected = string;
    type Actual = MapPrimitiveType<{type: "string" | "object"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it(`{type: "boolean"} | {type: "null"}`, () => {
    type Expected = boolean | null;
    type Actual = MapPrimitiveType<{type: "boolean"} | {type: "null"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it(`{type: "object"} | {type: "array"}`, () => {
    type Expected = never;
    type Actual = MapPrimitiveType<{type: "object"} | {type: "array"}>;
    staticAssert<Equals<Actual, Expected>>();
  });
});
