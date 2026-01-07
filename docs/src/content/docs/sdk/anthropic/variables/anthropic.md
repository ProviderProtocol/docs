---
title: "Variable: anthropic"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [anthropic](../README.md) / anthropic

# Variable: anthropic

> `const` **anthropic**: [`Provider`](../../@providerprotocol/ai/interfaces/Provider.md)\<`unknown`\>

Defined in: [src/providers/anthropic/index.ts:24](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/index.ts#L24)

Anthropic provider instance for the Universal Provider Protocol.

Provides access to Claude language models through a unified interface.
Currently supports the LLM modality with full streaming, tool use,
structured output, and image input capabilities.

## Example

```typescript
import { anthropic } from './providers/anthropic';

const claude = anthropic.llm.bind('claude-sonnet-4-20250514');
const response = await claude.complete({
  messages: [new UserMessage([{ type: 'text', text: 'Hello!' }])],
  config: { apiKey: 'sk-...' },
});
```

## See

[AnthropicLLMParams](../interfaces/AnthropicLLMParams.md) for provider-specific parameters
