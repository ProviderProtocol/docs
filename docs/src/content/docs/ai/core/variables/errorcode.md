---
title: "Variable: ErrorCode"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ErrorCode

# Variable: ErrorCode

> `const` **ErrorCode**: `object`

Defined in: [src/types/errors.ts:34](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/errors.ts#L34)

Error code constants for cross-provider error handling.

Use these constants instead of raw strings for type-safe error handling:

## Type Declaration

### AuthenticationFailed

> `readonly` **AuthenticationFailed**: `"AUTHENTICATION_FAILED"` = `'AUTHENTICATION_FAILED'`

API key is invalid or expired

### Cancelled

> `readonly` **Cancelled**: `"CANCELLED"` = `'CANCELLED'`

Request was cancelled via AbortSignal

### ContentFiltered

> `readonly` **ContentFiltered**: `"CONTENT_FILTERED"` = `'CONTENT_FILTERED'`

Content was blocked by safety filters

### ContextLengthExceeded

> `readonly` **ContextLengthExceeded**: `"CONTEXT_LENGTH_EXCEEDED"` = `'CONTEXT_LENGTH_EXCEEDED'`

Input exceeds model's context window

### InvalidRequest

> `readonly` **InvalidRequest**: `"INVALID_REQUEST"` = `'INVALID_REQUEST'`

Request parameters are malformed

### InvalidResponse

> `readonly` **InvalidResponse**: `"INVALID_RESPONSE"` = `'INVALID_RESPONSE'`

Provider returned an unexpected response format

### ModelNotFound

> `readonly` **ModelNotFound**: `"MODEL_NOT_FOUND"` = `'MODEL_NOT_FOUND'`

Requested model does not exist

### NetworkError

> `readonly` **NetworkError**: `"NETWORK_ERROR"` = `'NETWORK_ERROR'`

Network connectivity issue

### ProviderError

> `readonly` **ProviderError**: `"PROVIDER_ERROR"` = `'PROVIDER_ERROR'`

Provider-specific error not covered by other codes

### QuotaExceeded

> `readonly` **QuotaExceeded**: `"QUOTA_EXCEEDED"` = `'QUOTA_EXCEEDED'`

Account quota or credits exhausted

### RateLimited

> `readonly` **RateLimited**: `"RATE_LIMITED"` = `'RATE_LIMITED'`

Rate limit exceeded, retry after delay

### Timeout

> `readonly` **Timeout**: `"TIMEOUT"` = `'TIMEOUT'`

Request exceeded timeout limit

## Example

```typescript
import { ErrorCode } from 'upp';

try {
  await llm.generate('Hello');
} catch (error) {
  if (error instanceof UPPError) {
    switch (error.code) {
      case ErrorCode.RateLimited:
        await delay(error.retryAfter);
        break;
      case ErrorCode.AuthenticationFailed:
        throw new Error('Invalid API key');
    }
  }
}
```
