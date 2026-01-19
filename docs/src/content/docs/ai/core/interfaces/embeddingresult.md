---
title: "Interface: EmbeddingResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResult

# Interface: EmbeddingResult

Defined in: [src/types/embedding.ts:128](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L128)

Result from embed() call.

## Properties

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:130](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L130)

Embeddings in same order as inputs

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/embedding.ts:136](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L136)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/embedding.ts:133](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L133)

Usage statistics
