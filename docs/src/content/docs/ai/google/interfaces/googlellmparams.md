---
title: "Interface: GoogleLLMParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleLLMParams

# Interface: GoogleLLMParams

Defined in: [src/providers/google/types.ts:26](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L26)

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

Defined in: [src/providers/google/types.ts:95](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L95)

Whether to include audio timestamps in response

***

### cachedContent?

> `optional` **cachedContent**: `string`

Defined in: [src/providers/google/types.ts:107](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L107)

Cached content name to use for this request.
Format: "cachedContents/{id}" as returned from cache creation.
When set, the cached content is prepended to the request.

***

### candidateCount?

> `optional` **candidateCount**: `number`

Defined in: [src/providers/google/types.ts:43](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L43)

Number of candidates to generate

***

### frequencyPenalty?

> `optional` **frequencyPenalty**: `number`

Defined in: [src/providers/google/types.ts:74](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L74)

Frequency penalty for repeated tokens
Positive values discourage repetition

***

### imageConfig?

> `optional` **imageConfig**: [`GoogleImageConfig`](googleimageconfig.md)

Defined in: [src/providers/google/types.ts:62](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L62)

Image generation configuration for Gemini image response modalities.

***

### logprobs?

> `optional` **logprobs**: `number`

Defined in: [src/providers/google/types.ts:90](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L90)

Number of log probabilities to return (requires responseLogprobs: true)

***

### maxOutputTokens?

> `optional` **maxOutputTokens**: `number`

Defined in: [src/providers/google/types.ts:28](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L28)

Maximum number of tokens to generate

***

### presencePenalty?

> `optional` **presencePenalty**: `number`

Defined in: [src/providers/google/types.ts:68](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L68)

Presence penalty for new topics
Positive values encourage discussing new topics

***

### responseLogprobs?

> `optional` **responseLogprobs**: `boolean`

Defined in: [src/providers/google/types.ts:85](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L85)

Whether to return log probabilities in response

***

### responseMimeType?

> `optional` **responseMimeType**: `"text/plain"` \| `"application/json"`

Defined in: [src/providers/google/types.ts:46](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L46)

Response MIME type

***

### responseModalities?

> `optional` **responseModalities**: [`GoogleResponseModality`](../type-aliases/googleresponsemodality.md)[]

Defined in: [src/providers/google/types.ts:57](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L57)

Modalities to generate in the response.

Use `['IMAGE']` or `['TEXT', 'IMAGE']` with Gemini image generation models
(e.g., gemini-2.5-flash-image aka Nano Banana).

***

### responseSchema?

> `optional` **responseSchema**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/google/types.ts:49](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L49)

Response schema for structured output

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/google/types.ts:80](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L80)

Seed for deterministic sampling
Same seed with same parameters should produce same results

***

### stopSequences?

> `optional` **stopSequences**: `string`[]

Defined in: [src/providers/google/types.ts:40](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L40)

Stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/google/types.ts:31](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L31)

Temperature for randomness (0.0 - 2.0)

***

### thinkingConfig?

> `optional` **thinkingConfig**: `GoogleThinkingConfig`

Defined in: [src/providers/google/types.ts:100](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L100)

Thinking/reasoning configuration for Gemini 3+ models

***

### toolConfig?

> `optional` **toolConfig**: [`GoogleToolConfig`](googletoolconfig.md)

Defined in: [src/providers/google/types.ts:153](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L153)

Tool configuration for retrieval (e.g., user location for Maps).

#### Example

```typescript
const params: GoogleLLMParams = {
  tools: [tools.googleMaps()],
  toolConfig: {
    retrievalConfig: {
      latLng: { latitude: 40.758896, longitude: -73.985130 },
    },
  },
};
```

***

### tools?

> `optional` **tools**: [`GoogleBuiltInTool`](../type-aliases/googlebuiltintool.md)[]

Defined in: [src/providers/google/types.ts:136](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L136)

Built-in tools for server-side execution.

Use the tool helper constructors from the `tools` namespace:
- `tools.googleSearch()` - Google Search grounding
- `tools.codeExecution()` - Python code execution
- `tools.urlContext()` - URL fetching and analysis
- `tools.googleMaps()` - Google Maps grounding
- `tools.fileSearch()` - Document RAG search

Note: File Search cannot be combined with other built-in tools.

#### Example

```typescript
import { google, tools } from 'provider-protocol/google';

const model = llm({
  model: google('gemini-2.5-flash'),
  params: {
    tools: [
      tools.googleSearch(),
      tools.codeExecution(),
    ],
  },
});
```

***

### topK?

> `optional` **topK**: `number`

Defined in: [src/providers/google/types.ts:37](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L37)

Top-k sampling

***

### topP?

> `optional` **topP**: `number`

Defined in: [src/providers/google/types.ts:34](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L34)

Top-p (nucleus) sampling
