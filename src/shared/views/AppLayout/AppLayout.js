import React from 'react'
import { NavigationList } from '../navigation'
import { TopMenu } from '../topMenu'

import styles from './appLayout.css'

const editModeStyle = { pointerEvents: 'auto' }

const toggleAppLinks = (mode) => {
  if (mode === true) editModeStyle.pointerEvents = 'none'
  editModeStyle.pointerEvents = 'auto'
}

const AppLayout = ({
  location,
  children,
  fullscreen,
  visitActions,
  fullscreenAction,
}) => {
  return (
    <div className={styles.appLayout}>
      <TopMenu
        path={location.pathname}
        handleToggleEditMode={visitActions.toggleInlineEditing}
        handleToggleFullscreen={fullscreenAction.toggleFullscreen}
        fullscreen={fullscreen}
      />
      <main
        style={editModeStyle}
        className={styles.content}
        id={'content'}
      >
        {children}
      </main>
      <div className={styles.navigation}><NavigationList /></div>
    </div>
  )
}

AppLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.object.isRequired,
  fullscreen: React.PropTypes.bool.isRequired,
  visitActions: React.PropTypes.object.isRequired,
  fullscreenAction: React.PropTypes.object.isRequired,
}

export default AppLayout
