---
title: "Function: doStreamFetch()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [http](../README.md) / doStreamFetch

# Function: doStreamFetch()

> **doStreamFetch**(`url`, `init`, `config`, `provider`, `modality`): `Promise`\<`Response`\>

Defined in: [src/http/fetch.ts:261](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/fetch.ts#L261)

Executes an HTTP fetch request for streaming responses.

Unlike [doFetch](doFetch.md), this function returns the response immediately without
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

[`ProviderConfig`](../../@providerprotocol/ai/interfaces/ProviderConfig.md)

Provider configuration containing fetch customization and timeout

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../@providerprotocol/ai/type-aliases/Modality.md)

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
