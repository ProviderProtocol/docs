---
title: "Interface: OpenAIWebSearchTool"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAIWebSearchTool

# Interface: OpenAIWebSearchTool

Defined in: [src/providers/openai/types.ts:1089](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1089)

Web search tool for Responses API
Enables the model to search the web for up-to-date information

## Properties

### search\_context\_size?

> `optional` **search\_context\_size**: `"high"` \| `"medium"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1095](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1095)

Context size for search results
Controls how much context from web results to include

***

### type

> **type**: `"web_search"`

Defined in: [src/providers/openai/types.ts:1090](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1090)

***

### user\_location?

> `optional` **user\_location**: [`OpenAIWebSearchUserLocation`](OpenAIWebSearchUserLocation.md) \| `null`

Defined in: [src/providers/openai/types.ts:1097](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1097)

User location for localizing search results
