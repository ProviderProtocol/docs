---
title: "Function: parseSimpleTextStream()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / parseSimpleTextStream

# Function: parseSimpleTextStream()

> **parseSimpleTextStream**(`body`): `AsyncGenerator`\<`string`, `void`, `unknown`\>

Defined in: [src/http/sse.ts:160](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/http/sse.ts#L160)

Parses a simple text stream without SSE formatting.

This is a simpler alternative to [parseSSEStream](parsessestream.md) for providers
that stream raw text deltas without SSE event wrappers. Each chunk
from the response body is decoded and yielded as-is.

Use this for:
- Plain text streaming responses
- Providers with custom streaming formats
- Testing and debugging stream handling

## Parameters

### body

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

ReadableStream from fetch response body

## Returns

`AsyncGenerator`\<`string`, `void`, `unknown`\>

## Yields

Decoded text strings from each stream chunk

## Example

```typescript
const response = await doStreamFetch(url, init, config, 'custom', 'llm');

for await (const text of parseSimpleTextStream(response.body!)) {
  process.stdout.write(text);
}
```
