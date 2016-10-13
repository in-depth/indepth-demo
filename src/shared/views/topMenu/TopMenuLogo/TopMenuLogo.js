import React from 'react'
import { browserHistory } from 'react-router'

import styles from './topMenuLogo.css'
import Icon from '../../../components/Icon/Icon'

const goBack = browserHistory ? browserHistory.goBack : null

const TopMenuLogo = () => {
  return (
    <div className={styles.logoContainer}onClick={goBack}>
      <Icon icon="arrow_back" />
    </div>
  )
}

export default TopMenuLogo
