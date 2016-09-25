import React from 'react'

import styles from './topMenuHeader.css'

const TopMenuHeader = (props) => {
  const titleTransform = (location) => {
    const title = location.split('/')
    if (title[0] === '') return 'Home'
    return title[0].charAt(0).toUpperCase() + title[0].slice(1)
  }
  return (
    <div className={styles.header}>
      <h1>{titleTransform(props.title)}</h1>
    </div>
  )
}

TopMenuHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
}

export default TopMenuHeader
