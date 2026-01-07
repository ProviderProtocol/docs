---
title: "Interface: XAIProviderOptions"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [xai](../README.md) / XAIProviderOptions

# Interface: XAIProviderOptions

Defined in: [src/providers/xai/index.ts:21](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L21)

Configuration options for creating xAI model references.

## Properties

### api?

> `optional` **api**: [`XAIAPIMode`](../type-aliases/XAIAPIMode.md)

Defined in: [src/providers/xai/index.ts:31](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L31)

The API mode to use for this model.

- `'completions'`: Chat Completions API (OpenAI-compatible, default, recommended)
- `'responses'`: Responses API (OpenAI Responses-compatible, supports stateful conversations)
- `'messages'`: Messages API (Anthropic-compatible, for easy migration from Anthropic)

#### Default

```ts
'completions'
```
