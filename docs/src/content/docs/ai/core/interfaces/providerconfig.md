---
title: "Interface: ProviderConfig"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ProviderConfig

# Interface: ProviderConfig

Defined in: [src/types/provider.ts:125](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L125)

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

Defined in: [src/types/provider.ts:130](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L130)

API key for authentication.
Can be a string, async function, or KeyStrategy for advanced use cases.

***

### apiVersion?

> `optional` **apiVersion**: `string`

Defined in: [src/types/provider.ts:145](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L145)

API version override (provider-specific)

***

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [src/types/provider.ts:133](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L133)

Override the base API URL (for proxies, local models)

***

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Defined in: [src/types/provider.ts:142](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L142)

Custom fetch implementation (for logging, caching, custom TLS)

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string` \| `undefined`\>

Defined in: [src/types/provider.ts:166](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L166)

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

Defined in: [src/types/provider.ts:172](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L172)

Maximum Retry-After delay in seconds when honoring server headers.
Defaults to 3600 seconds (1 hour).

***

### retryStrategy?

> `optional` **retryStrategy**: [`RetryStrategy`](retrystrategy.md)

Defined in: [src/types/provider.ts:148](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L148)

Retry strategy for handling failures and rate limits

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/types/provider.ts:139](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L139)

Request timeout in milliseconds.
Applied per attempt; total wall time can exceed this when retries are enabled.
