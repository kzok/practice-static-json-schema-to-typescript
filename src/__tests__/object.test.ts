import {staticAssert, Equals} from "../static_assert";

import {MapObjectType} from "../object";

describe("MapObjectType", () => {
  it("unknown object", () => {
    type Expected = {[_: string]: unknown};
    type Actual = MapObjectType<{type: "object"}>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("object with properties", () => {
    type Expected = {[_ in never]: never} & {
      foo?: string;
      bar?: number;
      baz?: boolean;
    } & {[_: string]: any};
    type Actual = MapObjectType<{
      type: "object";
      properties: {
        foo: {type: "string"};
        bar: {type: "number"};
        baz: {type: "boolean"};
      };
    }>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("required properties", () => {
    type Expected = {
      foo: string;
      bar: number;
    } & {baz?: boolean} & {[_: string]: any};
    type Actual = MapObjectType<{
      type: "object";
      properties: {
        foo: {type: "string"};
        bar: {type: "number"};
        baz: {type: "boolean"};
      };
      required: ["foo", "bar"];
    }>;
    staticAssert<Equals<Actual, Expected>>();
  });

  it("additionalProperties: false", () => {
    type Expected = {
      foo: string;
      bar: number;
    } & {baz?: boolean};
    type Actual = MapObjectType<{
      type: "object";
      properties: {
        foo: {type: "string"};
        bar: {type: "number"};
        baz: {type: "boolean"};
      };
      required: ["foo", "bar"];
      additionalProperties: false;
    }>;
    staticAssert<Equals<Actual, Expected>>();
  });
});
