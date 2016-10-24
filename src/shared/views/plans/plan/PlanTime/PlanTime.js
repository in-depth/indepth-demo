import React from 'react'

import { SliderSnaps } from '../../../../components'

import styles from './PlanTime.css'

const PlanTime = ({ min, max, step, value, action }) => {
  return (
    <div>
      <h3>We have (hours):</h3>
      <div className={styles.slider}>
        <SliderSnaps
          min={min}
          max={max}
          step={step}
          value={value}
          action={action}
        />
      </div>
    </div>
  )
}

PlanTime.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  step: React.PropTypes.number.isRequired,
  value: React.PropTypes.number.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default PlanTime
