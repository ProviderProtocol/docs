---
title: "Interface: LLMOptions<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / LLMOptions

# Interface: LLMOptions\<TParams\>

Defined in: [src/types/llm.ts:90](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L90)

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

> `optional` **config**: [`ProviderConfig`](ProviderConfig.md)

Defined in: [src/types/llm.ts:96](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L96)

Provider infrastructure configuration (optional - uses env vars if omitted)

***

### model

> **model**: [`ModelReference`](ModelReference.md)\<`any`\>

Defined in: [src/types/llm.ts:93](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L93)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:99](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L99)

Model-specific parameters (temperature, max_tokens, etc.)

***

### structure?

> `optional` **structure**: [`JSONSchema`](JSONSchema.md)

Defined in: [src/types/llm.ts:111](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L111)

Structured output schema (JSON Schema)

***

### system?

> `optional` **system**: `string`

Defined in: [src/types/llm.ts:102](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L102)

System prompt for all inferences

***

### tools?

> `optional` **tools**: [`Tool`](Tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:105](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L105)

Tools available to the model

***

### toolStrategy?

> `optional` **toolStrategy**: [`ToolUseStrategy`](ToolUseStrategy.md)

Defined in: [src/types/llm.ts:108](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L108)

Tool execution strategy
