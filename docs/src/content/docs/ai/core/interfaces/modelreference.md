---
title: "Interface: ModelReference"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ModelReference

# Interface: ModelReference\<TOptions\>

Defined in: [src/types/provider.ts:180](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L180)

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

Defined in: [src/types/provider.ts:182](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L182)

The model identifier (e.g., 'gpt-4', 'claude-3-opus')

***

### options?

> `readonly` `optional` **options**: `TOptions`

Defined in: [src/types/provider.ts:203](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L203)

The original options passed when creating this model reference.

Used by providers with multiple LLM handlers (e.g., OpenAI with responses/completions APIs)
to resolve the correct handler at request time, avoiding race conditions from shared state.

***

### provider

> `readonly` **provider**: [`Provider`](provider.md)\<`TOptions`\>

Defined in: [src/types/provider.ts:185](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L185)

The provider that created this reference

***

### providerConfig?

> `readonly` `optional` **providerConfig**: `Partial`\<[`ProviderConfig`](providerconfig.md)\>

Defined in: [src/types/provider.ts:195](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L195)

Optional provider-specific configuration that gets merged into request config.

This allows providers to store options set at model reference creation time
(e.g., `anthropic('model', { betas: [...] })`) that should be applied to all requests.
The `llm()` factory will merge these into the request config, with explicit config
values taking precedence.
