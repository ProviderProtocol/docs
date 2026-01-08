---
title: "Interface: CheckpointStore"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / CheckpointStore

# Interface: CheckpointStore

Defined in: [src/checkpoint/types.ts:54](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/checkpoint/types.ts#L54)

Interface for checkpoint storage implementations.

Implementations handle persistence of agent state at step boundaries
for crash recovery and session resume. Each implementation can use
different storage backends (filesystem, database, cloud storage, etc.).

## Remarks

The checkpoint store is called by the agent after each successful step.
Implementations should be atomic - either the entire checkpoint is saved
successfully, or nothing is changed. This ensures consistent state
recovery even if a crash occurs during the save operation.

## Example

```typescript
import { fileCheckpoints } from '@providerprotocol/agents/checkpoint';
import { AgentState } from '@providerprotocol/agents';

const store = fileCheckpoints({ dir: './checkpoints' });

// Save checkpoint after agent step
await store.save('session-123', state.toJSON());

// Resume from checkpoint on restart
const saved = await store.load('session-123');
if (saved) {
  const restored = AgentState.fromJSON(saved);
  // Continue execution from restored state
}

// Clean up when session is complete
await store.delete('session-123');
```

## Methods

### delete()

> **delete**(`sessionId`): `Promise`\<`void`\>

Defined in: [src/checkpoint/types.ts:136](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/checkpoint/types.ts#L136)

Deletes all checkpoints for a session.

Removes the checkpoint data and metadata for the specified session.
This should be called when a session is complete and no longer
needs recovery capability.

#### Parameters

##### sessionId

`string`

The session identifier to delete.

#### Returns

`Promise`\<`void`\>

Promise that resolves when deletion is complete.
  Does not throw if the session doesn't exist.

#### Example

```typescript
// Clean up after successful completion
await store.delete('completed-session');
```

***

### list()

> **list**(): `Promise`\<`string`[]\>

Defined in: [src/checkpoint/types.ts:161](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/checkpoint/types.ts#L161)

Lists all session IDs that have checkpoints.

Returns identifiers for all sessions with saved checkpoints.
Useful for implementing session management UI or cleanup routines.

#### Returns

`Promise`\<`string`[]\>

Promise resolving to an array of session identifiers.
  Returns an empty array if no checkpoints exist.

#### Example

```typescript
const sessions = await store.list();
console.log(`Found ${sessions.length} saved sessions`);

// Clean up old sessions
for (const sessionId of sessions) {
  const meta = await store.loadMetadata(sessionId);
  if (isOlderThan(meta?.timestamp, '7d')) {
    await store.delete(sessionId);
  }
}
```

***

### load()

> **load**(`sessionId`): `Promise`\<[`AgentStateJSON`](AgentStateJSON.md) \| `null`\>

Defined in: [src/checkpoint/types.ts:97](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/checkpoint/types.ts#L97)

Loads the most recent checkpoint for a session.

Retrieves the previously saved state, which can be used to create
an `AgentState` instance via `AgentState.fromJSON()`.

#### Parameters

##### sessionId

`string`

The session identifier to load.

#### Returns

`Promise`\<[`AgentStateJSON`](AgentStateJSON.md) \| `null`\>

Promise resolving to the serialized state, or `null` if
  no checkpoint exists for this session.

#### Example

```typescript
const saved = await store.load('my-session');
if (saved) {
  const state = AgentState.fromJSON(saved);
  // Resume execution with restored state
} else {
  // Start fresh with initial state
  const state = AgentState.initial();
}
```

***

### loadMetadata()

> **loadMetadata**(`sessionId`): `Promise`\<[`CheckpointMetadata`](CheckpointMetadata.md) \| `null`\>

Defined in: [src/checkpoint/types.ts:117](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/checkpoint/types.ts#L117)

Loads checkpoint metadata without loading the full state.

Useful for displaying session information (timestamp, step count)
without the overhead of deserializing the complete state.

#### Parameters

##### sessionId

`string`

The session identifier to query.

#### Returns

`Promise`\<[`CheckpointMetadata`](CheckpointMetadata.md) \| `null`\>

Promise resolving to checkpoint metadata, or `null` if
  no checkpoint exists for this session.

#### Example

```typescript
const meta = await store.loadMetadata('my-session');
if (meta) {
  console.log(`Session at step ${meta.step}, saved at ${meta.timestamp}`);
}
```

***

### save()

> **save**(`sessionId`, `state`): `Promise`\<`void`\>

Defined in: [src/checkpoint/types.ts:73](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/checkpoint/types.ts#L73)

Saves a checkpoint of the current agent state.

Persists the serialized agent state, overwriting any existing
checkpoint for the same session. The save operation should be
atomic to prevent corruption.

#### Parameters

##### sessionId

`string`

Unique identifier for the session. Used to organize
  and retrieve checkpoints. Should be consistent across restarts.

##### state

[`AgentStateJSON`](AgentStateJSON.md)

The serialized agent state from `AgentState.toJSON()`.
  Contains complete execution history and context.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the checkpoint is persisted.

#### Example

```typescript
await store.save('user-123-task-456', agentState.toJSON());
```
