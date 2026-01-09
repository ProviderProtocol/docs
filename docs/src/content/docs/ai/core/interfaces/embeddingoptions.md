---
title: "Interface: EmbeddingOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingOptions

# Interface: EmbeddingOptions\<TParams\>

Defined in: [src/types/embedding.ts:46](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L46)

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

Defined in: [src/types/embedding.ts:51](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L51)

Provider infrastructure configuration

***

### model

> **model**: [`EmbeddingModelInput`](embeddingmodelinput.md)

Defined in: [src/types/embedding.ts:48](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L48)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/embedding.ts:54](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L54)

Provider-specific parameters (passed through unchanged)
