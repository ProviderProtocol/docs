---
title: "Function: toolCallDelta()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolCallDelta

# Function: toolCallDelta()

> **toolCallDelta**(`toolCallId`, `toolName`, `argumentsJson`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:200](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L200)

Creates a tool call delta stream event.

## Parameters

### toolCallId

`string`

Unique identifier for the tool call

### toolName

`string`

Name of the tool being called

### argumentsJson

`string`

Incremental JSON arguments string

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/streamevent.md)

A tool_call_delta StreamEvent
