---
title: "Interface: LLMRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMRequest

# Interface: LLMRequest\<TParams\>

Defined in: [src/types/llm.ts:229](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L229)

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

Defined in: [src/types/llm.ts:249](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L249)

Provider infrastructure config (resolved by llm() core)

***

### messages

> **messages**: [`Message`](../classes/message.md)[]

Defined in: [src/types/llm.ts:231](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L231)

All messages for this request (history + new input)

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:240](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L240)

Model-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/llm.ts:252](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L252)

Abort signal for cancellation

***

### structure?

> `optional` **structure**: [`JSONSchema`](jsonschema.md)

Defined in: [src/types/llm.ts:246](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L246)

Structured output schema (if requested)

***

### system?

> `optional` **system**: `string` \| `unknown`[]

Defined in: [src/types/llm.ts:237](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L237)

System prompt - string or provider-specific array format.
Arrays are passed through directly to the provider.

***

### tools?

> `optional` **tools**: [`Tool`](tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:243](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L243)

Tools available for this request
