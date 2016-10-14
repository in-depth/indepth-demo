import React from 'react'

import styles from './Model3d.css'

const Model3d = (props) => {
  return (
    <div className={styles.holder}>
      <iframe width="100%" height="100%" src={props.url} frameBorder="0" allowFullScreen />
    </div>
  )
}

Model3d.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default Model3d
