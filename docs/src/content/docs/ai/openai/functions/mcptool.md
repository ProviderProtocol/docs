---
title: "Function: mcpTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / mcpTool

# Function: mcpTool()

> **mcpTool**(`options`): [`OpenAIMcpTool`](../interfaces/openaimcptool.md)

Defined in: [src/providers/openai/types.ts:1440](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1440)

Creates an MCP (Model Context Protocol) tool configuration for the Responses API.

The MCP tool enables connections to external MCP servers, allowing the model
to use tools and resources provided by those servers.

## Parameters

### options

MCP server configuration

#### allowed_tools?

`string`[] \| \{ `type`: `"all"`; \}

#### headers?

`Record`\<`string`, `string`\>

#### name?

`string`

#### require_approval?

`"always"` \| `"never"` \| \{ `tools`: `string`[]; `type`: `"except"`; \}

#### url

`string`

## Returns

[`OpenAIMcpTool`](../interfaces/openaimcptool.md)

An MCP tool configuration object

## Example

```typescript
const mcp = mcpTool({
  url: 'https://mcp-server.example.com',
  name: 'my-mcp-server',
  allowed_tools: ['tool1', 'tool2']
});
```
