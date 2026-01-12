---
title: "Interface: BoundLLMModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundLLMModel

# Interface: BoundLLMModel\<TParams\>

Defined in: [src/types/llm.ts:300](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L300)

Bound LLM model - full definition.

Represents a model bound to a specific provider and model ID,
ready to execute inference requests.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### capabilities

> `readonly` **capabilities**: [`LLMCapabilities`](llmcapabilities.md)

Defined in: [src/types/llm.ts:308](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L308)

Provider API capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/llm.ts:302](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L302)

The model identifier

***

### provider

> `readonly` **provider**: [`LLMProvider`](../type-aliases/llmprovider.md)\<`TParams`\>

Defined in: [src/types/llm.ts:305](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L305)

Reference to the parent provider

## Methods

### complete()

> **complete**(`request`): `Promise`\<[`LLMResponse`](llmresponse.md)\>

Defined in: [src/types/llm.ts:316](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L316)

Executes a single non-streaming inference request.

#### Parameters

##### request

[`LLMRequest`](llmrequest.md)\<`TParams`\>

The inference request

#### Returns

`Promise`\<[`LLMResponse`](llmresponse.md)\>

Promise resolving to the response

***

### stream()

> **stream**(`request`): [`LLMStreamResult`](llmstreamresult.md)

Defined in: [src/types/llm.ts:324](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L324)

Executes a single streaming inference request.

#### Parameters

##### request

[`LLMRequest`](llmrequest.md)\<`TParams`\>

The inference request

#### Returns

[`LLMStreamResult`](llmstreamresult.md)

Stream result with events and final response
