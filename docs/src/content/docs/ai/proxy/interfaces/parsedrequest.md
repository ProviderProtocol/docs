---
title: "Interface: ParsedRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ParsedRequest

# Interface: ParsedRequest

Defined in: [src/providers/proxy/server/webapi.ts:41](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L41)

Parsed request body from a proxy HTTP request.
This is just the deserialized PP data from the request body.

## Properties

### messages

> **messages**: [`Message`](../../core/classes/message.md)[]

Defined in: [src/providers/proxy/server/webapi.ts:42](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L42)

***

### model?

> `optional` **model**: `string`

Defined in: [src/providers/proxy/server/webapi.ts:45](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L45)

***

### params?

> `optional` **params**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/proxy/server/webapi.ts:44](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L44)

***

### structure?

> `optional` **structure**: [`JSONSchema`](../../core/interfaces/jsonschema.md)

Defined in: [src/providers/proxy/server/webapi.ts:52](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L52)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/providers/proxy/server/webapi.ts:43](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L43)

***

### tools?

> `optional` **tools**: `object`[]

Defined in: [src/providers/proxy/server/webapi.ts:46](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L46)

#### description

> **description**: `string`

#### metadata?

> `optional` **metadata**: [`ToolMetadata`](../../core/interfaces/toolmetadata.md)

#### name

> **name**: `string`

#### parameters

> **parameters**: [`JSONSchema`](../../core/interfaces/jsonschema.md)
