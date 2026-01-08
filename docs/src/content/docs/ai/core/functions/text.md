---
title: "Function: text()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / text

# Function: text()

> **text**(`content`): [`TextBlock`](../interfaces/textblock.md)

Defined in: [src/types/content.ts:238](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L238)

Creates a text content block from a string.

## Parameters

### content

`string`

The text content

## Returns

[`TextBlock`](../interfaces/textblock.md)

A TextBlock containing the provided text

## Example

```typescript
const block = text('Hello, world!');
// { type: 'text', text: 'Hello, world!' }
```
