---
title: "Interface: AnthropicUserLocation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicUserLocation

# Interface: AnthropicUserLocation

Defined in: [src/providers/anthropic/types.ts:831](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L831)

User location for web search context.

Used to localize web search results based on the user's approximate location.

## Properties

### city?

> `optional` **city**: `string`

Defined in: [src/providers/anthropic/types.ts:835](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L835)

City name

***

### country?

> `optional` **country**: `string`

Defined in: [src/providers/anthropic/types.ts:839](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L839)

ISO 3166-1 alpha-2 country code (e.g., "US")

***

### region?

> `optional` **region**: `string`

Defined in: [src/providers/anthropic/types.ts:837](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L837)

Region/state name

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/providers/anthropic/types.ts:841](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L841)

IANA timezone (e.g., "America/New_York")

***

### type

> **type**: `"approximate"`

Defined in: [src/providers/anthropic/types.ts:833](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L833)

Location type - must be 'approximate'
