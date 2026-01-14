---
title: "Interface: BoundLLMModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundLLMModel

# Interface: BoundLLMModel\<TParams\>

Defined in: [src/types/llm.ts:305](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L305)

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

Defined in: [src/types/llm.ts:313](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L313)

Provider API capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/llm.ts:307](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L307)

The model identifier

***

### provider

> `readonly` **provider**: [`LLMProvider`](../type-aliases/llmprovider.md)\<`TParams`\>

Defined in: [src/types/llm.ts:310](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L310)

Reference to the parent provider

## Methods

### complete()

> **complete**(`request`): `Promise`\<[`LLMResponse`](llmresponse.md)\>

Defined in: [src/types/llm.ts:321](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L321)

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

Defined in: [src/types/llm.ts:329](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L329)

Executes a single streaming inference request.

#### Parameters

##### request

[`LLMRequest`](llmrequest.md)\<`TParams`\>

The inference request

#### Returns

[`LLMStreamResult`](llmstreamresult.md)

Stream result with events and final response
