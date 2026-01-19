---
title: "Interface: BoundLLMModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundLLMModel

# Interface: BoundLLMModel\<TParams\>

Defined in: [src/types/llm.ts:325](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L325)

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

Defined in: [src/types/llm.ts:333](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L333)

Provider API capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/llm.ts:327](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L327)

The model identifier

***

### provider

> `readonly` **provider**: [`LLMProvider`](../type-aliases/llmprovider.md)\<`TParams`\>

Defined in: [src/types/llm.ts:330](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L330)

Reference to the parent provider

## Methods

### complete()

> **complete**(`request`): `Promise`\<[`LLMResponse`](llmresponse.md)\>

Defined in: [src/types/llm.ts:341](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L341)

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

Defined in: [src/types/llm.ts:349](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L349)

Executes a single streaming inference request.

#### Parameters

##### request

[`LLMRequest`](llmrequest.md)\<`TParams`\>

The inference request

#### Returns

[`LLMStreamResult`](llmstreamresult.md)

Stream result with events and final response
