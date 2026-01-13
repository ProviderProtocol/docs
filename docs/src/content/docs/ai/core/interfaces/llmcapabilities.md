---
title: "Interface: LLMCapabilities"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMCapabilities

# Interface: LLMCapabilities

Defined in: [src/types/llm.ts:66](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L66)

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

Defined in: [src/types/llm.ts:83](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L83)

Provider API supports audio input in messages

***

### imageInput

> **imageInput**: `boolean`

Defined in: [src/types/llm.ts:77](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L77)

Provider API supports image input in messages

***

### imageOutput?

> `optional` **imageOutput**: `boolean`

Defined in: [src/types/llm.ts:86](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L86)

Provider API supports image generation output (via image() or built-in tools)

***

### streaming

> **streaming**: `boolean`

Defined in: [src/types/llm.ts:68](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L68)

Provider API supports streaming responses

***

### structuredOutput

> **structuredOutput**: `boolean`

Defined in: [src/types/llm.ts:74](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L74)

Provider API supports native structured output (JSON schema)

***

### tools

> **tools**: `boolean`

Defined in: [src/types/llm.ts:71](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L71)

Provider API supports tool/function calling

***

### videoInput

> **videoInput**: `boolean`

Defined in: [src/types/llm.ts:80](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L80)

Provider API supports video input in messages
