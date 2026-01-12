---
title: "Interface: TextBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / TextBlock

# Interface: TextBlock

Defined in: [src/types/content.ts:55](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/content.ts#L55)

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

Defined in: [src/types/content.ts:60](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/content.ts#L60)

The text content

***

### type

> **type**: `"text"`

Defined in: [src/types/content.ts:57](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/content.ts#L57)

Discriminator for text blocks
