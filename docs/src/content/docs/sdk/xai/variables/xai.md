---
title: "Variable: xai"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [xai](../README.md) / xai

# Variable: xai

> `const` **xai**: [`XAIProvider`](../interfaces/XAIProvider.md)

Defined in: [src/providers/xai/index.ts:212](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L212)

xAI provider

Supports three API modes:
- Chat Completions API (default, OpenAI-compatible)
- Responses API (stateful, OpenAI Responses-compatible)
- Messages API (Anthropic-compatible)

xAI's Grok models support:
- Real-time search via Live Search API (deprecated Dec 2025) or Agent Tools API
- Reasoning with `reasoning_effort` parameter (for Grok 3 Mini)
- Tool/function calling
- Image input
- Streaming responses
- Structured output (JSON mode)

## Example

```ts
import { xai } from './providers/xai';
import { llm } from './core/llm';

// Using Chat Completions API (default, recommended)
const model = llm({
  model: xai('grok-4'),
  params: { max_tokens: 1000 }
});

// Using Responses API (stateful conversations)
const statefulModel = llm({
  model: xai('grok-4', { api: 'responses' }),
  params: {
    max_output_tokens: 1000,
    store: true, // Enable stateful storage
  }
});

// Continue a previous conversation
const continuedModel = llm({
  model: xai('grok-4', { api: 'responses' }),
  params: {
    previous_response_id: 'resp_123...',
  }
});

// Using Messages API (Anthropic-compatible)
const anthropicModel = llm({
  model: xai('grok-4', { api: 'messages' }),
  params: { max_tokens: 1000 }
});

// Using reasoning effort (Grok 3 Mini only)
const reasoningModel = llm({
  model: xai('grok-3-mini'),
  params: {
    max_tokens: 1000,
    reasoning_effort: 'high', // 'low' or 'high'
  }
});

// Using Live Search (deprecated Dec 2025)
const searchModel = llm({
  model: xai('grok-4'),
  params: {
    max_tokens: 1000,
    search_parameters: {
      mode: 'auto',
      sources: ['web', 'x', 'news'],
    }
  }
});

// Generate
const turn = await model.generate('Hello!');
console.log(turn.response.text);
```
