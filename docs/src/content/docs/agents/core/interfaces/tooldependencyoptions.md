---
title: "Interface: ToolDependencyOptions"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ToolDependencyOptions

# Interface: ToolDependencyOptions

Defined in: [src/execution/types.ts:474](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L474)

Tool dependency options for execution ordering.

These options extend the base UPP Tool interface with UAP-specific
fields for controlling tool execution order. Tools can declare
dependencies on other tools or require sequential execution.

## See

UAP-1.0 Spec Section 8.5

## Example

```typescript
// Tool that must execute alone (barrier)
const readTool = {
  name: 'read_file',
  sequential: true,
  // ... other tool config
};

// Tool that depends on another tool
const writeTool = {
  name: 'write_file',
  dependsOn: ['read_file'],
  // ... other tool config
};
```

## Extended by

- [`ToolWithDependencies`](toolwithdependencies.md)

## Properties

### dependsOn?

> `optional` **dependsOn**: `string`[]

Defined in: [src/execution/types.ts:485](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L485)

Tool names that must complete before this tool can execute.
Used for explicit dependency chains.

***

### sequential?

> `optional` **sequential**: `boolean`

Defined in: [src/execution/types.ts:479](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L479)

If true, this tool must complete before other tools start.
Sequential tools create a barrier in parallel execution.
