---
title: "Function: computerTool()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / computerTool

# Function: computerTool()

> **computerTool**(`options`): [`OpenAIComputerTool`](../interfaces/OpenAIComputerTool.md)

Defined in: [src/providers/openai/types.ts:1372](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1372)

Creates a computer tool configuration for the Responses API.

The computer tool enables the model to interact with computer interfaces
through mouse and keyboard actions.

## Parameters

### options

Display configuration and environment settings

#### display_height

`number`

#### display_width

`number`

#### environment?

[`OpenAIComputerEnvironment`](../interfaces/OpenAIComputerEnvironment.md)

## Returns

[`OpenAIComputerTool`](../interfaces/OpenAIComputerTool.md)

A computer tool configuration object

## Example

```typescript
const computer = computerTool({
  display_width: 1920,
  display_height: 1080,
  environment: { type: 'browser' }
});
```
