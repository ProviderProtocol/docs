---
title: "Interface: OpenAIWebSearchOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIWebSearchOptions

# Interface: OpenAIWebSearchOptions

Defined in: [src/providers/openai/types.ts:100](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openai/types.ts#L100)

Web search configuration options for the Chat Completions API.

Enables web search capabilities when using search-enabled models.
Use with models that support web search (e.g., gpt-4o-search-preview).

## Properties

### search\_context\_size?

> `optional` **search\_context\_size**: `"low"` \| `"medium"` \| `"high"`

Defined in: [src/providers/openai/types.ts:105](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openai/types.ts#L105)

Context size for search results
Controls how much context from web results to include

***

### user\_location?

> `optional` **user\_location**: [`OpenAICompletionsWebSearchUserLocation`](openaicompletionswebsearchuserlocation.md) \| `null`

Defined in: [src/providers/openai/types.ts:107](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openai/types.ts#L107)

User location for localizing search results
