import React from 'react'

import styles from './DeepZoom.css'

const osdId = 'osd'

class DeepZoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.onMount(imgUrl => {
      const OpenSeaDragon = require('openseadragon')

      this.setState({
        viewer: OpenSeaDragon({
          element: this[osdId],
          prefixUrl: '/static/images/dzi-controls/',
          tileSources: imgUrl,
          maxZoomPixelRatio: Infinity,
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
      <div
        ref={elm => { this[osdId] = elm }}
        className={styles.holder}
      />
    )
  }
}

DeepZoom.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default DeepZoom
