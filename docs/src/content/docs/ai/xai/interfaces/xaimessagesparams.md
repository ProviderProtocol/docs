---
title: "Interface: XAIMessagesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIMessagesParams

# Interface: XAIMessagesParams

Defined in: [src/providers/xai/types.ts:169](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L169)

xAI Messages API parameters (Anthropic-compatible).

These parameters are passed through to the xAI `/v1/messages` endpoint.
The API is compatible with Anthropic's Messages API, allowing developers
migrating from Anthropic to use familiar patterns.

## Example

```typescript
const params: XAIMessagesParams = {
  max_tokens: 1000,
  temperature: 0.7,
  thinking: { type: 'enabled', budget_tokens: 500 }, // Extended thinking
};
```

## See

 - [XAICompletionsParams](xaicompletionsparams.md) for Chat Completions API parameters
 - [XAIResponsesParams](xairesponsesparams.md) for Responses API parameters

## Properties

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/xai/types.ts:171](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L171)

Maximum number of tokens to generate

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/providers/xai/types.ts:186](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L186)

Metadata for the request

#### user\_id?

> `optional` **user\_id**: `string`

***

### stop\_sequences?

> `optional` **stop\_sequences**: `string`[]

Defined in: [src/providers/xai/types.ts:183](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L183)

Custom stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/xai/types.ts:174](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L174)

Temperature for randomness (0.0 - 1.0)

***

### thinking?

> `optional` **thinking**: `object`

Defined in: [src/providers/xai/types.ts:191](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L191)

Extended thinking configuration

#### budget\_tokens

> **budget\_tokens**: `number`

#### type

> **type**: `"enabled"`

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/xai/types.ts:180](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L180)

Top-k sampling

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/xai/types.ts:177](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/xai/types.ts#L177)

Top-p (nucleus) sampling (0.0 - 1.0)
