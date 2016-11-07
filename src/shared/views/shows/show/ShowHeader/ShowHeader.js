import React from 'react'

import styles from './ShowHeader.css'

const ShowHeader = (props) => {
  return (
    <div>
      <img className={styles.headerImage} alt={props.title} src={props.imageUrl} />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
    </div>
  )
}

ShowHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
}

export default ShowHeader
