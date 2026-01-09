---
title: "Variable: tools"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / tools

# Variable: tools

> `const` **tools**: `object`

Defined in: [src/providers/openai/types.ts:1480](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L1480)

Namespace object containing all tool helper constructors.

Provides a convenient way to create built-in tool configurations
for the Responses API.

## Type Declaration

### codeInterpreter()

> **codeInterpreter**: (`options?`) => [`OpenAICodeInterpreterTool`](../interfaces/openaicodeinterpretertool.md) = `codeInterpreterTool`

Creates a code interpreter tool configuration

Creates a code interpreter tool configuration for the Responses API.

The code interpreter tool allows the model to write and execute Python code
in a sandboxed environment.

#### Parameters

##### options?

Optional container configuration

###### container?

`string` \| [`OpenAICodeInterpreterContainer`](../interfaces/openaicodeinterpretercontainer.md)

#### Returns

[`OpenAICodeInterpreterTool`](../interfaces/openaicodeinterpretertool.md)

A code interpreter tool configuration object

#### Example

```typescript
// Default configuration
const interpreter = codeInterpreterTool();

// With custom container settings
const customInterpreter = codeInterpreterTool({
  container: {
    type: 'auto',
    memory_limit: '4g',
    file_ids: ['file_abc123']
  }
});
```

### computer()

> **computer**: (`options`) => [`OpenAIComputerTool`](../interfaces/openaicomputertool.md) = `computerTool`

Creates a computer tool configuration

Creates a computer tool configuration for the Responses API.

The computer tool enables the model to interact with computer interfaces
through mouse and keyboard actions.

#### Parameters

##### options

Display configuration and environment settings

###### display_height

`number`

###### display_width

`number`

###### environment?

[`OpenAIComputerEnvironment`](../interfaces/openaicomputerenvironment.md)

#### Returns

[`OpenAIComputerTool`](../interfaces/openaicomputertool.md)

A computer tool configuration object

#### Example

```typescript
const computer = computerTool({
  display_width: 1920,
  display_height: 1080,
  environment: { type: 'browser' }
});
```

### fileSearch()

> **fileSearch**: (`options`) => [`OpenAIFileSearchTool`](../interfaces/openaifilesearchtool.md) = `fileSearchTool`

Creates a file search tool configuration

Creates a file search tool configuration for the Responses API.

The file search tool enables the model to search through files in vector stores.

#### Parameters

##### options

Configuration including vector store IDs and search options

###### filters?

`Record`\<`string`, `unknown`\>

###### max_num_results?

`number`

###### ranking_options?

\{ `ranker?`: `"auto"` \| `"default_2024_08_21"`; `score_threshold?`: `number`; \}

###### ranking_options.ranker?

`"auto"` \| `"default_2024_08_21"`

###### ranking_options.score_threshold?

`number`

###### vector_store_ids

`string`[]

#### Returns

[`OpenAIFileSearchTool`](../interfaces/openaifilesearchtool.md)

A file search tool configuration object

#### Example

```typescript
const fileSearch = fileSearchTool({
  vector_store_ids: ['vs_abc123'],
  max_num_results: 10
});
```

### imageGeneration()

> **imageGeneration**: (`options?`) => [`OpenAIImageGenerationTool`](../interfaces/openaiimagegenerationtool.md) = `imageGenerationTool`

Creates an image generation tool configuration

Creates an image generation tool configuration for the Responses API.

The image generation tool allows the model to generate images based on prompts.

#### Parameters

##### options?

Optional image generation settings

###### background?

`"auto"` \| `"transparent"` \| `"opaque"`

###### model?

`string`

###### output_format?

`"jpeg"` \| `"png"` \| `"webp"`

###### partial_images?

`number`

###### quality?

`"auto"` \| `"high"` \| `"medium"` \| `"low"`

###### size?

`"auto"` \| `"1024x1024"` \| `"1024x1536"` \| `"1536x1024"`

#### Returns

[`OpenAIImageGenerationTool`](../interfaces/openaiimagegenerationtool.md)

An image generation tool configuration object

#### Example

```typescript
// Default configuration
const imageGen = imageGenerationTool();

// With custom settings
const customImageGen = imageGenerationTool({
  quality: 'high',
  size: '1024x1024',
  background: 'transparent'
});
```

### mcp()

> **mcp**: (`options`) => [`OpenAIMcpTool`](../interfaces/openaimcptool.md) = `mcpTool`

Creates an MCP tool configuration

Creates an MCP (Model Context Protocol) tool configuration for the Responses API.

The MCP tool enables connections to external MCP servers, allowing the model
to use tools and resources provided by those servers.

#### Parameters

##### options

MCP server configuration

###### allowed_tools?

`string`[] \| \{ `type`: `"all"`; \}

###### headers?

`Record`\<`string`, `string`\>

###### name?

`string`

###### require_approval?

`"always"` \| `"never"` \| \{ `tools`: `string`[]; `type`: `"except"`; \}

###### url

`string`

#### Returns

[`OpenAIMcpTool`](../interfaces/openaimcptool.md)

An MCP tool configuration object

#### Example

```typescript
const mcp = mcpTool({
  url: 'https://mcp-server.example.com',
  name: 'my-mcp-server',
  allowed_tools: ['tool1', 'tool2']
});
```

### webSearch()

> **webSearch**: (`options?`) => [`OpenAIWebSearchTool`](../interfaces/openaiwebsearchtool.md) = `webSearchTool`

Creates a web search tool configuration

Creates a web search tool configuration for the Responses API.

The web search tool enables the model to search the web for up-to-date information.

#### Parameters

##### options?

Optional configuration for search behavior and user location

###### search_context_size?

`"high"` \| `"medium"` \| `"low"`

###### user_location?

[`OpenAIWebSearchUserLocation`](../interfaces/openaiwebsearchuserlocation.md) \| `null`

#### Returns

[`OpenAIWebSearchTool`](../interfaces/openaiwebsearchtool.md)

A web search tool configuration object

#### Example

```typescript
// Basic web search
const search = webSearchTool();

// With configuration
const searchWithLocation = webSearchTool({
  search_context_size: 'high',
  user_location: {
    type: 'approximate',
    city: 'San Francisco',
    country: 'US'
  }
});
```

## Example

```typescript
import { tools } from './types';

const params = {
  tools: [
    tools.webSearch(),
    tools.imageGeneration({ quality: 'high' }),
    tools.codeInterpreter()
  ]
};
```
