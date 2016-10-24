import React from 'react'

import styles from './mapTab.css'

const MAP_ID = 'mapContainer'

const mapMinZoom = 1
const mapMaxZoom = 5

class MapTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapMinZoom: 1,
      mapMaxZoom: 5,
    }
  }

  componentDidMount() {
    this.onMount(imgUrl => {
      const L = require('leaflet')

      this.mapContainer = L.map(MAP_ID, {
        maxZoom: mapMaxZoom,
        minZoom: mapMinZoom,
        crs: L.CRS.Simple,
      }).setView([0, 0], mapMaxZoom)

      const mapBounds = new L.LatLngBounds(
        this.mapContainer.unproject([0, 4864], mapMaxZoom),
        this.mapContainer.unproject([5376, 0], mapMaxZoom)
      )
      this.mapContainer.fitBounds(mapBounds)

      this.layer = L.tileLayer(imgUrl, {
        minZoom: mapMinZoom,
        maxZoom: mapMaxZoom,
        bounds: mapBounds,
        attributionControl: false,
        noWrap: true,
        tms: false,
      }).addTo(this.mapContainer)
    })
  }

  onMount(cb) { if (typeof window !== undefined) cb(this.props.url) }

  render() {
    return (
      <div className={styles.main}>
        <div
          className={styles.mapContainer}
          id={MAP_ID}
        />
      </div>
    )
  }
}

MapTab.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
}

export default MapTab
