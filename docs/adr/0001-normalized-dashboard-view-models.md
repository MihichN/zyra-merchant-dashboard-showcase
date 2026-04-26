# ADR 0001: Normalized Dashboard View Models

## Status

Accepted

## Context

Payment providers and backend APIs often return data optimized for processing, not for UI rendering. Passing raw API responses into dashboard components makes charts, filters, and summary cards fragile.

## Decision

Map API responses into dashboard-specific view models before rendering.

## Consequences

- UI components stay simple and predictable.
- Aggregations and formatting can be unit-tested independently.
- Provider/API response changes are isolated in the data mapping layer.
- The dashboard needs clear ownership over derived metrics and display semantics.
