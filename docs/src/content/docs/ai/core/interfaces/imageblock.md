---
title: "Interface: ImageBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageBlock

# Interface: ImageBlock

Defined in: [src/types/content.ts:145](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L145)

Image content block.

Contains an image with its source data and metadata.

## Example

```typescript
const imageBlock: ImageBlock = {
  type: 'image',
  source: { type: 'url', url: 'https://example.com/photo.jpg' },
  mimeType: 'image/jpeg',
  width: 1920,
  height: 1080
};
```

## Properties

### height?

> `optional` **height**: `number`

Defined in: [src/types/content.ts:159](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L159)

Image height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:153](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L153)

MIME type of the image (e.g., 'image/png', 'image/jpeg')

***

### source

> **source**: [`ImageSource`](../type-aliases/imagesource.md)

Defined in: [src/types/content.ts:150](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L150)

The image data source

***

### type

> **type**: `"image"`

Defined in: [src/types/content.ts:147](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L147)

Discriminator for image blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:156](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L156)

Image width in pixels
