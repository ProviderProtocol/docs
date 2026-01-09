---
title: "Interface: EmbeddingProgress"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingProgress

# Interface: EmbeddingProgress

Defined in: [src/types/embedding.ts:114](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L114)

Progress update when using chunked mode.

## Properties

### completed

> **completed**: `number`

Defined in: [src/types/embedding.ts:119](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L119)

Total embeddings completed so far

***

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:116](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L116)

Embeddings from the latest batch

***

### percent

> **percent**: `number`

Defined in: [src/types/embedding.ts:125](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L125)

Percentage complete (0-100)

***

### total

> **total**: `number`

Defined in: [src/types/embedding.ts:122](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L122)

Total number of inputs
