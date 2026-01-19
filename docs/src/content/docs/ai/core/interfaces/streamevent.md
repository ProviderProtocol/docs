---
title: "Interface: StreamEvent"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamEvent

# Interface: StreamEvent

Defined in: [src/types/stream.ts:132](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L132)

A single streaming event from the LLM.

Events are emitted in order as the model generates output,
allowing for real-time display of responses.

## Example

```typescript
import { StreamEventType } from 'upp';

for await (const event of stream) {
  if (event.type === StreamEventType.TextDelta) {
    process.stdout.write(event.delta.text ?? '');
  } else if (event.type === StreamEventType.ToolCallDelta) {
    console.log('Tool:', event.delta.toolName);
  }
}
```

## Properties

### delta

> **delta**: [`EventDelta`](eventdelta.md)

Defined in: [src/types/stream.ts:140](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L140)

Event-specific data payload

***

### index

> **index**: `number`

Defined in: [src/types/stream.ts:137](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L137)

Index of the content block this event belongs to

***

### type

> **type**: [`StreamEventType`](../type-aliases/streameventtype.md)

Defined in: [src/types/stream.ts:134](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L134)

Event type discriminator
