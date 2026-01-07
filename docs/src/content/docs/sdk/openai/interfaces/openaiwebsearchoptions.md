---
title: "Interface: OpenAIWebSearchOptions"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAIWebSearchOptions

# Interface: OpenAIWebSearchOptions

Defined in: [src/providers/openai/types.ts:100](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L100)

Web search configuration options for the Chat Completions API.

Enables web search capabilities when using search-enabled models.
Use with models that support web search (e.g., gpt-4o-search-preview).

## Properties

### search\_context\_size?

> `optional` **search\_context\_size**: `"high"` \| `"medium"` \| `"low"`

Defined in: [src/providers/openai/types.ts:105](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L105)

Context size for search results
Controls how much context from web results to include

***

### user\_location?

> `optional` **user\_location**: [`OpenAICompletionsWebSearchUserLocation`](OpenAICompletionsWebSearchUserLocation.md) \| `null`

Defined in: [src/providers/openai/types.ts:107](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L107)

User location for localizing search results
