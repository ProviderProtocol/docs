---
title: "Interface: ReactOptions"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ReactOptions

# Interface: ReactOptions

Defined in: [src/execution/types.ts:384](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L384)

Configuration options for the ReAct execution strategy.

The ReAct (Reason-Act-Observe) strategy adds an explicit reasoning
phase before each action, improving the model's decision-making
by encouraging step-by-step thinking.

## See

https://arxiv.org/abs/2210.03629 - ReAct: Synergizing Reasoning and Acting

## Example

```typescript
const agent = createAgent({
  // ... other config
  strategy: react({
    maxSteps: 10,
    reasoningPrompt: 'Think carefully about what to do next.',
  }),
});
```

## Properties

### maxSteps?

> `optional` **maxSteps**: `number`

Defined in: [src/execution/types.ts:389](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L389)

Maximum number of reason-act-observe cycles before stopping.

#### Default Value

```ts
Infinity (no limit)
```

***

### reasoningPrompt?

> `optional` **reasoningPrompt**: `string`

Defined in: [src/execution/types.ts:395](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L395)

Custom prompt appended to trigger the reasoning phase.

#### Default Value

```ts
'Think step by step about what you need to do next...'
```
