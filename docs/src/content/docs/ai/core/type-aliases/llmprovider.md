---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:455](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L455)

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
