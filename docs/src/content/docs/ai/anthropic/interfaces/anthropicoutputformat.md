---
title: "Interface: AnthropicOutputFormat"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicOutputFormat

# Interface: AnthropicOutputFormat

Defined in: [src/providers/anthropic/types.ts:248](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L248)

Native structured output format configuration.

When provided, Claude's response will be constrained to match the
specified JSON schema. Requires the beta header `structured-outputs-2025-11-13`.

## Example

```typescript
const outputFormat: AnthropicOutputFormat = {
  type: 'json_schema',
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer' },
    },
    required: ['name', 'age'],
    additionalProperties: false,
  },
};
```

## Properties

### schema

> **schema**: `object`

Defined in: [src/providers/anthropic/types.ts:252](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L252)

JSON Schema defining the expected response structure.

#### additionalProperties?

> `optional` **additionalProperties**: `false`

Must be false for structured outputs.

#### properties

> **properties**: `Record`\<`string`, `unknown`\>

Property definitions for each field.

#### required?

> `optional` **required**: `string`[]

List of required property names.

#### type

> **type**: `"object"`

Schema type (always 'object' for structured outputs).

***

### type

> **type**: `"json_schema"`

Defined in: [src/providers/anthropic/types.ts:250](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L250)

Output format type - currently only 'json_schema' is supported.
