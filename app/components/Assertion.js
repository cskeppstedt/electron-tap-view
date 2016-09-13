import React from 'react'
import styles from './Assertion.css'
import classNamesBind from 'classnames/bind'

const classNames = classNamesBind.bind(styles)

export default ({ assertion }) => {
  const rootStyles = classNames('root', {
    'ok': assertion.ok,
    'not-ok': !assertion.ok
  })

  return (
    <div className={rootStyles}>
      <span className={styles.id}>
        {assertion.id}
      </span>
      <span className={styles.name}>
        {assertion.name}
      </span>
    </div>
  )
}
