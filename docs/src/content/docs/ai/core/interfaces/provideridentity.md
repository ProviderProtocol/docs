---
title: "Interface: ProviderIdentity"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ProviderIdentity

# Interface: ProviderIdentity

Defined in: [src/types/provider.ts:95](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L95)

Provider identity shape for structural typing.

Used in model input types to accept any provider instance
without generic variance constraints.

## Extended by

- [`Provider`](provider.md)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/types/provider.ts:97](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L97)

Provider name (e.g., 'openai', 'anthropic')

***

### version

> `readonly` **version**: `string`

Defined in: [src/types/provider.ts:100](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L100)

Provider version string
