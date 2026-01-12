---
title: "Variable: openai"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / openai

# Variable: openai

> `const` **openai**: [`Provider`](../../core/interfaces/provider.md)\<`OpenAIProviderOptions`\>

Defined in: [src/providers/openai/index.ts:79](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/index.ts#L79)

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
