---
title: "Interface: VideoBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / VideoBlock

# Interface: VideoBlock

Defined in: [src/types/content.ts:208](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L208)

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

Defined in: [src/types/content.ts:213](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L213)

Raw video data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:219](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L219)

Duration in seconds

***

### height?

> `optional` **height**: `number`

Defined in: [src/types/content.ts:225](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L225)

Video height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:216](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L216)

MIME type of the video (e.g., 'video/mp4', 'video/webm')

***

### type

> **type**: `"video"`

Defined in: [src/types/content.ts:210](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L210)

Discriminator for video blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:222](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L222)

Video width in pixels
