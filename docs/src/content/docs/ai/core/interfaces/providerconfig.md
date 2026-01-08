---
title: "Interface: ProviderConfig"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ProviderConfig

# Interface: ProviderConfig

Defined in: [src/types/provider.ts:109](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L109)

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

Defined in: [src/types/provider.ts:114](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L114)

API key for authentication.
Can be a string, async function, or KeyStrategy for advanced use cases.

***

### apiVersion?

> `optional` **apiVersion**: `string`

Defined in: [src/types/provider.ts:126](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L126)

API version override (provider-specific)

***

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [src/types/provider.ts:117](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L117)

Override the base API URL (for proxies, local models)

***

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Defined in: [src/types/provider.ts:123](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L123)

Custom fetch implementation (for logging, caching, custom TLS)

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string` \| `undefined`\>

Defined in: [src/types/provider.ts:147](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L147)

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

### retryStrategy?

> `optional` **retryStrategy**: [`RetryStrategy`](retrystrategy.md)

Defined in: [src/types/provider.ts:129](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L129)

Retry strategy for handling failures and rate limits

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/types/provider.ts:120](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L120)

Request timeout in milliseconds
