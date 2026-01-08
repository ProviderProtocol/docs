---
title: "Interface: OllamaLLMParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [ollama](../index.md) / OllamaLLMParams

# Interface: OllamaLLMParams

Defined in: [src/providers/ollama/types.ts:32](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L32)

Ollama-specific LLM parameters for model inference.

These parameters control model behavior during text generation. Most map
directly to Ollama's `options` field in the API, while some (`keep_alive`,
`think`, `logprobs`, `top_logprobs`) are top-level request parameters.

All parameters are optional and will use Ollama's defaults if not specified.

## Example

```typescript
const params: OllamaLLMParams = {
  temperature: 0.7,
  top_p: 0.9,
  num_predict: 500,
  stop: ['\n\n', 'END']
};
```

## See

[https://github.com/ollama/ollama/blob/main/docs/modelfile.md#valid-parameters-and-values](https://github.com/ollama/ollama/blob/main/docs/modelfile.md#valid-parameters-and-values) Ollama Parameters

## Properties

### f16\_kv?

> `optional` **f16\_kv**: `boolean`

Defined in: [src/providers/ollama/types.ts:103](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L103)

Enable f16 KV cache

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/ollama/types.ts:61](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L61)

Frequency penalty (default: 0.0)

***

### keep\_alive?

> `optional` **keep\_alive**: `string` \| `number`

Defined in: [src/providers/ollama/types.ts:124](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L124)

Keep model loaded in memory (string duration like "5m" or number of seconds)

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/ollama/types.ts:127](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L127)

Return log probabilities

***

### low\_vram?

> `optional` **low\_vram**: `boolean`

Defined in: [src/providers/ollama/types.ts:100](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L100)

Enable low VRAM mode

***

### main\_gpu?

> `optional` **main\_gpu**: `number`

Defined in: [src/providers/ollama/types.ts:97](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L97)

Main GPU to use (default: 0)

***

### min\_p?

> `optional` **min\_p**: `number`

Defined in: [src/providers/ollama/types.ts:46](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L46)

Minimum probability for a token to be considered (default: 0.0)

***

### mirostat?

> `optional` **mirostat**: `0` \| `1` \| `2`

Defined in: [src/providers/ollama/types.ts:64](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L64)

Mirostat sampling mode (0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0)

***

### mirostat\_eta?

> `optional` **mirostat\_eta**: `number`

Defined in: [src/providers/ollama/types.ts:67](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L67)

Mirostat learning rate (default: 0.1)

***

### mirostat\_tau?

> `optional` **mirostat\_tau**: `number`

Defined in: [src/providers/ollama/types.ts:70](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L70)

Mirostat target entropy (default: 5.0)

***

### num\_batch?

> `optional` **num\_batch**: `number`

Defined in: [src/providers/ollama/types.ts:88](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L88)

Number of batches (default: 512)

***

### num\_ctx?

> `optional` **num\_ctx**: `number`

Defined in: [src/providers/ollama/types.ts:85](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L85)

Context window size (default: model-dependent)

***

### num\_gpu?

> `optional` **num\_gpu**: `number`

Defined in: [src/providers/ollama/types.ts:94](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L94)

Number of layers to offload to GPU (default: auto)

***

### num\_keep?

> `optional` **num\_keep**: `number`

Defined in: [src/providers/ollama/types.ts:82](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L82)

Number of tokens to keep from initial prompt (default: 4)

***

### num\_predict?

> `optional` **num\_predict**: `number`

Defined in: [src/providers/ollama/types.ts:34](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L34)

Maximum number of tokens to predict (default: -1 = infinite)

***

### num\_thread?

> `optional` **num\_thread**: `number`

Defined in: [src/providers/ollama/types.ts:91](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L91)

Number of threads (default: auto)

***

### numa?

> `optional` **numa**: `boolean`

Defined in: [src/providers/ollama/types.ts:115](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L115)

NUMA support

***

### penalize\_newline?

> `optional` **penalize\_newline**: `boolean`

Defined in: [src/providers/ollama/types.ts:73](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L73)

Penalize newlines (default: true)

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/ollama/types.ts:58](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L58)

Presence penalty (default: 0.0)

***

### repeat\_last\_n?

> `optional` **repeat\_last\_n**: `number`

Defined in: [src/providers/ollama/types.ts:55](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L55)

Number of tokens to look back for repeat penalty (default: 64)

***

### repeat\_penalty?

> `optional` **repeat\_penalty**: `number`

Defined in: [src/providers/ollama/types.ts:52](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L52)

Repeat penalty (default: 1.1)

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/ollama/types.ts:79](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L79)

Seed for deterministic sampling (default: random)

***

### stop?

> `optional` **stop**: `string`[]

Defined in: [src/providers/ollama/types.ts:76](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L76)

Stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/ollama/types.ts:37](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L37)

Temperature for randomness (default: 0.8)

***

### tfs\_z?

> `optional` **tfs\_z**: `number`

Defined in: [src/providers/ollama/types.ts:118](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L118)

TFS-Z sampling (default: 1.0 = disabled)

***

### think?

> `optional` **think**: `boolean` \| `"high"` \| `"medium"` \| `"low"`

Defined in: [src/providers/ollama/types.ts:121](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L121)

Enable thinking mode (for models that support it)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [src/providers/ollama/types.ts:43](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L43)

Top-k sampling (default: 40)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/ollama/types.ts:130](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L130)

Number of top log probabilities to return

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/ollama/types.ts:40](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L40)

Top-p (nucleus) sampling (default: 0.9)

***

### typical\_p?

> `optional` **typical\_p**: `number`

Defined in: [src/providers/ollama/types.ts:49](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L49)

Typical p sampling (default: 1.0 = disabled)

***

### use\_mlock?

> `optional` **use\_mlock**: `boolean`

Defined in: [src/providers/ollama/types.ts:109](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L109)

Use mlock for memory locking

***

### use\_mmap?

> `optional` **use\_mmap**: `boolean`

Defined in: [src/providers/ollama/types.ts:106](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L106)

Use mmap for model loading

***

### vocab\_only?

> `optional` **vocab\_only**: `boolean`

Defined in: [src/providers/ollama/types.ts:112](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/ollama/types.ts#L112)

Vocabulary only mode
