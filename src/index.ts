import {
  UniTypeJsonSchema,
  UniOrMultiTypeJsonSchema,
  ConvertMultiTypeJsonSchemaIntoUniType,
} from "./syntax";
import {MapPrimitiveType} from "./primitive";
import {MapArrayType} from "./array";

type MapUniTypeJsonSchema<T extends UniTypeJsonSchema> = MapPrimitiveType<T> | MapArrayType<T>;

export type ParseJsonSchema<T extends UniOrMultiTypeJsonSchema> = MapUniTypeJsonSchema<
  ConvertMultiTypeJsonSchemaIntoUniType<T>
>;
