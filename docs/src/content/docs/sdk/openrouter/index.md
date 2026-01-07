---
title: "openrouter"
---

[**@providerprotocol/ai**](../README.md)

***

[@providerprotocol/ai](../modules.md) / openrouter

# openrouter

OpenRouter provider for UPP (Unified Provider Protocol)

This module exports the OpenRouter provider for accessing hundreds of AI
models through a unified API, including models from OpenAI, Anthropic,
Google, Meta, Mistral, and many others.

## Examples

```ts
import { openrouter } from '@providerprotocol/ai/openrouter';
import { llm } from '@providerprotocol/ai';

// Access OpenAI models through OpenRouter
const model = llm({
  model: openrouter('openai/gpt-4o'),
  params: { max_tokens: 1000 }
});

// Generate a response
const turn = await model.generate('Hello!');
console.log(turn.response.text);
```

```ts
const claudeModel = llm({
  model: openrouter('anthropic/claude-3.5-sonnet'),
  params: { max_tokens: 1000 }
});
```

```ts
const responsesModel = llm({
  model: openrouter('openai/gpt-4o', { api: 'responses' }),
  params: { max_output_tokens: 1000 }
});
```

## See

[OpenRouter Documentation](https://openrouter.ai/docs)

## Interfaces

- [OpenRouterCompletionsParams](interfaces/OpenRouterCompletionsParams.md)
- [OpenRouterConfig](interfaces/OpenRouterConfig.md)
- [OpenRouterModelOptions](interfaces/OpenRouterModelOptions.md)
- [OpenRouterModelReference](interfaces/OpenRouterModelReference.md)
- [OpenRouterProviderPreferences](interfaces/OpenRouterProviderPreferences.md)
- [OpenRouterResponsesParams](interfaces/OpenRouterResponsesParams.md)

## Type Aliases

- [OpenRouterAPIMode](type-aliases/OpenRouterAPIMode.md)

## Variables

- [openrouter](variables/openrouter.md)
