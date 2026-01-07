---
title: "Variable: ollama"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [ollama](../README.md) / ollama

# Variable: ollama

> `const` **ollama**: [`Provider`](../../@providerprotocol/ai/interfaces/Provider.md)\<`unknown`\>

Defined in: [src/providers/ollama/index.ts:80](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/ollama/index.ts#L80)

Ollama provider for local LLM inference.

Ollama runs models locally on your machine, eliminating the need for API keys
and external network calls. This makes it ideal for development, testing,
and privacy-sensitive applications.

**Supported Models:**
- Llama 3.x (Meta's latest open-weight models)
- Mistral / Mixtral (Mistral AI's efficient models)
- Gemma (Google's lightweight models)
- Qwen (Alibaba's multilingual models)
- DeepSeek (DeepSeek's code and reasoning models)
- Phi (Microsoft's small language models)
- CodeLlama (Code-specialized Llama variants)
- And many more from the Ollama model library

**Prerequisites:**
1. Install Ollama from https://ollama.ai
2. Pull a model: `ollama pull llama3.2`
3. Ensure Ollama is running (default: http://localhost:11434)

**Note on Tool Calling:**
For tool/function calling, Ollama recommends using their OpenAI-compatible
API endpoint. Use the OpenAI provider with `baseUrl` pointed to Ollama instead.

## Examples

```typescript
import { llm } from 'provider-protocol';
import { ollama } from 'provider-protocol/ollama';

const model = llm(ollama('llama3.2'));
const result = await model.complete({
  messages: [{ role: 'user', content: 'Hello!' }]
});
```

```typescript
import { llm } from 'provider-protocol';
import { ollama } from 'provider-protocol/ollama';

const model = llm(ollama('llama3.2'), {
  baseUrl: 'http://my-ollama-server:11434',
});
```

```typescript
const model = llm(ollama('llama3.2'));
const stream = model.stream({
  messages: [{ role: 'user', content: 'Write a poem' }]
});

for await (const event of stream) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta.text);
  }
}
```

```typescript
const model = llm(ollama('llama3.2'));
const result = await model.complete({
  messages: [{ role: 'user', content: 'Be creative!' }],
  params: {
    temperature: 0.9,
    top_p: 0.95,
    num_predict: 500
  }
});
```

## See

[OllamaLLMParams](../interfaces/OllamaLLMParams.md) for available model parameters
