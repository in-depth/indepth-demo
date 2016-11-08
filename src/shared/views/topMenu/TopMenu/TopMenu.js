import React from 'react'

import {
  TopMenuHeader,
  TopMenuLogo,
  TopMenuSearch,
  TopMenuExitFullscreen,
  TopMenuDesktopNav,
} from '../index'
import styles from './topMenu.css'

import { navigationLinks } from '../../routes'

const TopMenu = (props) => {
  const getTitleFromPath = (path) => {
    const title = path.split('/')
    // SSR gives title in in 2nd item of array. Clientside first item
    const pageTitle = title[0] ? title[0] : title[1]
    if (!pageTitle) { return 'VISIT' }
    const pageTitleNoSpace = pageTitle.toUpperCase()
    return pageTitleNoSpace.split('-').join(' ')
  }
  return (
    <div className={styles.main}>
      <div className={styles.headMobile}>
        <TopMenuLogo />
        <TopMenuHeader title={getTitleFromPath(props.path)} />
        <TopMenuExitFullscreen
          fullscreen={props.fullscreen}
          handleToggleFullscreen={props.handleToggleFullscreen}
        />
        <TopMenuSearch handleToggleEditMode={props.handleToggleEditMode} />
      </div>
      <div className={styles.headDesktop}>
        <h1 className={styles.logo}>{props.siteName}</h1>
        <TopMenuDesktopNav navs={navigationLinks} />
      </div>
    </div>
  )
}

TopMenu.propTypes = {
  path: React.PropTypes.string.isRequired,
  siteName: React.PropTypes.string.isRequired,
  fullscreen: React.PropTypes.bool.isRequired,
  handleToggleEditMode: React.PropTypes.func.isRequired,
  handleToggleFullscreen: React.PropTypes.func.isRequired,
}

export default TopMenu
