---
title: "Interface: XAIMessagesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIMessagesParams

# Interface: XAIMessagesParams

Defined in: [src/providers/xai/types.ts:193](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L193)

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

Defined in: [src/providers/xai/types.ts:195](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L195)

Maximum number of tokens to generate

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/providers/xai/types.ts:210](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L210)

Metadata for the request

#### user\_id?

> `optional` **user\_id**: `string`

***

### stop\_sequences?

> `optional` **stop\_sequences**: `string`[]

Defined in: [src/providers/xai/types.ts:207](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L207)

Custom stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/xai/types.ts:198](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L198)

Temperature for randomness (0.0 - 1.0)

***

### thinking?

> `optional` **thinking**: `object`

Defined in: [src/providers/xai/types.ts:215](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L215)

Extended thinking configuration

#### budget\_tokens

> **budget\_tokens**: `number`

#### type

> **type**: `"enabled"`

***

### tool\_choice?

> `optional` **tool\_choice**: `object`

Defined in: [src/providers/xai/types.ts:227](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L227)

Tool selection strategy.

- `auto`: Model decides when to use tools
- `any`: Model must use at least one tool
- `tool`: Model must use the specific tool named in `name`

#### name?

> `optional` **name**: `string`

#### type

> **type**: `"auto"` \| `"tool"` \| `"any"`

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/xai/types.ts:204](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L204)

Top-k sampling

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/xai/types.ts:201](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L201)

Top-p (nucleus) sampling (0.0 - 1.0)
