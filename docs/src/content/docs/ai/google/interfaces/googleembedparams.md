---
title: "Interface: GoogleEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleEmbedParams

# Interface: GoogleEmbedParams

Defined in: [src/providers/google/embed.ts:43](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/embed.ts#L43)

Google embedding parameters.
Passed through unchanged to the API.

## Properties

### autoTruncate?

> `optional` **autoTruncate**: `boolean`

Defined in: [src/providers/google/embed.ts:51](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/embed.ts#L51)

Whether to automatically truncate inputs exceeding token limits (default: true)

***

### outputDimensionality?

> `optional` **outputDimensionality**: `number`

Defined in: [src/providers/google/embed.ts:49](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/embed.ts#L49)

Output dimensionality

***

### taskType?

> `optional` **taskType**: [`GoogleTaskType`](../type-aliases/googletasktype.md)

Defined in: [src/providers/google/embed.ts:45](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/embed.ts#L45)

Task type for optimization

***

### title?

> `optional` **title**: `string`

Defined in: [src/providers/google/embed.ts:47](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/embed.ts#L47)

Document title (for RETRIEVAL_DOCUMENT taskType)
