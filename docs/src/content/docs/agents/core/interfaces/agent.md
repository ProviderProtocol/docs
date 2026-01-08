---
title: "Interface: Agent"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / Agent

# Interface: Agent

Defined in: [src/agent/types.ts:166](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L166)

Core agent interface for AI-powered autonomous execution.

The Agent interface defines the contract for all agent instances created via
the `agent()` factory function. It provides multiple execution modes to support
different use cases, from simple stateless queries to complex multi-turn
conversations with full state management.

## Remarks

Agents wrap an underlying LLM instance from `@providerprotocol/ai` and add:
- Immutable state management via `AgentState`
- Middleware pipeline for cross-cutting concerns
- Execution strategies for custom control flow
- Checkpointing for durability and recovery

All execution methods are designed around immutable state: the input state
is never modified, and a new state is returned with each execution.

## Example

```typescript
import { agent, AgentState } from '@providerprotocol/agents';
import { anthropic } from '@providerprotocol/ai/anthropic';

const myAgent = agent({
  model: anthropic('claude-sonnet-4-20250514'),
  system: 'You are a helpful assistant.',
});

// Stateless single query
const turn = await myAgent.query('What is 2+2?');
console.log(turn.response.text);

// Stateful multi-turn conversation
let state = AgentState.initial();
const result1 = await myAgent.ask('My name is Alice.', state);
state = result1.state;
const result2 = await myAgent.ask('What is my name?', state);
console.log(result2.turn.response.text); // "Alice"
```

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/agent/types.ts:174](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L174)

Unique agent identifier in UUIDv4 format.

#### Remarks

Generated automatically when the agent is created. Useful for logging,
tracing, and correlating agent activity across systems.

***

### model

> `readonly` **model**: `ModelReference`

Defined in: [src/agent/types.ts:183](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L183)

The model reference bound to this agent.

#### Remarks

This is the model reference passed to `agent()` during creation.
It cannot be changed after the agent is instantiated.

***

### system?

> `readonly` `optional` **system**: `string`

Defined in: [src/agent/types.ts:201](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L201)

System prompt that guides agent behavior.

#### Remarks

The system prompt is sent with every LLM request and shapes how
the agent responds to user inputs.

***

### tools

> `readonly` **tools**: `Tool`\<`unknown`, `unknown`\>[]

Defined in: [src/agent/types.ts:192](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L192)

Tools available to this agent for execution.

#### Remarks

These tools are passed to the underlying LLM and can be invoked
during agent execution when the model decides to use them.

## Methods

### ask()

> **ask**(`input`, `state`): `Promise`\<[`GenerateResult`](generateresult.md)\>

Defined in: [src/agent/types.ts:282](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L282)

Multi-turn execution with automatic conversation history management.

This is a convenience method that wraps `generate()` with automatic
message history management. Per UAP-1.0 Section 4.6, the execution
strategy handles adding the input to state and appending the response.

#### Parameters

##### input

User input as a string or Message object

`string` | `Message`

##### state

[`AgentState`](../classes/agentstate.md)

Current immutable agent state

#### Returns

`Promise`\<[`GenerateResult`](generateresult.md)\>

Promise resolving to the turn result and new state with updated history

#### Remarks

Use `ask()` when building conversational agents where you want the
framework to manage message history automatically. The returned state
includes both the user's input and the assistant's response.

#### Example

```typescript
let state = AgentState.initial();

// First turn
const result1 = await agent.ask('My name is Alice.', state);
state = result1.state;

// Second turn - agent remembers context
const result2 = await agent.ask('What is my name?', state);
state = result2.state;
// result2.turn.response.text contains "Alice"
```

***

### generate()

> **generate**(`input`, `state`): `Promise`\<[`GenerateResult`](generateresult.md)\>

Defined in: [src/agent/types.ts:223](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L223)

Execute the agent and return the turn result with updated state.

This is the primary execution method for stateful agent interactions.
It processes the input through the middleware pipeline, executes the
configured execution strategy, and returns both the turn result and
the new immutable state.

#### Parameters

##### input

User input as a string or Message object

`string` | `Message`

##### state

[`AgentState`](../classes/agentstate.md)

Current immutable agent state

#### Returns

`Promise`\<[`GenerateResult`](generateresult.md)\>

Promise resolving to the turn result and new state

#### Example

```typescript
const state = AgentState.initial();
const { turn, state: newState } = await agent.generate('Hello!', state);
console.log(turn.response.text);
console.log(newState.messages.length);
```

***

### query()

> **query**(`input`): `Promise`\<`Turn`\<`unknown`\>\>

Defined in: [src/agent/types.ts:301](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L301)

Stateless single-turn execution for one-off queries.

Creates an ephemeral initial state, executes the agent, and returns
only the turn result (discarding the state). Use this for simple
queries where conversation history is not needed.

#### Parameters

##### input

User input as a string or Message object

`string` | `Message`

#### Returns

`Promise`\<`Turn`\<`unknown`\>\>

Promise resolving to the Turn result

#### Example

```typescript
// Simple one-off query - no state management needed
const turn = await agent.query('What is the capital of France?');
console.log(turn.response.text);
```

***

### stream()

> **stream**(`input`, `state`): [`AgentStreamResult`](agentstreamresult.md)

Defined in: [src/agent/types.ts:250](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/types.ts#L250)

Execute the agent with streaming response.

Returns an async iterable that yields events as they arrive from the LLM,
plus a promise that resolves to the final result when streaming completes.
Supports abort functionality for canceling long-running streams.

#### Parameters

##### input

User input as a string or Message object

`string` | `Message`

##### state

[`AgentState`](../classes/agentstate.md)

Current immutable agent state

#### Returns

[`AgentStreamResult`](agentstreamresult.md)

Stream result with async iterator, result promise, and abort method

#### Example

```typescript
const state = AgentState.initial();
const stream = agent.stream('Count from 1 to 10.', state);

for await (const event of stream) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta.text ?? '');
  }
}

const { turn, state: newState } = await stream.result;
```
