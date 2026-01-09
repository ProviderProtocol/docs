---
title: "Interface: AnthropicUserLocation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicUserLocation

# Interface: AnthropicUserLocation

Defined in: [src/providers/anthropic/types.ts:601](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L601)

User location for web search context.

Used to localize web search results based on the user's approximate location.

## Properties

### city?

> `optional` **city**: `string`

Defined in: [src/providers/anthropic/types.ts:605](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L605)

City name

***

### country?

> `optional` **country**: `string`

Defined in: [src/providers/anthropic/types.ts:609](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L609)

ISO 3166-1 alpha-2 country code (e.g., "US")

***

### region?

> `optional` **region**: `string`

Defined in: [src/providers/anthropic/types.ts:607](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L607)

Region/state name

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/providers/anthropic/types.ts:611](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L611)

IANA timezone (e.g., "America/New_York")

***

### type

> **type**: `"approximate"`

Defined in: [src/providers/anthropic/types.ts:603](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L603)

Location type - must be 'approximate'
