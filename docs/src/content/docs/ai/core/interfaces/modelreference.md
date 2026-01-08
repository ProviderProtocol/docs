---
title: "Interface: ModelReference"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ModelReference

# Interface: ModelReference\<TOptions\>

Defined in: [src/types/provider.ts:147](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L147)

A reference to a model, created by a provider factory.

Model references are lightweight objects that identify a model
and its provider, used as input to the llm() function.

## Example

```typescript
const model = openai('gpt-4');
console.log(model.modelId); // 'gpt-4'
console.log(model.provider.name); // 'openai'
```

## Type Parameters

### TOptions

`TOptions` = `unknown`

Provider-specific options type

## Properties

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:149](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L149)

The model identifier (e.g., 'gpt-4', 'claude-3-opus')

***

### provider

> `readonly` **provider**: [`Provider`](provider.md)\<`TOptions`\>

Defined in: [src/types/provider.ts:152](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L152)

The provider that created this reference
