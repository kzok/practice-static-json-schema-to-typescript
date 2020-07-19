import {ObjectType, UniTypeJsonSchema, UniOrMultiTypeJsonSchema} from "./syntax";
import {ParseJsonSchema} from "./index";

type ObjectJsonSchema = UniTypeJsonSchema<ObjectType>;

type UnknownObject = Partial<{[k: string]: unknown}>;

// required

type WithRequired<K extends string> = ObjectJsonSchema & Readonly<{required: readonly K[]}>;

type RequiredKeys<T extends ObjectJsonSchema> = T extends WithRequired<infer R> ? R : never;

// properties

type JsonSchemaProperties = Readonly<Record<string, UniOrMultiTypeJsonSchema>>;

type WithProperties<T extends JsonSchemaProperties> = ObjectJsonSchema &
  Readonly<{
    properties: T;
  }>;

type MapWithProperties<T extends WithProperties<any>> = T extends WithProperties<infer P>
  ? {[K in Extract<keyof P, RequiredKeys<T>>]: ParseJsonSchema<P[K]>} &
      {[K in Exclude<keyof P, RequiredKeys<T>>]?: ParseJsonSchema<P[K]>}
  : never;

// additionalProperties

type NoAdditionalProperties = Readonly<{additionalProperties: false}>;

type EffectAdditionalProperties<
  T extends ObjectJsonSchema,
  RESULT extends UnknownObject
> = T extends NoAdditionalProperties ? RESULT : RESULT & {[_: string]: any};

// ---

export type MapObjectType<T extends UniTypeJsonSchema> = T extends ObjectJsonSchema
  ? T extends WithProperties<any>
    ? EffectAdditionalProperties<T, MapWithProperties<T>>
    : UnknownObject
  : never;
