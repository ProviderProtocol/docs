---
title: "Interface: VideoBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / VideoBlock

# Interface: VideoBlock

Defined in: [src/types/content.ts:142](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L142)

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

Defined in: [src/types/content.ts:147](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L147)

Raw video data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:153](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L153)

Duration in seconds

***

### height?

> `optional` **height**: `number`

Defined in: [src/types/content.ts:159](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L159)

Video height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:150](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L150)

MIME type of the video (e.g., 'video/mp4', 'video/webm')

***

### type

> **type**: `"video"`

Defined in: [src/types/content.ts:144](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L144)

Discriminator for video blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:156](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L156)

Video width in pixels
