---
title: "Interface: PlanStep"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / PlanStep

# Interface: PlanStep

Defined in: [src/state/types.ts:157](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/state/types.ts#L157)

A single step in an agent's execution plan.

Represents a discrete unit of work within a larger plan, supporting
dependency tracking for proper execution ordering. Used by the Plan
execution strategy to decompose complex tasks.

## Example

```typescript
const steps: PlanStep[] = [
  {
    id: 'step-1',
    description: 'Search for relevant files',
    tool: 'file_search',
    dependsOn: [],
    status: 'completed'
  },
  {
    id: 'step-2',
    description: 'Analyze file contents',
    tool: 'read_file',
    dependsOn: ['step-1'],
    status: 'pending'
  }
];
```

## Properties

### dependsOn

> **dependsOn**: `string`[]

Defined in: [src/state/types.ts:168](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/state/types.ts#L168)

IDs of steps that must complete before this step can execute

***

### description

> **description**: `string`

Defined in: [src/state/types.ts:162](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/state/types.ts#L162)

Human-readable description of what this step accomplishes

***

### id

> **id**: `string`

Defined in: [src/state/types.ts:159](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/state/types.ts#L159)

Unique identifier for this step within the plan

***

### status

> **status**: [`PlanStepStatus`](../type-aliases/planstepstatus.md)

Defined in: [src/state/types.ts:171](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/state/types.ts#L171)

Current execution status of this step

***

### tool?

> `optional` **tool**: `string`

Defined in: [src/state/types.ts:165](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/state/types.ts#L165)

Name of the tool to invoke for this step (if applicable)
