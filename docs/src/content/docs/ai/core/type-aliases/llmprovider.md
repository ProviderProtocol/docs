---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:370](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L370)

Provider with LLM modality support.

Type alias for providers that support language model inference.

## Type Declaration

### modalities

> `readonly` **modalities**: `object`

#### modalities.llm

> **llm**: `LLMHandler`\<`TParams`\>

## Type Parameters

### TParams

`TParams` = `any`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type
