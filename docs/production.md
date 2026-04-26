# Production Concerns

## Security

- Scope every dashboard query by merchant account.
- Never expose merchant API secrets after creation.
- Redact webhook URLs and sensitive integration settings in logs.
- Use server-side authorization for all settings changes.

## Reliability

- Keep dashboard reads separate from payment mutation paths.
- Cache expensive analytics with short TTLs.
- Make filters and exports deterministic and paginated.

## Observability

- Track dashboard load time, API error rate, chart query latency, and export failures.
- Monitor discrepancy between dashboard totals and payment API ledger totals.

## Data Quality

- Treat summary cards as derived views over source-of-truth payment data.
- Use consistent timezone rules for daily/monthly charts.
- Document rounding rules for financial display values.
