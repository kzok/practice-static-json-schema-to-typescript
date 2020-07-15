export type BooleanType = "boolean";
export type NumberType = "number" | "integer";
export type StringType = "string";
export type NullType = "null";
export type ArrayType = "array";
export type ObjectType = "object";

export type JsonSchemaType =
  | BooleanType
  | NumberType
  | StringType
  | NullType
  | ArrayType
  | ObjectType;

export type UniTypeJsonSchema<T extends JsonSchemaType = JsonSchemaType> = Readonly<{
  type: T;
}>;

export type MultiTypeJsonSchema<T extends JsonSchemaType = JsonSchemaType> = Readonly<{
  type: readonly T[];
}>;

export type UniOrMultiTypeJsonSchema<T extends JsonSchemaType = JsonSchemaType> =
  | UniTypeJsonSchema<T>
  | MultiTypeJsonSchema<T>;

export type EmptyMultiTypeJsonSchema = Readonly<{
  type: readonly [];
}>;
