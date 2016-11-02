import React from 'react'

import styles from './topMenuSearch.css'
import Icon from '../../../components/Icon/Icon'

const TopMenuSearch = ({ handleToggleEditMode }) => {
  return (
    <div onClick={handleToggleEditMode} className={styles.search}>
      <Icon icon="edit" />
    </div>
  )
}

TopMenuSearch.propTypes = {
  handleToggleEditMode: React.PropTypes.func.isRequired,
}

export default TopMenuSearch
