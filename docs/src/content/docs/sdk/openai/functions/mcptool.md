---
title: "Function: mcpTool()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / mcpTool

# Function: mcpTool()

> **mcpTool**(`options`): [`OpenAIMcpTool`](../interfaces/OpenAIMcpTool.md)

Defined in: [src/providers/openai/types.ts:1438](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1438)

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

[`OpenAIMcpTool`](../interfaces/OpenAIMcpTool.md)

An MCP tool configuration object

## Example

```typescript
const mcp = mcpTool({
  url: 'https://mcp-server.example.com',
  name: 'my-mcp-server',
  allowed_tools: ['tool1', 'tool2']
});
```
