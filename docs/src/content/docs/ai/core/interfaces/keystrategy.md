---
title: "Interface: KeyStrategy"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / KeyStrategy

# Interface: KeyStrategy

Defined in: [src/types/provider.ts:36](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L36)

API key strategy interface for managing multiple keys.

Implement this interface to provide custom key rotation or
selection logic when working with multiple API keys.

## Example

```typescript
class RoundRobinKeys implements KeyStrategy {
  private keys: string[];
  private index = 0;

  constructor(keys: string[]) {
    this.keys = keys;
  }

  getKey(): string {
    const key = this.keys[this.index];
    this.index = (this.index + 1) % this.keys.length;
    return key;
  }
}
```

## Methods

### getKey()

> **getKey**(): `string` \| `Promise`\<`string`\>

Defined in: [src/types/provider.ts:42](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L42)

Gets the next API key to use for a request.

#### Returns

`string` \| `Promise`\<`string`\>

The API key string, or a Promise resolving to it
