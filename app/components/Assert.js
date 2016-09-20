import React from 'react'
import styles from './Assert.css'
import classNamesBind from 'classnames/bind'

const classNames = classNamesBind.bind(styles)

export default ({ assert }) => {
  const rootStyles = classNames('root', {
    'ok': assert.ok,
    'not-ok': !assert.ok
  })

  return (
    <div className={rootStyles}>
      <span className={styles.id}>
        {assert.id}
      </span>
      <span className={styles.name}>
        {assert.name}
      </span>
    </div>
  )
}
