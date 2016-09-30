import React from 'react'
import EventTimeline from './EventTimeline'
import Logo from './Logo'
import StatusTitle from './StatusTitle'
import styles from './App.css'

export default ({ events, nextEstimatedCount, running }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Logo height='20' running={running} />
      <StatusTitle events={events} running={running} nextEstimatedCount={nextEstimatedCount} />
    </div>
    <EventTimeline events={events} />
  </div>
)
