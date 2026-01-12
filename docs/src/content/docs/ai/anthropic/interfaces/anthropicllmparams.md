---
title: "Interface: AnthropicLLMParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicLLMParams

# Interface: AnthropicLLMParams

Defined in: [src/providers/anthropic/types.ts:134](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L134)

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

### container?

> `optional` **container**: `string`

Defined in: [src/providers/anthropic/types.ts:203](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L203)

Container ID for code execution tool reuse.
Pass the container ID from a previous response to reuse the same environment.

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/anthropic/types.ts:136](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L136)

Maximum number of tokens to generate. Defaults to model maximum if not specified.

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/providers/anthropic/types.ts:151](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L151)

Request metadata for tracking and analytics.

#### user\_id?

> `optional` **user\_id**: `string`

Unique identifier for the end user making the request.

***

### service\_tier?

> `optional` **service\_tier**: `"auto"` \| `"standard_only"`

Defined in: [src/providers/anthropic/types.ts:169](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L169)

Service tier selection for capacity routing.
- `auto`: Automatically select based on availability (default)
- `standard_only`: Only use standard capacity, never priority

***

### stop\_sequences?

> `optional` **stop\_sequences**: `string`[]

Defined in: [src/providers/anthropic/types.ts:148](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L148)

Custom sequences that will cause the model to stop generating.

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/anthropic/types.ts:139](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L139)

Sampling temperature from 0.0 (deterministic) to 1.0 (maximum randomness).

***

### thinking?

> `optional` **thinking**: `object`

Defined in: [src/providers/anthropic/types.ts:157](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L157)

Extended thinking configuration for complex reasoning tasks.

#### budget\_tokens

> **budget\_tokens**: `number`

Token budget for the thinking process.

#### type

> **type**: `"enabled"`

Must be 'enabled' to activate extended thinking.

***

### tools?

> `optional` **tools**: [`AnthropicBuiltInTool`](../type-aliases/anthropicbuiltintool.md)[]

Defined in: [src/providers/anthropic/types.ts:197](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L197)

Built-in tools for server-side execution.

Use the tool helper constructors from the `tools` namespace:
- `tools.webSearch()` - Web search capability
- `tools.computer()` - Computer use (mouse, keyboard, screenshots)
- `tools.textEditor()` - File viewing and editing
- `tools.bash()` - Shell command execution
- `tools.codeExecution()` - Sandboxed Python/Bash execution
- `tools.toolSearch()` - Dynamic tool catalog search

#### Example

```typescript
import { anthropic, tools } from 'provider-protocol/anthropic';

const model = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  params: {
    tools: [
      tools.webSearch({ max_uses: 5 }),
      tools.codeExecution(),
    ],
  },
});
```

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/anthropic/types.ts:145](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L145)

Top-k sampling. Only the k most likely tokens are considered at each step.

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/anthropic/types.ts:142](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L142)

Nucleus sampling threshold. Only tokens with cumulative probability <= top_p are considered.
