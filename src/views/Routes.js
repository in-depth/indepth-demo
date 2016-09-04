import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import AppLayout from './AppLayout'
import { HomeRoute } from './home'
import { CollectionItemRoute } from './collectionItems/collectionItem'
import { CollectionItemsRoute } from './collectionItems/collectionItems'
import configureStore from './configureStore'

const store = configureStore()

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={AppLayout}>
          <Route path="/" component={HomeRoute} />
          <Route path="/collection/:id" component={CollectionItemRoute} />
          <Route path="/collection" component={CollectionItemsRoute} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Routes
