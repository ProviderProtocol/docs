---
title: "Interface: ThreadJSON"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ThreadJSON

# Interface: ThreadJSON

Defined in: [src/types/thread.ts:55](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/thread.ts#L55)

Serialized thread format for JSON storage.

Contains all data needed to reconstruct a Thread instance.

## Properties

### createdAt

> **createdAt**: `string`

Defined in: [src/types/thread.ts:63](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/thread.ts#L63)

ISO timestamp of thread creation

***

### id

> **id**: `string`

Defined in: [src/types/thread.ts:57](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/thread.ts#L57)

Unique thread identifier

***

### messages

> **messages**: [`MessageJSON`](MessageJSON.md)[]

Defined in: [src/types/thread.ts:60](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/thread.ts#L60)

Serialized messages

***

### updatedAt

> **updatedAt**: `string`

Defined in: [src/types/thread.ts:66](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/thread.ts#L66)

ISO timestamp of last update
