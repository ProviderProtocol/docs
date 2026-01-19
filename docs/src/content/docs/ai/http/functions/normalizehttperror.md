---
title: "Function: normalizeHttpError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / normalizeHttpError

# Function: normalizeHttpError()

> **normalizeHttpError**(`response`, `provider`, `modality`): `Promise`\<[`UPPError`](../../core/classes/upperror.md)\>

Defined in: [src/http/errors.ts:100](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/http/errors.ts#L100)

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

[`Modality`](../../core/type-aliases/modality.md)

Request modality for error context

## Returns

`Promise`\<[`UPPError`](../../core/classes/upperror.md)\>

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
