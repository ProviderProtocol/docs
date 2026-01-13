---
title: "Interface: EventDelta"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EventDelta

# Interface: EventDelta

Defined in: [src/types/stream.ts:69](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L69)

Event delta data payload.

Contains the type-specific data for a streaming event.
Different fields are populated depending on the event type.

## Properties

### argumentsJson?

> `optional` **argumentsJson**: `string`

Defined in: [src/types/stream.ts:83](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L83)

Incremental JSON arguments string (for tool_call_delta)

***

### data?

> `optional` **data**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/stream.ts:74](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L74)

Incremental binary data (for image_delta, audio_delta, video_delta)

***

### isError?

> `optional` **isError**: `boolean`

Defined in: [src/types/stream.ts:89](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L89)

Whether tool execution resulted in an error (for tool_execution_end)

***

### result?

> `optional` **result**: `unknown`

Defined in: [src/types/stream.ts:86](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L86)

Tool execution result (for tool_execution_end)

***

### text?

> `optional` **text**: `string`

Defined in: [src/types/stream.ts:71](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L71)

Incremental text content (for text_delta, reasoning_delta)

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: [src/types/stream.ts:92](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L92)

Timestamp in milliseconds (for tool_execution_start/end)

***

### toolCallId?

> `optional` **toolCallId**: `string`

Defined in: [src/types/stream.ts:77](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L77)

Tool call identifier (for tool_call_delta, tool_execution_start/end)

***

### toolName?

> `optional` **toolName**: `string`

Defined in: [src/types/stream.ts:80](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L80)

Tool name (for tool_call_delta, tool_execution_start/end)
