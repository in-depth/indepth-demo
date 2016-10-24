import React from 'react'

import { PlanMap, PlanItems } from '../index'

import styles from './PlanItinerary.css'

const items = ['APYPEBMF6X', 'CWVSA3MEVN', 'HNT3APBUNY']

const PlanItinerary = (props) => {
  return (
    <div className={styles.intinerary}>
      <PlanMap />
      <PlanItems items={items} intinerary={props.intinerary} />
    </div>
  )
}

PlanItinerary.propTypes = {
  intinerary: React.PropTypes.object.isRequired,
}

export default PlanItinerary
