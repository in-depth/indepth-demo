import React from 'react'
import { NavigationItem } from '../index'

import styles from './NavigationList.css'

import { navigationLinks } from '../../routes'

const NavigationList = () => {
  return (
    <ul className={styles.menu}>
      {navigationLinks.map((navigationLink) => (
        <NavigationItem key={navigationLink.title} link={navigationLink.link} title={navigationLink.title} icon={navigationLink.icon} />
      ))}
    </ul>
  )
}

export default NavigationList
