import {
  UniTypeJsonSchema,
  UniOrMultiTypeJsonSchema,
  ConvertMultiTypeJsonSchemaIntoUniType,
} from "./syntax";
import {MapPrimitiveType} from "./primitive";
import {MapArrayType} from "./array";
import {MapObjectType} from "./object";

type MapUniTypeJsonSchema<T extends UniTypeJsonSchema> =
  | MapPrimitiveType<T>
  | MapArrayType<T>
  | MapObjectType<T>;

export type ParseJsonSchema<T extends UniOrMultiTypeJsonSchema> = MapUniTypeJsonSchema<
  ConvertMultiTypeJsonSchemaIntoUniType<T>
>;
