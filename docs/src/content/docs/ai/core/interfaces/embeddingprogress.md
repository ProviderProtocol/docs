---
title: "Interface: EmbeddingProgress"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingProgress

# Interface: EmbeddingProgress

Defined in: [src/types/embedding.ts:117](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L117)

Progress update when using chunked mode.

## Properties

### completed

> **completed**: `number`

Defined in: [src/types/embedding.ts:122](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L122)

Total embeddings completed so far

***

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:119](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L119)

Embeddings from the latest batch

***

### percent

> **percent**: `number`

Defined in: [src/types/embedding.ts:128](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L128)

Percentage complete (0-100)

***

### total

> **total**: `number`

Defined in: [src/types/embedding.ts:125](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/embedding.ts#L125)

Total number of inputs
