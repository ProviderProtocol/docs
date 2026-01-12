---
title: "Variable: tools"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / tools

# Variable: tools

> `const` **tools**: `object`

Defined in: [src/providers/xai/types.ts:630](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L630)

Namespace object containing all xAI tool helper constructors.

Provides a convenient way to create built-in tool configurations.
Note: These tools are only available via the Responses API (`api: 'responses'`).

## Type Declaration

### codeExecution()

> **codeExecution**: () => [`XAICodeExecutionTool`](../interfaces/xaicodeexecutiontool.md) = `codeExecutionTool`

Creates a code execution tool configuration

Creates a code execution tool configuration.

Enables Grok to write and execute Python code in a sandbox.
Pricing: $5 per 1,000 successful tool invocations.

#### Returns

[`XAICodeExecutionTool`](../interfaces/xaicodeexecutiontool.md)

A code execution tool configuration object

#### Example

```typescript
const codeExec = codeExecutionTool();
```

### fileSearch()

> **fileSearch**: (`options`) => [`XAIFileSearchTool`](../interfaces/xaifilesearchtool.md) = `fileSearchTool`

Creates a file/collections search tool configuration

Creates a file/collections search tool configuration.

Enables Grok to search through uploaded document collections.
Pricing: $2.50 per 1,000 successful tool invocations.

#### Parameters

##### options

File search configuration

###### max_num_results?

`number`

###### retrieval_mode?

`"keyword"` \| `"semantic"` \| `"hybrid"`

###### vector_store_ids

`string`[]

#### Returns

[`XAIFileSearchTool`](../interfaces/xaifilesearchtool.md)

A file search tool configuration object

#### Example

```typescript
const fileSearch = fileSearchTool({
  vector_store_ids: ['vs_abc123'],
  max_num_results: 10,
  retrieval_mode: 'hybrid',
});
```

### mcp()

> **mcp**: (`options`) => [`XAIMcpTool`](../interfaces/xaimcptool.md) = `mcpTool`

Creates a remote MCP server tool configuration

Creates a remote MCP server tool configuration.

Enables Grok to connect to external Model Context Protocol servers.
Pricing: Token-based only (no per-invocation charge).

#### Parameters

##### options

MCP server configuration

###### allowed_tool_names?

`string`[]

###### authorization?

`string`

###### extra_headers?

`Record`\<`string`, `string`\>

###### server_description?

`string`

###### server_label?

`string`

###### server_url

`string`

#### Returns

[`XAIMcpTool`](../interfaces/xaimcptool.md)

An MCP tool configuration object

#### Example

```typescript
const mcp = mcpTool({
  server_url: 'https://my-mcp-server.com/sse',
  server_label: 'my_tools',
  allowed_tool_names: ['get_weather', 'search_db'],
});
```

### webSearch()

> **webSearch**: (`options?`) => [`XAIWebSearchTool`](../interfaces/xaiwebsearchtool.md) = `webSearchTool`

Creates a web search tool configuration

Creates a web search tool configuration.

Enables Grok to search the web for up-to-date information.
Pricing: $5 per 1,000 successful tool invocations.

#### Parameters

##### options?

Optional configuration for search behavior

###### allowed_domains?

`string`[]

###### enable_image_understanding?

`boolean`

###### excluded_domains?

`string`[]

#### Returns

[`XAIWebSearchTool`](../interfaces/xaiwebsearchtool.md)

A web search tool configuration object

#### Example

```typescript
// Basic web search
const search = webSearchTool();

// With domain restrictions
const searchWithDomains = webSearchTool({
  allowed_domains: ['wikipedia.org', 'github.com'],
});
```

### xSearch()

> **xSearch**: (`options?`) => [`XAIXSearchTool`](../interfaces/xaixsearchtool.md) = `xSearchTool`

Creates an X (Twitter) search tool configuration

Creates an X (Twitter) search tool configuration.

Enables Grok to search X posts and profiles in real-time.
Pricing: $5 per 1,000 successful tool invocations.

#### Parameters

##### options?

Optional configuration for search behavior

###### allowed_x_handles?

`string`[]

###### enable_image_understanding?

`boolean`

###### enable_video_understanding?

`boolean`

###### excluded_x_handles?

`string`[]

###### from_date?

`string`

###### to_date?

`string`

#### Returns

[`XAIXSearchTool`](../interfaces/xaixsearchtool.md)

An X search tool configuration object

#### Example

```typescript
// Basic X search
const xSearch = xSearchTool();

// With handle and date filters
const filteredSearch = xSearchTool({
  allowed_x_handles: ['elonmusk', 'xai'],
  from_date: '2025-01-01',
  to_date: '2025-12-31',
});
```

## Example

```typescript
import { xai, tools } from 'provider-protocol/xai';

const model = llm({
  model: xai('grok-4-1-fast', { api: 'responses' }),
  params: {
    tools: [
      tools.webSearch(),
      tools.xSearch({ from_date: '2025-01-01' }),
      tools.codeExecution(),
    ],
    include: ['inline_citations', 'code_execution_call_output'],
  },
});
```
