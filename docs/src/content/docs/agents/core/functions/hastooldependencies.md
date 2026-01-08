---
title: "Function: hasToolDependencies()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / hasToolDependencies

# Function: hasToolDependencies()

> **hasToolDependencies**(`tools`): `boolean`

Defined in: [src/execution/tool-ordering.ts:233](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/tool-ordering.ts#L233)

Checks if any tools in the array have execution dependencies defined.

This is a quick check to determine if tool ordering is needed.
If no tools have dependencies, all calls can execute in parallel
without the overhead of dependency resolution.

## Parameters

### tools

`Tool`\<`unknown`, `unknown`\>[]

Tool definitions to check

## Returns

`boolean`

true if any tool has `sequential` or `dependsOn` set

## Example

```typescript
import { hasToolDependencies } from '@providerprotocol/agents/execution';

if (hasToolDependencies(tools)) {
  // Need to use orderToolCalls for proper ordering
  const groups = orderToolCalls(toolCalls, tools);
} else {
  // Can execute all calls in parallel
  await Promise.all(toolCalls.map(executeTool));
}
```
