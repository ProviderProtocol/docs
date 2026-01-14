---
title: "Variable: anthropic"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / anthropic

# Variable: anthropic

> `const` **anthropic**: [`Provider`](../../core/interfaces/provider.md)\<[`AnthropicModelOptions`](../interfaces/anthropicmodeloptions.md)\>

Defined in: [src/providers/anthropic/index.ts:97](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/index.ts#L97)

Anthropic provider for the Universal Provider Protocol.

Provides access to Claude language models through a unified interface.
Supports LLM modality with streaming, tool use, structured output,
and image input capabilities.

## Param

The model identifier (e.g., 'claude-sonnet-4-20250514')

## Param

Optional configuration including beta features

## Returns

A model reference for use with `llm()`

## Example

```typescript
import { anthropic, betas } from 'provider-protocol/anthropic';
import { llm } from 'provider-protocol';

// Basic usage
const model = llm({ model: anthropic('claude-sonnet-4-20250514') });

// With structured outputs beta
const modelWithBetas = llm({
  model: anthropic('claude-sonnet-4-20250514', {
    betas: [betas.structuredOutputs],
  }),
  structure: { properties: { name: { type: 'string' } } },
});

// With multiple betas
const advancedModel = llm({
  model: anthropic('claude-sonnet-4-20250514', {
    betas: [betas.structuredOutputs, betas.tokenEfficientTools],
  }),
});
```

## See

 - [betas](betas.md) for available beta features
 - [AnthropicLLMParams](../interfaces/anthropicllmparams.md) for provider-specific parameters
