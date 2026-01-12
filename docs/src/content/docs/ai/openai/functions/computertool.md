---
title: "Function: computerTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / computerTool

# Function: computerTool()

> **computerTool**(`options`): [`OpenAIComputerTool`](../interfaces/openaicomputertool.md)

Defined in: [src/providers/openai/types.ts:1372](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/types.ts#L1372)

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

[`OpenAIComputerEnvironment`](../interfaces/openaicomputerenvironment.md)

## Returns

[`OpenAIComputerTool`](../interfaces/openaicomputertool.md)

A computer tool configuration object

## Example

```typescript
const computer = computerTool({
  display_width: 1920,
  display_height: 1080,
  environment: { type: 'browser' }
});
```
