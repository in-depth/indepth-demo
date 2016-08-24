import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './views/App.js'

const renderApp = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>
    ,
    document.getElementById('root')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const UpdatedRoot = require('./views/App').default
    renderApp(UpdatedRoot)
  })
}
