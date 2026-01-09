---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:435](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L435)

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
