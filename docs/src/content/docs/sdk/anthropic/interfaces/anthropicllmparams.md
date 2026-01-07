---
title: "Interface: AnthropicLLMParams"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [anthropic](../README.md) / AnthropicLLMParams

# Interface: AnthropicLLMParams

Defined in: [src/providers/anthropic/types.ts:23](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L23)

Provider-specific parameters for Anthropic Claude models.

These parameters are passed through to the Anthropic Messages API and
control model behavior such as sampling, token limits, and extended thinking.

## Example

```typescript
const params: AnthropicLLMParams = {
  max_tokens: 4096,
  temperature: 0.7,
  thinking: { type: 'enabled', budget_tokens: 10000 },
};
```

## Properties

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/anthropic/types.ts:25](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L25)

Maximum number of tokens to generate. Defaults to model maximum if not specified.

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/providers/anthropic/types.ts:40](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L40)

Request metadata for tracking and analytics.

#### user\_id?

> `optional` **user\_id**: `string`

Unique identifier for the end user making the request.

***

### service\_tier?

> `optional` **service\_tier**: `"auto"` \| `"standard_only"`

Defined in: [src/providers/anthropic/types.ts:58](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L58)

Service tier selection for capacity routing.
- `auto`: Automatically select based on availability (default)
- `standard_only`: Only use standard capacity, never priority

***

### stop\_sequences?

> `optional` **stop\_sequences**: `string`[]

Defined in: [src/providers/anthropic/types.ts:37](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L37)

Custom sequences that will cause the model to stop generating.

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/anthropic/types.ts:28](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L28)

Sampling temperature from 0.0 (deterministic) to 1.0 (maximum randomness).

***

### thinking?

> `optional` **thinking**: `object`

Defined in: [src/providers/anthropic/types.ts:46](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L46)

Extended thinking configuration for complex reasoning tasks.

#### budget\_tokens

> **budget\_tokens**: `number`

Token budget for the thinking process.

#### type

> **type**: `"enabled"`

Must be 'enabled' to activate extended thinking.

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/anthropic/types.ts:34](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L34)

Top-k sampling. Only the k most likely tokens are considered at each step.

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/anthropic/types.ts:31](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/anthropic/types.ts#L31)

Nucleus sampling threshold. Only tokens with cumulative probability <= top_p are considered.
