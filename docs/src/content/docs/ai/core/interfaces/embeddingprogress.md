---
title: "Interface: EmbeddingProgress"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingProgress

# Interface: EmbeddingProgress

Defined in: [src/types/embedding.ts:115](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L115)

Progress update when using chunked mode.

## Properties

### completed

> **completed**: `number`

Defined in: [src/types/embedding.ts:120](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L120)

Total embeddings completed so far

***

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:117](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L117)

Embeddings from the latest batch

***

### percent

> **percent**: `number`

Defined in: [src/types/embedding.ts:126](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L126)

Percentage complete (0-100)

***

### total

> **total**: `number`

Defined in: [src/types/embedding.ts:123](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L123)

Total number of inputs
