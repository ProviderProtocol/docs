---
title: "Function: textDelta()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / textDelta

# Function: textDelta()

> **textDelta**(`text`, `index`): [`StreamEvent`](../interfaces/StreamEvent.md)

Defined in: [src/types/stream.ts:183](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/stream.ts#L183)

Creates a text delta stream event.

## Parameters

### text

`string`

The incremental text content

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/StreamEvent.md)

A text_delta StreamEvent
