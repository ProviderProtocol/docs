---
title: "Interface: XAIModelReference"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [xai](../README.md) / XAIModelReference

# Interface: XAIModelReference

Defined in: [src/providers/xai/types.ts:218](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L218)

A reference to an xAI model with optional configuration.

## Properties

### modelId

> **modelId**: `string`

Defined in: [src/providers/xai/types.ts:220](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L220)

The xAI model identifier (e.g., 'grok-4', 'grok-3-mini')

***

### options?

> `optional` **options**: [`XAIModelOptions`](XAIModelOptions.md)

Defined in: [src/providers/xai/types.ts:222](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L222)

Optional model-specific options
