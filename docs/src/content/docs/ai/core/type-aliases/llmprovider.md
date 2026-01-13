---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:455](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L455)

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
