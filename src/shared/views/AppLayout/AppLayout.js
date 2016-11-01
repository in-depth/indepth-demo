import React from 'react'
import { NavigationList } from '../navigation'
import { TopMenu } from '../topMenu'

import styles from './appLayout.css'

const editModeStyle = { pointerEvents: 'auto' }

const toggleAppLinks = (mode) => {
  if (mode === true) editModeStyle.pointerEvents = 'none'
  editModeStyle.pointerEvents = 'auto'
}

const AppLayout = (props) => {
  return (
    <div className={styles.appLayout}>
      <div className={styles.body}>
        <div className={styles.topMenu}>
          <TopMenu path={props.location.pathname} />
        </div>
        <div className={styles.navigationSpacer} />
        <div style={editModeStyle} className={styles.content}>
          <div className={styles.content} id="content">
            {props.children}
          </div>
        </div>
        <div className={styles.navigationSpacer} />
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
