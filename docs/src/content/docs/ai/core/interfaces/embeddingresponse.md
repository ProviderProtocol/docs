---
title: "Interface: EmbeddingResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResponse

# Interface: EmbeddingResponse

Defined in: [src/types/provider.ts:352](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L352)

**`Internal`**

Response from provider's embed method.

## Properties

### embeddings

> **embeddings**: [`EmbeddingVector`](embeddingvector.md)[]

Defined in: [src/types/provider.ts:354](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L354)

Embedding vectors

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:358](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L358)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/provider.ts:356](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L356)

Aggregate usage
