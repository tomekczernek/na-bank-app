import React from 'react'
import { useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'

import styles from './form.module.css'

import { TransactionPayload, Transaction } from '../../types'
import { addTransaction } from '../../queris'

type Props = {
  balance: number
  setBalance: React.Dispatch<React.SetStateAction<number>>
}

export default function Form(props: Props) {
  const { balance, setBalance } = props

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionPayload>()

  const queryClient = useQueryClient()

  const onSubmit = (data: TransactionPayload) => {
    const updatedData = { ...data, date: new Date().toISOString() }
    addTransaction(updatedData)
      .then((response: Transaction) => {
        setBalance(balance - Number(response.account))
      })
      .then(() => queryClient.refetchQueries(['transactions']))
    reset()
  }

  return (
    <section className={styles.container}>
      <span className={styles.boxText}>New transaction</span>

      <form className={styles.form} autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.boxInput}>
          <div className={styles.input}>
            <label>Amount:</label>
            <input
              type='number'
              {...register('amount', { required: true, min: 0, max: balance, valueAsNumber: true })}
            />
          </div>
          {errors.amount && (
            <span className={styles.inputError}>
              This field is required and has to be positive and lower than Your balance
            </span>
          )}
        </div>

        <div className={styles.boxInput}>
          <div className={styles.input}>
            <label>Beneficiary:</label>
            <input {...register('beneficiary', { required: true })} />
          </div>
          {errors.beneficiary && <span className={styles.inputError}>This field is required</span>}
        </div>

        <div className={styles.boxInput}>
          <div className={styles.input}>
            <label>Account number:</label>
            <input {...register('account', { required: true })} />
          </div>
          {errors.account && <span className={styles.inputError}>This field is required</span>}
        </div>

        <div className={styles.input}>
          <label>Address:</label>
          <input {...register('address')} />
        </div>

        <div className={styles.input}>
          <label>Description:</label>
          <textarea rows={4} {...register('description')}></textarea>
        </div>

        <button className={styles.send} type='submit'>
          Send
        </button>
      </form>
    </section>
  )
}
