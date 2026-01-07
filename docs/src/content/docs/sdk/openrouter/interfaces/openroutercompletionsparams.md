---
title: "Interface: OpenRouterCompletionsParams"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openrouter](../README.md) / OpenRouterCompletionsParams

# Interface: OpenRouterCompletionsParams

Defined in: [src/providers/openrouter/types.ts:20](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L20)

Parameters for OpenRouter's Chat Completions API.

These parameters are passed through to the `/api/v1/chat/completions` endpoint.
Includes standard OpenAI-compatible parameters plus OpenRouter-specific features
like model routing and provider preferences.

## See

[OpenRouter Chat Completions API](https://openrouter.ai/docs/api-reference/chat-completions)

## Properties

### debug?

> `optional` **debug**: `object`

Defined in: [src/providers/openrouter/types.ts:106](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L106)

Debug options (streaming only)

#### echo\_upstream\_body?

> `optional` **echo\_upstream\_body**: `boolean`

If true, returns the transformed request body sent to the provider

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:34](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L34)

Frequency penalty (-2.0 - 2.0)

***

### logit\_bias?

> `optional` **logit\_bias**: `Record`\<`number`, `number`\>

Defined in: [src/providers/openrouter/types.ts:58](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L58)

Logit bias map

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/openrouter/types.ts:52](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L52)

Enable logprobs

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/openrouter/types.ts:22](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L22)

Maximum number of tokens to generate

***

### min\_p?

> `optional` **min\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:61](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L61)

Minimum probability threshold (0.0 - 1.0)

***

### models?

> `optional` **models**: `string`[]

Defined in: [src/providers/openrouter/types.ts:82](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L82)

Multiple models for routing
See: https://openrouter.ai/docs/guides/features/model-routing

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openrouter/types.ts:67](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L67)

Whether to enable parallel tool calls

***

### prediction?

> `optional` **prediction**: `object`

Defined in: [src/providers/openrouter/types.ts:98](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L98)

Predicted output for latency optimization

#### content

> **content**: `string`

#### type

> **type**: `"content"`

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:37](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L37)

Presence penalty (-2.0 - 2.0)

***

### provider?

> `optional` **provider**: [`OpenRouterProviderPreferences`](OpenRouterProviderPreferences.md)

Defined in: [src/providers/openrouter/types.ts:93](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L93)

Provider routing preferences
See: https://openrouter.ai/docs/guides/routing/provider-selection

***

### repetition\_penalty?

> `optional` **repetition\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:40](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L40)

Repetition penalty (0.0 - 2.0)

***

### response\_format?

> `optional` **response\_format**: `OpenRouterResponseFormat`

Defined in: [src/providers/openrouter/types.ts:70](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L70)

Response format for structured output

***

### route?

> `optional` **route**: `"fallback"`

Defined in: [src/providers/openrouter/types.ts:87](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L87)

Routing strategy (e.g., 'fallback')

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/openrouter/types.ts:46](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L46)

Seed for deterministic sampling

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [src/providers/openrouter/types.ts:43](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L43)

Custom stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openrouter/types.ts:25](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L25)

Temperature for randomness (0.0 - 2.0)

***

### top\_a?

> `optional` **top\_a**: `number`

Defined in: [src/providers/openrouter/types.ts:64](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L64)

Top-a sampling threshold (0.0 - 1.0)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/openrouter/types.ts:31](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L31)

Top-k sampling (not available for OpenAI models)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/openrouter/types.ts:55](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L55)

Number of top logprobs to return

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:28](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L28)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### transforms?

> `optional` **transforms**: `string`[]

Defined in: [src/providers/openrouter/types.ts:76](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L76)

Prompt transforms to apply
See: https://openrouter.ai/docs/guides/features/message-transforms

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openrouter/types.ts:49](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L49)

User identifier for abuse detection
