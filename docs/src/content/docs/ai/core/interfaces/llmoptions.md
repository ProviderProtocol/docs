---
title: "Interface: LLMOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMOptions

# Interface: LLMOptions\<TParams\>

Defined in: [src/types/llm.ts:119](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L119)

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

Defined in: [src/types/llm.ts:124](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L124)

Provider infrastructure configuration (optional - uses env vars if omitted)

***

### middleware?

> `optional` **middleware**: [`Middleware`](middleware.md)[]

Defined in: [src/types/llm.ts:166](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L166)

Middleware for intercepting and transforming requests, responses, and streams.

Middleware are executed in array order for request/start hooks,
and reverse order for response/end hooks.

#### Example

```typescript
const model = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  middleware: [
    loggingMiddleware(),
    parsedObjectMiddleware(),
  ],
});
```

***

### model

> **model**: `ModelInput`

Defined in: [src/types/llm.ts:121](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L121)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:127](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L127)

Model-specific parameters (temperature, max_tokens, etc.)

***

### structure?

> `optional` **structure**: [`JSONSchema`](jsonschema.md)

Defined in: [src/types/llm.ts:147](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L147)

Structured output schema (JSON Schema)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/types/llm.ts:138](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L138)

System prompt for all inferences.

Can be a simple string or a provider-specific array format:
- Anthropic: `[{type: 'text', text: '...', cache_control?: {...}}]`
- Google: `[{text: '...'}, {text: '...'}]` (parts array)

Array formats are passed through directly to the provider.

***

### tools?

> `optional` **tools**: [`Tool`](tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:141](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L141)

Tools available to the model

***

### toolStrategy?

> `optional` **toolStrategy**: [`ToolUseStrategy`](toolusestrategy.md)

Defined in: [src/types/llm.ts:144](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L144)

Tool execution strategy
