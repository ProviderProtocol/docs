---
title: "Interface: ImageBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageBlock

# Interface: ImageBlock

Defined in: [src/types/content.ts:79](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L79)

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

Defined in: [src/types/content.ts:93](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L93)

Image height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:87](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L87)

MIME type of the image (e.g., 'image/png', 'image/jpeg')

***

### source

> **source**: [`ImageSource`](../type-aliases/imagesource.md)

Defined in: [src/types/content.ts:84](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L84)

The image data source

***

### type

> **type**: `"image"`

Defined in: [src/types/content.ts:81](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L81)

Discriminator for image blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:90](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L90)

Image width in pixels
