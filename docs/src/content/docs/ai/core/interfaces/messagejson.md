---
title: "Interface: MessageJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageJSON

# Interface: MessageJSON

Defined in: [src/types/thread.ts:27](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L27)

Serialized message format for JSON storage.

Used when persisting messages to storage or transmitting over the network.

## Properties

### content

> **content**: [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/thread.ts:35](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L35)

Content blocks in the message

***

### id

> **id**: `string`

Defined in: [src/types/thread.ts:29](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L29)

Unique message identifier

***

### metadata?

> `optional` **metadata**: [`MessageMetadata`](messagemetadata.md)

Defined in: [src/types/thread.ts:44](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L44)

Provider-specific metadata

***

### results?

> `optional` **results**: [`ToolResult`](toolresult.md)[]

Defined in: [src/types/thread.ts:41](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L41)

Tool results (for tool result messages)

***

### timestamp

> **timestamp**: `string`

Defined in: [src/types/thread.ts:47](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L47)

ISO timestamp string

***

### toolCalls?

> `optional` **toolCalls**: [`ToolCall`](toolcall.md)[]

Defined in: [src/types/thread.ts:38](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L38)

Tool calls (for assistant messages)

***

### type

> **type**: [`MessageType`](../type-aliases/messagetype.md)

Defined in: [src/types/thread.ts:32](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/thread.ts#L32)

Message type discriminator
