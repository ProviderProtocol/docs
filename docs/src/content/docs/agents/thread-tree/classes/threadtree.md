---
title: "Class: ThreadTree"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [thread-tree](../index.md) / ThreadTree

# Class: ThreadTree

Defined in: [src/thread-tree/index.ts:172](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L172)

A tree-structured collection of conversation threads with branching support.

ThreadTree provides a git-like branching model for conversations, where each
node represents a snapshot of the conversation state. Users can create branches
to explore alternative conversation paths, switch between branches, and maintain
multiple concurrent conversation histories.

## Remarks

Key concepts:
- **Root**: The initial node created when the tree is instantiated
- **Current**: The active node where new state updates are applied
- **Branch**: Creating a new child node from any existing node
- **Checkout**: Switching the active node to a different position in the tree

The tree automatically manages node relationships and provides efficient
lookup via an internal Map structure.

## See

ThreadNode - The node class used within the tree

## Example

```typescript
// Create a new thread tree
const tree = new ThreadTree();

// Work with the current state
const state = tree.history();

// Create a branch for experimentation
const branchId = tree.branch(tree.current.id, 'experiment');
tree.checkout(branchId);

// Switch back to the original branch
tree.checkout(tree.root.id);

// Persist and restore
const json = tree.toJSON();
const restored = ThreadTree.fromJSON(json);
```

## Constructors

### Constructor

> **new ThreadTree**(`root?`): `ThreadTree`

Defined in: [src/thread-tree/index.ts:210](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L210)

Creates a new ThreadTree instance.

If no root node is provided, creates a fresh tree with a new root node
containing an initial (empty) agent state.

#### Parameters

##### root?

[`ThreadNode`](threadnode.md)

Optional existing root node to use. If omitted, a new root
              with initial state is created automatically.

#### Returns

`ThreadTree`

#### Example

```typescript
// Create a fresh tree
const tree = new ThreadTree();

// Create from an existing root (used by fromJSON)
const existingRoot = new ThreadNode(id, null, state, 'root');
const tree = new ThreadTree(existingRoot);
```

## Properties

### nodes

> `readonly` **nodes**: `Map`\<`string`, [`ThreadNode`](threadnode.md)\>

Defined in: [src/thread-tree/index.ts:189](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L189)

Map of all nodes in the tree, keyed by node ID.
Provides O(1) lookup for branch and checkout operations.

***

### root

> `readonly` **root**: [`ThreadNode`](threadnode.md)

Defined in: [src/thread-tree/index.ts:177](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L177)

The root node of the tree, representing the initial conversation state.
This node has no parent (parentId is null).

## Accessors

### current

#### Get Signature

> **get** **current**(): [`ThreadNode`](threadnode.md)

Defined in: [src/thread-tree/index.ts:242](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L242)

Gets the currently active node in the tree.

The current node is where state updates are applied and serves as the
default parent for new branches.

##### Example

```typescript
const currentState = tree.current.state;
const currentId = tree.current.id;
```

##### Returns

[`ThreadNode`](threadnode.md)

The currently active ThreadNode

## Methods

### branch()

> **branch**(`fromId`, `name?`): `string`

Defined in: [src/thread-tree/index.ts:274](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L274)

Creates a new branch from an existing node.

The new node inherits a copy of the parent node's state and is automatically
registered in the tree. The parent's children array is updated to include
the new node.

#### Parameters

##### fromId

`string`

ID of the node to branch from

##### name?

`string`

Optional human-readable name for the new branch

#### Returns

`string`

The ID of the newly created node

#### Throws

Error if the specified parent node does not exist

#### Remarks

This method does not automatically checkout the new branch. Call
[checkout](#checkout) with the returned ID to switch to the new branch.

#### Example

```typescript
// Create a named branch from current position
const branchId = tree.branch(tree.current.id, 'try-different-approach');

// Switch to the new branch
tree.checkout(branchId);

// Create an unnamed branch from root
const altBranchId = tree.branch(tree.root.id);
```

***

### checkout()

> **checkout**(`nodeId`): `void`

Defined in: [src/thread-tree/index.ts:315](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L315)

Switches the active node to a different position in the tree.

After checkout, the tree's current property will point to the specified
node, and subsequent state operations will apply to that node.

#### Parameters

##### nodeId

`string`

ID of the node to switch to

#### Returns

`void`

#### Throws

Error if the specified node does not exist

#### Example

```typescript
// Switch to a specific branch
tree.checkout(branchId);

// Switch back to root
tree.checkout(tree.root.id);

// Switch to a leaf node
const leaves = tree.getLeaves();
tree.checkout(leaves[0]);
```

***

### getBranches()

> **getBranches**(): `Map`\<`string`, `string` \| `undefined`\>

Defined in: [src/thread-tree/index.ts:395](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L395)

Gets all named branches in the tree.

Returns a map of node IDs to their branch names for nodes that have
been given explicit names. Useful for displaying a list of available
branches to users.

#### Returns

`Map`\<`string`, `string` \| `undefined`\>

Map of node IDs to branch names (undefined values excluded from result)

#### Example

```typescript
const branches = tree.getBranches();
for (const [id, name] of branches) {
  console.log(`Branch "${name}": ${id}`);
}
```

***

### getLeaves()

> **getLeaves**(): `string`[]

Defined in: [src/thread-tree/index.ts:366](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L366)

Gets all leaf nodes in the tree.

Leaf nodes are nodes with no children, representing the endpoints
of various conversation branches. These are typically the most recent
points in each conversation path.

#### Returns

`string`[]

Array of node IDs for all leaf nodes

#### Example

```typescript
const leaves = tree.getLeaves();
console.log(`Tree has ${leaves.length} active branches`);

// Visit each leaf
for (const leafId of leaves) {
  tree.checkout(leafId);
  console.log(tree.current.name);
}
```

***

### history()

> **history**(): [`AgentState`](../../core/classes/agentstate.md)

Defined in: [src/thread-tree/index.ts:340](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L340)

Gets the agent state for the current node with tree metadata attached.

Since nodes store complete state snapshots, this simply returns the
current node's state with an additional metadata field containing
the current node's ID for reference.

#### Returns

[`AgentState`](../../core/classes/agentstate.md)

The current node's AgentState with `_threadTreeNodeId` metadata

#### Example

```typescript
const state = tree.history();
const messages = state.messages;
const nodeId = state.metadata['_threadTreeNodeId'];
```

***

### toJSON()

> **toJSON**(): [`ThreadTreeJSON`](../../core/interfaces/threadtreejson.md)

Defined in: [src/thread-tree/index.ts:421](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L421)

Serializes the entire tree to a JSON-compatible object.

The serialized form includes all nodes, the root ID, and the current
node ID, allowing complete tree reconstruction via fromJSON().

#### Returns

[`ThreadTreeJSON`](../../core/interfaces/threadtreejson.md)

A plain object representation suitable for JSON.stringify()

#### Example

```typescript
const json = tree.toJSON();
await Bun.write('conversation-tree.json', JSON.stringify(json, null, 2));
```

***

### fromJSON()

> `static` **fromJSON**(`json`): `ThreadTree`

Defined in: [src/thread-tree/index.ts:455](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/thread-tree/index.ts#L455)

Deserializes a ThreadTree from a JSON object.

Reconstructs the complete tree structure including all nodes,
parent-child relationships, and restores the current node position.

#### Parameters

##### json

[`ThreadTreeJSON`](../../core/interfaces/threadtreejson.md)

The serialized tree data

#### Returns

`ThreadTree`

A new ThreadTree instance with the restored structure

#### Throws

Error if the root node ID is not found in the nodes array

#### Throws

Error if the current node ID is not found in the nodes array

#### Example

```typescript
const data = await Bun.file('conversation-tree.json').json();
const tree = ThreadTree.fromJSON(data as ThreadTreeJSON);

// Tree is fully restored with same current position
console.log(tree.current.id);
```
