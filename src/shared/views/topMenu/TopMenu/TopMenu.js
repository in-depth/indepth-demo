import React from 'react'

import { TopMenuHeader, TopMenuLogo, TopMenuSearch } from '../index'
import styles from './topMenu.css'

const TopMenu = (props) => {
  const getTitleFromPath = (path) => {
    const title = path.split('/')
    // SSR gives title in in 2nd item of array. Clientside first item
    const pageTitle = title[0] ? title[0] : title[1]
    if (!pageTitle) { return 'Visit' }
    return pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
  }
  return (
    <div className={styles.topMenu}>
      <TopMenuLogo />
      <TopMenuHeader title={getTitleFromPath(props.path)} />
      <TopMenuSearch />
    </div>
  )
}

TopMenu.propTypes = {
  path: React.PropTypes.string.isRequired,
}

export default TopMenu
