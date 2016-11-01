import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationList } from '../navigation'
import { TopMenu } from '../topMenu'

import * as VisitActions from '../visit/VisitActions'
import * as DemosActions from '../demos/DemosActions'

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
      <div className={styles.body}>
        <div className={styles.topMenu}>
          <TopMenu
            path={location.pathname}
            handleToggleEditMode={visitActions.toggleInlineEditing}
            handleToggleFullscreen={fullscreenAction.toggleFullscreen}
            fullscreen={fullscreen}
          />
        </div>
        <div className={styles.navigationSpacer} />
        <div style={editModeStyle} className={styles.content}>
          <div className={styles.content} id="content">
            {children}
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
  fullscreen: React.PropTypes.bool.isRequired,
  visitActions: React.PropTypes.object.isRequired,
  fullscreenAction: React.PropTypes.object.isRequired,
}

export default AppLayout
