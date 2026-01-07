---
title: "Function: webSearchTool()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / webSearchTool

# Function: webSearchTool()

> **webSearchTool**(`options?`): [`OpenAIWebSearchTool`](../interfaces/OpenAIWebSearchTool.md)

Defined in: [src/providers/openai/types.ts:1277](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1277)

Creates a web search tool configuration for the Responses API.

The web search tool enables the model to search the web for up-to-date information.

## Parameters

### options?

Optional configuration for search behavior and user location

#### search_context_size?

`"high"` \| `"medium"` \| `"low"`

#### user_location?

[`OpenAIWebSearchUserLocation`](../interfaces/OpenAIWebSearchUserLocation.md) \| `null`

## Returns

[`OpenAIWebSearchTool`](../interfaces/OpenAIWebSearchTool.md)

A web search tool configuration object

## Example

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
