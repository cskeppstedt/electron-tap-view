import React from 'react'
import styles from './Plan.css'

const status = ({ plan, nextEstimatedCount, currentCount }) => {
  if (plan) {
    return `Done with plan ${plan.start}..${plan.end}`
  } else if (currentCount && nextEstimatedCount) {
    return `Collecting ${currentCount}/${Math.max(currentCount, nextEstimatedCount)}...`
  } else if (currentCount) {
    return `Collection ${currentCount}...`
  } else {
    return 'Waiting for TAP input'
  }
}

export default (props) => (
  <span className={styles.root}>
    {status(props)}
  </span>
)
