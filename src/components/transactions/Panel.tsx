import React, { useState } from 'react'

import styles from './panel.module.css'

import Form from './Form'

type Props = {
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Panel(props: Props) {
  const { handleSearchInput } = props
  const [balance, setBalance] = useState<number>(1132.33)

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div>
          <span className={styles.boxText}>Balance <span className={styles.boxBalance}>{balance.toFixed(2)}</span> PLN</span>
        </div>
        <input
          placeholder='Search beneficiary...'
          onChange={handleSearchInput}
          className={styles.input}
        />
      </div>
      <Form balance={balance} setBalance={setBalance} />
    </section>
  )
}
