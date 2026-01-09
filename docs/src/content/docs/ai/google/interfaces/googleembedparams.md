---
title: "Interface: GoogleEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleEmbedParams

# Interface: GoogleEmbedParams

Defined in: [src/providers/google/embed.ts:43](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/embed.ts#L43)

Google embedding parameters.
Passed through unchanged to the API.

## Properties

### outputDimensionality?

> `optional` **outputDimensionality**: `number`

Defined in: [src/providers/google/embed.ts:49](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/embed.ts#L49)

Output dimensionality

***

### taskType?

> `optional` **taskType**: [`GoogleTaskType`](../type-aliases/googletasktype.md)

Defined in: [src/providers/google/embed.ts:45](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/embed.ts#L45)

Task type for optimization

***

### title?

> `optional` **title**: `string`

Defined in: [src/providers/google/embed.ts:47](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/embed.ts#L47)

Document title (for RETRIEVAL_DOCUMENT taskType)
