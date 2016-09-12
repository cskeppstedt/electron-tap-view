import React from 'react'
import Assertion from './Assertion'
import styles from './Home.css'

export default ({ assertions, plan }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>
      {plan ? `Plan [${plan.start}..${plan.end}]` : 'Running...'}
    </h3>

    {assertions && Object.keys(assertions).map((id) => (
      <Assertion key={id} assertion={assertions[id]} />
    ))}
  </div>
)
