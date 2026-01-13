---
title: "Interface: EmbeddingResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResponse

# Interface: EmbeddingResponse

Defined in: [src/types/provider.ts:364](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L364)

**`Internal`**

Response from provider's embed method.

## Properties

### embeddings

> **embeddings**: [`EmbeddingVector`](embeddingvector.md)[]

Defined in: [src/types/provider.ts:366](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L366)

Embedding vectors

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:370](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L370)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/provider.ts:368](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L368)

Aggregate usage
