---
title: "Function: networkError()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [http](../README.md) / networkError

# Function: networkError()

> **networkError**(`error`, `provider`, `modality`): [`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)

Defined in: [src/http/errors.ts:132](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/errors.ts#L132)

Creates a UPPError for network failures (DNS, connection, etc.).

Use this when the request fails before receiving any HTTP response,
such as DNS resolution failures, connection refused, or network unreachable.

## Parameters

### error

`Error`

The underlying Error that caused the failure

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../@providerprotocol/ai/type-aliases/Modality.md)

Request modality for error context

## Returns

[`UPPError`](../../@providerprotocol/ai/classes/UPPError.md)

A UPPError with NETWORK_ERROR code and the original error attached
