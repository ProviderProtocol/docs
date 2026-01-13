---
title: "Interface: AnthropicUserLocation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicUserLocation

# Interface: AnthropicUserLocation

Defined in: [src/providers/anthropic/types.ts:760](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L760)

User location for web search context.

Used to localize web search results based on the user's approximate location.

## Properties

### city?

> `optional` **city**: `string`

Defined in: [src/providers/anthropic/types.ts:764](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L764)

City name

***

### country?

> `optional` **country**: `string`

Defined in: [src/providers/anthropic/types.ts:768](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L768)

ISO 3166-1 alpha-2 country code (e.g., "US")

***

### region?

> `optional` **region**: `string`

Defined in: [src/providers/anthropic/types.ts:766](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L766)

Region/state name

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/providers/anthropic/types.ts:770](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L770)

IANA timezone (e.g., "America/New_York")

***

### type

> **type**: `"approximate"`

Defined in: [src/providers/anthropic/types.ts:762](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L762)

Location type - must be 'approximate'
