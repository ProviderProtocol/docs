---
title: "Interface: EmbeddingOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingOptions

# Interface: EmbeddingOptions\<TParams\>

Defined in: [src/types/embedding.ts:49](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L49)

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

Defined in: [src/types/embedding.ts:54](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L54)

Provider infrastructure configuration

***

### model

> **model**: [`EmbeddingModelInput`](embeddingmodelinput.md)

Defined in: [src/types/embedding.ts:51](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L51)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/embedding.ts:57](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L57)

Provider-specific parameters (passed through unchanged)
