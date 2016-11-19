import React from 'react'

import style from './CollectionItemHeader.css'

const CollectionItemHeader = props => {
  return (
    <div className={style.main}>
      <h1>{props.title}</h1>
      <img
        alt={props.image.alt || props.title}
        src={props.image.url}
        style={{ maxHeight: '340px', maxWidth: '380px' }}
      />
    </div>
  )
}

CollectionItemHeader.propTypes = {
  title: React.PropTypes.string,
  image: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
  }).isRequired,
}

export default CollectionItemHeader
