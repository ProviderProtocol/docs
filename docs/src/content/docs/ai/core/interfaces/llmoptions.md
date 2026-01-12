---
title: "Interface: LLMOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMOptions

# Interface: LLMOptions\<TParams\>

Defined in: [src/types/llm.ts:115](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L115)

Options for creating an LLM instance with the llm() function.

## Example

```typescript
const options: LLMOptions = {
  model: openai('gpt-4'),
  system: 'You are a helpful assistant.',
  params: { temperature: 0.7, max_tokens: 1000 },
  tools: [weatherTool, searchTool],
  toolStrategy: { maxIterations: 5 }
};

const instance = llm(options);
```

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### config?

> `optional` **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/llm.ts:120](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L120)

Provider infrastructure configuration (optional - uses env vars if omitted)

***

### model

> **model**: `ModelInput`

Defined in: [src/types/llm.ts:117](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L117)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:123](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L123)

Model-specific parameters (temperature, max_tokens, etc.)

***

### structure?

> `optional` **structure**: [`JSONSchema`](jsonschema.md)

Defined in: [src/types/llm.ts:143](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L143)

Structured output schema (JSON Schema)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/types/llm.ts:134](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L134)

System prompt for all inferences.

Can be a simple string or a provider-specific array format:
- Anthropic: `[{type: 'text', text: '...', cache_control?: {...}}]`
- Google: `[{text: '...'}, {text: '...'}]` (parts array)

Array formats are passed through directly to the provider.

***

### tools?

> `optional` **tools**: [`Tool`](tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:137](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L137)

Tools available to the model

***

### toolStrategy?

> `optional` **toolStrategy**: [`ToolUseStrategy`](toolusestrategy.md)

Defined in: [src/types/llm.ts:140](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/llm.ts#L140)

Tool execution strategy
