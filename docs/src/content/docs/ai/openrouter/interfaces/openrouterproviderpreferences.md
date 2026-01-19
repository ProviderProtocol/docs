---
title: "Interface: OpenRouterProviderPreferences"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterProviderPreferences

# Interface: OpenRouterProviderPreferences

Defined in: [src/providers/openrouter/types.ts:299](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L299)

Provider routing preferences for OpenRouter.

Controls how OpenRouter selects and routes requests to upstream providers.

## See

[Provider Selection](https://openrouter.ai/docs/guides/routing/provider-selection)

## Properties

### allow\_fallbacks?

> `optional` **allow\_fallbacks**: `boolean`

Defined in: [src/providers/openrouter/types.ts:301](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L301)

Allow fallback to other providers if the primary is unavailable.

***

### data\_collection?

> `optional` **data\_collection**: `"allow"` \| `"deny"`

Defined in: [src/providers/openrouter/types.ts:305](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L305)

Data collection policy: 'allow' or 'deny'.

***

### ignore?

> `optional` **ignore**: `string`[]

Defined in: [src/providers/openrouter/types.ts:309](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L309)

List of provider slugs to exclude from routing.

***

### order?

> `optional` **order**: `string`[]

Defined in: [src/providers/openrouter/types.ts:307](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L307)

Ordered list of preferred provider slugs.

***

### quantizations?

> `optional` **quantizations**: `string`[]

Defined in: [src/providers/openrouter/types.ts:311](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L311)

Preferred quantization levels (e.g., 'fp16', 'int8').

***

### require\_parameters?

> `optional` **require\_parameters**: `boolean`

Defined in: [src/providers/openrouter/types.ts:303](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L303)

Require that the provider supports all specified parameters.
