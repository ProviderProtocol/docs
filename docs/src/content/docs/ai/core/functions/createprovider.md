---
title: "Function: createProvider()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / createProvider

# Function: createProvider()

> **createProvider**\<`TOptions`\>(`options`): [`Provider`](../interfaces/provider.md)\<`TOptions`\>

Defined in: [src/core/provider.ts:85](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/core/provider.ts#L85)

Creates a provider factory function with attached modality handlers.

The returned provider is a callable function that creates model references
when invoked with a model ID. It also exposes `name`, `version`, and
`modalities` properties for introspection.

## Type Parameters

### TOptions

`TOptions` = `unknown`

Provider-specific options type (defaults to unknown)

## Parameters

### options

`CreateProviderOptions`

Provider configuration including name, version, and handlers

## Returns

[`Provider`](../interfaces/provider.md)\<`TOptions`\>

A callable Provider with modalities attached

## Example

```typescript
// Create a basic provider
const anthropic = createProvider({
  name: 'anthropic',
  version: '1.0.0',
  modalities: { llm: createLLMHandler() },
});

// Use the provider to create a model reference
const model = anthropic('claude-sonnet-4-20250514');

// Provider with custom options type
interface MyOptions { apiVersion?: 'v1' | 'v2' }
const myProvider = createProvider<MyOptions>({
  name: 'my-provider',
  version: '1.0.0',
  modalities: { llm: handler },
});
```
