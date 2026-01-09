---
title: "Interface: OpenRouterCompletionsParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterCompletionsParams

# Interface: OpenRouterCompletionsParams

Defined in: [src/providers/openrouter/types.ts:20](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L20)

Parameters for OpenRouter's Chat Completions API.

These parameters are passed through to the `/api/v1/chat/completions` endpoint.
Includes standard OpenAI-compatible parameters plus OpenRouter-specific features
like model routing and provider preferences.

## See

[OpenRouter Chat Completions API](https://openrouter.ai/docs/api-reference/chat-completions)

## Properties

### debug?

> `optional` **debug**: `object`

Defined in: [src/providers/openrouter/types.ts:120](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L120)

Debug options (streaming only)

#### echo\_upstream\_body?

> `optional` **echo\_upstream\_body**: `boolean`

If true, returns the transformed request body sent to the provider

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:34](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L34)

Frequency penalty (-2.0 - 2.0)

***

### image\_config?

> `optional` **image\_config**: `OpenRouterImageConfig`

Defined in: [src/providers/openrouter/types.ts:84](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L84)

Image generation configuration for Gemini models.
Only applies when `modalities` includes 'image'.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### logit\_bias?

> `optional` **logit\_bias**: `Record`\<`number`, `number`\>

Defined in: [src/providers/openrouter/types.ts:58](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L58)

Logit bias map

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/openrouter/types.ts:52](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L52)

Enable logprobs

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/openrouter/types.ts:22](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L22)

Maximum number of tokens to generate

***

### min\_p?

> `optional` **min\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:61](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L61)

Minimum probability threshold (0.0 - 1.0)

***

### modalities?

> `optional` **modalities**: (`"text"` \| `"image"`)[]

Defined in: [src/providers/openrouter/types.ts:77](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L77)

Output modalities for multimodal generation.
Set to `['text', 'image']` to enable image generation with compatible models.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### models?

> `optional` **models**: `string`[]

Defined in: [src/providers/openrouter/types.ts:96](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L96)

Multiple models for routing
See: https://openrouter.ai/docs/guides/features/model-routing

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openrouter/types.ts:67](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L67)

Whether to enable parallel tool calls

***

### prediction?

> `optional` **prediction**: `object`

Defined in: [src/providers/openrouter/types.ts:112](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L112)

Predicted output for latency optimization

#### content

> **content**: `string`

#### type

> **type**: `"content"`

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:37](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L37)

Presence penalty (-2.0 - 2.0)

***

### provider?

> `optional` **provider**: [`OpenRouterProviderPreferences`](openrouterproviderpreferences.md)

Defined in: [src/providers/openrouter/types.ts:107](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L107)

Provider routing preferences
See: https://openrouter.ai/docs/guides/routing/provider-selection

***

### repetition\_penalty?

> `optional` **repetition\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:40](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L40)

Repetition penalty (0.0 - 2.0)

***

### response\_format?

> `optional` **response\_format**: `OpenRouterResponseFormat`

Defined in: [src/providers/openrouter/types.ts:70](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L70)

Response format for structured output

***

### route?

> `optional` **route**: `"fallback"`

Defined in: [src/providers/openrouter/types.ts:101](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L101)

Routing strategy (e.g., 'fallback')

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/openrouter/types.ts:46](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L46)

Seed for deterministic sampling

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [src/providers/openrouter/types.ts:43](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L43)

Custom stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openrouter/types.ts:25](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L25)

Temperature for randomness (0.0 - 2.0)

***

### top\_a?

> `optional` **top\_a**: `number`

Defined in: [src/providers/openrouter/types.ts:64](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L64)

Top-a sampling threshold (0.0 - 1.0)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/openrouter/types.ts:31](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L31)

Top-k sampling (not available for OpenAI models)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/openrouter/types.ts:55](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L55)

Number of top logprobs to return

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:28](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L28)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### transforms?

> `optional` **transforms**: `string`[]

Defined in: [src/providers/openrouter/types.ts:90](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L90)

Prompt transforms to apply
See: https://openrouter.ai/docs/guides/features/message-transforms

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openrouter/types.ts:49](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/types.ts#L49)

User identifier for abuse detection
