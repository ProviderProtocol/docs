---
title: "Function: createProvider()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / createProvider

# Function: createProvider()

> **createProvider**\<`TOptions`\>(`options`): [`Provider`](../interfaces/provider.md)\<`TOptions`\>

Defined in: [src/core/provider.ts:126](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/core/provider.ts#L126)

Creates a provider factory function with registered modality handlers.

The returned provider is a callable function that creates model references
when invoked with a model ID. It exposes `name` and `version` metadata.

## Type Parameters

### TOptions

`TOptions` = `unknown`

Provider-specific options type (defaults to unknown)

## Parameters

### options

`CreateProviderOptions`\<`TOptions`\>

Provider configuration including name, version, and handlers

## Returns

[`Provider`](../interfaces/provider.md)\<`TOptions`\>

A callable Provider with handlers registered internally

## Example

```typescript
// Create a basic provider
const anthropic = createProvider({
  name: 'anthropic',
  version: '1.0.0',
  handlers: { llm: createLLMHandler() },
});

// Use the provider to create a model reference
const model = anthropic('claude-sonnet-4-20250514');

// Provider with custom options type
interface MyOptions { apiVersion?: 'v1' | 'v2' }
const myProvider = createProvider<MyOptions>({
  name: 'my-provider',
  version: '1.0.0',
  handlers: { llm: handler },
});

// Provider with multiple LLM handlers (API modes)
const openai = createProvider<OpenAIOptions>({
  name: 'openai',
  version: '1.0.0',
  handlers: {
    llm: {
      handlers: { responses: responsesHandler, completions: completionsHandler },
      defaultMode: 'responses',
      getMode: (opts) => opts?.api ?? 'responses',
    },
  },
});
```
