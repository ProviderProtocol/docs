---
title: "Interface: BinaryBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BinaryBlock

# Interface: BinaryBlock

Defined in: [src/types/content.ts:177](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L177)

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

Defined in: [src/types/content.ts:182](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L182)

Raw binary data

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/content.ts:188](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L188)

Additional metadata about the binary content

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:185](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L185)

MIME type of the data

***

### type

> **type**: `"binary"`

Defined in: [src/types/content.ts:179](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L179)

Discriminator for binary blocks
