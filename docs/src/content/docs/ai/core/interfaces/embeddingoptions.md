---
title: "Interface: EmbeddingOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingOptions

# Interface: EmbeddingOptions\<TParams\>

Defined in: [src/types/embedding.ts:63](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L63)

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

Defined in: [src/types/embedding.ts:68](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L68)

Provider infrastructure configuration

***

### middleware?

> `optional` **middleware**: [`Middleware`](middleware.md)[]

Defined in: [src/types/embedding.ts:79](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L79)

Middleware for intercepting and transforming requests and responses.

Middleware are executed in array order for request/start hooks,
and reverse order for response/end hooks.

***

### model

> **model**: [`EmbeddingModelInput`](embeddingmodelinput.md)

Defined in: [src/types/embedding.ts:65](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L65)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/embedding.ts:71](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L71)

Provider-specific parameters (passed through unchanged)
