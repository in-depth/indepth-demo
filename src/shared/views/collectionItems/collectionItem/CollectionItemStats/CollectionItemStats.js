import React from 'react'

import styles from './CollectionItemStats.css'

const CollectionItemStats = (props) => {
  return (
    <div className={styles.collectionStats}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.stats}>
        <b>Date:</b> <span>{props.date}</span><br />
        <b>Type:</b> <span>{props.type}</span><br />
        <b>Sub Type:</b> <span>{props.subType}</span><br />
        <b>Classifications:</b> <span>{props.classifications.map(v => `${v}, `)}</span><br />
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
  title: React.PropTypes.string,
}

export default CollectionItemStats
