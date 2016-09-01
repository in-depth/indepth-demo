import { combineReducers } from 'redux'

import CollectionItemReducer from './collectionItems/collectionItem/reducer'
import ShowsReducer from './shows/reducer'

const indepth = combineReducers({
  collectionItem: CollectionItemReducer,
  events: ShowsReducer,
})

export default indepth
