import React from 'react'

import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.box}>
        <span className={styles.textLogo}>naBankApp</span>
        <span className={styles.text}>User Name</span>
      </div>
    </nav>
  )
}
