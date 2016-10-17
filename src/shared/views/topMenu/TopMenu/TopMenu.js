import React, { PropTypes } from 'react'

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
      <TopMenuSearch renderSearchResults={props.renderSearchResults} />
    </div>
  )
}

TopMenu.propTypes = {
  path: PropTypes.string.isRequired,
  renderSearchResults: PropTypes.func.isRequired,
}

export default TopMenu
