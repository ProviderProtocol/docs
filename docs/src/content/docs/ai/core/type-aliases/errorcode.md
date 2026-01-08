---
title: "Type Alias: ErrorCode"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ErrorCode

# Type Alias: ErrorCode

> **ErrorCode** = `"AUTHENTICATION_FAILED"` \| `"RATE_LIMITED"` \| `"CONTEXT_LENGTH_EXCEEDED"` \| `"MODEL_NOT_FOUND"` \| `"INVALID_REQUEST"` \| `"INVALID_RESPONSE"` \| `"CONTENT_FILTERED"` \| `"QUOTA_EXCEEDED"` \| `"PROVIDER_ERROR"` \| `"NETWORK_ERROR"` \| `"TIMEOUT"` \| `"CANCELLED"`

Defined in: [src/types/errors.ts:33](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/errors.ts#L33)

Normalized error codes for cross-provider error handling.

These codes provide a consistent way to identify and handle errors
regardless of which AI provider generated them.

## Example

```typescript
try {
  await llm.generate('Hello');
} catch (error) {
  if (error instanceof UPPError) {
    switch (error.code) {
      case 'RATE_LIMITED':
        await delay(error.retryAfter);
        break;
      case 'AUTHENTICATION_FAILED':
        throw new Error('Invalid API key');
    }
  }
}
```
