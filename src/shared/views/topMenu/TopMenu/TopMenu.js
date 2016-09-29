import React from 'react'

import { TopMenuHeader, TopMenuLogo, TopMenuSearch } from '../index'
import styles from './topMenu.css'

const TopMenu = (props) => {
  const getTitleFromPath = (path) => {
    const title = path.split('/')
    if (title[0] === '') { return 'Visit' }
    return title[0].charAt(0).toUpperCase() + title[0].slice(1)
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
