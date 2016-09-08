import React from 'react'
import Assertion from './Assertion'
import styles from './Home.css'

export default ({ assertions }) => (
  <div className={styles.container}>
    {assertions && assertions.map((assertion) => (
      <Assertion key={assertion.id} assertion={assertion} />
    ))}
  </div>
)
