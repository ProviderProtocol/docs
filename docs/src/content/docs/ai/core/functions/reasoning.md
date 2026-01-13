---
title: "Function: reasoning()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / reasoning

# Function: reasoning()

> **reasoning**(`content`): [`ReasoningBlock`](../interfaces/reasoningblock.md)

Defined in: [src/types/content.ts:346](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L346)

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
