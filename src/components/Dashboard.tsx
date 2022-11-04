import React, { useState } from 'react'

import styles from './dashboard.module.css'

import Panel from './transactions/Panel'
import List from './transactions/List'

export default function Dashboard() {
  const [searchedText, setSearchText] = useState<string>()

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(
      e.target.value ? encodeURIComponent(e.target.value) : undefined,
    )
  }

  return (
    <section className={styles.container}>
      <section className={styles.box}>
        <Panel handleSearchInput={handleSearchInput} />
        <List searchedText={searchedText} />
      </section>
    </section>
  )
}
