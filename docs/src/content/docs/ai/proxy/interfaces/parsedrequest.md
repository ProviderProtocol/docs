---
title: "Interface: ParsedRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ParsedRequest

# Interface: ParsedRequest

Defined in: [src/providers/proxy/server/webapi.ts:29](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/webapi.ts#L29)

Parsed request body from a proxy HTTP request.
This is just the deserialized PP data from the request body.

## Properties

### messages

> **messages**: [`Message`](../../core/classes/message.md)[]

Defined in: [src/providers/proxy/server/webapi.ts:30](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/webapi.ts#L30)

***

### params?

> `optional` **params**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/proxy/server/webapi.ts:32](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/webapi.ts#L32)

***

### structure?

> `optional` **structure**: [`JSONSchema`](../../core/interfaces/jsonschema.md)

Defined in: [src/providers/proxy/server/webapi.ts:39](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/webapi.ts#L39)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/providers/proxy/server/webapi.ts:31](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/webapi.ts#L31)

***

### tools?

> `optional` **tools**: `object`[]

Defined in: [src/providers/proxy/server/webapi.ts:33](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/webapi.ts#L33)

#### description

> **description**: `string`

#### metadata?

> `optional` **metadata**: [`ToolMetadata`](../../core/interfaces/toolmetadata.md)

#### name

> **name**: `string`

#### parameters

> **parameters**: [`JSONSchema`](../../core/interfaces/jsonschema.md)
