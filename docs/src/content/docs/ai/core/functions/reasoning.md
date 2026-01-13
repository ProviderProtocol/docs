---
title: "Function: reasoning()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / reasoning

# Function: reasoning()

> **reasoning**(`content`): [`ReasoningBlock`](../interfaces/reasoningblock.md)

Defined in: [src/types/content.ts:346](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L346)

Creates a reasoning content block from a string.

## Parameters

### content

`string`

The reasoning/thinking content

## Returns

[`ReasoningBlock`](../interfaces/reasoningblock.md)

A ReasoningBlock containing the provided text

## Example

```typescript
const block = reasoning('Let me think step by step...');
// { type: 'reasoning', text: 'Let me think step by step...' }
```
