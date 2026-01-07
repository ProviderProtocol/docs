---
title: "Interface: JSONSchema"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / JSONSchema

# Interface: JSONSchema

Defined in: [src/types/schema.ts:149](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/schema.ts#L149)

Root JSON Schema for tool parameters or structured outputs.

This is the top-level schema definition used when defining tool
parameters or requesting structured output from an LLM.

## Example

```typescript
const weatherToolSchema: JSONSchema = {
  type: 'object',
  description: 'Parameters for getting weather information',
  properties: {
    location: {
      type: 'string',
      description: 'City name or coordinates'
    },
    units: {
      type: 'string',
      enum: ['celsius', 'fahrenheit'],
      description: 'Temperature units'
    }
  },
  required: ['location']
};
```

## Properties

### additionalProperties?

> `optional` **additionalProperties**: `boolean`

Defined in: [src/types/schema.ts:160](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/schema.ts#L160)

Whether additional properties are allowed beyond those defined

***

### description?

> `optional` **description**: `string`

Defined in: [src/types/schema.ts:163](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/schema.ts#L163)

Human-readable description of the schema's purpose

***

### properties

> **properties**: `Record`\<`string`, [`JSONSchemaProperty`](JSONSchemaProperty.md)\>

Defined in: [src/types/schema.ts:154](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/schema.ts#L154)

Property definitions for the object

***

### required?

> `optional` **required**: `string`[]

Defined in: [src/types/schema.ts:157](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/schema.ts#L157)

List of required property names

***

### type

> **type**: `"object"`

Defined in: [src/types/schema.ts:151](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/schema.ts#L151)

Root schemas are always objects
