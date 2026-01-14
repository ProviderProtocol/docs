---
title: "Interface: OpenRouterResponsesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterResponsesParams

# Interface: OpenRouterResponsesParams

Defined in: [src/providers/openrouter/types.ts:223](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L223)

Parameters for OpenRouter's Responses API (beta).

These parameters are passed through to the `/api/v1/responses` endpoint.
The Responses API uses a different structure than Chat Completions and
supports features like reasoning configuration.

## See

[OpenRouter Responses API](https://openrouter.ai/docs/api-reference/responses)

## Properties

### image\_config?

> `optional` **image\_config**: [`OpenRouterImageConfig`](openrouterimageconfig.md)

Defined in: [src/providers/openrouter/types.ts:255](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L255)

Image generation configuration.
Only applies when `modalities` includes 'image'.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/openrouter/types.ts:225](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L225)

Maximum output tokens

***

### modalities?

> `optional` **modalities**: (`"text"` \| `"image"`)[]

Defined in: [src/providers/openrouter/types.ts:248](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L248)

Output modalities for multimodal generation.
Set to `['text', 'image']` to enable image generation with compatible models.

#### See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openrouter/types.ts:234](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L234)

Whether to enable parallel tool calls

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/openrouter/types.ts:239](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L239)

Reasoning configuration

#### effort?

> `optional` **effort**: `"low"` \| `"medium"` \| `"high"`

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openrouter/types.ts:228](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L228)

Temperature for randomness (0.0 - 2.0)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:231](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L231)

Top-p (nucleus) sampling (0.0 - 1.0)
