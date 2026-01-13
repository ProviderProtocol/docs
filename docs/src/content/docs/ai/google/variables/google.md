---
title: "Variable: google"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / google

# Variable: google

> `const` **google**: [`Provider`](../../core/interfaces/provider.md)\<`unknown`\> & `object`

Defined in: [src/providers/google/index.ts:74](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/index.ts#L74)

Google Gemini provider for the Unified Provider Protocol (UPP).

Provides access to Google's Gemini family of large language models through
a standardized interface. Supports text generation, multimodal inputs
(images, video, audio), tool/function calling, and structured output.

## Type Declaration

### cache

> **cache**: `object`

Cache utilities namespace.

Provides functions for creating and managing Google Gemini cached content
entries. Use cached content to reduce costs and latency when repeatedly
sending the same context (system instructions, large documents, etc.)
across multiple requests.

#### Example

```typescript
import { google } from '@anthropic/provider-protocol';

// Create a cache
const cache = await google.cache.create({
  apiKey: process.env.GOOGLE_API_KEY,
  model: 'gemini-3-flash-preview',
  systemInstruction: 'You are an expert assistant...',
  contents: [{ role: 'user', parts: [{ text: largeDocument }] }],
  ttl: '3600s',
});

// Use cache.name in requests via params.cachedContent
const response = await model.complete({
  messages: [userMessage('Summarize the document')],
  params: { cachedContent: cache.name },
});

// Manage caches
const caches = await google.cache.list({ apiKey });
await google.cache.update(cache.name, { ttl: '7200s' }, apiKey);
await google.cache.delete(cache.name, apiKey);
```

#### cache.create()

> **create**: (`options`) => `Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

Creates a new cached content entry.

Caches can contain system instructions, conversation content, and tool
declarations that are reused across multiple requests. This reduces
token costs and processing time for repeated context.

##### Parameters

###### options

[`CacheCreateOptions`](../interfaces/cachecreateoptions.md)

Cache creation options

##### Returns

`Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

The created cache entry with its name/ID for use in requests

##### Example

```typescript
import { google } from '@anthropic/provider-protocol';

// Create a cache with system instruction and large context
const cache = await google.cache.create({
  apiKey: process.env.GOOGLE_API_KEY,
  model: 'gemini-3-flash-preview',
  displayName: 'Code Review Context',
  systemInstruction: 'You are an expert code reviewer...',
  contents: [
    { role: 'user', parts: [{ text: largeCodebaseContent }] }
  ],
  ttl: '3600s', // 1 hour
});

// Use the cache in subsequent requests
const response = await model.complete({
  messages: [userMessage('Review this function')],
  params: { cachedContent: cache.name },
});
```

#### cache.delete()

> **delete**: (`name`, `apiKey`, `config?`, `signal?`) => `Promise`\<`void`\> = `deleteCache`

Deletes a cached content entry.

##### Parameters

###### name

`string`

The cache name (format: "cachedContents/{id}")

###### apiKey

`string`

API key for authentication

###### config?

[`ProviderConfig`](../../core/interfaces/providerconfig.md)

Provider configuration (timeout, retry strategy, custom fetch)

###### signal?

`AbortSignal`

Abort signal for cancellation

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
await google.cache.delete('cachedContents/abc123', apiKey);
```

#### cache.get()

> **get**: (`name`, `apiKey`, `config?`, `signal?`) => `Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

Retrieves a cached content entry by name.

##### Parameters

###### name

`string`

The cache name (format: "cachedContents/{id}")

###### apiKey

`string`

API key for authentication

###### config?

[`ProviderConfig`](../../core/interfaces/providerconfig.md)

Provider configuration (timeout, retry strategy, custom fetch)

###### signal?

`AbortSignal`

Abort signal for cancellation

##### Returns

`Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

The cache entry details

##### Example

```typescript
const cache = await google.cache.get('cachedContents/abc123', apiKey);
console.log(`Cache expires at: ${cache.expireTime}`);
```

#### cache.list()

> **list**: (`options`) => `Promise`\<[`GoogleCacheListResponse`](../interfaces/googlecachelistresponse.md)\>

Lists all cached content entries.

##### Parameters

###### options

[`CacheListOptions`](../interfaces/cachelistoptions.md)

List options including API key and pagination

##### Returns

`Promise`\<[`GoogleCacheListResponse`](../interfaces/googlecachelistresponse.md)\>

Array of cache entries and optional next page token

##### Example

```typescript
const { cachedContents, nextPageToken } = await google.cache.list({
  apiKey: process.env.GOOGLE_API_KEY,
  pageSize: 10,
});

for (const cache of cachedContents ?? []) {
  console.log(`${cache.displayName}: ${cache.name}`);
}
```

#### cache.update()

> **update**: (`name`, `updateRequest`, `apiKey`, `config?`, `signal?`) => `Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

Updates a cached content entry's expiration time.

Only the expiration time can be updated; all other fields
(contents, systemInstruction, tools) are immutable after creation.

##### Parameters

###### name

`string`

The cache name (format: "cachedContents/{id}")

###### updateRequest

[`GoogleCacheUpdateRequest`](../interfaces/googlecacheupdaterequest.md)

###### apiKey

`string`

API key for authentication

###### config?

[`ProviderConfig`](../../core/interfaces/providerconfig.md)

Provider configuration (timeout, retry strategy, custom fetch)

###### signal?

`AbortSignal`

Abort signal for cancellation

##### Returns

`Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

The updated cache entry

##### Example

```typescript
// Extend cache expiration by 2 hours
const updated = await google.cache.update(
  'cachedContents/abc123',
  { ttl: '7200s' },
  apiKey
);
```

## Examples

```typescript
import { google } from './providers/google';
import { llm } from './core/llm';
import { StreamEventType } from './types/stream';

const gemini = llm({
  model: google('gemini-1.5-pro'),
  config: { apiKey: process.env.GOOGLE_API_KEY },
});

const turn = await gemini.generate('Hello!');
console.log(turn.response.text);

const stream = gemini.stream('Tell me a story');
for await (const event of stream) {
  if (event.type === StreamEventType.TextDelta) {
    process.stdout.write(event.delta.text ?? '');
  }
}
```

```typescript
// Create a cache for repeated context
const cacheEntry = await google.cache.create({
  apiKey: process.env.GOOGLE_API_KEY,
  model: 'gemini-3-flash-preview',
  systemInstruction: 'You are an expert code reviewer...',
  contents: [{ role: 'user', parts: [{ text: largeCodebase }] }],
  ttl: '3600s',
});

// Use cache in requests
const cachedModel = llm({
  model: google('gemini-3-flash-preview'),
  config: { apiKey: process.env.GOOGLE_API_KEY },
  params: { cachedContent: cacheEntry.name },
});

const response = await cachedModel.generate('Review this function');

// Manage caches
await google.cache.update(cacheEntry.name, { ttl: '7200s' }, apiKey);
await google.cache.delete(cacheEntry.name, apiKey);
```

## See

 - [GoogleLLMParams](../interfaces/googlellmparams.md) for provider-specific configuration options
 - [cache](cache.md) for caching utilities
