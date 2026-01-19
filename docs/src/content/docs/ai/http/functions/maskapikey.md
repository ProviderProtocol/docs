---
title: "Function: maskApiKey()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / maskApiKey

# Function: maskApiKey()

> **maskApiKey**(`key`): `string`

Defined in: [src/http/keys.ts:201](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/http/keys.ts#L201)

Masks an API key for safe logging.
Shows first 4 and last 4 characters with ellipsis, or '***' for short keys.

## Parameters

### key

`string`

The API key to mask

## Returns

`string`

Masked key like "sk-ab...yz12" or "***" for short keys

## Example

```typescript
maskApiKey('sk-abc123def456xyz789'); // 'sk-a...z789'
maskApiKey('short'); // '***'
```
