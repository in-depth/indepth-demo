import React from 'react'

import { Checkbox } from '../../../../components'

const PlanInterests = (props) => {
  return (
    <div>
      <h2>What are your interests?</h2>
      {props.interests.map((interest, index) => (
        <Checkbox
          key={interest.title}
          label={interest.title}
          checked={interest.checked}
          action={props.action}
          index={index}
        />
      ))}
    </div>
  )
}

PlanInterests.propTypes = {
  interests: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default PlanInterests
