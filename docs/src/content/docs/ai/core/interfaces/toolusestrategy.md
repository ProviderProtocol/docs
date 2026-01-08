---
title: "Interface: ToolUseStrategy"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolUseStrategy

# Interface: ToolUseStrategy

Defined in: [src/types/tool.ts:214](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L214)

Strategy for controlling tool execution behavior.

Provides hooks for monitoring, controlling, and transforming the tool execution
loop during LLM inference.

## Example

```typescript
const strategy: ToolUseStrategy = {
  maxIterations: 5,
  onToolCall: (tool, params) => {
    console.log(`Calling ${tool.name} with`, params);
  },
  // Transform input parameters
  onBeforeCall: (tool, params) => {
    if (tool.name === 'search') {
      return { proceed: true, params: { ...params, limit: 10 } };
    }
    return true;
  },
  // Transform output results
  onAfterCall: (tool, params, result) => {
    if (tool.name === 'fetch_data') {
      return { result: sanitize(result) };
    }
  },
  onMaxIterations: (iterations) => {
    console.warn(`Reached max iterations: ${iterations}`);
  }
};
```

## Properties

### maxIterations?

> `optional` **maxIterations**: `number`

Defined in: [src/types/tool.ts:216](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L216)

Maximum number of tool execution rounds (default: 10)

## Methods

### onAfterCall()?

> `optional` **onAfterCall**(`tool`, `params`, `result`): `void` \| [`AfterCallResult`](aftercallresult.md) \| `Promise`\<`void` \| [`AfterCallResult`](aftercallresult.md)\>

Defined in: [src/types/tool.ts:246](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L246)

Called after tool execution completes. Can transform the result.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool that was executed

##### params

`unknown`

The parameters that were used

##### result

`unknown`

The result from the tool

#### Returns

`void` \| [`AfterCallResult`](aftercallresult.md) \| `Promise`\<`void` \| [`AfterCallResult`](aftercallresult.md)\>

Void to use original result, or `AfterCallResult` to transform it

***

### onBeforeCall()?

> `optional` **onBeforeCall**(`tool`, `params`): `boolean` \| [`BeforeCallResult`](beforecallresult.md) \| `Promise`\<`boolean` \| [`BeforeCallResult`](beforecallresult.md)\>

Defined in: [src/types/tool.ts:236](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L236)

Called before tool execution. Can skip execution or transform parameters.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool about to be executed

##### params

`unknown`

The parameters for the call

#### Returns

`boolean` \| [`BeforeCallResult`](beforecallresult.md) \| `Promise`\<`boolean` \| [`BeforeCallResult`](beforecallresult.md)\>

One of:
  - `false` to skip execution
  - `true` to proceed with original params
  - `BeforeCallResult` object to control execution and optionally transform params

***

### onError()?

> `optional` **onError**(`tool`, `params`, `error`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/tool.ts:255](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L255)

Called when a tool execution throws an error.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool that failed

##### params

`unknown`

The parameters that were used

##### error

`Error`

The error that was thrown

#### Returns

`void` \| `Promise`\<`void`\>

***

### onMaxIterations()?

> `optional` **onMaxIterations**(`iterations`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/tool.ts:262](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L262)

Called when the maximum iteration limit is reached.

#### Parameters

##### iterations

`number`

The number of iterations that were performed

#### Returns

`void` \| `Promise`\<`void`\>

***

### onToolCall()?

> `optional` **onToolCall**(`tool`, `params`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/tool.ts:224](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/tool.ts#L224)

Called when the model requests a tool call.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool being called

##### params

`unknown`

The parameters for the call

#### Returns

`void` \| `Promise`\<`void`\>
