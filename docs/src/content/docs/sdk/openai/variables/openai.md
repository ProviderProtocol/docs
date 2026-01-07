---
title: "Variable: openai"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / openai

# Variable: openai

> `const` **openai**: `OpenAIProvider`

Defined in: [src/providers/openai/index.ts:224](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/index.ts#L224)

The OpenAI provider instance.

Supports both the modern Responses API (default) and the legacy Chat Completions API.
Use this provider to create model references for OpenAI models like GPT-4o, GPT-4 Turbo,
and the o1 series.

## Examples

```typescript
import { openai } from './providers/openai';
import { llm } from './core/llm';

const model = llm({
  model: openai('gpt-4o'),
  params: { max_output_tokens: 1000 }
});

const turn = await model.generate('Hello!');
console.log(turn.response.text);
```

```typescript
const legacyModel = llm({
  model: openai('gpt-4o', { api: 'completions' }),
  params: { max_tokens: 1000 }
});
```

```typescript
import { openai, tools } from './providers/openai';

const model = llm({
  model: openai('gpt-4o'),
  params: {
    tools: [tools.webSearch(), tools.imageGeneration()]
  }
});
```
