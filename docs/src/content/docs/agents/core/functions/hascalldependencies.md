---
title: "Function: hasCallDependencies()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / hasCallDependencies

# Function: hasCallDependencies()

> **hasCallDependencies**(`toolCalls`): `boolean`

Defined in: [src/execution/tool-ordering.ts:262](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/tool-ordering.ts#L262)

Checks if any tool calls have model-driven dependencies.

Models can specify execution order hints via the `after` field
on tool calls. This function checks if any calls have such hints.

## Parameters

### toolCalls

`ToolCall`[]

Tool calls to check

## Returns

`boolean`

true if any call has the `after` field set

## Example

```typescript
import { hasCallDependencies } from '@providerprotocol/agents/execution';

if (hasCallDependencies(toolCalls) || hasToolDependencies(tools)) {
  // Need dependency-aware execution
  const groups = orderToolCalls(toolCalls, tools);
}
```
