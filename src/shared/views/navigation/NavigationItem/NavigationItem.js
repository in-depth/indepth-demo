import React from 'react'
import { Link } from 'react-router'

import styles from './navigationItem.css'
import Icon from '../../../components/Icon/Icon'

const NavigationItem = (props) => {
  return (
    <li className={styles.navigationLink}>
      <Link to={props.link}>
        <div className={styles.navigationItem}>
          <Icon icon={props.icon} />
          <span className={styles.title}>{props.title}</span>
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
