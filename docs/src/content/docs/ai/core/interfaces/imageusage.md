---
title: "Interface: ImageUsage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageUsage

# Interface: ImageUsage

Defined in: [src/types/image.ts:95](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L95)

Usage statistics for image generation.
Fields are optional because providers report usage differently.

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: [src/types/image.ts:106](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L106)

Provider-reported cost (credits, dollars, etc.)

***

### imagesGenerated?

> `optional` **imagesGenerated**: `number`

Defined in: [src/types/image.ts:97](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L97)

Number of images generated

***

### inputTokens?

> `optional` **inputTokens**: `number`

Defined in: [src/types/image.ts:100](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L100)

Input tokens consumed (token-based pricing)

***

### outputTokens?

> `optional` **outputTokens**: `number`

Defined in: [src/types/image.ts:103](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L103)

Output tokens consumed (token-based pricing)
