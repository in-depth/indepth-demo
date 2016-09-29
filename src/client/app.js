import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../shared/views/rootReducer'
import AppRoutes from '../shared/views/AppRoutes'

const initialState = window.__INITIAL_STATE__ //eslint-disable

const store = createStore(rootReducer, initialState)

window.onload = () => {
  renderApp(AppRoutes)
}

const renderApp = (AppRoutes) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </AppContainer>
    ,
    document.getElementById('root') // eslint-disable-line
  )
}

if (module.hot) {
  module.hot.accept('../shared/views/AppRoutes', () => {
    const UpdatedRoot = require('../shared/views/AppRoutes').default

    renderApp(UpdatedRoot)
  })
}
