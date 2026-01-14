---
title: "Interface: BinaryBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BinaryBlock

# Interface: BinaryBlock

Defined in: [src/types/content.ts:370](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L370)

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

Defined in: [src/types/content.ts:375](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L375)

Raw binary data

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/content.ts:381](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L381)

Additional metadata about the binary content

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:378](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L378)

MIME type of the data

***

### type

> **type**: `"binary"`

Defined in: [src/types/content.ts:372](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L372)

Discriminator for binary blocks
