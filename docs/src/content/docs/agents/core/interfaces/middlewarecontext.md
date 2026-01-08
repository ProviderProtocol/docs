---
title: "Interface: MiddlewareContext"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / MiddlewareContext

# Interface: MiddlewareContext

Defined in: [src/middleware/types.ts:18](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/middleware/types.ts#L18)

Context passed to middleware functions during agent execution.

This context object provides access to the agent, input message, current state,
and a metadata map for sharing data between middleware functions in the chain.

## Remarks

The metadata map is mutable and can be used to pass data between `before` and
`after` hooks of the same middleware, or between different middleware in the chain.
Use namespaced keys (e.g., `_myMiddleware_key`) to avoid collisions.

## See

[Middleware](middleware.md) for the middleware interface that receives this context

## Properties

### agent

> **agent**: [`AgentRef`](agentref.md)

Defined in: [src/middleware/types.ts:24](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/middleware/types.ts#L24)

Reference to the agent being executed.

Provides access to agent identity and configuration.

***

### input

> **input**: `Message`

Defined in: [src/middleware/types.ts:31](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/middleware/types.ts#L31)

The user input message that triggered this execution.

This is the original message passed to the agent's generate method.

***

### metadata

> **metadata**: `Map`\<`string`, `unknown`\>

Defined in: [src/middleware/types.ts:58](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/middleware/types.ts#L58)

Mutable metadata map for sharing data between middleware hooks.

#### Remarks

Common uses include storing timing information in `before` and reading
it in `after`, or passing computed values down the middleware chain.

#### Example

```typescript
// In before hook
context.metadata.set('_myMiddleware_startTime', Date.now());

// In after hook
const startTime = context.metadata.get('_myMiddleware_startTime') as number;
```

***

### state

> **state**: [`AgentState`](../classes/agentstate.md)

Defined in: [src/middleware/types.ts:40](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/middleware/types.ts#L40)

The current agent state, including conversation history.

#### Remarks

While the state object itself is accessible, modifications should be
handled through proper state management rather than direct mutation.
