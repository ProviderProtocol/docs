---
title: "Function: cancelledError()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [http](../README.md) / cancelledError

# Function: cancelledError()

> **cancelledError**(`provider`, `modality`): [`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)

Defined in: [src/http/errors.ts:181](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/errors.ts#L181)

Creates a UPPError for user-initiated request cancellation.

Use this when the request is aborted via a user-provided AbortSignal,
distinct from timeout-based cancellation.

## Parameters

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../@providerprotocol/ai/type-aliases/Modality.md)

Request modality for error context

## Returns

[`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)

A UPPError with CANCELLED code
