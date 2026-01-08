---
title: "Interface: XAIModelReference"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIModelReference

# Interface: XAIModelReference

Defined in: [src/providers/xai/types.ts:218](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/xai/types.ts#L218)

A reference to an xAI model with optional configuration.

## Properties

### modelId

> **modelId**: `string`

Defined in: [src/providers/xai/types.ts:220](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/xai/types.ts#L220)

The xAI model identifier (e.g., 'grok-4', 'grok-3-mini')

***

### options?

> `optional` **options**: [`XAIModelOptions`](xaimodeloptions.md)

Defined in: [src/providers/xai/types.ts:222](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/xai/types.ts#L222)

Optional model-specific options
