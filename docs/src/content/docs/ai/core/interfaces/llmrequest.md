---
title: "Interface: LLMRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMRequest

# Interface: LLMRequest\<TParams\>

Defined in: [src/types/llm.ts:254](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L254)

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

Defined in: [src/types/llm.ts:274](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L274)

Provider infrastructure config (resolved by llm() core)

***

### messages

> **messages**: [`Message`](../classes/message.md)[]

Defined in: [src/types/llm.ts:256](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L256)

All messages for this request (history + new input)

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:265](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L265)

Model-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/llm.ts:277](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L277)

Abort signal for cancellation

***

### structure?

> `optional` **structure**: [`JSONSchema`](jsonschema.md)

Defined in: [src/types/llm.ts:271](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L271)

Structured output schema (if requested)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/types/llm.ts:262](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L262)

System prompt - string or provider-specific array format.
Arrays are passed through directly to the provider.

***

### tools?

> `optional` **tools**: [`Tool`](tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:268](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L268)

Tools available for this request
