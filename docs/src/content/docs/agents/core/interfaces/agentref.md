---
title: "Interface: AgentRef"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / AgentRef

# Interface: AgentRef

Defined in: [src/execution/types.ts:122](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L122)

Forward declaration of Agent for use in ExecutionContext.

This minimal interface provides the essential agent identification fields
needed by execution strategies without creating circular dependencies.
The full Agent interface is defined in agent/types.ts.

## Properties

### id

> **id**: `string`

Defined in: [src/execution/types.ts:124](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L124)

Unique identifier for the agent instance

***

### system?

> `optional` **system**: `string`

Defined in: [src/execution/types.ts:126](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L126)

Optional system prompt for the agent
