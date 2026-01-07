---
title: "http"
---

[**@providerprotocol/ai**](../README.md)

***

[@providerprotocol/ai](../modules.md) / http

# http

HTTP utilities module for unified provider protocol.

This module provides comprehensive HTTP infrastructure including:
- API key management with multiple strategies (round-robin, weighted, dynamic)
- Retry strategies (exponential backoff, linear backoff, token bucket)
- Fetch wrappers with timeout and error normalization
- Server-Sent Events (SSE) stream parsing
- Standardized error handling and normalization

## Functions

- [cancelledError](functions/cancelledError.md)
- [doFetch](functions/doFetch.md)
- [doStreamFetch](functions/doStreamFetch.md)
- [networkError](functions/networkError.md)
- [normalizeHttpError](functions/normalizeHttpError.md)
- [parseSimpleTextStream](functions/parseSimpleTextStream.md)
- [parseSSEStream](functions/parseSSEStream.md)
- [resolveApiKey](functions/resolveApiKey.md)
- [statusToErrorCode](functions/statusToErrorCode.md)
- [timeoutError](functions/timeoutError.md)

## References

### DynamicKey

Re-exports [DynamicKey](../@providerprotocol/ai/classes/DynamicKey.md)

***

### ExponentialBackoff

Re-exports [ExponentialBackoff](../@providerprotocol/ai/classes/ExponentialBackoff.md)

***

### LinearBackoff

Re-exports [LinearBackoff](../@providerprotocol/ai/classes/LinearBackoff.md)

***

### NoRetry

Re-exports [NoRetry](../@providerprotocol/ai/classes/NoRetry.md)

***

### RetryAfterStrategy

Re-exports [RetryAfterStrategy](../@providerprotocol/ai/classes/RetryAfterStrategy.md)

***

### RoundRobinKeys

Re-exports [RoundRobinKeys](../@providerprotocol/ai/classes/RoundRobinKeys.md)

***

### TokenBucket

Re-exports [TokenBucket](../@providerprotocol/ai/classes/TokenBucket.md)

***

### WeightedKeys

Re-exports [WeightedKeys](../@providerprotocol/ai/classes/WeightedKeys.md)
