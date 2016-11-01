import { combineReducers } from 'redux'

import { CollectionItemReducer } from './collectionItems/collectionItem/CollectionItemReducer'
import { CollectionItemsReducer } from './collectionItems/collectionItems/CollectionItemsReducer'
import { ShowsReducer } from './shows/shows/ShowsReducer'
import { PlanReducer } from './plans/plan/PlanReducer'
import { VisitReducer } from './visit/VisitReducer'
import { DemosReducer } from './demos/DemosReducer'

const indepth = combineReducers({
  collectionItem: CollectionItemReducer,
  collectionItems: CollectionItemsReducer,
  shows: ShowsReducer,
  plans: PlanReducer,
  visit: VisitReducer,
  demos: DemosReducer,
})

export default indepth
