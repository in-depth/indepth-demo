import React from 'react'

import { Checkbox } from '../../../../components'

const PlanAges = (props) => {
  return (
    <div>
      <h2>What ages are in your party?</h2>
      {props.ages.map((age, index) => (
        <Checkbox
          key={age.title}
          label={age.title}
          checked={age.checked}
          action={props.action}
          index={index}
        />
      ))}
    </div>
  )
}

PlanAges.propTypes = {
  ages: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default PlanAges
