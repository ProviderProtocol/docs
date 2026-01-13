---
title: "Interface: BinaryBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BinaryBlock

# Interface: BinaryBlock

Defined in: [src/types/content.ts:267](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L267)

Binary content block for arbitrary data.

A generic block type for data that doesn't fit other categories.

## Example

```typescript
const binaryBlock: BinaryBlock = {
  type: 'binary',
  data: pdfBytes,
  mimeType: 'application/pdf',
  metadata: { filename: 'document.pdf', pages: 10 }
};
```

## Properties

### data

> **data**: `Uint8Array`

Defined in: [src/types/content.ts:272](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L272)

Raw binary data

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/content.ts:278](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L278)

Additional metadata about the binary content

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:275](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L275)

MIME type of the data

***

### type

> **type**: `"binary"`

Defined in: [src/types/content.ts:269](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L269)

Discriminator for binary blocks
