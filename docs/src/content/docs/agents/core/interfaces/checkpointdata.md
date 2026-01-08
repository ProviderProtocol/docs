---
title: "Interface: CheckpointData"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / CheckpointData

# Interface: CheckpointData

Defined in: [src/checkpoint/types.ts:247](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L247)

Complete checkpoint data combining metadata and state.

Represents the full checkpoint as stored, including both the
serialized agent state and its associated metadata.

## Remarks

This type is primarily used internally by checkpoint store
implementations. Most consumers will use `CheckpointStore.load()`
which returns only the state, and `CheckpointStore.loadMetadata()`
which returns only the metadata.

## Properties

### metadata

> **metadata**: [`CheckpointMetadata`](checkpointmetadata.md)

Defined in: [src/checkpoint/types.ts:251](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L251)

Checkpoint metadata containing session info and timestamps.

***

### state

> **state**: [`AgentStateJSON`](agentstatejson.md)

Defined in: [src/checkpoint/types.ts:257](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L257)

The serialized agent state that can be restored via
`AgentState.fromJSON()`.
