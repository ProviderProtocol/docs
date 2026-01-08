---
title: "Interface: OpenAICompletionsParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICompletionsParams

# Interface: OpenAICompletionsParams

Defined in: [src/providers/openai/types.ts:128](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L128)

Parameters for the OpenAI Chat Completions API.

These parameters are passed directly to the `/v1/chat/completions` endpoint.
The Chat Completions API is the legacy API for chat interactions with
OpenAI models. For the modern API with built-in tools, see [OpenAIResponsesParams](openairesponsesparams.md).

## Example

```typescript
const params: OpenAICompletionsParams = {
  temperature: 0.7,
  max_tokens: 1000,
  reasoning_effort: 'medium'
};
```

## See

[OpenAIResponsesParams](openairesponsesparams.md) for the modern Responses API parameters

## Properties

### audio?

> `optional` **audio**: [`OpenAIAudioConfig`](openaiaudioconfig.md) \| `null`

Defined in: [src/providers/openai/types.ts:226](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L226)

Audio output configuration
Required when modalities includes "audio"

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/openai/types.ts:142](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L142)

Frequency penalty (-2.0 - 2.0)

***

### logit\_bias?

> `optional` **logit\_bias**: `Record`\<`string`, `number`\>

Defined in: [src/providers/openai/types.ts:166](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L166)

Logit bias map

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/openai/types.ts:154](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L154)

Enable logprobs

***

### max\_completion\_tokens?

> `optional` **max\_completion\_tokens**: `number`

Defined in: [src/providers/openai/types.ts:133](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L133)

Maximum completion tokens (preferred for newer models)

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/openai/types.ts:130](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L130)

Maximum number of tokens to generate (legacy, prefer max_completion_tokens)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/providers/openai/types.ts:184](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L184)

Metadata key-value pairs (max 16, keys max 64 chars, values max 512 chars)

***

### modalities?

> `optional` **modalities**: (`"text"` \| `"audio"`)[]

Defined in: [src/providers/openai/types.ts:220](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L220)

Output modalities to generate
Default: ["text"]. Use ["text", "audio"] for audio-capable models

***

### n?

> `optional` **n**: `number`

Defined in: [src/providers/openai/types.ts:151](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L151)

Number of completions to generate

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openai/types.ts:172](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L172)

Whether to enable parallel tool calls

***

### prediction?

> `optional` **prediction**: `object`

Defined in: [src/providers/openai/types.ts:193](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L193)

Predicted Output configuration for faster regeneration
Improves response times when large parts of the response are known ahead of time

#### content

> **content**: `string` \| `object`[]

#### type

> **type**: `"content"`

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/openai/types.ts:145](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L145)

Presence penalty (-2.0 - 2.0)

***

### prompt\_cache\_key?

> `optional` **prompt\_cache\_key**: `string`

Defined in: [src/providers/openai/types.ts:202](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L202)

Stable identifier for caching similar requests
Used to optimize cache hit rates (replaces user field)

***

### prompt\_cache\_retention?

> `optional` **prompt\_cache\_retention**: `"in-memory"` \| `"24h"`

Defined in: [src/providers/openai/types.ts:208](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L208)

Retention policy for prompt cache
Set to "24h" to enable extended prompt caching up to 24 hours

***

### reasoning\_effort?

> `optional` **reasoning\_effort**: `"high"` \| `"medium"` \| `"low"` \| `"none"` \| `"minimal"` \| `"xhigh"`

Defined in: [src/providers/openai/types.ts:175](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L175)

Reasoning effort for reasoning models

***

### response\_format?

> `optional` **response\_format**: `OpenAIResponseFormat`

Defined in: [src/providers/openai/types.ts:187](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L187)

Response format for structured output

***

### safety\_identifier?

> `optional` **safety\_identifier**: `string`

Defined in: [src/providers/openai/types.ts:214](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L214)

Stable identifier for abuse detection
Recommend hashing username or email address

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/openai/types.ts:160](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L160)

Seed for deterministic sampling (beta, deprecated)

***

### service\_tier?

> `optional` **service\_tier**: `"default"` \| `"auto"` \| `"flex"` \| `"scale"` \| `"priority"`

Defined in: [src/providers/openai/types.ts:178](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L178)

Service tier

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [src/providers/openai/types.ts:148](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L148)

Custom stop sequences

***

### store?

> `optional` **store**: `boolean`

Defined in: [src/providers/openai/types.ts:181](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L181)

Store completion for distillation

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openai/types.ts:136](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L136)

Temperature for randomness (0.0 - 2.0)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/openai/types.ts:157](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L157)

Number of top logprobs to return (0-20)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openai/types.ts:139](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L139)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openai/types.ts:163](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L163)

User identifier (deprecated, use safety_identifier or prompt_cache_key)

***

### verbosity?

> `optional` **verbosity**: `"high"` \| `"medium"` \| `"low"`

Defined in: [src/providers/openai/types.ts:169](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L169)

Verbosity control

***

### web\_search\_options?

> `optional` **web\_search\_options**: [`OpenAIWebSearchOptions`](openaiwebsearchoptions.md)

Defined in: [src/providers/openai/types.ts:232](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L232)

Web search configuration
Enables the model to search the web for up-to-date information
