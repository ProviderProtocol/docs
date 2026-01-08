---
title: "Interface: LLMCapabilities"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMCapabilities

# Interface: LLMCapabilities

Defined in: [src/types/llm.ts:44](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L44)

LLM capabilities declare what a provider's API supports.

These are API-level capabilities, not individual model capabilities.
If a user attempts to use a feature with a model that doesn't support it,
the provider's API will return an error.

Capabilities are static and do not vary per-request or per-model.

## Example

```typescript
const capabilities: LLMCapabilities = {
  streaming: true,
  tools: true,
  structuredOutput: true,
  imageInput: true,
  videoInput: false,
  audioInput: false
};
```

## Properties

### audioInput

> **audioInput**: `boolean`

Defined in: [src/types/llm.ts:61](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L61)

Provider API supports audio input in messages

***

### imageInput

> **imageInput**: `boolean`

Defined in: [src/types/llm.ts:55](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L55)

Provider API supports image input in messages

***

### streaming

> **streaming**: `boolean`

Defined in: [src/types/llm.ts:46](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L46)

Provider API supports streaming responses

***

### structuredOutput

> **structuredOutput**: `boolean`

Defined in: [src/types/llm.ts:52](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L52)

Provider API supports native structured output (JSON schema)

***

### tools

> **tools**: `boolean`

Defined in: [src/types/llm.ts:49](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L49)

Provider API supports tool/function calling

***

### videoInput

> **videoInput**: `boolean`

Defined in: [src/types/llm.ts:58](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L58)

Provider API supports video input in messages
