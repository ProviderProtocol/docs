---
title: "Interface: TextBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / TextBlock

# Interface: TextBlock

Defined in: [src/types/content.ts:123](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L123)

Text content block.

The most common content block type, containing plain text content.

## Example

```typescript
const textBlock: TextBlock = {
  type: 'text',
  text: 'Hello, world!'
};
```

## Properties

### text

> **text**: `string`

Defined in: [src/types/content.ts:128](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L128)

The text content

***

### type

> **type**: `"text"`

Defined in: [src/types/content.ts:125](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L125)

Discriminator for text blocks
