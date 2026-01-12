---
title: "Function: text()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / text

# Function: text()

> **text**(`content`): [`TextBlock`](../interfaces/textblock.md)

Defined in: [src/types/content.ts:304](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L304)

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
