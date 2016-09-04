import { combineReducers } from 'redux'

import { CollectionItemReducer } from './collectionItems/collectionItem/reducer'
import { CollectionItemsReducer } from './collectionItems/collectionItems/CollectionItemsReducer'

const indepth = combineReducers({
  collectionItem: CollectionItemReducer,
  collectionItems: CollectionItemsReducer,
})

export default indepth
