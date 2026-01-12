---
title: "Type Alias: MessageJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageJSON

# Type Alias: MessageJSON

> **MessageJSON** = `Pick`\<[`Message`](../classes/message.md), `"id"` \| `"type"` \| `"metadata"`\> & `object`

Defined in: [src/types/messages.ts:27](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L27)

Message serialized to JSON format.
Picks common fields from Message, converts timestamp to string.

## Type Declaration

### content

> **content**: [`ContentBlock`](contentblock.md)[]

### results?

> `optional` **results**: [`ToolResult`](../interfaces/toolresult.md)[]

### timestamp

> **timestamp**: `string`

### toolCalls?

> `optional` **toolCalls**: [`ToolCall`](../interfaces/toolcall.md)[]
