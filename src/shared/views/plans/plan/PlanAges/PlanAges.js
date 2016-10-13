import React from 'react'

import { Checkbox } from '../../../../components'

import styles from './PlanAges.css'

const PlanAges = (props) => {
  return (
    <div>
      <p>Our ages are:</p>
      <div className={styles.checkboxs}>
        {props.ages.map((age, index) => (
          <div key={age.title} className={styles.checkbox}>
            <Checkbox
              label={age.title}
              checked={age.checked}
              action={props.action}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

PlanAges.propTypes = {
  ages: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default PlanAges
