---
title: "Interface: LoggingOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LoggingOptions

# Interface: LoggingOptions

Defined in: [src/middleware/logging.ts:21](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/logging.ts#L21)

Options for logging middleware.

## Properties

### level?

> `optional` **level**: [`LogLevel`](../type-aliases/loglevel.md)

Defined in: [src/middleware/logging.ts:26](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/logging.ts#L26)

Minimum log level to output.

#### Default

```ts
'info'
```

***

### logStreamEvents?

> `optional` **logStreamEvents**: `boolean`

Defined in: [src/middleware/logging.ts:32](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/logging.ts#L32)

Log individual stream events.

#### Default

```ts
false
```

***

### logToolCalls?

> `optional` **logToolCalls**: `boolean`

Defined in: [src/middleware/logging.ts:38](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/logging.ts#L38)

Log tool calls and results.

#### Default

```ts
true
```

***

### prefix?

> `optional` **prefix**: `string`

Defined in: [src/middleware/logging.ts:52](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/logging.ts#L52)

Prefix for all log messages.

#### Default

```ts
'[PP]'
```

## Methods

### logger()?

> `optional` **logger**(`level`, `message`, `data?`): `void`

Defined in: [src/middleware/logging.ts:46](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/logging.ts#L46)

Custom logger function. If not provided, uses console.log.

#### Parameters

##### level

[`LogLevel`](../type-aliases/loglevel.md)

The log level

##### message

`string`

The log message

##### data?

`Record`\<`string`, `unknown`\>

Optional additional data

#### Returns

`void`
