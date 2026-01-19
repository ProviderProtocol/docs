---
title: "Interface: XAIResponsesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIResponsesParams

# Interface: XAIResponsesParams

Defined in: [src/providers/xai/types.ts:99](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L99)

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

### include?

> `optional` **include**: `string`[]

Defined in: [src/providers/xai/types.ts:123](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L123)

Fields to include in output

***

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/xai/types.ts:101](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L101)

Maximum output tokens

***

### max\_turns?

> `optional` **max\_turns**: `number`

Defined in: [src/providers/xai/types.ts:171](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L171)

Maximum agent reasoning turns.
Limits the number of assistant turns, not individual tool calls.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/providers/xai/types.ts:135](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L135)

Metadata key-value pairs

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/xai/types.ts:110](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L110)

Whether to enable parallel tool calls

***

### previous\_response\_id?

> `optional` **previous\_response\_id**: `string`

Defined in: [src/providers/xai/types.ts:126](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L126)

Continue from a previous response

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/xai/types.ts:113](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L113)

Reasoning configuration

#### effort?

> `optional` **effort**: `"low"` \| `"high"`

#### encrypted\_content?

> `optional` **encrypted\_content**: `boolean`

Include encrypted reasoning content for continuation

***

### store?

> `optional` **store**: `boolean`

Defined in: [src/providers/xai/types.ts:129](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L129)

Store response for continuation

***

### store\_messages?

> `optional` **store\_messages**: `boolean`

Defined in: [src/providers/xai/types.ts:132](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L132)

Store messages on xAI servers (default: true)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/xai/types.ts:104](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L104)

Temperature for randomness (0.0 - 2.0)

***

### tools?

> `optional` **tools**: [`XAIBuiltInTool`](../type-aliases/xaibuiltintool.md)[]

Defined in: [src/providers/xai/types.ts:165](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L165)

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
    tools: [
      tools.webSearch(),
      tools.xSearch({ from_date: '2025-01-01' }),
      tools.codeExecution(),
    ],
  },
});
```

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/xai/types.ts:107](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L107)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### truncation?

> `optional` **truncation**: `"auto"` \| `"disabled"`

Defined in: [src/providers/xai/types.ts:120](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L120)

Truncation strategy
