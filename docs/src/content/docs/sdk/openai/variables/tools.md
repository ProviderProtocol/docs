---
title: "Variable: tools"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / tools

# Variable: tools

> `const` **tools**: `object`

Defined in: [src/providers/openai/types.ts:1479](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1479)

Namespace object containing all tool helper constructors.

Provides a convenient way to create built-in tool configurations
for the Responses API.

## Type Declaration

### codeInterpreter()

> **codeInterpreter**: (`options?`) => [`OpenAICodeInterpreterTool`](../interfaces/OpenAICodeInterpreterTool.md) = `codeInterpreterTool`

Creates a code interpreter tool configuration

Creates a code interpreter tool configuration for the Responses API.

The code interpreter tool allows the model to write and execute Python code
in a sandboxed environment.

#### Parameters

##### options?

Optional container configuration

###### container?

`string` \| [`OpenAICodeInterpreterContainer`](../interfaces/OpenAICodeInterpreterContainer.md)

#### Returns

[`OpenAICodeInterpreterTool`](../interfaces/OpenAICodeInterpreterTool.md)

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

> **computer**: (`options`) => [`OpenAIComputerTool`](../interfaces/OpenAIComputerTool.md) = `computerTool`

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

[`OpenAIComputerEnvironment`](../interfaces/OpenAIComputerEnvironment.md)

#### Returns

[`OpenAIComputerTool`](../interfaces/OpenAIComputerTool.md)

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

> **fileSearch**: (`options`) => [`OpenAIFileSearchTool`](../interfaces/OpenAIFileSearchTool.md) = `fileSearchTool`

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

[`OpenAIFileSearchTool`](../interfaces/OpenAIFileSearchTool.md)

A file search tool configuration object

#### Example

```typescript
const fileSearch = fileSearchTool({
  vector_store_ids: ['vs_abc123'],
  max_num_results: 10
});
```

### imageGeneration()

> **imageGeneration**: (`options?`) => [`OpenAIImageGenerationTool`](../interfaces/OpenAIImageGenerationTool.md) = `imageGenerationTool`

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

###### quality?

`"auto"` \| `"high"` \| `"medium"` \| `"low"`

###### size?

`"auto"` \| `"1024x1024"` \| `"1024x1536"` \| `"1536x1024"`

#### Returns

[`OpenAIImageGenerationTool`](../interfaces/OpenAIImageGenerationTool.md)

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

> **mcp**: (`options`) => [`OpenAIMcpTool`](../interfaces/OpenAIMcpTool.md) = `mcpTool`

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

[`OpenAIMcpTool`](../interfaces/OpenAIMcpTool.md)

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

> **webSearch**: (`options?`) => [`OpenAIWebSearchTool`](../interfaces/OpenAIWebSearchTool.md) = `webSearchTool`

Creates a web search tool configuration

Creates a web search tool configuration for the Responses API.

The web search tool enables the model to search the web for up-to-date information.

#### Parameters

##### options?

Optional configuration for search behavior and user location

###### search_context_size?

`"high"` \| `"medium"` \| `"low"`

###### user_location?

[`OpenAIWebSearchUserLocation`](../interfaces/OpenAIWebSearchUserLocation.md) \| `null`

#### Returns

[`OpenAIWebSearchTool`](../interfaces/OpenAIWebSearchTool.md)

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
