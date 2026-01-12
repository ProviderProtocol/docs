---
title: "Interface: XAIProviderOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIProviderOptions

# Interface: XAIProviderOptions

Defined in: [src/providers/xai/index.ts:23](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/index.ts#L23)

Configuration options for creating xAI model references.

## Properties

### api?

> `optional` **api**: [`XAIAPIMode`](../type-aliases/xaiapimode.md)

Defined in: [src/providers/xai/index.ts:33](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/index.ts#L33)

The API mode to use for this model.

- `'completions'`: Chat Completions API (OpenAI-compatible, default, recommended)
- `'responses'`: Responses API (OpenAI Responses-compatible, supports stateful conversations)
- `'messages'`: Messages API (Anthropic-compatible, for easy migration from Anthropic)

#### Default

```ts
'completions'
```
