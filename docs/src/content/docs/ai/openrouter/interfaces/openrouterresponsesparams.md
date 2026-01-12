---
title: "Interface: OpenRouterResponsesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterResponsesParams

# Interface: OpenRouterResponsesParams

Defined in: [src/providers/openrouter/types.ts:158](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L158)

Parameters for OpenRouter's Responses API (beta).

These parameters are passed through to the `/api/v1/responses` endpoint.
The Responses API uses a different structure than Chat Completions and
supports features like reasoning configuration.

## See

[OpenRouter Responses API](https://openrouter.ai/docs/api-reference/responses)

## Properties

### image\_config?

> `optional` **image\_config**: `OpenRouterImageConfig`

Defined in: [src/providers/openrouter/types.ts:190](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L190)

Image generation configuration.
Only applies when `modalities` includes 'image'.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/openrouter/types.ts:160](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L160)

Maximum output tokens

***

### modalities?

> `optional` **modalities**: (`"text"` \| `"image"`)[]

Defined in: [src/providers/openrouter/types.ts:183](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L183)

Output modalities for multimodal generation.
Set to `['text', 'image']` to enable image generation with compatible models.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openrouter/types.ts:169](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L169)

Whether to enable parallel tool calls

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/openrouter/types.ts:174](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L174)

Reasoning configuration

#### effort?

> `optional` **effort**: `"high"` \| `"medium"` \| `"low"`

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openrouter/types.ts:163](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L163)

Temperature for randomness (0.0 - 2.0)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:166](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openrouter/types.ts#L166)

Top-p (nucleus) sampling (0.0 - 1.0)
