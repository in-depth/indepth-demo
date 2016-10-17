import React, { Component, PropTypes } from 'react'
import OpenSeaDragon from 'openseadragon'

import styles from './DeepZoom.css'

// const DeepZoom = (props) => {
//   return (
//     <div className={styles.holder}>
//       <iframe width="100%" height="100%" src={props.url} frameBorder="0" allowFullScreen />
//     </div>
//   )
// }

const osdId = 'osd'

class DeepZoom extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.onMount(imgUrl => {
      this.setState({
        viewer: OpenSeaDragon({
          element: this[osdId],
          tileSources: imgUrl,
          maxZoomPixelRatio: Infinity,
        }),
      })
    })
  }

  onMount(cb) { cb(this.props.url) }

  render() {
    console.log(this.state.viewer)
    return (
      <div
        ref={elm => { this[osdId] = elm }}
        className={styles.holder}
      />
    )
  }
}

export default DeepZoom
