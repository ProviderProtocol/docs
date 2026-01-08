---
title: "Interface: ModelReference"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ModelReference

# Interface: ModelReference\<TOptions\>

Defined in: [src/types/provider.ts:165](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L165)

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

Defined in: [src/types/provider.ts:167](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L167)

The model identifier (e.g., 'gpt-4', 'claude-3-opus')

***

### provider

> `readonly` **provider**: [`Provider`](provider.md)\<`TOptions`\>

Defined in: [src/types/provider.ts:170](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L170)

The provider that created this reference
