export type Payment = {
  amountUsd: number
  status: "paid" | "pending" | "expired"
}

export function summarizePayments(payments: Payment[]) {
  return payments.reduce(
    (summary, payment) => {
      summary.total += payment.amountUsd
      summary[payment.status] += 1
      return summary
    },
    { total: 0, paid: 0, pending: 0, expired: 0 },
  )
}
