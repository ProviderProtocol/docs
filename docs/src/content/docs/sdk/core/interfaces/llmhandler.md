---
title: "Interface: LLMHandler<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / LLMHandler

# Interface: LLMHandler\<TParams\>

Defined in: [src/types/llm.ts:299](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L299)

LLM Handler interface for providers.

Implemented by providers to enable language model capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/llm.ts:315](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L315)

**`Internal`**

Sets the parent provider reference.
Called by createProvider() after the provider is constructed.

#### Parameters

##### provider

[`LLMProvider`](../type-aliases/LLMProvider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundLLMModel`](BoundLLMModel.md)\<`TParams`\>

Defined in: [src/types/llm.ts:306](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L306)

Binds a model ID to create an executable model instance.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundLLMModel`](BoundLLMModel.md)\<`TParams`\>

A bound LLM model ready for inference
