import React from 'react'

import { MapTabs } from './index'

const mapsStorage = `${process.env.IMAGE_STORAGE_URL}/maptiles`

const mapLevels = [
  {
    title: 'Level 1',
    imageUrl: `${mapsStorage}/level1/{z}/{x}/{y}.png`,
  },
  {
    title: 'Level 2',
    imageUrl: `${mapsStorage}/level2/{z}/{x}/{y}.png`,
  },
  {
    title: 'Level 3',
    imageUrl: `${mapsStorage}/level3/{z}/{x}/{y}.png`,
  },
  {
    title: 'Level 4',
    imageUrl: `${mapsStorage}/level4/{z}/{x}/{y}.png`,
  },
  {
    title: 'Level 5',
    imageUrl: `${mapsStorage}/level5/{z}/{x}/{y}.png`,
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
