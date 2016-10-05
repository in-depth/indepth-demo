import React from 'react'
import { browserHistory } from 'react-router'

import styles from './topMenuLogo.css'

const TopMenuLogo = () => {
  return (
    <div className={styles.logoContainer}>
      <i className="fa fa-arrow-left" aria-hidden="true" onClick={browserHistory.goBack} />
    </div>
  )
}

export default TopMenuLogo
