---
title: "Interface: ProviderConfig"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ProviderConfig

# Interface: ProviderConfig

Defined in: [src/types/provider.ts:124](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L124)

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

> `optional` **apiKey**: `string` \| [`KeyStrategy`](keystrategy.md) \| () => `string` \| `Promise`\<`string`\>

Defined in: [src/types/provider.ts:129](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L129)

API key for authentication.
Can be a string, async function, or KeyStrategy for advanced use cases.

***

### apiVersion?

> `optional` **apiVersion**: `string`

Defined in: [src/types/provider.ts:144](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L144)

API version override (provider-specific)

***

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [src/types/provider.ts:132](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L132)

Override the base API URL (for proxies, local models)

***

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Defined in: [src/types/provider.ts:141](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L141)

Custom fetch implementation (for logging, caching, custom TLS)

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string` \| `undefined`\>

Defined in: [src/types/provider.ts:165](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L165)

Custom headers to include in API requests.

Use this to pass provider-specific headers such as:
- Anthropic: `anthropic-beta` for beta features
- OpenAI: `OpenAI-Organization`, `OpenAI-Project`
- OpenRouter: `HTTP-Referer`, `X-Title` for attribution
- Ollama: Proxy authentication headers

#### Example

```typescript
const config: ProviderConfig = {
  headers: { 'anthropic-beta': 'extended-cache-ttl-2025-04-11' }
};
```

***

### retryAfterMaxSeconds?

> `optional` **retryAfterMaxSeconds**: `number`

Defined in: [src/types/provider.ts:171](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L171)

Maximum Retry-After delay in seconds when honoring server headers.
Defaults to 3600 seconds (1 hour).

***

### retryStrategy?

> `optional` **retryStrategy**: [`RetryStrategy`](retrystrategy.md)

Defined in: [src/types/provider.ts:147](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L147)

Retry strategy for handling failures and rate limits

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/types/provider.ts:138](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/provider.ts#L138)

Request timeout in milliseconds.
Applied per attempt; total wall time can exceed this when retries are enabled.
