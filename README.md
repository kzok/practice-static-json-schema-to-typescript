# practice-static-json-schema-to-typescript

Json Schema to TypeScript conversion in static way.
Based on draft 2019-09 [core](https://json-schema.org/draft/2019-09/json-schema-core.html) and [validation](https://json-schema.org/draft/2019-09/json-schema-validation.html).

## Example

```typescript
const schema = {
  type: "object";
  properties: {
    names: {
      type: "array";
      items: {type: "string"};
    };
  };
  required: ["names"];
} as const;

type ValidatedType = ParseJsonSchema<typeof schema>;
// type ValidatedType = {names: string[]};
```

## Tasks

- [x] primitive types
- [x] array
  - [x] items
  - [ ] array schema items (typed tuple)
  - [ ] additionalItems
- [x] object
  - [x] properties
  - [x] additionalProperties
- [ ] enum
- [ ] allOf (unneeded?)
- [ ] anyOf
- [ ] oneOf
