---
title: "Interface: ThreadTreeJSON"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ThreadTreeJSON

# Interface: ThreadTreeJSON

Defined in: [src/thread-tree/types.ts:63](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L63)

Serialized representation of a ThreadTree for JSON persistence.

This interface defines the complete JSON structure of a thread tree,
including all nodes and tracking information for the root and current
active position within the tree.

## See

ThreadTree - The runtime class this interface serializes

## Example

```typescript
// Saving a thread tree to storage
const json: ThreadTreeJSON = tree.toJSON();
await Bun.write('conversation.json', JSON.stringify(json));

// Restoring from storage
const data = await Bun.file('conversation.json').json();
const restored = ThreadTree.fromJSON(data as ThreadTreeJSON);
```

## Properties

### currentId

> **currentId**: `string`

Defined in: [src/thread-tree/types.ts:74](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L74)

ID of the currently active node.
This tracks which branch/position is currently being used for the conversation.

***

### nodes

> **nodes**: [`ThreadNodeJSON`](threadnodejson.md)[]

Defined in: [src/thread-tree/types.ts:80](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L80)

Array of all nodes in the tree.
Includes the root, all branches, and all leaf nodes.

***

### rootId

> **rootId**: `string`

Defined in: [src/thread-tree/types.ts:68](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/types.ts#L68)

ID of the root node in the tree.
The root represents the initial conversation state.
