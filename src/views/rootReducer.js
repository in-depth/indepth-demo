import { combineReducers } from 'redux'

import CollectionItemReducer from './collectionItems/collectionItem/reducer'
import EventsReducer from './events/reducer'

const indepth = combineReducers({
  collectionItem: CollectionItemReducer,
  events: EventsReducer,
})

export default indepth
