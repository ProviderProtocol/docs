---
title: "Class: ThreadNode"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [thread-tree](../index.md) / ThreadNode

# Class: ThreadNode

Defined in: [src/thread-tree/index.ts:36](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L36)

A node in the thread tree representing a conversation state snapshot.

Each ThreadNode captures a complete snapshot of the agent state at a specific
point in the conversation. Nodes form a tree structure where each node can
have multiple children, enabling branching conversations and exploration
of alternative dialogue paths.

## Remarks

Nodes store full state copies rather than deltas, which simplifies branch
switching at the cost of increased memory usage. This design choice makes
checkout operations O(1) rather than requiring path reconstruction.

## See

ThreadTree - The container class that manages collections of nodes

## Example

```typescript
// Create a node manually (typically done via ThreadTree.branch())
const node = new ThreadNode(
  generateUUID(),
  parentNodeId,
  currentAgentState,
  'experiment-1'
);

// Access node properties
console.log(node.id);        // UUIDv4 identifier
console.log(node.parentId);  // Parent's ID or null for root
console.log(node.children);  // Array of child node IDs
```

## Constructors

### Constructor

> **new ThreadNode**(`id`, `parentId`, `state`, `name?`, `children?`): `ThreadNode`

Defined in: [src/thread-tree/index.ts:74](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L74)

Creates a new ThreadNode instance.

#### Parameters

##### id

`string`

Unique identifier for this node (typically a UUIDv4)

##### parentId

ID of the parent node, or null for root nodes

`string` | `null`

##### state

[`AgentState`](../../core/classes/agentstate.md)

The agent state snapshot to store at this node

##### name?

`string`

Optional human-readable name for the branch

##### children?

`string`[] = `[]`

Array of child node IDs (defaults to empty array)

#### Returns

`ThreadNode`

## Properties

### children

> `readonly` **children**: `string`[]

Defined in: [src/thread-tree/index.ts:63](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L63)

IDs of all child nodes branching from this node.
Modified when new branches are created via ThreadTree.branch().

***

### id

> `readonly` **id**: `string`

Defined in: [src/thread-tree/index.ts:40](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L40)

Unique identifier for this node (UUIDv4 format).

***

### name?

> `optional` **name**: `string`

Defined in: [src/thread-tree/index.ts:57](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L57)

Optional human-readable name for this branch.
Useful for identifying specific conversation paths.

***

### parentId

> `readonly` **parentId**: `string` \| `null`

Defined in: [src/thread-tree/index.ts:45](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L45)

ID of the parent node, or null if this is the root node.

***

### state

> **state**: [`AgentState`](../../core/classes/agentstate.md)

Defined in: [src/thread-tree/index.ts:51](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L51)

Complete agent state snapshot at this point in the conversation.
This is mutable to allow state updates on the current node.

## Methods

### toJSON()

> **toJSON**(): [`ThreadNodeJSON`](../../core/interfaces/threadnodejson.md)

Defined in: [src/thread-tree/index.ts:99](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L99)

Serializes this node to a JSON-compatible object.

#### Returns

[`ThreadNodeJSON`](../../core/interfaces/threadnodejson.md)

A plain object representation suitable for JSON.stringify()

#### Example

```typescript
const json = node.toJSON();
const serialized = JSON.stringify(json);
```

***

### fromJSON()

> `static` **fromJSON**(`json`): `ThreadNode`

Defined in: [src/thread-tree/index.ts:121](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/thread-tree/index.ts#L121)

Deserializes a ThreadNode from a JSON object.

#### Parameters

##### json

[`ThreadNodeJSON`](../../core/interfaces/threadnodejson.md)

The serialized node data

#### Returns

`ThreadNode`

A new ThreadNode instance with the restored data

#### Example

```typescript
const json = JSON.parse(savedData) as ThreadNodeJSON;
const node = ThreadNode.fromJSON(json);
```
