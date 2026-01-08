---
title: "Interface: LLMResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMResponse

# Interface: LLMResponse

Defined in: [src/types/llm.ts:238](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L238)

**`Internal`**

Raw provider response from a single inference cycle.

Does not include tool loop handling - that's managed by llm() core.

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/llm.ts:252](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L252)

Structured output data extracted by the provider.
Present when a structure schema was requested and successfully extracted.

***

### message

> **message**: [`AssistantMessage`](../classes/assistantmessage.md)

Defined in: [src/types/llm.ts:240](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L240)

The assistant's response message

***

### stopReason

> **stopReason**: `string`

Defined in: [src/types/llm.ts:246](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L246)

Stop reason from the provider

***

### usage

> **usage**: [`TokenUsage`](tokenusage.md)

Defined in: [src/types/llm.ts:243](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/llm.ts#L243)

Token usage for this cycle
