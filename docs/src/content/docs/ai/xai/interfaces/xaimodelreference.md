---
title: "Interface: XAIModelReference"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIModelReference

# Interface: XAIModelReference

Defined in: [src/providers/xai/types.ts:251](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L251)

A reference to an xAI model with optional configuration.

## Properties

### modelId

> **modelId**: `string`

Defined in: [src/providers/xai/types.ts:253](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L253)

The xAI model identifier (e.g., 'grok-4', 'grok-3-mini')

***

### options?

> `optional` **options**: [`XAIModelOptions`](xaimodeloptions.md)

Defined in: [src/providers/xai/types.ts:255](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L255)

Optional model-specific options
