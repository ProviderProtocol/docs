---
title: "Interface: XAIAgentTool"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [xai](../README.md) / XAIAgentTool

# Interface: XAIAgentTool

Defined in: [src/providers/xai/types.ts:263](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L263)

Server-side agentic tool configuration.

These tools run on xAI's servers and provide capabilities like
web search, X (Twitter) search, and code execution.

## Example

```typescript
const tool: XAIAgentTool = { type: 'web_search' };
```

## Properties

### type

> **type**: `"web_search"` \| `"x_search"` \| `"code_execution"`

Defined in: [src/providers/xai/types.ts:265](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L265)

The type of server-side tool to enable
