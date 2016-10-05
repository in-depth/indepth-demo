import { connect } from 'react-redux'

import CollectionItem from './CollectionItem'

const mapStateToProps = ({ collectionItems }, ownProps) => {
  const item = collectionItems.collectionItems[ownProps.id]
  return {
    itemId: item.id,
    image: item.image,
    title: item.title,
    date: item.date,
    type: item.type,
    subType: item.subType,
    classifications: item.classifications,
    assets: item.assets,
    shortDesc: item.shortDesc,
    fullDesc: item.fullDesc,
  }
}

const CollectionItemContainer = connect(mapStateToProps)(CollectionItem)

export default CollectionItemContainer
