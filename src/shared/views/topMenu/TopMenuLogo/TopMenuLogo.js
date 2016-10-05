import React from 'react'
import { browserHistory } from 'react-router'

import styles from './topMenuLogo.css'

const goBack = browserHistory ? browserHistory.goBack : null

const TopMenuLogo = () => {
  return (
    <div className={styles.logoContainer}onClick={goBack}>
      <i className="idf idf-left" aria-hidden="true" />
    </div>
  )
}

export default TopMenuLogo
