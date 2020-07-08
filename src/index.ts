import {
  UniTypeJsonSchema,
  MultiTypeJsonSchema,
  EmptyMultiTypeJsonSchema,
} from "./syntax";
import {MapPrimitiveType} from "./primitive_type";

type MapUniTypeJsonSchema<T extends UniTypeJsonSchema> = MapPrimitiveType<T>;

type ParseMultiTypeJsonSchema<T extends MultiTypeJsonSchema> = T extends MultiTypeJsonSchema<
  infer R
>
  ? MapUniTypeJsonSchema<{[K in R]: UniTypeJsonSchema<K>}[R]>
  : never;

export type ParseJsonSchema<
  T extends UniTypeJsonSchema | MultiTypeJsonSchema
> = T extends UniTypeJsonSchema
  ? MapUniTypeJsonSchema<T>
  : T extends EmptyMultiTypeJsonSchema
  ? never
  : T extends MultiTypeJsonSchema
  ? ParseMultiTypeJsonSchema<T>
  : never;
