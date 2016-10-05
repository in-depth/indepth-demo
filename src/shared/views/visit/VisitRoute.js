import React from 'react'

import { VisitLinks, VisitFeaturedList, VisitMuseumHeader } from './index'

import styles from './visitRoute.css'

const featuredListLinks = [
  {
    title: 'Plan your Trip',
    path: '/plan',
    backgroundUrl: 'http://indepth-527d.kxcdn.com/wp-content/uploads/2016/05/tile_0009.jpg',
  },
  {
    title: 'New Galipoli exhibition',
    path: '/',
    backgroundUrl: 'http://indepth-527d.kxcdn.com/wp-content/uploads/2016/05/tile_0012.jpg',
  },
  {
    title: 'New Audio Tour',
    path: '/',
    backgroundUrl: 'http://indepth-527d.kxcdn.com/wp-content/uploads/2016/05/tile_0005.jpg',
  },
  {
    title: 'This other shit.',
    path: '/',
    backgroundUrl: 'http://indepth-527d.kxcdn.com/wp-content/uploads/2016/05/tile_0010.jpg',
  },
  {
    title: 'More stuff',
    path: '/',
    backgroundUrl: 'http://indepth-527d.kxcdn.com/wp-content/uploads/2016/05/tile_0008.jpg',
  },
]

const whatsOnLinks = [
  {
    title: 'Events',
    path: '/shows',
  },
  {
    title: 'Plan',
    path: '/plan',
  },
]

const visitorDetailsLinks = [
  {
    title: 'Visitor Info',
    path: '/',
  },
  {
    title: 'Opening Hours',
    path: '/',
  },
]

const VisitRoute = () => {
  return (
    <div>
      <VisitMuseumHeader />
      <div className={styles.topLinks}>
        <div>
          <h2>What's on</h2>
          <VisitLinks topLinks={whatsOnLinks} />
        </div>
        <div>
          <h2>Visitor details</h2>
          <VisitLinks topLinks={visitorDetailsLinks} />
        </div>
      </div>
      <VisitFeaturedList featuredLinks={featuredListLinks} />
    </div>
  )
}

export default VisitRoute
