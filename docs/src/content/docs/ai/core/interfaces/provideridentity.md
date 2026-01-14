---
title: "Interface: ProviderIdentity"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ProviderIdentity

# Interface: ProviderIdentity

Defined in: [src/types/provider.ts:96](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L96)

Provider identity shape for structural typing.

Used in model input types to accept any provider instance
without generic variance constraints.

## Extended by

- [`Provider`](provider.md)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/types/provider.ts:98](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L98)

Provider name (e.g., 'openai', 'anthropic')

***

### version

> `readonly` **version**: `string`

Defined in: [src/types/provider.ts:101](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L101)

Provider version string
