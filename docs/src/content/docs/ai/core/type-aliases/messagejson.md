---
title: "Type Alias: MessageJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageJSON

# Type Alias: MessageJSON

> **MessageJSON** = `Pick`\<[`Message`](../classes/message.md), `"id"` \| `"type"` \| `"metadata"`\> & `object`

Defined in: [src/types/messages.ts:28](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/messages.ts#L28)

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
