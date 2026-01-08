---
title: "Interface: CheckpointMetadata"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / CheckpointMetadata

# Interface: CheckpointMetadata

Defined in: [src/checkpoint/types.ts:202](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L202)

Metadata about a checkpoint, stored separately from the full state.

Contains lightweight information about the checkpoint for quick
retrieval without loading the complete state data.

## Remarks

Metadata is written after the checkpoint data to ensure consistency.
If a crash occurs between writing checkpoint and metadata, the
checkpoint is still valid and can be recovered.

## Properties

### agentId

> **agentId**: `string`

Defined in: [src/checkpoint/types.ts:232](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L232)

The agent instance ID that created this checkpoint.
Useful for tracking which agent configuration was used.

***

### checkpointId

> **checkpointId**: `string`

Defined in: [src/checkpoint/types.ts:214](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L214)

Unique identifier for this specific checkpoint.
Generated automatically when the checkpoint is created.
Useful for debugging and audit trails.

***

### sessionId

> **sessionId**: `string`

Defined in: [src/checkpoint/types.ts:207](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L207)

The session identifier this checkpoint belongs to.
Matches the `sessionId` parameter passed to `save()`.

***

### step

> **step**: `number`

Defined in: [src/checkpoint/types.ts:226](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L226)

The step number at which this checkpoint was taken.
Corresponds to `AgentState.step` at save time.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/checkpoint/types.ts:220](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/checkpoint/types.ts#L220)

ISO 8601 timestamp when the checkpoint was created.
Example: "2025-01-07T14:30:00.000Z"
