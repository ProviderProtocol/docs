---
title: "anthropic"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / anthropic

# anthropic

Anthropic provider for UPP (Unified Provider Protocol)

This module exports the Anthropic provider for use with Claude models.
Anthropic's Claude models are known for their strong reasoning capabilities
and safety-focused design.

## Example

```ts
import { anthropic, betas } from '@providerprotocol/ai/anthropic';
import { llm } from '@providerprotocol/ai';

// Create an LLM instance with Claude
const model = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  params: { max_tokens: 1000 }
});

// Generate a response
const turn = await model.generate('Explain quantum computing.');
console.log(turn.response.text);

// With beta features
const modelWithBetas = llm({
  model: anthropic('claude-sonnet-4-20250514', {
    betas: [betas.structuredOutputs],
  }),
  structure: { properties: { answer: { type: 'string' } } },
});
```

## Interfaces

- [AnthropicBashTool](interfaces/anthropicbashtool.md)
- [AnthropicCodeExecutionTool](interfaces/anthropiccodeexecutiontool.md)
- [AnthropicComputerTool](interfaces/anthropiccomputertool.md)
- [AnthropicHeaders](interfaces/anthropicheaders.md)
- [AnthropicLLMParams](interfaces/anthropicllmparams.md)
- [AnthropicModelOptions](interfaces/anthropicmodeloptions.md)
- [AnthropicOutputFormat](interfaces/anthropicoutputformat.md)
- [AnthropicTextEditorTool](interfaces/anthropictexteditortool.md)
- [AnthropicToolSearchTool](interfaces/anthropictoolsearchtool.md)
- [AnthropicUserLocation](interfaces/anthropicuserlocation.md)
- [AnthropicWebSearchTool](interfaces/anthropicwebsearchtool.md)

## Type Aliases

- [AnthropicBuiltInTool](type-aliases/anthropicbuiltintool.md)
- [BetaKey](type-aliases/betakey.md)
- [BetaValue](type-aliases/betavalue.md)

## Variables

- [anthropic](variables/anthropic.md)
- [betas](variables/betas.md)
- [tools](variables/tools.md)
