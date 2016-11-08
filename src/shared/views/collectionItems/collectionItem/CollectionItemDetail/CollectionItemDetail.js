import React from 'react'

import styles from './CollectionItemDetail.css'

const CollectionItemDetail = (props) => {
  return (
    <div className={styles.main}>
      {props.fullDesc.map(desc => (
        <div key={desc.sectionid}>
          <h3>{desc.sectionTitle}</h3>
          <p>{desc.section}</p>
        </div>
      ))}
    </div>
  )
}

CollectionItemDetail.propTypes = {
  fullDesc: React.PropTypes.array,
}

export default CollectionItemDetail
