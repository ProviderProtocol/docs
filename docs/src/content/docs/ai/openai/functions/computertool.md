---
title: "Function: computerTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / computerTool

# Function: computerTool()

> **computerTool**(`options`): [`OpenAIComputerTool`](../interfaces/openaicomputertool.md)

Defined in: [src/providers/openai/types.ts:1419](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1419)

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
