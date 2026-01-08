---
title: "Interface: AgentStateInterface"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / AgentStateInterface

# Interface: AgentStateInterface

Defined in: [src/state/types.ts:262](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L262)

Interface defining the contract for agent state operations.

All methods follow immutable patterns, returning new state instances
rather than mutating the existing state. This enables safe state
management, easy rollback, and predictable behavior.

## Remarks

Implementations should ensure thread-safety by never mutating
internal data structures.

## See

[AgentState](../classes/AgentState.md) for the concrete implementation

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/state/types.ts:264](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L264)

Unique identifier for this state snapshot (UUIDv4)

***

### messages

> `readonly` **messages**: readonly `Message`[]

Defined in: [src/state/types.ts:267](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L267)

Immutable conversation history containing UPP Messages

***

### metadata

> `readonly` **metadata**: `Readonly`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/state/types.ts:273](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L273)

User-defined metadata for storing arbitrary state

***

### plan

> `readonly` **plan**: readonly [`PlanStep`](PlanStep.md)[] \| `undefined`

Defined in: [src/state/types.ts:279](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L279)

Execution plan for Plan-strategy agents (undefined if not using Plan strategy)

***

### reasoning

> `readonly` **reasoning**: readonly `string`[]

Defined in: [src/state/types.ts:276](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L276)

Reasoning traces captured during ReAct-style execution

***

### step

> `readonly` **step**: `number`

Defined in: [src/state/types.ts:270](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L270)

Current step number in the agent's execution lifecycle

***

### subagentTraces

> `readonly` **subagentTraces**: readonly [`SubagentExecutionTrace`](SubagentExecutionTrace.md)[]

Defined in: [src/state/types.ts:282](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L282)

Sub-agent execution traces per UAP spec Section 8.8

## Methods

### toJSON()

> **toJSON**(): [`AgentStateJSON`](AgentStateJSON.md)

Defined in: [src/state/types.ts:358](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L358)

Serializes the state to JSON for persistence.

#### Returns

[`AgentStateJSON`](AgentStateJSON.md)

A JSON-serializable representation of the state

***

### withContext()

> **withContext**(`messages`): `AgentStateInterface`

Defined in: [src/state/types.ts:310](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L310)

Creates a new state with the entire message context replaced.

#### Parameters

##### messages

`Message`[]

The new complete message history

#### Returns

`AgentStateInterface`

A new AgentState instance with the replaced context

#### Remarks

Use this for context window management operations like pruning
or summarization, where you need to replace the entire history.

***

### withMessage()

> **withMessage**(`message`): `AgentStateInterface`

Defined in: [src/state/types.ts:290](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L290)

Creates a new state with the given message appended.

#### Parameters

##### message

`Message`

The message to add to the conversation history

#### Returns

`AgentStateInterface`

A new AgentState instance with the message appended

***

### withMessages()

> **withMessages**(`messages`): `AgentStateInterface`

Defined in: [src/state/types.ts:298](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L298)

Creates a new state with multiple messages appended.

#### Parameters

##### messages

`Message`[]

The messages to add to the conversation history

#### Returns

`AgentStateInterface`

A new AgentState instance with all messages appended

***

### withMetadata()

> **withMetadata**(`key`, `value`): `AgentStateInterface`

Defined in: [src/state/types.ts:327](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L327)

Creates a new state with a metadata entry added or updated.

#### Parameters

##### key

`string`

The metadata key

##### value

`unknown`

The value to store

#### Returns

`AgentStateInterface`

A new AgentState instance with the updated metadata

***

### withPlan()

> **withPlan**(`plan`): `AgentStateInterface`

Defined in: [src/state/types.ts:343](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L343)

Creates a new state with the execution plan set.

#### Parameters

##### plan

[`PlanStep`](PlanStep.md)[]

The execution plan steps

#### Returns

`AgentStateInterface`

A new AgentState instance with the plan set

***

### withReasoning()

> **withReasoning**(`reasoning`): `AgentStateInterface`

Defined in: [src/state/types.ts:335](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L335)

Creates a new state with a reasoning trace appended.

#### Parameters

##### reasoning

`string`

The reasoning trace to add

#### Returns

`AgentStateInterface`

A new AgentState instance with the reasoning appended

***

### withStep()

> **withStep**(`step`): `AgentStateInterface`

Defined in: [src/state/types.ts:318](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L318)

Creates a new state with an updated step number.

#### Parameters

##### step

`number`

The new step number

#### Returns

`AgentStateInterface`

A new AgentState instance with the updated step

***

### withSubagentTrace()

> **withSubagentTrace**(`trace`): `AgentStateInterface`

Defined in: [src/state/types.ts:351](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L351)

Creates a new state with a sub-agent execution trace appended.

#### Parameters

##### trace

[`SubagentExecutionTrace`](SubagentExecutionTrace.md)

The sub-agent execution trace to add

#### Returns

`AgentStateInterface`

A new AgentState instance with the trace appended
