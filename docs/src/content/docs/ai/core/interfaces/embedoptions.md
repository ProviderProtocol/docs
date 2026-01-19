---
title: "Interface: EmbedOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbedOptions

# Interface: EmbedOptions

Defined in: [src/types/embedding.ts:85](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L85)

Options for embed() calls.

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [src/types/embedding.ts:93](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L93)

Inputs per batch when chunked (default: provider max)

***

### chunked?

> `optional` **chunked**: `boolean`

Defined in: [src/types/embedding.ts:90](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L90)

Enable chunked processing with progress for large input sets.
When true, returns EmbeddingStream instead of Promise.

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [src/types/embedding.ts:96](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L96)

Concurrent batch limit when chunked (default: 1)

***

### inputType?

> `optional` **inputType**: [`EmbeddingInputType`](../type-aliases/embeddinginputtype.md)

Defined in: [src/types/embedding.ts:102](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L102)

Hint for embedding optimization (provider-specific)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/embedding.ts:99](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L99)

Abort signal for cancellation
