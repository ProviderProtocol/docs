---
title: "Interface: AnthropicUserLocation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicUserLocation

# Interface: AnthropicUserLocation

Defined in: [src/providers/anthropic/types.ts:759](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L759)

User location for web search context.

Used to localize web search results based on the user's approximate location.

## Properties

### city?

> `optional` **city**: `string`

Defined in: [src/providers/anthropic/types.ts:763](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L763)

City name

***

### country?

> `optional` **country**: `string`

Defined in: [src/providers/anthropic/types.ts:767](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L767)

ISO 3166-1 alpha-2 country code (e.g., "US")

***

### region?

> `optional` **region**: `string`

Defined in: [src/providers/anthropic/types.ts:765](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L765)

Region/state name

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/providers/anthropic/types.ts:769](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L769)

IANA timezone (e.g., "America/New_York")

***

### type

> **type**: `"approximate"`

Defined in: [src/providers/anthropic/types.ts:761](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L761)

Location type - must be 'approximate'
