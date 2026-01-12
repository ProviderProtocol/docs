---
title: "Interface: XAICompletionsParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAICompletionsParams

# Interface: XAICompletionsParams

Defined in: [src/providers/xai/types.ts:20](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L20)

xAI Chat Completions API parameters (OpenAI-compatible).

These parameters are passed through to the xAI `/v1/chat/completions` endpoint.
The API is fully compatible with OpenAI's Chat Completions API, allowing seamless
migration between providers.

## Example

```typescript
const params: XAICompletionsParams = {
  max_tokens: 1000,
  temperature: 0.7,
  reasoning_effort: 'high', // Grok 3 Mini only
};
```

## See

 - [XAIResponsesParams](xairesponsesparams.md) for Responses API parameters
 - [XAIMessagesParams](xaimessagesparams.md) for Messages API parameters

## Properties

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/xai/types.ts:34](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L34)

Frequency penalty (-2.0 - 2.0)

***

### logit\_bias?

> `optional` **logit\_bias**: `Record`\<`string`, `number`\>

Defined in: [src/providers/xai/types.ts:58](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L58)

Logit bias map

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/xai/types.ts:46](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L46)

Enable logprobs

***

### max\_completion\_tokens?

> `optional` **max\_completion\_tokens**: `number`

Defined in: [src/providers/xai/types.ts:25](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L25)

Maximum completion tokens

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/xai/types.ts:22](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L22)

Maximum number of tokens to generate

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/providers/xai/types.ts:73](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L73)

Metadata key-value pairs

***

### n?

> `optional` **n**: `number`

Defined in: [src/providers/xai/types.ts:43](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L43)

Number of completions to generate

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/xai/types.ts:61](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L61)

Whether to enable parallel tool calls

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/xai/types.ts:37](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L37)

Presence penalty (-2.0 - 2.0)

***

### reasoning\_effort?

> `optional` **reasoning\_effort**: `"high"` \| `"low"`

Defined in: [src/providers/xai/types.ts:67](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L67)

Reasoning effort for Grok 3 Mini models
Note: Only 'low' and 'high' are supported by xAI

***

### response\_format?

> `optional` **response\_format**: `XAIResponseFormat`

Defined in: [src/providers/xai/types.ts:76](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L76)

Response format for structured output

***

### search\_parameters?

> `optional` **search\_parameters**: [`XAISearchParameters`](xaisearchparameters.md)

Defined in: [src/providers/xai/types.ts:82](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L82)

Live Search parameters (deprecated, will be removed Dec 15, 2025)
Use Agent Tools API instead for new implementations

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/xai/types.ts:52](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L52)

Seed for deterministic sampling

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [src/providers/xai/types.ts:40](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L40)

Custom stop sequences

***

### store?

> `optional` **store**: `boolean`

Defined in: [src/providers/xai/types.ts:70](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L70)

Store completion

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/xai/types.ts:28](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L28)

Temperature for randomness (0.0 - 2.0)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/xai/types.ts:49](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L49)

Number of top logprobs to return (0-20)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/xai/types.ts:31](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L31)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/xai/types.ts:55](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L55)

User identifier for abuse detection
