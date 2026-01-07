---
title: "Interface: OpenRouterResponsesParams"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openrouter](../README.md) / OpenRouterResponsesParams

# Interface: OpenRouterResponsesParams

Defined in: [src/providers/openrouter/types.ts:121](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L121)

Parameters for OpenRouter's Responses API (beta).

These parameters are passed through to the `/api/v1/responses` endpoint.
The Responses API uses a different structure than Chat Completions and
supports features like reasoning configuration.

## See

[OpenRouter Responses API](https://openrouter.ai/docs/api-reference/responses)

## Properties

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/openrouter/types.ts:123](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L123)

Maximum output tokens

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openrouter/types.ts:132](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L132)

Whether to enable parallel tool calls

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/openrouter/types.ts:137](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L137)

Reasoning configuration

#### effort?

> `optional` **effort**: `"high"` \| `"medium"` \| `"low"`

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openrouter/types.ts:126](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L126)

Temperature for randomness (0.0 - 2.0)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openrouter/types.ts:129](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openrouter/types.ts#L129)

Top-p (nucleus) sampling (0.0 - 1.0)
