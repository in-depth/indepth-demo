import React from 'react'
import { Link } from 'react-router'
import { PlansCard } from '../index'

import styles from './plansList.css'

const PlansList = (props) => {
  return (
    <div className={styles.plans}>
      {props.plans.map((plan) => (
        <Link className={styles.link} key={plan.title} to={plan.path}>
          <PlansCard image={plan.backgroundUrl} text={plan.subtitle} title={plan.title} />
        </Link>
      ))}
    </div>
  )
}

PlansList.propTypes = {
  plans: React.PropTypes.array.isRequired,
}

export default PlansList
