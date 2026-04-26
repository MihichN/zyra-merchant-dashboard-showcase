import { describe, expect, it } from "vitest"
import { summarizePayments } from "../examples/payment-summary/paymentSummary"

describe("summarizePayments", () => {
  it("aggregates totals and counts by status", () => {
    expect(
      summarizePayments([
        { amountUsd: 100, status: "paid" },
        { amountUsd: 50, status: "pending" },
        { amountUsd: 25, status: "expired" },
        { amountUsd: 75, status: "paid" },
      ]),
    ).toEqual({ total: 250, paid: 2, pending: 1, expired: 1 })
  })

  it("returns an empty summary for no payments", () => {
    expect(summarizePayments([])).toEqual({ total: 0, paid: 0, pending: 0, expired: 0 })
  })
})
