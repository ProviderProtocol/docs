---
title: "Variable: tools"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / tools

# Variable: tools

> `const` **tools**: `object`

Defined in: [src/providers/google/types.ts:960](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L960)

Namespace object containing all Google tool helper constructors.

Provides a convenient way to create built-in tool configurations.

## Type Declaration

### codeExecution()

> **codeExecution**: () => [`GoogleCodeExecutionTool`](../interfaces/googlecodeexecutiontool.md) = `codeExecutionTool`

Creates a code execution tool configuration

Creates a code execution tool configuration.

Enables Gemini to write and execute Python code in a sandbox.

#### Returns

[`GoogleCodeExecutionTool`](../interfaces/googlecodeexecutiontool.md)

A code execution tool configuration object

#### Example

```typescript
const codeExec = codeExecutionTool();
```

### fileSearch()

> **fileSearch**: (`options`) => [`GoogleFileSearchTool`](../interfaces/googlefilesearchtool.md) = `fileSearchTool`

Creates a file search (RAG) tool configuration

Creates a file search (RAG) tool configuration.

Enables Gemini to search through uploaded documents.

Note: Cannot be combined with other built-in tools.

#### Parameters

##### options

File search configuration

###### fileSearchStoreNames

`string`[]

###### metadataFilter?

`string`

#### Returns

[`GoogleFileSearchTool`](../interfaces/googlefilesearchtool.md)

A file search tool configuration object

#### Example

```typescript
const fileSearch = fileSearchTool({
  fileSearchStoreNames: ['fileSearchStores/abc123'],
});
```

### googleMaps()

> **googleMaps**: (`options?`) => [`GoogleMapsTool`](../interfaces/googlemapstool.md) = `googleMapsTool`

Creates a Google Maps grounding tool configuration

Creates a Google Maps grounding tool configuration.

Enables Gemini to search for places using Google Maps data.

Note: Not supported in Gemini 3 models.

#### Parameters

##### options?

Optional configuration

###### enableWidget?

`boolean`

#### Returns

[`GoogleMapsTool`](../interfaces/googlemapstool.md)

A Google Maps tool configuration object

#### Example

```typescript
const maps = googleMapsTool();

// With widget enabled
const mapsWithWidget = googleMapsTool({ enableWidget: true });
```

### googleSearch()

> **googleSearch**: () => [`GoogleSearchTool`](../interfaces/googlesearchtool.md) = `googleSearchTool`

Creates a Google Search grounding tool configuration

Creates a Google Search grounding tool configuration.

Enables Gemini to search the web using Google Search for up-to-date information.

#### Returns

[`GoogleSearchTool`](../interfaces/googlesearchtool.md)

A Google Search tool configuration object

#### Example

```typescript
const search = googleSearchTool();
```

### urlContext()

> **urlContext**: () => [`GoogleUrlContextTool`](../interfaces/googleurlcontexttool.md) = `urlContextTool`

Creates a URL context tool configuration

Creates a URL context tool configuration.

Enables Gemini to fetch and analyze content from URLs.

#### Returns

[`GoogleUrlContextTool`](../interfaces/googleurlcontexttool.md)

A URL context tool configuration object

#### Example

```typescript
const urlCtx = urlContextTool();
```

## Example

```typescript
import { google, tools } from 'provider-protocol/google';

const model = llm({
  model: google('gemini-2.5-flash'),
  params: {
    tools: [
      tools.googleSearch(),
      tools.codeExecution(),
    ],
  },
});
```
