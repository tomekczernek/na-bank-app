import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import styles from './list.module.css'

import { fetchTransactions, serachTransactions } from '../../queris'
import { Transaction } from '../../types'

import TransactionItem from './TransactionItem'

type Props = {
  searchedText?: string
}

export default function List(props: Props) {
  const { searchedText } = props

  const [page, setPage] = useState<number>(1)

  const { isLoading, data, isPreviousData } = useQuery<Transaction[]>({
    queryKey: ['transactions', page, searchedText],
    queryFn: () => (searchedText ? serachTransactions(searchedText) : fetchTransactions(page)),
    keepPreviousData: true,
  })

  return (
    <section className={styles.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.map((item: Transaction) => (
            <TransactionItem key={item.id} transaction={item} />
          ))}

          {data?.length ? (
            <div className={styles.pagination}>
              <button onClick={() => setPage((old) => old - 1)} disabled={page === 1}>
                Prev page
              </button>
              <span>Page: {page}</span>
              <button
                onClick={() => {
                  if (!isPreviousData && data?.length === 20) {
                    setPage((old) => old + 1)
                  }
                }}
                disabled={isPreviousData || data?.length !== 20}
              >
                Next page
              </button>
            </div>
          ) : null}
        </div>
      )}
    </section>
  )
}
