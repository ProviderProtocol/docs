---
title: "Interface: LLMHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMHandler

# Interface: LLMHandler\<TParams\>

Defined in: [src/types/llm.ts:310](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L310)

LLM Handler interface for providers.

Implemented by providers to enable language model capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/llm.ts:326](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L326)

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

Defined in: [src/types/llm.ts:317](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L317)

Binds a model ID to create an executable model instance.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundLLMModel`](boundllmmodel.md)\<`TParams`\>

A bound LLM model ready for inference
