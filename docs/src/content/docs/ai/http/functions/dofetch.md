---
title: "Function: doFetch()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / doFetch

# Function: doFetch()

> **doFetch**(`url`, `init`, `config`, `provider`, `modality`): `Promise`\<`Response`\>

Defined in: [src/http/fetch.ts:57](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/http/fetch.ts#L57)

Executes an HTTP fetch request with automatic retry, timeout handling, and error normalization.

This function wraps the standard fetch API with additional capabilities:
- Configurable timeout with automatic request cancellation
- Retry strategy support (exponential backoff, linear, token bucket, etc.)
- Pre-request delay support for rate limiting strategies
- Automatic Retry-After header parsing and handling
- Error normalization to UPPError format

## Parameters

### url

`string`

The URL to fetch

### init

`RequestInit`

Standard fetch RequestInit options (method, headers, body, etc.)

### config

[`ProviderConfig`](../../core/interfaces/providerconfig.md)

Provider configuration containing fetch customization, timeout, and retry strategy

### provider

`string`

Provider identifier for error context (e.g., 'openai', 'anthropic')

### modality

[`Modality`](../../core/type-aliases/modality.md)

Request modality for error context (e.g., 'llm', 'embedding', 'image')

## Returns

`Promise`\<`Response`\>

The successful Response object

## Throws

RATE_LIMITED - When rate limited and retries exhausted

## Throws

NETWORK_ERROR - When a network failure occurs

## Throws

TIMEOUT - When the request times out

## Throws

CANCELLED - When the request is aborted via signal

## Throws

Various codes based on HTTP status (see statusToErrorCode)

## Example

```typescript
const response = await doFetch(
  'https://api.openai.com/v1/chat/completions',
  {
    method: 'POST',
    headers: { 'Authorization': 'Bearer sk-...' },
    body: JSON.stringify({ model: 'gpt-4', messages: [] })
  },
  { timeout: 30000, retryStrategy: new ExponentialBackoff() },
  'openai',
  'llm'
);
```
