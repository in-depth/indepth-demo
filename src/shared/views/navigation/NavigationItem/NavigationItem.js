import React from 'react'
import { Link } from 'react-router'

import styles from './navigationItem.css'

const NavigationItem = (props) => {
  return (
    <li>
      <Link to={props.link}>
        <div className={styles.navigationItem}>
          <i className={`${props.icon} ${styles.icon}`} aria-hidden="true" />
          <span>{props.title}</span>
        </div>
      </Link>
    </li>
  )
}

NavigationItem.propTypes = {
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
}


export default NavigationItem
