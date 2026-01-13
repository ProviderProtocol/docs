---
title: "Interface: OpenAIMcpServerConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIMcpServerConfig

# Interface: OpenAIMcpServerConfig

Defined in: [src/providers/openai/types.ts:1249](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1249)

MCP (Model Context Protocol) server configuration

## Properties

### allowed\_resources?

> `optional` **allowed\_resources**: `string`[]

Defined in: [src/providers/openai/types.ts:1262](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1262)

Allowed resources

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/openai/types.ts:1260](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1260)

Headers to send with requests

***

### name?

> `optional` **name**: `string`

Defined in: [src/providers/openai/types.ts:1253](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1253)

Server name for identification

***

### require\_approval?

> `optional` **require\_approval**: \{ `tools`: `string`[]; `type`: `"except"`; \} \| `"always"` \| `"never"`

Defined in: [src/providers/openai/types.ts:1264](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1264)

Require approval for tool calls

***

### tool\_configuration?

> `optional` **tool\_configuration**: `object`

Defined in: [src/providers/openai/types.ts:1255](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1255)

Tool configuration for the server

#### allowed\_tools?

> `optional` **allowed\_tools**: `string`[] \| \{ `type`: `"all"`; \}

Allowed tools from this server

***

### url

> **url**: `string`

Defined in: [src/providers/openai/types.ts:1251](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1251)

Server URL
