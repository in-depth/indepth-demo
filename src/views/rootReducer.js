import { combineReducers } from 'redux'

import CollectionItemReducer from './collectionItems/collectionItem/reducer'

const indepth = combineReducers({
  collectionItem: CollectionItemReducer,
})

export default indepth
