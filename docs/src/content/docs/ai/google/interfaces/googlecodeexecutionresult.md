---
title: "Interface: GoogleCodeExecutionResult"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCodeExecutionResult

# Interface: GoogleCodeExecutionResult

Defined in: [src/providers/google/types.ts:823](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L823)

Code execution result in response.

## Properties

### outcome

> **outcome**: `"OUTCOME_OK"` \| `"OUTCOME_FAILED"` \| `"OUTCOME_DEADLINE_EXCEEDED"`

Defined in: [src/providers/google/types.ts:825](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L825)

Execution outcome

***

### output

> **output**: `string`

Defined in: [src/providers/google/types.ts:827](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L827)

Execution output (stdout)
