import {staticAssert, Equals} from "../static_assert";

import {ConvertMultiTypeJsonSchemaIntoUniType} from "../syntax";

describe("ParseMultiTypeJsonSchema", () => {
  it("uni type json schema", () => {
    type Expected = {type: "string"};
    type Actual = ConvertMultiTypeJsonSchemaIntoUniType<{type: "string"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("multi type json schema (string)", () => {
    type Expected = {readonly type: "string"};
    type Actual = ConvertMultiTypeJsonSchemaIntoUniType<{type: ["string"]}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("multi type json schema (number or null)", () => {
    type Expected = {readonly type: "number"} | {readonly type: "null"};
    type Actual = ConvertMultiTypeJsonSchemaIntoUniType<{type: ["number", "null"]}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("distributes extra properties", () => {
    type Expected =
      | {
          readonly type: "array";
          readonly items: {readonly type: "string"};
        }
      | {
          readonly type: "null";
          readonly items: {readonly type: "string"};
        };
    type Actual = ConvertMultiTypeJsonSchemaIntoUniType<
      Readonly<{
        type: ["array", "null"];
        items: {readonly type: "string"};
      }>
    >;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("return never if empty type array", () => {
    type Expected = never;
    type Actual = ConvertMultiTypeJsonSchemaIntoUniType<{type: []}>;
    staticAssert<Equals<Actual, Expected>>();
  });
});
