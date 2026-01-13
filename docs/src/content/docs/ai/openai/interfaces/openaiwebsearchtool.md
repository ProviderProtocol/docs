---
title: "Interface: OpenAIWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIWebSearchTool

# Interface: OpenAIWebSearchTool

Defined in: [src/providers/openai/types.ts:1136](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1136)

Web search tool for Responses API
Enables the model to search the web for up-to-date information

## Properties

### search\_context\_size?

> `optional` **search\_context\_size**: `"low"` \| `"medium"` \| `"high"`

Defined in: [src/providers/openai/types.ts:1142](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1142)

Context size for search results
Controls how much context from web results to include

***

### type

> **type**: `"web_search"`

Defined in: [src/providers/openai/types.ts:1137](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1137)

***

### user\_location?

> `optional` **user\_location**: [`OpenAIWebSearchUserLocation`](openaiwebsearchuserlocation.md) \| `null`

Defined in: [src/providers/openai/types.ts:1144](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1144)

User location for localizing search results
