---
title: "Function: createTurn()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / createTurn

# Function: createTurn()

> **createTurn**\<`TData`\>(`messages`, `toolExecutions`, `usage`, `cycles`, `data?`): [`Turn`](../interfaces/turn.md)\<`TData`\>

Defined in: [src/types/turn.ts:144](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/turn.ts#L144)

Creates a Turn from accumulated inference data.

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Parameters

### messages

[`Message`](../classes/message.md)[]

All messages produced during the inference

### toolExecutions

[`ToolExecution`](../interfaces/toolexecution.md)[]

Record of all tool executions

### usage

[`TokenUsage`](../interfaces/tokenusage.md)

Aggregate token usage

### cycles

`number`

Number of inference cycles

### data?

`TData`

Optional structured output data

## Returns

[`Turn`](../interfaces/turn.md)\<`TData`\>

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
