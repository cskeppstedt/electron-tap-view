import React from 'react'
import EventTimeline from './EventTimeline'
import Logo from './Logo'
import Plan from './Plan'
import styles from './App.css'

export default ({ events, plan, nextEstimatedCount, currentCount }) => (
  <div className={styles.container}>
    <Logo height='20' />
    <Plan
      currentCount={currentCount}
      nextEstimatedCount={nextEstimatedCount}
      plan={plan}
    />
    <EventTimeline events={events} />
  </div>
)
