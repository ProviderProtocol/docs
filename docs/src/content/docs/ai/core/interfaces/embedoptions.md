---
title: "Interface: EmbedOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbedOptions

# Interface: EmbedOptions

Defined in: [src/types/embedding.ts:63](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L63)

Options for embed() calls.

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [src/types/embedding.ts:71](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L71)

Inputs per batch when chunked (default: provider max)

***

### chunked?

> `optional` **chunked**: `boolean`

Defined in: [src/types/embedding.ts:68](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L68)

Enable chunked processing with progress for large input sets.
When true, returns EmbeddingStream instead of Promise.

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [src/types/embedding.ts:74](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L74)

Concurrent batch limit when chunked (default: 1)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/embedding.ts:77](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L77)

Abort signal for cancellation
