---
title: "Interface: EmbeddingResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResponse

# Interface: EmbeddingResponse

Defined in: [src/types/provider.ts:350](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L350)

**`Internal`**

Response from provider's embed method.

## Properties

### embeddings

> **embeddings**: [`EmbeddingVector`](embeddingvector.md)[]

Defined in: [src/types/provider.ts:352](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L352)

Embedding vectors

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:356](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L356)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/provider.ts:354](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L354)

Aggregate usage
