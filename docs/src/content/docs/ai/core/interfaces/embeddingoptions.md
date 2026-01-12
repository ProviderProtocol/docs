---
title: "Interface: EmbeddingOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingOptions

# Interface: EmbeddingOptions\<TParams\>

Defined in: [src/types/embedding.ts:47](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L47)

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

Defined in: [src/types/embedding.ts:52](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L52)

Provider infrastructure configuration

***

### model

> **model**: [`EmbeddingModelInput`](embeddingmodelinput.md)

Defined in: [src/types/embedding.ts:49](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L49)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/embedding.ts:55](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L55)

Provider-specific parameters (passed through unchanged)
