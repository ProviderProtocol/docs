---
title: "Interface: ImageBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageBlock

# Interface: ImageBlock

Defined in: [src/types/content.ts:169](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L169)

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

Defined in: [src/types/content.ts:183](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L183)

Image height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:177](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L177)

MIME type of the image (e.g., 'image/png', 'image/jpeg')

***

### source

> **source**: [`ImageSource`](../type-aliases/imagesource.md)

Defined in: [src/types/content.ts:174](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L174)

The image data source

***

### type

> **type**: `"image"`

Defined in: [src/types/content.ts:171](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L171)

Discriminator for image blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:180](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L180)

Image width in pixels
