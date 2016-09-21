import React from 'react'

import { CollectionItemHeader, CollectionItemStats } from '../index'

const CollectionItem = (props) => {
  return (
    <div>
      <CollectionItemHeader title={props.title} image={props.image} />
      <CollectionItemStats date={props.date} />
    </div>
  )
}

CollectionItem.propTypes = {
  image: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
}

export default CollectionItem
