---
title: "Interface: ImageBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageBlock

# Interface: ImageBlock

Defined in: [src/types/content.ts:234](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L234)

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

Defined in: [src/types/content.ts:248](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L248)

Image height in pixels

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:242](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L242)

MIME type of the image (e.g., 'image/png', 'image/jpeg')

***

### source

> **source**: [`ImageSource`](../type-aliases/imagesource.md)

Defined in: [src/types/content.ts:239](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L239)

The image data source

***

### type

> **type**: `"image"`

Defined in: [src/types/content.ts:236](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L236)

Discriminator for image blocks

***

### width?

> `optional` **width**: `number`

Defined in: [src/types/content.ts:245](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L245)

Image width in pixels
