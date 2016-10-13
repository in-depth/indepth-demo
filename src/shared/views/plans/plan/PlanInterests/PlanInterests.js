import React from 'react'

import { Checkbox } from '../../../../components'

import styles from './PlanInterests.css'

const PlanInterests = (props) => {
  return (
    <div>
      <p>We are interested in:</p>
      <div className={styles.checkboxs}>
        {props.interests.map((interest, index) => (
          <div key={interest.title} className={styles.checkbox}>
            <Checkbox
              label={interest.title}
              checked={interest.checked}
              action={props.action}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

PlanInterests.propTypes = {
  interests: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default PlanInterests
