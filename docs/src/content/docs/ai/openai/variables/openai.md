---
title: "Variable: openai"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / openai

# Variable: openai

> `const` **openai**: `OpenAIProvider`

Defined in: [src/providers/openai/index.ts:214](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/index.ts#L214)

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
