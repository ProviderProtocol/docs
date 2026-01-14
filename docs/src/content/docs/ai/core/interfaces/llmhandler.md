---
title: "Interface: LLMHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMHandler

# Interface: LLMHandler\<TParams\>

Defined in: [src/types/provider.ts:224](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L224)

**`Internal`**

LLM handler interface for providers.

Implemented by providers to enable language model capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:240](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L240)

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

Defined in: [src/types/provider.ts:231](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L231)

Binds a model ID to create an executable model instance.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundLLMModel`](boundllmmodel.md)\<`TParams`\>

A bound LLM model ready for inference
