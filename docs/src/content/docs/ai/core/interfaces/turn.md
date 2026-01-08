---
title: "Interface: Turn"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Turn

# Interface: Turn\<TData\>

Defined in: [src/types/turn.ts:85](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/turn.ts#L85)

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

Defined in: [src/types/turn.ts:102](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/turn.ts#L102)

Total number of inference cycles (1 + number of tool rounds)

***

### data?

> `readonly` `optional` **data**: `TData`

Defined in: [src/types/turn.ts:108](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/turn.ts#L108)

Structured output data (if a structure schema was provided).
Type is inferred from the schema when using TypeScript.

***

### messages

> `readonly` **messages**: [`Message`](../classes/message.md)[]

Defined in: [src/types/turn.ts:90](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/turn.ts#L90)

All messages produced during this inference, in chronological order.
Includes UserMessage, AssistantMessage (may include toolCalls), and ToolResultMessage.

***

### response

> `readonly` **response**: [`AssistantMessage`](../classes/assistantmessage.md)

Defined in: [src/types/turn.ts:93](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/turn.ts#L93)

The final assistant response (last AssistantMessage in the turn)

***

### toolExecutions

> `readonly` **toolExecutions**: [`ToolExecution`](toolexecution.md)[]

Defined in: [src/types/turn.ts:96](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/turn.ts#L96)

Tool executions that occurred during this turn

***

### usage

> `readonly` **usage**: [`TokenUsage`](tokenusage.md)

Defined in: [src/types/turn.ts:99](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/turn.ts#L99)

Aggregate token usage for the entire turn
