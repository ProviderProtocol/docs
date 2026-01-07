---
title: "Function: text()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / text

# Function: text()

> **text**(`content`): [`TextBlock`](../interfaces/TextBlock.md)

Defined in: [src/types/content.ts:238](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L238)

Creates a text content block from a string.

## Parameters

### content

`string`

The text content

## Returns

[`TextBlock`](../interfaces/TextBlock.md)

A TextBlock containing the provided text

## Example

```typescript
const block = text('Hello, world!');
// { type: 'text', text: 'Hello, world!' }
```
