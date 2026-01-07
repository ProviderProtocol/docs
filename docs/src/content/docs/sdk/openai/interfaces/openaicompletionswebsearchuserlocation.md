---
title: "Interface: OpenAICompletionsWebSearchUserLocation"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAICompletionsWebSearchUserLocation

# Interface: OpenAICompletionsWebSearchUserLocation

Defined in: [src/providers/openai/types.ts:78](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L78)

User location for web search context in the Chat Completions API.

Used to localize web search results based on the user's approximate location.
In the Completions API, location fields are nested under an `approximate` object.

## See

[OpenAIWebSearchUserLocation](OpenAIWebSearchUserLocation.md) for the Responses API version

## Properties

### approximate

> **approximate**: `object`

Defined in: [src/providers/openai/types.ts:82](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L82)

Approximate location details

#### city?

> `optional` **city**: `string`

City name

#### country?

> `optional` **country**: `string`

ISO 3166-1 country code (e.g., "US")

#### region?

> `optional` **region**: `string`

Region/state name

#### timezone?

> `optional` **timezone**: `string`

IANA timezone (e.g., "America/New_York")

***

### type

> **type**: `"approximate"`

Defined in: [src/providers/openai/types.ts:80](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L80)

Location type - must be 'approximate'
