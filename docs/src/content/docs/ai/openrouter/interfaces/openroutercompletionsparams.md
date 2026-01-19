---
title: "Interface: OpenRouterCompletionsParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterCompletionsParams

# Interface: OpenRouterCompletionsParams

Defined in: [src/providers/openrouter/types.ts:65](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L65)

Parameters for OpenRouter's Chat Completions API.

These parameters are passed through to the `/api/v1/chat/completions` endpoint.
Includes standard OpenAI-compatible parameters plus OpenRouter-specific features
like model routing and provider preferences.

## See

[OpenRouter Chat Completions API](https://openrouter.ai/docs/api-reference/chat-completions)

## Properties

### debug?

> `optional` **debug**: `object`

Defined in: [src/providers/openrouter/types.ts:165](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L165)

Debug options (streaming only)

#### echo\_upstream\_body?

> `optional` **echo\_upstream\_body**: `boolean`

If true, returns the transformed request body sent to the provider

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:79](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L79)

Frequency penalty (-2.0 - 2.0)

***

### image\_config?

> `optional` **image\_config**: [`OpenRouterImageConfig`](openrouterimageconfig.md)

Defined in: [src/providers/openrouter/types.ts:129](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L129)

Image generation configuration for Gemini models.
Only applies when `modalities` includes 'image'.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### ~~include\_reasoning?~~

> `optional` **include\_reasoning**: `boolean`

Defined in: [src/providers/openrouter/types.ts:188](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L188)

Legacy reasoning toggle (use `reasoning` instead).

- `true`: Equivalent to `reasoning: {}`
- `false`: Equivalent to `reasoning: { exclude: true }`

#### Deprecated

Use `reasoning` parameter instead

***

### logit\_bias?

> `optional` **logit\_bias**: `Record`\<`number`, `number`\>

Defined in: [src/providers/openrouter/types.ts:103](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L103)

Logit bias map

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/openrouter/types.ts:97](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L97)

Enable logprobs

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/openrouter/types.ts:67](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L67)

Maximum number of tokens to generate

***

### min\_p?

> `optional` **min\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:106](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L106)

Minimum probability threshold (0.0 - 1.0)

***

### modalities?

> `optional` **modalities**: (`"text"` \| `"image"`)[]

Defined in: [src/providers/openrouter/types.ts:122](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L122)

Output modalities for multimodal generation.
Set to `['text', 'image']` to enable image generation with compatible models.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### models?

> `optional` **models**: `string`[]

Defined in: [src/providers/openrouter/types.ts:141](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L141)

Multiple models for routing
See: https://openrouter.ai/docs/guides/features/model-routing

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openrouter/types.ts:112](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L112)

Whether to enable parallel tool calls

***

### prediction?

> `optional` **prediction**: `object`

Defined in: [src/providers/openrouter/types.ts:157](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L157)

Predicted output for latency optimization

#### content

> **content**: `string`

#### type

> **type**: `"content"`

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:82](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L82)

Presence penalty (-2.0 - 2.0)

***

### provider?

> `optional` **provider**: [`OpenRouterProviderPreferences`](openrouterproviderpreferences.md)

Defined in: [src/providers/openrouter/types.ts:152](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L152)

Provider routing preferences
See: https://openrouter.ai/docs/guides/routing/provider-selection

***

### reasoning?

> `optional` **reasoning**: `OpenRouterReasoningConfig`

Defined in: [src/providers/openrouter/types.ts:178](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L178)

Reasoning configuration for thinking models.

Controls how much reasoning effort the model uses and whether to include
reasoning tokens in the response.

#### See

[https://openrouter.ai/docs/guides/best-practices/reasoning-tokens](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

***

### repetition\_penalty?

> `optional` **repetition\_penalty**: `number`

Defined in: [src/providers/openrouter/types.ts:85](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L85)

Repetition penalty (0.0 - 2.0)

***

### response\_format?

> `optional` **response\_format**: `OpenRouterResponseFormat`

Defined in: [src/providers/openrouter/types.ts:115](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L115)

Response format for structured output

***

### route?

> `optional` **route**: `"fallback"`

Defined in: [src/providers/openrouter/types.ts:146](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L146)

Routing strategy (e.g., 'fallback')

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/openrouter/types.ts:91](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L91)

Seed for deterministic sampling

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [src/providers/openrouter/types.ts:88](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L88)

Custom stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openrouter/types.ts:70](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L70)

Temperature for randomness (0.0 - 2.0)

***

### top\_a?

> `optional` **top\_a**: `number`

Defined in: [src/providers/openrouter/types.ts:109](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L109)

Top-a sampling threshold (0.0 - 1.0)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/openrouter/types.ts:76](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L76)

Top-k sampling (not available for OpenAI models)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/openrouter/types.ts:100](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L100)

Number of top logprobs to return

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:73](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L73)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### transforms?

> `optional` **transforms**: `string`[]

Defined in: [src/providers/openrouter/types.ts:135](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L135)

Prompt transforms to apply
See: https://openrouter.ai/docs/guides/features/message-transforms

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openrouter/types.ts:94](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openrouter/types.ts#L94)

User identifier for abuse detection
