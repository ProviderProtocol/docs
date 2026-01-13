---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:455](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/provider.ts#L455)

Provider with LLM modality support.

Type alias for providers that support language model inference.

## Type Declaration

### \_\_params?

> `readonly` `optional` **\_\_params**: `TParams`

**`Internal`**

## Type Parameters

### TParams

`TParams` = `unknown`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type
