import React from 'react'
import styles from './Assertion.css'

export default ({ assertion }) => (
  <div className={styles.root}>
    <strong>{assertion.id}:</strong> {assertion.ok ? 'ok' : 'not ok'}
  </div>
)
