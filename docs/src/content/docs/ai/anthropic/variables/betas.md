---
title: "Variable: betas"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / betas

# Variable: betas

> `const` **betas**: `object`

Defined in: [src/providers/anthropic/types.ts:33](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L33)

Known Anthropic beta header values.

Beta features are enabled by passing these values in the `betas` config option
or via the `anthropic-beta` HTTP header. Multiple betas can be enabled simultaneously.

## Type Declaration

### advancedToolUse

> `readonly` **advancedToolUse**: `"advanced-tool-use-2025-11-20"` = `'advanced-tool-use-2025-11-20'`

Advanced tool use: Tool Search, Programmatic Tool Calling, Tool Use Examples.

### codeExecution

> `readonly` **codeExecution**: `"code-execution-2025-08-25"` = `'code-execution-2025-08-25'`

Code execution tool for running Python/Bash in secure sandbox.

### computerUse

> `readonly` **computerUse**: `"computer-use-2025-01-24"` = `'computer-use-2025-01-24'`

Computer use tool for Claude 4 models (mouse, keyboard, screenshots).

### computerUseLegacy

> `readonly` **computerUseLegacy**: `"computer-use-2024-10-22"` = `'computer-use-2024-10-22'`

Legacy computer use tool (Claude 3.x models).

### computerUseOpus

> `readonly` **computerUseOpus**: `"computer-use-2025-11-24"` = `'computer-use-2025-11-24'`

Computer use tool for Claude Opus 4.5 with additional commands.

### context1m

> `readonly` **context1m**: `"context-1m-2025-08-07"` = `'context-1m-2025-08-07'`

Enables 1 million token context window for Claude Sonnet 4.

### contextManagement

> `readonly` **contextManagement**: `"context-management-2025-06-27"` = `'context-management-2025-06-27'`

Automatic tool call clearing for context management.

### devFullThinking

> `readonly` **devFullThinking**: `"dev-full-thinking-2025-05-14"` = `'dev-full-thinking-2025-05-14'`

Developer mode for full thinking output visibility.

### effort

> `readonly` **effort**: `"effort-2025-11-24"` = `'effort-2025-11-24'`

Effort parameter for Claude Opus 4.5 - controls response thoroughness vs efficiency.

### extendedCacheTtl

> `readonly` **extendedCacheTtl**: `"extended-cache-ttl-2025-04-11"` = `'extended-cache-ttl-2025-04-11'`

Enables 1-hour cache TTL (vs default 5-minute).

### filesApi

> `readonly` **filesApi**: `"files-api-2025-04-14"` = `'files-api-2025-04-14'`

Files API for uploading and managing files.

### fineGrainedToolStreaming

> `readonly` **fineGrainedToolStreaming**: `"fine-grained-tool-streaming-2025-05-14"` = `'fine-grained-tool-streaming-2025-05-14'`

Streams tool use parameters without buffering/JSON validation.

### interleavedThinking

> `readonly` **interleavedThinking**: `"interleaved-thinking-2025-05-14"` = `'interleaved-thinking-2025-05-14'`

Enables Claude to think between tool calls in Claude 4 models.

### maxTokens35Sonnet

> `readonly` **maxTokens35Sonnet**: `"max-tokens-3-5-sonnet-2024-07-15"` = `'max-tokens-3-5-sonnet-2024-07-15'`

Enables up to 8,192 output tokens from Claude Sonnet 3.5.

### mcpClient

> `readonly` **mcpClient**: `"mcp-client-2025-04-04"` = `'mcp-client-2025-04-04'`

MCP connector to connect to remote MCP servers.

### mcpClientLatest

> `readonly` **mcpClientLatest**: `"mcp-client-2025-11-20"` = `'mcp-client-2025-11-20'`

Updated MCP client.

### messageBatches

> `readonly` **messageBatches**: `"message-batches-2024-09-24"` = `'message-batches-2024-09-24'`

Message Batches API for async processing at 50% cost.

### modelContextWindowExceeded

> `readonly` **modelContextWindowExceeded**: `"model-context-window-exceeded-2025-08-26"` = `'model-context-window-exceeded-2025-08-26'`

Handling for when model context window is exceeded.

### output128k

> `readonly` **output128k**: `"output-128k-2025-02-19"` = `'output-128k-2025-02-19'`

Enables 128K token output length.

### pdfs

> `readonly` **pdfs**: `"pdfs-2024-09-25"` = `'pdfs-2024-09-25'`

PDF document support.

### promptCaching

> `readonly` **promptCaching**: `"prompt-caching-2024-07-31"` = `'prompt-caching-2024-07-31'`

Prompt caching for reduced latency and costs. Now works automatically with cache_control.

### skills

> `readonly` **skills**: `"skills-2025-10-02"` = `'skills-2025-10-02'`

Agent Skills for specialized tasks (PowerPoint, Excel, Word, PDF).

### structuredOutputs

> `readonly` **structuredOutputs**: `"structured-outputs-2025-11-13"` = `'structured-outputs-2025-11-13'`

Guaranteed JSON schema conformance for responses. Available for Claude Sonnet 4.5+.

### tokenCounting

> `readonly` **tokenCounting**: `"token-counting-2024-11-01"` = `'token-counting-2024-11-01'`

Token counting endpoint.

### tokenEfficientTools

> `readonly` **tokenEfficientTools**: `"token-efficient-tools-2025-02-19"` = `'token-efficient-tools-2025-02-19'`

Reduces output token consumption by up to 70% for tool calls.

## Example

```typescript
import { anthropic, betas } from 'provider-protocol/anthropic';

// Using the betas config option (recommended)
const provider = anthropic('claude-sonnet-4-20250514', {
  betas: [betas.structuredOutputs, betas.interleavedThinking],
});

// Or use string values directly for new/unlisted betas
const provider = anthropic('claude-sonnet-4-20250514', {
  betas: ['new-beta-2025-12-01'],
});
```
