# ZyraPayments Merchant Dashboard Showcase

Public-safe showcase of a merchant dashboard for a crypto payment platform.

## Highlights

- Payment overview and invoice list.
- Merchant settings and account flows.
- Status-based filtering and summary cards.
- API-backed UI architecture in the private implementation.

## Tech Stack

- Next.js, React, TypeScript.
- MySQL-backed APIs in the private implementation.
- Tailwind CSS, Radix UI, charts.

## Included

- `docs/architecture.md` - dashboard module structure.
- `docs/adr/` - architecture decision records.
- `docs/production.md` - security, reliability, observability, and data-quality notes.
- `docs/roadmap.md` - scaling and leadership roadmap.
- `examples/payment-summary/paymentSummary.ts` - safe summary calculation example.
- `tests/` - unit tests for dashboard aggregation behavior.
- `.github/workflows/ci.yml` - CI pipeline for typecheck and tests.

## Engineering Quality

```bash
npm install
npm run typecheck
npm test
```

## Not Included

Merchant secrets, real payments, webhook URLs, database credentials, JWT secrets, and private settlement logic are excluded.
