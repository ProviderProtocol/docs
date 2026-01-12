---
title: "Interface: StreamEvent"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamEvent

# Interface: StreamEvent

Defined in: [src/types/stream.ts:114](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/stream.ts#L114)

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

Defined in: [src/types/stream.ts:122](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/stream.ts#L122)

Event-specific data payload

***

### index

> **index**: `number`

Defined in: [src/types/stream.ts:119](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/stream.ts#L119)

Index of the content block this event belongs to

***

### type

> **type**: [`StreamEventType`](../type-aliases/streameventtype.md)

Defined in: [src/types/stream.ts:116](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/stream.ts#L116)

Event type discriminator
