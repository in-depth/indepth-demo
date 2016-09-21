import { connect } from 'react-redux'

import CollectionItem from './CollectionItem'

const mapStateToProps = ({ collectionItems }, ownProps) => {
  const item = collectionItems.collectionItems[ownProps.id]
  return {
    image: item.mainImage,
    title: item.title,
    date: item.date,
  }
}

const CollectionItemContainer = connect(mapStateToProps)(CollectionItem)

export default CollectionItemContainer
