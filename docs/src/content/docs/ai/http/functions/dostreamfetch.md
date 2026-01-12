---
title: "Function: doStreamFetch()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / doStreamFetch

# Function: doStreamFetch()

> **doStreamFetch**(`url`, `init`, `config`, `provider`, `modality`): `Promise`\<`Response`\>

Defined in: [src/http/fetch.ts:267](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/http/fetch.ts#L267)

Executes an HTTP fetch request for streaming responses.

Unlike [doFetch](dofetch.md), this function returns the response immediately without
checking the HTTP status. This is necessary for Server-Sent Events (SSE) and
other streaming protocols where error information may be embedded in the stream.

The caller is responsible for:
- Checking response.ok and handling HTTP errors
- Parsing the response stream (e.g., using parseSSEStream)
- Handling stream-specific error conditions

Retries are not performed for streaming requests since partial data may have
already been consumed by the caller.

## Parameters

### url

`string`

The URL to fetch

### init

`RequestInit`

Standard fetch RequestInit options

### config

[`ProviderConfig`](../../core/interfaces/providerconfig.md)

Provider configuration containing fetch customization and timeout

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../core/type-aliases/modality.md)

Request modality for error context

## Returns

`Promise`\<`Response`\>

The Response object (may have non-2xx status)

## Throws

NETWORK_ERROR - When a network failure occurs

## Throws

TIMEOUT - When the request times out

## Throws

CANCELLED - When the request is aborted via signal

## Example

```typescript
const response = await doStreamFetch(
  'https://api.openai.com/v1/chat/completions',
  {
    method: 'POST',
    headers: { 'Authorization': 'Bearer sk-...' },
    body: JSON.stringify({ model: 'gpt-4', messages: [], stream: true })
  },
  { timeout: 120000 },
  'openai',
  'llm'
);

if (!response.ok) {
  throw await normalizeHttpError(response, 'openai', 'llm');
}

for await (const event of parseSSEStream(response.body!)) {
  console.log(event);
}
```
