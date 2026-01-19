---
title: "Interface: XAIMcpTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIMcpTool

# Interface: XAIMcpTool

Defined in: [src/providers/xai/types.ts:388](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L388)

Remote MCP server tool configuration.

Enables Grok to connect to external Model Context Protocol servers.
Pricing: Token-based only (no per-invocation charge).

## Example

```typescript
const tool: XAIMcpTool = {
  type: 'mcp',
  server_url: 'https://my-mcp-server.com/sse',
  server_label: 'my_tools',
};
```

## Properties

### allowed\_tool\_names?

> `optional` **allowed\_tool\_names**: `string`[]

Defined in: [src/providers/xai/types.ts:398](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L398)

Specific tools to enable (empty = all available)

***

### authorization?

> `optional` **authorization**: `string`

Defined in: [src/providers/xai/types.ts:400](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L400)

Authentication token

***

### extra\_headers?

> `optional` **extra\_headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/xai/types.ts:402](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L402)

Custom request headers

***

### server\_description?

> `optional` **server\_description**: `string`

Defined in: [src/providers/xai/types.ts:396](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L396)

Description of server capabilities

***

### server\_label?

> `optional` **server\_label**: `string`

Defined in: [src/providers/xai/types.ts:394](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L394)

Server label for tool call prefixing

***

### server\_url

> **server\_url**: `string`

Defined in: [src/providers/xai/types.ts:392](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L392)

MCP server URL (HTTP Streaming/SSE only)

***

### type

> **type**: `"mcp"`

Defined in: [src/providers/xai/types.ts:390](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L390)

Tool type identifier
