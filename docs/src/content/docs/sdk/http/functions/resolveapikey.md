---
title: "Function: resolveApiKey()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [http](../README.md) / resolveApiKey

# Function: resolveApiKey()

> **resolveApiKey**(`config`, `envVar?`, `provider?`, `modality?`): `Promise`\<`string`\>

Defined in: [src/http/keys.ts:237](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/keys.ts#L237)

Resolves an API key from provider configuration with multiple fallback options.

This function handles various key specification methods in priority order:
1. Direct string key in config.apiKey
2. Function returning a key (sync or async) in config.apiKey
3. KeyStrategy instance in config.apiKey (RoundRobinKeys, WeightedKeys, DynamicKey)
4. Environment variable fallback (if envVar parameter is provided)

## Parameters

### config

[`ProviderConfig`](../../@providerprotocol/ai/interfaces/ProviderConfig.md)

Provider configuration containing the apiKey option

### envVar?

`string`

Optional environment variable name to check as fallback

### provider?

`string` = `'unknown'`

Provider identifier for error context (default: 'unknown')

### modality?

[`Modality`](../../@providerprotocol/ai/type-aliases/Modality.md) = `'llm'`

Request modality for error context (default: 'llm')

## Returns

`Promise`\<`string`\>

The resolved API key string

## Throws

AUTHENTICATION_FAILED - When no valid key is found

## Example

```typescript
// Direct key in config
const key1 = await resolveApiKey({ apiKey: 'sk-...' }, 'OPENAI_API_KEY', 'openai');

// Function-based key
const key2 = await resolveApiKey({ apiKey: () => getKeyFromVault() }, undefined, 'anthropic');

// KeyStrategy instance
const key3 = await resolveApiKey({
  apiKey: new RoundRobinKeys(['sk-1', 'sk-2', 'sk-3'])
}, 'OPENAI_API_KEY', 'openai');

// Environment variable fallback
const key4 = await resolveApiKey({}, 'ANTHROPIC_API_KEY', 'anthropic');
```
