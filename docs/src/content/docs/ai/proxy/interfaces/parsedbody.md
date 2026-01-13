---
title: "Interface: ParsedBody"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ParsedBody

# Interface: ParsedBody

Defined in: [src/providers/proxy/server/types.ts:16](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L16)

Parsed request body from a proxy HTTP request.

## Properties

### messages

> **messages**: [`Message`](../../core/classes/message.md)[]

Defined in: [src/providers/proxy/server/types.ts:17](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L17)

***

### model?

> `optional` **model**: `string`

Defined in: [src/providers/proxy/server/types.ts:20](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L20)

***

### params?

> `optional` **params**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/proxy/server/types.ts:19](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L19)

***

### structure?

> `optional` **structure**: [`JSONSchema`](../../core/interfaces/jsonschema.md)

Defined in: [src/providers/proxy/server/types.ts:27](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L27)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/providers/proxy/server/types.ts:18](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L18)

***

### tools?

> `optional` **tools**: `object`[]

Defined in: [src/providers/proxy/server/types.ts:21](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L21)

#### description

> **description**: `string`

#### metadata?

> `optional` **metadata**: [`ToolMetadata`](../../core/interfaces/toolmetadata.md)

#### name

> **name**: `string`

#### parameters

> **parameters**: [`JSONSchema`](../../core/interfaces/jsonschema.md)
