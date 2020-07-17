import {ObjectType, UniTypeJsonSchema, UniOrMultiTypeJsonSchema} from "./syntax";
import {ParseJsonSchema} from "./index";

type HasProperties<T extends Record<string, UniOrMultiTypeJsonSchema>> = UniTypeJsonSchema<
  ObjectType
> &
  Readonly<{
    properties: T;
  }>;

type UnknownObject = Partial<{[k: string]: unknown}>;

type HasRequired<K extends string> = UniTypeJsonSchema<ObjectType> &
  Readonly<{required: readonly K[]}>;

type Required<T extends UniTypeJsonSchema> = T extends HasRequired<infer R> ? R : never;

type MapObjectHasProperties<T extends HasProperties<any>> = T extends HasProperties<infer R>
  ? {[K in Extract<keyof R, Required<T>>]: ParseJsonSchema<R[K]>} &
      {[K in Exclude<keyof R, Required<T>>]?: ParseJsonSchema<R[K]>}
  : never;

export type MapObjectType<T extends UniTypeJsonSchema> = T extends HasProperties<any>
  ? MapObjectHasProperties<T>
  : T extends UniTypeJsonSchema<ObjectType>
  ? UnknownObject
  : never;
