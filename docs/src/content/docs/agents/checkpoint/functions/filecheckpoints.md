---
title: "Function: fileCheckpoints()"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [checkpoint](../README.md) / fileCheckpoints

# Function: fileCheckpoints()

> **fileCheckpoints**(`options`): [`CheckpointStore`](../../index/interfaces/CheckpointStore.md)

Defined in: [src/checkpoint/file.ts:105](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/checkpoint/file.ts#L105)

Creates a file-based checkpoint store for persisting agent state.

This is the reference implementation of [CheckpointStore](../../index/interfaces/CheckpointStore.md) that uses
the local filesystem for storage. Each session gets its own subdirectory
containing the checkpoint and metadata files.

## Parameters

### options

[`FileCheckpointOptions`](../../index/interfaces/FileCheckpointOptions.md) = `{}`

Configuration options for the store.

## Returns

[`CheckpointStore`](../../index/interfaces/CheckpointStore.md)

A [CheckpointStore](../../index/interfaces/CheckpointStore.md) implementation backed by the filesystem.

## Remarks

Directory structure:
```
{dir}/
  {sessionId}/
    checkpoint.json   # Full serialized AgentState
    metadata.json     # Lightweight session metadata
```

The store automatically creates directories as needed. Files are written
with pretty-printed JSON (2-space indent) for debuggability.

## Examples

```typescript
import { fileCheckpoints } from '@providerprotocol/agents/checkpoint';
import { agent, AgentState } from '@providerprotocol/agents';
import { anthropic } from '@providerprotocol/ai/anthropic';

const store = fileCheckpoints({ dir: './my-checkpoints' });

// Create agent with checkpoint support
const coder = agent({
  model: anthropic('claude-sonnet-4-20250514'),
  tools: [Bash, Read],
  checkpoints: store,
  sessionId: 'task-123',
});

// Agent automatically checkpoints after each step
const { turn, state } = await coder.generate('Fix the bug', initialState);
```

```typescript
const store = fileCheckpoints({ dir: './checkpoints' });

// Try to resume existing session
const saved = await store.load('my-session');
const initialState = saved
  ? AgentState.fromJSON(saved)
  : AgentState.initial();

// Continue execution from restored or fresh state
const { turn, state } = await coder.generate('Continue working', initialState);
```

```typescript
const store = fileCheckpoints();

// List all saved sessions
const sessions = await store.list();

// Get metadata without loading full state
for (const sessionId of sessions) {
  const meta = await store.loadMetadata(sessionId);
  console.log(`${sessionId}: step ${meta?.step}, saved ${meta?.timestamp}`);
}

// Clean up completed session
await store.delete('completed-session');
```
