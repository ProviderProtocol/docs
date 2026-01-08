---
title: "Interface: Tool"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Tool

# Interface: Tool\<TParams, TResult\>

Defined in: [src/types/tool.ts:115](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L115)

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

Defined in: [src/types/tool.ts:120](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L120)

Human-readable description for the model to understand when to use this tool

***

### metadata?

> `optional` **metadata**: [`ToolMetadata`](toolmetadata.md)

Defined in: [src/types/tool.ts:142](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L142)

Provider-specific metadata, namespaced by provider name.

Used for provider-specific features like prompt caching:

#### Example

```typescript
const tool: Tool = {
  name: 'search_docs',
  description: 'Search documentation',
  parameters: {...},
  run: async (params) => {...},
  metadata: {
    anthropic: { cache_control: { type: 'ephemeral' } }
  }
};
```

***

### name

> **name**: `string`

Defined in: [src/types/tool.ts:117](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L117)

Tool name (must be unique within an llm() instance)

***

### parameters

> **parameters**: [`JSONSchema`](jsonschema.md)

Defined in: [src/types/tool.ts:123](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L123)

JSON Schema defining the tool's parameters

## Methods

### approval()?

> `optional` **approval**(`params`): `boolean` \| `Promise`\<`boolean`\>

Defined in: [src/types/tool.ts:161](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L161)

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

Defined in: [src/types/tool.ts:150](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L150)

Executes the tool with the provided parameters.

#### Parameters

##### params

`TParams`

The parameters passed by the model

#### Returns

`TResult` \| `Promise`\<`TResult`\>

The tool result, synchronously or as a Promise
