import React from 'react'

import { PlanMap, PlanItems } from '../index'

import styles from './PlanItinerary.css'

const items = ['APYPEBMF6X', 'CWVSA3MEVN', 'HNT3APBUNY']

const PlanItinerary = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>{'Recommended Route'}</h2>
        <p className={styles.subHeader}>
          {'Thanks! We\'ve put together a schedule for you.'}
        </p>
      </div>
      <PlanMap />
      <PlanItems items={items} intinerary={props.intinerary} />
    </div>
  )
}

PlanItinerary.propTypes = {
  intinerary: React.PropTypes.object.isRequired,
}

export default PlanItinerary
