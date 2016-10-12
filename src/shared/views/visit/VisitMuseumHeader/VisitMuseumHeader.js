import React from 'react'

import styles from './VisitMuseumHeader.css'

const VisitMuseumHeader = () => {
  return (
    <div className={styles.museumHeader}>
      <div className={styles.overlay}>
        <h1 className={styles.museumName}>TE PAPA</h1>
        <p className={styles.museumTagline}>Museum of New Zealand Te Papa Tongawera</p>
      </div>
    </div>
  )
}

export default VisitMuseumHeader
