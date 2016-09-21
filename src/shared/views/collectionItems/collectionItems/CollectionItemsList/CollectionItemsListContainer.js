import { connect } from 'react-redux'

import CollectionItemsList from './CollectionItemsList'
import { getOrderedByTitle } from '../CollectionItemsReducer'

const mapStateToProps = ({ collectionItems }, ownProps) => {
  return {
    collectionItems: collectionItems.collectionItems,
    order: getOrderedByTitle(collectionItems, ownProps.orderBy),
  }
}

const CollectionItemsListContainer = connect(mapStateToProps)(CollectionItemsList)

export default CollectionItemsListContainer
