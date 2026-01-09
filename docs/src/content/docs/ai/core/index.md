---
title: "@providerprotocol/ai"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / @providerprotocol/ai

# @providerprotocol/ai

## Fileoverview

Unified Provider Protocol (UPP) - A unified interface for AI model inference

UPP provides a consistent API for interacting with multiple AI providers including
Anthropic, OpenAI, Google, Ollama, OpenRouter, and xAI. The library handles provider-specific
transformations, streaming, tool execution, and error handling.

## Classes

- [AssistantMessage](classes/assistantmessage.md)
- [DynamicKey](classes/dynamickey.md)
- [ExponentialBackoff](classes/exponentialbackoff.md)
- [Image](classes/image.md)
- [LinearBackoff](classes/linearbackoff.md)
- [Message](classes/message.md)
- [NoRetry](classes/noretry.md)
- [RetryAfterStrategy](classes/retryafterstrategy.md)
- [RoundRobinKeys](classes/roundrobinkeys.md)
- [Thread](classes/thread.md)
- [TokenBucket](classes/tokenbucket.md)
- [ToolResultMessage](classes/toolresultmessage.md)
- [UPPError](classes/upperror.md)
- [UserMessage](classes/usermessage.md)
- [WeightedKeys](classes/weightedkeys.md)

## Interfaces

- [AfterCallResult](interfaces/aftercallresult.md)
- [AudioBlock](interfaces/audioblock.md)
- [BeforeCallResult](interfaces/beforecallresult.md)
- [BinaryBlock](interfaces/binaryblock.md)
- [BoundEmbeddingModel](interfaces/boundembeddingmodel.md)
- [BoundImageModel](interfaces/boundimagemodel.md)
- [BoundLLMModel](interfaces/boundllmmodel.md)
- [Embedding](interfaces/embedding.md)
- [EmbeddingHandler](interfaces/embeddinghandler.md)
- [EmbeddingInstance](interfaces/embeddinginstance.md)
- [EmbeddingModelInput](interfaces/embeddingmodelinput.md)
- [EmbeddingOptions](interfaces/embeddingoptions.md)
- [EmbeddingProgress](interfaces/embeddingprogress.md)
- [EmbeddingRequest](interfaces/embeddingrequest.md)
- [EmbeddingResponse](interfaces/embeddingresponse.md)
- [EmbeddingResult](interfaces/embeddingresult.md)
- [EmbeddingStream](interfaces/embeddingstream.md)
- [EmbeddingUsage](interfaces/embeddingusage.md)
- [EmbeddingVector](interfaces/embeddingvector.md)
- [EmbedOptions](interfaces/embedoptions.md)
- [EventDelta](interfaces/eventdelta.md)
- [ImageBlock](interfaces/imageblock.md)
- [ImageHandler](interfaces/imagehandler.md)
- [JSONSchema](interfaces/jsonschema.md)
- [JSONSchemaProperty](interfaces/jsonschemaproperty.md)
- [KeyStrategy](interfaces/keystrategy.md)
- [LLMCapabilities](interfaces/llmcapabilities.md)
- [LLMHandler](interfaces/llmhandler.md)
- [LLMInstance](interfaces/llminstance.md)
- [LLMOptions](interfaces/llmoptions.md)
- [LLMRequest](interfaces/llmrequest.md)
- [LLMResponse](interfaces/llmresponse.md)
- [LLMStreamResult](interfaces/llmstreamresult.md)
- [MessageMetadata](interfaces/messagemetadata.md)
- [MessageOptions](interfaces/messageoptions.md)
- [ModelReference](interfaces/modelreference.md)
- [Provider](interfaces/provider.md)
- [ProviderConfig](interfaces/providerconfig.md)
- [RetryStrategy](interfaces/retrystrategy.md)
- [StreamEvent](interfaces/streamevent.md)
- [StreamResult](interfaces/streamresult.md)
- [TextBlock](interfaces/textblock.md)
- [TokenUsage](interfaces/tokenusage.md)
- [Tool](interfaces/tool.md)
- [ToolCall](interfaces/toolcall.md)
- [ToolExecution](interfaces/toolexecution.md)
- [ToolMetadata](interfaces/toolmetadata.md)
- [ToolResult](interfaces/toolresult.md)
- [ToolUseStrategy](interfaces/toolusestrategy.md)
- [Turn](interfaces/turn.md)
- [VideoBlock](interfaces/videoblock.md)

## Type Aliases

- [AssistantContent](type-aliases/assistantcontent.md)
- [ContentBlock](type-aliases/contentblock.md)
- [EmbeddingInput](type-aliases/embeddinginput.md)
- [EmbeddingProvider](type-aliases/embeddingprovider.md)
- [ErrorCode](type-aliases/errorcode.md)
- [ImageProvider](type-aliases/imageprovider.md)
- [ImageSource](type-aliases/imagesource.md)
- [InferenceInput](type-aliases/inferenceinput.md)
- [JSONSchemaPropertyType](type-aliases/jsonschemapropertytype.md)
- [LLMProvider](type-aliases/llmprovider.md)
- [MessageJSON](type-aliases/messagejson.md)
- [MessageType](type-aliases/messagetype.md)
- [Modality](type-aliases/modality.md)
- [StreamEventType](type-aliases/streameventtype.md)
- [ThreadJSON](type-aliases/threadjson.md)
- [UserContent](type-aliases/usercontent.md)

## Variables

- [ai](variables/ai.md)

## Functions

- [aggregateUsage](functions/aggregateusage.md)
- [contentBlockStart](functions/contentblockstart.md)
- [contentBlockStop](functions/contentblockstop.md)
- [createProvider](functions/createprovider.md)
- [createStreamResult](functions/createstreamresult.md)
- [createTurn](functions/createturn.md)
- [embedding](functions/embedding.md)
- [emptyUsage](functions/emptyusage.md)
- [isAssistantMessage](functions/isassistantmessage.md)
- [isAudioBlock](functions/isaudioblock.md)
- [isBinaryBlock](functions/isbinaryblock.md)
- [isImageBlock](functions/isimageblock.md)
- [isTextBlock](functions/istextblock.md)
- [isToolResultMessage](functions/istoolresultmessage.md)
- [isUserMessage](functions/isusermessage.md)
- [isVideoBlock](functions/isvideoblock.md)
- [llm](functions/llm.md)
- [messageStart](functions/messagestart.md)
- [messageStop](functions/messagestop.md)
- [text](functions/text.md)
- [textDelta](functions/textdelta.md)
- [toolCallDelta](functions/toolcalldelta.md)
