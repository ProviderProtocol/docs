---
title: "Interface: LLMCapabilities"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMCapabilities

# Interface: LLMCapabilities

Defined in: [src/types/llm.ts:67](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L67)

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

Defined in: [src/types/llm.ts:87](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L87)

Provider API supports audio input in messages

***

### documentInput

> **documentInput**: `boolean`

Defined in: [src/types/llm.ts:81](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L81)

Provider API supports document input in messages (PDFs, text files)

***

### imageInput

> **imageInput**: `boolean`

Defined in: [src/types/llm.ts:78](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L78)

Provider API supports image input in messages

***

### imageOutput?

> `optional` **imageOutput**: `boolean`

Defined in: [src/types/llm.ts:90](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L90)

Provider API supports image generation output (via image() or built-in tools)

***

### streaming

> **streaming**: `boolean`

Defined in: [src/types/llm.ts:69](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L69)

Provider API supports streaming responses

***

### structuredOutput

> **structuredOutput**: `boolean`

Defined in: [src/types/llm.ts:75](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L75)

Provider API supports native structured output (JSON schema)

***

### tools

> **tools**: `boolean`

Defined in: [src/types/llm.ts:72](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L72)

Provider API supports tool/function calling

***

### videoInput

> **videoInput**: `boolean`

Defined in: [src/types/llm.ts:84](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L84)

Provider API supports video input in messages
