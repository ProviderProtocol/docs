---
title: "Interface: EmbeddingResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResult

# Interface: EmbeddingResult

Defined in: [src/types/embedding.ts:103](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L103)

Result from embed() call.

## Properties

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:105](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L105)

Embeddings in same order as inputs

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/embedding.ts:111](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L111)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/embedding.ts:108](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L108)

Usage statistics
