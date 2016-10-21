import React from 'react'

import style from './CollectionItemHeader.css'

const CollectionItemHeader = (props) => {
  return (
    <div className={style.header}>
      <img alt={props.image.alt || props.title} src={props.image.url} style={{ maxHeight: '300px', maxWidth: '300px' }} />
    </div>
  )
}

CollectionItemHeader.propTypes = {
  image: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
  }).isRequired,
}

export default CollectionItemHeader
