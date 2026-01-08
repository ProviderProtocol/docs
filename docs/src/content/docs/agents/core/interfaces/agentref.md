---
title: "Interface: AgentRef"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / AgentRef

# Interface: AgentRef

Defined in: [src/execution/types.ts:122](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L122)

Forward declaration of Agent for use in ExecutionContext.

This minimal interface provides the essential agent identification fields
needed by execution strategies without creating circular dependencies.
The full Agent interface is defined in agent/types.ts.

## Properties

### id

> **id**: `string`

Defined in: [src/execution/types.ts:124](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L124)

Unique identifier for the agent instance

***

### system?

> `optional` **system**: `string`

Defined in: [src/execution/types.ts:126](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L126)

Optional system prompt for the agent
