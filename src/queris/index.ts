import { TransactionPayload } from '../types'

export const fetchTransactions = (page = 0) =>
  fetch(`http://localhost:3000/transactions?_page= ${page} &_limit=20`)
    .then((res) => res.json())
    .catch((err) => console.error(err))

export const serachTransactions = (searchedText: string) =>
  fetch(`http://localhost:3000/transactions?beneficiary=${searchedText}`)
    .then((res) => res.json())
    .catch((err) => console.error(err))

export const removeTransaction = (id: number) =>
  fetch(`http://localhost:3000/transactions/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .catch((err) => console.error(err))

export const addTransaction = (data: TransactionPayload) =>
  fetch('http://localhost:3000/transactions', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err))
