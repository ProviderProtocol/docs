---
title: "Function: isContextAwareTool()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / isContextAwareTool

# Function: isContextAwareTool()

> **isContextAwareTool**(`tool`): `boolean`

Defined in: [src/execution/tool-context.ts:146](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/tool-context.ts#L146)

Checks if a tool is context-aware (accepts execution context as second parameter).

Context-aware tools have a `run` function with arity > 1, meaning they
accept the optional `ToolExecutionContext` parameter. This allows them
to access agent information and emit sub-agent events.

## Parameters

### tool

`Tool`

The tool to check

## Returns

`boolean`

true if the tool's run function accepts more than one parameter

## Example

```typescript
import { isContextAwareTool } from '@providerprotocol/agents/execution';

const standardTool = {
  name: 'simple',
  run: async (params) => 'result', // arity = 1
};

const contextTool = {
  name: 'advanced',
  run: async (params, context) => 'result', // arity = 2
};

isContextAwareTool(standardTool); // false
isContextAwareTool(contextTool);  // true
```
