---
title: "Interface: GoogleLLMParams"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [google](../README.md) / GoogleLLMParams

# Interface: GoogleLLMParams

Defined in: [src/providers/google/types.ts:26](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L26)

Provider-specific parameters for Google Gemini API requests.

These parameters are passed through to the Google `generationConfig` field
and control model behavior such as output length, randomness, and sampling
strategies. All fields are optional and will use Google's defaults if omitted.

## Example

```typescript
const params: GoogleLLMParams = {
  maxOutputTokens: 2048,
  temperature: 0.7,
  topP: 0.9,
  stopSequences: ['\n\n'],
};

const response = await model.complete({
  messages: [...],
  config: { apiKey: '...' },
  params,
});
```

## See

[Google GenerationConfig docs](https://ai.google.dev/api/rest/v1beta/GenerationConfig)

## Properties

### audioTimestamp?

> `optional` **audioTimestamp**: `boolean`

Defined in: [src/providers/google/types.ts:82](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L82)

Whether to include audio timestamps in response

***

### candidateCount?

> `optional` **candidateCount**: `number`

Defined in: [src/providers/google/types.ts:43](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L43)

Number of candidates to generate

***

### frequencyPenalty?

> `optional` **frequencyPenalty**: `number`

Defined in: [src/providers/google/types.ts:61](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L61)

Frequency penalty for repeated tokens
Positive values discourage repetition

***

### logprobs?

> `optional` **logprobs**: `number`

Defined in: [src/providers/google/types.ts:77](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L77)

Number of log probabilities to return (requires responseLogprobs: true)

***

### maxOutputTokens?

> `optional` **maxOutputTokens**: `number`

Defined in: [src/providers/google/types.ts:28](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L28)

Maximum number of tokens to generate

***

### presencePenalty?

> `optional` **presencePenalty**: `number`

Defined in: [src/providers/google/types.ts:55](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L55)

Presence penalty for new topics
Positive values encourage discussing new topics

***

### responseLogprobs?

> `optional` **responseLogprobs**: `boolean`

Defined in: [src/providers/google/types.ts:72](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L72)

Whether to return log probabilities in response

***

### responseMimeType?

> `optional` **responseMimeType**: `"application/json"` \| `"text/plain"`

Defined in: [src/providers/google/types.ts:46](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L46)

Response MIME type

***

### responseSchema?

> `optional` **responseSchema**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/google/types.ts:49](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L49)

Response schema for structured output

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/google/types.ts:67](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L67)

Seed for deterministic sampling
Same seed with same parameters should produce same results

***

### stopSequences?

> `optional` **stopSequences**: `string`[]

Defined in: [src/providers/google/types.ts:40](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L40)

Stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/google/types.ts:31](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L31)

Temperature for randomness (0.0 - 2.0)

***

### thinkingConfig?

> `optional` **thinkingConfig**: `GoogleThinkingConfig`

Defined in: [src/providers/google/types.ts:87](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L87)

Thinking/reasoning configuration for Gemini 3+ models

***

### topK?

> `optional` **topK**: `number`

Defined in: [src/providers/google/types.ts:37](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L37)

Top-k sampling

***

### topP?

> `optional` **topP**: `number`

Defined in: [src/providers/google/types.ts:34](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/google/types.ts#L34)

Top-p (nucleus) sampling
