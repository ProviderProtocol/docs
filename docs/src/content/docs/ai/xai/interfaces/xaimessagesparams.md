---
title: "Interface: XAIMessagesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIMessagesParams

# Interface: XAIMessagesParams

Defined in: [src/providers/xai/types.ts:205](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L205)

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

Defined in: [src/providers/xai/types.ts:207](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L207)

Maximum number of tokens to generate

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/providers/xai/types.ts:222](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L222)

Metadata for the request

#### user\_id?

> `optional` **user\_id**: `string`

***

### stop\_sequences?

> `optional` **stop\_sequences**: `string`[]

Defined in: [src/providers/xai/types.ts:219](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L219)

Custom stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/xai/types.ts:210](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L210)

Temperature for randomness (0.0 - 1.0)

***

### thinking?

> `optional` **thinking**: `object`

Defined in: [src/providers/xai/types.ts:227](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L227)

Extended thinking configuration

#### budget\_tokens

> **budget\_tokens**: `number`

#### type

> **type**: `"enabled"`

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/xai/types.ts:216](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L216)

Top-k sampling

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/xai/types.ts:213](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/xai/types.ts#L213)

Top-p (nucleus) sampling (0.0 - 1.0)
