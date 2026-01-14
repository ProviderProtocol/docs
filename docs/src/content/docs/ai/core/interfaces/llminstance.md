---
title: "Interface: LLMInstance"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMInstance

# Interface: LLMInstance\<TParams\>

Defined in: [src/types/llm.ts:177](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L177)

LLM instance returned by the llm() function.

Provides methods for generating responses and streaming output,
with access to the bound model and capabilities.

## Example

```typescript
import { llm, openai, StreamEventType } from 'provider-protocol';

const instance = llm({ model: openai('gpt-4') });

// Simple generation
const turn = await instance.generate('Hello!');
console.log(turn.response.text);

// Streaming
const stream = instance.stream('Tell me a story');
for await (const event of stream) {
  if (event.type === StreamEventType.TextDelta) {
    process.stdout.write(event.delta.text ?? '');
  }
}
const finalTurn = await stream.turn;
```

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### capabilities

> `readonly` **capabilities**: [`LLMCapabilities`](llmcapabilities.md)

Defined in: [src/types/llm.ts:221](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L221)

Provider API capabilities

***

### model

> `readonly` **model**: [`BoundLLMModel`](boundllmmodel.md)\<`TParams`\>

Defined in: [src/types/llm.ts:212](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L212)

The bound model instance

***

### params

> `readonly` **params**: `TParams` \| `undefined`

Defined in: [src/types/llm.ts:218](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L218)

Current model parameters

***

### system

> `readonly` **system**: `string` \| `unknown`[] \| `undefined`

Defined in: [src/types/llm.ts:215](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L215)

Current system prompt (string or provider-specific array format)

## Methods

### generate()

> **generate**(`historyOrInput`, ...`input`): `Promise`\<[`Turn`](turn.md)\<`unknown`\>\>

Defined in: [src/types/llm.ts:191](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L191)

Executes inference and returns the complete Turn.

Supports multiple calling patterns:
- Single input: `generate('Hello')`
- Multiple inputs: `generate('Context...', 'Question?')`
- With history: `generate(messages, 'Follow-up?')`
- With thread: `generate(thread, 'Next message')`

#### Parameters

##### historyOrInput

History (Message[] or Thread) or first input

[`Message`](../classes/message.md)[] | [`Thread`](../classes/thread.md) | [`InferenceInput`](../type-aliases/inferenceinput.md)

##### input

...[`InferenceInput`](../type-aliases/inferenceinput.md)[]

Additional inputs to include in the request

#### Returns

`Promise`\<[`Turn`](turn.md)\<`unknown`\>\>

Promise resolving to the complete Turn

***

### stream()

> **stream**(`historyOrInput`, ...`input`): [`StreamResult`](streamresult.md)

Defined in: [src/types/llm.ts:206](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/llm.ts#L206)

Executes streaming inference.

Returns an async iterable of stream events that can also
be awaited for the final Turn.

#### Parameters

##### historyOrInput

History (Message[] or Thread) or first input

[`Message`](../classes/message.md)[] | [`Thread`](../classes/thread.md) | [`InferenceInput`](../type-aliases/inferenceinput.md)

##### input

...[`InferenceInput`](../type-aliases/inferenceinput.md)[]

Additional inputs to include in the request

#### Returns

[`StreamResult`](streamresult.md)

StreamResult that yields events and resolves to Turn
