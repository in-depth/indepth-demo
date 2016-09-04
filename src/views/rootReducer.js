import { combineReducers } from 'redux'

import { CollectionItemReducer } from './collectionItems/collectionItem/CollectionItemReducer'
import { CollectionItemsReducer } from './collectionItems/collectionItems/CollectionItemsReducer'
import { ShowsReducer } from './shows/ShowsReducer'

const indepth = combineReducers({
  collectionItem: CollectionItemReducer,
  collectionItems: CollectionItemsReducer,
  shows: ShowsReducer,
})

export default indepth
