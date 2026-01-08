---
title: "Function: parseSSEStream()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / parseSSEStream

# Function: parseSSEStream()

> **parseSSEStream**(`body`): `AsyncGenerator`\<`unknown`, `void`, `unknown`\>

Defined in: [src/http/sse.ts:37](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/http/sse.ts#L37)

Parses a Server-Sent Events stream into JSON objects.

This async generator handles the standard SSE wire format:
- Lines prefixed with "data:" contain event data
- Lines prefixed with "event:" specify event types
- Lines prefixed with ":" are comments (used for keep-alive)
- Events are separated by double newlines
- Stream terminates on "[DONE]" message (OpenAI convention)

Also handles non-standard formats used by some providers:
- Raw JSON without "data:" prefix (Google)
- Multi-line data fields

## Parameters

### body

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

ReadableStream from fetch response body

## Returns

`AsyncGenerator`\<`unknown`, `void`, `unknown`\>

## Yields

Parsed JSON objects from each SSE event

## Example

```typescript
const response = await doStreamFetch(url, init, config, 'openai', 'llm');

for await (const event of parseSSEStream(response.body!)) {
  // event is parsed JSON from each SSE data field
  const chunk = event as OpenAIStreamChunk;
  const delta = chunk.choices[0]?.delta?.content;
  if (delta) {
    process.stdout.write(delta);
  }
}
```
