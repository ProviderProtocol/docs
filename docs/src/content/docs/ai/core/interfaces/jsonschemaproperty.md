---
title: "Interface: JSONSchemaProperty"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / JSONSchemaProperty

# Interface: JSONSchemaProperty

Defined in: [src/types/schema.ts:58](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L58)

JSON Schema property definition.

Describes a single property within a JSON Schema object, including
type constraints, validation rules, and nested structure definitions.

## Examples

```typescript
const nameProperty: JSONSchemaProperty = {
  type: 'string',
  description: 'User name',
  minLength: 1,
  maxLength: 100
};
```

```typescript
const tagsProperty: JSONSchemaProperty = {
  type: 'array',
  description: 'List of tags',
  items: { type: 'string' },
  minItems: 1,
  uniqueItems: true
};
```

## Properties

### additionalProperties?

> `optional` **additionalProperties**: `boolean`

Defined in: [src/types/schema.ts:120](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L120)

Whether additional properties are allowed (object type only)

***

### const?

> `optional` **const**: `unknown`

Defined in: [src/types/schema.ts:69](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L69)

Constant value this property must equal

***

### default?

> `optional` **default**: `unknown`

Defined in: [src/types/schema.ts:72](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L72)

Default value if not provided

***

### description?

> `optional` **description**: `string`

Defined in: [src/types/schema.ts:63](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L63)

Human-readable description for the LLM

***

### enum?

> `optional` **enum**: `unknown`[]

Defined in: [src/types/schema.ts:66](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L66)

Allowed values (enumeration)

***

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number`

Defined in: [src/types/schema.ts:96](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L96)

Maximum value exclusive (number/integer types only)

***

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number`

Defined in: [src/types/schema.ts:93](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L93)

Minimum value exclusive (number/integer types only)

***

### format?

> `optional` **format**: `"date"` \| `"email"` \| `"uri"` \| `"date-time"` \| `"uuid"`

Defined in: [src/types/schema.ts:84](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L84)

Semantic format hint (string type only)

***

### items?

> `optional` **items**: `JSONSchemaProperty`

Defined in: [src/types/schema.ts:102](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L102)

Schema for array elements (array type only)

***

### maximum?

> `optional` **maximum**: `number`

Defined in: [src/types/schema.ts:90](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L90)

Maximum value inclusive (number/integer types only)

***

### maxItems?

> `optional` **maxItems**: `number`

Defined in: [src/types/schema.ts:108](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L108)

Maximum array length (array type only)

***

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [src/types/schema.ts:78](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L78)

Maximum string length (string type only)

***

### minimum?

> `optional` **minimum**: `number`

Defined in: [src/types/schema.ts:87](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L87)

Minimum value inclusive (number/integer types only)

***

### minItems?

> `optional` **minItems**: `number`

Defined in: [src/types/schema.ts:105](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L105)

Minimum array length (array type only)

***

### minLength?

> `optional` **minLength**: `number`

Defined in: [src/types/schema.ts:75](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L75)

Minimum string length (string type only)

***

### multipleOf?

> `optional` **multipleOf**: `number`

Defined in: [src/types/schema.ts:99](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L99)

Value must be divisible by this (number/integer types only)

***

### pattern?

> `optional` **pattern**: `string`

Defined in: [src/types/schema.ts:81](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L81)

Regular expression pattern for validation (string type only)

***

### properties?

> `optional` **properties**: `Record`\<`string`, `JSONSchemaProperty`\>

Defined in: [src/types/schema.ts:114](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L114)

Nested property definitions (object type only)

***

### required?

> `optional` **required**: `string`[]

Defined in: [src/types/schema.ts:117](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L117)

List of required property names (object type only)

***

### type

> **type**: [`JSONSchemaPropertyType`](../type-aliases/jsonschemapropertytype.md)

Defined in: [src/types/schema.ts:60](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L60)

The JSON type of this property

***

### uniqueItems?

> `optional` **uniqueItems**: `boolean`

Defined in: [src/types/schema.ts:111](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/schema.ts#L111)

Whether array elements must be unique (array type only)
