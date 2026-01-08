---
title: "Class: Thread"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Thread

# Class: Thread

Defined in: [src/types/thread.ts:95](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L95)

Thread - A utility class for managing conversation history.

Provides methods for building, manipulating, and persisting
conversation message sequences. This class is optional; users
can also manage their own `Message[]` arrays directly.

## Example

```typescript
// Create a new thread and add messages
const thread = new Thread();
thread.user('Hello!');
thread.assistant('Hi there! How can I help?');

// Use with LLM inference
const turn = await instance.generate(thread, 'What is 2+2?');
thread.append(turn);

// Serialize for storage
const json = thread.toJSON();
localStorage.setItem('chat', JSON.stringify(json));

// Restore from storage
const restored = Thread.fromJSON(JSON.parse(localStorage.getItem('chat')));
```

## Constructors

### Constructor

> **new Thread**(`messages?`): `Thread`

Defined in: [src/types/thread.ts:113](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L113)

Creates a new thread instance.

#### Parameters

##### messages?

[`Message`](message.md)[]

Optional initial messages to populate the thread

#### Returns

`Thread`

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/types/thread.ts:97](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L97)

Unique thread identifier

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/types/thread.ts:130](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L130)

Number of messages in the thread.

##### Returns

`number`

***

### messages

#### Get Signature

> **get** **messages**(): readonly [`Message`](message.md)[]

Defined in: [src/types/thread.ts:123](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L123)

All messages in the thread (readonly).

##### Returns

readonly [`Message`](message.md)[]

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<[`Message`](message.md)\>

Defined in: [src/types/thread.ts:316](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L316)

Enables iteration over messages with for...of loops.

#### Returns

`Iterator`\<[`Message`](message.md)\>

Iterator over the thread's messages

#### Example

```typescript
for (const message of thread) {
  console.log(message.text);
}
```

***

### append()

> **append**(`turn`): `this`

Defined in: [src/types/thread.ts:140](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L140)

Appends all messages from a Turn to the thread.

#### Parameters

##### turn

[`Turn`](../interfaces/turn.md)

The Turn containing messages to append

#### Returns

`this`

This thread instance for chaining

***

### assistant()

> **assistant**(`content`): `this`

Defined in: [src/types/thread.ts:190](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L190)

Adds an assistant message to the thread.

#### Parameters

##### content

String or array of content blocks

`string` | [`AssistantContent`](../type-aliases/assistantcontent.md)[]

#### Returns

`this`

This thread instance for chaining

#### Example

```typescript
thread.assistant('I can help with that!');
```

***

### clear()

> **clear**(): `this`

Defined in: [src/types/thread.ts:248](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L248)

Removes all messages from the thread.

#### Returns

`this`

This thread instance for chaining

***

### filter()

> **filter**(`type`): [`Message`](message.md)[]

Defined in: [src/types/thread.ts:208](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L208)

Filters messages by type.

#### Parameters

##### type

[`MessageType`](../type-aliases/messagetype.md)

The message type to filter by

#### Returns

[`Message`](message.md)[]

Array of messages matching the type

#### Example

```typescript
const userMessages = thread.filter('user');
const assistantMessages = thread.filter('assistant');
```

***

### push()

> **push**(...`messages`): `this`

Defined in: [src/types/thread.ts:152](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L152)

Adds raw messages to the thread.

#### Parameters

##### messages

...[`Message`](message.md)[]

Messages to add

#### Returns

`this`

This thread instance for chaining

***

### slice()

> **slice**(`start?`, `end?`): `Thread`

Defined in: [src/types/thread.ts:239](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L239)

Creates a new thread with a subset of messages.

#### Parameters

##### start?

`number`

Start index (inclusive)

##### end?

`number`

End index (exclusive)

#### Returns

`Thread`

New Thread containing the sliced messages

#### Example

```typescript
const subset = thread.slice(0, 10);
```

***

### tail()

> **tail**(`count`): [`Message`](message.md)[]

Defined in: [src/types/thread.ts:223](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L223)

Returns the last N messages from the thread.

#### Parameters

##### count

`number`

Number of messages to return

#### Returns

[`Message`](message.md)[]

Array of the last N messages

#### Example

```typescript
const recent = thread.tail(5);
```

***

### toJSON()

> **toJSON**(): [`ThreadJSON`](../interfaces/threadjson.md)

Defined in: [src/types/thread.ts:274](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L274)

Serializes the thread to JSON format.

#### Returns

[`ThreadJSON`](../interfaces/threadjson.md)

JSON-serializable representation of the thread

#### Example

```typescript
const json = thread.toJSON();
localStorage.setItem('thread', JSON.stringify(json));
```

***

### toMessages()

> **toMessages**(): [`Message`](message.md)[]

Defined in: [src/types/thread.ts:259](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L259)

Converts the thread to a plain message array.

#### Returns

[`Message`](message.md)[]

Copy of the internal message array

***

### user()

> **user**(`content`): `this`

Defined in: [src/types/thread.ts:173](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L173)

Adds a user message to the thread.

#### Parameters

##### content

String or array of content blocks

`string` | [`UserContent`](../type-aliases/usercontent.md)[]

#### Returns

`this`

This thread instance for chaining

#### Example

```typescript
thread.user('Hello, world!');
thread.user([
  { type: 'text', text: 'Describe this image:' },
  { type: 'image', source: { type: 'url', url: '...' }, mimeType: 'image/png' }
]);
```

***

### fromJSON()

> `static` **fromJSON**(`json`): `Thread`

Defined in: [src/types/thread.ts:295](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/thread.ts#L295)

Deserializes a thread from JSON format.

#### Parameters

##### json

[`ThreadJSON`](../interfaces/threadjson.md)

The JSON representation to deserialize

#### Returns

`Thread`

Reconstructed Thread instance

#### Example

```typescript
const json = JSON.parse(localStorage.getItem('thread'));
const thread = Thread.fromJSON(json);
```
