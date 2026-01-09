---
title: "Interface: BoundLLMModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundLLMModel

# Interface: BoundLLMModel\<TParams\>

Defined in: [src/types/llm.ts:295](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L295)

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

Defined in: [src/types/llm.ts:303](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L303)

Provider API capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/llm.ts:297](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L297)

The model identifier

***

### provider

> `readonly` **provider**: [`LLMProvider`](../type-aliases/llmprovider.md)\<`TParams`\>

Defined in: [src/types/llm.ts:300](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L300)

Reference to the parent provider

## Methods

### complete()

> **complete**(`request`): `Promise`\<[`LLMResponse`](llmresponse.md)\>

Defined in: [src/types/llm.ts:311](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L311)

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

Defined in: [src/types/llm.ts:319](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/llm.ts#L319)

Executes a single streaming inference request.

#### Parameters

##### request

[`LLMRequest`](llmrequest.md)\<`TParams`\>

The inference request

#### Returns

[`LLMStreamResult`](llmstreamresult.md)

Stream result with events and final response
