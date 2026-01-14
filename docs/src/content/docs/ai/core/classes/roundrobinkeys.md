---
title: "Class: RoundRobinKeys"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / RoundRobinKeys

# Class: RoundRobinKeys

Defined in: [src/http/keys.ts:35](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/http/keys.ts#L35)

Distributes API requests across multiple keys using round-robin selection.

Each call to [getKey](#getkey) returns the next key in sequence, cycling back to
the first key after reaching the end. This provides even distribution of requests
across all available keys, which is useful for:
- Spreading rate limits across multiple API keys
- Load balancing between different accounts
- Maximizing throughput when multiple keys are available

## Implements

## Example

```typescript
const keys = new RoundRobinKeys([
  'sk-key-1',
  'sk-key-2',
  'sk-key-3'
]);

keys.getKey(); // Returns 'sk-key-1'
keys.getKey(); // Returns 'sk-key-2'
keys.getKey(); // Returns 'sk-key-3'
keys.getKey(); // Returns 'sk-key-1' (cycles back)
```

## Implements

- [`KeyStrategy`](../interfaces/keystrategy.md)

## Constructors

### Constructor

> **new RoundRobinKeys**(`keys`): `RoundRobinKeys`

Defined in: [src/http/keys.ts:45](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/http/keys.ts#L45)

Creates a new RoundRobinKeys instance.

#### Parameters

##### keys

`string`[]

Array of API keys to rotate through

#### Returns

`RoundRobinKeys`

#### Throws

When the keys array is empty

## Methods

### getKey()

> **getKey**(): `string`

Defined in: [src/http/keys.ts:57](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/http/keys.ts#L57)

Returns the next key in the rotation sequence.

#### Returns

`string`

The next API key in round-robin order

#### Implementation of

[`KeyStrategy`](../interfaces/keystrategy.md).[`getKey`](../interfaces/keystrategy.md#getkey)
