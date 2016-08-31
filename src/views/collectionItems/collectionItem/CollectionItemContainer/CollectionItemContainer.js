import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ collectionItem }) => ({
  image: collectionItem.mainImage,
  title: collectionItem.title,
  date: collectionItem.date,
})

const CollectionItemContainer = connect(mapStateToProps)(CollectionItem)

export default CollectionItemContainer
export { CollectionItem }
