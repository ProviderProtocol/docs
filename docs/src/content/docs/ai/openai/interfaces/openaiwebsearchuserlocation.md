---
title: "Interface: OpenAIWebSearchUserLocation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIWebSearchUserLocation

# Interface: OpenAIWebSearchUserLocation

Defined in: [src/providers/openai/types.ts:57](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L57)

User location for web search context in the Responses API.

Used to localize web search results based on the user's approximate location.
In the Responses API, location fields are at the same level as the type field.

## See

[OpenAICompletionsWebSearchUserLocation](openaicompletionswebsearchuserlocation.md) for the Chat Completions API version

## Properties

### city?

> `optional` **city**: `string`

Defined in: [src/providers/openai/types.ts:61](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L61)

City name

***

### country?

> `optional` **country**: `string`

Defined in: [src/providers/openai/types.ts:63](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L63)

ISO 3166-1 country code (e.g., "US")

***

### region?

> `optional` **region**: `string`

Defined in: [src/providers/openai/types.ts:65](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L65)

Region/state name

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/providers/openai/types.ts:67](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L67)

IANA timezone (e.g., "America/New_York")

***

### type

> **type**: `"approximate"`

Defined in: [src/providers/openai/types.ts:59](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L59)

Location type - must be 'approximate'
