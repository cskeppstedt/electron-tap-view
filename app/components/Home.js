import React from 'react'
import Assertion from './Assertion'
import Logo from './Logo'
import Plan from './Plan'
import styles from './Home.css'

export default ({ assertions, plan, nextEstimatedCount, currentCount }) => (
  <div className={styles.container}>
    <Logo height='20' />
    <Plan
      currentCount={currentCount}
      nextEstimatedCount={nextEstimatedCount}
      plan={plan}
    />
    {assertions && Object.keys(assertions).map((id) => (
      <Assertion key={id} assertion={assertions[id]} />
    ))}
  </div>
)
