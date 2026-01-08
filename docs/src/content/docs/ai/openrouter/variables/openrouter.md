---
title: "Variable: openrouter"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / openrouter

# Variable: openrouter

> `const` **openrouter**: `OpenRouterProvider`

Defined in: [src/providers/openrouter/index.ts:190](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/openrouter/index.ts#L190)

OpenRouter provider singleton.

OpenRouter is a unified API that provides access to hundreds of AI models
through a single endpoint, including models from OpenAI, Anthropic, Google,
Meta, Mistral, and many others.

Supports both the Chat Completions API (default) and Responses API (beta).

## Examples

```typescript
import { openrouter } from './providers/openrouter';
import { llm } from './core/llm';

const model = llm({
  model: openrouter('openai/gpt-4o'),
  params: { max_tokens: 1000 }
});

const turn = await model.generate('Hello!');
console.log(turn.response.text);
```

```typescript
const betaModel = llm({
  model: openrouter('openai/gpt-4o', { api: 'responses' }),
  params: { max_output_tokens: 1000 }
});
```

```typescript
const routedModel = llm({
  model: openrouter('openai/gpt-4o'),
  params: {
    max_tokens: 1000,
    models: ['openai/gpt-4o', 'anthropic/claude-3.5-sonnet'],
    route: 'fallback',
    provider: {
      allow_fallbacks: true,
      require_parameters: true,
    },
  }
});
```

## See

[OpenRouter Documentation](https://openrouter.ai/docs)
