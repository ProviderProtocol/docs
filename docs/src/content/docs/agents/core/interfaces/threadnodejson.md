---
title: "Interface: ThreadNodeJSON"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ThreadNodeJSON

# Interface: ThreadNodeJSON

Defined in: [src/thread-tree/types.ts:13](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L13)

Serialized representation of a ThreadNode for JSON persistence.

This interface defines the JSON structure used when serializing a ThreadNode
for storage or transmission. It captures all node data including the full
agent state snapshot at that point in the conversation tree.

## See

 - ThreadNode - The runtime class this interface serializes
 - ThreadTreeJSON - The parent tree structure containing these nodes

## Properties

### children

> **children**: `string`[]

Defined in: [src/thread-tree/types.ts:40](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L40)

IDs of all child nodes branching from this node.
An empty array indicates this is a leaf node.

***

### id

> **id**: `string`

Defined in: [src/thread-tree/types.ts:17](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L17)

Unique identifier for this node (UUIDv4 format).

***

### name?

> `optional` **name**: `string`

Defined in: [src/thread-tree/types.ts:34](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L34)

Optional human-readable name for this branch.
Useful for identifying specific conversation paths (e.g., "refactor-attempt", "alternative-solution").

***

### parentId

> **parentId**: `string` \| `null`

Defined in: [src/thread-tree/types.ts:22](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L22)

ID of the parent node, or null if this is the root node.

***

### state

> **state**: [`AgentStateJSON`](agentstatejson.md)

Defined in: [src/thread-tree/types.ts:28](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L28)

Complete agent state snapshot at this point in the conversation.
Contains messages, metadata, and all other state information.
