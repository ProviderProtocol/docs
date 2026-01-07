---
title: "xai"
---

[**@providerprotocol/ai**](../README.md)

***

[@providerprotocol/ai](../modules.md) / xai

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

- [XAIAgentTool](interfaces/XAIAgentTool.md)
- [XAICompletionsParams](interfaces/XAICompletionsParams.md)
- [XAIConfig](interfaces/XAIConfig.md)
- [XAIMessagesParams](interfaces/XAIMessagesParams.md)
- [XAIModelOptions](interfaces/XAIModelOptions.md)
- [XAIModelReference](interfaces/XAIModelReference.md)
- [XAIProvider](interfaces/XAIProvider.md)
- [XAIProviderOptions](interfaces/XAIProviderOptions.md)
- [XAIResponsesParams](interfaces/XAIResponsesParams.md)
- [~~XAISearchParameters~~](interfaces/XAISearchParameters.md)

## Type Aliases

- [XAIAPIMode](type-aliases/XAIAPIMode.md)

## Variables

- [xai](variables/xai.md)
