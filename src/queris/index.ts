import { TransactionPayload } from '../types'

const root = 'http://localhost:3000/transactions'

export const fetchTransactions = (page = 0) =>
  fetch(`${root} ?_page= ${page} &_limit=20`)
    .then((res) => res.json())
    .catch((err) => console.error(err))

export const serachTransactions = (searchedText: string) =>
  fetch(`${root} ?beneficiary= ${searchedText}`)
    .then((res) => res.json())
    .catch((err) => console.error(err))

export const removeTransaction = (id: number) =>
  fetch(`${root} / ${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .catch((err) => console.error(err))

export const addTransaction = (data: TransactionPayload) =>
  fetch(`${root}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err))
