---
title: "Interface: ProviderConfig"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ProviderConfig

# Interface: ProviderConfig

Defined in: [src/types/provider.ts:109](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L109)

Provider configuration for infrastructure and connection settings.

These settings control how requests are made to the provider's API,
including authentication, timeouts, and retry behavior.

## Example

```typescript
const config: ProviderConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 30000,
  retryStrategy: new ExponentialBackoff()
};

// Or with a key strategy for key rotation
const config: ProviderConfig = {
  apiKey: new RoundRobinKeys(['sk-1', 'sk-2', 'sk-3']),
  baseUrl: 'https://custom-proxy.example.com'
};
```

## Properties

### apiKey?

> `optional` **apiKey**: `string` \| [`KeyStrategy`](KeyStrategy.md) \| () => `string` \| `Promise`\<`string`\>

Defined in: [src/types/provider.ts:114](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L114)

API key for authentication.
Can be a string, async function, or KeyStrategy for advanced use cases.

***

### apiVersion?

> `optional` **apiVersion**: `string`

Defined in: [src/types/provider.ts:126](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L126)

API version override (provider-specific)

***

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [src/types/provider.ts:117](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L117)

Override the base API URL (for proxies, local models)

***

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Defined in: [src/types/provider.ts:123](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L123)

Custom fetch implementation (for logging, caching, custom TLS)

***

### retryStrategy?

> `optional` **retryStrategy**: [`RetryStrategy`](RetryStrategy.md)

Defined in: [src/types/provider.ts:129](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L129)

Retry strategy for handling failures and rate limits

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/types/provider.ts:120](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L120)

Request timeout in milliseconds
