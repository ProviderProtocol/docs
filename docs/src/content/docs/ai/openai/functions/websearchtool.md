---
title: "Function: webSearchTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / webSearchTool

# Function: webSearchTool()

> **webSearchTool**(`options?`): [`OpenAIWebSearchTool`](../interfaces/openaiwebsearchtool.md)

Defined in: [src/providers/openai/types.ts:1349](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openai/types.ts#L1349)

Creates a web search tool configuration for the Responses API.

The web search tool enables the model to search the web for up-to-date information.

## Parameters

### options?

Optional configuration for search behavior and user location

#### search_context_size?

`"low"` \| `"medium"` \| `"high"`

#### user_location?

[`OpenAIWebSearchUserLocation`](../interfaces/openaiwebsearchuserlocation.md) \| `null`

## Returns

[`OpenAIWebSearchTool`](../interfaces/openaiwebsearchtool.md)

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
