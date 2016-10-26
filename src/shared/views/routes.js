import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppLayout from './AppLayout/AppLayout'
import { CollectionItemRoute } from './collectionItems/collectionItem'
import { ShowsRoute } from './shows/shows'
import { VisitRoute } from './visit'
import { ShowRoute } from './shows/show'
import { CollectionItemsRoute } from './collectionItems/collectionItems'
import { DeepZoomRoute } from './plugins/DeepZoom'
import { Model3dRoute } from './plugins/Model3d'
import { PlansRoute } from './plans/plans'
import { PlanRoute } from './plans/plan'
import { PlanItineraryRoute } from './plans/planItinerary'
import { MapRoute } from './map'
import PageNotFound from './PageNotFound/PageNotFound'
import { Demo } from './demos'

export const navigationLinks = [
  { title: 'VISIT', link: '/', icon: 'account_balance' },
  { title: 'FIND', link: '/collection', icon: 'search' },
  { title: 'MAP', link: '/map', icon: 'map' },
  { title: 'PLAN', link: '/plan', icon: 'directions_walk' },
  { title: 'EVENTS', link: '/events', icon: 'event' },
]

const routes = (
  <Route path="/" component={AppLayout} >
    <IndexRoute component={VisitRoute} />
    <Route path="events" component={ShowsRoute} />
    <Route path="events/:id" component={ShowRoute} />
    <Route path="/collection" component={CollectionItemsRoute} />
    <Route path="/collection/:id" component={CollectionItemRoute} />
    <Route path="/collection/:id/deepzoom" component={DeepZoomRoute} />
    <Route path="/collection/:id/models3d" component={Model3dRoute} />
    <Route path="/plan" component={PlansRoute} />
    <Route path="/plan/:id" component={PlanRoute} />
    <Route path="/plan/:id/map" component={PlanItineraryRoute} />
    <Route path="/visit" component={VisitRoute} />
    <Route path="/map" component={MapRoute} />
    <Route path="/page-unavailable" component={PageNotFound} />
    <Route path="/demo" component={Demo} />
  </Route>
)

export default routes
