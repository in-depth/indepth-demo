import React from 'react'
import { PlanLink } from '../index'

import styles from './PlansList.css'

const PlansList = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.pageHeader}>
        <h1>PLAN</h1>
      </div>
      <h2 className={styles.subHeader}>Pick a plan below to get a custom itinerary</h2>
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {props.plans.map((plan) => (
            <div key={plan.title} className={styles.planWrapper}>
              <PlanLink
                image={plan.backgroundUrl}
                subtitle={plan.subtitle}
                title={plan.title}
                backgroundUrl={plan.backgroundUrl}
                path={plan.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

PlansList.propTypes = {
  plans: React.PropTypes.array.isRequired,
}

export default PlansList
