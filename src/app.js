import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Routes from './views/Routes.js'


const renderApp = (AppRoutes) => {
  ReactDOM.render(
    <AppContainer>
      <AppRoutes />
    </AppContainer>
    ,
    document.getElementById('root') // eslint-disable-line
  )
}

renderApp(Routes)

if (module.hot) {
  module.hot.accept('./views/Routes', () => {
    const UpdatedRoot = require('./views/Routes').default

    renderApp(UpdatedRoot)
  })
}
