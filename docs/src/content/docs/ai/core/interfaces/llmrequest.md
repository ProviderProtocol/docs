---
title: "Interface: LLMRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMRequest

# Interface: LLMRequest\<TParams\>

Defined in: [src/types/llm.ts:231](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L231)

**`Internal`**

Request passed from the llm() core to providers.

Contains all information needed by a provider to execute inference.
The config is required here because llm() resolves defaults before
passing to providers.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/llm.ts:251](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L251)

Provider infrastructure config (resolved by llm() core)

***

### messages

> **messages**: [`Message`](../classes/message.md)[]

Defined in: [src/types/llm.ts:233](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L233)

All messages for this request (history + new input)

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:242](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L242)

Model-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/llm.ts:254](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L254)

Abort signal for cancellation

***

### structure?

> `optional` **structure**: [`JSONSchema`](jsonschema.md)

Defined in: [src/types/llm.ts:248](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L248)

Structured output schema (if requested)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/types/llm.ts:239](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L239)

System prompt - string or provider-specific array format.
Arrays are passed through directly to the provider.

***

### tools?

> `optional` **tools**: [`Tool`](tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:245](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/llm.ts#L245)

Tools available for this request
