import { combineReducers } from 'redux'

import objectReducer from './objects/object/reducer'

const indepth = combineReducers({
  object: objectReducer,
})

export default indepth
