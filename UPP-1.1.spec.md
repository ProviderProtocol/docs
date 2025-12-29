# UPP-1.1: Unified Provider Protocol Specification

**Version:** 1.1.0-draft
**Status:** Draft
**Authors:** UPP Working Group

---

## Abstract

UPP (Unified Provider Protocol) is a first-generation standard for simplifying AI inference and enabling multi-provider interoperability. The protocol defines uniform interfaces for interacting with Large Language Models, Embedding Models, Image Generation Models, and other AI inference APIs through modality-specific, consistent developer experiences.

UPP provides separate entry points for each modality—`useLLM()`, `useEmbedding()`, `useImage()`—while sharing common provider infrastructure, configuration patterns, and design principles.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Design Principles](#2-design-principles)
3. [Core Concepts](#3-core-concepts)
4. [Provider Protocol](#4-provider-protocol)
5. [useLLM Interface](#5-usellm-interface)
6. [Messages](#6-messages)
7. [Turns](#7-turns)
8. [Threads](#8-threads)
9. [Streaming](#9-streaming)
10. [Tools](#10-tools)
11. [Structured Outputs](#11-structured-outputs)
12. [useEmbedding Interface](#12-useembedding-interface)
13. [useImage Interface](#13-useimage-interface)
14. [Type Definitions](#14-type-definitions)
15. [Provider Implementation Guide](#15-provider-implementation-guide)
16. [Conformance](#16-conformance)

---

## 1. Introduction

### 1.1 Purpose

Modern AI development requires interacting with multiple providers (Anthropic, OpenAI, Google, Stability, Voyage, etc.), each with distinct APIs, authentication schemes, and response formats. UPP-1.1 establishes a standard protocol that:

- Provides modality-specific interfaces (`useLLM`, `useEmbedding`, `useImage`)
- Enables provider switching without application code changes
- Maintains provider-native configuration to avoid abstraction leakage
- Shares common infrastructure (auth, retry, HTTP) across modalities
- Supports text, image, audio, video, embeddings, and future modalities

### 1.2 Scope

This specification covers:

- The `useLLM` function interface (chat/completion)
- The `useEmbedding` function interface (vector embeddings)
- The `useImage` function interface (image generation)
- Provider adapter requirements for each modality
- Shared infrastructure (ProviderConfig, KeyStrategy, error handling)
- Message, Turn, and Thread data structures (LLM-specific)

### 1.3 Terminology

| Term | Definition |
|------|------------|
| **Provider** | A vendor-specific adapter exposing one or more modality interfaces |
| **Modality** | A distinct AI capability: LLM, embedding, image generation, etc. |
| **BoundModel** | A model instance bound to a specific provider and model ID |
| **Message** | A single message in an LLM conversation |
| **Turn** | The complete result of one LLM inference call |
| **Thread** | A utility class for managing LLM conversation history |
| **UPP** | Unified Provider Protocol |

### 1.4 Modality Overview

| Entry Point | Purpose | Example Models |
|-------------|---------|----------------|
| `useLLM()` | Chat, completion, reasoning | Claude, GPT-4, Gemini |
| `useEmbedding()` | Vector embeddings | text-embedding-3, Voyage, Cohere |
| `useImage()` | Image generation/editing | DALL-E, Stable Diffusion, Imagen |

Future modalities may include:
- `useAudio()` - Speech-to-text, text-to-speech
- `useVideo()` - Video generation
- `useCode()` - Specialized code models

---

## 2. Design Principles

### 2.1 Provider Transparency

Configuration passes through to providers unchanged. UPP does not impose its own defaults or transform model parameters. When no config is supplied, provider defaults apply.

**Rationale:** Developers should reference provider documentation directly. UPP avoids "morphic magic" that obscures what's actually sent to the API.

### 2.2 Explicit Over Magic

UPP favors explicit APIs over implicit behavior:

- Separate entry points per modality—no modal switches or runtime detection
- `generate()` for complete responses, `stream()` for streaming—no await/non-await magic
- Users manage their own conversation history—no hidden state mutation
- System prompts declared at configuration, not buried in message arrays

### 2.3 Modality-Specific Interfaces

Each modality gets a purpose-built interface optimized for its use case:

- **LLM**: Conversational with messages, turns, streaming, tools
- **Embedding**: Batch-oriented, returns vectors, no conversation
- **Image**: Prompt-based, returns images, supports editing/variation

Forcing all modalities through a single interface creates awkward abstractions.

### 2.4 Shared Infrastructure

While interfaces differ, providers share common infrastructure:

- `ProviderConfig` (apiKey, baseUrl, timeout, retry)
- `KeyStrategy` (RoundRobin, Weighted, Dynamic)
- Error handling (`UPPError`, `ErrorCode`)
- HTTP utilities (SSE parsing, request building)

### 2.5 Progressive Complexity

Simple use cases require minimal code. Advanced features (tools, custom strategies, provider config) are opt-in.

### 2.6 HTTP-First Provider Implementation

UPP **strongly recommends** that providers wrap vendor REST APIs directly using native HTTP primitives (e.g., `fetch`) rather than depending on first-party vendor SDKs.

**Rationale:**

- **Minimal dependencies:** Avoid pulling in large SDK packages
- **Full control:** Direct HTTP access for request/response transformation
- **Consistency:** All providers follow the same HTTP-based pattern
- **Transparency:** Developers can inspect exactly what's sent over the wire
- **Bundle size:** Critical for edge deployments and browser environments

---

## 3. Core Concepts

### 3.1 The Unified Provider Model

```
┌─────────────────────────────────────────────────────────────────┐
│                     Application Code                             │
└─────────────────────────────────────────────────────────────────┘
           │                    │                    │
           ▼                    ▼                    ▼
    ┌─────────────┐     ┌──────────────┐     ┌─────────────┐
    │  useLLM()   │     │ useEmbedding │     │  useImage() │
    │             │     │     ()       │     │             │
    └─────────────┘     └──────────────┘     └─────────────┘
           │                    │                    │
           ▼                    ▼                    ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                  Provider Adapters                           │
    │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
    │  │anthropic │  │  openai  │  │  google  │  │stability │     │
    │  │  (LLM)   │  │(LLM,Emb, │  │(LLM,Emb, │  │ (Image)  │     │
    │  │          │  │  Image)  │  │  Image)  │  │          │     │
    │  └──────────┘  └──────────┘  └──────────┘  └──────────┘     │
    └─────────────────────────────────────────────────────────────┘
                              │
                              ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                    Vendor APIs                               │
    │         (Anthropic, OpenAI, Google, Stability, etc.)        │
    └─────────────────────────────────────────────────────────────┘
```

### 3.2 Provider Structure

A provider module exports factory functions for each modality it supports:

```ts
// useAI/openai
export { openai } from './llm';           // useLLM
export { openaiEmbed } from './embed';    // useEmbedding
export { openaiImage } from './image';    // useImage

// useAI/anthropic
export { anthropic } from './llm';        // useLLM only

// useAI/stability
export { stability } from './image';      // useImage only

// useAI/voyage
export { voyage } from './embed';         // useEmbedding only
```

### 3.3 Separation of Concerns

UPP separates configuration into distinct layers:

| Layer | Purpose | Shared Across Modalities |
|-------|---------|--------------------------|
| **Provider Config** | Infrastructure/connection | Yes |
| **Model Params** | Model behavior parameters | No (modality-specific) |
| **Modality Options** | Interface-specific settings | No |

```ts
// Provider config is shared
const config: ProviderConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 30000,
  retry: { maxAttempts: 3 },
};

// Each modality has its own params
const llm = useLLM({
  model: openai('gpt-4o'),
  config,
  params: { temperature: 0.7, max_tokens: 4096 },  // LLM params
});

const embedder = useEmbedding({
  model: openaiEmbed('text-embedding-3-large'),
  config,
  params: { dimensions: 1536 },  // Embedding params
});

const imageGen = useImage({
  model: openaiImage('dall-e-3'),
  config,
  params: { size: '1024x1024', quality: 'hd' },  // Image params
});
```

---

## 4. Provider Protocol

### 4.1 Shared Provider Infrastructure

All providers share common configuration and error handling:

```ts
interface ProviderConfig {
  /**
   * API key - string, async function, or key strategy
   */
  apiKey?: string | (() => string | Promise<string>) | KeyStrategy;

  /** Override the base API URL */
  baseUrl?: string;

  /** Request timeout in milliseconds */
  timeout?: number;

  /** Custom fetch implementation */
  fetch?: typeof fetch;

  /** API version override */
  apiVersion?: string;

  /** Retry configuration */
  retry?: RetryConfig;
}

interface RetryConfig {
  maxAttempts?: number;
  backoff?: 'exponential' | 'linear' | 'none';
  initialDelay?: number;
  retryOn?: ErrorCode[];
}
```

### 4.2 Key Strategies

```ts
interface KeyStrategy {
  getKey(): string | Promise<string>;
}

class RoundRobinKeys implements KeyStrategy {
  constructor(keys: string[]);
  getKey(): string;
}

class WeightedKeys implements KeyStrategy {
  constructor(keys: Array<{ key: string; weight: number }>);
  getKey(): string;
}

class DynamicKey implements KeyStrategy {
  constructor(selector: () => string | Promise<string>);
  getKey(): Promise<string>;
}
```

### 4.3 Error Handling

All modalities normalize errors to `UPPError`:

```ts
class UPPError extends Error {
  readonly code: ErrorCode;
  readonly provider: string;
  readonly modality: Modality;
  readonly statusCode?: number;
  readonly cause?: Error;
}

type ErrorCode =
  | 'AUTHENTICATION_FAILED'
  | 'RATE_LIMITED'
  | 'CONTEXT_LENGTH_EXCEEDED'
  | 'MODEL_NOT_FOUND'
  | 'INVALID_REQUEST'
  | 'INVALID_RESPONSE'
  | 'CONTENT_FILTERED'      // Content policy violation
  | 'QUOTA_EXCEEDED'        // Usage limits
  | 'PROVIDER_ERROR'
  | 'NETWORK_ERROR'
  | 'TIMEOUT'
  | 'CANCELLED';
```

### 4.4 Modality-Specific Providers

Each modality defines its own provider interface:

```ts
// LLM Provider
interface LLMProvider<TParams = unknown> {
  readonly name: string;
  readonly version: string;
  (modelId: string): BoundLLMModel<TParams>;
}

// Embedding Provider
interface EmbeddingProvider<TParams = unknown> {
  readonly name: string;
  readonly version: string;
  readonly supportedInputs: ('text' | 'image')[];
  (modelId: string): BoundEmbeddingModel<TParams>;
}

// Image Provider
interface ImageProvider<TParams = unknown> {
  readonly name: string;
  readonly version: string;
  readonly capabilities: ImageCapabilities;
  (modelId: string): BoundImageModel<TParams>;
}
```

---

## 5. useLLM Interface

### 5.1 Function Signature

```ts
function useLLM<TParams = unknown>(options: UseLLMOptions<TParams>): LLMInstance<TParams>;
```

### 5.2 Options

```ts
interface UseLLMOptions<TParams = unknown> {
  /** A bound LLM model from a provider */
  model: BoundLLMModel<TParams>;

  /** Provider infrastructure configuration */
  config: ProviderConfig;

  /** Model-specific parameters (temperature, max_tokens, etc.) */
  params?: TParams;

  /** System prompt for all inferences */
  system?: string;

  /** Tools available to the model */
  tools?: Tool[];

  /** Tool execution strategy */
  toolStrategy?: ToolUseStrategy;

  /** Structured output schema (JSON Schema) */
  structure?: JSONSchema;
}
```

### 5.3 LLMInstance

```ts
interface LLMInstance<TParams = unknown> {
  /**
   * Execute inference and return complete Turn
   */
  generate(
    historyOrInput: Message[] | Thread | InferenceInput,
    ...input: InferenceInput[]
  ): Promise<Turn>;

  /**
   * Execute streaming inference
   */
  stream(
    historyOrInput: Message[] | Thread | InferenceInput,
    ...input: InferenceInput[]
  ): StreamResult;

  readonly model: BoundLLMModel<TParams>;
  readonly system: string | undefined;
  readonly params: TParams | undefined;
}

type InferenceInput = string | Message | ContentBlock;
```

### 5.4 BoundLLMModel

```ts
interface BoundLLMModel<TParams = unknown> {
  readonly modelId: string;
  readonly provider: LLMProvider<TParams>;

  /** Execute a single non-streaming inference request */
  complete(request: LLMRequest<TParams>): Promise<LLMResponse>;

  /** Execute a single streaming inference request */
  stream(request: LLMRequest<TParams>): LLMStreamResult;
}

interface LLMRequest<TParams = unknown> {
  messages: Message[];
  system?: string;
  params?: TParams;
  tools?: Tool[];
  structure?: JSONSchema;
  config: ProviderConfig;
  signal?: AbortSignal;
}

interface LLMResponse {
  message: AssistantMessage;
  usage: TokenUsage;
  stopReason: string;
}
```

### 5.5 Basic Usage

```ts
import { useLLM } from 'upp';
import { anthropic } from 'upp/anthropic';

const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: {
    apiKey: process.env.ANTHROPIC_API_KEY,
  },
  system: 'You are a helpful assistant.',
});

// Simple one-shot inference
const turn = await claude.generate('What is the capital of France?');
console.log(turn.response.text); // "The capital of France is Paris."
```

### 5.6 Conversation Flow

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
});

const history: Message[] = [];

const turn1 = await claude.generate(history, 'My name is Alice.');
history.push(...turn1.messages);

const turn2 = await claude.generate(history, 'What is my name?');
history.push(...turn2.messages);

console.log(turn2.response.text); // "Your name is Alice."
```

### 5.7 Tool Execution Loop

useLLM core manages the tool execution loop. Providers only handle single request/response cycles.

```
┌─────────────────────────────────────────────────────────────┐
│  useLLM.generate(history, input)                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  provider.complete()     │◄────────────────┐
              └─────────────────────────┘                  │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  response.hasToolCalls? │──── No ───► Return Turn
              └─────────────────────────┘                  │
                            │                              │
                           Yes                             │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  Execute tools          │                  │
              │  Append results         │──────────────────┘
              └─────────────────────────┘
```

---

## 6. Messages

### 6.1 Message Hierarchy

```ts
abstract class Message {
  readonly id: string;
  readonly timestamp: Date;
  readonly metadata?: MessageMetadata;
  abstract readonly type: MessageType;
  readonly text: string;
}

type MessageType = 'user' | 'assistant' | 'tool_result';

interface MessageMetadata {
  [provider: string]: Record<string, unknown> | undefined;
}
```

### 6.2 Message Subclasses

```ts
class UserMessage extends Message {
  readonly type = 'user';
  readonly content: UserContent[];
  constructor(content: string | UserContent[], options?: MessageOptions);
}

class AssistantMessage extends Message {
  readonly type = 'assistant';
  readonly content: AssistantContent[];
  readonly toolCalls?: ToolCall[];
  constructor(content: string | AssistantContent[], toolCalls?: ToolCall[], options?: MessageOptions);
  get hasToolCalls(): boolean;
}

class ToolResultMessage extends Message {
  readonly type = 'tool_result';
  readonly results: ToolResult[];
  constructor(results: ToolResult[], options?: MessageOptions);
}
```

### 6.3 Content Blocks

```ts
type ContentBlock = TextBlock | ImageBlock | AudioBlock | VideoBlock | BinaryBlock;

interface TextBlock {
  type: 'text';
  text: string;
}

interface ImageBlock {
  type: 'image';
  source: ImageSource;
  mimeType: string;
  width?: number;
  height?: number;
}

type ImageSource =
  | { type: 'base64'; data: string }
  | { type: 'url'; url: string }
  | { type: 'bytes'; data: Uint8Array };
```

### 6.4 Image Class

```ts
class Image {
  readonly source: ImageSource;
  readonly mimeType: string;

  static fromPath(path: string): Promise<Image>;
  static fromUrl(url: string, mimeType?: string): Image;
  static fromBytes(data: Uint8Array, mimeType: string): Image;
  static fromBase64(base64: string, mimeType: string): Image;

  toBase64(): string;
  toDataUrl(): string;
  toBytes(): Uint8Array;
}
```

---

## 7. Turns

### 7.1 Turn Structure

```ts
interface Turn {
  readonly messages: Message[];
  readonly response: AssistantMessage;
  readonly toolExecutions: ToolExecution[];
  readonly usage: TokenUsage;
  readonly cycles: number;
  readonly data?: unknown;
}

interface ToolExecution {
  toolName: string;
  toolCallId: string;
  arguments: Record<string, unknown>;
  result: unknown;
  isError: boolean;
  duration: number;
  approved?: boolean;
}

interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  cycles?: Array<{ inputTokens: number; outputTokens: number }>;
}
```

---

## 8. Threads

### 8.1 Thread Class

```ts
class Thread {
  constructor(messages?: Message[]);

  readonly id: string;
  readonly messages: readonly Message[];
  readonly length: number;

  append(turn: Turn): this;
  push(...messages: Message[]): this;
  user(content: string | ContentBlock[]): this;
  assistant(content: string | ContentBlock[]): this;
  filter(role: 'user' | 'assistant'): Message[];
  tail(count: number): Message[];
  slice(start?: number, end?: number): Thread;
  clear(): this;
  toMessages(): Message[];
  toJSON(): ThreadJSON;
  static fromJSON(json: ThreadJSON): Thread;
  [Symbol.iterator](): Iterator<Message>;
}
```

---

## 9. Streaming

### 9.1 StreamResult

```ts
interface StreamResult extends AsyncIterable<MessageFragment> {
  readonly turn: Promise<Turn>;
  abort(): void;
}

interface MessageFragment {
  type: FragmentType;
  index: number;
  delta: FragmentDelta;
}

type FragmentType =
  | 'text_delta'
  | 'reasoning_delta'
  | 'tool_call_delta'
  | 'message_start'
  | 'message_stop'
  | 'content_block_start'
  | 'content_block_stop';
```

### 9.2 Streaming Usage

```ts
const stream = claude.stream(history, 'Write a haiku.');

for await (const fragment of stream) {
  if (fragment.type === 'text_delta') {
    process.stdout.write(fragment.delta.text ?? '');
  }
}

const turn = await stream.turn;
history.push(...turn.messages);
```

---

## 10. Tools

### 10.1 Tool Definition

```ts
interface Tool<TParams = unknown, TResult = unknown> {
  name: string;
  description: string;
  parameters: JSONSchema;
  run(params: TParams): TResult | Promise<TResult>;
  approval?(params: TParams): boolean | Promise<boolean>;
}
```

### 10.2 ToolUseStrategy

```ts
interface ToolUseStrategy {
  maxIterations?: number;
  onToolCall?(tool: Tool, params: unknown): void | Promise<void>;
  onBeforeCall?(tool: Tool, params: unknown): boolean | Promise<boolean>;
  onAfterCall?(tool: Tool, params: unknown, result: unknown): void | Promise<void>;
  onError?(tool: Tool, params: unknown, error: Error): void | Promise<void>;
  onMaxIterations?(iterations: number): void | Promise<void>;
}
```

---

## 11. Structured Outputs

### 11.1 Overview

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  structure: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer' },
    },
    required: ['name', 'age'],
  },
});

const turn = await claude.generate('John Doe is 30 years old');
console.log(turn.data); // { name: 'John Doe', age: 30 }
```

---

## 12. useEmbedding Interface

### 12.1 Function Signature

```ts
function useEmbedding<TParams = unknown>(
  options: UseEmbeddingOptions<TParams>
): EmbeddingInstance<TParams>;
```

### 12.2 Options

```ts
interface UseEmbeddingOptions<TParams = unknown> {
  /** A bound embedding model from a provider */
  model: BoundEmbeddingModel<TParams>;

  /** Provider infrastructure configuration */
  config: ProviderConfig;

  /** Model-specific parameters (dimensions, encoding format, etc.) */
  params?: TParams;
}
```

### 12.3 EmbeddingInstance

```ts
interface EmbeddingInstance<TParams = unknown> {
  /**
   * Embed a single input
   */
  embed(input: EmbeddingInput): Promise<Embedding>;

  /**
   * Embed multiple inputs in a single request
   */
  embedBatch(inputs: EmbeddingInput[]): Promise<EmbeddingBatch>;

  /**
   * Embed with automatic batching for large input sets
   * Handles rate limiting and chunking automatically
   */
  embedMany(
    inputs: EmbeddingInput[],
    options?: EmbedManyOptions
  ): AsyncIterable<EmbeddingProgress>;

  readonly model: BoundEmbeddingModel<TParams>;
  readonly params: TParams | undefined;
}

type EmbeddingInput = string | TextBlock | ImageBlock;

interface EmbedManyOptions {
  /** Maximum inputs per batch (default: provider limit) */
  batchSize?: number;
  /** Concurrency limit (default: 1) */
  concurrency?: number;
  /** Abort signal */
  signal?: AbortSignal;
}
```

### 12.4 Embedding Results

```ts
interface Embedding {
  /** The embedding vector */
  vector: number[];

  /** Vector dimensionality */
  dimensions: number;

  /** The input that was embedded (for reference) */
  input: EmbeddingInput;

  /** Token count (if available) */
  tokens?: number;
}

interface EmbeddingBatch {
  /** Embeddings in same order as inputs */
  embeddings: Embedding[];

  /** Aggregate usage */
  usage: EmbeddingUsage;
}

interface EmbeddingUsage {
  totalTokens: number;
}

interface EmbeddingProgress {
  /** Completed embeddings so far */
  embeddings: Embedding[];

  /** Progress information */
  progress: {
    completed: number;
    total: number;
    percent: number;
  };

  /** Set when all complete */
  done: boolean;
}
```

### 12.5 BoundEmbeddingModel

```ts
interface BoundEmbeddingModel<TParams = unknown> {
  readonly modelId: string;
  readonly provider: EmbeddingProvider<TParams>;

  /** Maximum inputs per batch */
  readonly maxBatchSize: number;

  /** Maximum input length (tokens or characters) */
  readonly maxInputLength: number;

  /** Output dimensions (may be configurable) */
  readonly dimensions: number;

  embed(request: EmbeddingRequest<TParams>): Promise<EmbeddingResponse>;
}

interface EmbeddingRequest<TParams = unknown> {
  inputs: EmbeddingInput[];
  params?: TParams;
  config: ProviderConfig;
  signal?: AbortSignal;
}

interface EmbeddingResponse {
  embeddings: Array<{ vector: number[]; tokens?: number }>;
  usage: EmbeddingUsage;
}
```

### 12.6 Basic Usage

```ts
import { useEmbedding } from 'upp';
import { openaiEmbed } from 'upp/openai';

const embedder = useEmbedding({
  model: openaiEmbed('text-embedding-3-large'),
  config: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  params: {
    dimensions: 1536,
  },
});

// Single embedding
const result = await embedder.embed('What is the capital of France?');
console.log(result.vector.length); // 1536
console.log(result.dimensions);    // 1536

// Batch embedding
const batch = await embedder.embedBatch([
  'First document to embed',
  'Second document to embed',
  'Third document to embed',
]);

console.log(batch.embeddings.length); // 3
console.log(batch.usage.totalTokens); // Total tokens used

// Large-scale embedding with progress
const documents = await loadDocuments(); // 10,000 documents

for await (const progress of embedder.embedMany(documents, { batchSize: 100 })) {
  console.log(`Progress: ${progress.progress.percent}%`);

  // Process embeddings as they complete
  await storeInVectorDB(progress.embeddings);

  if (progress.done) {
    console.log('All embeddings complete');
  }
}
```

### 12.7 Provider-Specific Parameters

```ts
// OpenAI
interface OpenAIEmbedParams {
  dimensions?: number;          // Output dimensions (for v3 models)
  encoding_format?: 'float' | 'base64';
}

// Voyage
interface VoyageEmbedParams {
  input_type?: 'query' | 'document';
  truncation?: boolean;
}

// Cohere
interface CohereEmbedParams {
  input_type: 'search_document' | 'search_query' | 'classification' | 'clustering';
  truncate?: 'NONE' | 'START' | 'END';
  embedding_types?: ('float' | 'int8' | 'uint8' | 'binary' | 'ubinary')[];
}
```

### 12.8 Similarity Utilities

UPP provides optional utilities for working with embeddings:

```ts
import { cosineSimilarity, euclideanDistance, dotProduct } from 'upp/similarity';

const embedding1 = await embedder.embed('Hello world');
const embedding2 = await embedder.embed('Hi there');

const similarity = cosineSimilarity(embedding1.vector, embedding2.vector);
console.log(similarity); // 0.92
```

---

## 13. useImage Interface

### 13.1 Function Signature

```ts
function useImage<TParams = unknown>(
  options: UseImageOptions<TParams>
): ImageInstance<TParams>;
```

### 13.2 Options

```ts
interface UseImageOptions<TParams = unknown> {
  /** A bound image generation model from a provider */
  model: BoundImageModel<TParams>;

  /** Provider infrastructure configuration */
  config: ProviderConfig;

  /** Model-specific parameters (size, quality, style, etc.) */
  params?: TParams;
}
```

### 13.3 ImageInstance

```ts
interface ImageInstance<TParams = unknown> {
  /**
   * Generate images from a text prompt
   */
  generate(input: ImagePrompt): Promise<ImageResult>;

  /**
   * Generate with streaming progress (if supported)
   */
  stream?(input: ImagePrompt): ImageStreamResult;

  /**
   * Edit an existing image (inpainting)
   */
  edit?(input: ImageEditInput): Promise<ImageResult>;

  /**
   * Create variations of an existing image
   */
  vary?(input: ImageVaryInput): Promise<ImageResult>;

  /**
   * Upscale an image
   */
  upscale?(input: ImageUpscaleInput): Promise<ImageResult>;

  readonly model: BoundImageModel<TParams>;
  readonly params: TParams | undefined;
  readonly capabilities: ImageCapabilities;
}

type ImagePrompt = string | {
  prompt: string;
  negativePrompt?: string;
  referenceImages?: Image[];
  seed?: number;
};
```

### 13.4 Image Results

```ts
interface ImageResult {
  /** Generated images */
  images: GeneratedImage[];

  /** Generation metadata */
  metadata?: {
    /** Seed used (for reproducibility) */
    seed?: number;
    /** Model's revised prompt (if applicable) */
    revisedPrompt?: string;
  };

  /** Usage/billing information */
  usage?: ImageUsage;
}

interface GeneratedImage {
  /** The generated image */
  image: Image;

  /** Per-image metadata */
  metadata?: {
    seed?: number;
    index?: number;
    finishReason?: 'success' | 'content_filtered';
  };
}

interface ImageUsage {
  /** Number of images generated */
  imagesGenerated: number;
  /** Provider-specific cost units */
  cost?: number;
}
```

### 13.5 Streaming Generation

```ts
interface ImageStreamResult extends AsyncIterable<ImageFragment> {
  readonly result: Promise<ImageResult>;
  abort(): void;
}

type ImageFragment =
  | { type: 'progress'; percent: number; stage?: string }
  | { type: 'preview'; image: Image; index: number }
  | { type: 'complete'; image: GeneratedImage; index: number };
```

### 13.6 Image Editing

```ts
interface ImageEditInput {
  /** Base image to edit */
  image: Image;

  /** Mask indicating edit region (white = edit area) */
  mask?: Image;

  /** Edit instruction */
  prompt: string;

  /** Negative prompt */
  negativePrompt?: string;
}

interface ImageVaryInput {
  /** Source image for variations */
  image: Image;

  /** Number of variations to generate */
  count?: number;

  /** Variation strength (0-1, higher = more different) */
  strength?: number;
}

interface ImageUpscaleInput {
  /** Image to upscale */
  image: Image;

  /** Target scale factor */
  scale?: 2 | 4;
}
```

### 13.7 Capabilities

```ts
interface ImageCapabilities {
  /** Supports text-to-image generation */
  generate: boolean;

  /** Supports streaming progress */
  streaming: boolean;

  /** Supports image editing/inpainting */
  edit: boolean;

  /** Supports variations */
  vary: boolean;

  /** Supports upscaling */
  upscale: boolean;

  /** Supports outpainting */
  outpaint: boolean;

  /** Supports image-to-image */
  imageToImage: boolean;

  /** Maximum images per request */
  maxImages: number;

  /** Supported output sizes */
  supportedSizes: string[];

  /** Supported aspect ratios */
  supportedAspectRatios?: string[];

  /** Supported output formats */
  supportedFormats: ('png' | 'jpeg' | 'webp')[];
}
```

### 13.8 BoundImageModel

```ts
interface BoundImageModel<TParams = unknown> {
  readonly modelId: string;
  readonly provider: ImageProvider<TParams>;
  readonly capabilities: ImageCapabilities;

  generate(request: ImageRequest<TParams>): Promise<ImageResponse>;
  stream?(request: ImageRequest<TParams>): ImageProviderStreamResult;
  edit?(request: ImageEditRequest<TParams>): Promise<ImageResponse>;
  vary?(request: ImageVaryRequest<TParams>): Promise<ImageResponse>;
  upscale?(request: ImageUpscaleRequest<TParams>): Promise<ImageResponse>;
}

interface ImageRequest<TParams = unknown> {
  prompt: string;
  negativePrompt?: string;
  referenceImages?: Image[];
  seed?: number;
  params?: TParams;
  config: ProviderConfig;
  signal?: AbortSignal;
}

interface ImageResponse {
  images: GeneratedImage[];
  metadata?: { seed?: number; revisedPrompt?: string };
  usage?: ImageUsage;
}
```

### 13.9 Basic Usage

```ts
import { useImage } from 'upp';
import { openaiImage } from 'upp/openai';

const dalle = useImage({
  model: openaiImage('dall-e-3'),
  config: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  params: {
    size: '1024x1024',
    quality: 'hd',
  },
});

// Simple generation
const result = await dalle.generate('A sunset over mountains, oil painting style');

console.log(result.images.length);           // 1
console.log(result.metadata?.revisedPrompt); // DALL-E's enhanced prompt

// Save the image
const imageData = result.images[0].image.toBytes();
await Bun.write('sunset.png', imageData);
```

### 13.10 Advanced Usage

```ts
import { useImage } from 'upp';
import { stability } from 'upp/stability';

const sd = useImage({
  model: stability('stable-diffusion-xl-1024-v1-0'),
  config: {
    apiKey: process.env.STABILITY_API_KEY,
  },
  params: {
    steps: 30,
    cfg_scale: 7,
    samples: 4,
  },
});

// Generation with negative prompt
const result = await sd.generate({
  prompt: 'A photorealistic cat sitting on a windowsill',
  negativePrompt: 'cartoon, drawing, illustration, low quality',
  seed: 12345,
});

console.log(result.images.length); // 4

// Image editing (if supported)
if (sd.capabilities.edit) {
  const edited = await sd.edit({
    image: await Image.fromPath('./photo.png'),
    mask: await Image.fromPath('./mask.png'),
    prompt: 'Replace the sky with a starry night',
  });
}

// Streaming generation (if supported)
if (sd.stream) {
  const stream = sd.stream({
    prompt: 'A cyberpunk cityscape at night',
  });

  for await (const fragment of stream) {
    if (fragment.type === 'progress') {
      console.log(`${fragment.percent}% - ${fragment.stage}`);
    } else if (fragment.type === 'preview') {
      // Show low-res preview
      displayPreview(fragment.image);
    } else if (fragment.type === 'complete') {
      console.log(`Image ${fragment.index} complete`);
    }
  }

  const finalResult = await stream.result;
}
```

### 13.11 Provider-Specific Parameters

```ts
// OpenAI DALL-E
interface OpenAIImageParams {
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
  n?: number;
}

// Stability AI
interface StabilityImageParams {
  steps?: number;
  cfg_scale?: number;
  samples?: number;
  seed?: number;
  style_preset?: 'enhance' | 'anime' | 'photographic' | 'digital-art' | '...';
}

// Google Imagen
interface GoogleImageParams {
  sampleCount?: number;
  aspectRatio?: '1:1' | '3:4' | '4:3' | '9:16' | '16:9';
  negativePrompt?: string;
  personGeneration?: 'allow_adult' | 'dont_allow';
}
```

---

## 14. Type Definitions

### 14.1 Modality Types

```ts
type Modality = 'llm' | 'embedding' | 'image' | 'audio' | 'video';
```

### 14.2 Complete Export List

```ts
// Entry points
export { useLLM, useEmbedding, useImage };

// LLM types
export {
  UseLLMOptions,
  LLMInstance,
  LLMProvider,
  BoundLLMModel,
  LLMRequest,
  LLMResponse,
  InferenceInput,
};

// Message types
export {
  Message,
  UserMessage,
  AssistantMessage,
  ToolResultMessage,
  MessageOptions,
  MessageMetadata,
  MessageType,
  ContentBlock,
  TextBlock,
  ImageBlock,
  AudioBlock,
  VideoBlock,
  BinaryBlock,
  ToolCall,
  ToolResult,
};

// Turn & Thread
export {
  Turn,
  ToolExecution,
  TokenUsage,
  Thread,
  ThreadJSON,
};

// Streaming
export {
  StreamResult,
  MessageFragment,
  FragmentType,
  FragmentDelta,
};

// Tools
export {
  Tool,
  ToolUseStrategy,
  JSONSchema,
  JSONSchemaProperty,
};

// Embedding types
export {
  UseEmbeddingOptions,
  EmbeddingInstance,
  EmbeddingProvider,
  BoundEmbeddingModel,
  EmbeddingInput,
  Embedding,
  EmbeddingBatch,
  EmbeddingUsage,
  EmbeddingProgress,
  EmbedManyOptions,
};

// Image types
export {
  UseImageOptions,
  ImageInstance,
  ImageProvider,
  BoundImageModel,
  ImagePrompt,
  ImageResult,
  GeneratedImage,
  ImageUsage,
  ImageStreamResult,
  ImageFragment,
  ImageEditInput,
  ImageVaryInput,
  ImageUpscaleInput,
  ImageCapabilities,
};

// Shared infrastructure
export {
  ProviderConfig,
  RetryConfig,
  KeyStrategy,
  RoundRobinKeys,
  WeightedKeys,
  DynamicKey,
  UPPError,
  ErrorCode,
  Modality,
};

// Utilities
export {
  Image,
  isUserMessage,
  isAssistantMessage,
  isToolResultMessage,
  cosineSimilarity,
  euclideanDistance,
  dotProduct,
};
```

---

## 15. Provider Implementation Guide

### 15.1 Provider Module Structure

Each provider module exports factory functions for supported modalities:

```ts
// upp/openai/index.ts
export { openai } from './llm';
export { openaiEmbed } from './embed';
export { openaiImage } from './image';

// Re-export param types
export type { OpenAIParams } from './llm';
export type { OpenAIEmbedParams } from './embed';
export type { OpenAIImageParams } from './image';
```

### 15.2 LLM Provider Implementation

```ts
// upp/anthropic/llm.ts
import { LLMProvider, BoundLLMModel, UPPError } from 'upp';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

export interface AnthropicParams {
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  top_k?: number;
}

export const anthropic: LLMProvider<AnthropicParams> = Object.assign(
  function(modelId: string): BoundLLMModel<AnthropicParams> {
    return {
      modelId,
      provider: anthropic,

      async complete(request) {
        const apiKey = await resolveApiKey(request.config);
        const body = transformRequest(request, modelId);

        const response = await doFetch(ANTHROPIC_API_URL, {
          method: 'POST',
          headers: buildHeaders(apiKey),
          body: JSON.stringify(body),
          signal: request.signal,
        }, request.config);

        return transformResponse(await response.json());
      },

      stream(request) {
        // Streaming implementation
      },
    };
  },
  {
    name: 'anthropic',
    version: '1.0.0',
  }
);
```

### 15.3 Embedding Provider Implementation

```ts
// upp/openai/embed.ts
import { EmbeddingProvider, BoundEmbeddingModel } from 'upp';

const OPENAI_EMBED_URL = 'https://api.openai.com/v1/embeddings';

export interface OpenAIEmbedParams {
  dimensions?: number;
  encoding_format?: 'float' | 'base64';
}

export const openaiEmbed: EmbeddingProvider<OpenAIEmbedParams> = Object.assign(
  function(modelId: string): BoundEmbeddingModel<OpenAIEmbedParams> {
    return {
      modelId,
      provider: openaiEmbed,
      maxBatchSize: 2048,
      maxInputLength: 8191,
      dimensions: 1536, // Default, may be overridden by params

      async embed(request) {
        const apiKey = await resolveApiKey(request.config);

        const body = {
          model: modelId,
          input: request.inputs.map(normalizeInput),
          ...request.params,
        };

        const response = await doFetch(OPENAI_EMBED_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(body),
          signal: request.signal,
        }, request.config);

        const data = await response.json();

        return {
          embeddings: data.data.map((item: any) => ({
            vector: item.embedding,
            tokens: data.usage?.prompt_tokens,
          })),
          usage: {
            totalTokens: data.usage?.total_tokens ?? 0,
          },
        };
      },
    };
  },
  {
    name: 'openai-embed',
    version: '1.0.0',
    supportedInputs: ['text'],
  }
);
```

### 15.4 Image Provider Implementation

```ts
// upp/openai/image.ts
import { ImageProvider, BoundImageModel, ImageCapabilities } from 'upp';

const OPENAI_IMAGE_URL = 'https://api.openai.com/v1/images/generations';

export interface OpenAIImageParams {
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
  n?: number;
}

const capabilities: ImageCapabilities = {
  generate: true,
  streaming: false,
  edit: true,
  vary: true,
  upscale: false,
  outpaint: false,
  imageToImage: false,
  maxImages: 1, // DALL-E 3 only supports 1
  supportedSizes: ['1024x1024', '1792x1024', '1024x1792'],
  supportedFormats: ['png'],
};

export const openaiImage: ImageProvider<OpenAIImageParams> = Object.assign(
  function(modelId: string): BoundImageModel<OpenAIImageParams> {
    return {
      modelId,
      provider: openaiImage,
      capabilities,

      async generate(request) {
        const apiKey = await resolveApiKey(request.config);

        const body = {
          model: modelId,
          prompt: request.prompt,
          ...request.params,
        };

        const response = await doFetch(OPENAI_IMAGE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(body),
          signal: request.signal,
        }, request.config);

        const data = await response.json();

        return {
          images: data.data.map((item: any, index: number) => ({
            image: Image.fromBase64(item.b64_json, 'image/png'),
            metadata: { index },
          })),
          metadata: {
            revisedPrompt: data.data[0]?.revised_prompt,
          },
        };
      },

      async edit(request) {
        // Edit implementation
      },

      async vary(request) {
        // Variation implementation
      },
    };
  },
  {
    name: 'openai-image',
    version: '1.0.0',
    capabilities,
  }
);
```

### 15.5 Shared Utilities

```ts
// upp/http.ts

export async function resolveApiKey(config: ProviderConfig): Promise<string> {
  const key = config.apiKey;
  if (!key) throw new UPPError('API key not configured', 'AUTHENTICATION_FAILED', 'unknown', 'llm');
  if (typeof key === 'string') return key;
  if (typeof key === 'function') return key();
  return key.getKey();
}

export async function doFetch(
  url: string,
  init: RequestInit,
  config: ProviderConfig
): Promise<Response> {
  const fetchFn = config.fetch ?? globalThis.fetch;
  const controller = new AbortController();

  const timeoutId = config.timeout
    ? setTimeout(() => controller.abort(), config.timeout)
    : undefined;

  try {
    const response = await fetchFn(url, {
      ...init,
      signal: init.signal ?? controller.signal,
    });

    if (!response.ok) {
      throw await normalizeHttpError(response);
    }

    return response;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

export async function* parseSSEStream(
  body: ReadableStream<Uint8Array>
): AsyncGenerator<unknown> {
  // SSE parsing implementation
}
```

---

## 16. Conformance

### 16.1 LLM Provider Conformance

#### Level 1: Core (Required)
- Text input/output
- `complete()` method returning `LLMResponse`
- System prompt handling
- Error normalization

#### Level 2: Streaming
- `stream()` method
- `MessageFragment` emission
- `StreamResult` with `turn` promise

#### Level 3: Tools
- Tool definition transformation
- Tool call detection
- Tool result handling

#### Level 4: Multimodal
- Image input
- Audio input/output
- Video input/output

### 16.2 Embedding Provider Conformance

#### Level 1: Core (Required)
- Single text embedding
- Batch embedding
- Error normalization

#### Level 2: Extended
- Image embedding (if model supports)
- Dimension configuration
- Custom encoding formats

### 16.3 Image Provider Conformance

#### Level 1: Core (Required)
- Text-to-image generation
- Error normalization
- Capabilities declaration

#### Level 2: Editing
- Inpainting (edit with mask)
- Variations
- Image-to-image

#### Level 3: Advanced
- Streaming progress
- Upscaling
- Outpainting

---

## Appendix A: Migration from UPP-1.0

### Renaming

| UPP-1.0 | UPP-1.1 |
|---------|---------|
| `useAI()` | `useLLM()` |
| `AIInstance` | `LLMInstance` |
| `Provider` | `LLMProvider` |
| `BoundModel` | `BoundLLMModel` |
| `ProviderRequest` | `LLMRequest` |
| `ProviderResponse` | `LLMResponse` |

### Code Migration

```ts
// UPP-1.0
import { useAI } from 'useAI';
import { anthropic } from 'useAI/anthropic';

const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: '...' },
});

// UPP-1.1
import { useLLM } from 'upp';
import { anthropic } from 'upp/anthropic';

const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: '...' },
});
```

The interface remains identical—only the import and function name change.

---

## Appendix B: Complete Usage Example

```ts
import { useLLM, useEmbedding, useImage, Thread, Image } from 'upp';
import { anthropic } from 'upp/anthropic';
import { openaiEmbed, openaiImage } from 'upp/openai';
import { cosineSimilarity } from 'upp/similarity';

// Shared config
const config = {
  timeout: 30000,
  retry: { maxAttempts: 3 },
};

// LLM for conversation
const claude = useLLM({
  model: anthropic('claude-sonnet-4-20250514'),
  config: { ...config, apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
  params: { max_tokens: 4096 },
});

// Embeddings for semantic search
const embedder = useEmbedding({
  model: openaiEmbed('text-embedding-3-large'),
  config: { ...config, apiKey: process.env.OPENAI_API_KEY },
  params: { dimensions: 1536 },
});

// Image generation
const dalle = useImage({
  model: openaiImage('dall-e-3'),
  config: { ...config, apiKey: process.env.OPENAI_API_KEY },
  params: { size: '1024x1024', quality: 'hd' },
});

// --- LLM Usage ---
const thread = new Thread();

const turn1 = await claude.generate(thread, 'My name is Alice.');
thread.append(turn1);

const turn2 = await claude.generate(thread, 'What is my name?');
thread.append(turn2);
console.log(turn2.response.text); // "Your name is Alice."

// --- Embedding Usage ---
const documents = [
  'The quick brown fox jumps over the lazy dog',
  'Machine learning is a subset of artificial intelligence',
  'Paris is the capital of France',
];

const docEmbeddings = await embedder.embedBatch(documents);
const queryEmbedding = await embedder.embed('What is the capital of France?');

// Find most similar document
const similarities = docEmbeddings.embeddings.map((doc, i) => ({
  index: i,
  score: cosineSimilarity(queryEmbedding.vector, doc.vector),
}));

const best = similarities.sort((a, b) => b.score - a.score)[0];
console.log('Best match:', documents[best.index]); // "Paris is the capital of France"

// --- Image Generation Usage ---
const imageResult = await dalle.generate(
  'A cozy coffee shop interior, warm lighting, watercolor style'
);

console.log('Generated', imageResult.images.length, 'images');
console.log('Revised prompt:', imageResult.metadata?.revisedPrompt);

// Save the image
await Bun.write('coffee-shop.png', imageResult.images[0].image.toBytes());

// --- Combined: Generate image from conversation context ---
const artPrompt = await claude.generate(
  'Based on our conversation, suggest an image prompt that captures the essence of our chat.'
);

const contextualImage = await dalle.generate(artPrompt.response.text);
```

---

## Appendix C: Future Modalities

The protocol is designed to accommodate future modalities:

### useAudio (Planned)

```ts
interface AudioInstance {
  /** Speech-to-text */
  transcribe(audio: AudioInput): Promise<TranscriptionResult>;

  /** Text-to-speech */
  speak(text: string): Promise<AudioResult>;

  /** Real-time conversation */
  converse?(): AudioConversation;
}
```

### useVideo (Planned)

```ts
interface VideoInstance {
  /** Text-to-video generation */
  generate(prompt: VideoPrompt): Promise<VideoResult>;

  /** Video-to-video transformation */
  transform?(input: VideoTransformInput): Promise<VideoResult>;
}
```

### useCode (Planned)

```ts
interface CodeInstance {
  /** Code completion */
  complete(context: CodeContext): Promise<CodeCompletion>;

  /** Code explanation */
  explain(code: string): Promise<Explanation>;

  /** Code transformation */
  transform(code: string, instruction: string): Promise<CodeResult>;
}
```

---

## Changelog

### 1.1.0-draft

- **Renamed** from "useAI Provider Protocol" to "Unified Provider Protocol"
- **Renamed** `useAI()` to `useLLM()` for clarity
- **Added** `useEmbedding()` interface for vector embeddings
- **Added** `useImage()` interface for image generation
- **Restructured** providers to export modality-specific factories
- **Added** `ImageCapabilities` for feature detection
- **Added** `embedMany()` for large-scale embedding with progress
- **Added** similarity utilities (`cosineSimilarity`, etc.)
- **Added** image editing, variation, and upscaling interfaces
- **Updated** error handling with `modality` field
- **Added** migration guide from UPP-1.0

### 1.0.0-draft

- Initial draft specification (LLM-focused)
