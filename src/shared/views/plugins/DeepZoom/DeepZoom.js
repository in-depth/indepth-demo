import React from 'react'

import styles from './DeepZoom.css'

const DeepZoom = (props) => {
  return (
    <div className={styles.holder}>
      <iframe width="100%" height="100%" src={props.url} frameBorder="0" allowFullScreen />
    </div>
  )
}

DeepZoom.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default DeepZoom
