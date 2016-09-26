import React from 'react'
import styles from './Comment.css'
import classNamesBind from 'classnames/bind'

const classNames = classNamesBind.bind(styles)

export default ({ comment }) => {
  const rootStyles = classNames('root', {})

  return (
    <div className={rootStyles}>
      {comment}
    </div>
  )
}
