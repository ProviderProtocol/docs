---
title: "Interface: OpenAICompletionsWebSearchUserLocation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICompletionsWebSearchUserLocation

# Interface: OpenAICompletionsWebSearchUserLocation

Defined in: [src/providers/openai/types.ts:78](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/providers/openai/types.ts#L78)

User location for web search context in the Chat Completions API.

Used to localize web search results based on the user's approximate location.
In the Completions API, location fields are nested under an `approximate` object.

## See

[OpenAIWebSearchUserLocation](openaiwebsearchuserlocation.md) for the Responses API version

## Properties

### approximate

> **approximate**: `object`

Defined in: [src/providers/openai/types.ts:82](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/providers/openai/types.ts#L82)

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

Defined in: [src/providers/openai/types.ts:80](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/providers/openai/types.ts#L80)

Location type - must be 'approximate'
