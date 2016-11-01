import React from 'react'

import { TopMenuHeader, TopMenuLogo, TopMenuSearch } from '../index'
import styles from './topMenu.css'

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
    <div className={styles.topMenu}>
      <TopMenuLogo />
      <TopMenuHeader title={getTitleFromPath(props.path)} />
      <TopMenuSearch handleToggleEditMode={props.handleToggleEditMode} />
    </div>
  )
}

TopMenu.propTypes = {
  path: React.PropTypes.string.isRequired,
  handleToggleEditMode: React.PropTypes.func.isRequired,
}

export default TopMenu
