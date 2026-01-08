---
title: "Class: DynamicKey"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / DynamicKey

# Class: DynamicKey

Defined in: [src/http/keys.ts:166](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/http/keys.ts#L166)

Provides dynamic key selection using custom logic.

This strategy delegates key selection to a user-provided function, enabling
advanced scenarios such as:
- Fetching keys from a secrets manager (AWS Secrets Manager, HashiCorp Vault)
- Rotating keys based on external state or configuration
- Selecting keys based on request context or time of day
- Implementing custom load balancing algorithms

The selector function can be synchronous or asynchronous.

## Implements

## Example

```typescript
// Fetch key from environment based on current mode
const dynamicKey = new DynamicKey(() => {
  return process.env.NODE_ENV === 'production'
    ? process.env.PROD_API_KEY!
    : process.env.DEV_API_KEY!;
});

// Async key fetching from a secrets manager
const vaultKey = new DynamicKey(async () => {
  const secret = await vault.read('secret/openai');
  return secret.data.apiKey;
});

// Time-based key rotation
const timedKey = new DynamicKey(() => {
  const hour = new Date().getHours();
  return hour < 12 ? morningKey : afternoonKey;
});
```

## Implements

- [`KeyStrategy`](../interfaces/keystrategy.md)

## Constructors

### Constructor

> **new DynamicKey**(`selector`): `DynamicKey`

Defined in: [src/http/keys.ts:174](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/http/keys.ts#L174)

Creates a new DynamicKey instance.

#### Parameters

##### selector

() => `string` \| `Promise`\<`string`\>

Function that returns an API key (sync or async)

#### Returns

`DynamicKey`

## Methods

### getKey()

> **getKey**(): `Promise`\<`string`\>

Defined in: [src/http/keys.ts:183](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/http/keys.ts#L183)

Invokes the selector function to retrieve the current key.

#### Returns

`Promise`\<`string`\>

Promise resolving to the selected API key

#### Implementation of

[`KeyStrategy`](../interfaces/keystrategy.md).[`getKey`](../interfaces/keystrategy.md#getkey)
