import React from 'react'
import { Link } from 'react-router'

import styles from './navigationItem.css'
import Icon from '../../../components/Icon/Icon'

const NavigationItem = (props) => {
  return (
    <li className={styles.main}>
      <Link to={props.link} className={styles.navLink}>
        <Icon icon={props.icon} />
        <span>{props.title}</span>
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
