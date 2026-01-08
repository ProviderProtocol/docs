---
title: "Class: AgentState"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / AgentState

# Class: AgentState

Defined in: [src/state/index.ts:63](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L63)

Immutable agent state container for tracking execution context.

AgentState captures the complete execution state of an agent at any point in time,
including conversation history, execution metadata, reasoning traces, and sub-agent
execution records. All operations return new instances, leaving the original state
unchanged.

## Remarks

The immutable design enables:
- Safe concurrent access without locks
- Easy state rollback and history tracking
- Predictable debugging with state snapshots
- Simple serialization for checkpointing

Each state transition generates a new UUID to uniquely identify the snapshot.

## Example

```typescript
// Create initial state
const state = AgentState.initial();

// Add messages immutably
const state2 = state.withMessage(new UserMessage('Hello'));
const state3 = state2.withMessage(new AssistantMessage('Hi there!'));

// Add reasoning traces
const state4 = state3.withReasoning('User greeted me, responding politely.');

// Serialize for persistence
const json = state4.toJSON();
const restored = AgentState.fromJSON(json);
```

## See

 - [AgentStateInterface](../interfaces/agentstateinterface.md) for the interface contract
 - [AgentStateJSON](../interfaces/agentstatejson.md) for the serialization format

## Implements

- [`AgentStateInterface`](../interfaces/agentstateinterface.md)

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/state/index.ts:65](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L65)

Unique identifier for this state snapshot (UUIDv4)

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`id`](../interfaces/agentstateinterface.md#id)

***

### messages

> `readonly` **messages**: readonly `Message`[]

Defined in: [src/state/index.ts:68](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L68)

Immutable conversation history containing UPP Messages

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`messages`](../interfaces/agentstateinterface.md#messages)

***

### metadata

> `readonly` **metadata**: `Readonly`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/state/index.ts:74](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L74)

User-defined metadata for storing arbitrary state

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`metadata`](../interfaces/agentstateinterface.md#metadata)

***

### plan

> `readonly` **plan**: readonly [`PlanStep`](../interfaces/planstep.md)[] \| `undefined`

Defined in: [src/state/index.ts:80](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L80)

Execution plan for Plan-strategy agents

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`plan`](../interfaces/agentstateinterface.md#plan)

***

### reasoning

> `readonly` **reasoning**: readonly `string`[]

Defined in: [src/state/index.ts:77](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L77)

Reasoning traces captured during ReAct-style execution

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`reasoning`](../interfaces/agentstateinterface.md#reasoning)

***

### step

> `readonly` **step**: `number`

Defined in: [src/state/index.ts:71](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L71)

Current step number in the agent's execution lifecycle

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`step`](../interfaces/agentstateinterface.md#step)

***

### subagentTraces

> `readonly` **subagentTraces**: readonly [`SubagentExecutionTrace`](../interfaces/subagentexecutiontrace.md)[]

Defined in: [src/state/index.ts:83](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L83)

Sub-agent execution traces per UAP spec Section 8.8

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`subagentTraces`](../interfaces/agentstateinterface.md#subagenttraces)

## Methods

### toJSON()

> **toJSON**(): [`AgentStateJSON`](../interfaces/agentstatejson.md)

Defined in: [src/state/index.ts:415](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L415)

Serializes the state to JSON for persistence or transport.

The output includes a version identifier for forward compatibility
and can be restored using [AgentState.fromJSON](#fromjson).

#### Returns

[`AgentStateJSON`](../interfaces/agentstatejson.md)

A JSON-serializable representation of the complete state

#### Example

```typescript
const state = AgentState.initial().withMessage(new UserMessage('Hello'));
const json = state.toJSON();

// Persist to storage
await Bun.write('checkpoint.json', JSON.stringify(json));
```

#### See

 - [AgentStateJSON](../interfaces/agentstatejson.md) for the serialization format
 - [AgentState.fromJSON](#fromjson) for deserialization

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`toJSON`](../interfaces/agentstateinterface.md#tojson)

***

### withContext()

> **withContext**(`messages`): `AgentState`

Defined in: [src/state/index.ts:218](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L218)

Creates a new state with the entire message context replaced.

Use this for context window management operations such as:
- Pruning old messages to stay within token limits
- Replacing history with a summarized version
- Implementing sliding window contexts

#### Parameters

##### messages

`Message`[]

The new complete message history

#### Returns

`AgentState`

A new AgentState with the replaced context

#### Example

```typescript
// Prune to last 10 messages
const pruned = state.withContext(state.messages.slice(-10));

// Replace with summarized context
const summary = new AssistantMessage('Previous discussion summary...');
const summarized = state.withContext([summary, ...recentMessages]);
```

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withContext`](../interfaces/agentstateinterface.md#withcontext)

***

### withMessage()

> **withMessage**(`message`): `AgentState`

Defined in: [src/state/index.ts:154](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L154)

Creates a new state with a single message appended.

#### Parameters

##### message

`Message`

The UPP Message to add to the conversation history

#### Returns

`AgentState`

A new AgentState with the message appended

#### Example

```typescript
const state = AgentState.initial();
const updated = state.withMessage(new UserMessage('What is 2+2?'));
console.log(updated.messages.length); // 1
```

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withMessage`](../interfaces/agentstateinterface.md#withmessage)

***

### withMessages()

> **withMessages**(`messages`): `AgentState`

Defined in: [src/state/index.ts:185](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L185)

Creates a new state with multiple messages appended.

Useful for adding a complete turn (e.g., user message + assistant response)
in a single operation.

#### Parameters

##### messages

`Message`[]

Array of UPP Messages to append

#### Returns

`AgentState`

A new AgentState with all messages appended

#### Example

```typescript
const state = AgentState.initial();
const updated = state.withMessages([
  new UserMessage('Hello'),
  new AssistantMessage('Hi! How can I help?')
]);
console.log(updated.messages.length); // 2
```

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withMessages`](../interfaces/agentstateinterface.md#withmessages)

***

### withMetadata()

> **withMetadata**(`key`, `value`): `AgentState`

Defined in: [src/state/index.ts:279](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L279)

Creates a new state with a metadata entry added or updated.

Use metadata to store arbitrary application-specific data that should
persist with the agent state, such as user preferences, session info,
or custom tracking data.

#### Parameters

##### key

`string`

The metadata key

##### value

`unknown`

The value to store (must be JSON-serializable)

#### Returns

`AgentState`

A new AgentState with the updated metadata

#### Example

```typescript
const state = AgentState.initial()
  .withMetadata('userId', 'user-123')
  .withMetadata('sessionStart', Date.now());

console.log(state.metadata.userId); // 'user-123'
```

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withMetadata`](../interfaces/agentstateinterface.md#withmetadata)

***

### withPlan()

> **withPlan**(`plan`): `AgentState`

Defined in: [src/state/index.ts:342](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L342)

Creates a new state with the execution plan set.

Used by Plan-strategy agents to store their decomposed task plan.
The plan is copied to ensure immutability.

#### Parameters

##### plan

[`PlanStep`](../interfaces/planstep.md)[]

Array of plan steps defining the execution strategy

#### Returns

`AgentState`

A new AgentState with the plan set

#### Example

```typescript
const plan: PlanStep[] = [
  { id: 'step-1', description: 'Research topic', dependsOn: [], status: 'pending' },
  { id: 'step-2', description: 'Write outline', dependsOn: ['step-1'], status: 'pending' }
];
const state = AgentState.initial().withPlan(plan);
```

#### See

[PlanStep](../interfaces/planstep.md) for the plan step structure

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withPlan`](../interfaces/agentstateinterface.md#withplan)

***

### withReasoning()

> **withReasoning**(`reasoning`): `AgentState`

Defined in: [src/state/index.ts:310](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L310)

Creates a new state with a reasoning trace appended.

Reasoning traces capture the agent's internal thought process during
ReAct-style execution, enabling debugging and explainability.

#### Parameters

##### reasoning

`string`

The reasoning trace entry to add

#### Returns

`AgentState`

A new AgentState with the reasoning appended

#### Example

```typescript
const state = AgentState.initial()
  .withReasoning('User asked about weather, need to call weather API')
  .withReasoning('Weather API returned sunny, 72F');

console.log(state.reasoning);
// ['User asked about weather...', 'Weather API returned...']
```

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withReasoning`](../interfaces/agentstateinterface.md#withreasoning)

***

### withStep()

> **withStep**(`step`): `AgentState`

Defined in: [src/state/index.ts:247](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L247)

Creates a new state with an updated step number.

The step number tracks the agent's position in its execution lifecycle,
useful for progress tracking and debugging.

#### Parameters

##### step

`number`

The new step number

#### Returns

`AgentState`

A new AgentState with the updated step

#### Example

```typescript
const state = AgentState.initial();
const afterStep1 = state.withStep(1);
const afterStep2 = afterStep1.withStep(2);
console.log(afterStep2.step); // 2
```

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withStep`](../interfaces/agentstateinterface.md#withstep)

***

### withSubagentTrace()

> **withSubagentTrace**(`trace`): `AgentState`

Defined in: [src/state/index.ts:383](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L383)

Creates a new state with a sub-agent execution trace appended.

Records the execution details of a sub-agent spawned by the parent agent,
enabling hierarchical debugging and audit trails.

#### Parameters

##### trace

[`SubagentExecutionTrace`](../interfaces/subagentexecutiontrace.md)

The sub-agent execution trace to record

#### Returns

`AgentState`

A new AgentState with the trace appended

#### Remarks

Conforms to UAP specification Section 8.8 for sub-agent tracing.

#### Example

```typescript
const trace: SubagentExecutionTrace = {
  subagentId: 'sub-123',
  subagentType: 'researcher',
  parentToolCallId: 'call-456',
  prompt: 'Find information about...',
  startTime: Date.now() - 5000,
  endTime: Date.now(),
  success: true,
  result: 'Found the following...'
};
const updated = state.withSubagentTrace(trace);
```

#### See

[SubagentExecutionTrace](../interfaces/subagentexecutiontrace.md) for the trace structure

#### Implementation of

[`AgentStateInterface`](../interfaces/agentstateinterface.md).[`withSubagentTrace`](../interfaces/agentstateinterface.md#withsubagenttrace)

***

### fromJSON()

> `static` **fromJSON**(`json`): `AgentState`

Defined in: [src/state/index.ts:453](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L453)

Restores an AgentState from its JSON representation.

Validates the UAP version and reconstructs all message types
to their proper UPP Message class instances.

#### Parameters

##### json

[`AgentStateJSON`](../interfaces/agentstatejson.md)

The serialized state from [AgentState.toJSON](#tojson)

#### Returns

`AgentState`

A fully hydrated AgentState instance

#### Throws

Error if the UAP version is unsupported

#### Example

```typescript
// Load from storage
const file = await Bun.file('checkpoint.json').text();
const json = JSON.parse(file) as AgentStateJSON;
const state = AgentState.fromJSON(json);

console.log(state.messages.length);
```

#### See

 - [AgentStateJSON](../interfaces/agentstatejson.md) for the expected format
 - [AgentState.toJSON](#tojson) for serialization

***

### initial()

> `static` **initial**(): `AgentState`

Defined in: [src/state/index.ts:129](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/index.ts#L129)

Creates a fresh initial state with no history.

Use this to start a new agent execution session with empty
messages, metadata, and traces.

#### Returns

`AgentState`

A new AgentState with default empty values

#### Example

```typescript
const state = AgentState.initial();
console.log(state.messages.length); // 0
console.log(state.step); // 0
```
