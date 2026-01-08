---
title: "Interface: LoggingOptions"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / LoggingOptions

# Interface: LoggingOptions

Defined in: [src/middleware/types.ts:216](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/middleware/types.ts#L216)

Configuration options for the logging middleware.

## See

logging for the middleware factory function

## Example

```typescript
// Minimal logging
const options: LoggingOptions = {
  level: 'warn',
};

// Verbose debug logging to custom destination
const debugOptions: LoggingOptions = {
  level: 'debug',
  includeMessages: true,
  includeTiming: true,
  logger: (msg) => myLogger.log(msg),
};
```

## Properties

### includeMessages?

> `optional` **includeMessages**: `boolean`

Defined in: [src/middleware/types.ts:254](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/middleware/types.ts#L254)

Whether to include message content in debug logs.

When enabled, logs the input message content and response text.
Useful for debugging but may expose sensitive data.

#### Default Value

```ts
false
```

***

### includeTiming?

> `optional` **includeTiming**: `boolean`

Defined in: [src/middleware/types.ts:263](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/middleware/types.ts#L263)

Whether to include execution timing in log output.

When enabled, logs the duration of agent execution in milliseconds.

#### Default Value

```ts
true
```

***

### level?

> `optional` **level**: `"error"` \| `"info"` \| `"debug"` \| `"warn"`

Defined in: [src/middleware/types.ts:228](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/middleware/types.ts#L228)

Minimum log level to output.

Messages below this level are suppressed. Levels in order of verbosity:
- `debug` - Detailed debugging information
- `info` - General execution information
- `warn` - Warning conditions
- `error` - Error conditions only

#### Default Value

```ts
'info'
```

***

### logger()?

> `optional` **logger**: (`message`) => `void`

Defined in: [src/middleware/types.ts:244](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/middleware/types.ts#L244)

Custom logging function to receive log messages.

Override this to integrate with your logging infrastructure
(e.g., Winston, Pino, or a cloud logging service).

#### Parameters

##### message

`string`

The formatted log message including level prefix

#### Returns

`void`

#### Default Value

```ts
console.log
```

#### Example

```typescript
logger: (msg) => winston.info(msg)
```
