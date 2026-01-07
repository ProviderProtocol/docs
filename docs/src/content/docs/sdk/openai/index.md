---
title: "openai"
---

[**@providerprotocol/ai**](../README.md)

***

[@providerprotocol/ai](../modules.md) / openai

# openai

OpenAI provider for UPP (Unified Provider Protocol)

This module exports the OpenAI provider for use with GPT models.
Supports both the modern Responses API (default) and the legacy
Chat Completions API.

## Examples

```ts
import { openai } from '@providerprotocol/ai/openai';
import { llm } from '@providerprotocol/ai';

// Create an LLM instance with GPT-4o
const model = llm({
  model: openai('gpt-4o'),
  params: { max_output_tokens: 1000 }
});

// Generate a response
const turn = await model.generate('Explain recursion.');
console.log(turn.response.text);
```

```ts
const legacyModel = llm({
  model: openai('gpt-4o', { api: 'completions' }),
  params: { max_tokens: 1000 }
});
```

```ts
import { openai, tools } from '@providerprotocol/ai/openai';

const model = llm({
  model: openai('gpt-4o'),
  params: {
    tools: [tools.webSearch(), tools.imageGeneration()]
  }
});
```

## Interfaces

- [OpenAIAudioConfig](interfaces/OpenAIAudioConfig.md)
- [OpenAICodeInterpreterContainer](interfaces/OpenAICodeInterpreterContainer.md)
- [OpenAICodeInterpreterTool](interfaces/OpenAICodeInterpreterTool.md)
- [OpenAICompletionsParams](interfaces/OpenAICompletionsParams.md)
- [OpenAICompletionsWebSearchUserLocation](interfaces/OpenAICompletionsWebSearchUserLocation.md)
- [OpenAIComputerEnvironment](interfaces/OpenAIComputerEnvironment.md)
- [OpenAIComputerTool](interfaces/OpenAIComputerTool.md)
- [OpenAIConfig](interfaces/OpenAIConfig.md)
- [OpenAIConversation](interfaces/OpenAIConversation.md)
- [OpenAIFileSearchTool](interfaces/OpenAIFileSearchTool.md)
- [OpenAIImageGenerationTool](interfaces/OpenAIImageGenerationTool.md)
- [OpenAIMcpServerConfig](interfaces/OpenAIMcpServerConfig.md)
- [OpenAIMcpTool](interfaces/OpenAIMcpTool.md)
- [OpenAIModelOptions](interfaces/OpenAIModelOptions.md)
- [OpenAIModelReference](interfaces/OpenAIModelReference.md)
- [OpenAIPromptTemplate](interfaces/OpenAIPromptTemplate.md)
- [OpenAIResponsesParams](interfaces/OpenAIResponsesParams.md)
- [OpenAIWebSearchOptions](interfaces/OpenAIWebSearchOptions.md)
- [OpenAIWebSearchTool](interfaces/OpenAIWebSearchTool.md)
- [OpenAIWebSearchUserLocation](interfaces/OpenAIWebSearchUserLocation.md)

## Type Aliases

- [OpenAIAPIMode](type-aliases/OpenAIAPIMode.md)
- [OpenAIBuiltInTool](type-aliases/OpenAIBuiltInTool.md)
- [OpenAIResponsesToolUnion](type-aliases/OpenAIResponsesToolUnion.md)

## Variables

- [openai](variables/openai.md)
- [tools](variables/tools.md)

## Functions

- [codeInterpreterTool](functions/codeInterpreterTool.md)
- [computerTool](functions/computerTool.md)
- [fileSearchTool](functions/fileSearchTool.md)
- [imageGenerationTool](functions/imageGenerationTool.md)
- [mcpTool](functions/mcpTool.md)
- [webSearchTool](functions/webSearchTool.md)
