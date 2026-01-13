---
title: "Interface: EmbeddingOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingOptions

# Interface: EmbeddingOptions\<TParams\>

Defined in: [src/types/embedding.ts:49](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L49)

Options for creating an embedding instance with the embedding() function.

## Example

```typescript
const options: EmbeddingOptions<OpenAIEmbedParams> = {
  model: openai('text-embedding-3-large'),
  config: { apiKey: process.env.OPENAI_API_KEY },
  params: { dimensions: 1536 }
};
```

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### config?

> `optional` **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/embedding.ts:54](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L54)

Provider infrastructure configuration

***

### model

> **model**: [`EmbeddingModelInput`](embeddingmodelinput.md)

Defined in: [src/types/embedding.ts:51](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L51)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/embedding.ts:57](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L57)

Provider-specific parameters (passed through unchanged)
