---
title: "Interface: LLMResponse"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / LLMResponse

# Interface: LLMResponse

Defined in: [src/types/llm.ts:227](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L227)

**`Internal`**

Raw provider response from a single inference cycle.

Does not include tool loop handling - that's managed by llm() core.

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/llm.ts:241](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L241)

Structured output data extracted by the provider.
Present when a structure schema was requested and successfully extracted.

***

### message

> **message**: [`AssistantMessage`](../classes/AssistantMessage.md)

Defined in: [src/types/llm.ts:229](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L229)

The assistant's response message

***

### stopReason

> **stopReason**: `string`

Defined in: [src/types/llm.ts:235](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L235)

Stop reason from the provider

***

### usage

> **usage**: [`TokenUsage`](TokenUsage.md)

Defined in: [src/types/llm.ts:232](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L232)

Token usage for this cycle
