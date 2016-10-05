import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppLayout from './AppLayout/AppLayout'
import { CollectionItemRoute } from './collectionItems/collectionItem'
import { ShowsRoute } from './shows'
import { VisitRoute } from './visit'
import { ShowRoute } from './shows/show'
import { CollectionItemsRoute } from './collectionItems/collectionItems'
import { DeepZoomRoute } from './plugins/DeepZoom'
import { Model3dRoute } from './plugins/Model3d'

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
    <IndexRoute component={VisitRoute} />
    <Route path="shows" component={ShowsRoute} />
    <Route path="shows/:id" component={ShowRoute} />
    <Route path="/collection" component={CollectionItemsRoute} />
    <Route path="/collection/:id" component={CollectionItemRoute} />
    <Route path="/collection/:id/deepzoom" component={DeepZoomRoute} />
    <Route path="/collection/:id/models3d" component={Model3dRoute} />
    <Route path="/visit" component={VisitRoute} />
  </Route>
)

export default routes
