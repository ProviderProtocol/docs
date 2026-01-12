---
title: "Variable: cache"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / cache

# Variable: cache

> `const` **cache**: `object`

Defined in: [src/providers/google/cache.ts:301](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L301)

Cache utilities namespace.

Provides functions for creating and managing Google Gemini cached content
entries. Use cached content to reduce costs and latency when repeatedly
sending the same context (system instructions, large documents, etc.)
across multiple requests.

## Type Declaration

### create()

> **create**: (`options`) => `Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

Creates a new cached content entry.

Caches can contain system instructions, conversation content, and tool
declarations that are reused across multiple requests. This reduces
token costs and processing time for repeated context.

#### Parameters

##### options

[`CacheCreateOptions`](../interfaces/cachecreateoptions.md)

Cache creation options

#### Returns

`Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

The created cache entry with its name/ID for use in requests

#### Example

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

### delete()

> **delete**: (`name`, `apiKey`) => `Promise`\<`void`\> = `deleteCache`

Deletes a cached content entry.

#### Parameters

##### name

`string`

The cache name (format: "cachedContents/{id}")

##### apiKey

`string`

API key for authentication

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
await google.cache.delete('cachedContents/abc123', apiKey);
```

### get()

> **get**: (`name`, `apiKey`) => `Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

Retrieves a cached content entry by name.

#### Parameters

##### name

`string`

The cache name (format: "cachedContents/{id}")

##### apiKey

`string`

API key for authentication

#### Returns

`Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

The cache entry details

#### Example

```typescript
const cache = await google.cache.get('cachedContents/abc123', apiKey);
console.log(`Cache expires at: ${cache.expireTime}`);
```

### list()

> **list**: (`options`) => `Promise`\<[`GoogleCacheListResponse`](../interfaces/googlecachelistresponse.md)\>

Lists all cached content entries.

#### Parameters

##### options

[`CacheListOptions`](../interfaces/cachelistoptions.md)

List options including API key and pagination

#### Returns

`Promise`\<[`GoogleCacheListResponse`](../interfaces/googlecachelistresponse.md)\>

Array of cache entries and optional next page token

#### Example

```typescript
const { cachedContents, nextPageToken } = await google.cache.list({
  apiKey: process.env.GOOGLE_API_KEY,
  pageSize: 10,
});

for (const cache of cachedContents ?? []) {
  console.log(`${cache.displayName}: ${cache.name}`);
}
```

### update()

> **update**: (`name`, `updateRequest`, `apiKey`) => `Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

Updates a cached content entry's expiration time.

Only the expiration time can be updated; all other fields
(contents, systemInstruction, tools) are immutable after creation.

#### Parameters

##### name

`string`

The cache name (format: "cachedContents/{id}")

##### updateRequest

[`GoogleCacheUpdateRequest`](../interfaces/googlecacheupdaterequest.md)

##### apiKey

`string`

API key for authentication

#### Returns

`Promise`\<[`GoogleCacheResponse`](../interfaces/googlecacheresponse.md)\>

The updated cache entry

#### Example

```typescript
// Extend cache expiration by 2 hours
const updated = await google.cache.update(
  'cachedContents/abc123',
  { ttl: '7200s' },
  apiKey
);
```

## Example

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
