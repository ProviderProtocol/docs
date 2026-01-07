---
title: "Interface: ToolExecution"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ToolExecution

# Interface: ToolExecution

Defined in: [src/types/tool.ts:212](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L212)

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

Defined in: [src/types/tool.ts:232](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L232)

Whether approval was required and granted (undefined if no approval handler)

***

### arguments

> **arguments**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/tool.ts:220](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L220)

Arguments that were passed to the tool

***

### duration

> **duration**: `number`

Defined in: [src/types/tool.ts:229](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L229)

Execution duration in milliseconds

***

### isError

> **isError**: `boolean`

Defined in: [src/types/tool.ts:226](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L226)

Whether the tool execution resulted in an error

***

### result

> **result**: `unknown`

Defined in: [src/types/tool.ts:223](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L223)

Result returned by the tool

***

### toolCallId

> **toolCallId**: `string`

Defined in: [src/types/tool.ts:217](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L217)

Unique identifier for this tool call

***

### toolName

> **toolName**: `string`

Defined in: [src/types/tool.ts:214](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L214)

Name of the tool that was called
