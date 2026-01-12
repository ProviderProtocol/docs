---
title: "Interface: LLMHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMHandler

# Interface: LLMHandler\<TParams\>

Defined in: [src/types/llm.ts:334](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L334)

LLM Handler interface for providers.

Implemented by providers to enable language model capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/llm.ts:350](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L350)

**`Internal`**

Sets the parent provider reference.
Called by createProvider() after the provider is constructed.

#### Parameters

##### provider

[`LLMProvider`](../type-aliases/llmprovider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundLLMModel`](boundllmmodel.md)\<`TParams`\>

Defined in: [src/types/llm.ts:341](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L341)

Binds a model ID to create an executable model instance.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundLLMModel`](boundllmmodel.md)\<`TParams`\>

A bound LLM model ready for inference
