# Architecture

```text
Dashboard Pages -> Data Fetching Layer -> Payment API
       |                    |
       v                    v
 Summary Cards        Invoice Table
```

## Notes

- UI modules consume normalized payment view models.
- Raw provider responses are not exposed to dashboard components.
- Filtering and aggregation can be tested independently.

## Sequence: Dashboard Summary

```mermaid
sequenceDiagram
  participant Merchant
  participant Dashboard
  participant APIClient
  participant PaymentAPI
  participant SummaryMapper

  Merchant->>Dashboard: Open overview
  Dashboard->>APIClient: Request payments
  APIClient->>PaymentAPI: GET payment list
  PaymentAPI-->>APIClient: Raw payment data
  APIClient->>SummaryMapper: Normalize and aggregate
  SummaryMapper-->>Dashboard: Summary cards + table view model
```
