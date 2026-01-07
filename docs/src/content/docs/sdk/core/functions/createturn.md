---
title: "Function: createTurn()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / createTurn

# Function: createTurn()

> **createTurn**\<`TData`\>(`messages`, `toolExecutions`, `usage`, `cycles`, `data?`): [`Turn`](../interfaces/Turn.md)\<`TData`\>

Defined in: [src/types/turn.ts:119](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L119)

Creates a Turn from accumulated inference data.

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Parameters

### messages

[`Message`](../classes/Message.md)[]

All messages produced during the inference

### toolExecutions

[`ToolExecution`](../interfaces/ToolExecution.md)[]

Record of all tool executions

### usage

[`TokenUsage`](../interfaces/TokenUsage.md)

Aggregate token usage

### cycles

`number`

Number of inference cycles

### data?

`TData`

Optional structured output data

## Returns

[`Turn`](../interfaces/Turn.md)\<`TData`\>

A complete Turn object

## Throws

Error if no assistant message is found in the messages

## Example

```typescript
const turn = createTurn(
  [userMsg, assistantMsg],
  [],
  { inputTokens: 100, outputTokens: 50, totalTokens: 150 },
  1
);
```
