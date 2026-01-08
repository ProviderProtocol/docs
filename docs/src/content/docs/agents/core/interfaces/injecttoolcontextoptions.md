---
title: "Interface: InjectToolContextOptions"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / InjectToolContextOptions

# Interface: InjectToolContextOptions

Defined in: [src/execution/tool-context.ts:15](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/tool-context.ts#L15)

Options for configuring tool context injection behavior.

## See

[injectToolContext](../functions/injecttoolcontext.md) for the main injection function

## Properties

### onSubagentEvent?

> `optional` **onSubagentEvent**: [`OnSubagentEvent`](../type-aliases/onsubagentevent.md)

Defined in: [src/execution/tool-context.ts:21](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/tool-context.ts#L21)

Callback for receiving sub-agent events emitted by tools.
Tools that spawn sub-agents can use this callback to propagate
lifecycle events (start, inner events, end) to the parent context.
