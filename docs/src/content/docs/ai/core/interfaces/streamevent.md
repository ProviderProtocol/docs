---
title: "Interface: StreamEvent"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamEvent

# Interface: StreamEvent

Defined in: [src/types/stream.ts:93](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L93)

A single streaming event from the LLM.

Events are emitted in order as the model generates output,
allowing for real-time display of responses.

## Example

```typescript
for await (const event of stream) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta.text ?? '');
  } else if (event.type === 'tool_call_delta') {
    console.log('Tool:', event.delta.toolName);
  }
}
```

## Properties

### delta

> **delta**: [`EventDelta`](eventdelta.md)

Defined in: [src/types/stream.ts:101](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L101)

Event-specific data payload

***

### index

> **index**: `number`

Defined in: [src/types/stream.ts:98](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L98)

Index of the content block this event belongs to

***

### type

> **type**: [`StreamEventType`](../type-aliases/streameventtype.md)

Defined in: [src/types/stream.ts:95](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/stream.ts#L95)

Event type discriminator
