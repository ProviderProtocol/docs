---
title: "Interface: PlanOptions"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / PlanOptions

# Interface: PlanOptions

Defined in: [src/execution/types.ts:416](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L416)

Configuration options for the plan execution strategy.

The plan strategy first generates a structured execution plan with
dependencies between steps, then executes each step in topological
order. This is useful for complex multi-step tasks.

## Example

```typescript
const agent = createAgent({
  // ... other config
  strategy: plan({
    maxPlanSteps: 10,
    allowReplan: true,
  }),
});
```

## Properties

### allowReplan?

> `optional` **allowReplan**: `boolean`

Defined in: [src/execution/types.ts:427](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L427)

Whether to allow replanning when a step fails.

#### Default Value

```ts
true
```

***

### maxPlanSteps?

> `optional` **maxPlanSteps**: `number`

Defined in: [src/execution/types.ts:421](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L421)

Maximum number of steps allowed in the generated plan.

#### Default Value

```ts
Infinity (no limit)
```

***

### planSchema?

> `optional` **planSchema**: `Record`\<`string`, `unknown`\>

Defined in: [src/execution/types.ts:433](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L433)

JSON Schema for validating the plan structure.
Override to customize the expected plan format.
