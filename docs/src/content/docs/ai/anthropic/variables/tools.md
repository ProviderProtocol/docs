---
title: "Variable: tools"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / tools

# Variable: tools

> `const` **tools**: `object`

Defined in: [src/providers/anthropic/types.ts:1173](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L1173)

Namespace object containing all Anthropic tool helper constructors.

Provides a convenient way to create built-in tool configurations.

## Type Declaration

### bash()

> **bash**: () => [`AnthropicBashTool`](../interfaces/anthropicbashtool.md) = `bashTool`

Creates a bash tool configuration

Creates a bash tool configuration.

The bash tool enables Claude to execute shell commands.
Sessions persist within the conversation.

Token overhead: ~245 tokens per tool definition.

#### Returns

[`AnthropicBashTool`](../interfaces/anthropicbashtool.md)

A bash tool configuration object

#### Example

```typescript
const bash = bashTool();
```

### codeExecution()

> **codeExecution**: () => [`AnthropicCodeExecutionTool`](../interfaces/anthropiccodeexecutiontool.md) = `codeExecutionTool`

Creates a code execution tool configuration

Creates a code execution tool configuration.

The code execution tool enables Claude to write and execute
Python/Bash code in a secure sandboxed container.

Requires beta header: `code-execution-2025-08-25` (automatically injected).

Pricing:
- Free tier: 1,550 hours/month per organization
- Additional: $0.05 per hour, per container

#### Returns

[`AnthropicCodeExecutionTool`](../interfaces/anthropiccodeexecutiontool.md)

A code execution tool configuration object

#### Example

```typescript
const codeExec = codeExecutionTool();
```

### computer()

> **computer**: (`options`) => [`AnthropicComputerTool`](../interfaces/anthropiccomputertool.md) = `computerTool`

Creates a computer use tool configuration

Creates a computer use tool configuration.

The computer tool enables Claude to interact with computer interfaces
through mouse clicks, keyboard input, and screenshots.

Requires beta header (automatically injected when using this tool):
- `computer-use-2025-11-24` for Claude Opus 4.5
- `computer-use-2025-01-24` for other models

#### Parameters

##### options

Display configuration and optional settings

###### display_height_px

`number`

###### display_number?

`number`

###### display_width_px

`number`

###### enable_zoom?

`boolean`

###### version?

`"20250124"` \| `"20251124"`

Use '20251124' for Claude Opus 4.5, '20250124' for other models

#### Returns

[`AnthropicComputerTool`](../interfaces/anthropiccomputertool.md)

A computer tool configuration object

#### Example

```typescript
const computer = computerTool({
  display_width_px: 1920,
  display_height_px: 1080,
});

// For Opus 4.5 with zoom support
const computerOpus = computerTool({
  display_width_px: 1920,
  display_height_px: 1080,
  version: '20251124',
  enable_zoom: true,
});
```

### textEditor()

> **textEditor**: (`options?`) => [`AnthropicTextEditorTool`](../interfaces/anthropictexteditortool.md) = `textEditorTool`

Creates a text editor tool configuration

Creates a text editor tool configuration.

The text editor tool enables Claude to view, create, and edit files
using commands like view, str_replace, create, and insert.

Token overhead: ~700 tokens per tool definition.

#### Parameters

##### options?

Optional configuration

###### max_characters?

`number`

###### version?

`"20250124"` \| `"20250728"`

Use '20250728' for Claude 4, '20250124' for Claude 3.7

#### Returns

[`AnthropicTextEditorTool`](../interfaces/anthropictexteditortool.md)

A text editor tool configuration object

#### Example

```typescript
const editor = textEditorTool();

// With max characters for view truncation
const editorWithLimit = textEditorTool({
  max_characters: 10000,
});
```

### toolSearch()

> **toolSearch**: (`options?`) => [`AnthropicToolSearchTool`](../interfaces/anthropictoolsearchtool.md) = `toolSearchTool`

Creates a tool search tool configuration

Creates a tool search tool configuration.

The tool search tool enables Claude to search through large
tool catalogs (up to 10,000 tools) using regex or natural language.

Requires beta header: `advanced-tool-use-2025-11-20` (automatically injected).

#### Parameters

##### options?

Optional mode selection

###### mode?

`"regex"` \| `"bm25"`

Search mode: 'regex' for pattern matching, 'bm25' for natural language

#### Returns

[`AnthropicToolSearchTool`](../interfaces/anthropictoolsearchtool.md)

A tool search tool configuration object

#### Example

```typescript
// Regex-based search (default)
const search = toolSearchTool();

// Natural language (BM25) search
const nlSearch = toolSearchTool({ mode: 'bm25' });
```

### webSearch()

> **webSearch**: (`options?`) => [`AnthropicWebSearchTool`](../interfaces/anthropicwebsearchtool.md) = `webSearchTool`

Creates a web search tool configuration

Creates a web search tool configuration.

The web search tool enables Claude to search the web for up-to-date information.
Pricing: $10 per 1,000 searches plus standard token costs.

#### Parameters

##### options?

Optional configuration for search behavior

###### allowed_domains?

`string`[]

###### blocked_domains?

`string`[]

###### max_uses?

`number`

###### user_location?

[`AnthropicUserLocation`](../interfaces/anthropicuserlocation.md)

#### Returns

[`AnthropicWebSearchTool`](../interfaces/anthropicwebsearchtool.md)

A web search tool configuration object

#### Example

```typescript
// Basic web search
const search = webSearchTool();

// With configuration
const searchWithOptions = webSearchTool({
  max_uses: 5,
  allowed_domains: ['wikipedia.org', 'github.com'],
  user_location: {
    type: 'approximate',
    city: 'San Francisco',
    country: 'US',
  },
});
```

## Example

```typescript
import { anthropic, tools } from 'provider-protocol/anthropic';

const model = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  params: {
    tools: [
      tools.webSearch({ max_uses: 5 }),
      tools.codeExecution(),
    ],
  },
});
```
