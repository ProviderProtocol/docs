---
title: "Interface: LLMInstance<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / LLMInstance

# Interface: LLMInstance\<TParams\>

Defined in: [src/types/llm.ts:140](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L140)

LLM instance returned by the llm() function.

Provides methods for generating responses and streaming output,
with access to the bound model and capabilities.

## Example

```typescript
const instance = llm({ model: openai('gpt-4') });

// Simple generation
const turn = await instance.generate('Hello!');
console.log(turn.response.text);

// Streaming
const stream = instance.stream('Tell me a story');
for await (const event of stream) {
  if (event.type === 'text_delta') {
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

> `readonly` **capabilities**: [`LLMCapabilities`](LLMCapabilities.md)

Defined in: [src/types/llm.ts:184](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L184)

Provider API capabilities

***

### model

> `readonly` **model**: [`BoundLLMModel`](BoundLLMModel.md)\<`TParams`\>

Defined in: [src/types/llm.ts:175](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L175)

The bound model instance

***

### params

> `readonly` **params**: `TParams` \| `undefined`

Defined in: [src/types/llm.ts:181](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L181)

Current model parameters

***

### system

> `readonly` **system**: `string` \| `undefined`

Defined in: [src/types/llm.ts:178](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L178)

Current system prompt

## Methods

### generate()

> **generate**(`historyOrInput`, ...`input`): `Promise`\<[`Turn`](Turn.md)\<`unknown`\>\>

Defined in: [src/types/llm.ts:154](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L154)

Executes inference and returns the complete Turn.

Supports multiple calling patterns:
- Single input: `generate('Hello')`
- Multiple inputs: `generate('Context...', 'Question?')`
- With history: `generate(messages, 'Follow-up?')`
- With thread: `generate(thread, 'Next message')`

#### Parameters

##### historyOrInput

History (Message[] or Thread) or first input

[`Message`](../classes/Message.md)[] | [`Thread`](../classes/Thread.md) | [`InferenceInput`](../type-aliases/InferenceInput.md)

##### input

...[`InferenceInput`](../type-aliases/InferenceInput.md)[]

Additional inputs to include in the request

#### Returns

`Promise`\<[`Turn`](Turn.md)\<`unknown`\>\>

Promise resolving to the complete Turn

***

### stream()

> **stream**(`historyOrInput`, ...`input`): [`StreamResult`](StreamResult.md)

Defined in: [src/types/llm.ts:169](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L169)

Executes streaming inference.

Returns an async iterable of stream events that can also
be awaited for the final Turn.

#### Parameters

##### historyOrInput

History (Message[] or Thread) or first input

[`Message`](../classes/Message.md)[] | [`Thread`](../classes/Thread.md) | [`InferenceInput`](../type-aliases/InferenceInput.md)

##### input

...[`InferenceInput`](../type-aliases/InferenceInput.md)[]

Additional inputs to include in the request

#### Returns

[`StreamResult`](StreamResult.md)

StreamResult that yields events and resolves to Turn
