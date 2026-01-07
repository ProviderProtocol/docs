---
title: "Function: llm()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / llm

# Function: llm()

> **llm**\<`TParams`\>(`options`): [`LLMInstance`](../interfaces/LLMInstance.md)\<`TParams`\>

Defined in: [src/core/llm.ts:74](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/core/llm.ts#L74)

Creates an LLM instance configured with the specified options.

This is the primary factory function for creating LLM instances. It validates
provider capabilities, binds the model, and returns an instance with `generate`
and `stream` methods for inference.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type for model configuration

## Parameters

### options

[`LLMOptions`](../interfaces/LLMOptions.md)\<`TParams`\>

Configuration options for the LLM instance

## Returns

[`LLMInstance`](../interfaces/LLMInstance.md)\<`TParams`\>

A configured LLM instance ready for inference

## Throws

When the provider does not support the LLM modality

## Throws

When structured output is requested but not supported

## Throws

When tools are provided but not supported

## Example

```typescript
import { llm } from 'upp';
import { anthropic } from 'upp/providers/anthropic';

const assistant = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  system: 'You are a helpful assistant.',
  tools: [myTool],
});

const turn = await assistant.generate('Hello, world!');
console.log(turn.text);
```
