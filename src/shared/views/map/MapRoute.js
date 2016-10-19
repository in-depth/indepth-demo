import React from 'react'

import { MapTabs } from './index'

const mapsStorage = `${process.env.IMAGE_STORAGE_URL}/maps/demo`

const mapLevels = [
  {
    title: 'Level 1',
    imageUrl: `${mapsStorage}/level1/level1.dzi`,
  },
  {
    title: 'Level 2',
    imageUrl: `${mapsStorage}/level2/level2.dzi`,
  },
  {
    title: 'Level 3',
    imageUrl: `${mapsStorage}/level3/level3.dzi`,
  },
  {
    title: 'Level 4',
    imageUrl: `${mapsStorage}/level4/level4.dzi`,
  },
  {
    title: 'Level 5',
    imageUrl: `${mapsStorage}/level5/level5.dzi`,
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
