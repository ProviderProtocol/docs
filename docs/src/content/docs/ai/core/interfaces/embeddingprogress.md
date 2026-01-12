---
title: "Interface: EmbeddingProgress"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingProgress

# Interface: EmbeddingProgress

Defined in: [src/types/embedding.ts:117](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L117)

Progress update when using chunked mode.

## Properties

### completed

> **completed**: `number`

Defined in: [src/types/embedding.ts:122](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L122)

Total embeddings completed so far

***

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:119](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L119)

Embeddings from the latest batch

***

### percent

> **percent**: `number`

Defined in: [src/types/embedding.ts:128](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L128)

Percentage complete (0-100)

***

### total

> **total**: `number`

Defined in: [src/types/embedding.ts:125](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/embedding.ts#L125)

Total number of inputs
