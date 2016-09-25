import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppLayout from './AppLayout/AppLayout'
import { HomeRoute } from './home'
import { CollectionItemRoute } from './collectionItems/collectionItem'
import { ShowsRoute } from './shows'
import { ShowRoute } from './shows/show'
import { CollectionItemsRoute } from './collectionItems/collectionItems'

export const navigationLinks = [
  {
    title: 'Visit',
    link: '/',
    icon: 'fa fa-university',
  },
  {
    title: 'Find',
    link: '/collection',
    icon: 'fa fa-search',
  },
  {
    title: 'Map',
    link: '/map',
    icon: 'fa fa-map-o',
  },
  {
    title: 'Plan',
    link: '/plan',
    icon: 'fa fa-map-signs',
  },
  {
    title: 'More',
    link: '/more',
    icon: 'fa fa-ellipsis-h',
  },
]

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
