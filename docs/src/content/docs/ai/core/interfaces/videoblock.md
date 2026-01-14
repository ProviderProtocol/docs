---
title: "Interface: VideoBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / VideoBlock

# Interface: VideoBlock

Defined in: [src/types/content.ts:335](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L335)

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

Defined in: [src/types/content.ts:340](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L340)

Raw video data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:346](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L346)

Duration in seconds

***

### height?

> `optional` **height**: `number`

Defined in: [src/types/content.ts:352](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L352)

Video height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:343](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L343)

MIME type of the video (e.g., 'video/mp4', 'video/webm')

***

### type

> **type**: `"video"`

Defined in: [src/types/content.ts:337](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L337)

Discriminator for video blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:349](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L349)

Video width in pixels
