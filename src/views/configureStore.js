import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import rootReducer from './rootReducer'

const configureStore = () => {
  const loggerMiddleware = createLogger({
    collapsed: true,
  })

  const store = createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware
    )
  )
  console.log(store.getState())

  return store
}


export default configureStore
