import { combineReducers } from 'redux'

import { CollectionItemReducer } from './collectionItems/collectionItem/CollectionItemReducer'
import { CollectionItemsReducer } from './collectionItems/collectionItems/CollectionItemsReducer'
import { ShowsReducer } from './shows/ShowsReducer'
import { PlanReducer } from './plans/plan/PlanReducer'

const indepth = combineReducers({
  collectionItem: CollectionItemReducer,
  collectionItems: CollectionItemsReducer,
  shows: ShowsReducer,
  plans: PlanReducer,
})

export default indepth
