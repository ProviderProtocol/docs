---
title: "Interface: Turn<TData>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / Turn

# Interface: Turn\<TData\>

Defined in: [src/types/turn.ts:71](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L71)

A Turn represents the complete result of one inference call.

Includes all messages produced during tool execution loops,
the final assistant response, token usage, and optional
structured output data.

## Example

```typescript
const turn = await instance.generate('Hello');
console.log(turn.response.text);
console.log(`Used ${turn.usage.totalTokens} tokens in ${turn.cycles} cycles`);

// With structured output
interface WeatherData { temperature: number; conditions: string; }
const turn = await instance.generate<WeatherData>('Get weather');
console.log(turn.data?.temperature);
```

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Properties

### cycles

> `readonly` **cycles**: `number`

Defined in: [src/types/turn.ts:88](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L88)

Total number of inference cycles (1 + number of tool rounds)

***

### data?

> `readonly` `optional` **data**: `TData`

Defined in: [src/types/turn.ts:94](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L94)

Structured output data (if a structure schema was provided).
Type is inferred from the schema when using TypeScript.

***

### messages

> `readonly` **messages**: [`Message`](../classes/Message.md)[]

Defined in: [src/types/turn.ts:76](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L76)

All messages produced during this inference, in chronological order.
Includes UserMessage, AssistantMessage (may include toolCalls), and ToolResultMessage.

***

### response

> `readonly` **response**: [`AssistantMessage`](../classes/AssistantMessage.md)

Defined in: [src/types/turn.ts:79](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L79)

The final assistant response (last AssistantMessage in the turn)

***

### toolExecutions

> `readonly` **toolExecutions**: [`ToolExecution`](ToolExecution.md)[]

Defined in: [src/types/turn.ts:82](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L82)

Tool executions that occurred during this turn

***

### usage

> `readonly` **usage**: [`TokenUsage`](TokenUsage.md)

Defined in: [src/types/turn.ts:85](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L85)

Aggregate token usage for the entire turn
