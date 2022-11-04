export type Transaction = {
  id: number
  amount: number
  beneficiary: string
  account: string
  address: string
  date: string
  description: string
}

export type TransactionPayload = {
  amount: number
  beneficiary: string
  account: string
  address?: string
  date: string
  description?: string
}
