---
title: "Type Alias: EmbeddingProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingProvider

# Type Alias: EmbeddingProvider\<TParams, TOptions\>

> **EmbeddingProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:383](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L383)

Provider with Embedding modality support.

Type alias for providers that support embedding generation.

## Type Declaration

### modalities

> `readonly` **modalities**: `object`

#### modalities.embedding

> **embedding**: [`EmbeddingHandler`](../interfaces/embeddinghandler.md)\<`TParams`\>

## Type Parameters

### TParams

`TParams` = `any`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type
