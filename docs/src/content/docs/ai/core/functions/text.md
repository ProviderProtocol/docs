---
title: "Function: text()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / text

# Function: text()

> **text**(`content`): [`TextBlock`](../interfaces/textblock.md)

Defined in: [src/types/content.ts:238](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/content.ts#L238)

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
