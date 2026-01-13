---
title: "Interface: GoogleEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleEmbedParams

# Interface: GoogleEmbedParams

Defined in: [src/providers/google/embed.ts:44](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/embed.ts#L44)

Google embedding parameters.
Passed through unchanged to the API.

## Properties

### autoTruncate?

> `optional` **autoTruncate**: `boolean`

Defined in: [src/providers/google/embed.ts:52](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/embed.ts#L52)

Whether to automatically truncate inputs exceeding token limits (default: true)

***

### outputDimensionality?

> `optional` **outputDimensionality**: `number`

Defined in: [src/providers/google/embed.ts:50](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/embed.ts#L50)

Output dimensionality

***

### taskType?

> `optional` **taskType**: [`GoogleTaskType`](../type-aliases/googletasktype.md)

Defined in: [src/providers/google/embed.ts:46](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/embed.ts#L46)

Task type for optimization

***

### title?

> `optional` **title**: `string`

Defined in: [src/providers/google/embed.ts:48](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/embed.ts#L48)

Document title (for RETRIEVAL_DOCUMENT taskType)
