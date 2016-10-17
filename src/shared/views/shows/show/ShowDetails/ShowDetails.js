import React from 'react'

import styles from './ShowDetails.css'

import Icon from '../../../../components/Icon/Icon'


const ShowDetails = (props) => {
  return (
    <div>
      <div className={styles.details}>
        <div><Icon icon={'event'} /><span>{props.date}, {props.time}</span></div>
        <div><Icon icon={'map'} /><span>{props.location}</span></div>
        <div><Icon icon={'cost'} /><span>{props.cost}</span></div>
      </div>
      <div className={styles.description}>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

ShowDetails.propTypes = {
  date: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  cost: React.PropTypes.string.isRequired,
}

export default ShowDetails
