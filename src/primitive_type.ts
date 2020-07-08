import {
  BooleanType,
  NumberType,
  StringType,
  NullType,
  JsonSchemaType,
  UniTypeJsonSchema,
} from "./syntax";

type MapSchemaTypeToPrimitiveType<T extends JsonSchemaType> = T extends BooleanType
  ? boolean
  : never | T extends NumberType
  ? number
  : never | T extends StringType
  ? string
  : never | T extends NullType
  ? null
  : never;

export type MapPrimitiveType<T extends UniTypeJsonSchema> = T extends UniTypeJsonSchema<infer R>
  ? MapSchemaTypeToPrimitiveType<R>
  : never;
