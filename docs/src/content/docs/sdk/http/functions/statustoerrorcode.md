---
title: "Function: statusToErrorCode()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [http](../README.md) / statusToErrorCode

# Function: statusToErrorCode()

> **statusToErrorCode**(`status`): [`ErrorCode`](../../@providerprotocol/ai/type-aliases/ErrorCode.md)

Defined in: [src/http/errors.ts:32](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/errors.ts#L32)

Maps HTTP status codes to standardized UPP error codes.

This function provides consistent error categorization across all providers:
- 400 -> INVALID_REQUEST (bad request format or parameters)
- 401, 403 -> AUTHENTICATION_FAILED (invalid or missing credentials)
- 404 -> MODEL_NOT_FOUND (requested model does not exist)
- 408 -> TIMEOUT (request timed out)
- 413 -> CONTEXT_LENGTH_EXCEEDED (input too long)
- 429 -> RATE_LIMITED (too many requests)
- 5xx -> PROVIDER_ERROR (server-side issues)

## Parameters

### status

`number`

HTTP status code from the response

## Returns

[`ErrorCode`](../../@providerprotocol/ai/type-aliases/ErrorCode.md)

The corresponding UPP ErrorCode

## Example

```typescript
const errorCode = statusToErrorCode(429);
// Returns 'RATE_LIMITED'

const serverError = statusToErrorCode(503);
// Returns 'PROVIDER_ERROR'
```
