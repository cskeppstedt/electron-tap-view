import React from 'react'
import styles from './StatusTitle.css'

const status = ({ events, nextEstimatedCount, running }) => {
  const currentCount = events.length

  if (!running && events.length) {
    const plan = events.find((ev) => ev.type === 'plan').plan
    return `Done with plan for asserts ${plan.start}..${plan.end}`
  } else if (running && nextEstimatedCount) {
    return `Collecting events ${currentCount}/${Math.max(currentCount, nextEstimatedCount)}...`
  } else if (running && currentCount) {
    return `Collecting events ${currentCount}...`
  } else {
    return 'Waiting for TAP input'
  }
}

export default (props) => (
  <span className={styles.root}>
    {status(props)}
  </span>
)
