import React from 'react'
import styles from './Plan.css'

const getCount = (currentCount, nextEstimatedCount) => (
  currentCount && nextEstimatedCount
    ? `${currentCount}/${Math.max(currentCount, nextEstimatedCount)}`
    : 'Waiting for input'
)

export default ({ plan, nextEstimatedCount, currentCount }) => (
  <h3 className={styles.title}>
    {plan
      ? `Done [${plan.start}..${plan.end}]`
      : `Running (${getCount(currentCount, nextEstimatedCount)})`
    }
  </h3>
)
