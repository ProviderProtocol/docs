---
title: "Interface: LLMRequest<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / LLMRequest

# Interface: LLMRequest\<TParams\>

Defined in: [src/types/llm.ts:197](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L197)

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

> **config**: [`ProviderConfig`](ProviderConfig.md)

Defined in: [src/types/llm.ts:214](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L214)

Provider infrastructure config (resolved by llm() core)

***

### messages

> **messages**: [`Message`](../classes/Message.md)[]

Defined in: [src/types/llm.ts:199](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L199)

All messages for this request (history + new input)

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/llm.ts:205](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L205)

Model-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/llm.ts:217](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L217)

Abort signal for cancellation

***

### structure?

> `optional` **structure**: [`JSONSchema`](JSONSchema.md)

Defined in: [src/types/llm.ts:211](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L211)

Structured output schema (if requested)

***

### system?

> `optional` **system**: `string`

Defined in: [src/types/llm.ts:202](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L202)

System prompt

***

### tools?

> `optional` **tools**: [`Tool`](Tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/types/llm.ts:208](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L208)

Tools available for this request
