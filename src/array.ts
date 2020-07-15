import {ArrayType, UniTypeJsonSchema, UniOrMultiTypeJsonSchema} from "./syntax";
import {ParseJsonSchema} from "./index";

type ArraySchema<T extends UniOrMultiTypeJsonSchema> = UniTypeJsonSchema<ArrayType> &
  Readonly<{
    items: T;
  }>;

export type MapArrayType<T extends UniTypeJsonSchema> = T extends ArraySchema<infer R>
  ? ParseJsonSchema<R>[]
  : T extends UniTypeJsonSchema<ArrayType>
  ? unknown[]
  : never;
