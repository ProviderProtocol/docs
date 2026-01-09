---
title: "Interface: XAIMcpTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIMcpTool

# Interface: XAIMcpTool

Defined in: [src/providers/xai/types.ts:418](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L418)

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

Defined in: [src/providers/xai/types.ts:428](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L428)

Specific tools to enable (empty = all available)

***

### authorization?

> `optional` **authorization**: `string`

Defined in: [src/providers/xai/types.ts:430](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L430)

Authentication token

***

### extra\_headers?

> `optional` **extra\_headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/xai/types.ts:432](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L432)

Custom request headers

***

### server\_description?

> `optional` **server\_description**: `string`

Defined in: [src/providers/xai/types.ts:426](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L426)

Description of server capabilities

***

### server\_label?

> `optional` **server\_label**: `string`

Defined in: [src/providers/xai/types.ts:424](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L424)

Server label for tool call prefixing

***

### server\_url

> **server\_url**: `string`

Defined in: [src/providers/xai/types.ts:422](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L422)

MCP server URL (HTTP Streaming/SSE only)

***

### type

> **type**: `"mcp"`

Defined in: [src/providers/xai/types.ts:420](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L420)

Tool type identifier
