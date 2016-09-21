import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppLayout from './AppLayout'
import { HomeRoute } from './home'
import { CollectionItemRoute } from './collectionItems/collectionItem'
import { ShowsRoute } from './shows'
import { ShowRoute } from './shows/show'
import { CollectionItemsRoute } from './collectionItems/collectionItems'

const routes = (
  <Route path="/" component={AppLayout} >
    <IndexRoute component={HomeRoute} />
    <Route path="shows" component={ShowsRoute} />
    <Route path="shows/:id" component={ShowRoute} />
    <Route path="/collection/:id" component={CollectionItemRoute} />
    <Route path="/collection" component={CollectionItemsRoute} />
  </Route>
)

export default routes
