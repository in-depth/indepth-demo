import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../shared/views/rootReducer'
import AppRoutes from '../shared/views/AppRoutes'

const initialState = window.__INITIAL_STATE__ // eslint-disable-line

const store = createStore(rootReducer, initialState)

window.onload = () => { // eslint-disable-line
  renderApp(AppRoutes)
}

const renderApp = (Routes) => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>
    ,
    document.getElementById('root') // eslint-disable-line
  )
}

const renderAppHot = (Routes) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AppContainer>
    ,
    document.getElementById('root') // eslint-disable-line
  )
}

if (module.hot) {
  module.hot.accept('../shared/views/AppRoutes', () => {
    const UpdatedRoot = require('../shared/views/AppRoutes').default

    renderAppHot(UpdatedRoot)
  })
}
