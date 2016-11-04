import React from 'react'
import { Link } from 'react-router'

import { PlanAges, PlanInterests, PlanTime } from '../index'
import { ButtonRaised } from '../../../../components'
import styles from './Plan.css'

const Plan = (props) => {
  console.log(props)
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Plan</h1>
      </div>
      <p className={styles.intro}>
        Give us a few details and we'll create the perfect plan for your experience
      </p>
      <div className={styles.preferencesWrapper}>
        <div className={styles.preferences}>
          <PlanTime max={7} min={1} step={1} value={props.preferences.time} action={props.actions.addTime} />
          <PlanAges ages={props.preferences.ages} action={props.actions.toggleCheckedAges} />
          <PlanInterests interests={props.preferences.interests} action={props.actions.toggleCheckedInterests} />
          <Link className={styles.continue} to={`${props.path}/map`}>
            <ButtonRaised width="300px" label="MAKE MY PLAN" />
          </Link>
        </div>
      </div>
    </div>
  )
}

Plan.propTypes = {
  preferences: React.PropTypes.shape({
    time: React.PropTypes.number.isRequired,
    ages: React.PropTypes.array.isRequired,
    interests: React.PropTypes.array.isRequired,
  }).isRequired,
  actions: React.PropTypes.shape({
    addTime: React.PropTypes.func.isRequired,
    toggleCheckedAges: React.PropTypes.func.isRequired,
    toggleCheckedInterests: React.PropTypes.func.isRequired,
  }).isRequired,
  path: React.PropTypes.string.isRequired,
}

export default Plan
