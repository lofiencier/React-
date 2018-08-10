import React from 'react'
import styles from './loading'

export default ({ page }) => (
  <div className={styles[page]}>
    <div className={styles.spinner}>
      <div />
    </div>
  </div>
)
