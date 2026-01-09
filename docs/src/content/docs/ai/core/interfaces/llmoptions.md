---
title: "Interface: LLMOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMOptions

# Interface: LLMOptions\<TParams\>

Defined in: [src/types/llm.ts:110](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L110)

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

Defined in: [src/types/llm.ts:115](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L115)

Provider infrastructure configuration (optional - uses env vars if omitted)

***

### model

> **model**: `ModelInput`

Defined in: [src/types/llm.ts:112](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L112)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:118](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L118)

Model-specific parameters (temperature, max_tokens, etc.)

***

### structure?

> `optional` **structure**: [`JSONSchema`](jsonschema.md)

Defined in: [src/types/llm.ts:138](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L138)

Structured output schema (JSON Schema)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/types/llm.ts:129](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L129)

System prompt for all inferences.

Can be a simple string or a provider-specific array format:
- Anthropic: `[{type: 'text', text: '...', cache_control?: {...}}]`
- Google: `[{text: '...'}, {text: '...'}]` (parts array)

Array formats are passed through directly to the provider.

***

### tools?

> `optional` **tools**: [`Tool`](tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:132](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L132)

Tools available to the model

***

### toolStrategy?

> `optional` **toolStrategy**: [`ToolUseStrategy`](toolusestrategy.md)

Defined in: [src/types/llm.ts:135](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L135)

Tool execution strategy
