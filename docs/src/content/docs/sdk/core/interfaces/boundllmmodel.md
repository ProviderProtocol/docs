---
title: "Interface: BoundLLMModel<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / BoundLLMModel

# Interface: BoundLLMModel\<TParams\>

Defined in: [src/types/llm.ts:265](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L265)

Bound LLM model - full definition.

Represents a model bound to a specific provider and model ID,
ready to execute inference requests.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### capabilities

> `readonly` **capabilities**: [`LLMCapabilities`](LLMCapabilities.md)

Defined in: [src/types/llm.ts:273](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L273)

Provider API capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/llm.ts:267](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L267)

The model identifier

***

### provider

> `readonly` **provider**: [`LLMProvider`](../type-aliases/LLMProvider.md)\<`TParams`\>

Defined in: [src/types/llm.ts:270](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L270)

Reference to the parent provider

## Methods

### complete()

> **complete**(`request`): `Promise`\<[`LLMResponse`](LLMResponse.md)\>

Defined in: [src/types/llm.ts:281](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L281)

Executes a single non-streaming inference request.

#### Parameters

##### request

[`LLMRequest`](LLMRequest.md)\<`TParams`\>

The inference request

#### Returns

`Promise`\<[`LLMResponse`](LLMResponse.md)\>

Promise resolving to the response

***

### stream()

> **stream**(`request`): [`LLMStreamResult`](LLMStreamResult.md)

Defined in: [src/types/llm.ts:289](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L289)

Executes a single streaming inference request.

#### Parameters

##### request

[`LLMRequest`](LLMRequest.md)\<`TParams`\>

The inference request

#### Returns

[`LLMStreamResult`](LLMStreamResult.md)

Stream result with events and final response
