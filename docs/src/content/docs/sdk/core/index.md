---
title: "@providerprotocol/ai"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / @providerprotocol/ai

# @providerprotocol/ai

## Fileoverview

Unified Provider Protocol (UPP) - A unified interface for AI model inference

UPP provides a consistent API for interacting with multiple AI providers including
Anthropic, OpenAI, Google, Ollama, OpenRouter, and xAI. The library handles provider-specific
transformations, streaming, tool execution, and error handling.

## Examples

```typescript
import { llm, anthropic } from '@providerprotocol/ai';

const model = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  params: { max_tokens: 1000 }
});

const turn = await model.generate('Hello!');
console.log(turn.response.text);
```

```typescript
for await (const event of model.stream('Tell me a story')) {
  if (event.type === 'text') {
    process.stdout.write(event.delta.text);
  }
}
```

## Classes

- [AssistantMessage](classes/AssistantMessage.md)
- [DynamicKey](classes/DynamicKey.md)
- [ExponentialBackoff](classes/ExponentialBackoff.md)
- [Image](classes/Image.md)
- [LinearBackoff](classes/LinearBackoff.md)
- [Message](classes/Message.md)
- [NoRetry](classes/NoRetry.md)
- [RetryAfterStrategy](classes/RetryAfterStrategy.md)
- [RoundRobinKeys](classes/RoundRobinKeys.md)
- [Thread](classes/Thread.md)
- [TokenBucket](classes/TokenBucket.md)
- [ToolResultMessage](classes/ToolResultMessage.md)
- [UPPError](classes/UPPError.md)
- [UserMessage](classes/UserMessage.md)
- [WeightedKeys](classes/WeightedKeys.md)

## Interfaces

- [AudioBlock](interfaces/AudioBlock.md)
- [BinaryBlock](interfaces/BinaryBlock.md)
- [BoundEmbeddingModel](interfaces/BoundEmbeddingModel.md)
- [BoundImageModel](interfaces/BoundImageModel.md)
- [BoundLLMModel](interfaces/BoundLLMModel.md)
- [EmbeddingHandler](interfaces/EmbeddingHandler.md)
- [EventDelta](interfaces/EventDelta.md)
- [ImageBlock](interfaces/ImageBlock.md)
- [ImageHandler](interfaces/ImageHandler.md)
- [JSONSchema](interfaces/JSONSchema.md)
- [JSONSchemaProperty](interfaces/JSONSchemaProperty.md)
- [KeyStrategy](interfaces/KeyStrategy.md)
- [LLMCapabilities](interfaces/LLMCapabilities.md)
- [LLMHandler](interfaces/LLMHandler.md)
- [LLMInstance](interfaces/LLMInstance.md)
- [LLMOptions](interfaces/LLMOptions.md)
- [LLMRequest](interfaces/LLMRequest.md)
- [LLMResponse](interfaces/LLMResponse.md)
- [LLMStreamResult](interfaces/LLMStreamResult.md)
- [MessageJSON](interfaces/MessageJSON.md)
- [MessageMetadata](interfaces/MessageMetadata.md)
- [MessageOptions](interfaces/MessageOptions.md)
- [ModelReference](interfaces/ModelReference.md)
- [Provider](interfaces/Provider.md)
- [ProviderConfig](interfaces/ProviderConfig.md)
- [RetryStrategy](interfaces/RetryStrategy.md)
- [StreamEvent](interfaces/StreamEvent.md)
- [StreamResult](interfaces/StreamResult.md)
- [TextBlock](interfaces/TextBlock.md)
- [ThreadJSON](interfaces/ThreadJSON.md)
- [TokenUsage](interfaces/TokenUsage.md)
- [Tool](interfaces/Tool.md)
- [ToolCall](interfaces/ToolCall.md)
- [ToolExecution](interfaces/ToolExecution.md)
- [ToolResult](interfaces/ToolResult.md)
- [ToolUseStrategy](interfaces/ToolUseStrategy.md)
- [Turn](interfaces/Turn.md)
- [VideoBlock](interfaces/VideoBlock.md)

## Type Aliases

- [AssistantContent](type-aliases/AssistantContent.md)
- [ContentBlock](type-aliases/ContentBlock.md)
- [EmbeddingProvider](type-aliases/EmbeddingProvider.md)
- [ErrorCode](type-aliases/ErrorCode.md)
- [ImageProvider](type-aliases/ImageProvider.md)
- [ImageSource](type-aliases/ImageSource.md)
- [InferenceInput](type-aliases/InferenceInput.md)
- [JSONSchemaPropertyType](type-aliases/JSONSchemaPropertyType.md)
- [LLMProvider](type-aliases/LLMProvider.md)
- [MessageType](type-aliases/MessageType.md)
- [Modality](type-aliases/Modality.md)
- [StreamEventType](type-aliases/StreamEventType.md)
- [UserContent](type-aliases/UserContent.md)

## Variables

- [ai](variables/ai.md)

## Functions

- [aggregateUsage](functions/aggregateUsage.md)
- [contentBlockStart](functions/contentBlockStart.md)
- [contentBlockStop](functions/contentBlockStop.md)
- [createProvider](functions/createProvider.md)
- [createStreamResult](functions/createStreamResult.md)
- [createTurn](functions/createTurn.md)
- [emptyUsage](functions/emptyUsage.md)
- [isAssistantMessage](functions/isAssistantMessage.md)
- [isAudioBlock](functions/isAudioBlock.md)
- [isBinaryBlock](functions/isBinaryBlock.md)
- [isImageBlock](functions/isImageBlock.md)
- [isTextBlock](functions/isTextBlock.md)
- [isToolResultMessage](functions/isToolResultMessage.md)
- [isUserMessage](functions/isUserMessage.md)
- [isVideoBlock](functions/isVideoBlock.md)
- [llm](functions/llm.md)
- [messageStart](functions/messageStart.md)
- [messageStop](functions/messageStop.md)
- [text](functions/text.md)
- [textDelta](functions/textDelta.md)
- [toolCallDelta](functions/toolCallDelta.md)
