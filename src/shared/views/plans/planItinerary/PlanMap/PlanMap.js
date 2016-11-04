import React from 'react'

import styles from './PlanMap.css'

const PlanMap = () => {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Recommended Route</h2>
      </div>
      <p className={styles.subHeader}>
        Thanks! We've put together a schedule for you.
      </p>
      <div className={styles.mapWrapper}>
        <img className={styles.map} alt="map" src="/static/maps/Level2-plan.jpg" />
      </div>
    </div>
  )
}

export default PlanMap
