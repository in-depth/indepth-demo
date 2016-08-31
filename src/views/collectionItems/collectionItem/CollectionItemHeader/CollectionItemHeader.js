import React from 'react'

const CollectionItemHeader = (props) => {
  return (
    <div>
      <img alt={props.image.title || props.title} src={props.image.url} />
      <div><b>{props.title}</b></div>
    </div>
  )
}

CollectionItemHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
  }).isRequired,
}

export default CollectionItemHeader
