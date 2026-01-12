---
title: "Interface: LLMResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMResponse

# Interface: LLMResponse

Defined in: [src/types/llm.ts:262](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L262)

**`Internal`**

Raw provider response from a single inference cycle.

Does not include tool loop handling - that's managed by llm() core.

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/llm.ts:276](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L276)

Structured output data extracted by the provider.
Present when a structure schema was requested and successfully extracted.

***

### message

> **message**: [`AssistantMessage`](../classes/assistantmessage.md)

Defined in: [src/types/llm.ts:264](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L264)

The assistant's response message

***

### stopReason

> **stopReason**: `string`

Defined in: [src/types/llm.ts:270](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L270)

Stop reason from the provider

***

### usage

> **usage**: [`TokenUsage`](tokenusage.md)

Defined in: [src/types/llm.ts:267](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L267)

Token usage for this cycle
