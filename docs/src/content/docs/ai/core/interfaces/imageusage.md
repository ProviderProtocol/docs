---
title: "Interface: ImageUsage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageUsage

# Interface: ImageUsage

Defined in: [src/types/image.ts:97](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L97)

Usage statistics for image generation.
Fields are optional because providers report usage differently.

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: [src/types/image.ts:108](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L108)

Provider-reported cost (credits, dollars, etc.)

***

### imagesGenerated?

> `optional` **imagesGenerated**: `number`

Defined in: [src/types/image.ts:99](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L99)

Number of images generated

***

### inputTokens?

> `optional` **inputTokens**: `number`

Defined in: [src/types/image.ts:102](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L102)

Input tokens consumed (token-based pricing)

***

### outputTokens?

> `optional` **outputTokens**: `number`

Defined in: [src/types/image.ts:105](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L105)

Output tokens consumed (token-based pricing)
