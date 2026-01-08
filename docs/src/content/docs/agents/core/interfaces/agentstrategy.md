---
title: "Interface: AgentStrategy"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / AgentStrategy

# Interface: AgentStrategy

Defined in: [src/execution/types.ts:56](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L56)

Agent lifecycle hooks for execution control and observability.

Strategies allow fine-grained control over agent execution by providing
callbacks at key points in the execution lifecycle. All hooks are optional
and can be sync or async where indicated.

## Remarks

Hooks are called in order: onStepStart -> onReason (if ReAct) -> onAct -> onObserve -> onStepEnd.
The stopCondition is evaluated after each step to determine if execution should halt.

## Example

```typescript
const strategy: AgentStrategy = {
  stopCondition: (state) => state.currentStep >= 5,
  onStepStart: (step, state) => console.log(`Step ${step} starting`),
  onAct: (step, actions) => console.log(`${actions.length} tool calls`),
  onComplete: (result) => console.log(`Done: ${result.turn.response.text}`),
};
```

## Properties

### onAct()?

> `optional` **onAct**: (`step`, `actions`) => `void`

Defined in: [src/execution/types.ts:83](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L83)

Called during the action phase when tool calls are made.

#### Parameters

##### step

`number`

The current step number

##### actions

`ToolCall`[]

Array of tool calls the model wants to execute

#### Returns

`void`

***

### onComplete()?

> `optional` **onComplete**: (`result`) => `void`

Defined in: [src/execution/types.ts:103](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L103)

Called when execution completes successfully.

#### Parameters

##### result

[`GenerateResult`](generateresult.md)

The final generation result

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`error`, `state`) => `void` \| [`GenerateResult`](generateresult.md)

Defined in: [src/execution/types.ts:112](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L112)

Called when an error occurs during execution.
Can optionally return a fallback result to recover from the error.

#### Parameters

##### error

`Error`

The error that occurred

##### state

[`AgentState`](../classes/agentstate.md)

The agent state at the time of the error

#### Returns

`void` \| [`GenerateResult`](generateresult.md)

Optional fallback result to use instead of throwing

***

### onObserve()?

> `optional` **onObserve**: (`step`, `observations`) => `void`

Defined in: [src/execution/types.ts:90](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L90)

Called during the observation phase after tools execute.

#### Parameters

##### step

`number`

The current step number

##### observations

`ToolExecution`[]

Array of tool execution results

#### Returns

`void`

***

### onReason()?

> `optional` **onReason**: (`step`, `reasoning`) => `void`

Defined in: [src/execution/types.ts:76](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L76)

Called during the reasoning phase (ReAct strategy only).

#### Parameters

##### step

`number`

The current step number

##### reasoning

`string`

The model's reasoning output text

#### Returns

`void`

***

### onStepEnd()?

> `optional` **onStepEnd**: (`step`, `result`) => `void`

Defined in: [src/execution/types.ts:97](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L97)

Called when a step completes, after all tool executions.

#### Parameters

##### step

`number`

The completed step number

##### result

Object containing the turn and updated state

###### state

[`AgentState`](../classes/agentstate.md)

###### turn

`Turn`

#### Returns

`void`

***

### onStepStart()?

> `optional` **onStepStart**: (`step`, `state`) => `void`

Defined in: [src/execution/types.ts:69](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L69)

Called when a step begins, before any LLM calls.

#### Parameters

##### step

`number`

The 1-indexed step number

##### state

[`AgentState`](../classes/agentstate.md)

The current agent state at step start

#### Returns

`void`

***

### stopCondition()?

> `optional` **stopCondition**: (`state`) => `boolean` \| `Promise`\<`boolean`\>

Defined in: [src/execution/types.ts:62](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L62)

Evaluate whether execution should stop after the current step.

#### Parameters

##### state

[`AgentState`](../classes/agentstate.md)

The current agent state after step completion

#### Returns

`boolean` \| `Promise`\<`boolean`\>

true to stop execution, false to continue
