import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationList } from '../navigation'
import { TopMenu } from '../topMenu'

import * as VisitActions from '../visit/VisitActions'

import styles from './appLayout.css'

const editModeStyle = { pointerEvents: 'auto' }

const toggleAppLinks = (mode) => {
  if (mode === true) editModeStyle.pointerEvents = 'none'
  editModeStyle.pointerEvents = 'auto'
}

const AppLayout = ({
  location,
  children,
  toggleInlineEditing,
}) => {
  return (
    <div className={styles.appLayout}>
      <div className={styles.body}>
        <div className={styles.topMenu}>
          <TopMenu
            path={location.pathname}
            handleToggleEditMode={toggleInlineEditing}
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
  toggleInlineEditing: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(VisitActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
