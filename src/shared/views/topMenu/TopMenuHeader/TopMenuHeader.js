import React from 'react'

import styles from './topMenuHeader.css'

const TopMenuHeader = (props) => {
  return (
    <div className={styles.header}>
      <h1>{props.title}</h1>
    </div>
  )
}

TopMenuHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
}

export default TopMenuHeader
