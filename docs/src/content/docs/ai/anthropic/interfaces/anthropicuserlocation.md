---
title: "Interface: AnthropicUserLocation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicUserLocation

# Interface: AnthropicUserLocation

Defined in: [src/providers/anthropic/types.ts:840](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L840)

User location for web search context.

Used to localize web search results based on the user's approximate location.

## Properties

### city?

> `optional` **city**: `string`

Defined in: [src/providers/anthropic/types.ts:844](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L844)

City name

***

### country?

> `optional` **country**: `string`

Defined in: [src/providers/anthropic/types.ts:848](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L848)

ISO 3166-1 alpha-2 country code (e.g., "US")

***

### region?

> `optional` **region**: `string`

Defined in: [src/providers/anthropic/types.ts:846](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L846)

Region/state name

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/providers/anthropic/types.ts:850](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L850)

IANA timezone (e.g., "America/New_York")

***

### type

> **type**: `"approximate"`

Defined in: [src/providers/anthropic/types.ts:842](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L842)

Location type - must be 'approximate'
