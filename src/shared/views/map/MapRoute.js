import React from 'react'

import { MapTabs } from './index'

const mapLevels = [
  {
    title: 'Level 1',
    imageUrl: '/static/maps/Level1.jpg',
  },
  {
    title: 'Level 2',
    imageUrl: '/static/maps/Level2.jpg',
  },
  {
    title: 'Level 3',
    imageUrl: '/static/maps/Level3.jpg',
  },
  {
    title: 'Level 4',
    imageUrl: '/static/maps/Level4.jpg',
  },
  {
    title: 'Level 5',
    imageUrl: '/static/maps/Level5.jpg',
  },
]

const MapRoute = () => {
  return (
    <div>
      <MapTabs mapLevels={mapLevels} />
    </div>
  )
}

export default MapRoute
