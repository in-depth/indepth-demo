import React from 'react'
import FontIcon from 'react-toolbox/lib/font_icon'

import styles from './mapTab.css'

const OSD_ID = 'osd'
const CTRL_IDS = {
  ZOOM_IN: 'map-zoom-in',
  ZOOM_OUT: 'map-zoom-out',
  REFRESH: 'map-refresh',
  FULLSCREEN: 'map-fullscreen',
  LOCATION: 'map-location',
}

class MapTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.onMount(imgUrl => {
      const OpenSeaDragon = require('openseadragon')

      this.setState({
        viewer: OpenSeaDragon({
          element: this[OSD_ID],
          tileSources: imgUrl,
          debugMode: process.env.DEBUG,
          debugGridColor: 'crimson',
          maxZoomPixelRatio: Infinity,
          homeButton: CTRL_IDS.REFRESH,
          fullPageButton: CTRL_IDS.FULLSCREEN,
          zoomInButton: CTRL_IDS.ZOOM_IN,
          zoomOutButton: CTRL_IDS.ZOOM_OUT,
        }),
      })
    })
  }
  onMount(cb) {
    if (typeof window !== undefined) {
      cb(this.props.url)
    }
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.ctrlCommon}>
          <FontIcon id={CTRL_IDS.ZOOM_IN} className={styles.ctrlbtn} value={'add'} />
          <FontIcon id={CTRL_IDS.ZOOM_OUT} className={styles.ctrlbtn} value={'remove'} />
          <FontIcon id={CTRL_IDS.REFRESH} className={styles.ctrlbtn} value={'refresh'} />
          <FontIcon id={CTRL_IDS.FULLSCREEN} className={styles.ctrlbtn} value={'zoom_out_map'} />
        </div>
        <div
          className={styles.dzi}
          ref={elm => { this[OSD_ID] = elm }}
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
