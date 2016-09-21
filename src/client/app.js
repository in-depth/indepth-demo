import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../shared/views/rootReducer'
import AppRoutes from '../shared/views/AppRoutes'

const initialState = window.__INITIAL_STATE__ //eslint-disable

const store = createStore(rootReducer, initialState)

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>, document.getElementById('root'))
}
