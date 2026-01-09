---
title: "Interface: OpenAIResponsesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIResponsesParams

# Interface: OpenAIResponsesParams

Defined in: [src/providers/openai/types.ts:287](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L287)

Parameters for the OpenAI Responses API.

These parameters are passed directly to the `/v1/responses` endpoint.
The Responses API is the modern, recommended API that supports built-in
tools like web search, image generation, file search, and code interpreter.

## Examples

```typescript
const params: OpenAIResponsesParams = {
  max_output_tokens: 1000,
  temperature: 0.7,
  reasoning: { effort: 'medium' }
};
```

```typescript
import { tools } from './types';

const params: OpenAIResponsesParams = {
  max_output_tokens: 2000,
  tools: [tools.webSearch(), tools.imageGeneration()]
};
```

## See

[OpenAICompletionsParams](openaicompletionsparams.md) for the legacy Chat Completions API parameters

## Properties

### background?

> `optional` **background**: `boolean`

Defined in: [src/providers/openai/types.ts:330](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L330)

Background processing - run response asynchronously

***

### conversation?

> `optional` **conversation**: `string` \| [`OpenAIConversation`](openaiconversation.md)

Defined in: [src/providers/openai/types.ts:339](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L339)

Conversation context - items prepended to input_items
Cannot be used with previous_response_id

***

### include?

> `optional` **include**: `string`[]

Defined in: [src/providers/openai/types.ts:327](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L327)

Fields to include in output
Supported values:
- 'web_search_call.action.sources': Include web search sources
- 'code_interpreter_call.outputs': Include code execution outputs
- 'computer_call_output.output.image_url': Include computer call images
- 'file_search_call.results': Include file search results
- 'message.input_image.image_url': Include input image URLs
- 'message.output_text.logprobs': Include logprobs with messages
- 'reasoning.encrypted_content': Include encrypted reasoning tokens

***

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/openai/types.ts:289](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L289)

Maximum output tokens

***

### max\_tool\_calls?

> `optional` **max\_tool\_calls**: `number`

Defined in: [src/providers/openai/types.ts:351](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L351)

Maximum total calls to built-in tools in a response
Applies across all built-in tool calls, not per tool

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/providers/openai/types.ts:345](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L345)

Metadata key-value pairs (max 16, keys max 64 chars, values max 512 chars)

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/openai/types.ts:301](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L301)

Whether to enable parallel tool calls

***

### previous\_response\_id?

> `optional` **previous\_response\_id**: `string`

Defined in: [src/providers/openai/types.ts:333](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L333)

Continue from a previous response (cannot use with conversation)

***

### prompt?

> `optional` **prompt**: [`OpenAIPromptTemplate`](openaiprompttemplate.md)

Defined in: [src/providers/openai/types.ts:356](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L356)

Reference to a prompt template and its variables

***

### prompt\_cache\_key?

> `optional` **prompt\_cache\_key**: `string`

Defined in: [src/providers/openai/types.ts:362](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L362)

Stable identifier for caching similar requests
Used to optimize cache hit rates (replaces user field)

***

### prompt\_cache\_retention?

> `optional` **prompt\_cache\_retention**: `"in-memory"` \| `"24h"`

Defined in: [src/providers/openai/types.ts:368](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L368)

Retention policy for prompt cache
Set to "24h" to enable extended prompt caching up to 24 hours

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/openai/types.ts:304](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L304)

Reasoning configuration (for gpt-5 and o-series models)

#### effort?

> `optional` **effort**: `"high"` \| `"medium"` \| `"low"` \| `"none"` \| `"minimal"` \| `"xhigh"`

#### summary?

> `optional` **summary**: `"auto"` \| `"concise"` \| `"detailed"`

Include summary of reasoning

***

### safety\_identifier?

> `optional` **safety\_identifier**: `string`

Defined in: [src/providers/openai/types.ts:374](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L374)

Stable identifier for abuse detection
Recommend hashing username or email address

***

### service\_tier?

> `optional` **service\_tier**: `"default"` \| `"auto"` \| `"priority"` \| `"flex"` \| `"scale"`

Defined in: [src/providers/openai/types.ts:311](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L311)

Service tier

***

### store?

> `optional` **store**: `boolean`

Defined in: [src/providers/openai/types.ts:342](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L342)

Store response for continuation

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/openai/types.ts:292](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L292)

Temperature for randomness (0.0 - 2.0)

***

### tools?

> `optional` **tools**: [`OpenAIBuiltInTool`](../type-aliases/openaibuiltintool.md)[]

Defined in: [src/providers/openai/types.ts:398](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L398)

Built-in tools for the Responses API
Use the tool helper constructors: tools.webSearch(), tools.imageGeneration(), etc.

#### Example

```ts
import { tools } from 'provider-protocol/openai';

const model = llm({
  model: openai('gpt-4o'),
  params: {
    tools: [
      tools.webSearch(),
      tools.imageGeneration({ quality: 'high' }),
    ],
  },
});
```

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/openai/types.ts:298](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L298)

Number of top logprobs to return (0-20)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/openai/types.ts:295](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L295)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### truncation?

> `optional` **truncation**: `"auto"` \| `"disabled"`

Defined in: [src/providers/openai/types.ts:314](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L314)

Truncation strategy

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openai/types.ts:377](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L377)

User identifier (deprecated, use safety_identifier or prompt_cache_key)
