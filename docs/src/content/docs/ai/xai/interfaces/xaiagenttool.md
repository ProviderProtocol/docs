---
title: "Interface: XAIAgentTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIAgentTool

# Interface: XAIAgentTool

Defined in: [src/providers/xai/types.ts:263](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L263)

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

Defined in: [src/providers/xai/types.ts:265](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L265)

The type of server-side tool to enable
