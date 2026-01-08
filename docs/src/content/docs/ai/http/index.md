---
title: "http"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / http

# http

HTTP utilities module for unified provider protocol.

This module provides comprehensive HTTP infrastructure including:
- API key management with multiple strategies (round-robin, weighted, dynamic)
- Retry strategies (exponential backoff, linear backoff, token bucket)
- Fetch wrappers with timeout and error normalization
- Server-Sent Events (SSE) stream parsing
- Standardized error handling and normalization

## Functions

- [cancelledError](functions/cancellederror.md)
- [doFetch](functions/dofetch.md)
- [doStreamFetch](functions/dostreamfetch.md)
- [networkError](functions/networkerror.md)
- [normalizeHttpError](functions/normalizehttperror.md)
- [parseSimpleTextStream](functions/parsesimpletextstream.md)
- [parseSSEStream](functions/parsessestream.md)
- [resolveApiKey](functions/resolveapikey.md)
- [statusToErrorCode](functions/statustoerrorcode.md)
- [timeoutError](functions/timeouterror.md)

## References

### DynamicKey

Re-exports [DynamicKey](../core/classes/dynamickey.md)

***

### ExponentialBackoff

Re-exports [ExponentialBackoff](../core/classes/exponentialbackoff.md)

***

### LinearBackoff

Re-exports [LinearBackoff](../core/classes/linearbackoff.md)

***

### NoRetry

Re-exports [NoRetry](../core/classes/noretry.md)

***

### RetryAfterStrategy

Re-exports [RetryAfterStrategy](../core/classes/retryafterstrategy.md)

***

### RoundRobinKeys

Re-exports [RoundRobinKeys](../core/classes/roundrobinkeys.md)

***

### TokenBucket

Re-exports [TokenBucket](../core/classes/tokenbucket.md)

***

### WeightedKeys

Re-exports [WeightedKeys](../core/classes/weightedkeys.md)
