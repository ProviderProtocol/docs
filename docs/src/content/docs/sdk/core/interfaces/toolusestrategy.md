---
title: "Interface: ToolUseStrategy"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ToolUseStrategy

# Interface: ToolUseStrategy

Defined in: [src/types/tool.ts:146](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L146)

Strategy for controlling tool execution behavior.

Provides hooks for monitoring and controlling the tool execution
loop during LLM inference.

## Example

```typescript
const strategy: ToolUseStrategy = {
  maxIterations: 5,
  onToolCall: (tool, params) => {
    console.log(`Calling ${tool.name} with`, params);
  },
  onMaxIterations: (iterations) => {
    console.warn(`Reached max iterations: ${iterations}`);
  }
};
```

## Properties

### maxIterations?

> `optional` **maxIterations**: `number`

Defined in: [src/types/tool.ts:148](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L148)

Maximum number of tool execution rounds (default: 10)

## Methods

### onAfterCall()?

> `optional` **onAfterCall**(`tool`, `params`, `result`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/tool.ts:174](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L174)

Called after tool execution completes.

#### Parameters

##### tool

[`Tool`](Tool.md)

The tool that was executed

##### params

`unknown`

The parameters that were used

##### result

`unknown`

The result from the tool

#### Returns

`void` \| `Promise`\<`void`\>

***

### onBeforeCall()?

> `optional` **onBeforeCall**(`tool`, `params`): `boolean` \| `Promise`\<`boolean`\>

Defined in: [src/types/tool.ts:165](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L165)

Called before tool execution.

#### Parameters

##### tool

[`Tool`](Tool.md)

The tool about to be executed

##### params

`unknown`

The parameters for the call

#### Returns

`boolean` \| `Promise`\<`boolean`\>

False to skip execution, true to proceed

***

### onError()?

> `optional` **onError**(`tool`, `params`, `error`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/tool.ts:183](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L183)

Called when a tool execution throws an error.

#### Parameters

##### tool

[`Tool`](Tool.md)

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

Defined in: [src/types/tool.ts:190](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L190)

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

Defined in: [src/types/tool.ts:156](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L156)

Called when the model requests a tool call.

#### Parameters

##### tool

[`Tool`](Tool.md)

The tool being called

##### params

`unknown`

The parameters for the call

#### Returns

`void` \| `Promise`\<`void`\>
