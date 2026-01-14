---
title: "Function: statusToErrorCode()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / statusToErrorCode

# Function: statusToErrorCode()

> **statusToErrorCode**(`status`): [`ErrorCode`](../../core/type-aliases/errorcode.md)

Defined in: [src/http/errors.ts:37](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/http/errors.ts#L37)

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

[`ErrorCode`](../../core/type-aliases/errorcode.md)

The corresponding UPP ErrorCode

## Example

```typescript
const errorCode = statusToErrorCode(429);
// Returns 'RATE_LIMITED'

const serverError = statusToErrorCode(503);
// Returns 'PROVIDER_ERROR'
```
