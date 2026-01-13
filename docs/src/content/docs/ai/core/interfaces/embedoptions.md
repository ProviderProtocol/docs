---
title: "Interface: EmbedOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbedOptions

# Interface: EmbedOptions

Defined in: [src/types/embedding.ts:63](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L63)

Options for embed() calls.

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [src/types/embedding.ts:71](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L71)

Inputs per batch when chunked (default: provider max)

***

### chunked?

> `optional` **chunked**: `boolean`

Defined in: [src/types/embedding.ts:68](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L68)

Enable chunked processing with progress for large input sets.
When true, returns EmbeddingStream instead of Promise.

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [src/types/embedding.ts:74](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L74)

Concurrent batch limit when chunked (default: 1)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/embedding.ts:77](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L77)

Abort signal for cancellation
