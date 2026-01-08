---
title: "openai"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / openai

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

- [OpenAIAudioConfig](interfaces/openaiaudioconfig.md)
- [OpenAICodeInterpreterContainer](interfaces/openaicodeinterpretercontainer.md)
- [OpenAICodeInterpreterTool](interfaces/openaicodeinterpretertool.md)
- [OpenAICompletionsParams](interfaces/openaicompletionsparams.md)
- [OpenAICompletionsWebSearchUserLocation](interfaces/openaicompletionswebsearchuserlocation.md)
- [OpenAIComputerEnvironment](interfaces/openaicomputerenvironment.md)
- [OpenAIComputerTool](interfaces/openaicomputertool.md)
- [OpenAIConfig](interfaces/openaiconfig.md)
- [OpenAIConversation](interfaces/openaiconversation.md)
- [OpenAIFileSearchTool](interfaces/openaifilesearchtool.md)
- [OpenAIImageGenerationTool](interfaces/openaiimagegenerationtool.md)
- [OpenAIMcpServerConfig](interfaces/openaimcpserverconfig.md)
- [OpenAIMcpTool](interfaces/openaimcptool.md)
- [OpenAIModelOptions](interfaces/openaimodeloptions.md)
- [OpenAIModelReference](interfaces/openaimodelreference.md)
- [OpenAIPromptTemplate](interfaces/openaiprompttemplate.md)
- [OpenAIResponsesParams](interfaces/openairesponsesparams.md)
- [OpenAIWebSearchOptions](interfaces/openaiwebsearchoptions.md)
- [OpenAIWebSearchTool](interfaces/openaiwebsearchtool.md)
- [OpenAIWebSearchUserLocation](interfaces/openaiwebsearchuserlocation.md)

## Type Aliases

- [OpenAIAPIMode](type-aliases/openaiapimode.md)
- [OpenAIBuiltInTool](type-aliases/openaibuiltintool.md)
- [OpenAIResponsesToolUnion](type-aliases/openairesponsestoolunion.md)

## Variables

- [openai](variables/openai.md)
- [tools](variables/tools.md)

## Functions

- [codeInterpreterTool](functions/codeinterpretertool.md)
- [computerTool](functions/computertool.md)
- [fileSearchTool](functions/filesearchtool.md)
- [imageGenerationTool](functions/imagegenerationtool.md)
- [mcpTool](functions/mcptool.md)
- [webSearchTool](functions/websearchtool.md)
