---
title: "xai"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / xai

# xai

xAI provider for UPP (Unified Provider Protocol)

This module exports the xAI provider for use with the Grok family of models.
xAI's APIs are compatible with both OpenAI and Anthropic SDKs.

## Example

```ts
import { xai } from '@providerprotocol/ai/xai';
import { llm } from '@providerprotocol/ai';

// Create an LLM instance with Grok
const model = llm({
  model: xai('grok-4'),
  params: { max_tokens: 1000 }
});

// Generate a response
const turn = await model.generate('What is the meaning of life?');
console.log(turn.response.text);
```

## Interfaces

- [XAIAgentTool](interfaces/xaiagenttool.md)
- [XAICompletionsParams](interfaces/xaicompletionsparams.md)
- [XAIConfig](interfaces/xaiconfig.md)
- [XAIMessagesParams](interfaces/xaimessagesparams.md)
- [XAIModelOptions](interfaces/xaimodeloptions.md)
- [XAIModelReference](interfaces/xaimodelreference.md)
- [XAIProvider](interfaces/xaiprovider.md)
- [XAIProviderOptions](interfaces/xaiprovideroptions.md)
- [XAIResponsesParams](interfaces/xairesponsesparams.md)
- [~~XAISearchParameters~~](interfaces/xaisearchparameters.md)

## Type Aliases

- [XAIAPIMode](type-aliases/xaiapimode.md)

## Variables

- [xai](variables/xai.md)
