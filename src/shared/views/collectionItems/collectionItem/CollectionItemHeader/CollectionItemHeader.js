import React from 'react'

const CollectionItemHeader = (props) => {
  return (
    <div>
      <img alt={props.image.alt || props.title} src={props.image.url} style={{ maxHeight: '300px', maxWidth: '300px' }} />
      <div><b>{props.title}</b></div>
    </div>
  )
}

CollectionItemHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
  }).isRequired,
}

export default CollectionItemHeader
