---
title: "Type Alias: ThreadJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ThreadJSON

# Type Alias: ThreadJSON

> **ThreadJSON** = `Pick`\<[`Thread`](../classes/thread.md), `"id"`\> & `object`

Defined in: [src/types/thread.ts:29](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/thread.ts#L29)

Thread serialized to JSON format.
Picks id from Thread, converts dates to strings.

## Type Declaration

### createdAt

> **createdAt**: `string`

### messages

> **messages**: [`MessageJSON`](messagejson.md)[]

### updatedAt

> **updatedAt**: `string`
