---
title: "Interface: OpenRouterProviderPreferences"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterProviderPreferences

# Interface: OpenRouterProviderPreferences

Defined in: [src/providers/openrouter/types.ts:234](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L234)

Provider routing preferences for OpenRouter.

Controls how OpenRouter selects and routes requests to upstream providers.

## See

[Provider Selection](https://openrouter.ai/docs/guides/routing/provider-selection)

## Properties

### allow\_fallbacks?

> `optional` **allow\_fallbacks**: `boolean`

Defined in: [src/providers/openrouter/types.ts:236](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L236)

Allow fallback to other providers if the primary is unavailable.

***

### data\_collection?

> `optional` **data\_collection**: `"allow"` \| `"deny"`

Defined in: [src/providers/openrouter/types.ts:240](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L240)

Data collection policy: 'allow' or 'deny'.

***

### ignore?

> `optional` **ignore**: `string`[]

Defined in: [src/providers/openrouter/types.ts:244](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L244)

List of provider slugs to exclude from routing.

***

### order?

> `optional` **order**: `string`[]

Defined in: [src/providers/openrouter/types.ts:242](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L242)

Ordered list of preferred provider slugs.

***

### quantizations?

> `optional` **quantizations**: `string`[]

Defined in: [src/providers/openrouter/types.ts:246](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L246)

Preferred quantization levels (e.g., 'fp16', 'int8').

***

### require\_parameters?

> `optional` **require\_parameters**: `boolean`

Defined in: [src/providers/openrouter/types.ts:238](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L238)

Require that the provider supports all specified parameters.
