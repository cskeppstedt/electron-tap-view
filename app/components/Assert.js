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
      {assert.diag && renderDiag(assert.diag)}
    </div>
  )
}

function renderDiag ({ actual, expected, operator, at }) {
  return (
    <div className={styles.diag}>
      <div>
        Expected {expectation(actual, expected, operator)}
      </div>
      <div>
        {assertionLocation(at)}
      </div>
    </div>
  )
}

function expectation (actual, expected, operator) {
  return (
    <span className={styles.expectation}>
      {actual} {operator} {expected}
    </span>
  )
}

function assertionLocation (at) {
  // idea: make path clickable and launch in editor
  return (
    <span className={styles.location}>
      {at}
    </span>
  )
}
