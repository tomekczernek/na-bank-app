import React from 'react'
import { useQueryClient } from '@tanstack/react-query'

import styles from './transactionItem.module.css'

import { Transaction } from '../../types'
import { removeTransaction } from '../../queris'

type Props = {
  transaction: Transaction
}

export default function TransactionItem({ transaction }: Props) {
  const { id, amount, description, beneficiary } = transaction

  const queryClient = useQueryClient()

  const handleRemoveTransaction = () => {
    removeTransaction(id).then(() => queryClient.refetchQueries(['transactions']))
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.boxText}>{beneficiary}</span>
        <span className={amount > 0 ? styles.greenText : styles.redText}>{amount}</span>
      </div>
      <span className={styles.boxTextDescription}>{description}</span>
      <button className={styles.remove} onClick={handleRemoveTransaction}>
        Remove
      </button>
    </div>
  )
}
