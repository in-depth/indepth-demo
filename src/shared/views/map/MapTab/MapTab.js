import React from 'react'

import styles from './mapTab.css'

const MapTab = (props) => {
  return (
    <img className={styles.mapImage} alt={props.title} src={props.url} />
  )
}

MapTab.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
}

export default MapTab
