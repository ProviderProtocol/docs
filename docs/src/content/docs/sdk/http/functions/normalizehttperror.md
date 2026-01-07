---
title: "Function: normalizeHttpError()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [http](../README.md) / normalizeHttpError

# Function: normalizeHttpError()

> **normalizeHttpError**(`response`, `provider`, `modality`): `Promise`\<[`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)\>

Defined in: [src/http/errors.ts:87](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/errors.ts#L87)

Normalizes HTTP error responses into standardized UPPError objects.

This function performs several operations:
1. Maps the HTTP status code to an appropriate ErrorCode
2. Attempts to extract a meaningful error message from the response body
3. Handles various provider-specific error response formats

Supported error message formats:
- `{ error: { message: "..." } }` (OpenAI, Anthropic)
- `{ message: "..." }` (simple format)
- `{ error: { error: { message: "..." } } }` (nested format)
- `{ detail: "..." }` (FastAPI style)
- Plain text body (if under 200 characters)

## Parameters

### response

`Response`

The HTTP Response object with non-2xx status

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../@providerprotocol/ai/type-aliases/Modality.md)

Request modality for error context

## Returns

`Promise`\<[`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)\>

A UPPError with normalized code and message

## Example

```typescript
if (!response.ok) {
  const error = await normalizeHttpError(response, 'openai', 'llm');
  // error.code might be 'RATE_LIMITED' for 429
  // error.message contains provider's error message
  throw error;
}
```
