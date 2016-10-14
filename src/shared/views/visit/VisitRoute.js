import React from 'react'

import { VisitLinks, VisitFeaturedList, VisitMuseumHeader } from './index'

import styles from './visitRoute.css'

const featuredListLinks = [
  {
    title: 'GUIDED TOURS',
    path: '/plan',
    backgroundUrl: '/static/images/guided-tours.jpg',
  },
  {
    title: 'OUR COLLECTION',
    path: '/collection',
    backgroundUrl: '/static/images/gallipoli-westmacott.jpg',
  },
  {
    title: 'EUROPEAN SPLENDOR',
    path: '/page-unavailable',
    backgroundUrl: '/static/images/fan.jpg',
  },
  {
    title: 'ESPIONAGE AND MASS SURVEILLANCE',
    path: '/',
    backgroundUrl: '/static/images/simon-denny.jpg',
  },
]

const visitPrimaryLinks = [
  {
    title: 'EVENTS',
    path: '/events',
    icon: 'event',
  },
  {
    title: 'PLAN',
    path: '/plan',
    icon: 'directions_walk',
  },
  {
    title: 'INFO',
    path: '/page-unavailable',
    icon: 'info_outline',
  },
  {
    title: 'HOURS',
    path: '/page-unavailable',
    icon: 'hourglass_empty',
  },
]

const VisitRoute = () => {
  return (
    <div>
      <VisitMuseumHeader />
      <div className={styles.visitPrimaryLinks}>
        <VisitLinks topLinks={visitPrimaryLinks} />
      </div>
      <VisitFeaturedList featuredLinks={featuredListLinks} />
    </div>
  )
}

export default VisitRoute
