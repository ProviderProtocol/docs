---
title: "Interface: LLMResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMResponse

# Interface: LLMResponse

Defined in: [src/types/llm.ts:287](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L287)

**`Internal`**

Raw provider response from a single inference cycle.

Does not include tool loop handling - that's managed by llm() core.

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/llm.ts:301](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L301)

Structured output data extracted by the provider.
Present when a structure schema was requested and successfully extracted.

***

### message

> **message**: [`AssistantMessage`](../classes/assistantmessage.md)

Defined in: [src/types/llm.ts:289](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L289)

The assistant's response message

***

### stopReason

> **stopReason**: `string`

Defined in: [src/types/llm.ts:295](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L295)

Stop reason from the provider

***

### usage

> **usage**: [`TokenUsage`](tokenusage.md)

Defined in: [src/types/llm.ts:292](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/llm.ts#L292)

Token usage for this cycle
