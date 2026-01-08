---
title: "Interface: LoopOptions"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / LoopOptions

# Interface: LoopOptions

Defined in: [src/execution/types.ts:356](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L356)

Configuration options for the loop execution strategy.

The loop strategy is the simplest execution pattern, equivalent to
the native tool loop behavior in UPP. It sends input to the LLM,
executes any tool calls, and repeats until no more tools are called.

## Example

```typescript
const agent = createAgent({
  // ... other config
  strategy: loop({ maxIterations: 5 }),
});
```

## Properties

### maxIterations?

> `optional` **maxIterations**: `number`

Defined in: [src/execution/types.ts:361](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L361)

Maximum number of tool execution rounds before stopping.

#### Default Value

```ts
Infinity (no limit)
```
