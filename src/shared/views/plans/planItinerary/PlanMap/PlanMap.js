import React from 'react'

import styles from './PlanMap.css'

const PlanMap = () => {
  return (
    <div>
      <h2 className={styles.title}>RECOMMENDED ROUTE</h2>
      <img className={styles.map} alt="map" src="/static/maps/Level2-plan.jpg" />
    </div>
  )
}

export default PlanMap
