---
title: "Interface: SubagentExecutionTraceJSON"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubagentExecutionTraceJSON

# Interface: SubagentExecutionTraceJSON

Defined in: [src/state/types.ts:116](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L116)

JSON-serializable form of [SubagentExecutionTrace](subagentexecutiontrace.md).

Used for persisting sub-agent traces to storage and transmitting
them across process boundaries.

## Properties

### endTime

> **endTime**: `number`

Defined in: [src/state/types.ts:122](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L122)

***

### error?

> `optional` **error**: `string`

Defined in: [src/state/types.ts:125](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L125)

***

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/state/types.ts:119](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L119)

***

### prompt

> **prompt**: `string`

Defined in: [src/state/types.ts:120](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L120)

***

### result?

> `optional` **result**: `string`

Defined in: [src/state/types.ts:124](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L124)

***

### startTime

> **startTime**: `number`

Defined in: [src/state/types.ts:121](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L121)

***

### subagentId

> **subagentId**: `string`

Defined in: [src/state/types.ts:117](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L117)

***

### subagentType

> **subagentType**: `string`

Defined in: [src/state/types.ts:118](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L118)

***

### success

> **success**: `boolean`

Defined in: [src/state/types.ts:123](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L123)

***

### toolExecutions?

> `optional` **toolExecutions**: [`ToolExecutionTrace`](toolexecutiontrace.md)[]

Defined in: [src/state/types.ts:126](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L126)

***

### usage?

> `optional` **usage**: `TokenUsage`

Defined in: [src/state/types.ts:127](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/state/types.ts#L127)
