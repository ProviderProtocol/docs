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
- Streaming response handling
- Tool definition and execution

### 1.3 Terminology

| Term | Definition |
|------|------------|
| **Provider** | A vendor-specific adapter exposing one or more modality interfaces |
| **Modality** | A distinct AI capability: LLM, embedding, image generation, etc. |
| **BoundModel** | A model instance bound to a specific provider and model ID |
| **Message** | A single message in an LLM conversation (user, assistant, or tool result) |
| **Turn** | The complete result of one LLM inference call, containing all messages produced |
| **MessageFragment** | A partial response during streaming (tokens, partial images, etc.) |
| **Thread** | A utility class for managing LLM conversation history |
| **Embedding** | A vector representation of text or other content |
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

### 2.6 Interoperability Where Possible

UPP enables provider switching for common operations. However, provider-specific features may not translate. The protocol does not guarantee feature parity—it guarantees interface consistency.

### 2.7 HTTP-First Provider Implementation

UPP **strongly recommends** that providers wrap vendor REST APIs directly using native HTTP primitives (e.g., `fetch`) rather than depending on first-party vendor SDKs.

**Rationale:**

- **Minimal dependencies:** Avoid pulling in large SDK packages and their transitive dependencies
- **Full control:** Direct HTTP access allows providers to manage request/response transformation, streaming, retries, and timeouts without SDK abstractions interfering
- **Consistency:** All providers follow the same HTTP-based pattern
- **Transparency:** Developers can inspect exactly what's sent over the wire
- **Bundle size:** Critical for edge deployments and browser environments

Providers MAY use vendor SDKs if there's a compelling reason, but this should be the exception.

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

A provider exports a single factory function that returns a `ModelReference`. The same factory works with any modality—the model ID determines which handler is used:

```ts
import { openai } from '@providerprotocol/use/openai';
import { anthropic } from '@providerprotocol/use/anthropic';
import { stability } from '@providerprotocol/use/stability';

// Same openai() factory works with all modalities
useLLM({ model: openai('gpt-4o') });
useEmbedding({ model: openai('text-embedding-3-small') });
useImage({ model: openai('dall-e-3') });

// Providers that only support one modality still use the same pattern
useLLM({ model: anthropic('claude-sonnet-4-20250514') });
useImage({ model: stability('stable-diffusion-xl-1024-v1-0') });
```

Internally, each provider combines modality handlers:

```ts
// @providerprotocol/use/openai/index.ts
import { createLLMHandler } from './llm';
import { createEmbeddingHandler } from './embed';
import { createImageHandler } from './image';

export const openai = createProvider({
  name: 'openai',
  modalities: {
    llm: createLLMHandler(),
    embedding: createEmbeddingHandler(),
    image: createImageHandler(),
  },
});
```

### 3.3 Data Flow

#### LLM Data Flow

1. Developer calls `useLLM` with a provider-bound model
2. Developer calls `generate()` or `stream()` with message history and new input
3. Provider transforms input to vendor-specific format
4. Provider handles tool execution loop (if tools configured)
5. Provider returns a `Turn` containing all messages from this inference
6. Developer appends turn messages to their history for future calls

#### Embedding Data Flow

1. Developer calls `useEmbedding` with a provider-bound model
2. Developer calls `embed()` or `embedBatch()` with text/content
3. Provider transforms input to vendor-specific format
4. Provider returns `Embedding` or `EmbeddingBatch` with vectors
5. Developer uses vectors for search, clustering, etc.

#### Image Data Flow

1. Developer calls `useImage` with a provider-bound model
2. Developer calls `generate()`, `edit()`, or `vary()` with prompt/images
3. Provider transforms input to vendor-specific format
4. Provider returns `ImageResult` with generated images
5. Developer saves or displays images

### 3.4 Separation of Concerns

UPP separates configuration into distinct layers:

| Layer | Purpose | Shared Across Modalities |
|-------|---------|--------------------------|
| **Provider Config** | Infrastructure/connection settings | Yes |
| **Model Params** | Model behavior parameters | No (modality-specific) |
| **Modality Options** | Interface-specific settings | No |

```ts
import { openai } from '@providerprotocol/use/openai';

// Provider config is shared
const config: ProviderConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 30000,
  retryStrategy: new ExponentialBackoff({ maxAttempts: 3 }),
};

// Same openai() factory, different modalities
const llm = useLLM({
  model: openai('gpt-4o'),
  config,
  params: { temperature: 0.7, max_tokens: 4096 },  // LLM params
  system: 'You are a helpful assistant.',
  tools: [getWeather],
});

const embedder = useEmbedding({
  model: openai('text-embedding-3-large'),
  config,
  params: { dimensions: 1536 },  // Embedding params
});

const imageGen = useImage({
  model: openai('dall-e-3'),
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
   * @example 'sk-xxx'
   * @example () => fetchKeyFromVault()
   * @example new RoundRobinKeys(['sk-1', 'sk-2'])
   */
  apiKey?: string | (() => string | Promise<string>) | KeyStrategy;

  /** Override the base API URL (for proxies, local models) */
  baseUrl?: string;

  /** Request timeout in milliseconds */
  timeout?: number;

  /** Custom fetch implementation (for logging, caching, custom TLS) */
  fetch?: typeof fetch;

  /** API version override */
  apiVersion?: string;

  /** Retry strategy for handling failures and rate limits */
  retryStrategy?: RetryStrategy;
}
```

### 4.2 Key Strategies

UPP provides built-in key strategies for API key management:

```ts
interface KeyStrategy {
  /** Get the next API key to use */
  getKey(): string | Promise<string>;
}

/** Round-robin through a list of API keys */
class RoundRobinKeys implements KeyStrategy {
  constructor(keys: string[]);
  getKey(): string;
}

/** Weighted random selection */
class WeightedKeys implements KeyStrategy {
  constructor(keys: Array<{ key: string; weight: number }>);
  getKey(): string;
}

/** Dynamic key selection based on custom logic */
class DynamicKey implements KeyStrategy {
  constructor(selector: () => string | Promise<string>);
  getKey(): Promise<string>;
}
```

### 4.3 Retry Strategies

UPP provides built-in strategies for handling retries and rate limits:

```ts
interface RetryStrategy {
  /**
   * Called when a request fails with a retryable error.
   * @param error - The error that occurred
   * @param attempt - The attempt number (1 = first retry)
   * @returns Delay in ms before retrying, or null to stop retrying
   */
  onRetry(error: UPPError, attempt: number): number | null | Promise<number | null>;

  /**
   * Called before each request. Can be used to implement pre-emptive rate limiting.
   * Returns delay in ms to wait before making the request, or 0 to proceed immediately.
   */
  beforeRequest?(): number | Promise<number>;

  /**
   * Reset the strategy state (e.g., after a successful request)
   */
  reset?(): void;
}

/** Exponential backoff with jitter (recommended default) */
class ExponentialBackoff implements RetryStrategy {
  constructor(options?: {
    /** Maximum retry attempts (default: 3) */
    maxAttempts?: number;
    /** Initial delay in ms (default: 1000) */
    initialDelay?: number;
    /** Maximum delay in ms (default: 60000) */
    maxDelay?: number;
    /** Jitter factor 0-1 (default: 0.1) */
    jitter?: number;
    /** Error codes to retry on (default: RATE_LIMITED, NETWORK_ERROR, TIMEOUT) */
    retryOn?: ErrorCode[];
  });
  onRetry(error: UPPError, attempt: number): number | null;
  reset(): void;
}

/** Linear backoff with fixed delay */
class LinearBackoff implements RetryStrategy {
  constructor(options?: {
    maxAttempts?: number;
    delay?: number;
    retryOn?: ErrorCode[];
  });
  onRetry(error: UPPError, attempt: number): number | null;
}

/** No retry - fail immediately */
class NoRetry implements RetryStrategy {
  onRetry(): null;
}

/** Token bucket for pre-emptive rate limiting */
class TokenBucket implements RetryStrategy {
  constructor(options: {
    /** Tokens per interval */
    tokens: number;
    /** Interval in ms */
    interval: number;
    /** Maximum burst tokens */
    maxTokens?: number;
    /** Fallback strategy when rate limited */
    fallback?: RetryStrategy;
  });
  onRetry(error: UPPError, attempt: number): number | null;
  beforeRequest(): number;
}

/** Respects Retry-After headers from provider */
class RetryAfterStrategy implements RetryStrategy {
  constructor(options?: {
    maxAttempts?: number;
    /** Fallback delay if no Retry-After header (default: 1000ms) */
    fallbackDelay?: number;
  });
  onRetry(error: UPPError, attempt: number): number | null;
}
```

Usage examples:

```ts
import { ExponentialBackoff, TokenBucket, NoRetry } from '@providerprotocol/use';

// Default exponential backoff
const config: ProviderConfig = {
  apiKey: process.env.API_KEY,
  retryStrategy: new ExponentialBackoff(),
};

// Aggressive retry for batch jobs
const batchConfig: ProviderConfig = {
  apiKey: process.env.API_KEY,
  retryStrategy: new ExponentialBackoff({
    maxAttempts: 10,
    maxDelay: 120000,
  }),
};

// Pre-emptive rate limiting for high-volume apps
const highVolumeConfig: ProviderConfig = {
  apiKey: process.env.API_KEY,
  retryStrategy: new TokenBucket({
    tokens: 100,
    interval: 60000,
    fallback: new ExponentialBackoff(),
  }),
};

// No retry - fail fast
const realtimeConfig: ProviderConfig = {
  apiKey: process.env.API_KEY,
  retryStrategy: new NoRetry(),
};

// Custom strategy
class MyCustomStrategy implements RetryStrategy {
  onRetry(error: UPPError, attempt: number): number | null {
    if (attempt >= 5) return null;
    // Custom logic: check time of day, error type, etc.
    return error.code === 'RATE_LIMITED' ? 5000 : 1000;
  }
}

const customConfig: ProviderConfig = {
  apiKey: process.env.API_KEY,
  retryStrategy: new MyCustomStrategy(),
};
```

### 4.4 Error Handling

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
  | 'INVALID_RESPONSE'      // Response failed validation (e.g., structured output)
  | 'CONTENT_FILTERED'      // Content policy violation
  | 'QUOTA_EXCEEDED'        // Usage limits
  | 'PROVIDER_ERROR'
  | 'NETWORK_ERROR'
  | 'TIMEOUT'
  | 'CANCELLED';

type Modality = 'llm' | 'embedding' | 'image' | 'audio' | 'video';
```

### 4.5 Provider and ModelReference

A provider is a factory function that returns a `ModelReference`. The `use*` functions resolve the appropriate handler based on the modality:

```ts
/**
 * A reference to a model, created by a provider factory.
 * Can be used with any use* function that the provider supports.
 */
interface ModelReference {
  /** The model identifier */
  readonly modelId: string;

  /** The provider that created this reference */
  readonly provider: Provider;
}

/**
 * A provider factory function with metadata and modality handlers.
 */
interface Provider {
  /** Create a model reference */
  (modelId: string): ModelReference;

  /** Provider name */
  readonly name: string;

  /** Provider version */
  readonly version: string;

  /** Supported modalities */
  readonly modalities: {
    llm?: LLMHandler;
    embedding?: EmbeddingHandler;
    image?: ImageHandler;
  };
}

/**
 * Handler for LLM operations (used internally by useLLM)
 */
interface LLMHandler<TParams = unknown> {
  /** Bind model ID to create executable model */
  bind(modelId: string): BoundLLMModel<TParams>;
}

/**
 * Handler for embedding operations (used internally by useEmbedding)
 */
interface EmbeddingHandler<TParams = unknown> {
  /** Supported input types */
  readonly supportedInputs: ('text' | 'image')[];
  /** Bind model ID to create executable model */
  bind(modelId: string): BoundEmbeddingModel<TParams>;
}

/**
 * Handler for image operations (used internally by useImage)
 */
interface ImageHandler<TParams = unknown> {
  /** Bind model ID to create executable model */
  bind(modelId: string): BoundImageModel<TParams>;
}
```

### 4.6 Provider Registration

Providers are imported from their respective modules:

```ts
import { openai } from '@providerprotocol/use/openai';
import { anthropic } from '@providerprotocol/use/anthropic';
import { google } from '@providerprotocol/use/google';
import { stability } from '@providerprotocol/use/stability';
import { voyage } from '@providerprotocol/use/voyage';

// All use the same pattern - single factory per provider
useLLM({ model: openai('gpt-4o') });
useLLM({ model: anthropic('claude-sonnet-4-20250514') });
useLLM({ model: google('gemini-pro') });

useEmbedding({ model: openai('text-embedding-3-small') });
useEmbedding({ model: google('text-embedding-004') });
useEmbedding({ model: voyage('voyage-3') });

useImage({ model: openai('dall-e-3') });
useImage({ model: google('imagen-3.0-generate-001') });
useImage({ model: stability('stable-diffusion-xl-1024-v1-0') });
```

When a `use*` function receives a `ModelReference`, it:
1. Checks if the provider supports that modality
2. Throws `UPPError` with code `INVALID_REQUEST` if not supported
3. Binds the model ID to create the executable model

---

## 5. useLLM Interface

### 5.1 Function Signature

```ts
function useLLM<TParams = unknown>(options: UseLLMOptions<TParams>): LLMInstance<TParams>;
```

### 5.2 Options

```ts
interface UseLLMOptions<TParams = unknown> {
  /** A model reference from a provider factory */
  model: ModelReference;

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
   *
   * @overload No history - single input
   * generate(input: InferenceInput): Promise<Turn>
   *
   * @overload No history - multiple inputs
   * generate(...inputs: InferenceInput[]): Promise<Turn>
   *
   * @overload With history
   * generate(history: Message[] | Thread, ...inputs: InferenceInput[]): Promise<Turn>
   */
  generate(
    historyOrInput: Message[] | Thread | InferenceInput,
    ...input: InferenceInput[]
  ): Promise<Turn>;

  /**
   * Execute streaming inference
   *
   * @overload No history - single input
   * stream(input: InferenceInput): StreamResult
   *
   * @overload No history - multiple inputs
   * stream(...inputs: InferenceInput[]): StreamResult
   *
   * @overload With history
   * stream(history: Message[] | Thread, ...inputs: InferenceInput[]): StreamResult
   */
  stream(
    historyOrInput: Message[] | Thread | InferenceInput,
    ...input: InferenceInput[]
  ): StreamResult;

  /** The bound model */
  readonly model: BoundLLMModel<TParams>;

  /** Current system prompt */
  readonly system: string | undefined;

  /** Current parameters */
  readonly params: TParams | undefined;
}

type InferenceInput = string | Message | ContentBlock;
```

**History Detection:**

useLLM determines if the first argument is history or input:
- `Message[]` or `Thread` → history
- `string`, `Message`, or `ContentBlock` → input (no history)

```ts
// No history - one-shot inference
await claude.generate('What is 2+2?');

// No history - multiple inputs
await claude.generate('Look at this:', image);

// With history
await claude.generate(history, 'Follow-up question');
await claude.generate(thread, 'Continue the conversation');
```

### 5.4 BoundLLMModel

```ts
interface BoundLLMModel<TParams = unknown> {
  /** The model identifier */
  readonly modelId: string;

  /** Reference to the parent provider */
  readonly provider: LLMProvider<TParams>;

  /** Execute a single non-streaming inference request */
  complete(request: LLMRequest<TParams>): Promise<LLMResponse>;

  /** Execute a single streaming inference request */
  stream(request: LLMRequest<TParams>): LLMStreamResult;
}

/** Request passed from useLLM core to providers */
interface LLMRequest<TParams = unknown> {
  /** All messages for this request (history + new input) */
  messages: Message[];

  /** System prompt */
  system?: string;

  /** Model-specific parameters (passed through unchanged) */
  params?: TParams;

  /** Tools available for this request */
  tools?: Tool[];

  /** Structured output schema (if requested) */
  structure?: JSONSchema;

  /** Provider infrastructure config */
  config: ProviderConfig;

  /** Abort signal for cancellation */
  signal?: AbortSignal;
}

/** Raw provider response (single cycle, no tool loop) */
interface LLMResponse {
  message: AssistantMessage;
  usage: TokenUsage;
  stopReason: string;
}

/** Raw provider stream result */
interface LLMStreamResult extends AsyncIterable<MessageFragment> {
  readonly response: Promise<LLMResponse>;
}
```

### 5.5 Basic Usage

```ts
import { useLLM } from '@providerprotocol/use';
import { anthropic } from '@providerprotocol/use/anthropic';

const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: {
    apiKey: process.env.ANTHROPIC_API_KEY,
  },
  system: 'You are a helpful assistant.',
});

// Simple one-shot inference (no history needed)
const turn = await claude.generate('What is the capital of France?');
console.log(turn.response.text); // "The capital of France is Paris."
```

### 5.6 Full Configuration

```ts
import { useLLM, RoundRobinKeys, ExponentialBackoff } from '@providerprotocol/use';
import { anthropic } from '@providerprotocol/use/anthropic';
import type { AnthropicLLMParams } from '@providerprotocol/use/anthropic';

const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: {
    apiKey: new RoundRobinKeys([
      process.env.ANTHROPIC_KEY_1!,
      process.env.ANTHROPIC_KEY_2!,
    ]),
    baseUrl: 'https://my-proxy.example.com',
    timeout: 30000,
    retryStrategy: new ExponentialBackoff({ maxAttempts: 3 }),
  },
  params: {
    max_tokens: 4096,
    temperature: 0.7,
  } as AnthropicParams,
  system: 'You are a friendly AI assistant.',
});
```

### 5.7 Tool Execution Loop

useLLM core manages the tool execution loop. Providers only handle single request/response cycles.

**Loop Flow:**

```
┌─────────────────────────────────────────────────────────────┐
│  useLLM.generate(history, input)                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  1. Convert input to UserMessage                            │
│  2. Append to messages array                                │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  provider.complete()     │◄────────────────┐
              │  (single request)        │                 │
              └─────────────────────────┘                  │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  response.hasToolCalls? │──── No ────┐     │
              │                         │            │     │
              └─────────────────────────┘            │     │
                            │                        │     │
                           Yes                       │     │
                            │                        │     │
                            ▼                        │     │
              ┌─────────────────────────┐            │     │
              │  iterations <           │── No ──►  Error  │
              │  maxIterations?         │                  │
              └─────────────────────────┘                  │
                            │                              │
                           Yes                             │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  Execute tools          │                  │
              │  (parallel if multiple) │                  │
              └─────────────────────────┘                  │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  Append AssistantMsg    │                  │
              │  (with toolCalls)       │                  │
              │  Append ToolResultMsg   │                  │
              │  to messages            │──────────────────┘
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  Build Turn from        │
              │  accumulated messages   │
              └─────────────────────────┘
                            │
                            ▼
                        Return Turn
```

**Implementation Notes:**

1. Each cycle increments `Turn.cycles`
2. Token usage is aggregated across all cycles
3. All messages (user, tool calls, tool results, final response) are collected in `Turn.messages`
4. If `maxIterations` is reached, `onMaxIterations` callback fires and an error is thrown
5. Tool execution order follows provider/model behavior (parallel if model returns multiple calls)

### 5.8 Conversation Flow

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
});

// User manages their own history
const history: Message[] = [];

// First turn
const turn1 = await claude.generate(history, 'My name is Alice.');
history.push(...turn1.messages);

// Second turn (history preserved)
const turn2 = await claude.generate(history, 'What is my name?');
history.push(...turn2.messages);

console.log(turn2.response.text); // "Your name is Alice."
```

### 5.9 Provider Responsibilities

#### 5.9.1 Request Transformation

The provider MUST transform UPP structures to vendor format:

- Convert `Message` subclasses to vendor message format
- Handle system prompt according to vendor requirements (top-level param vs message)
- Convert `Tool` definitions from JSON Schema to vendor tool format
- Convert binary data (images, audio) to vendor-required encoding (e.g., base64)
- Transform structured output schema to vendor format (if supported)

UPP provides standard mutators for common transformations:

```ts
import { toBase64, toDataUrl } from '@providerprotocol/use/mutators';
```

#### 5.9.2 Response Transformation

The provider MUST transform vendor responses to UPP structures:

- Map vendor response to `AssistantMessage` (which may include `toolCalls`)
- Map streaming chunks to `MessageFragment` with fragment metadata
- Preserve vendor-specific metadata in `Message.metadata` under the provider's namespace

**Note:** The provider returns a single `LLMResponse`. useLLM core handles constructing the full `Turn` including tool loops.

#### 5.9.3 Metadata Handling

Providers MUST handle their own metadata namespace in `Message.metadata`:

**Extracting metadata from responses:**
```ts
// Google provider extracting thought_signature
const message = new AssistantMessage(content, toolCalls, {
  metadata: {
    google: {
      thought_signature: vendorResponse.thought_signature,
    },
  },
});
```

**Including metadata in requests:**
```ts
// When sending messages back to the API, providers extract their namespace
function transformToVendor(message: Message) {
  const googleMeta = message.metadata?.google;
  return {
    role: message.type,
    content: transformContent(message.content),
    // Include provider-specific fields
    ...(googleMeta?.thought_signature && {
      thought_signature: googleMeta.thought_signature,
    }),
  };
}
```

Providers SHOULD preserve unknown metadata fields during round-trips to support future API additions.

#### 5.9.4 System Prompt Handling

The provider MUST handle system prompts according to vendor requirements:

| Provider | System Prompt Handling |
|----------|----------------------|
| Anthropic | Top-level `system` parameter |
| OpenAI | Message with `role: 'system'` |
| Google | `systemInstruction` field |

useLLM accepts system prompts at the options level and providers transform accordingly.

#### 5.9.5 Structured Output Handling

If `structure` is provided, the provider MUST:

1. Transform the JSON Schema to vendor-specific format (if different)
2. Enable structured output mode on the API request
3. If the vendor doesn't support native structured outputs, the provider is responsible for parsing and validating the response against the schema

#### 5.9.6 Error Handling

The provider MUST normalize errors to `UPPError`:

```ts
class UPPError extends Error {
  readonly code: ErrorCode;
  readonly provider: string;
  readonly modality: Modality;
  readonly statusCode?: number;
  readonly cause?: Error;

  constructor(
    message: string,
    code: ErrorCode,
    provider: string,
    modality: Modality,
    statusCode?: number,
    cause?: Error
  ) {
    super(message);
    this.code = code;
    this.provider = provider;
    this.modality = modality;
    this.statusCode = statusCode;
    this.cause = cause;
  }
}
```

---

## 6. Messages

### 6.1 Message Hierarchy

Messages are represented as a class hierarchy, allowing type-safe handling and provider-specific transformations:

```ts
/**
 * Base message class - all messages inherit from this
 */
abstract class Message {
  /** Unique message identifier */
  readonly id: string;

  /** Timestamp */
  readonly timestamp: Date;

  /**
   * Provider-specific metadata, namespaced by provider.
   * Providers are responsible for transforming their metadata to/from API format.
   *
   * @example
   * {
   *   google: { thought_signature: 'abc123...' },
   *   openai: { reasoning_encrypted: '...' },
   *   anthropic: { cache_control: { type: 'ephemeral' } }
   * }
   */
  readonly metadata?: MessageMetadata;

  /** Message type discriminator */
  abstract readonly type: MessageType;

  /**
   * Convenience accessor for text content
   * Concatenates all text blocks with '\n\n'
   */
  readonly text: string;
}

/**
 * Provider-namespaced metadata.
 * Each provider defines its own metadata shape.
 */
interface MessageMetadata {
  google?: {
    thought_signature?: string;
    [key: string]: unknown;
  };
  openai?: {
    reasoning_encrypted?: string;
    [key: string]: unknown;
  };
  anthropic?: {
    cache_control?: { type: 'ephemeral' };
    [key: string]: unknown;
  };
  /** Extensible for other providers */
  [provider: string]: Record<string, unknown> | undefined;
}

type MessageType =
  | 'user'
  | 'assistant'
  | 'tool_result';
```

### 6.2 Message Subclasses

```ts
/** Options for message construction */
interface MessageOptions {
  id?: string;
  metadata?: MessageMetadata;
}

/**
 * User input message
 */
class UserMessage extends Message {
  readonly type = 'user';
  readonly content: UserContent[];

  /**
   * @param content - String (converted to TextBlock) or array of content blocks
   */
  constructor(content: string | UserContent[], options?: MessageOptions);
}

type UserContent = TextBlock | ImageBlock | AudioBlock | VideoBlock | BinaryBlock;

/**
 * Assistant response message
 * May contain text, media, and/or tool calls
 */
class AssistantMessage extends Message {
  readonly type = 'assistant';
  readonly content: AssistantContent[];

  /** Tool calls requested by the model (if any) */
  readonly toolCalls?: ToolCall[];

  /**
   * @param content - String (converted to TextBlock) or array of content blocks
   * @param toolCalls - Tool calls requested by the model
   * @param options - Message ID and metadata
   */
  constructor(
    content: string | AssistantContent[],
    toolCalls?: ToolCall[],
    options?: MessageOptions
  );

  /** Check if this message requests tool execution */
  get hasToolCalls(): boolean {
    return this.toolCalls !== undefined && this.toolCalls.length > 0;
  }
}

type AssistantContent = TextBlock | ImageBlock | AudioBlock | VideoBlock;

interface ToolCall {
  toolCallId: string;
  toolName: string;
  arguments: Record<string, unknown>;
}

/**
 * Result of tool execution (sent back to model)
 */
class ToolResultMessage extends Message {
  readonly type = 'tool_result';
  readonly results: ToolResult[];

  /**
   * @param results - Array of tool execution results
   * @param options - Message ID and metadata
   */
  constructor(results: ToolResult[], options?: MessageOptions);
}

interface ToolResult {
  toolCallId: string;
  result: unknown;
  isError?: boolean;
}
```

**Note:** Models can return both text AND tool calls in a single response (e.g., "I'll check the weather for you." + tool call). `AssistantMessage` handles both cases - check `hasToolCalls` to determine if tool execution is needed.

### 6.3 Content Blocks

Content blocks represent discrete pieces of content within messages:

```ts
type ContentBlock =
  | TextBlock
  | ImageBlock
  | AudioBlock
  | VideoBlock
  | BinaryBlock;

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

interface AudioBlock {
  type: 'audio';
  data: Uint8Array;
  mimeType: string;
  duration?: number;
}

interface VideoBlock {
  type: 'video';
  data: Uint8Array;
  mimeType: string;
  duration?: number;
  width?: number;
  height?: number;
}

interface BinaryBlock {
  type: 'binary';
  data: Uint8Array;
  mimeType: string;
  metadata?: Record<string, unknown>;
}
```

### 6.4 Message Construction

```ts
// Text user message
const userMsg = new UserMessage('Hello, world!');

// User message with image
const imageMsg = new UserMessage([
  Image.fromPath('diagram.png'),
  'Please explain this diagram',
]);

// User message with URL-based image
const urlImageMsg = new UserMessage([
  Image.fromUrl('https://example.com/image.png'),
  'What is this?',
]);

// Assistant message (text only)
const assistantMsg = new AssistantMessage('I can help with that!');

// Assistant message with tool calls (typically created by provider)
const assistantWithTools = new AssistantMessage(
  [{ type: 'text', text: "I'll check the weather for you." }],
  [{ toolCallId: 'call_123', toolName: 'getWeather', arguments: { location: 'Tokyo' } }]
);

// Tool result message (created by useLLM core after tool execution)
const toolResultMsg = new ToolResultMessage([
  { toolCallId: 'call_123', result: '72°F, sunny' }
]);
```

### 6.5 Image Class

```ts
class Image {
  readonly source: ImageSource;
  readonly mimeType: string;
  readonly width?: number;
  readonly height?: number;

  private constructor(source: ImageSource, mimeType: string);

  /** Create from file path (reads file into memory) */
  static fromPath(path: string): Promise<Image>;

  /**
   * Create from URL reference.
   * Does NOT fetch the image - just stores the URL.
   * Provider decides how to handle: pass URL directly if supported,
   * or fetch and convert to base64 during request transformation.
   */
  static fromUrl(url: string, mimeType?: string): Image;

  /** Create from raw bytes */
  static fromBytes(data: Uint8Array, mimeType: string): Image;

  /** Create from base64 string */
  static fromBase64(base64: string, mimeType: string): Image;

  /** Check if this image has data loaded (false for URL sources) */
  get hasData(): boolean;

  /**
   * Convert to base64 string.
   * @throws Error if source is URL (no data loaded)
   */
  toBase64(): string;

  /**
   * Convert to data URL.
   * @throws Error if source is URL (no data loaded)
   */
  toDataUrl(): string;

  /**
   * Get raw bytes.
   * @throws Error if source is URL (no data loaded)
   */
  toBytes(): Uint8Array;
}
```

### 6.6 Type Guards

UPP provides type guards for message handling:

```ts
function isUserMessage(msg: Message): msg is UserMessage;
function isAssistantMessage(msg: Message): msg is AssistantMessage;
function isToolResultMessage(msg: Message): msg is ToolResultMessage;

// Usage
for (const msg of turn.messages) {
  if (isAssistantMessage(msg)) {
    console.log('Response:', msg.text);
    if (msg.hasToolCalls) {
      console.log('Tool calls:', msg.toolCalls);
    }
  } else if (isToolResultMessage(msg)) {
    console.log('Tool results:', msg.results);
  }
}
```

---

## 7. Turns

### 7.1 Turn Structure

A `Turn` represents the complete result of one inference call, including all messages produced during tool execution loops.

```ts
interface Turn {
  /**
   * All messages produced during this inference, in chronological order.
   * Types: UserMessage, AssistantMessage (may include toolCalls), ToolResultMessage
   */
  readonly messages: Message[];

  /** The final assistant response (convenience accessor) */
  readonly response: AssistantMessage;

  /** Tool executions that occurred during this turn */
  readonly toolExecutions: ToolExecution[];

  /** Aggregate token usage for the entire turn */
  readonly usage: TokenUsage;

  /** Total number of inference cycles (1 + number of tool rounds) */
  readonly cycles: number;

  /** Structured output data (if structure was provided) */
  readonly data?: unknown;
}

interface ToolExecution {
  /** The tool that was called */
  toolName: string;

  /** Tool call ID */
  toolCallId: string;

  /** Arguments passed to the tool */
  arguments: Record<string, unknown>;

  /** Result returned by the tool */
  result: unknown;

  /** Whether the tool execution resulted in an error */
  isError: boolean;

  /** Execution duration in milliseconds */
  duration: number;

  /** Whether approval was required and granted */
  approved?: boolean;
}

interface TokenUsage {
  /** Input tokens across all cycles */
  inputTokens: number;

  /** Output tokens across all cycles */
  outputTokens: number;

  /** Total tokens */
  totalTokens: number;

  /** Per-cycle breakdown (if available) */
  cycles?: Array<{
    inputTokens: number;
    outputTokens: number;
  }>;
}
```

### 7.2 Turn Usage

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
  tools: [getWeather],
});

const history: Message[] = [];

// This turn might involve tool calls
const turn = await claude.generate(history, 'What is the weather in Tokyo?');

// Turn contains ALL messages from this inference:
// 1. UserMessage: "What is the weather in Tokyo?"
// 2. AssistantMessage: { toolCalls: [{ toolName: 'getWeather', arguments: { location: 'Tokyo' } }] }
// 3. ToolResultMessage: [{ result: '72°F, sunny' }]
// 4. AssistantMessage: "The weather in Tokyo is 72°F and sunny!"

console.log(turn.messages.length); // 4
console.log(turn.response.text);   // "The weather in Tokyo is 72°F and sunny!"
console.log(turn.toolExecutions);  // [{ toolName: 'getWeather', ... }]
console.log(turn.cycles);          // 2 (initial + after tool)

// Append all messages to history for next turn
history.push(...turn.messages);
```

### 7.3 Turn Without Tool Calls

When no tools are called, the turn contains just the user input and assistant response:

```ts
const turn = await claude.generate('Hello!');

console.log(turn.messages.length);      // 2
console.log(turn.messages[0].type);     // 'user'
console.log(turn.messages[1].type);     // 'assistant'
console.log(turn.response.text);        // "Hello! How can I help you today?"
console.log(turn.response.hasToolCalls); // false
console.log(turn.toolExecutions);       // []
console.log(turn.cycles);               // 1
```

---

## 8. Threads

### 8.1 Thread as Utility

`Thread` is an **optional** utility class for managing conversation history. UPP does not manage threads internally—users control their own history.

```ts
class Thread {
  /** Create a new thread, optionally with initial messages */
  constructor(messages?: Message[]);

  /** Unique thread identifier */
  readonly id: string;

  /** All messages in the thread */
  readonly messages: readonly Message[];

  /** Number of messages */
  readonly length: number;

  /** Append messages from a turn */
  append(turn: Turn): this;

  /** Add raw messages */
  push(...messages: Message[]): this;

  /** Add a user message */
  user(content: string | ContentBlock[]): this;

  /** Add an assistant message */
  assistant(content: string | ContentBlock[]): this;

  /** Get messages by role */
  filter(role: 'user' | 'assistant'): Message[];

  /** Get the last N messages */
  tail(count: number): Message[];

  /** Create a new thread with a subset of messages */
  slice(start?: number, end?: number): Thread;

  /** Clear all messages */
  clear(): this;

  /** Convert to plain message array */
  toMessages(): Message[];

  /** Serialize to JSON */
  toJSON(): ThreadJSON;

  /** Deserialize from JSON */
  static fromJSON(json: ThreadJSON): Thread;

  /** Iterate over messages */
  [Symbol.iterator](): Iterator<Message>;
}
```

### 8.2 Thread Usage

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
});

// Using Thread utility
const thread = new Thread();

const turn1 = await claude.generate(thread, 'My name is Bob.');
thread.append(turn1);

const turn2 = await claude.generate(thread, 'What did I just tell you?');
thread.append(turn2);

console.log(turn2.response.text); // "You told me your name is Bob."
console.log(thread.length);       // 4 messages

// Serialize for storage
const json = thread.toJSON();
localStorage.setItem('conversation', JSON.stringify(json));

// Restore later
const restored = Thread.fromJSON(JSON.parse(localStorage.getItem('conversation')!));
```

### 8.3 Using Raw Arrays

Threads are optional—you can use plain arrays:

```ts
const messages: Message[] = [];

const turn = await claude.generate(messages, 'Hello!');
messages.push(...turn.messages);
```

### 8.4 Thread Serialization

```ts
interface ThreadJSON {
  id: string;
  messages: MessageJSON[];
  createdAt: string;
  updatedAt: string;
}

interface MessageJSON {
  id: string;
  type: MessageType;
  content: ContentBlock[];
  toolCalls?: ToolCall[];
  results?: ToolResult[];
  metadata?: MessageMetadata;
  timestamp: string;
}
```

---

## 9. Streaming

### 9.1 StreamResult

Streaming returns a `StreamResult` that is both an async iterable and provides access to the final `Turn`:

```ts
interface StreamResult extends AsyncIterable<MessageFragment> {
  /**
   * Get the complete Turn after streaming finishes.
   * Resolves when the stream completes.
   */
  readonly turn: Promise<Turn>;

  /** Abort the stream */
  abort(): void;
}
```

### 9.2 MessageFragment

During streaming, providers emit `MessageFragment` objects:

```ts
interface MessageFragment {
  /** Fragment type */
  type: FragmentType;

  /** Index of the content block this fragment belongs to */
  index: number;

  /** Partial content (type-specific) */
  delta: FragmentDelta;
}

type FragmentType =
  | 'text_delta'           // Partial text token
  | 'reasoning_delta'      // Reasoning/thinking token
  | 'image_delta'          // Partial image data
  | 'audio_delta'          // Partial audio data
  | 'video_delta'          // Partial video data
  | 'tool_call_delta'      // Partial tool call
  | 'message_start'        // Stream started
  | 'message_stop'         // Stream complete
  | 'content_block_start'  // New content block started
  | 'content_block_stop';  // Content block complete

interface FragmentDelta {
  text?: string;
  data?: Uint8Array;
  toolCallId?: string;
  toolName?: string;
  argumentsJson?: string;
}
```

### 9.3 Streaming Usage

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
});

const history: Message[] = [];

// Stream the response
const stream = claude.stream(history, 'Write a haiku about programming.');

for await (const fragment of stream) {
  if (fragment.type === 'text_delta') {
    process.stdout.write(fragment.delta.text ?? '');
  }
}

// Get the complete turn after streaming
const turn = await stream.turn;
history.push(...turn.messages);
```

### 9.4 Streaming with Tools

When tools are involved, streaming may pause while tools execute:

```ts
const stream = claude.stream(history, 'What is the weather in Paris?');

for await (const fragment of stream) {
  switch (fragment.type) {
    case 'text_delta':
      process.stdout.write(fragment.delta.text ?? '');
      break;
    case 'tool_call_delta':
      // Tool call being streamed
      console.log('[tool]', fragment.delta.toolName);
      break;
    case 'message_stop':
      // A message completed (might be tool call, will continue after tool runs)
      break;
  }
}

const turn = await stream.turn;
console.log('Tool executions:', turn.toolExecutions);
```

### 9.5 Aborting Streams

```ts
const stream = claude.stream(history, 'Write a very long story...');

setTimeout(() => {
  stream.abort(); // Cancel after 5 seconds
}, 5000);

try {
  for await (const fragment of stream) {
    process.stdout.write(fragment.delta.text ?? '');
  }
} catch (error) {
  if (error instanceof UPPError && error.code === 'CANCELLED') {
    console.log('Stream was cancelled');
  }
}
```

### 9.6 Streaming Event Order

A typical streaming sequence:

```
message_start
  content_block_start (index: 0)
    text_delta "Hello"
    text_delta " world"
    text_delta "!"
  content_block_stop (index: 0)
message_stop
```

With tool calls:

```
message_start
  content_block_start (index: 0)
    text_delta "Let me check..."
  content_block_stop (index: 0)
  content_block_start (index: 1)
    tool_call_delta { toolName: "getWeather" }
    tool_call_delta { argumentsJson: '{"loc' }
    tool_call_delta { argumentsJson: 'ation":"Paris"}' }
  content_block_stop (index: 1)
message_stop
[tool execution happens here]
message_start
  content_block_start (index: 0)
    text_delta "The weather is..."
  content_block_stop (index: 0)
message_stop
```

---

## 10. Tools

### 10.1 Tool Definition

Tools use **JSON Schema** for parameter definitions:

```ts
interface Tool<TParams = unknown, TResult = unknown> {
  /** Tool name (must be unique within a useLLM instance) */
  name: string;

  /** Human-readable description for the model */
  description: string;

  /** JSON Schema defining parameters */
  parameters: JSONSchema;

  /** Tool execution function */
  run(params: TParams): TResult | Promise<TResult>;

  /** Optional approval handler for sensitive operations */
  approval?(params: TParams): boolean | Promise<boolean>;
}

type JSONSchema = {
  type: 'object';
  properties: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
};

type JSONSchemaProperty = {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
  description?: string;
  enum?: unknown[];
  items?: JSONSchemaProperty;
  properties?: Record<string, JSONSchemaProperty>;
  required?: string[];
  default?: unknown;
};
```

### 10.2 Tool Example

```ts
const getWeather: Tool<{ location: string; units?: string }> = {
  name: 'getWeather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'City name or coordinates',
      },
      units: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        default: 'celsius',
      },
    },
    required: ['location'],
  },
  async run({ location, units = 'celsius' }) {
    const weather = await fetchWeather(location, units);
    return `${weather.temp}° ${units}, ${weather.condition}`;
  },
};

const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a weather assistant.',
  tools: [getWeather],
});
```

### 10.3 Tool Approval

For sensitive operations, tools can require approval:

```ts
const deleteFile: Tool<{ path: string }> = {
  name: 'deleteFile',
  description: 'Delete a file from the filesystem',
  parameters: {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'File path to delete' },
    },
    required: ['path'],
  },
  async approval({ path }) {
    // UI prompt, admin check, path validation, etc.
    return await promptUser(`Allow deletion of ${path}?`);
  },
  async run({ path }) {
    await fs.unlink(path);
    return `Deleted ${path}`;
  },
};
```

### 10.4 Tool Execution Flow

By default, useLLM handles tool execution automatically:

1. Model returns an `AssistantMessage` with `toolCalls`
2. If `approval` is defined, it's called first (rejected = error result sent to model)
3. Tool's `run` function is executed with arguments from the model
4. Result (or error) is sent back to the model as `ToolResultMessage`
5. Loop continues until model returns without tool calls OR max iterations reached

**Important:** useLLM does NOT validate tool arguments against the JSON Schema. The schema is provided to the model to guide its output, but validation and sanitization of LLM-provided arguments is the responsibility of the tool implementation. Always treat tool arguments as untrusted input.

### 10.5 ToolUseStrategy

For custom control over tool execution:

```ts
interface ToolUseStrategy {
  /** Maximum tool execution rounds (default: 10) */
  maxIterations?: number;

  /** Called when the model requests a tool call */
  onToolCall?(tool: Tool, params: unknown): void | Promise<void>;

  /** Called before tool execution, return false to skip */
  onBeforeCall?(tool: Tool, params: unknown): boolean | Promise<boolean>;

  /** Called after tool execution */
  onAfterCall?(tool: Tool, params: unknown, result: unknown): void | Promise<void>;

  /** Called on tool execution error */
  onError?(tool: Tool, params: unknown, error: Error): void | Promise<void>;

  /** Called when max iterations reached */
  onMaxIterations?(iterations: number): void | Promise<void>;
}
```

### 10.6 Strategy Example

```ts
const strategy: ToolUseStrategy = {
  maxIterations: 5,

  async onBeforeCall(tool, params) {
    console.log(`Calling ${tool.name} with`, params);
    return true; // Allow execution
  },

  async onAfterCall(tool, params, result) {
    await logToolUsage(tool.name, params, result);
  },

  async onError(tool, params, error) {
    await alertOps(`Tool ${tool.name} failed: ${error.message}`);
  },

  async onMaxIterations(iterations) {
    console.warn(`Tool loop hit max iterations: ${iterations}`);
  },
};

const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  tools: [getWeather, searchWeb],
  toolStrategy: strategy,
});
```

### 10.7 Disabling Automatic Tool Execution

To handle tool calls manually:

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  tools: [getWeather],
  toolStrategy: { maxIterations: 0 }, // Disable auto-execution
});

const turn = await claude.generate([], 'What is the weather?');

if (turn.response.hasToolCalls) {
  // Handle manually
  for (const toolCall of turn.response.toolCalls) {
    console.log('Model wants to call:', toolCall.toolName);
    // Execute yourself, then continue conversation
  }
}
```

### 10.8 Multiple Tool Calls

Models may request multiple tool calls in a single response. useLLM executes them in parallel by default:

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  tools: [getWeather, getTime],
});

// Model might call both tools simultaneously
const turn = await claude.generate(
  'What is the weather and time in Tokyo and Paris?'
);

// turn.toolExecutions might contain 4 executions
// (weather + time for each city)
```

---

## 11. Structured Outputs

### 11.1 Overview

Structured outputs allow you to constrain model responses to a specific JSON schema, ensuring valid, parseable data.

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'Extract structured data from text.',
  structure: {
    type: 'object',
    properties: {
      name: { type: 'string', description: 'Person name' },
      age: { type: 'integer', description: 'Person age' },
      email: { type: 'string', format: 'email' },
    },
    required: ['name', 'age'],
  },
});

const turn = await claude.generate([], 'John Doe is 30 years old, email: john@example.com');

// turn.data contains the structured response
console.log(turn.data);
// { name: 'John Doe', age: 30, email: 'john@example.com' }

// turn.response.text may contain raw JSON or be empty depending on provider
```

### 11.2 Schema Definition

Structured outputs use standard JSON Schema:

```ts
interface JSONSchema {
  type: 'object';
  properties: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
  description?: string;
}

interface JSONSchemaProperty {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'null';
  description?: string;
  enum?: unknown[];
  const?: unknown;
  default?: unknown;

  // String-specific
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: 'email' | 'uri' | 'date' | 'date-time' | 'uuid';

  // Number-specific
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;

  // Array-specific
  items?: JSONSchemaProperty;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;

  // Object-specific
  properties?: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
}
```

### 11.3 Provider Handling

Providers handle structured outputs according to their capabilities:

| Provider | Implementation |
|----------|----------------|
| Anthropic | Uses tool_choice with schema |
| OpenAI | Uses response_format with json_schema |
| Google | Uses responseSchema |

If a provider doesn't natively support structured outputs:
1. The provider MUST still attempt to get JSON output
2. The provider MUST validate the response against the schema
3. Invalid responses should throw a `UPPError` with code `INVALID_RESPONSE`

### 11.4 Complex Schema Example

```ts
const weatherSchema: JSONSchema = {
  type: 'object',
  properties: {
    location: {
      type: 'object',
      properties: {
        city: { type: 'string' },
        country: { type: 'string' },
        coordinates: {
          type: 'object',
          properties: {
            lat: { type: 'number' },
            lon: { type: 'number' },
          },
          required: ['lat', 'lon'],
        },
      },
      required: ['city', 'country'],
    },
    current: {
      type: 'object',
      properties: {
        temperature: { type: 'number' },
        unit: { type: 'string', enum: ['celsius', 'fahrenheit'] },
        conditions: { type: 'string' },
        humidity: { type: 'integer', minimum: 0, maximum: 100 },
      },
      required: ['temperature', 'unit', 'conditions'],
    },
    forecast: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          date: { type: 'string', format: 'date' },
          high: { type: 'number' },
          low: { type: 'number' },
          conditions: { type: 'string' },
        },
        required: ['date', 'high', 'low'],
      },
      maxItems: 7,
    },
  },
  required: ['location', 'current'],
};

const weatherAI = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'Provide weather information in the requested format.',
  structure: weatherSchema,
});

const turn = await weatherAI.generate([], 'Weather in Tokyo for the next 3 days');
const weather = turn.data as WeatherResponse; // Type assertion
console.log(weather.location.city); // 'Tokyo'
console.log(weather.forecast.length); // 3
```

### 11.5 Structured Output with Tools

Structured outputs can be combined with tools. The final response will be structured:

```ts
const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  tools: [getWeatherTool],
  structure: {
    type: 'object',
    properties: {
      summary: { type: 'string' },
      temperature: { type: 'number' },
      recommendation: { type: 'string' },
    },
    required: ['summary', 'temperature', 'recommendation'],
  },
});

// Model may call tools, but final response will be structured
const turn = await claude.generate([], 'Should I bring an umbrella in Tokyo today?');
console.log(turn.data);
// { summary: 'Sunny and warm', temperature: 72, recommendation: 'No umbrella needed' }
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
  /** A model reference from a provider factory */
  model: ModelReference;

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

  /** The bound model */
  readonly model: BoundEmbeddingModel<TParams>;

  /** Current parameters */
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
  /** Total tokens processed */
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
  /** The model identifier */
  readonly modelId: string;

  /** Reference to the parent provider */
  readonly provider: EmbeddingProvider<TParams>;

  /** Maximum inputs per batch */
  readonly maxBatchSize: number;

  /** Maximum input length (tokens or characters) */
  readonly maxInputLength: number;

  /** Output dimensions (may be configurable) */
  readonly dimensions: number;

  /** Execute embedding request */
  embed(request: EmbeddingRequest<TParams>): Promise<EmbeddingResponse>;
}

interface EmbeddingRequest<TParams = unknown> {
  /** Inputs to embed */
  inputs: EmbeddingInput[];

  /** Model-specific parameters */
  params?: TParams;

  /** Provider infrastructure config */
  config: ProviderConfig;

  /** Abort signal */
  signal?: AbortSignal;
}

interface EmbeddingResponse {
  /** Embedding vectors with optional token counts */
  embeddings: Array<{
    vector: number[];
    tokens?: number;
  }>;

  /** Aggregate usage */
  usage: EmbeddingUsage;
}
```

### 12.6 Basic Usage

```ts
import { useEmbedding } from '@providerprotocol/use';
import { openai } from '@providerprotocol/use/openai';

const embedder = useEmbedding({
  model: openai('text-embedding-3-large'),
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
```

### 12.7 Large-Scale Embedding

For embedding large document sets:

```ts
const documents = await loadDocuments(); // 10,000 documents

for await (const progress of embedder.embedMany(documents, {
  batchSize: 100,
  concurrency: 2,
})) {
  console.log(`Progress: ${progress.progress.percent}%`);

  // Process embeddings as they complete
  await storeInVectorDB(progress.embeddings);

  if (progress.done) {
    console.log('All embeddings complete');
  }
}
```

### 12.8 Provider-Specific Parameters

```ts
// OpenAI
interface OpenAIEmbedParams {
  dimensions?: number;                    // Output dimensions (for v3 models)
  encoding_format?: 'float' | 'base64';   // Output format
}

// Voyage
interface VoyageEmbedParams {
  input_type?: 'query' | 'document';      // Optimization hint
  truncation?: boolean;                   // Truncate long inputs
}

// Cohere
interface CohereEmbedParams {
  input_type: 'search_document' | 'search_query' | 'classification' | 'clustering';
  truncate?: 'NONE' | 'START' | 'END';
  embedding_types?: ('float' | 'int8' | 'uint8' | 'binary' | 'ubinary')[];
}

// Google
interface GoogleEmbedParams {
  taskType?: 'RETRIEVAL_QUERY' | 'RETRIEVAL_DOCUMENT' | 'SEMANTIC_SIMILARITY' |
             'CLASSIFICATION' | 'CLUSTERING';
  title?: string;                         // Document title (for RETRIEVAL_DOCUMENT)
}
```

### 12.9 Similarity Utilities

UPP provides optional utilities for working with embeddings:

```ts
import { cosineSimilarity, euclideanDistance, dotProduct } from '@providerprotocol/use/similarity';

const embedding1 = await embedder.embed('Hello world');
const embedding2 = await embedder.embed('Hi there');

const similarity = cosineSimilarity(embedding1.vector, embedding2.vector);
console.log(similarity); // 0.92

const distance = euclideanDistance(embedding1.vector, embedding2.vector);
console.log(distance); // 0.39

const dot = dotProduct(embedding1.vector, embedding2.vector);
console.log(dot); // 0.85
```

### 12.10 Semantic Search Example

```ts
import { useEmbedding } from '@providerprotocol/use';
import { openai } from '@providerprotocol/use/openai';
import { cosineSimilarity } from '@providerprotocol/use/similarity';

const embedder = useEmbedding({
  model: openai('text-embedding-3-small'),
  config: { apiKey: process.env.OPENAI_API_KEY },
});

// Index documents
const documents = [
  'The quick brown fox jumps over the lazy dog',
  'Machine learning is a subset of artificial intelligence',
  'Paris is the capital of France',
  'JavaScript is a programming language',
];

const docEmbeddings = await embedder.embedBatch(documents);

// Search
async function search(query: string, topK: number = 3) {
  const queryEmbedding = await embedder.embed(query);

  const scores = docEmbeddings.embeddings.map((doc, i) => ({
    index: i,
    document: documents[i],
    score: cosineSimilarity(queryEmbedding.vector, doc.vector),
  }));

  return scores.sort((a, b) => b.score - a.score).slice(0, topK);
}

const results = await search('What is the capital of France?');
console.log(results);
// [{ index: 2, document: 'Paris is the capital of France', score: 0.92 }, ...]
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
  /** A model reference from a provider factory */
  model: ModelReference;

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
   * Upscale an image to higher resolution
   */
  upscale?(input: ImageUpscaleInput): Promise<ImageResult>;

  /** The bound model */
  readonly model: BoundImageModel<TParams>;

  /** Current parameters */
  readonly params: TParams | undefined;

  /** Model capabilities */
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
  /** Final result after streaming completes */
  readonly result: Promise<ImageResult>;

  /** Abort the generation */
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
  /** The model identifier */
  readonly modelId: string;

  /** Reference to the parent provider */
  readonly provider: ImageProvider<TParams>;

  /** Model capabilities */
  readonly capabilities: ImageCapabilities;

  /** Generate images */
  generate(request: ImageRequest<TParams>): Promise<ImageResponse>;

  /** Stream generation progress (optional) */
  stream?(request: ImageRequest<TParams>): ImageProviderStreamResult;

  /** Edit an image (optional) */
  edit?(request: ImageEditRequest<TParams>): Promise<ImageResponse>;

  /** Create variations (optional) */
  vary?(request: ImageVaryRequest<TParams>): Promise<ImageResponse>;

  /** Upscale an image (optional) */
  upscale?(request: ImageUpscaleRequest<TParams>): Promise<ImageResponse>;
}

interface ImageRequest<TParams = unknown> {
  /** Generation prompt */
  prompt: string;

  /** Negative prompt */
  negativePrompt?: string;

  /** Reference images */
  referenceImages?: Image[];

  /** Seed for reproducibility */
  seed?: number;

  /** Model-specific parameters */
  params?: TParams;

  /** Provider infrastructure config */
  config: ProviderConfig;

  /** Abort signal */
  signal?: AbortSignal;
}

interface ImageResponse {
  /** Generated images */
  images: GeneratedImage[];

  /** Generation metadata */
  metadata?: {
    seed?: number;
    revisedPrompt?: string;
  };

  /** Usage information */
  usage?: ImageUsage;
}

interface ImageEditRequest<TParams = unknown> {
  /** Base image */
  image: Image;

  /** Edit mask */
  mask?: Image;

  /** Edit prompt */
  prompt: string;

  /** Negative prompt */
  negativePrompt?: string;

  /** Model-specific parameters */
  params?: TParams;

  /** Provider infrastructure config */
  config: ProviderConfig;

  /** Abort signal */
  signal?: AbortSignal;
}

interface ImageVaryRequest<TParams = unknown> {
  /** Source image */
  image: Image;

  /** Number of variations */
  count?: number;

  /** Variation strength */
  strength?: number;

  /** Model-specific parameters */
  params?: TParams;

  /** Provider infrastructure config */
  config: ProviderConfig;

  /** Abort signal */
  signal?: AbortSignal;
}

interface ImageUpscaleRequest<TParams = unknown> {
  /** Image to upscale */
  image: Image;

  /** Scale factor */
  scale?: 2 | 4;

  /** Model-specific parameters */
  params?: TParams;

  /** Provider infrastructure config */
  config: ProviderConfig;

  /** Abort signal */
  signal?: AbortSignal;
}

interface ImageProviderStreamResult extends AsyncIterable<ImageFragment> {
  readonly response: Promise<ImageResponse>;
}
```

### 13.9 Basic Usage

```ts
import { useImage } from '@providerprotocol/use';
import { openai } from '@providerprotocol/use/openai';

const dalle = useImage({
  model: openai('dall-e-3'),
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

### 13.10 Advanced Generation

```ts
import { useImage } from '@providerprotocol/use';
import { stability } from '@providerprotocol/use/stability';

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
  prompt: 'A photorealistic cat sitting on a windowsill, golden hour lighting',
  negativePrompt: 'cartoon, drawing, illustration, low quality, blurry',
  seed: 12345,
});

console.log(result.images.length);      // 4
console.log(result.metadata?.seed);     // 12345

// Save all images
for (let i = 0; i < result.images.length; i++) {
  await Bun.write(`cat-${i}.png`, result.images[i].image.toBytes());
}
```

### 13.11 Image Editing

```ts
// Check if editing is supported
if (dalle.capabilities.edit) {
  const edited = await dalle.edit({
    image: await Image.fromPath('./photo.png'),
    mask: await Image.fromPath('./mask.png'), // White = edit area
    prompt: 'Replace the sky with a starry night',
  });

  await Bun.write('edited.png', edited.images[0].image.toBytes());
}
```

### 13.12 Image Variations

```ts
// Check if variations are supported
if (dalle.capabilities.vary) {
  const variations = await dalle.vary({
    image: await Image.fromPath('./original.png'),
    count: 3,
    strength: 0.7, // 0 = identical, 1 = completely different
  });

  for (let i = 0; i < variations.images.length; i++) {
    await Bun.write(`variation-${i}.png`, variations.images[i].image.toBytes());
  }
}
```

### 13.13 Streaming Progress

```ts
// Check if streaming is supported
if (sd.stream) {
  const stream = sd.stream({
    prompt: 'A cyberpunk cityscape at night, neon lights, rain',
  });

  for await (const fragment of stream) {
    switch (fragment.type) {
      case 'progress':
        console.log(`${fragment.percent}% - ${fragment.stage}`);
        break;
      case 'preview':
        // Display low-res preview
        displayPreview(fragment.image, fragment.index);
        break;
      case 'complete':
        console.log(`Image ${fragment.index} complete`);
        break;
    }
  }

  const finalResult = await stream.result;
  console.log(`Generated ${finalResult.images.length} images`);
}
```

### 13.14 Provider-Specific Parameters

```ts
// OpenAI DALL-E 3
interface OpenAIImageParams {
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
  n?: number; // DALL-E 3 only supports 1
}

// OpenAI DALL-E 2
interface OpenAIImage2Params {
  size?: '256x256' | '512x512' | '1024x1024';
  n?: number; // 1-10
}

// Stability AI
interface StabilityImageParams {
  steps?: number;                  // 10-50
  cfg_scale?: number;              // 0-35
  samples?: number;                // 1-10
  seed?: number;
  sampler?: 'DDIM' | 'DDPM' | 'K_DPMPP_2M' | 'K_DPMPP_2S_ANCESTRAL' |
            'K_DPM_2' | 'K_DPM_2_ANCESTRAL' | 'K_EULER' | 'K_EULER_ANCESTRAL' |
            'K_HEUN' | 'K_LMS';
  style_preset?: 'enhance' | 'anime' | 'photographic' | 'digital-art' |
                 'comic-book' | 'fantasy-art' | 'line-art' | 'analog-film' |
                 'neon-punk' | 'isometric' | 'low-poly' | 'origami' |
                 'modeling-compound' | 'cinematic' | '3d-model' | 'pixel-art' |
                 'tile-texture';
}

// Google Imagen
interface GoogleImageParams {
  sampleCount?: number;            // 1-8
  aspectRatio?: '1:1' | '3:4' | '4:3' | '9:16' | '16:9';
  negativePrompt?: string;
  personGeneration?: 'allow_adult' | 'dont_allow';
  safetySetting?: 'block_some' | 'block_few' | 'block_fewest';
}
```

### 13.15 Capability Detection

```ts
const imageGen = useImage({
  model: openai('dall-e-3'),
  config: { apiKey: process.env.OPENAI_API_KEY },
});

// Check capabilities before using optional features
console.log('Capabilities:', imageGen.capabilities);
// {
//   generate: true,
//   streaming: false,
//   edit: true,
//   vary: true,
//   upscale: false,
//   outpaint: false,
//   imageToImage: false,
//   maxImages: 1,
//   supportedSizes: ['1024x1024', '1792x1024', '1024x1792'],
//   supportedFormats: ['png']
// }

if (imageGen.capabilities.edit && imageGen.edit) {
  // Safe to use edit
}

if (imageGen.capabilities.streaming && imageGen.stream) {
  // Safe to use streaming
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
// --- Entry Points ---
export { useLLM, useEmbedding, useImage };

// --- LLM Types ---
export {
  UseLLMOptions,
  LLMInstance,
  LLMProvider,
  BoundLLMModel,
  LLMRequest,
  LLMResponse,
  LLMStreamResult,
  InferenceInput,
};

// --- Message Types ---
export {
  Message,
  UserMessage,
  AssistantMessage,
  ToolResultMessage,
  MessageOptions,
  MessageMetadata,
  MessageType,
};

// --- Content Block Types ---
export {
  ContentBlock,
  TextBlock,
  ImageBlock,
  AudioBlock,
  VideoBlock,
  BinaryBlock,
  ImageSource,
};

// --- Tool Types ---
export {
  ToolCall,
  ToolResult,
  Tool,
  ToolUseStrategy,
  ToolExecution,
};

// --- Turn & Thread Types ---
export {
  Turn,
  TokenUsage,
  Thread,
  ThreadJSON,
};

// --- Streaming Types ---
export {
  StreamResult,
  MessageFragment,
  FragmentType,
  FragmentDelta,
};

// --- Schema Types ---
export {
  JSONSchema,
  JSONSchemaProperty,
};

// --- Embedding Types ---
export {
  UseEmbeddingOptions,
  EmbeddingInstance,
  EmbeddingProvider,
  BoundEmbeddingModel,
  EmbeddingRequest,
  EmbeddingResponse,
  EmbeddingInput,
  Embedding,
  EmbeddingBatch,
  EmbeddingUsage,
  EmbeddingProgress,
  EmbedManyOptions,
};

// --- Image Types ---
export {
  UseImageOptions,
  ImageInstance,
  ImageProvider,
  BoundImageModel,
  ImageRequest,
  ImageResponse,
  ImagePrompt,
  ImageResult,
  GeneratedImage,
  ImageUsage,
  ImageStreamResult,
  ImageFragment,
  ImageEditInput,
  ImageEditRequest,
  ImageVaryInput,
  ImageVaryRequest,
  ImageUpscaleInput,
  ImageUpscaleRequest,
  ImageCapabilities,
  ImageProviderStreamResult,
};

// --- Shared Infrastructure ---
export {
  ProviderConfig,
  KeyStrategy,
  RoundRobinKeys,
  WeightedKeys,
  DynamicKey,
  RetryStrategy,
  ExponentialBackoff,
  LinearBackoff,
  NoRetry,
  TokenBucket,
  RetryAfterStrategy,
  UPPError,
  ErrorCode,
  Modality,
};

// --- Utilities ---
export {
  Image,
  isUserMessage,
  isAssistantMessage,
  isToolResultMessage,
};

// --- Similarity Utilities ---
export {
  cosineSimilarity,
  euclideanDistance,
  dotProduct,
};
```

### 14.3 Provider Exports

Each provider module exports a single factory function and its parameter types:

```ts
// @providerprotocol/use/anthropic
export { anthropic } from './providers/anthropic';
export type { AnthropicLLMParams } from './providers/anthropic';

// @providerprotocol/use/openai
export { openai } from './providers/openai';
export type { OpenAILLMParams } from './providers/openai';
export type { OpenAIEmbedParams } from './providers/openai';
export type { OpenAIImageParams } from './providers/openai';

// @providerprotocol/use/google
export { google } from './providers/google';
export type { GoogleLLMParams } from './providers/google';
export type { GoogleEmbedParams } from './providers/google';
export type { GoogleImageParams } from './providers/google';

// @providerprotocol/use/stability
export { stability } from './providers/stability';
export type { StabilityImageParams } from './providers/stability';

// @providerprotocol/use/voyage
export { voyage } from './providers/voyage';
export type { VoyageEmbedParams } from './providers/voyage';

// @providerprotocol/use/cohere
export { cohere } from './providers/cohere';
export type { CohereEmbedParams } from './providers/cohere';
```

Note: Each provider exports only one factory (`openai`, `anthropic`, etc.). The model ID passed to the factory determines which modality handler is used.

---

## 15. Provider Implementation Guide

### 15.1 Provider Module Structure

Each provider module exports a single factory that combines all modality handlers:

```ts
// @providerprotocol/use/openai/index.ts
import { createProvider } from '@providerprotocol/use';
import { createLLMHandler } from './llm';
import { createEmbeddingHandler } from './embed';
import { createImageHandler } from './image';

export const openai = createProvider({
  name: 'openai',
  version: '1.0.0',
  modalities: {
    llm: createLLMHandler(),
    embedding: createEmbeddingHandler(),
    image: createImageHandler(),
  },
});

// Re-export param types for consumers
export type { OpenAILLMParams } from './llm';
export type { OpenAIEmbedParams } from './embed';
export type { OpenAIImageParams } from './image';
```

### 15.2 createProvider Helper

UPP provides a helper to create providers:

```ts
import { createProvider, Provider, ModelReference } from '@providerprotocol/use';

interface CreateProviderOptions {
  name: string;
  version: string;
  modalities: {
    llm?: LLMHandler;
    embedding?: EmbeddingHandler;
    image?: ImageHandler;
  };
}

function createProvider(options: CreateProviderOptions): Provider {
  const provider: Provider = Object.assign(
    function (modelId: string): ModelReference {
      return { modelId, provider };
    },
    {
      name: options.name,
      version: options.version,
      modalities: options.modalities,
    }
  );
  return provider;
}
```

### 15.3 HTTP-First Approach

Per [Section 2.7](#27-http-first-provider-implementation), providers SHOULD use direct HTTP calls rather than vendor SDKs.

### 15.4 Shared Utilities

UPP provides utilities for provider implementations:

```ts
// upp/http.ts

/**
 * Resolve API key from various sources
 */
export async function resolveApiKey(
  config: ProviderConfig,
  envVar?: string
): Promise<string> {
  const key = config.apiKey;

  if (!key) {
    // Fall back to environment variable
    const envKey = typeof process !== 'undefined'
      ? process.env?.[envVar ?? '']
      : undefined;
    if (!envKey) {
      throw new UPPError(
        'API key not configured',
        'AUTHENTICATION_FAILED',
        'unknown',
        'llm'
      );
    }
    return envKey;
  }

  if (typeof key === 'string') return key;
  if (typeof key === 'function') return key();
  return key.getKey();
}

/**
 * Execute fetch with retry and timeout
 */
export async function doFetch(
  url: string,
  init: RequestInit,
  config: ProviderConfig
): Promise<Response> {
  const fetchFn = config.fetch ?? globalThis.fetch;
  const timeout = config.timeout ?? 60000;
  const retry = config.retry ?? { maxAttempts: 3, backoff: 'exponential' };

  let lastError: Error | undefined;

  for (let attempt = 0; attempt < (retry.maxAttempts ?? 3); attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetchFn(url, {
        ...init,
        signal: init.signal ?? controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await normalizeHttpError(response, 'unknown', 'llm');

        // Check if we should retry
        const retryOn = retry.retryOn ?? ['RATE_LIMITED', 'NETWORK_ERROR', 'TIMEOUT'];
        if (retryOn.includes(error.code) && attempt < (retry.maxAttempts ?? 3) - 1) {
          lastError = error;
          await sleep(getBackoffDelay(attempt, retry));
          continue;
        }

        throw error;
      }

      return response;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof UPPError) throw error;

      // Network error or abort
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new UPPError('Request timed out', 'TIMEOUT', 'unknown', 'llm');
      }

      lastError = error as Error;

      if (attempt < (retry.maxAttempts ?? 3) - 1) {
        await sleep(getBackoffDelay(attempt, retry));
        continue;
      }
    }
  }

  throw lastError ?? new UPPError('Request failed', 'NETWORK_ERROR', 'unknown', 'llm');
}

/**
 * Parse Server-Sent Events stream
 */
export async function* parseSSEStream(
  body: ReadableStream<Uint8Array>
): AsyncGenerator<unknown> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') return;
          try {
            yield JSON.parse(data);
          } catch {
            // Skip invalid JSON
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * Normalize HTTP errors to UPPError
 */
export async function normalizeHttpError(
  response: Response,
  provider: string,
  modality: Modality
): Promise<UPPError> {
  const body = await response.json().catch(() => ({}));

  const codeMap: Record<number, ErrorCode> = {
    400: 'INVALID_REQUEST',
    401: 'AUTHENTICATION_FAILED',
    403: 'AUTHENTICATION_FAILED',
    404: 'MODEL_NOT_FOUND',
    408: 'TIMEOUT',
    413: 'CONTEXT_LENGTH_EXCEEDED',
    429: 'RATE_LIMITED',
    499: 'CANCELLED',
    500: 'PROVIDER_ERROR',
    502: 'PROVIDER_ERROR',
    503: 'PROVIDER_ERROR',
  };

  return new UPPError(
    body.error?.message ?? response.statusText,
    codeMap[response.status] ?? 'PROVIDER_ERROR',
    provider,
    modality,
    response.status,
    body.error
  );
}

function getBackoffDelay(attempt: number, retry: RetryConfig): number {
  const initial = retry.initialDelay ?? 1000;

  switch (retry.backoff) {
    case 'exponential':
      return initial * Math.pow(2, attempt);
    case 'linear':
      return initial * (attempt + 1);
    case 'none':
    default:
      return initial;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

---

## Appendix A: LLM Provider Example (Anthropic)

```ts
// @providerprotocol/use/anthropic/index.ts
import { createProvider } from '@providerprotocol/use';
import { createLLMHandler, AnthropicLLMParams } from './llm';

export const anthropic = createProvider({
  name: 'anthropic',
  version: '1.0.0',
  modalities: {
    llm: createLLMHandler(),
    // Anthropic doesn't have embedding or image APIs
  },
});

export type { AnthropicLLMParams } from './llm';
```

```ts
// @providerprotocol/use/anthropic/llm.ts
import {
  LLMHandler,
  BoundLLMModel,
  LLMResponse,
  LLMStreamResult,
  MessageFragment,
  AssistantMessage,
  Message,
  Tool,
  UPPError,
  ProviderConfig,
  LLMRequest,
} from '@providerprotocol/use';
import { resolveApiKey, doFetch, parseSSEStream } from '@providerprotocol/use/http';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

export interface AnthropicLLMParams {
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  top_k?: number;
  stop_sequences?: string[];
  metadata?: { user_id?: string };
}

export function createLLMHandler(): LLMHandler<AnthropicLLMParams> {
  return {
    bind(modelId: string): BoundLLMModel<AnthropicLLMParams> {
      return {
        modelId,

        async complete(request) {
        const apiKey = await resolveApiKey(request.config, 'ANTHROPIC_API_KEY');
        const body = buildRequestBody(request, modelId);

        const response = await doFetch(
          request.config.baseUrl ?? ANTHROPIC_API_URL,
          {
            method: 'POST',
            headers: buildHeaders(apiKey, request.config.apiVersion),
            body: JSON.stringify(body),
            signal: request.signal,
          },
          request.config
        );

        const data = await response.json();
        return buildLLMResponse(data);
      },

      stream(request) {
        let responseResolve: (res: LLMResponse) => void;
        let responseReject: (error: Error) => void;
        const responsePromise = new Promise<LLMResponse>((resolve, reject) => {
          responseResolve = resolve;
          responseReject = reject;
        });

        const result: LLMStreamResult = {
          response: responsePromise,

          async *[Symbol.asyncIterator]() {
            try {
              const apiKey = await resolveApiKey(request.config, 'ANTHROPIC_API_KEY');
              const body = buildRequestBody(request, modelId);

              const response = await doFetch(
                request.config.baseUrl ?? ANTHROPIC_API_URL,
                {
                  method: 'POST',
                  headers: buildHeaders(apiKey, request.config.apiVersion),
                  body: JSON.stringify({ ...body, stream: true }),
                  signal: request.signal,
                },
                request.config
              );

              const accumulated: AccumulatedResponse = {
                id: '',
                model: modelId,
                content: [],
                stop_reason: null,
                usage: { input_tokens: 0, output_tokens: 0 },
              };

              for await (const event of parseSSEStream(response.body!)) {
                const fragment = transformAnthropicEvent(event as AnthropicEvent, accumulated);
                if (fragment) yield fragment;
              }

              responseResolve(buildLLMResponse(accumulated));
            } catch (error) {
              responseReject(error as Error);
              throw error;
            }
          },
        };

        return result;
      },
    };
  },
};

// --- Request Building ---

function buildHeaders(apiKey: string, apiVersion?: string): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': apiVersion ?? ANTHROPIC_VERSION,
  };
}

function buildRequestBody(request: LLMRequest<AnthropicLLMParams>, modelId: string) {
  return {
    model: modelId,
    messages: request.messages.map(transformMessageToAnthropic),
    system: request.system,
    tools: request.tools?.map(transformToolToAnthropic),
    ...request.params,
  };
}

function transformMessageToAnthropic(message: Message): AnthropicMessage {
  if (message.type === 'user') {
    return {
      role: 'user',
      content: message.content.map(block => {
        switch (block.type) {
          case 'text':
            return { type: 'text', text: block.text };
          case 'image':
            if (block.source.type === 'url') {
              throw new UPPError(
                'Anthropic does not support URL images directly',
                'INVALID_REQUEST',
                'anthropic',
                'llm'
              );
            }
            return {
              type: 'image',
              source: {
                type: 'base64',
                media_type: block.mimeType,
                data: block.source.type === 'base64'
                  ? block.source.data
                  : Buffer.from(block.source.data).toString('base64'),
              },
            };
          default:
            throw new UPPError(
              `Unsupported content type: ${block.type}`,
              'INVALID_REQUEST',
              'anthropic',
              'llm'
            );
        }
      }),
    };
  }

  if (message.type === 'assistant') {
    const content: AnthropicContent[] = message.content.map(block => {
      if (block.type === 'text') {
        return { type: 'text', text: block.text };
      }
      throw new UPPError(
        `Unsupported assistant content type: ${block.type}`,
        'INVALID_REQUEST',
        'anthropic',
        'llm'
      );
    });

    // Add tool uses
    if (message.toolCalls) {
      for (const call of message.toolCalls) {
        content.push({
          type: 'tool_use',
          id: call.toolCallId,
          name: call.toolName,
          input: call.arguments,
        });
      }
    }

    return { role: 'assistant', content };
  }

  if (message.type === 'tool_result') {
    return {
      role: 'user',
      content: message.results.map(result => ({
        type: 'tool_result',
        tool_use_id: result.toolCallId,
        content: typeof result.result === 'string'
          ? result.result
          : JSON.stringify(result.result),
        is_error: result.isError,
      })),
    };
  }

  throw new UPPError(
    `Unknown message type: ${message.type}`,
    'INVALID_REQUEST',
    'anthropic',
    'llm'
  );
}

function transformToolToAnthropic(tool: Tool): AnthropicTool {
  return {
    name: tool.name,
    description: tool.description,
    input_schema: tool.parameters,
  };
}

// --- Response Building ---

function buildLLMResponse(data: AnthropicResponse | AccumulatedResponse): LLMResponse {
  const textContent = data.content
    .filter((c): c is AnthropicTextContent => c.type === 'text')
    .map(c => ({ type: 'text' as const, text: c.text }));

  const toolCalls = data.content
    .filter((c): c is AnthropicToolUseContent => c.type === 'tool_use')
    .map(c => ({
      toolCallId: c.id,
      toolName: c.name,
      arguments: c.input,
    }));

  const message = new AssistantMessage(
    textContent,
    toolCalls.length > 0 ? toolCalls : undefined,
    {
      id: data.id,
      metadata: {
        anthropic: {
          model: data.model,
          stop_reason: data.stop_reason,
        },
      },
    }
  );

  return {
    message,
    usage: {
      inputTokens: data.usage?.input_tokens ?? 0,
      outputTokens: data.usage?.output_tokens ?? 0,
      totalTokens: (data.usage?.input_tokens ?? 0) + (data.usage?.output_tokens ?? 0),
    },
    stopReason: data.stop_reason ?? 'end_turn',
  };
}

// --- Streaming ---

function transformAnthropicEvent(
  event: AnthropicEvent,
  accumulated: AccumulatedResponse
): MessageFragment | null {
  switch (event.type) {
    case 'message_start':
      accumulated.id = event.message.id;
      accumulated.model = event.message.model;
      accumulated.usage = event.message.usage;
      return { type: 'message_start', index: 0, delta: {} };

    case 'content_block_start':
      accumulated.content[event.index] = event.content_block;
      if (event.content_block.type === 'tool_use') {
        return {
          type: 'tool_call_delta',
          index: event.index,
          delta: {
            toolCallId: event.content_block.id,
            toolName: event.content_block.name,
          },
        };
      }
      return { type: 'content_block_start', index: event.index, delta: {} };

    case 'content_block_delta':
      if (event.delta.type === 'text_delta') {
        const block = accumulated.content[event.index] as AnthropicTextContent;
        block.text = (block.text ?? '') + event.delta.text;
        return {
          type: 'text_delta',
          index: event.index,
          delta: { text: event.delta.text },
        };
      }
      if (event.delta.type === 'thinking_delta') {
        return {
          type: 'reasoning_delta',
          index: event.index,
          delta: { text: event.delta.thinking },
        };
      }
      if (event.delta.type === 'input_json_delta') {
        return {
          type: 'tool_call_delta',
          index: event.index,
          delta: { argumentsJson: event.delta.partial_json },
        };
      }
      return null;

    case 'content_block_stop':
      return { type: 'content_block_stop', index: event.index, delta: {} };

    case 'message_delta':
      accumulated.stop_reason = event.delta.stop_reason;
      if (event.usage) {
        accumulated.usage = {
          ...accumulated.usage,
          output_tokens: event.usage.output_tokens,
        };
      }
      return null;

    case 'message_stop':
      return { type: 'message_stop', index: 0, delta: {} };

    default:
      return null;
  }
}

// --- Types ---

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: AnthropicContent[];
}

type AnthropicContent =
  | AnthropicTextContent
  | AnthropicImageContent
  | AnthropicToolUseContent
  | AnthropicToolResultContent;

interface AnthropicTextContent {
  type: 'text';
  text: string;
}

interface AnthropicImageContent {
  type: 'image';
  source: {
    type: 'base64';
    media_type: string;
    data: string;
  };
}

interface AnthropicToolUseContent {
  type: 'tool_use';
  id: string;
  name: string;
  input: Record<string, unknown>;
}

interface AnthropicToolResultContent {
  type: 'tool_result';
  tool_use_id: string;
  content: string;
  is_error?: boolean;
}

interface AnthropicTool {
  name: string;
  description: string;
  input_schema: unknown;
}

interface AnthropicResponse {
  id: string;
  model: string;
  content: AnthropicContent[];
  stop_reason: string | null;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
}

interface AccumulatedResponse {
  id: string;
  model: string;
  content: AnthropicContent[];
  stop_reason: string | null;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

type AnthropicEvent =
  | { type: 'message_start'; message: AnthropicResponse }
  | { type: 'content_block_start'; index: number; content_block: AnthropicContent }
  | { type: 'content_block_delta'; index: number; delta: AnthropicDelta }
  | { type: 'content_block_stop'; index: number }
  | { type: 'message_delta'; delta: { stop_reason: string }; usage?: { output_tokens: number } }
  | { type: 'message_stop' };

type AnthropicDelta =
  | { type: 'text_delta'; text: string }
  | { type: 'thinking_delta'; thinking: string }
  | { type: 'input_json_delta'; partial_json: string };
```

---

## Appendix B: Embedding Provider Example (OpenAI)

```ts
// @providerprotocol/use/openai/embed.ts
import {
  EmbeddingHandler,
  BoundEmbeddingModel,
  EmbeddingRequest,
  EmbeddingResponse,
  EmbeddingInput,
  UPPError,
} from '@providerprotocol/use';
import { resolveApiKey, doFetch } from '@providerprotocol/use/http';

const OPENAI_EMBED_URL = 'https://api.openai.com/v1/embeddings';

export interface OpenAIEmbedParams {
  /** Output dimensions (for text-embedding-3-* models) */
  dimensions?: number;

  /** Output encoding format */
  encoding_format?: 'float' | 'base64';

  /** User identifier for tracking */
  user?: string;
}

// Model info for capabilities
const MODEL_INFO: Record<string, { maxBatchSize: number; maxInputLength: number; dimensions: number }> = {
  'text-embedding-3-small': { maxBatchSize: 2048, maxInputLength: 8191, dimensions: 1536 },
  'text-embedding-3-large': { maxBatchSize: 2048, maxInputLength: 8191, dimensions: 3072 },
  'text-embedding-ada-002': { maxBatchSize: 2048, maxInputLength: 8191, dimensions: 1536 },
};

export function createEmbeddingHandler(): EmbeddingHandler<OpenAIEmbedParams> {
  return {
    supportedInputs: ['text'],

    bind(modelId: string): BoundEmbeddingModel<OpenAIEmbedParams> {
      const info = MODEL_INFO[modelId] ?? {
        maxBatchSize: 2048,
        maxInputLength: 8191,
        dimensions: 1536,
      };

      return {
        modelId,
        maxBatchSize: info.maxBatchSize,
        maxInputLength: info.maxInputLength,
        dimensions: info.dimensions,

        async embed(request) {
        const apiKey = await resolveApiKey(request.config, 'OPENAI_API_KEY');

        // Normalize inputs to strings
        const inputStrings = request.inputs.map(normalizeInput);

        const body = {
          model: modelId,
          input: inputStrings,
          ...request.params,
        };

        const response = await doFetch(
          request.config.baseUrl ?? OPENAI_EMBED_URL,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
            signal: request.signal,
          },
          request.config
        );

        const data = await response.json() as OpenAIEmbedResponse;

        return {
          embeddings: data.data.map((item, i) => ({
            vector: decodeEmbedding(item.embedding, request.params?.encoding_format),
            tokens: Math.ceil((data.usage?.prompt_tokens ?? 0) / data.data.length),
          })),
          usage: {
            totalTokens: data.usage?.total_tokens ?? 0,
          },
        };
      },
    };
  },
};
}

function normalizeInput(input: EmbeddingInput): string {
  if (typeof input === 'string') return input;
  if (input.type === 'text') return input.text;
  throw new UPPError(
    'OpenAI embeddings only support text input',
    'INVALID_REQUEST',
    'openai',
    'embedding'
  );
}

function decodeEmbedding(
  embedding: number[] | string,
  format?: 'float' | 'base64'
): number[] {
  if (Array.isArray(embedding)) return embedding;

  // Decode base64 to float32 array
  const buffer = Buffer.from(embedding, 'base64');
  const floats = new Float32Array(buffer.buffer, buffer.byteOffset, buffer.length / 4);
  return Array.from(floats);
}

// --- Types ---

interface OpenAIEmbedResponse {
  object: 'list';
  data: Array<{
    object: 'embedding';
    index: number;
    embedding: number[] | string;
  }>;
  model: string;
  usage?: {
    prompt_tokens: number;
    total_tokens: number;
  };
}
```

---

## Appendix C: Image Provider Example (OpenAI)

```ts
// @providerprotocol/use/openai/image.ts
import {
  ImageHandler,
  BoundImageModel,
  ImageRequest,
  ImageResponse,
  ImageEditRequest,
  ImageVaryRequest,
  ImageCapabilities,
  Image,
  UPPError,
} from '@providerprotocol/use';
import { resolveApiKey, doFetch } from '@providerprotocol/use/http';

const OPENAI_IMAGE_URL = 'https://api.openai.com/v1/images';

export interface OpenAIImageParams {
  /** Image size */
  size?: '1024x1024' | '1792x1024' | '1024x1792' | '256x256' | '512x512';

  /** Image quality (DALL-E 3 only) */
  quality?: 'standard' | 'hd';

  /** Image style (DALL-E 3 only) */
  style?: 'vivid' | 'natural';

  /** Number of images (DALL-E 2: 1-10, DALL-E 3: 1) */
  n?: number;

  /** Response format */
  response_format?: 'url' | 'b64_json';

  /** User identifier */
  user?: string;
}

const DALLE3_CAPABILITIES: ImageCapabilities = {
  generate: true,
  streaming: false,
  edit: false,
  vary: false,
  upscale: false,
  outpaint: false,
  imageToImage: false,
  maxImages: 1,
  supportedSizes: ['1024x1024', '1792x1024', '1024x1792'],
  supportedFormats: ['png'],
};

const DALLE2_CAPABILITIES: ImageCapabilities = {
  generate: true,
  streaming: false,
  edit: true,
  vary: true,
  upscale: false,
  outpaint: false,
  imageToImage: false,
  maxImages: 10,
  supportedSizes: ['256x256', '512x512', '1024x1024'],
  supportedFormats: ['png'],
};

export function createImageHandler(): ImageHandler<OpenAIImageParams> {
  return {
    bind(modelId: string): BoundImageModel<OpenAIImageParams> {
      const isDalle3 = modelId.includes('dall-e-3');
      const capabilities = isDalle3 ? DALLE3_CAPABILITIES : DALLE2_CAPABILITIES;

      const model: BoundImageModel<OpenAIImageParams> = {
        modelId,
        capabilities,

        async generate(request) {
          const apiKey = await resolveApiKey(request.config, 'OPENAI_API_KEY');

        const body = {
          model: modelId,
          prompt: request.prompt,
          n: request.params?.n ?? 1,
          size: request.params?.size ?? '1024x1024',
          quality: request.params?.quality,
          style: request.params?.style,
          response_format: 'b64_json',
          user: request.params?.user,
        };

        const response = await doFetch(
          `${request.config.baseUrl ?? OPENAI_IMAGE_URL}/generations`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
            signal: request.signal,
          },
          request.config
        );

        const data = await response.json() as OpenAIImageResponse;

        return {
          images: data.data.map((item, index) => ({
            image: Image.fromBase64(item.b64_json!, 'image/png'),
            metadata: { index },
          })),
          metadata: {
            revisedPrompt: data.data[0]?.revised_prompt,
          },
        };
      },
    };

    // Add edit for DALL-E 2
    if (!isDalle3) {
      model.edit = async function (request) {
        const apiKey = await resolveApiKey(request.config, 'OPENAI_API_KEY');

        const formData = new FormData();
        formData.append('model', modelId);
        formData.append('prompt', request.prompt);
        formData.append('image', new Blob([request.image.toBytes()], { type: 'image/png' }));

        if (request.mask) {
          formData.append('mask', new Blob([request.mask.toBytes()], { type: 'image/png' }));
        }

        formData.append('n', String(request.params?.n ?? 1));
        formData.append('size', request.params?.size ?? '1024x1024');
        formData.append('response_format', 'b64_json');

        const response = await doFetch(
          `${request.config.baseUrl ?? OPENAI_IMAGE_URL}/edits`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
            },
            body: formData,
            signal: request.signal,
          },
          request.config
        );

        const data = await response.json() as OpenAIImageResponse;

        return {
          images: data.data.map((item, index) => ({
            image: Image.fromBase64(item.b64_json!, 'image/png'),
            metadata: { index },
          })),
        };
      };

      model.vary = async function (request) {
        const apiKey = await resolveApiKey(request.config, 'OPENAI_API_KEY');

        const formData = new FormData();
        formData.append('model', modelId);
        formData.append('image', new Blob([request.image.toBytes()], { type: 'image/png' }));
        formData.append('n', String(request.count ?? 1));
        formData.append('size', request.params?.size ?? '1024x1024');
        formData.append('response_format', 'b64_json');

        const response = await doFetch(
          `${request.config.baseUrl ?? OPENAI_IMAGE_URL}/variations`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
            },
            body: formData,
            signal: request.signal,
          },
          request.config
        );

        const data = await response.json() as OpenAIImageResponse;

        return {
          images: data.data.map((item, index) => ({
            image: Image.fromBase64(item.b64_json!, 'image/png'),
            metadata: { index },
          })),
        };
      };
    }

    return model;
  },
};
}

// --- Types ---

interface OpenAIImageResponse {
  created: number;
  data: Array<{
    url?: string;
    b64_json?: string;
    revised_prompt?: string;
  }>;
}
```

---

## Appendix D: Complete Usage Example

```ts
import { useLLM, useEmbedding, useImage, Thread, Image, RoundRobinKeys, ExponentialBackoff } from '@providerprotocol/use';
import { anthropic } from '@providerprotocol/use/anthropic';
import { openai } from '@providerprotocol/use/openai';
import { cosineSimilarity } from '@providerprotocol/use/similarity';
import type { AnthropicLLMParams } from '@providerprotocol/use/anthropic';
import type { OpenAIEmbedParams, OpenAIImageParams } from '@providerprotocol/use/openai';

// --- Shared Config ---

const sharedConfig = {
  timeout: 30000,
  retryStrategy: new ExponentialBackoff({ maxAttempts: 3 }),
};

// --- LLM Setup ---

const claude = useLLM({
  model: anthropic('claude-sonnet-4-20250514'),
  config: {
    ...sharedConfig,
    apiKey: new RoundRobinKeys([
      process.env.ANTHROPIC_KEY_1!,
      process.env.ANTHROPIC_KEY_2!,
    ]),
  },
  params: {
    max_tokens: 4096,
    temperature: 0.7,
  } as AnthropicParams,
  system: 'You are a helpful assistant with access to tools.',
  tools: [
    {
      name: 'getWeather',
      description: 'Get current weather for a location',
      parameters: {
        type: 'object',
        properties: {
          location: { type: 'string', description: 'City name' },
        },
        required: ['location'],
      },
      async run({ location }: { location: string }) {
        // Mock implementation
        return `Weather in ${location}: 72°F, sunny`;
      },
    },
  ],
});

// --- Embedding Setup ---

const embedder = useEmbedding({
  model: openai('text-embedding-3-large'),
  config: {
    ...sharedConfig,
    apiKey: process.env.OPENAI_API_KEY,
  },
  params: {
    dimensions: 1536,
  } as OpenAIEmbedParams,
});

// --- Image Setup ---

const dalle = useImage({
  model: openai('dall-e-3'),
  config: {
    ...sharedConfig,
    apiKey: process.env.OPENAI_API_KEY,
  },
  params: {
    size: '1024x1024',
    quality: 'hd',
    style: 'vivid',
  } as OpenAIImageParams,
});

// --- LLM Usage ---

async function demonstrateLLM() {
  console.log('=== LLM Demo ===\n');

  // Simple generation
  const turn1 = await claude.generate('What is 2 + 2?');
  console.log('Simple:', turn1.response.text);
  console.log('Tokens:', turn1.usage.totalTokens);

  // Conversation with thread
  const thread = new Thread();

  const turn2 = await claude.generate(thread, 'My name is Alice.');
  thread.append(turn2);

  const turn3 = await claude.generate(thread, 'What is my name?');
  thread.append(turn3);
  console.log('\nConversation:', turn3.response.text);

  // Tool usage
  const turn4 = await claude.generate('What is the weather in Tokyo?');
  console.log('\nWith tool:', turn4.response.text);
  console.log('Tool executions:', turn4.toolExecutions.length);
  console.log('Cycles:', turn4.cycles);

  // Streaming
  console.log('\nStreaming:');
  const stream = claude.stream('Write a haiku about programming.');
  for await (const fragment of stream) {
    if (fragment.type === 'text_delta') {
      process.stdout.write(fragment.delta.text ?? '');
    }
  }
  console.log('\n');

  // Serialize thread
  const json = thread.toJSON();
  console.log('Thread serialized:', JSON.stringify(json).length, 'bytes');
}

// --- Embedding Usage ---

async function demonstrateEmbedding() {
  console.log('=== Embedding Demo ===\n');

  // Single embedding
  const single = await embedder.embed('Hello, world!');
  console.log('Single embedding dimensions:', single.dimensions);
  console.log('First 5 values:', single.vector.slice(0, 5));

  // Batch embedding
  const documents = [
    'The quick brown fox jumps over the lazy dog',
    'Machine learning is a subset of artificial intelligence',
    'Paris is the capital of France',
    'TypeScript is a typed superset of JavaScript',
  ];

  const batch = await embedder.embedBatch(documents);
  console.log('\nBatch embeddings:', batch.embeddings.length);
  console.log('Total tokens:', batch.usage.totalTokens);

  // Semantic search
  const query = 'What is the capital of France?';
  const queryEmbed = await embedder.embed(query);

  const scores = batch.embeddings.map((doc, i) => ({
    document: documents[i],
    score: cosineSimilarity(queryEmbed.vector, doc.vector),
  }));

  scores.sort((a, b) => b.score - a.score);
  console.log('\nSearch results for:', query);
  scores.forEach((s, i) => {
    console.log(`  ${i + 1}. [${s.score.toFixed(3)}] ${s.document}`);
  });

  // Large-scale embedding with progress
  console.log('\nLarge-scale embedding:');
  const manyDocs = Array.from({ length: 100 }, (_, i) => `Document number ${i + 1}`);

  for await (const progress of embedder.embedMany(manyDocs, { batchSize: 25 })) {
    console.log(`  Progress: ${progress.progress.percent.toFixed(0)}%`);
    if (progress.done) {
      console.log(`  Complete: ${progress.embeddings.length} embeddings`);
    }
  }
}

// --- Image Usage ---

async function demonstrateImage() {
  console.log('=== Image Demo ===\n');

  // Check capabilities
  console.log('Capabilities:', dalle.capabilities);

  // Simple generation
  console.log('\nGenerating image...');
  const result = await dalle.generate(
    'A serene Japanese garden with a koi pond, cherry blossoms, and a small wooden bridge, digital art style'
  );

  console.log('Generated:', result.images.length, 'image(s)');
  console.log('Revised prompt:', result.metadata?.revisedPrompt);

  // Save the image
  const imageBytes = result.images[0].image.toBytes();
  await Bun.write('generated-garden.png', imageBytes);
  console.log('Saved to: generated-garden.png');

  // Generation with negative prompt (if using a model that supports it)
  const result2 = await dalle.generate({
    prompt: 'A futuristic cityscape at sunset',
    negativePrompt: 'people, cars, noise', // Note: DALL-E 3 ignores this
  });

  console.log('\nSecond generation complete');
}

// --- Combined Example ---

async function demonstrateCombined() {
  console.log('=== Combined Demo ===\n');

  // Use LLM to generate an image prompt
  const promptTurn = await claude.generate(
    'Generate a detailed image prompt for a fantasy landscape. Just the prompt, nothing else.'
  );
  const imagePrompt = promptTurn.response.text;
  console.log('Generated prompt:', imagePrompt);

  // Generate the image
  const imageResult = await dalle.generate(imagePrompt);
  await Bun.write('fantasy-landscape.png', imageResult.images[0].image.toBytes());
  console.log('Image saved');

  // Create embeddings for image descriptions
  const descriptions = [
    imagePrompt,
    'A dark and stormy night',
    'A peaceful meadow with flowers',
  ];

  const embeddings = await embedder.embedBatch(descriptions);

  // Find most similar description
  const promptEmbedding = embeddings.embeddings[0];
  const similarities = embeddings.embeddings.slice(1).map((e, i) => ({
    description: descriptions[i + 1],
    similarity: cosineSimilarity(promptEmbedding.vector, e.vector),
  }));

  console.log('\nSimilar descriptions:');
  similarities.forEach(s => {
    console.log(`  [${s.similarity.toFixed(3)}] ${s.description}`);
  });
}

// --- Run Demos ---

async function main() {
  try {
    await demonstrateLLM();
    await demonstrateEmbedding();
    await demonstrateImage();
    await demonstrateCombined();
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

---

## Appendix E: Key Strategy Implementations

```ts
// @providerprotocol/use/keys.ts

import { KeyStrategy } from './types';

/**
 * Round-robin through a list of API keys
 */
export class RoundRobinKeys implements KeyStrategy {
  private keys: string[];
  private index = 0;

  constructor(keys: string[]) {
    if (keys.length === 0) {
      throw new Error('RoundRobinKeys requires at least one key');
    }
    this.keys = keys;
  }

  getKey(): string {
    const key = this.keys[this.index];
    this.index = (this.index + 1) % this.keys.length;
    return key;
  }
}

/**
 * Weighted random selection of API keys
 */
export class WeightedKeys implements KeyStrategy {
  private keys: Array<{ key: string; weight: number }>;
  private totalWeight: number;

  constructor(keys: Array<{ key: string; weight: number }>) {
    if (keys.length === 0) {
      throw new Error('WeightedKeys requires at least one key');
    }
    this.keys = keys;
    this.totalWeight = keys.reduce((sum, k) => sum + k.weight, 0);
  }

  getKey(): string {
    let random = Math.random() * this.totalWeight;
    for (const { key, weight } of this.keys) {
      random -= weight;
      if (random <= 0) return key;
    }
    return this.keys[this.keys.length - 1].key;
  }
}

/**
 * Dynamic key selection based on custom logic
 */
export class DynamicKey implements KeyStrategy {
  private selector: () => string | Promise<string>;

  constructor(selector: () => string | Promise<string>) {
    this.selector = selector;
  }

  async getKey(): Promise<string> {
    return this.selector();
  }
}

/**
 * Failover keys - tries keys in order until one works
 */
export class FailoverKeys implements KeyStrategy {
  private keys: string[];
  private currentIndex = 0;
  private failedKeys = new Set<number>();
  private resetTimeout: number;
  private resetTimers = new Map<number, NodeJS.Timeout>();

  constructor(keys: string[], options?: { resetTimeout?: number }) {
    if (keys.length === 0) {
      throw new Error('FailoverKeys requires at least one key');
    }
    this.keys = keys;
    this.resetTimeout = options?.resetTimeout ?? 60000; // 1 minute default
  }

  getKey(): string {
    // Find first non-failed key
    for (let i = 0; i < this.keys.length; i++) {
      const index = (this.currentIndex + i) % this.keys.length;
      if (!this.failedKeys.has(index)) {
        return this.keys[index];
      }
    }
    // All keys failed, reset and try first
    this.failedKeys.clear();
    return this.keys[0];
  }

  /**
   * Mark current key as failed
   */
  markFailed(): void {
    this.failedKeys.add(this.currentIndex);

    // Schedule reset
    const index = this.currentIndex;
    if (this.resetTimers.has(index)) {
      clearTimeout(this.resetTimers.get(index));
    }
    this.resetTimers.set(
      index,
      setTimeout(() => {
        this.failedKeys.delete(index);
        this.resetTimers.delete(index);
      }, this.resetTimeout)
    );

    // Move to next key
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
  }
}

/**
 * Time-based key rotation (e.g., different key per hour)
 */
export class TimeRotatedKeys implements KeyStrategy {
  private keys: string[];
  private intervalMs: number;
  private startTime: number;

  constructor(keys: string[], options?: { intervalMs?: number }) {
    if (keys.length === 0) {
      throw new Error('TimeRotatedKeys requires at least one key');
    }
    this.keys = keys;
    this.intervalMs = options?.intervalMs ?? 3600000; // 1 hour default
    this.startTime = Date.now();
  }

  getKey(): string {
    const elapsed = Date.now() - this.startTime;
    const index = Math.floor(elapsed / this.intervalMs) % this.keys.length;
    return this.keys[index];
  }
}
```

---

## Appendix F: Similarity Utilities

```ts
// @providerprotocol/use/similarity.ts

/**
 * Calculate cosine similarity between two vectors
 * Returns value between -1 and 1 (1 = identical, 0 = orthogonal, -1 = opposite)
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have same length');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const magnitude = Math.sqrt(normA) * Math.sqrt(normB);
  if (magnitude === 0) return 0;

  return dotProduct / magnitude;
}

/**
 * Calculate Euclidean distance between two vectors
 * Returns value >= 0 (0 = identical)
 */
export function euclideanDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }

  return Math.sqrt(sum);
}

/**
 * Calculate dot product of two vectors
 */
export function dotProduct(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

/**
 * Calculate Manhattan distance between two vectors
 */
export function manhattanDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have same length');
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += Math.abs(a[i] - b[i]);
  }

  return sum;
}

/**
 * Normalize a vector to unit length
 */
export function normalize(v: number[]): number[] {
  const norm = Math.sqrt(v.reduce((sum, x) => sum + x * x, 0));
  if (norm === 0) return v.slice();
  return v.map(x => x / norm);
}

/**
 * Find top-k most similar vectors
 */
export function topK(
  query: number[],
  candidates: number[][],
  k: number,
  metric: 'cosine' | 'euclidean' = 'cosine'
): Array<{ index: number; score: number }> {
  const scores = candidates.map((candidate, index) => {
    const score = metric === 'cosine'
      ? cosineSimilarity(query, candidate)
      : -euclideanDistance(query, candidate); // Negate so higher is better
    return { index, score };
  });

  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, k);
}
```

---

## Appendix G: Migration from UPP-1.0

### Naming Changes

| UPP-1.0 | UPP-1.1 |
|---------|---------|
| `useAI()` | `useLLM()` |
| `AIInstance` | `LLMInstance` |
| `Provider` | `Provider` (unified) |
| `BoundModel` | `BoundLLMModel` |
| `ProviderRequest` | `LLMRequest` |
| `ProviderResponse` | `LLMResponse` |
| `ProviderStreamResult` | `LLMStreamResult` |
| `useAI/anthropic` | `@providerprotocol/use/anthropic` |

### Import Changes

```ts
// UPP-1.0
import { useAI } from 'useAI';
import { anthropic } from 'useAI/anthropic';

const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: '...' },
});

// UPP-1.1
import { useLLM } from '@providerprotocol/use';
import { anthropic } from '@providerprotocol/use/anthropic';

const claude = useLLM({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: '...' },
});
```

### Provider Changes

In UPP-1.1, providers export a single unified factory instead of separate factories per modality:

```ts
// UPP-1.0 (hypothetical multi-modality)
import { openai, openaiEmbed, openaiImage } from 'useAI/openai';

// UPP-1.1 - single factory for all modalities
import { openai } from '@providerprotocol/use/openai';

useLLM({ model: openai('gpt-4o') });
useEmbedding({ model: openai('text-embedding-3-small') });
useImage({ model: openai('dall-e-3') });
```

### New Features in 1.1

1. **`useEmbedding()`** - Vector embedding interface
2. **`useImage()`** - Image generation interface
3. **Unified providers** - Single factory per provider for all modalities
4. **`ModelReference`** - Portable model references across modalities
5. **Modality field in errors** - `UPPError.modality`
6. **Additional key strategies** - `FailoverKeys`, `TimeRotatedKeys`
7. **Similarity utilities** - `cosineSimilarity`, `euclideanDistance`, etc.
8. **Image capabilities** - Runtime capability detection

### Breaking Changes

1. **Package name**: `useAI` → `@providerprotocol/use`
2. **Entry point**: `useAI()` → `useLLM()`
3. **Provider imports**: Unified factory per provider
4. **Type names**: Various renames (see table above)

### Automated Migration

```bash
# Find and replace in codebase
sed -i 's/from "useAI"/from "@providerprotocol\/use"/g' src/**/*.ts
sed -i 's/from "useAI\//from "@providerprotocol\/use\/providers\//g' src/**/*.ts
sed -i 's/useAI(/useLLM(/g' src/**/*.ts
sed -i 's/AIInstance/LLMInstance/g' src/**/*.ts
sed -i 's/BoundModel/BoundLLMModel/g' src/**/*.ts
```

---

## Changelog

### 1.1.0-draft

- **Renamed** from "useAI Provider Protocol" to "Unified Provider Protocol"
- **Renamed** package from `useAI` to `@providerprotocol/use`
- **Renamed** `useAI()` to `useLLM()` for clarity
- **Renamed** related types (`AIInstance` → `LLMInstance`, etc.)
- **Added** `useEmbedding()` interface for vector embeddings
- **Added** `useImage()` interface for image generation
- **Added** unified provider factories (single export per provider)
- **Added** `ModelReference` type for portable model references
- **Added** `createProvider()` helper for provider implementations
- **Added** `EmbeddingHandler`, `ImageHandler` interfaces
- **Added** `BoundEmbeddingModel`, `BoundImageModel` types
- **Added** `ImageCapabilities` for runtime feature detection
- **Added** `embedMany()` for large-scale embedding with progress
- **Added** similarity utilities (`cosineSimilarity`, `euclideanDistance`, `dotProduct`, etc.)
- **Added** image editing, variation, and upscaling interfaces
- **Added** `RetryStrategy` interface for pluggable retry/rate-limit handling
- **Added** built-in strategies: `ExponentialBackoff`, `LinearBackoff`, `NoRetry`, `TokenBucket`, `RetryAfterStrategy`
- **Replaced** `RetryConfig` with `RetryStrategy` for flexibility and custom implementations
- **Updated** `UPPError` with `modality` field
- **Updated** provider structure to use unified factories
- **Updated** provider import paths: `@providerprotocol/use/openai` (not `/providers/`)
- **Added** complete provider implementation examples for all modalities
- **Added** migration guide from UPP-1.0

### 1.0.0-draft

- Initial draft specification (LLM-focused)
