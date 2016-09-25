import React from 'react'

import { TopMenuHeader, TopMenuLogo, TopMenuSearch } from '../index'
import styles from './topMenu.css'

const TopMenu = (props) => {
  return (
    <div className={styles.topMenu}>
      <TopMenuLogo />
      <TopMenuHeader title={props.title} />
      <TopMenuSearch />
    </div>
  )
}

TopMenu.propTypes = {
  title: React.PropTypes.string.isRequired,
}

export default TopMenu
