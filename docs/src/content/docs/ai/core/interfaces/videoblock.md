---
title: "Interface: VideoBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / VideoBlock

# Interface: VideoBlock

Defined in: [src/types/content.ts:232](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L232)

Video content block.

Contains video data with its metadata.

## Example

```typescript
const videoBlock: VideoBlock = {
  type: 'video',
  data: videoBytes,
  mimeType: 'video/mp4',
  duration: 30,
  width: 1920,
  height: 1080
};
```

## Properties

### data

> **data**: `Uint8Array`

Defined in: [src/types/content.ts:237](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L237)

Raw video data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:243](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L243)

Duration in seconds

***

### height?

> `optional` **height**: `number`

Defined in: [src/types/content.ts:249](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L249)

Video height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:240](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L240)

MIME type of the video (e.g., 'video/mp4', 'video/webm')

***

### type

> **type**: `"video"`

Defined in: [src/types/content.ts:234](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L234)

Discriminator for video blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:246](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L246)

Video width in pixels
