---
title: "Function: textDelta()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / textDelta

# Function: textDelta()

> **textDelta**(`text`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:224](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/stream.ts#L224)

Creates a text delta stream event.

## Parameters

### text

`string`

The incremental text content

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/streamevent.md)

A text_delta StreamEvent
