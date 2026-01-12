---
title: "Interface: OpenAIMcpServerConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIMcpServerConfig

# Interface: OpenAIMcpServerConfig

Defined in: [src/providers/openai/types.ts:1203](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1203)

MCP (Model Context Protocol) server configuration

## Properties

### allowed\_resources?

> `optional` **allowed\_resources**: `string`[]

Defined in: [src/providers/openai/types.ts:1216](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1216)

Allowed resources

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/openai/types.ts:1214](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1214)

Headers to send with requests

***

### name?

> `optional` **name**: `string`

Defined in: [src/providers/openai/types.ts:1207](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1207)

Server name for identification

***

### require\_approval?

> `optional` **require\_approval**: \{ `tools`: `string`[]; `type`: `"except"`; \} \| `"always"` \| `"never"`

Defined in: [src/providers/openai/types.ts:1218](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1218)

Require approval for tool calls

***

### tool\_configuration?

> `optional` **tool\_configuration**: `object`

Defined in: [src/providers/openai/types.ts:1209](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1209)

Tool configuration for the server

#### allowed\_tools?

> `optional` **allowed\_tools**: `string`[] \| \{ `type`: `"all"`; \}

Allowed tools from this server

***

### url

> **url**: `string`

Defined in: [src/providers/openai/types.ts:1205](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1205)

Server URL
