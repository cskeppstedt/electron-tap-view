import React from 'react'
import Assert from './Assert'
import Comment from './Comment'
import styles from './EventTimeline.css'

const constructors = {
  'assert': Assert,
  'comment': Comment
}

export default ({ events }) => (
  <div className={styles['event-timeline']}>
    {events && events.map((ev) => {
      const { type, ...props } = ev
      const Constructor = constructors[type]

      return (
        Constructor && <Constructor {...props} />
      )
    })}
  </div>
)
