import React from 'react'
import { Link } from 'react-router'

import { PlanAges, PlanInterests, PlanTime } from '../index'
import { ButtonRaised } from '../../../../components'
import styles from './plan.css'

const Plan = (props) => {
  return (
    <div>
      <h1>Help us give you the perfect plan!</h1>
      <div className={styles.preferences}>
        <PlanTime max={7} min={1} step={1} value={props.preferences.time} action={props.actions.addTime} />
        <PlanAges ages={props.preferences.ages} action={props.actions.toggleCheckedAges} />
        <PlanInterests interests={props.preferences.interests} action={props.actions.toggleCheckedInterests} />
        <Link to={`${props.path}/map`}>
          <ButtonRaised label="Continue" />
        </Link>
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
