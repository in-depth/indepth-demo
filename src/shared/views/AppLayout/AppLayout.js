import React from 'react'
import { NavigationList } from '../navigation'
import { TopMenu } from '../topMenu'

import styles from './appLayout.css'


const AppLayout = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.topMenu}>
          <TopMenu title={props.location.pathname} />
        </div>
        <div className={styles.content}>
            {props.children}
        </div>
        <div className={styles.navigation}>
          <NavigationList />
        </div>
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.object.isRequired,
}

export default AppLayout
