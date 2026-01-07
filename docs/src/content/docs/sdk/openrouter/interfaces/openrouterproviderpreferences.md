---
title: "Interface: OpenRouterProviderPreferences"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openrouter](../README.md) / OpenRouterProviderPreferences

# Interface: OpenRouterProviderPreferences

Defined in: [src/providers/openrouter/types.ts:183](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L183)

Provider routing preferences for OpenRouter.

Controls how OpenRouter selects and routes requests to upstream providers.

## See

[Provider Selection](https://openrouter.ai/docs/guides/routing/provider-selection)

## Properties

### allow\_fallbacks?

> `optional` **allow\_fallbacks**: `boolean`

Defined in: [src/providers/openrouter/types.ts:185](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L185)

Allow fallback to other providers if the primary is unavailable.

***

### data\_collection?

> `optional` **data\_collection**: `"allow"` \| `"deny"`

Defined in: [src/providers/openrouter/types.ts:189](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L189)

Data collection policy: 'allow' or 'deny'.

***

### ignore?

> `optional` **ignore**: `string`[]

Defined in: [src/providers/openrouter/types.ts:193](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L193)

List of provider slugs to exclude from routing.

***

### order?

> `optional` **order**: `string`[]

Defined in: [src/providers/openrouter/types.ts:191](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L191)

Ordered list of preferred provider slugs.

***

### quantizations?

> `optional` **quantizations**: `string`[]

Defined in: [src/providers/openrouter/types.ts:195](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L195)

Preferred quantization levels (e.g., 'fp16', 'int8').

***

### require\_parameters?

> `optional` **require\_parameters**: `boolean`

Defined in: [src/providers/openrouter/types.ts:187](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L187)

Require that the provider supports all specified parameters.
