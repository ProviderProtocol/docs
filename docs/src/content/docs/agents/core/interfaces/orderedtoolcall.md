---
title: "Interface: OrderedToolCall"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / OrderedToolCall

# Interface: OrderedToolCall

Defined in: [src/execution/types.ts:552](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L552)

Model-driven tool call with optional execution order hint.

Extends the standard ToolCall with an `after` field that models
can use to signal dependencies between specific tool call instances.
This enables fine-grained ordering beyond tool-level dependencies.

## See

UAP-1.0 Spec Section 8.6

## Example

```typescript
// Model might return tool calls like:
const toolCalls: OrderedToolCall[] = [
  { toolCallId: 'call-1', toolName: 'read', arguments: { path: 'a.txt' } },
  { toolCallId: 'call-2', toolName: 'read', arguments: { path: 'b.txt' } },
  {
    toolCallId: 'call-3',
    toolName: 'merge',
    arguments: {},
    after: ['call-1', 'call-2'], // Wait for both reads
  },
];
```

## Extends

- `ToolCall`

## Properties

### after?

> `optional` **after**: `string`[]

Defined in: [src/execution/types.ts:554](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L554)

Tool call IDs that must complete before this call executes

***

### arguments

> **arguments**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:151

#### Inherited from

`ToolCall.arguments`

***

### toolCallId

> **toolCallId**: `string`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:149

#### Inherited from

`ToolCall.toolCallId`

***

### toolName

> **toolName**: `string`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:150

#### Inherited from

`ToolCall.toolName`
