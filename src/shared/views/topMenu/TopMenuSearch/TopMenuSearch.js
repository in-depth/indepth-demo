import React from 'react'

import styles from './topMenuSearch.css'
import Icon from '../../../components/Icon/Icon'

let mode = 'off'

const editMode = () => {
  if (mode === 'on') {
    console.log('turning edit mode off')
    mode = 'off'
    return document.designMode = mode
  }
  console.log('turning edit mode on')
  mode = 'on'
  document.designMode = mode
}

const TopMenuSearch = () => {
  return (
    <div onClick={editMode} className={styles.search}>
      <Icon icon="search" />
    </div>
  )
}

export default TopMenuSearch
