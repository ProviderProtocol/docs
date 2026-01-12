---
title: "Interface: XAIMcpTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIMcpTool

# Interface: XAIMcpTool

Defined in: [src/providers/xai/types.ts:410](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L410)

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

Defined in: [src/providers/xai/types.ts:420](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L420)

Specific tools to enable (empty = all available)

***

### authorization?

> `optional` **authorization**: `string`

Defined in: [src/providers/xai/types.ts:422](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L422)

Authentication token

***

### extra\_headers?

> `optional` **extra\_headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/xai/types.ts:424](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L424)

Custom request headers

***

### server\_description?

> `optional` **server\_description**: `string`

Defined in: [src/providers/xai/types.ts:418](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L418)

Description of server capabilities

***

### server\_label?

> `optional` **server\_label**: `string`

Defined in: [src/providers/xai/types.ts:416](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L416)

Server label for tool call prefixing

***

### server\_url

> **server\_url**: `string`

Defined in: [src/providers/xai/types.ts:414](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L414)

MCP server URL (HTTP Streaming/SSE only)

***

### type

> **type**: `"mcp"`

Defined in: [src/providers/xai/types.ts:412](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L412)

Tool type identifier
