---
title: "Interface: XAIResponsesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIResponsesParams

# Interface: XAIResponsesParams

Defined in: [src/providers/xai/types.ts:105](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L105)

xAI Responses API parameters (OpenAI Responses-compatible).

These parameters are passed through to the xAI `/v1/responses` endpoint.
The Responses API provides stateful conversation support with features like
`previous_response_id` for continuing conversations across requests.

## Example

```typescript
const params: XAIResponsesParams = {
  max_output_tokens: 1000,
  temperature: 0.7,
  store: true, // Enable stateful storage
  previous_response_id: 'resp_123...', // Continue previous conversation
};
```

## See

 - [XAICompletionsParams](xaicompletionsparams.md) for Chat Completions API parameters
 - [XAIMessagesParams](xaimessagesparams.md) for Messages API parameters

## Properties

### builtInTools?

> `optional` **builtInTools**: [`XAIBuiltInTool`](../type-aliases/xaibuiltintool.md)[]

Defined in: [src/providers/xai/types.ts:177](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L177)

Built-in agentic tools for server-side execution.

Use the tool helper constructors from the `tools` namespace:
- `tools.webSearch()` - Web search capability
- `tools.xSearch()` - X (Twitter) search capability
- `tools.codeExecution()` - Python code execution
- `tools.fileSearch()` - Document/collections search
- `tools.mcp()` - Remote MCP server connection

Note: Only available via the Responses API (`api: 'responses'`).

#### Example

```typescript
import { xai, tools } from 'provider-protocol/xai';

const model = llm({
  model: xai('grok-4-1-fast', { api: 'responses' }),
  params: {
    builtInTools: [
      tools.webSearch(),
      tools.xSearch({ from_date: '2025-01-01' }),
      tools.codeExecution(),
    ],
  },
});
```

***

### include?

> `optional` **include**: `string`[]

Defined in: [src/providers/xai/types.ts:129](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L129)

Fields to include in output

***

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/xai/types.ts:107](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L107)

Maximum output tokens

***

### max\_turns?

> `optional` **max\_turns**: `number`

Defined in: [src/providers/xai/types.ts:183](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L183)

Maximum agent reasoning turns.
Limits the number of assistant turns, not individual tool calls.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/providers/xai/types.ts:141](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L141)

Metadata key-value pairs

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/xai/types.ts:116](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L116)

Whether to enable parallel tool calls

***

### previous\_response\_id?

> `optional` **previous\_response\_id**: `string`

Defined in: [src/providers/xai/types.ts:132](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L132)

Continue from a previous response

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/xai/types.ts:119](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L119)

Reasoning configuration

#### effort?

> `optional` **effort**: `"high"` \| `"low"`

#### encrypted\_content?

> `optional` **encrypted\_content**: `boolean`

Include encrypted reasoning content for continuation

***

### search\_parameters?

> `optional` **search\_parameters**: [`XAISearchParameters`](xaisearchparameters.md)

Defined in: [src/providers/xai/types.ts:147](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L147)

Live Search parameters (deprecated, will be removed Dec 15, 2025)
Use Agent Tools API instead for new implementations

***

### store?

> `optional` **store**: `boolean`

Defined in: [src/providers/xai/types.ts:135](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L135)

Store response for continuation

***

### store\_messages?

> `optional` **store\_messages**: `boolean`

Defined in: [src/providers/xai/types.ts:138](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L138)

Store messages on xAI servers (default: true)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/xai/types.ts:110](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L110)

Temperature for randomness (0.0 - 2.0)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/xai/types.ts:113](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L113)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### truncation?

> `optional` **truncation**: `"auto"` \| `"disabled"`

Defined in: [src/providers/xai/types.ts:126](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L126)

Truncation strategy
