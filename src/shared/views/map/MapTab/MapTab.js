import React from 'react'
import FontIcon from 'react-toolbox/lib/font_icon'

import styles from './mapTab.css'

const OSD_ID = 'osd'
const MAIN_ID = 'osd-wrapper'
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
    this.state = { hasFullscreenEnabled: false, isFs: false }
  }

  componentDidMount() {
    this.onMount(imgUrl => {
      const OpenSeaDragon = require('openseadragon')

      this.viewer = OpenSeaDragon({
        element: this[OSD_ID],
        tileSources: imgUrl,
        debugMode: process.env.DEBUG,
        debugGridColor: 'crimson',
        maxZoomPixelRatio: Infinity,
        showFullPageControl: false,
        homeButton: CTRL_IDS.REFRESH,
        zoomInButton: CTRL_IDS.ZOOM_IN,
        zoomOutButton: CTRL_IDS.ZOOM_OUT,
      })

      this.screenfull = require('screenfull')

      if (this.screenfull.enabled) this.setState({ hasFullscreenEnabled: true })
    })
  }

  onMount(cb) { if (typeof window !== undefined) cb(this.props.url) }

  toggleFullscreen(e) {
    e.preventDefault()
    this.screenfull.toggle(this[MAIN_ID])
    this.setState({ isFs: this.screenfull.isFullscreen })
  }

  render() {
    const { isFs, hasFullscreenEnabled } = this.state
    return (
      <div
        id={MAIN_ID}
        className={styles.main}
        ref={elm => { this[MAIN_ID] = elm }}
      >
        <div className={styles.ctrlCommon}>
          <FontIcon id={CTRL_IDS.ZOOM_IN} className={styles.ctrlbtn} value={'add'} />
          <FontIcon id={CTRL_IDS.ZOOM_OUT} className={styles.ctrlbtn} value={'remove'} />
          <FontIcon id={CTRL_IDS.REFRESH} className={styles.ctrlbtn} value={'refresh'} />
          <FontIcon
            id={CTRL_IDS.FULLSCREEN}
            className={styles.ctrlbtn}
            value={isFs ? 'fullscreen_exit' : 'zoom_out_map'}
            onClick={this.toggleFullscreen.bind(this)}
            style={{ display: hasFullscreenEnabled ? 'initial' : 'none' }}
          />
        </div>
        <div
          className={styles.dzi}
          ref={elm => { this[OSD_ID] = elm }}
          style={{ height: isFs ? '100vh' : '83vh' }}
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
