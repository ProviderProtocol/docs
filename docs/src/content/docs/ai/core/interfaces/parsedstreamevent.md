---
title: "Interface: ParsedStreamEvent"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ParsedStreamEvent

# Interface: ParsedStreamEvent

Defined in: [src/middleware/parsed-object.ts:28](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/parsed-object.ts#L28)

Stream event with parsed JSON data.
Returned by parsedObjectMiddleware for ObjectDelta and ToolCallDelta events.

## Extends

- `Omit`\<[`StreamEvent`](streamevent.md), `"delta"`\>

## Properties

### delta

> **delta**: [`ParsedEventDelta`](parsedeventdelta.md)

Defined in: [src/middleware/parsed-object.ts:29](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/parsed-object.ts#L29)

***

### index

> **index**: `number`

Defined in: [src/types/stream.ts:137](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L137)

Index of the content block this event belongs to

#### Inherited from

[`StreamEvent`](streamevent.md).[`index`](streamevent.md#index)

***

### type

> **type**: [`StreamEventType`](../type-aliases/streameventtype.md)

Defined in: [src/types/stream.ts:134](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L134)

Event type discriminator

#### Inherited from

[`StreamEvent`](streamevent.md).[`type`](streamevent.md#type)
