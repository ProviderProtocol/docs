---
title: "Interface: LLMResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMResponse

# Interface: LLMResponse

Defined in: [src/types/llm.ts:264](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L264)

**`Internal`**

Raw provider response from a single inference cycle.

Does not include tool loop handling - that's managed by llm() core.

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/llm.ts:278](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L278)

Structured output data extracted by the provider.
Present when a structure schema was requested and successfully extracted.

***

### message

> **message**: [`AssistantMessage`](../classes/assistantmessage.md)

Defined in: [src/types/llm.ts:266](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L266)

The assistant's response message

***

### stopReason

> **stopReason**: `string`

Defined in: [src/types/llm.ts:272](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L272)

Stop reason from the provider

***

### usage

> **usage**: [`TokenUsage`](tokenusage.md)

Defined in: [src/types/llm.ts:269](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/llm.ts#L269)

Token usage for this cycle
