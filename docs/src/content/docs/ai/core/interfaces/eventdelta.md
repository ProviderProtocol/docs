---
title: "Interface: EventDelta"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EventDelta

# Interface: EventDelta

Defined in: [src/types/stream.ts:50](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L50)

Event delta data payload.

Contains the type-specific data for a streaming event.
Different fields are populated depending on the event type.

## Properties

### argumentsJson?

> `optional` **argumentsJson**: `string`

Defined in: [src/types/stream.ts:64](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L64)

Incremental JSON arguments string (for tool_call_delta)

***

### data?

> `optional` **data**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/stream.ts:55](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L55)

Incremental binary data (for image_delta, audio_delta, video_delta)

***

### isError?

> `optional` **isError**: `boolean`

Defined in: [src/types/stream.ts:70](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L70)

Whether tool execution resulted in an error (for tool_execution_end)

***

### result?

> `optional` **result**: `unknown`

Defined in: [src/types/stream.ts:67](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L67)

Tool execution result (for tool_execution_end)

***

### text?

> `optional` **text**: `string`

Defined in: [src/types/stream.ts:52](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L52)

Incremental text content (for text_delta, reasoning_delta)

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: [src/types/stream.ts:73](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L73)

Timestamp in milliseconds (for tool_execution_start/end)

***

### toolCallId?

> `optional` **toolCallId**: `string`

Defined in: [src/types/stream.ts:58](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L58)

Tool call identifier (for tool_call_delta, tool_execution_start/end)

***

### toolName?

> `optional` **toolName**: `string`

Defined in: [src/types/stream.ts:61](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L61)

Tool name (for tool_call_delta, tool_execution_start/end)
