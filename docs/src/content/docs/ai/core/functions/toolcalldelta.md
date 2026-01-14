---
title: "Function: toolCallDelta()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolCallDelta

# Function: toolCallDelta()

> **toolCallDelta**(`toolCallId`, `toolName`, `argumentsJson`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:241](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/stream.ts#L241)

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
