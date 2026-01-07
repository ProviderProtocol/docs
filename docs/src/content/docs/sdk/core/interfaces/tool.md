---
title: "Interface: Tool<TParams, TResult>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / Tool

# Interface: Tool\<TParams, TResult\>

Defined in: [src/types/tool.ts:97](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L97)

Tool definition for LLM function calling.

Defines a tool that can be called by the LLM, including its
name, description, parameter schema, and execution function.

## Example

```typescript
const weatherTool: Tool<{ location: string }, WeatherData> = {
  name: 'get_weather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: { type: 'string', description: 'City name' }
    },
    required: ['location']
  },
  run: async (params) => {
    return fetchWeather(params.location);
  }
};
```

## Type Parameters

### TParams

`TParams` = `unknown`

The type of parameters the tool accepts

### TResult

`TResult` = `unknown`

The type of result the tool returns

## Properties

### description

> **description**: `string`

Defined in: [src/types/tool.ts:102](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L102)

Human-readable description for the model to understand when to use this tool

***

### name

> **name**: `string`

Defined in: [src/types/tool.ts:99](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L99)

Tool name (must be unique within an llm() instance)

***

### parameters

> **parameters**: [`JSONSchema`](JSONSchema.md)

Defined in: [src/types/tool.ts:105](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L105)

JSON Schema defining the tool's parameters

## Methods

### approval()?

> `optional` **approval**(`params`): `boolean` \| `Promise`\<`boolean`\>

Defined in: [src/types/tool.ts:124](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L124)

Optional approval handler for sensitive operations.

If provided, this function is called before the tool executes.
Return false to prevent execution.

#### Parameters

##### params

`TParams`

The parameters the tool would be called with

#### Returns

`boolean` \| `Promise`\<`boolean`\>

Whether to approve the execution

***

### run()

> **run**(`params`): `TResult` \| `Promise`\<`TResult`\>

Defined in: [src/types/tool.ts:113](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L113)

Executes the tool with the provided parameters.

#### Parameters

##### params

`TParams`

The parameters passed by the model

#### Returns

`TResult` \| `Promise`\<`TResult`\>

The tool result, synchronously or as a Promise
