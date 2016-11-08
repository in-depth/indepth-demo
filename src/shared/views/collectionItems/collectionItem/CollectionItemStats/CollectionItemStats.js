import React from 'react'

import styles from './CollectionItemStats.css'

const CollectionItemStats = (props) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.stats}>
        <p><b>Date: </b>{props.date}</p>
        <p><b>Type:</b> <span>{props.type}</span></p>
        <p><b>Sub Type:</b> <span>{props.subType}</span></p>
        <p><b>Classifications:</b> <span>{props.classifications.map(v => `${v}, `)}</span></p>
      </div>
    </div>
  )
}

CollectionItemStats.propTypes = {
  date: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  subType: React.PropTypes.string.isRequired,
  classifications: React.PropTypes.array.isRequired,
  shortDesc: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
}

export default CollectionItemStats
