---
title: "Interface: BinaryBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BinaryBlock

# Interface: BinaryBlock

Defined in: [src/types/content.ts:243](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L243)

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

Defined in: [src/types/content.ts:248](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L248)

Raw binary data

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/content.ts:254](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L254)

Additional metadata about the binary content

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:251](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L251)

MIME type of the data

***

### type

> **type**: `"binary"`

Defined in: [src/types/content.ts:245](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L245)

Discriminator for binary blocks
