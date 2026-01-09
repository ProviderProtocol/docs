---
title: "Interface: LLMCapabilities"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMCapabilities

# Interface: LLMCapabilities

Defined in: [src/types/llm.ts:61](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L61)

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

Defined in: [src/types/llm.ts:78](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L78)

Provider API supports audio input in messages

***

### imageInput

> **imageInput**: `boolean`

Defined in: [src/types/llm.ts:72](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L72)

Provider API supports image input in messages

***

### imageOutput?

> `optional` **imageOutput**: `boolean`

Defined in: [src/types/llm.ts:81](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L81)

Provider API supports image generation output (via modalities or built-in tools)

***

### streaming

> **streaming**: `boolean`

Defined in: [src/types/llm.ts:63](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L63)

Provider API supports streaming responses

***

### structuredOutput

> **structuredOutput**: `boolean`

Defined in: [src/types/llm.ts:69](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L69)

Provider API supports native structured output (JSON schema)

***

### tools

> **tools**: `boolean`

Defined in: [src/types/llm.ts:66](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L66)

Provider API supports tool/function calling

***

### videoInput

> **videoInput**: `boolean`

Defined in: [src/types/llm.ts:75](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L75)

Provider API supports video input in messages
