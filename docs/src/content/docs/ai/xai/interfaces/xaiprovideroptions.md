---
title: "Interface: XAIProviderOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIProviderOptions

# Interface: XAIProviderOptions

Defined in: [src/providers/xai/index.ts:21](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/xai/index.ts#L21)

Configuration options for creating xAI model references.

## Properties

### api?

> `optional` **api**: [`XAIAPIMode`](../type-aliases/xaiapimode.md)

Defined in: [src/providers/xai/index.ts:31](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/xai/index.ts#L31)

The API mode to use for this model.

- `'completions'`: Chat Completions API (OpenAI-compatible, default, recommended)
- `'responses'`: Responses API (OpenAI Responses-compatible, supports stateful conversations)
- `'messages'`: Messages API (Anthropic-compatible, for easy migration from Anthropic)

#### Default

```ts
'completions'
```
