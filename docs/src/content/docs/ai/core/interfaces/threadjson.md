---
title: "Interface: ThreadJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ThreadJSON

# Interface: ThreadJSON

Defined in: [src/types/thread.ts:55](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L55)

Serialized thread format for JSON storage.

Contains all data needed to reconstruct a Thread instance.

## Properties

### createdAt

> **createdAt**: `string`

Defined in: [src/types/thread.ts:63](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L63)

ISO timestamp of thread creation

***

### id

> **id**: `string`

Defined in: [src/types/thread.ts:57](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L57)

Unique thread identifier

***

### messages

> **messages**: [`MessageJSON`](messagejson.md)[]

Defined in: [src/types/thread.ts:60](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L60)

Serialized messages

***

### updatedAt

> **updatedAt**: `string`

Defined in: [src/types/thread.ts:66](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L66)

ISO timestamp of last update
