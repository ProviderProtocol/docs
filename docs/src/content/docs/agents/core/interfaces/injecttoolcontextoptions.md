---
title: "Interface: InjectToolContextOptions"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / InjectToolContextOptions

# Interface: InjectToolContextOptions

Defined in: [src/execution/tool-context.ts:15](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/tool-context.ts#L15)

Options for configuring tool context injection behavior.

## See

[injectToolContext](../functions/injectToolContext.md) for the main injection function

## Properties

### onSubagentEvent?

> `optional` **onSubagentEvent**: [`OnSubagentEvent`](../type-aliases/OnSubagentEvent.md)

Defined in: [src/execution/tool-context.ts:21](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/tool-context.ts#L21)

Callback for receiving sub-agent events emitted by tools.
Tools that spawn sub-agents can use this callback to propagate
lifecycle events (start, inner events, end) to the parent context.
