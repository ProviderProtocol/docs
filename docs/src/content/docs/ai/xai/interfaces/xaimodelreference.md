---
title: "Interface: XAIModelReference"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIModelReference

# Interface: XAIModelReference

Defined in: [src/providers/xai/types.ts:254](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L254)

A reference to an xAI model with optional configuration.

## Properties

### modelId

> **modelId**: `string`

Defined in: [src/providers/xai/types.ts:256](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L256)

The xAI model identifier (e.g., 'grok-4', 'grok-3-mini')

***

### options?

> `optional` **options**: [`XAIModelOptions`](xaimodeloptions.md)

Defined in: [src/providers/xai/types.ts:258](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L258)

Optional model-specific options
