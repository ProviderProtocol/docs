---
title: "Interface: ToolWithDependencies"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ToolWithDependencies

# Interface: ToolWithDependencies

Defined in: [src/execution/types.ts:526](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L526)

Extended Tool interface with UAP dependency options.

Use this type when defining tools that need execution ordering.
Combines the standard UPP Tool interface with ToolDependencyOptions.

## See

UAP-1.0 Spec Section 8.5

## Example

```typescript
const readTool: ToolWithDependencies = {
  name: 'read_file',
  description: 'Read a file',
  parameters: {
    type: 'object',
    properties: { path: { type: 'string' } },
    required: ['path'],
  },
  sequential: true, // Must complete before other tools
  run: async (params) => fs.readFile(params.path, 'utf-8'),
};

const writeTool: ToolWithDependencies = {
  name: 'write_file',
  description: 'Write a file',
  parameters: {
    type: 'object',
    properties: {
      path: { type: 'string' },
      content: { type: 'string' },
    },
    required: ['path', 'content'],
  },
  dependsOn: ['read_file'], // Waits for read_file to complete
  run: async (params) => fs.writeFile(params.path, params.content),
};
```

## Extends

- `Tool`.[`ToolDependencyOptions`](tooldependencyoptions.md)

## Properties

### dependsOn?

> `optional` **dependsOn**: `string`[]

Defined in: [src/execution/types.ts:485](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L485)

Tool names that must complete before this tool can execute.
Used for explicit dependency chains.

#### Inherited from

[`ToolDependencyOptions`](tooldependencyoptions.md).[`dependsOn`](tooldependencyoptions.md#dependson)

***

### description

> **description**: `string`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:168

Human-readable description for the model

#### Inherited from

`Tool.description`

***

### name

> **name**: `string`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:166

Tool name (must be unique within a llm() instance)

#### Inherited from

`Tool.name`

***

### parameters

> **parameters**: `JSONSchema`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:170

JSON Schema defining parameters

#### Inherited from

`Tool.parameters`

***

### sequential?

> `optional` **sequential**: `boolean`

Defined in: [src/execution/types.ts:479](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L479)

If true, this tool must complete before other tools start.
Sequential tools create a barrier in parallel execution.

#### Inherited from

[`ToolDependencyOptions`](tooldependencyoptions.md).[`sequential`](tooldependencyoptions.md#sequential)

## Methods

### approval()?

> `optional` **approval**(`params`): `boolean` \| `Promise`\<`boolean`\>

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:174

Optional approval handler for sensitive operations

#### Parameters

##### params

`unknown`

#### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Inherited from

`Tool.approval`

***

### run()

> **run**(`params`): `unknown`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:172

Tool execution function

#### Parameters

##### params

`unknown`

#### Returns

`unknown`

#### Inherited from

`Tool.run`
