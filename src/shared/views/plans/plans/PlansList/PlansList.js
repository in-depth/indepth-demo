import React from 'react'
import { PlanLink } from '../index'

import styles from './PlansList.css'

const PlansList = (props) => {
  return (
    <div className={styles.main}>
      {props.plans.map((plan) => (
        <div key={plan.title} className={styles.plansWrapper}>
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
  )
}

PlansList.propTypes = {
  plans: React.PropTypes.array.isRequired,
}

export default PlansList
