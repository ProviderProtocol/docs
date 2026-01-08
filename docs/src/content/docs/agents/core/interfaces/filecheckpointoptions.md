---
title: "Interface: FileCheckpointOptions"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / FileCheckpointOptions

# Interface: FileCheckpointOptions

Defined in: [src/checkpoint/types.ts:169](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/checkpoint/types.ts#L169)

Configuration options for the file-based checkpoint store.

## See

fileCheckpoints for the factory function that uses these options.

## Properties

### dir?

> `optional` **dir**: `string`

Defined in: [src/checkpoint/types.ts:188](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/checkpoint/types.ts#L188)

Directory path for storing checkpoint files.

Each session gets its own subdirectory containing the checkpoint
and metadata files. The directory is created automatically if it
doesn't exist.

#### Default Value

```ts
".checkpoints"
```

#### Example

```typescript
// Use project-relative directory
const store = fileCheckpoints({ dir: './data/checkpoints' });

// Use absolute path
const store = fileCheckpoints({ dir: '/var/lib/agent/checkpoints' });
```
