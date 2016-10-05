import React from 'react'

import styles from './VisitMuseumHeader.css'

const VisitMuseumHeader = () => {
  return (
    <div className={styles.museumHeader}>
      <img className={styles.museumLogo} src="http://www.photoactivate.co.nz/images/gallery-tile-title-te-papa.png" alt="te papa" />
    </div>
  )
}

export default VisitMuseumHeader
