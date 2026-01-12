---
title: "Interface: JSONSchema"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / JSONSchema

# Interface: JSONSchema

Defined in: [src/types/schema.ts:149](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/schema.ts#L149)

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

Defined in: [src/types/schema.ts:160](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/schema.ts#L160)

Whether additional properties are allowed beyond those defined

***

### description?

> `optional` **description**: `string`

Defined in: [src/types/schema.ts:163](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/schema.ts#L163)

Human-readable description of the schema's purpose

***

### properties

> **properties**: `Record`\<`string`, [`JSONSchemaProperty`](jsonschemaproperty.md)\>

Defined in: [src/types/schema.ts:154](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/schema.ts#L154)

Property definitions for the object

***

### required?

> `optional` **required**: `string`[]

Defined in: [src/types/schema.ts:157](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/schema.ts#L157)

List of required property names

***

### type

> **type**: `"object"`

Defined in: [src/types/schema.ts:151](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/schema.ts#L151)

Root schemas are always objects
