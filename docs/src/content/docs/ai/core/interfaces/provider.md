---
title: "Interface: Provider()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Provider

# Interface: Provider()\<TOptions\>

Defined in: [src/types/provider.ts:416](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L416)

Provider factory function with metadata and modality handlers.

The Provider interface represents a callable function that creates
model references, along with metadata and modality-specific handlers.

## Example

```typescript
// Using a provider
const model = openai('gpt-4', { temperature: 0.7 });

// Accessing provider metadata
console.log(openai.name); // 'openai'
console.log(openai.version); // '1.0.0'
```

## Remarks

Providers are intended to be used with `llm()`, `embedding()`, or `image()`.
Direct handler access is not part of the public API.

## Extends

- [`ProviderIdentity`](provideridentity.md)

## Type Parameters

### TOptions

`TOptions` = `unknown`

Provider-specific options passed to the factory

> **Provider**(`modelId`, `options?`): [`ModelReference`](modelreference.md)\<`TOptions`\>

Defined in: [src/types/provider.ts:424](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L424)

Creates a model reference with optional provider-specific options.

## Parameters

### modelId

`string`

The model identifier

### options?

`TOptions`

Provider-specific options

## Returns

[`ModelReference`](modelreference.md)\<`TOptions`\>

A model reference for use with llm() or other functions

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/types/provider.ts:427](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L427)

Provider name (e.g., 'openai', 'anthropic')

#### Overrides

[`ProviderIdentity`](provideridentity.md).[`name`](provideridentity.md#name)

***

### version

> `readonly` **version**: `string`

Defined in: [src/types/provider.ts:430](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L430)

Provider version string

#### Overrides

[`ProviderIdentity`](provideridentity.md).[`version`](provideridentity.md#version)
