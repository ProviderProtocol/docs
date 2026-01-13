---
title: "Class: WeightedKeys"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / WeightedKeys

# Class: WeightedKeys

Defined in: [src/http/keys.ts:92](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/http/keys.ts#L92)

Selects API keys using weighted random probability.

Each key is assigned a weight that determines its probability of being selected.
Higher weights mean higher selection probability. This is useful for:
- Preferring higher-tier API keys with better rate limits
- Gradually migrating traffic between old and new keys
- A/B testing different API accounts
- Directing more traffic to keys with higher quotas

The selection probability for each key is: weight / totalWeight

## Implements

## Example

```typescript
const keys = new WeightedKeys([
  { key: 'sk-premium', weight: 70 },   // 70% of requests
  { key: 'sk-standard', weight: 20 },  // 20% of requests
  { key: 'sk-backup', weight: 10 }     // 10% of requests
]);

// Configure provider with weighted key selection
const provider = createOpenAI({
  apiKey: keys
});
```

## Implements

- [`KeyStrategy`](../interfaces/keystrategy.md)

## Constructors

### Constructor

> **new WeightedKeys**(`keys`): `WeightedKeys`

Defined in: [src/http/keys.ts:102](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/http/keys.ts#L102)

Creates a new WeightedKeys instance.

#### Parameters

##### keys

`object`[]

Array of key-weight pairs defining selection probabilities

#### Returns

`WeightedKeys`

#### Throws

When the keys array is empty

## Methods

### getKey()

> **getKey**(): `string`

Defined in: [src/http/keys.ts:115](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/http/keys.ts#L115)

Returns a randomly selected key based on configured weights.

#### Returns

`string`

An API key selected with probability proportional to its weight

#### Implementation of

[`KeyStrategy`](../interfaces/keystrategy.md).[`getKey`](../interfaces/keystrategy.md#getkey)
