---
title: "Interface: InjectToolContextOptions"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / InjectToolContextOptions

# Interface: InjectToolContextOptions

Defined in: [src/execution/tool-context.ts:15](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/tool-context.ts#L15)

Options for configuring tool context injection behavior.

## See

[injectToolContext](../functions/injecttoolcontext.md) for the main injection function

## Properties

### onSubagentEvent?

> `optional` **onSubagentEvent**: [`OnSubagentEvent`](../type-aliases/onsubagentevent.md)

Defined in: [src/execution/tool-context.ts:21](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/tool-context.ts#L21)

Callback for receiving sub-agent events emitted by tools.
Tools that spawn sub-agents can use this callback to propagate
lifecycle events (start, inner events, end) to the parent context.
