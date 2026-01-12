---
title: "Interface: EmbedOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbedOptions

# Interface: EmbedOptions

Defined in: [src/types/embedding.ts:61](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L61)

Options for embed() calls.

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [src/types/embedding.ts:69](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L69)

Inputs per batch when chunked (default: provider max)

***

### chunked?

> `optional` **chunked**: `boolean`

Defined in: [src/types/embedding.ts:66](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L66)

Enable chunked processing with progress for large input sets.
When true, returns EmbeddingStream instead of Promise.

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [src/types/embedding.ts:72](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L72)

Concurrent batch limit when chunked (default: 1)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/embedding.ts:75](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L75)

Abort signal for cancellation
