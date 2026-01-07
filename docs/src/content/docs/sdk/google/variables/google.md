---
title: "Variable: google"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [google](../README.md) / google

# Variable: google

> `const` **google**: [`Provider`](../../@providerprotocol/ai/interfaces/Provider.md)\<`unknown`\>

Defined in: [src/providers/google/index.ts:39](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/index.ts#L39)

Google Gemini provider for the Unified Provider Protocol (UPP).

Provides access to Google's Gemini family of large language models through
a standardized interface. Supports text generation, multimodal inputs
(images, video, audio), tool/function calling, and structured output.

## Example

```typescript
import { google } from './providers/google';

// Create a model instance
const gemini = google.llm.bind('gemini-1.5-pro');

// Simple completion
const response = await gemini.complete({
  messages: [{ role: 'user', content: [{ type: 'text', text: 'Hello!' }] }],
  config: { apiKey: process.env.GOOGLE_API_KEY },
});

// Streaming completion
const stream = gemini.stream({
  messages: [{ role: 'user', content: [{ type: 'text', text: 'Tell me a story' }] }],
  config: { apiKey: process.env.GOOGLE_API_KEY },
});

for await (const event of stream) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta.text);
  }
}
```

## See

[GoogleLLMParams](../interfaces/GoogleLLMParams.md) for provider-specific configuration options
