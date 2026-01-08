---
title: "Interface: ToolExecution"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolExecution

# Interface: ToolExecution

Defined in: [src/types/tool.ts:284](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L284)

Record of a completed tool execution.

Contains all information about a tool call that was executed,
including timing and result data.

## Example

```typescript
const execution: ToolExecution = {
  toolName: 'get_weather',
  toolCallId: 'call_abc123',
  arguments: { location: 'San Francisco' },
  result: { temperature: 72 },
  isError: false,
  duration: 150,
  approved: true
};
```

## Properties

### approved?

> `optional` **approved**: `boolean`

Defined in: [src/types/tool.ts:304](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L304)

Whether approval was required and granted (undefined if no approval handler)

***

### arguments

> **arguments**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/tool.ts:292](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L292)

Arguments that were passed to the tool

***

### duration

> **duration**: `number`

Defined in: [src/types/tool.ts:301](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L301)

Execution duration in milliseconds

***

### isError

> **isError**: `boolean`

Defined in: [src/types/tool.ts:298](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L298)

Whether the tool execution resulted in an error

***

### result

> **result**: `unknown`

Defined in: [src/types/tool.ts:295](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L295)

Result returned by the tool

***

### toolCallId

> **toolCallId**: `string`

Defined in: [src/types/tool.ts:289](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L289)

Unique identifier for this tool call

***

### toolName

> **toolName**: `string`

Defined in: [src/types/tool.ts:286](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/tool.ts#L286)

Name of the tool that was called
