import React from 'react'

import styles from './VisitMuseumHeader.css'

const VisitMuseumHeader = (props) => {
  return (
    <div className={styles.museumHeader}>
      <img className={styles.museumLogo} src="http://www.photoactivate.co.nz/images/gallery-tile-title-te-papa.png" />
    </div>
  )
}

export default VisitMuseumHeader
