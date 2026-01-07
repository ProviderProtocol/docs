---
title: "Function: timeoutError()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [http](../README.md) / timeoutError

# Function: timeoutError()

> **timeoutError**(`timeout`, `provider`, `modality`): [`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)

Defined in: [src/http/errors.ts:158](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/errors.ts#L158)

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

[`Modality`](../../@providerprotocol/ai/type-aliases/Modality.md)

Request modality for error context

## Returns

[`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)

A UPPError with TIMEOUT code
