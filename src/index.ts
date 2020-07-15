import {
  UniTypeJsonSchema,
  MultiTypeJsonSchema,
  UniOrMultiTypeJsonSchema,
  EmptyMultiTypeJsonSchema,
} from "./syntax";
import {MapPrimitiveType} from "./primitive";
import {MapArrayType} from "./array";

type MapUniTypeJsonSchema<T extends UniTypeJsonSchema> = MapPrimitiveType<T> | MapArrayType<T>;

type ParseMultiTypeJsonSchema<T extends UniOrMultiTypeJsonSchema> = T extends UniTypeJsonSchema
  ? T
  : T extends EmptyMultiTypeJsonSchema
  ? never // return never if type array is empty
  : T extends MultiTypeJsonSchema<infer R>
  ? Readonly<{[K in R]: UniTypeJsonSchema<K>}[R] & Omit<T, "type">>
  : never;

export type ParseJsonSchema<T extends UniOrMultiTypeJsonSchema> = MapUniTypeJsonSchema<
  ParseMultiTypeJsonSchema<T>
>;
