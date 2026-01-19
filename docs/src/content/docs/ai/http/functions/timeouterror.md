---
title: "Function: timeoutError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / timeoutError

# Function: timeoutError()

> **timeoutError**(`timeout`, `provider`, `modality`): [`UPPError`](../../core/classes/upperror.md)

Defined in: [src/http/errors.ts:173](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/http/errors.ts#L173)

Creates a UPPError for request timeout.

Use this when the request exceeds the configured timeout duration
and is aborted by the AbortController.

## Parameters

### timeout

`number`

The timeout duration in milliseconds that was exceeded

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../core/type-aliases/modality.md)

Request modality for error context

## Returns

[`UPPError`](../../core/classes/upperror.md)

A UPPError with TIMEOUT code
