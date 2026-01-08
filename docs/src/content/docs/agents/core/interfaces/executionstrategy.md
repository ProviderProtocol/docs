---
title: "Interface: ExecutionStrategy"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / ExecutionStrategy

# Interface: ExecutionStrategy

Defined in: [src/execution/types.ts:322](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L322)

Execution strategy interface defining how an agent executes.

Strategies encapsulate the execution pattern (loop, react, plan) and
provide both synchronous and streaming execution methods. Each strategy
implements a different approach to orchestrating LLM calls and tool use.

## Remarks

Built-in strategies:
- `loop()` - Simple tool loop, equivalent to UPP's native behavior
- `react()` - Reason-Act-Observe cycle with explicit reasoning steps
- `plan()` - Plan-then-execute with structured step dependencies

## Example

```typescript
// Create a custom strategy
const myStrategy: ExecutionStrategy = {
  name: 'custom',
  async execute(context) {
    // Custom execution logic
    return { turn, state };
  },
  stream(context) {
    // Custom streaming logic
    return { [Symbol.asyncIterator]() { ... }, result, abort };
  },
};
```

## Properties

### name

> **name**: `string`

Defined in: [src/execution/types.ts:324](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L324)

Unique name identifying this strategy (e.g., 'loop', 'react', 'plan')

## Methods

### execute()

> **execute**(`context`): `Promise`\<[`ExecutionResult`](ExecutionResult.md)\>

Defined in: [src/execution/types.ts:331](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L331)

Execute the strategy synchronously (non-streaming).

#### Parameters

##### context

[`ExecutionContext`](ExecutionContext.md)

The execution context with all required resources

#### Returns

`Promise`\<[`ExecutionResult`](ExecutionResult.md)\>

Promise resolving to the execution result

***

### stream()

> **stream**(`context`): [`AgentStreamResult`](AgentStreamResult.md)

Defined in: [src/execution/types.ts:338](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L338)

Execute the strategy with streaming support.

#### Parameters

##### context

[`ExecutionContext`](ExecutionContext.md)

The execution context with all required resources

#### Returns

[`AgentStreamResult`](AgentStreamResult.md)

AgentStreamResult for async iteration and final result
