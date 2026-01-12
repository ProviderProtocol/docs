---
title: "Interface: GoogleCodeExecutionResult"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCodeExecutionResult

# Interface: GoogleCodeExecutionResult

Defined in: [src/providers/google/types.ts:743](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L743)

Code execution result in response.

## Properties

### outcome

> **outcome**: `"OUTCOME_OK"` \| `"OUTCOME_FAILED"` \| `"OUTCOME_DEADLINE_EXCEEDED"`

Defined in: [src/providers/google/types.ts:745](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L745)

Execution outcome

***

### output

> **output**: `string`

Defined in: [src/providers/google/types.ts:747](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L747)

Execution output (stdout)
