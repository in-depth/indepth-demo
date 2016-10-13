import React from 'react'

import { SliderSnaps } from '../../../../components'


const PlanTime = ({ min, max, step, value, action }) => {
  return (
    <div>
      <p>We have (hours):</p>
      <SliderSnaps
        min={min}
        max={max}
        step={step}
        value={value}
        action={action}
      />
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
