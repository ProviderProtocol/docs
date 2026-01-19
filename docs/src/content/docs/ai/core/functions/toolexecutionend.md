---
title: "Function: toolExecutionEnd()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolExecutionEnd

# Function: toolExecutionEnd()

> **toolExecutionEnd**(`toolCallId`, `toolName`, `result`, `isError`, `timestamp`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:374](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L374)

Creates a tool execution end stream event.

## Parameters

### toolCallId

`string`

Unique identifier for the tool call

### toolName

`string`

Name of the tool that was executed

### result

`unknown`

The result from the tool execution

### isError

`boolean`

Whether the execution resulted in an error

### timestamp

`number`

End timestamp in milliseconds

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/streamevent.md)

A tool_execution_end StreamEvent
